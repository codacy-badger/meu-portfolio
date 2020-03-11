module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint', 'import', 'import-helpers', 'prettier'],
  'extends': [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'tsx': true,
    },
  },
  'settings': {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
      },
    },
  },
  'rules': {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        'extensions': ['.jsx', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'alphabetize': { 'order': 'asc', 'ignoreCase': true },
        'groups': [
          'module',
          '/^@root/',
          '/^@interfaces/',
          '/^@layouts/',
          '/^@components/',
          '/^@pages/',
          '/^@utils/',
          '/^@assets/',
          '/^@styles/',
          '/\.\/(?!style?)([^/]+)$/',
          '/styles/',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
  },
};
