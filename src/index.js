const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { detectIssueLinks } = require('./detectors/issueDetector');
const { getChangedFiles, getTestFiles } = require('./detectors/fileDetector');
const { generateComment } = require('./generators/commentGenerator');
const { loadConfig } = require('./config/configLoader');

async function run() {
  try {
    // Get inputs
    const token = core.getInput('github-token');
    const configPath = core.getInput('config-path');
    const commentEnabled = core.getInput('comment-enabled') === 'true';
    const enforceIssueLink = core.getInput('enforce-issue-link') === 'true';
    const enforceTestChanges = core.getInput('enforce-test-changes') === 'true';

    // Initialize GitHub client
    const octokit = github.getOctokit(token);
    const context = github.context;

    // Only run on pull requests
    if (context.eventName !== 'pull_request') {
      core.info('Not a pull request event, skipping TraceLinker');
      return;
    }

    const pr = context.payload.pull_request;
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const prNumber = pr.number;

    core.info(`Processing PR #${prNumber} in ${owner}/${repo}`);

    // Load configuration
    const config = await loadConfig(configPath);
    core.debug(`Config loaded: ${JSON.stringify(config)}`);

    // Detect issue links
    const issueLinks = detectIssueLinks(pr.title, pr.body, config.issue_patterns);
    core.info(`Found ${issueLinks.length} linked issues: ${issueLinks.join(', ')}`);

    // Get changed files
    const changedFiles = await getChangedFiles(octokit, owner, repo, prNumber);
    core.info(`Found ${changedFiles.length} changed files`);

    // Detect test files
    const testFiles = getTestFiles(changedFiles, config.test_patterns);
    core.info(`Found ${testFiles.length} test files changed`);

    // Generate summary
    const summary = {
      pr_number: prNumber,
      linked_issues: issueLinks,
      changed_files: changedFiles,
      test_files: testFiles,
      has_issue_link: issueLinks.length > 0,
      has_test_changes: testFiles.length > 0,
      timestamp: new Date().toISOString()
    };

    // Set outputs
    core.setOutput('summary', JSON.stringify(summary));
    core.setOutput('linked-issues', issueLinks.join(','));
    core.setOutput('changed-files', changedFiles.join(','));
    core.setOutput('test-files-changed', testFiles.join(','));

    // Check enforcement rules
    let status = 'success';
    const failures = [];

    if (enforceIssueLink && !summary.has_issue_link) {
      failures.push('No issue link found');
      status = 'failure';
    }

    if (enforceTestChanges && !summary.has_test_changes) {
      failures.push('No test files changed');
      status = 'failure';
    }

    core.setOutput('status', status);

    // Post comment if enabled
    if (commentEnabled) {
      const comment = generateComment(summary, config.comment);
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: comment
      });
      core.info('Posted TraceLinker comment');
    }

    // Fail if enforcement rules violated
    if (status === 'failure') {
      core.setFailed(`TraceLinker checks failed: ${failures.join(', ')}`);
    } else {
      core.info('✅ TraceLinker checks passed');
    }

  } catch (error) {
    core.setFailed(`TraceLinker error: ${error.message}`);
  }
}

run();

