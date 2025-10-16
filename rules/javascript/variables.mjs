import confusingBrowserGlobals from 'confusing-browser-globals';
import getRuleName from '../../utils/name.mjs';

export default {
  name: getRuleName(import.meta.url),
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals.map((g) => ({
      name: g,
      message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
    }))),
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  }
};
