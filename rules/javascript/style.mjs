import stylistic from '@stylistic/eslint-plugin';
import getRuleName from '../../utils/name.mjs';

export default {
  name: getRuleName(import.meta.url),
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
    '@stylistic/max-len': ['warn', {
      code: 120,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-nested-ternary': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    '@stylistic/no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-underscore-dangle': ['error', {
      allow: ["_"],
      allowAfterThis: true, // `this._foo`
      allowAfterSuper: false,
      enforceInMethodNames: false,
      allowFunctionParams: true, // `_arg` as parameter
    }],
  }
};
