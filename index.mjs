import eslintjs from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";
import rules from "./rules/index.mjs";

export const basic = [
  {
    name: "eslint/configs/recommended",
    ...eslintjs.configs.recommended,
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    name: "parser",
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  prettier,
];

export default [...basic, ...rules];

// Note: The `javascript/style` ruleset is intentionally NOT included in the
// default export because formatting is handled by Prettier. If you don't use
// Prettier and want style rules, import `style` from `./rules/index.mjs` via
// the named exports and add it to your config.
export * from "./rules/index.mjs";
