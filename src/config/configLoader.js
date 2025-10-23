const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Default configuration
 */
const DEFAULT_CONFIG = {
  version: 1,
  issue_patterns: [
    'Fixes #',
    'Closes #',
    'Resolves #',
    'Fix #',
    'Close #',
    'Resolve #'
  ],
  test_patterns: [
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
  ],
  comment: {
    enabled: true,
    template: 'default'
  },
  enforce_issue_link: false,
  enforce_test_changes: false
};

/**
 * Loads configuration from .tracelinker.yml or uses defaults
 */
async function loadConfig(configPath = '.tracelinker.yml') {
  try {
    // Check if config file exists
    if (!fs.existsSync(configPath)) {
      console.log(`Config file not found at ${configPath}, using defaults`);
      return DEFAULT_CONFIG;
    }

    // Read and parse YAML
    const fileContent = fs.readFileSync(configPath, 'utf8');
    const userConfig = yaml.load(fileContent) || {};

    // Merge with defaults
    const config = {
      ...DEFAULT_CONFIG,
      ...userConfig,
      comment: {
        ...DEFAULT_CONFIG.comment,
        ...(userConfig.comment || {})
      }
    };

    return config;
  } catch (error) {
    console.error(`Error loading config: ${error.message}`);
    return DEFAULT_CONFIG;
  }
}

module.exports = {
  loadConfig,
  DEFAULT_CONFIG
};

