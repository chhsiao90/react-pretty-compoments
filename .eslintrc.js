module.exports = {
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'rules': {
        'strict': 'off',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
};
