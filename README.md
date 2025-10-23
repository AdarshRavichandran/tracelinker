# 🔗 TraceLinker

> **The most developer-friendly, transparent, and lightweight traceability plugin for GitHub.**
> 
> 100% open-source, free for all. No setup, no paywall.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/tracelinker-org/tracelinker?style=social)](https://github.com/tracelinker-org/tracelinker)
[![npm version](https://img.shields.io/npm/v/@tracelinker/action.svg)](https://www.npmjs.com/package/@tracelinker/action)

## 🎯 Mission

**TraceLinker helps developers understand how every issue turns into real code and tests.**

We believe engineering teams deserve transparency without friction. TraceLinker automatically links GitHub issues ↔ PRs ↔ files ↔ tests, giving you instant visibility into your codebase's traceability.

---

## ✨ Phase 1 Features (MVP)

- ✅ **Detect issue links** – Automatically finds `Fixes #123`, `Closes #456`, etc.
- ✅ **Map changed files** – Shows which files were modified per PR
- ✅ **Detect test files** – Identifies test files modified alongside code
- ✅ **PR comment summary** – Posts a traceability summary on every PR
- ✅ **YAML configuration** – Customize behavior via `.tracelinker.yml`
- ✅ **Lightweight GitHub Action** – Drop-in Node.js action, no external dependencies

---

## 🚀 Quick Start

### 1. Add to Your Repository

Create `.github/workflows/tracelinker.yml`:

```yaml
name: TraceLinker

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  tracelinker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: tracelinker-org/tracelinker@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

### 2. (Optional) Configure `.tracelinker.yml`

```yaml
# .tracelinker.yml
version: 1

# Issue link patterns to detect
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"

# Test file patterns
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "**/*.test.ts"
  - "**/*.spec.ts"
  - "tests/**"

# Comment settings
comment:
  enabled: true
  template: "default"  # or "minimal", "detailed"

# Fail PR if no issue link
enforce_issue_link: false

# Fail PR if no tests changed
enforce_test_changes: false
```

### 3. Done! 🎉

Every PR will now get a TraceLinker summary comment showing:
- Linked issues
- Changed files
- Test coverage status

---

## 📋 Configuration Reference

### `issue_patterns`
Array of regex patterns to detect issue links in PR title/body.

### `test_patterns`
Array of glob patterns to identify test files.

### `comment.template`
- `default` – Full summary with all details
- `minimal` – One-liner status
- `detailed` – Includes file-by-file breakdown

### `enforce_issue_link`
If `true`, PR checks fail if no issue is linked.

### `enforce_test_changes`
If `true`, PR checks fail if no test files are modified.

---

## 📊 Example PR Comment

```
🔗 TraceLinker Summary

✅ Linked Issues
  • Fixes #123 – Add user authentication
  • Closes #456 – Improve error handling

📝 Changed Files (8)
  • src/auth.js
  • src/middleware.js
  • config/secrets.js
  • ... 5 more

✅ Tests Updated
  • tests/auth.test.js
  • tests/middleware.test.js

Status: ✅ All checks passed
```

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
git clone https://github.com/tracelinker-org/tracelinker.git
cd tracelinker
npm install
```

### Run Tests

```bash
npm test
```

### Build Action

```bash
npm run build
```

### Local Testing

```bash
npm run test:action
```

---

## 📚 Documentation

- [Configuration Guide](./docs/configuration.md)
- [API Reference](./docs/api.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Roadmap](./docs/ROADMAP.md)

---

## 🤝 Contributing

We ❤️ contributions! Whether it's bug fixes, features, or documentation, all are welcome.

### Getting Started
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

MIT License – see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

Built with ❤️ by the open-source community.

**Sponsors & Partners:**
- GitHub (for the amazing platform)
- All contributors and early adopters

---

## 📞 Support & Community

- **Issues:** [GitHub Issues](https://github.com/tracelinker-org/tracelinker/issues)
- **Discussions:** [GitHub Discussions](https://github.com/tracelinker-org/tracelinker/discussions)
- **Slack:** [Join our community](https://tracelinker.dev/slack)

---

**Made with 🔗 by developers, for developers.**

