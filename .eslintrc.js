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
        'semi': ['error', 'always'],
        'quotes': ['error', 'singl']
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ]
};
