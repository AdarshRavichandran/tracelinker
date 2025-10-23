# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial MVP release (Phase 1)
- Issue link detection (Fixes #, Closes #, Resolves #, etc.)
- Changed file mapping per PR
- Test file detection
- PR comment summary generation
- YAML configuration support (.tracelinker.yml)
- GitHub Action for automated traceability
- Comprehensive documentation
- Unit tests with 70%+ coverage
- ESLint and Prettier configuration
- CI/CD pipeline with GitHub Actions

### Planned
- Dashboard and metrics (Phase 2)
- Smart suggestions with NLP (Phase 3)
- Slack/Discord/Jira integrations (Phase 4)
- Open-source foundation setup (Phase 5)

## [0.1.0] - 2024-01-XX

### Added
- Initial MVP release
- Core traceability features
- GitHub Action
- Configuration system
- Documentation

---

## How to Update This File

When making changes, add them to the `[Unreleased]` section under the appropriate category:

- **Added** – New features
- **Changed** – Changes in existing functionality
- **Deprecated** – Soon-to-be removed features
- **Removed** – Removed features
- **Fixed** – Bug fixes
- **Security** – Security fixes

When releasing a new version, move the `[Unreleased]` section to a new version section with the date.

Example:
```markdown
## [0.2.0] - 2024-02-15

### Added
- Dashboard UI
- Metrics API

### Fixed
- Issue detection edge cases
```

