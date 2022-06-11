module.exports = {
  env: {
    browser: true,
    es2021: true, // es2021有効
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // jsx許可
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  // チェックしないファイルを設定
  ignorePatterns: ['*.test.js'],

  // 必要に応じてルールを追加する
  rules: {
    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-uses-react': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',

    // .jsという拡張子のファイルないにJSXを記述するとeslintはエラーを返すのを許容する
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'consistent-return': 2,
    indent: [1, 2],
    'no-else-return': 1,
    semi: [1, 'always'],
    'space-unary-ops': 2,

    // function
    'react/function-component-definition': [
      2,
      // アロー関数を使う
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
  },
};
