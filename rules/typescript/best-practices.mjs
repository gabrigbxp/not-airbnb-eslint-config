import getRuleName from "../../utils/name.mjs";

export default {
  name: getRuleName(import.meta.url),
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
  },
};