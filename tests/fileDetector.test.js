const { getTestFiles } = require('../src/detectors/fileDetector');

describe('File Detector', () => {
  test('detects .test.js files', () => {
    const files = ['src/app.js', 'src/app.test.js', 'src/utils.js'];
    const result = getTestFiles(files);
    expect(result).toEqual(['src/app.test.js']);
  });

  test('detects .spec.js files', () => {
    const files = ['src/app.js', 'src/app.spec.js'];
    const result = getTestFiles(files);
    expect(result).toEqual(['src/app.spec.js']);
  });

  test('detects TypeScript test files', () => {
    const files = ['src/app.ts', 'src/app.test.ts', 'src/app.spec.tsx'];
    const result = getTestFiles(files);
    expect(result).toEqual(['src/app.test.ts', 'src/app.spec.tsx']);
  });

  test('detects files in tests directory', () => {
    const files = ['src/app.js', 'tests/app.js', 'tests/utils.js'];
    const result = getTestFiles(files);
    expect(result).toEqual(['tests/app.js', 'tests/utils.js']);
  });

  test('detects files in __tests__ directory', () => {
    const files = ['src/app.js', '__tests__/app.js'];
    const result = getTestFiles(files);
    expect(result).toEqual(['__tests__/app.js']);
  });

  test('respects custom patterns', () => {
    const files = ['src/app.js', 'src/app.integration.js'];
    const patterns = ['**/*.integration.js'];
    const result = getTestFiles(files, patterns);
    expect(result).toEqual(['src/app.integration.js']);
  });

  test('returns empty array when no test files found', () => {
    const files = ['src/app.js', 'src/utils.js', 'src/config.js'];
    const result = getTestFiles(files);
    expect(result).toEqual([]);
  });

  test('handles multiple test file types', () => {
    const files = [
      'src/app.js',
      'src/app.test.js',
      'tests/utils.js',
      'src/config.spec.ts',
      '__tests__/integration.js'
    ];
    const result = getTestFiles(files);
    expect(result).toEqual([
      'src/app.test.js',
      'tests/utils.js',
      'src/config.spec.ts',
      '__tests__/integration.js'
    ]);
  });
});

