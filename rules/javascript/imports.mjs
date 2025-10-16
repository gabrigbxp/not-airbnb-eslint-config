import eslintPluginImport from 'eslint-plugin-import';
import getRuleName from '../../utils/name.mjs';

export default {
  name: getRuleName(import.meta.url),
  plugins: {
    'import': eslintPluginImport,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {

    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/dynamic-import-chunkname':'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',
    'import/no-import-module-exports': ['error', {
      exceptions: [],
    }],
    'import/no-relative-packages': 'error',
    'import/consistent-type-specifier-style': 'off',
    'import/no-empty-named-blocks': 'off',
  },
};
