# 🗺️ TraceLinker Roadmap

## Vision
Create the most developer-friendly, transparent, and lightweight traceability plugin for GitHub — 100% open-source and free for all.

---

## 📅 Phase Timeline (6 Months)

### Phase 1: MVP (Month 1) ✅ IN PROGRESS
**Objective:** Deliver core functionality for linking issues ↔ PRs ↔ files ↔ tests.

**Features:**
- ✅ Detect issue links (Fixes #123, etc.)
- ✅ Map changed files per PR
- ✅ Detect test files modified
- ✅ Post PR comment summary
- ✅ Config via .tracelinker.yml
- ✅ Lightweight GitHub Action (Node.js)

**Deliverables:**
- Single YAML-configurable Action
- Comprehensive documentation
- Demo repository
- Unit tests (70%+ coverage)

**Status:** 🚀 Ready for initial release

---

### Phase 2: Dashboard + Policy (Months 2-3)
**Objective:** Add visibility and team adoption.

**Features:**
- Optional merge-check to enforce issue linkage or test updates
- GitHub App tab with:
  - % of PRs with issue link
  - % with tests changed
  - Trend charts
- JSON API endpoint for metrics
- CI/CD logs showing summary

**Deliverables:**
- GitHub App (Probot-based)
- Dashboard UI (React + Tailwind)
- Metrics API
- Database schema (SQLite/Supabase)

**Status:** 📋 Planned

---

### Phase 3: Smart Suggestions + Visualization (Month 4)
**Objective:** Use basic AI/NLP to help when no links exist.

**Features:**
- Suggest probable issue ↔ commit pairs (text similarity)
- Visual graph: Issue → PR → Files → Tests
- Tag unlinked issues (missing-link, needs-test)
- Store link map locally (JSON in .tracelinker/ folder)

**Deliverables:**
- NLP service (Python FastAPI + sentence-transformers)
- Graph visualization component
- Link suggestion engine
- Local storage system

**Status:** 📋 Planned

---

### Phase 4: Integrations + Community (Month 5)
**Objective:** Extend collaboration & ecosystem adoption.

**Features:**
- Slack/Discord notifications
- Jira/Linear auto-linking
- CLI Tool (tracelinker stats)
- Export CSV/PDF reports
- Community badges
- "Good First Issue" labels

**Deliverables:**
- Slack/Discord integration
- Jira/Linear connectors
- CLI tool (npm package)
- Report generator
- Community guidelines

**Status:** 📋 Planned

---

### Phase 5: Open-Source Foundation (Month 6)
**Objective:** Ensure sustainability and visibility.

**Actions:**
- Register organization (tracelinker-org) on GitHub
- Publish docs on docs.tracelinker.dev
- CI pipeline with automated tests
- Publish npm package (@tracelinker/action)
- Submit to open-source showcases
- Monthly community calls

**Deliverables:**
- GitHub organization setup
- Documentation site (Docusaurus)
- npm package published
- Community infrastructure
- Marketing materials

**Status:** 📋 Planned

---

## 🎯 Current Focus

### Phase 1 Checklist
- [x] Core issue detection
- [x] File change mapping
- [x] Test file detection
- [x] PR comment generation
- [x] YAML configuration
- [x] GitHub Action setup
- [x] Unit tests
- [ ] Integration tests
- [ ] Documentation site
- [ ] Demo repository
- [ ] Initial release (v0.1.0)

---

## 🚀 Quick Wins (Next Steps)

1. **Integration Tests** – Test with real GitHub API
2. **Demo Repo** – Create example repository
3. **Documentation Site** – Deploy Docusaurus site
4. **Initial Release** – Publish v0.1.0 to npm
5. **Community Feedback** – Gather early adopter feedback

---

## 💡 Future Enhancements

- **Machine Learning:** Improve issue-commit matching
- **Custom Rules Engine:** Allow teams to define custom traceability rules
- **Webhook Support:** Real-time updates for external systems
- **Performance Metrics:** Track PR review time, merge time, etc.
- **Compliance Reports:** Generate audit-ready reports
- **Multi-language Support:** Support non-English issue patterns

---

## 🤝 Contributing

Want to help? Check out our [CONTRIBUTING.md](../CONTRIBUTING.md) guide!

**Good First Issues:** Look for issues tagged with `good-first-issue`

---

## 📞 Feedback

Have ideas or feedback? Open an issue or start a discussion!

- **GitHub Issues:** [Report bugs](https://github.com/tracelinker-org/tracelinker/issues)
- **Discussions:** [Share ideas](https://github.com/tracelinker-org/tracelinker/discussions)

---

**Last Updated:** January 2024

