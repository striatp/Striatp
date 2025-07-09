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
  </ul>
</div>

- [What is @tryforge/cli?](#what-is-tryforgecli)
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

<!-- What is a CLI? -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>What is a CLI?</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">A CLI, or Command Line Interface, is a text-based interface that allows users to interact with a computer or software application using commands and instructions. It is a powerful tool that can help you automate repetitive tasks, manage files and directories, and perform other tasks that would otherwise require manual intervention.</p>

<br/>

---

<br/>

<!-- Why use a CLI? -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Why Use a CLI?</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Using a CLI can help you automate repetitive tasks, manage files and directories, and perform other tasks that would otherwise require manual intervention. It can also help you save time and reduce errors by providing consistent, repeatable commands that execute the same way every time.</p>

<br/>

---

<br/>

<!-- What is ForgeCLI? -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>What is @tryforge/cli?</strong></h2>
    </summary>
  </ul>
</div>

<p align="center"><code>@tryforge/cli</code> is the official command-line interface for developers working with <strong>ForgeScript</strong>, the powerful framework used in the BotForge ecosystem. Whether you're scaffolding a new bot, creating commands, checking your code's quality, automating tasks, linting your code, formatting your code, or fetching documentation, this CLI helps you save time, reduce boilerplate, and automate repetitive tasks.</p>

<br/>

---

<br/>

<!-- Key Features -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Key Features</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">
  <strong>🚀 Project scaffolding & setup</strong><br/>
  <strong>📝 ForgeScript snippet generators</strong><br/>
  <strong>🔍 Linting, formatting & validation tools</strong><br/>
  <strong>⚙️ Automation utilities</strong><br/>
  <strong>🔒 Secure workflow support</strong><br/>
  <strong>🛠️ Config & environment managers</strong><br/>
  <strong>💬 Interactive prompts with Clack</strong><br/>
  <strong>📦 Built-in version checker</strong>
</p>

<br/>

---

<br/>

<!-- Installation -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Installation</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Install the CLI globally using your preferred package manager:</p>

```bash
# Using npm
npm install -g @tryforge/cli

# Using yarn
yarn global add @tryforge/cli

# Using pnpm
pnpm add -g @tryforge/cli
```

<p align="center">Verify the installation:</p>

```bash
forge --version
```

<br/>

---

<br/>

<!-- Quick Start -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Quick Start</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Get started with your first ForgeScript project in seconds:</p>

```bash
# Create a new project
forge create my-bot

# Navigate to project directory
cd my-bot

# Generate a new command
forge generate command ping

# Start development server
forge dev

# Build for production
forge build
```

<br/>

---

<br/>

<!-- Commands -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Commands</strong></h2>
    </summary>
  </ul>
</div>

### Project Management

<p align="center">Manage your ForgeScript projects with ease:</p>

```bash
# Create a new project
forge create <project-name>

# Initialize in existing directory
forge init

# Add dependencies
forge add <package-name>

# Remove dependencies
forge remove <package-name>

# Update project dependencies
forge update
```

### Code Generation

<p align="center">Generate ForgeScript code snippets and boilerplate:</p>

```bash
# Generate a new command
forge generate command <command-name>

# Generate an event handler
forge generate event <event-name>

# Generate a middleware
forge generate middleware <middleware-name>

# Generate a plugin
forge generate plugin <plugin-name>

# Generate a service
forge generate service <service-name>
```

### Development Tools

<p align="center">Enhance your development workflow:</p>

```bash
# Start development server with hot reload
forge dev

# Run linting checks
forge lint

# Format code
forge format

# Run tests
forge test

# Type checking
forge check

# Validate ForgeScript syntax
forge validate
```

### Deployment

<p align="center">Deploy your bot to various platforms:</p>

```bash
# Build for production
forge build

# Deploy to platform
forge deploy <platform>

# Generate deployment configs
forge deploy:config

# Check deployment status
forge deploy:status
```

<br/>

---

<br/>

<!-- Configuration -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Configuration</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Configure the CLI to match your workflow preferences:</p>

```bash
# View current configuration
forge config

# Set configuration values
forge config set <key> <value>

# Get specific configuration
forge config get <key>

# Reset configuration to defaults
forge config reset
```

<p align="center">Configuration file (<code>forge.config.js</code>):</p>

```javascript
module.exports = {
  // Project settings
  project: {
    name: 'my-bot',
    version: '1.0.0',
    author: 'Your Name'
  },
  
  // Build settings
  build: {
    outDir: 'dist',
    target: 'node18',
    minify: true
  },
  
  // Development settings
  dev: {
    port: 3000,
    hotReload: true,
    watchFiles: ['src/**/*.js']
  },
  
  // Linting settings
  lint: {
    rules: 'recommended',
    ignorePatterns: ['node_modules/**', 'dist/**']
  }
};
```

<br/>

---

<br/>

<!-- Use Cases -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Use Cases</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">
  <strong>🤖 Bot Development</strong><br/>
  Rapidly scaffold Discord bots with ForgeScript integration<br/><br/>
  
  <strong>🔧 Code Automation</strong><br/>
  Generate repetitive code structures and maintain consistency<br/><br/>
  
  <strong>🚀 CI/CD Integration</strong><br/>
  Integrate with build pipelines and deployment workflows<br/><br/>
  
  <strong>📚 Learning & Education</strong><br/>
  Explore ForgeScript features through interactive templates<br/><br/>
  
  <strong>🏢 Team Development</strong><br/>
  Standardize development practices across team members<br/><br/>
  
  <strong>🔍 Code Quality</strong><br/>
  Maintain high code standards with built-in linting and formatting
</p>

<br/>

---

<br/>

<!-- How It Works -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>How It Works</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">The CLI operates through a modular architecture that provides:</p>

<p align="center">
  <strong>📁 Template System</strong><br/>
  Pre-built templates for common ForgeScript patterns and structures<br/><br/>
  
  <strong>🔌 Plugin Architecture</strong><br/>
  Extensible system for adding custom commands and functionality<br/><br/>
  
  <strong>⚡ Fast Execution</strong><br/>
  Optimized command processing with minimal startup time<br/><br/>
  
  <strong>🎯 Smart Defaults</strong><br/>
  Intelligent configuration that adapts to your project structure<br/><br/>
  
  <strong>🔄 Live Updates</strong><br/>
  Automatic updates and version management for seamless upgrades
</p>

<br/>

---

<br/>

<!-- Benefits -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Benefits</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">
  <strong>⏱️ Time Savings</strong><br/>
  Reduce development time by 60% with automated scaffolding<br/><br/>
  
  <strong>🎯 Consistency</strong><br/>
  Maintain uniform code structure across all projects<br/><br/>
  
  <strong>🛡️ Error Prevention</strong><br/>
  Built-in validation prevents common configuration mistakes<br/><br/>
  
  <strong>📈 Productivity</strong><br/>
  Focus on logic, not boilerplate code generation<br/><br/>
  
  <strong>🔧 Flexibility</strong><br/>
  Customize templates and commands to match your workflow<br/><br/>
  
  <strong>🌟 Quality</strong><br/>
  Enforced best practices and code standards
</p>

<br/>

---

<br/>

<!-- Project History -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Project History</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">
  <strong>2023</strong> - Initial concept and development began<br/>
  <strong>2024</strong> - First stable release with core features<br/>
  <strong>2025</strong> - Enhanced automation and plugin system<br/>
  <strong>Future</strong> - AI-powered code generation and advanced workflows
</p>

<br/>

---

<br/>

<!-- Roadmap -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Roadmap</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">
  <strong>🚀 v2.0 - Q2 2025</strong><br/>
  AI-powered code generation and smart suggestions<br/><br/>
  
  <strong>🎯 v2.1 - Q3 2025</strong><br/>
  Advanced debugging tools and performance profiling<br/><br/>
  
  <strong>🔧 v2.2 - Q4 2025</strong><br/>
  Cloud deployment integration and scaling tools<br/><br/>
  
  <strong>🌟 v3.0 - 2026</strong><br/>
  Visual development interface and drag-drop builder
</p>

<br/>

---

<br/>

<!-- Code Style -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Code Style</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">We maintain consistent code quality through automated tooling:</p>

<p align="center">
  <strong>🔍 ESLint</strong> - Static code analysis and error detection<br/>
  <strong>💅 Prettier</strong> - Automatic code formatting<br/>
  <strong>🪝 Pre-commit hooks</strong> - Automated quality checks<br/>
  <strong>📏 Style Guidelines</strong> - Consistent coding standards
</p>

<p align="center">Our style guidelines:</p>

<p align="center">
  <strong>Indentation:</strong> 2 spaces<br/>
  <strong>Quotes:</strong> Single quotes for strings<br/>
  <strong>Semicolons:</strong> Required at statement end<br/>
  <strong>Line length:</strong> Maximum 100 characters<br/>
  <strong>Naming:</strong> camelCase for variables, PascalCase for classes
</p>

<br/>

---

<br/>

<!-- Contributing -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Contributing</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">We welcome contributions from the community! Here's how you can help:</p>

<p align="center">
  <strong>🐛 Bug Reports</strong><br/>
  Found a bug? Open an issue with detailed reproduction steps<br/><br/>
  
  <strong>💡 Feature Requests</strong><br/>
  Have an idea? Share it in our GitHub discussions<br/><br/>
  
  <strong>📝 Documentation</strong><br/>
  Help improve our docs and examples<br/><br/>
  
  <strong>🛠️ Code Contributions</strong><br/>
  Submit pull requests for bug fixes and new features
</p>

<p align="center">Before contributing, please read our <a href="./CONTRIBUTING.md">Contributing Guide</a> for detailed instructions on the development process, coding standards, and pull request guidelines.</p>

<br/>

---

<br/>

<!-- Team -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Team</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Meet the team behind @tryforge/cli:</p>

<p align="center">
  <strong>🚀 Core Maintainers</strong><br/>
  The dedicated team ensuring project quality and direction<br/><br/>
  
  <strong>🌟 Contributors</strong><br/>
  Amazing developers who help improve the project<br/><br/>
  
  <strong>🤝 Community</strong><br/>
  Active users providing feedback and support
</p>

<p align="center">View our complete <a href="https://github.com/tryforge/CLI/graphs/contributors">contributor list</a> on GitHub.</p>

<br/>

---

<br/>

<!-- Versioning -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Versioning</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">We use <a href="https://semver.org/">Semantic Versioning</a> for clear and predictable releases:</p>

<p align="center">
  <strong>🔴 Major (x.0.0)</strong><br/>
  Breaking changes that require migration<br/><br/>
  
  <strong>🟡 Minor (0.x.0)</strong><br/>
  New features that are backward compatible<br/><br/>
  
  <strong>🟢 Patch (0.0.x)</strong><br/>
  Bug fixes and small improvements
</p>

<p align="center">Check our <a href="https://github.com/tryforge/CLI/releases">release notes</a> for detailed change information.</p>

<br/>

---

<br/>

<!-- License -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>License</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">This project is licensed under the <strong>GPL-3.0 License</strong>.</p>

<p align="center">This means you can:</p>

<p align="center">
  <strong>✅ Use</strong> - For personal and commercial projects<br/>
  <strong>✅ Modify</strong> - Change the source code to fit your needs<br/>
  <strong>✅ Distribute</strong> - Share the original or modified versions<br/>
  <strong>✅ Patent Grant</strong> - Use any patents held by contributors
</p>

<p align="center">With the following requirements:</p>

<p align="center">
  <strong>📋 License Notice</strong> - Include the original license<br/>
  <strong>🔍 Source Code</strong> - Make source code available<br/>
  <strong>📝 State Changes</strong> - Document any modifications<br/>
  <strong>🔒 Same License</strong> - Distribute under the same license
</p>

<p align="center">See the <a href="LICENSE">LICENSE</a> file for full details.</p>

<br/>

---

<br/>

<!-- Support -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Support</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">Need help? We're here to support you:</p>

<p align="center">
  <strong>💬 Discord Community</strong><br/>
  Join our <a href="https://discord.gg/2kwueME2sj">Discord server</a> for real-time help and discussions<br/><br/>
  
  <strong>📚 Documentation</strong><br/>
  Comprehensive guides and API reference available<br/><br/>
  
  <strong>🐛 GitHub Issues</strong><br/>
  Report bugs and request features on our <a href="https://github.com/tryforge/CLI/issues">GitHub repository</a><br/><br/>
  
  <strong>💡 Discussions</strong><br/>
  Share ideas and ask questions in <a href="https://github.com/tryforge/CLI/discussions">GitHub Discussions</a>
</p>

<p align="center">
  <strong>Response Times:</strong><br/>
  Discord: Usually within hours<br/>
  GitHub Issues: 1-3 business days<br/>
  Feature Requests: 1-2 weeks
</p>

<br/>

---

<br/>

<!-- Code of Conduct -->
<div id="user-content-toc">
  <ul align="center" style="list-style: none; padding: 0; margin: 0;">
    <summary>
      <h2><strong>Code of Conduct</strong></h2>
    </summary>
  </ul>
</div>

<p align="center">We are committed to fostering a welcoming and inclusive community for everyone.</p>

<p align="center">
  <strong>🤝 Be Respectful</strong><br/>
  Treat all community members with respect and kindness<br/><br/>
  
  <strong>🌍 Be Inclusive</strong><br/>
  Welcome people of all backgrounds and experience levels<br/><br/>
  
  <strong>🎯 Be Constructive</strong><br/>
  Provide helpful feedback and constructive criticism<br/><br/>
  
  <strong>📚 Be Patient</strong><br/>
  Help newcomers learn and grow in the community
</p>

<p align="center">By participating in this project, you agree to abide by our <a href="./CODE_OF_CONDUCT.md">Code of Conduct</a>.</p>

<br/>

---

<br/>

<p align="center">
  <strong>Made with ❤️ by the ForgeScript community</strong><br/>
  <a href="https://github.com/tryforge/CLI">⭐ Star us on GitHub</a> • 
  <a href="https://discord.gg/2kwueME2sj">💬 Join our Discord</a> • 
  <a href="https://npmjs.org/package/@tryforge/cli">📦 View on NPM</a>
</p>

<br/>

---

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Built%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Built with TypeScript" />
  <img src="https://img.shields.io/badge/Powered%20by-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Powered by Node.js" />
  <img src="https://img.shields.io/badge/UI%20by-Clack-FF6B6B?style=for-the-badge" alt="UI by Clack" />
</p>
