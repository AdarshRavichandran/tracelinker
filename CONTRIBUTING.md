# Contributing to TraceLinker

Thank you for your interest in contributing to TraceLinker! We're excited to have you join our community.

## 🎯 Our Values

- **Developer-First:** Everything we build should make developers' lives easier
- **Transparency:** Clear communication, open discussions, and honest feedback
- **Quality:** Well-tested, documented, and maintainable code
- **Inclusivity:** All contributions are welcome, regardless of experience level

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/tracelinker-org/tracelinker.git
cd tracelinker

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name
```

### Development Workflow

```bash
# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format

# Build the action
npm run build

# Test locally
npm run dev
```

## 📋 Types of Contributions

### 🐛 Bug Reports
Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

### ✨ Feature Requests
Have an idea? Open an issue with:
- Clear description of the feature
- Use case and motivation
- Proposed implementation (if you have ideas)
- Examples or mockups

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** with clear, descriptive commits
4. **Add/update tests** for your changes
5. **Run tests:** `npm test`
6. **Lint and format:** `npm run lint && npm run format`
7. **Push to your fork:** `git push origin feature/amazing-feature`
8. **Open a Pull Request** with a clear description

### 📚 Documentation
Help improve our docs! You can:
- Fix typos or unclear explanations
- Add examples or use cases
- Improve API documentation
- Create tutorials or guides

## 📝 Commit Guidelines

Use clear, descriptive commit messages:

```
feat: Add issue link detection for custom patterns
fix: Resolve race condition in file detection
docs: Update configuration guide
test: Add tests for comment generator
chore: Update dependencies
```

Format: `<type>: <description>`

Types: `feat`, `fix`, `docs`, `test`, `chore`, `refactor`, `perf`

## 🧪 Testing

All contributions must include tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📖 Code Style

We use ESLint and Prettier for code consistency:

```bash
# Check style
npm run lint

# Auto-fix style issues
npm run lint
npm run format
```

## 🔄 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass:** `npm test`
4. **Update CHANGELOG.md** with your changes
5. **Request review** from maintainers
6. **Address feedback** promptly

### PR Title Format
```
[Phase X] Feature/Fix: Brief description
```

Example: `[Phase 1] Fix: Improve issue link detection accuracy`

## 🎓 Learning Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [Jest Testing Framework](https://jestjs.io/)

## 💬 Questions?

- **GitHub Issues:** Ask in relevant issue threads
- **GitHub Discussions:** Start a discussion for broader topics
- **Email:** dev@tracelinker.dev

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making TraceLinker better! 🙏**

