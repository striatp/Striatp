<!-- Logo -->
<p align="center">
  <img src="./assets/icon/cli.svg" alt="ForgeCLI Logo" width="180" />
</p>

<!-- Title -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h1><strong>@tryforge/cli</strong></h1>
    </summary>
  </ul>
</div>

<!-- Tagline -->
<p align="center"><strong>The all-in-one command-line toolkit for ForgeScript developers.</strong></p>

<!-- Short Description -->
<p align="center">
  Build, manage, and scale modern ForgeScript-based bots and workflows with ease.  
  <br />
  From project scaffolding to advanced automation, your all in one CLI.
</p>

<!-- Badges -->
<p align="center">
  <!-- Discord Server -->
  <a href="https://discord.gg/2kwueME2sj">
    <img src="https://img.shields.io/discord/997899472610795580?style=for-the-badge&logo=discord&logoColor=white&label=Community&color=090A16" alt="Discord Community Server">
  </a>
  <!-- NPM Registry -->
  <a href="https://npmjs.org/package/@tryforge/cli"><img src="https://img.shields.io/github/package-json/v/tryforge/CLI?label=@tryforge/cli&color=090A16&style=for-the-badge&logo=npm" alt="@tryforge/cli"></a>
  <!-- License -->
  <a href="https://github.com/tryforge/CLI/blob/main/LICENSE"><img src="https://img.shields.io/github/license/tryforge/CLI?style=for-the-badge&logo=github&logoColor=white&label=License&color=090A16" alt="License"/></a>
</p>

<br/>

---

<br/>

<div id="user-content-toc">
  <ul style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Table of Contents</strong></h2>
    </summary>
    <li><a href="#what-is-tryforgecli">What is @tryforge/cli?</a></li>
    <li><a href="#why-use-a-cli">Why Use a CLI?</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#github-actions">GitHub Actions</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#quick-start">Quick Start</a></li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#use-cases">Use Cases</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#benefits">Benefits</a></li>
    <li><a href="#project-history">Project History</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#code-style">Code Style</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#versioning">Versioning</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#code-of-conduct">Code of Conduct</a></li>
  </ul>
</div>

- [What is @tryforge/cli?](#github-actions)
- [Why Use a CLI?](#why-use-a-cli)
- [Key Features](#key-features)
- [GitHub Actions](#github-actions)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Commands](#commands)
  - [Project Management](#project-management)
  - [Code Generation](#code-generation)
  - [Development Tools](#development-tools)
  - [Deployment](#deployment)
- [Configuration](#configuration)
- [Use Cases](#use-cases)
- [How It Works](#how-it-works)
- [Benefits](#benefits)
- [Project History](#project-history)
- [Roadmap](#roadmap)
- [Code Style](#code-style)
- [Contributing](#contributing)
- [Team](#team)
- [Versioning](#versioning)
- [License](#license)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)

<br/>

---

<br/>

<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>GitHub Actions</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Our CI/CD pipeline ensures code quality and reliability through automated
testing, linting, and security checks on every commit and pull request.</p>

<p align="center">
  <!-- Linting -->
  <a href="https://github.com/tryforge/CLI/actions/workflows/linter.yml">
    <img alt="Linting Status" src="https://img.shields.io/github/actions/workflow/status/tryforge/CLI/linter.yml?branch=main&label=Linting&logo=eslint&style=for-the-badge" />
  </a>
  <!-- Security -->
  <a href="https://github.com/tryforge/CLI/actions/workflows/security.yml">
    <img alt="Security Status" src="https://img.shields.io/github/actions/workflow/status/tryforge/CLI/security.yml?branch=main&label=Security&logo=checkmk&style=for-the-badge&logoColor=white" />
  </a>
  <!-- Tests -->
  <a href="https://github.com/tryforge/CLI/actions/workflows/test.yml">
    <img alt="Test Status" src="https://img.shields.io/github/actions/workflow/status/tryforge/CLI/test.yml?branch=main&label=Tests&logo=jest&style=for-the-badge" />
  </a>
</p>

<br/>

---

<br/>

<h2 align="center">What is a CLI?</h2>

<p align="center">A CLI, or Command Line Interface, is a text-based interface that allows users to interact with a computer or software application using commands and instructions. It is a powerful tool that can help you automate repetitive tasks, manage files and directories, and perform other tasks that would otherwise require manual intervention.</p>

<br/>

<h2 align="center">What is ForgeCLI?</h2>

<p align="center"><code>@tryforge/cli</code> is the official command-line interface for developers working with <strong>ForgeScript</strong>, the powerful framework used in the BotForge ecosystem. Whether you're scaffolding a new bot, creating commands, checking your code's quality, automating tasks, linting your code, formatting your code, or fetching documentation, this CLI helps you save time, reduce boilerplate, and automate repetitive tasks.</p>

<br/>

<h2 align="center">Key Features</h2>

<p align="center">- Project scaffolding & setup
- ForgeScript snippet generators
- Linting, formatting & validation tools
- Automation utilities
- Secure workflow support
- Config & environment managers
- Interactive prompts with Clack
- Built-in version checker

---

<!-- What is a CLI? -->
<!-- Why use a CLI? -->
<!-- What is ForgeCLI? -->
<!-- Features -->
<!-- Benefits -->
<!-- Use cases -->
<!-- How it works -->
<!-- Why ForgeCLI? -->
<!-- History -->
<!-- Roadmap -->
<!-- Team -->
<!-- License -->
<!-- Support -->
<!-- Contributing -->
<!-- Code of Conduct -->
<!-- Versioning -->

### Code Style

We use ESLint and Prettier for code style. The project includes pre-commit hooks
that run these tools automatically.

- Use 2 spaces for indentation
- Use single quotes
- Semicolons at the end of statements
- Max line length: 100 characters

## Contributing

We welcome contributions! Please read our
[Contributing Guide](./CONTRIBUTING.md) for details on how to contribute to this
project.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE)
file for details.

## Support

For support, please open an issue on GitHub or join our
[Discord community](https://discord.gg/2kwueME2sj).
