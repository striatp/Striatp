<!-- Logo -->
<p align="center">
  <img src="./assets/icon/cli.svg" alt="ForgeCLI Logo" width="180" />
</p>

<h1 align="center">@tryforge/cli</h1>

<p align="center">
  <strong>The official CLI tool for building, managing and scaling <code>ForgeScript</code> projects</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tryforge/cli">
    <img src="https://img.shields.io/npm/v/@tryforge/cli?color=blue&label=version&logo=npm" alt="NPM Version">
  </a>
  <a href="https://github.com/tryforge/CLI/"><img src="https://img.shields.io/github/package-json/v/striatp/forgecli/dev?label=@tryforge/cli&color=5c16d4" alt="@tryforge/cli"></a>
  <img src="https://img.shields.io/github/license/tryforge/forgescript" alt="License" />
</p>

---

## ✨ What is ForgeCLI?

> `@tryforge/cli` is a powerful and user-friendly Command Line Interface that helps developers bootstrap, organize, and maintain **ForgeScript** projects — the scripting language used in [BotForge](https://botforge.dev).

Whether you’re starting a new bot, organizing scripts, running tests, or releasing a package, ForgeCLI has your back.

---

## 🚀 Features

- 📦 Project bootstrapping (`forge init`)
- 📁 Folder & file scaffolding (`forge generate`)
- 🔁 Script previews & runtime emulation
- 🧪 Built-in support for running test cases
- 🔐 Token & secret manager for ForgeScript
- 📜 Project metadata extraction
- 🧰 Plugin system & custom script packs
- 📡 Update checker with version diffing
- 📄 Markdown & HTML output generators
- ✅ Typed config support (with validation)

---

## 📦 Installation

```bash
# Install globally
pnpm add -g @tryforge/cli
# or
npm install -g @tryforge/cli
````

---

## 📖 Usage

```bash
forge <command> [...options]
```

### Common Commands

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `forge init`     | Scaffold a new ForgeScript project       |
| `forge generate` | Create scripts, modules, configs, etc.   |
| `forge run`      | Run a script locally with context        |
| `forge version`  | Show current CLI version & check updates |
| `forge test`     | Run tests in `__tests__/` directory      |
| `forge clean`    | Delete build artifacts and metadata      |
| `forge config`   | Edit or validate CLI configuration       |
| `forge doc`      | Generate documentation (HTML/Markdown)   |

---

## 🧪 Running Tests

> ForgeCLI supports TypeScript-based tests inside `__tests__` folders.

```bash
forge test
```

---

## 🧠 Project Structure

```text
my-bot-project/
├─ scripts/
│  ├─ moderation.forge
│  └─ utils.forge
├─ tests/
│  └─ moderation.test.ts
├─ forge.config.ts
├─ package.json
└─ .forge/
   ├─ cache/
   ├─ metadata/
   └─ tokens/
```

---

## 📤 Releasing

To create a release:

```bash
pnpm version patch   # or major / minor
git push --follow-tags
```

Use GitHub Actions to publish to npm and create a GitHub release (configured in `.github/workflows/release.yml`).

---

## 💡 Contributing

We welcome PRs, ideas, and bug reports! Please:

* Follow our [Contribution Guide](./CONTRIBUTING.md)
* Use `pnpm install` for consistent dependency management
* Commit with [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📃 License

This project is licensed under the MIT License.

---

<p align="center">
  <img src="./assets/icon/cli.svg" alt="ForgeCLI Logo" width="80" />
</p>
<p align="center">
  <strong>@tryforge/cli – made with 💙 for the BotForge scripting community</strong>
</p>
