import bestPractices from './javascript/best-practices.mjs';
import errors from './javascript/errors.mjs';
import node from './javascript/node.mjs';
import variables from './javascript/variables.mjs';
import es6 from './javascript/es6.mjs';
import imports from './javascript/imports.mjs';
import strict from './javascript/strict.mjs';
import react from './react/react.mjs';
import reactA11y from './react/react-a11y.mjs';
import reactHooks from './react/react-hooks.mjs';
import typescriptCore from './typescript/typescript-core.mjs';
import typescriptVariables from './typescript/variables.mjs';
import typescriptBestPractices from './typescript/best-practices.mjs';

export default [
  bestPractices,
  errors,
  node,
  variables,
  es6,
  imports,
  strict,
  react,
  reactA11y,
  reactHooks,
  typescriptCore,
  typescriptVariables,
  typescriptBestPractices,
  // Intentionally NOT including `style` here because formatting is handled by Prettier
  // (via `eslint-config-prettier`). If you don't use Prettier, opt-in via the named export `style`.
]

export { default as bestPractices } from './javascript/best-practices.mjs';
export { default as errors } from './javascript/errors.mjs';
export { default as node } from './javascript/node.mjs';
// `style` is provided as a named export for projects that are not using Prettier
export { default as style } from './javascript/style.mjs';
export { default as variables } from './javascript/variables.mjs';
export { default as es6 } from './javascript/es6.mjs';
export { default as imports } from './javascript/imports.mjs';
export { default as strict } from './javascript/strict.mjs';
export { default as react } from './react/react.mjs';
export { default as reactA11y } from './react/react-a11y.mjs';
export { default as reactHooks } from './react/react-hooks.mjs';
export { default as typescriptCore } from './typescript/typescript-core.mjs';
export { default as typescriptVariables } from './typescript/variables.mjs';
export { default as typescriptBestPractices } from './typescript/best-practices.mjs';
