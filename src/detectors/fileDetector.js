const minimatch = require('minimatch');

/**
 * Gets all changed files in a PR
 */
async function getChangedFiles(octokit, owner, repo, prNumber) {
  try {
    const files = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await octokit.rest.pulls.listFiles({
        owner,
        repo,
        pull_number: prNumber,
        per_page: 100,
        page
      });

      files.push(...response.data.map(file => file.filename));

      hasMore = response.data.length === 100;
      page++;
    }

    return files;
  } catch (error) {
    console.error('Error fetching changed files:', error);
    return [];
  }
}

/**
 * Filters changed files to identify test files
 */
function getTestFiles(changedFiles, patterns) {
  const defaultPatterns = [
    '**/*.test.js',
    '**/*.spec.js',
    '**/*.test.ts',
    '**/*.spec.ts',
    '**/*.test.jsx',
    '**/*.spec.jsx',
    '**/*.test.tsx',
    '**/*.spec.tsx',
    'tests/**',
    'test/**',
    '__tests__/**'
  ];

  const patternsToUse = patterns && patterns.length > 0 ? patterns : defaultPatterns;

  const testFiles = changedFiles.filter(file => {
    return patternsToUse.some(pattern => minimatch(file, pattern));
  });

  return testFiles;
}

module.exports = {
  getChangedFiles,
  getTestFiles
};

