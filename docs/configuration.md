# Configuration Guide

TraceLinker works out-of-the-box with sensible defaults, but you can customize it with `.tracelinker.yml`.

## Quick Start

Create `.tracelinker.yml` in your repository root:

```yaml
version: 1

# Your custom configuration here
```

## Configuration Options

### `issue_patterns`

Array of patterns to detect issue links in PR title/body.

**Default:**
```yaml
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"
  - "Fix #"
  - "Close #"
  - "Resolve #"
```

**Example (custom patterns):**
```yaml
issue_patterns:
  - "Fixes #"
  - "Related to #"
  - "Issue #"
```

### `test_patterns`

Array of glob patterns to identify test files.

**Default:**
```yaml
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "**/*.test.ts"
  - "**/*.spec.ts"
  - "**/*.test.jsx"
  - "**/*.spec.jsx"
  - "**/*.test.tsx"
  - "**/*.spec.tsx"
  - "tests/**"
  - "test/**"
  - "__tests__/**"
```

**Example (custom patterns):**
```yaml
test_patterns:
  - "**/*.test.js"
  - "**/*.test.ts"
  - "cypress/**"
  - "e2e/**"
```

### `comment`

Configure PR comment behavior.

**Options:**
- `enabled` (boolean) – Enable/disable PR comments (default: `true`)
- `template` (string) – Comment template: `default`, `minimal`, or `detailed`

**Example:**
```yaml
comment:
  enabled: true
  template: "detailed"
```

#### Comment Templates

**`default`** (recommended)
```
🔗 TraceLinker Summary

✅ Linked Issues
- Fixes #123

📝 Changed Files (3)
- src/app.js
- src/utils.js
- config.js

✅ Tests Updated
- src/app.test.js

---
Status: ✅ All checks passed
```

**`minimal`**
```
🔗 TraceLinker: ✅ Issues linked (1) | ✅ Tests updated (1)
```

**`detailed`**
```
[default template + file-by-file breakdown table]
```

### `enforce_issue_link`

Fail PR checks if no issue link found.

**Default:** `false`

**Example:**
```yaml
enforce_issue_link: true
```

When enabled, PRs without issue links will fail status checks.

### `enforce_test_changes`

Fail PR checks if no test files changed.

**Default:** `false`

**Example:**
```yaml
enforce_test_changes: true
```

When enabled, PRs without test file changes will fail status checks.

## Complete Example

```yaml
version: 1

# Detect these issue link patterns
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"
  - "Related to #"

# Identify these as test files
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "**/*.test.ts"
  - "**/*.spec.ts"
  - "tests/**"
  - "cypress/**"
  - "e2e/**"

# PR comment settings
comment:
  enabled: true
  template: "default"

# Enforcement rules
enforce_issue_link: false
enforce_test_changes: false
```

## GitHub Action Inputs

You can also override config via GitHub Action inputs:

```yaml
- uses: tracelinker-org/tracelinker@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    config-path: '.tracelinker.yml'
    comment-enabled: 'true'
    enforce-issue-link: 'false'
    enforce-test-changes: 'false'
```

## Tips & Best Practices

### 1. Start with Defaults
Use default configuration first. Customize only if needed.

### 2. Enforce Gradually
Start with `enforce_issue_link: false` and `enforce_test_changes: false`. Enable enforcement after team adoption.

### 3. Use Meaningful Patterns
Customize patterns to match your team's conventions:
```yaml
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"
  - "Addresses #"
  - "Implements #"
```

### 4. Include All Test Directories
Make sure to include all test directories your team uses:
```yaml
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "tests/**"
  - "test/**"
  - "__tests__/**"
  - "cypress/**"
  - "e2e/**"
```

### 5. Use Minimal Template for Busy Teams
If your team prefers concise comments:
```yaml
comment:
  template: "minimal"
```

## Troubleshooting

### Issue links not detected?
- Check pattern spelling (case-sensitive)
- Verify issue numbers are in PR title or body
- Test with: `Fixes #123`

### Test files not detected?
- Verify glob patterns match your file structure
- Test patterns locally: `npm test -- --testPathPattern="pattern"`

### Comment not posting?
- Ensure `comment.enabled: true`
- Check GitHub token has `issues:write` permission

---

**Need help?** Open an issue: [GitHub Issues](https://github.com/tracelinker-org/tracelinker/issues)

