# ⚡ TraceLinker Quick Start

Get TraceLinker running in 5 minutes!

## 1️⃣ Add to Your Repository

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

## 2️⃣ (Optional) Configure

Create `.tracelinker.yml` in your repo root:

```yaml
version: 1

# Customize issue patterns
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"

# Customize test patterns
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "tests/**"

# Comment settings
comment:
  enabled: true
  template: "default"  # or "minimal", "detailed"

# Enforcement (optional)
enforce_issue_link: false
enforce_test_changes: false
```

## 3️⃣ Create a PR

Open a PR with an issue link:

```
Title: Fix authentication bug
Body: Fixes #123
```

## 4️⃣ See the Magic ✨

TraceLinker will automatically post a comment showing:
- ✅ Linked issues
- 📝 Changed files
- ✅ Test files modified

---

## 📋 Configuration Cheat Sheet

### Issue Patterns
```yaml
issue_patterns:
  - "Fixes #"
  - "Closes #"
  - "Resolves #"
  - "Related to #"
```

### Test Patterns
```yaml
test_patterns:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "**/*.test.ts"
  - "tests/**"
  - "cypress/**"
```

### Comment Templates
- `default` – Full summary (recommended)
- `minimal` – One-liner
- `detailed` – With file breakdown

### Enforcement Rules
```yaml
enforce_issue_link: true    # Fail if no issue link
enforce_test_changes: true  # Fail if no tests changed
```

---

## 🎯 Common Use Cases

### Enforce Issue Links
```yaml
enforce_issue_link: true
```
PRs without issue links will fail checks.

### Require Test Changes
```yaml
enforce_test_changes: true
```
PRs without test file changes will fail checks.

### Minimal Comments
```yaml
comment:
  template: "minimal"
```
Posts concise one-liner instead of full summary.

### Custom Issue Patterns
```yaml
issue_patterns:
  - "Fixes #"
  - "Implements #"
  - "Addresses #"
```

---

## 🐛 Troubleshooting

### Issue links not detected?
- Check PR title/body has `Fixes #123` format
- Verify issue number is correct
- Check `.tracelinker.yml` patterns

### Test files not detected?
- Verify file names match patterns
- Check glob syntax is correct
- Test locally: `npm test`

### Comment not posting?
- Ensure `comment.enabled: true`
- Check GitHub token has `issues:write` permission
- Check PR is not a draft

---

## 📚 Learn More

- **Full Docs:** [README.md](./README.md)
- **Configuration:** [docs/configuration.md](./docs/configuration.md)
- **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Roadmap:** [docs/ROADMAP.md](./docs/ROADMAP.md)

---

## 💡 Pro Tips

1. **Start Simple** – Use defaults first, customize later
2. **Gradual Enforcement** – Enable enforcement after team adoption
3. **Team Conventions** – Customize patterns to match your team's style
4. **Monitor Adoption** – Check PR comments to see traceability improving

---

## 🚀 Next Steps

1. Add workflow to your repo
2. Create a test PR with issue link
3. See TraceLinker in action
4. Customize `.tracelinker.yml` as needed
5. Share with your team!

---

**Questions?** Check [README.md](./README.md) or open an issue!

**Made with 🔗 by developers, for developers.**

