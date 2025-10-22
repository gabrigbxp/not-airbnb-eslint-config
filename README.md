# not-airbnb-eslint-config

[![npm version](https://img.shields.io/npm/v/not-airbnb-eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/not-airbnb-eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/not-airbnb-eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/not-airbnb-eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![ESLint](https://img.shields.io/badge/ESLint-9.0+-4B32C3?style=flat-square&logo=eslint)](https://eslint.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-Integrated-F7B93E?style=flat-square&logo=prettier)](https://prettier.io/)

> **A modern, opinionated ESLint config for React + TypeScript projects**

This package extends and updates [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript), integrates seamlessly with [TypeScript ESLint](https://typescript-eslint.io/), and includes a battle-tested Prettier configuration for consistent code formatting.

## ✨ Features

- 🚀 **ESLint 9+** with Flat Config support
- 📘 **TypeScript** support out of the box
- ⚛️ **React** rules with hooks and a11y
- 💅 **Prettier** integration (no conflicts!)
- 🎯 **Zero config** - works immediately
- 🔧 **Customizable** - extend or override any rule
- 📦 **All dependencies included** - no peer dependency headaches

## 📋 Requirements

| Package | Version |
|---------|---------|
| Node.js | ≥ 16.0.0 |
| ESLint | ≥ 9.0.0 |
| Prettier | ≥ 3.0.0 *(optional)* |

## 🎯 Project Compatibility

### ✅ Fully Supported

Perfect for these project types:

- ✨ **React Applications** (CRA, custom setups)
- 🔷 **TypeScript Projects** (libraries, apps)
- ⚡ **Next.js** (App Router & Pages Router)
- 🚂 **Express.js** & Node.js servers
- 📚 **JavaScript Libraries** & packages

### ⚠️ Additional Setup May Be Needed

Works with additional configuration:

- 🔨 **Vite Projects** - may need file pattern adjustments
- 🔗 **Monorepos** - workspace-specific configs
- 📱 **React Native** - platform-specific tweaks
- ⚙️ **Custom Webpack** - tooling-specific rules

### ❌ Not Designed For

- **Vue.js** / **Angular** / **Svelte** (use framework-specific configs)
- **Legacy ES5** JavaScript

## 🚀 Quick Start

### 1. Install the package

```bash
npm install --save-dev not-airbnb-eslint-config eslint@^9.0.0
```

### 2. Create ESLint config

Create `eslint.config.js` (or `eslint.config.mjs`) in your project root:

```js
export { default } from "not-airbnb-eslint-config";
```

> ⚠️ **Important:** VS Code's ESLint extension currently has better support for `eslint.config.js`. If `eslint.config.mjs` is being ignored, rename it to `eslint.config.js` and ensure your `package.json` has `"type": "module"`.

### 3. Add scripts to package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --fix --ext .ts,.tsx"
  }
}
```

That's it! You're ready to lint. 🎉

## 📦 Usage Options

### Basic Usage

```js
export { default } from "not-airbnb-eslint-config";
```

### With Custom Rules

```js
import config from "not-airbnb-eslint-config";

export default [
  ...config,
  {
    rules: {
      // Your custom rules
      "no-console": "warn",
    },
  },
];
```

### All Rules (Including Style)

If you're **not using Prettier**, include style rules:

```js
export { default } from "not-airbnb-eslint-config/allrules";
```

### Cherry-Pick Rule Sets

Import only what you need:

```js
import {
  bestPractices,
  errors,
  react,
  reactHooks,
  typescriptCore,
} from "not-airbnb-eslint-config";

export default [
  bestPractices,
  errors,
  react,
  reactHooks,
  typescriptCore,
];
```

## 💅 Prettier Integration

### Setup Prettier

**1. Install Prettier**

```bash
npm install --save-dev prettier@^3.0.0
```

**2. Create `prettier.config.js`**

```js
export { default } from 'not-airbnb-eslint-config/prettier';
```

**3. (Optional) Extend with custom rules**

```js
import baseConfig from 'not-airbnb-eslint-config/prettier';

export default {
  ...baseConfig,
  semi: true,
  printWidth: 100,
};
```

## 🔧 VS Code Setup

### 1. Enable Flat Config

ESLint 9 uses a new "Flat Config" format. You might need to enable it in VS Code:

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Search for: `eslint flat`
3. Check: **"ESLint: Use Flat Config"**

💡 **Tip:** Enable this at workspace level for team consistency.

![Flat Config setting](./readme/flat-config.png)

> 📝 **Note:** If VS Code doesn't detect your config file, use `eslint.config.js` instead of `eslint.config.mjs`. The extension currently has better compatibility with `.js` files.

### 2. Configure Prettier (Optional)

Create `.vscode/settings.json` in your project:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

**Language-specific formatting:**

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 🔧 Inspecting Your Config

Launch the **ESLint Config Inspector** to see all active rules:

```bash
npm run inspect
```

This visual tool shows:
- 📋 All configured rules
- ⚙️ Rule options and severity
- 🔍 Which plugins are active

[Learn more about the inspector](./inspector.md)

## 🐛 Troubleshooting

### Flat Config Not Working

**Problem:** ESLint still looking for `.eslintrc`

**Solution:** 
1. Delete old `.eslintrc.*` files
2. Enable Flat Config in VS Code (see [VS Code Setup](#-vs-code-setup))
3. Restart VS Code

### VS Code Not Detecting Config File

**Problem:** VS Code ESLint extension ignores `eslint.config.mjs`

**Solution:** Rename to `eslint.config.js` and ensure `package.json` has:

```json
{
  "type": "module"
}
```

The VS Code ESLint extension currently has better support for `.js` files over `.mjs` files when using ESM. Both work from the command line, but VS Code may need the `.js` extension specifically.

### Plugin Conflicts

**Problem:** Rules conflict between ESLint and Prettier

**Solution:** This config includes `eslint-config-prettier` to disable conflicting rules. Make sure you're using the default export, not modifying core formatting rules.

### Getting Help

📝 **Open an issue:** [GitHub Issues](https://github.com/gabrigbxp/not-airbnb-eslint-config/issues)

Please include:
- Your project type (React, Next.js, etc.)
- `package.json` dependencies
- ESLint config file
- Error messages

## 📚 Available Exports

### Named Rule Sets

All available rule sets you can import individually:

| Export | Description |
|--------|-------------|
| `bestPractices` | JavaScript best practices |
| `errors` | Error detection rules |
| `es6` | ES6+ features |
| `imports` | Import/export rules |
| `node` | Node.js specific rules |
| `strict` | Strict mode rules |
| `variables` | Variable declaration rules |
| `style` | Formatting rules (use if not using Prettier) |
| `react` | React component rules |
| `reactA11y` | React accessibility rules |
| `reactHooks` | React Hooks rules |
| `typescriptCore` | TypeScript core rules |
| `typescriptVariables` | TypeScript variable rules |
| `typescriptBestPractices` | TypeScript best practices |

### Entry Points

| Import | What's Included |
|--------|-----------------|
| `not-airbnb-eslint-config` | All rules except `style` (Prettier handles formatting) |
| `not-airbnb-eslint-config/allrules` | **Everything** including style rules |
| `not-airbnb-eslint-config/prettier` | Prettier configuration |

### Example: Mix and Match

```js
import config, { style, react } from "not-airbnb-eslint-config";

export default [
  ...config,
  style, // Add style rules if not using Prettier
  {
    // Override specific React rules
    rules: {
      "react/prop-types": "off",
    },
  },
];
```

## 🤝 Contributing

Contributions are welcome! Please check out the [contribution guidelines](./CONTRIBUTING.md).

### Useful Resources

- [ESLint Rules Reference](https://eslint.org/docs/latest/rules)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules) (Node.js rules)
- [ESLint Stylistic](https://eslint.style/rules) (formatting rules)
- [TypeScript ESLint](https://typescript-eslint.io/rules/)

## 📄 License

[MIT](./LICENSE) © Gabriel Gustavo Scocozza

---

<div align="center">

**[⭐ Star on GitHub](https://github.com/gabrigbxp/not-airbnb-eslint-config)** | **[📦 View on npm](https://www.npmjs.com/package/not-airbnb-eslint-config)** | **[🐛 Report Bug](https://github.com/gabrigbxp/not-airbnb-eslint-config/issues)**

Made with ❤️ for the JavaScript community

</div>
