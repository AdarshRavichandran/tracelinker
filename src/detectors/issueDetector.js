/**
 * Detects issue links in PR title and body
 * Supports patterns like: Fixes #123, Closes #456, Resolves #789
 */

function detectIssueLinks(title, body, patterns) {
  const text = `${title}\n${body || ''}`;
  const issueNumbers = new Set();

  // Default patterns if none provided
  const defaultPatterns = [
    'Fixes #',
    'Closes #',
    'Resolves #',
    'Fix #',
    'Close #',
    'Resolve #'
  ];

  const patternsToUse = patterns && patterns.length > 0 ? patterns : defaultPatterns;

  // For each pattern, find all issue numbers
  patternsToUse.forEach(pattern => {
    // Escape special regex characters in pattern
    const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Create regex to find pattern followed by numbers
    const regex = new RegExp(escapedPattern + '(\\d+)', 'gi');
    let match;

    while ((match = regex.exec(text)) !== null) {
      issueNumbers.add(parseInt(match[1], 10));
    }
  });

  return Array.from(issueNumbers).sort((a, b) => a - b);
}

module.exports = {
  detectIssueLinks
};

