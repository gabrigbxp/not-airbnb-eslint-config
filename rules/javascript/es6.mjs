import stylistic from '@stylistic/eslint-plugin';
import getRuleName from '../../utils/name.mjs';

export default {
  name: getRuleName(import.meta.url),
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
    'no-class-assign': 'error',
    '@stylistic/no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-restricted-exports': ['error', {
      restrictedNamedExports: [],
    }],
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-destructuring': ['error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/yield-star-spacing': ['error', 'after']
  }
};
