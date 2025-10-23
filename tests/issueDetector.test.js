const { detectIssueLinks } = require('../src/detectors/issueDetector');

describe('Issue Detector', () => {
  test('detects single issue link', () => {
    const title = 'Fix bug';
    const body = 'Fixes #123';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([123]);
  });

  test('detects multiple issue links', () => {
    const title = 'Fix multiple bugs';
    const body = 'Fixes #123\nCloses #456\nResolves #789';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([123, 456, 789]);
  });

  test('detects issue links in title', () => {
    const title = 'Fixes #100 - Add feature';
    const body = '';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([100]);
  });

  test('handles duplicate issue links', () => {
    const title = 'Fixes #123';
    const body = 'Fixes #123 again';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([123]);
  });

  test('returns empty array when no issues found', () => {
    const title = 'Add feature';
    const body = 'This is a great feature';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([]);
  });

  test('respects custom patterns', () => {
    const title = 'Related to issue #999';
    const body = '';
    const patterns = ['Related to issue #'];
    const result = detectIssueLinks(title, body, patterns);
    expect(result).toEqual([999]);
  });

  test('sorts issue numbers', () => {
    const title = '';
    const body = 'Fixes #999\nCloses #111\nResolves #555';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([111, 555, 999]);
  });

  test('handles case-insensitive patterns', () => {
    const title = '';
    const body = 'FIXES #123\nfixes #456';
    const result = detectIssueLinks(title, body);
    expect(result).toEqual([123, 456]);
  });
});

