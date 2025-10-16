import eslintPluginN from 'eslint-plugin-n';
import getRuleName from '../../utils/name.mjs';

export default {
  name: getRuleName(import.meta.url),
  plugins: {
    'n': eslintPluginN
  },
  rules: {
    'n/callback-return': 'off',
    'n/global-require': 'error',
    'n/handle-callback-err': 'off',
    'n/no-deprecated-api': 'error',
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
  }
};
