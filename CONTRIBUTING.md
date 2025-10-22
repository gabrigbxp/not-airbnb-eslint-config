# Contributing to not-airbnb-eslint-config

Thank you for considering contributing! 🎉

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gabrigbxp/not-airbnb-eslint-config.git
   cd not-airbnb-eslint-config
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Inspect the configuration**
   ```bash
   npm run inspect
   ```

## Project Structure

```
not-airbnb-eslint-config/
├── index.mjs                 # Main entry point
├── allrules.mjs             # All rules including style
├── prettier.config.js       # Prettier configuration
├── rules/
│   ├── javascript/          # JavaScript rules
│   ├── react/              # React rules
│   └── typescript/         # TypeScript rules
└── utils/
    └── name.mjs            # Utility functions
```

## Making Changes

### Adding or Modifying Rules

1. **Find the appropriate rule file** in `rules/javascript/`, `rules/react/`, or `rules/typescript/`
2. **Update the rules** following ESLint's rule format
3. **Test your changes** using the inspector:
   ```bash
   npm run inspect
   ```

### Important Notes

- **Use ESM syntax** - All files use ES modules (`.mjs` or `"type": "module"`)
- **Explicit file extensions** - Always include `.mjs` in imports
- **Rule naming** - Use the `getRuleName()` utility for consistent naming

## Submitting Changes

1. **Fork** the repository
2. **Create a branch** for your feature
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Commit your changes** with clear messages
   ```bash
   git commit -m "Add: new rule for X"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/my-new-feature
   ```
5. **Open a Pull Request** with a clear description of your changes

## Testing

Before submitting, test your changes in a real project:
> If you use nvm, make sure you are using the same Node.js version in all packages, the "link" command is sensitive to this

1. In this package directory:
   ```bash
   npm link
   ```

2. In your test project:
   ```bash
   npm link not-airbnb-eslint-config
   ```

3. Run ESLint in your test project:
   ```bash
   npx eslint .
   ```

## Resources

- [ESLint Rules Documentation](https://eslint.org/docs/latest/rules)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
- [ESLint Stylistic Rules](https://eslint.style/rules)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

## Code of Conduct

- Be respectful
- Provide constructive feedback
- Focus on what is best for the community

## Questions?

Feel free to open an issue for any questions or discussions!
