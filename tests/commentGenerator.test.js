const { generateComment } = require('../src/generators/commentGenerator');

describe('Comment Generator', () => {
  const mockSummary = {
    pr_number: 42,
    linked_issues: [123, 456],
    changed_files: ['src/app.js', 'src/utils.js', 'config.js'],
    test_files: ['src/app.test.js'],
    has_issue_link: true,
    has_test_changes: true,
    timestamp: '2024-01-01T00:00:00Z'
  };

  test('generates default comment', () => {
    const comment = generateComment(mockSummary);
    expect(comment).toContain('🔗 TraceLinker Summary');
    expect(comment).toContain('✅ Linked Issues');
    expect(comment).toContain('Fixes #123');
    expect(comment).toContain('Fixes #456');
    expect(comment).toContain('📝 Changed Files');
    expect(comment).toContain('✅ Tests Updated');
  });

  test('generates minimal comment', () => {
    const comment = generateComment(mockSummary, { template: 'minimal' });
    expect(comment).toContain('🔗 TraceLinker');
    expect(comment).toContain('✅ Issues linked (2)');
    expect(comment).toContain('✅ Tests updated (1)');
  });

  test('generates detailed comment', () => {
    const comment = generateComment(mockSummary, { template: 'detailed' });
    expect(comment).toContain('📊 File-by-File Breakdown');
    expect(comment).toContain('| File | Type |');
    expect(comment).toContain('🧪 Test');
    expect(comment).toContain('📝 Code');
  });

  test('handles missing issue links', () => {
    const summary = { ...mockSummary, linked_issues: [], has_issue_link: false };
    const comment = generateComment(summary);
    expect(comment).toContain('⚠️ Linked Issues');
    expect(comment).toContain('No issues linked');
  });

  test('handles missing test changes', () => {
    const summary = { ...mockSummary, test_files: [], has_test_changes: false };
    const comment = generateComment(summary);
    expect(comment).toContain('⚠️ Tests Updated');
    expect(comment).toContain('No test files changed');
  });

  test('truncates file list to 10 items', () => {
    const manyFiles = Array.from({ length: 15 }, (_, i) => `file${i}.js`);
    const summary = { ...mockSummary, changed_files: manyFiles };
    const comment = generateComment(summary);
    expect(comment).toContain('... and 5 more');
  });

  test('includes TraceLinker link in comment', () => {
    const comment = generateComment(mockSummary);
    expect(comment).toContain('TraceLinker');
    expect(comment).toContain('github.com/tracelinker-org/tracelinker');
  });
});

