import eslintPluginReact from 'eslint-plugin-react-hooks';
import getRuleName from '../../utils/name.mjs';

export default {
    name: getRuleName(import.meta.url),
    plugins: {
        'react-hooks': eslintPluginReact,
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
