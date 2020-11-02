module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "es6": true,
        "browser": true,
        "node": true,
        "jest": true,
    },
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        "react": {
            "version": "detect",
        }
    },
    rules: {
        // Special ESLint rules or overrides go here.
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": [0, { "prefixWithI": "always" }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "eol-last": ["error", "always"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-double"],
        "object-curly-spacing": ["error", "always"],
        "quotes": ["error", "double"],
        "react/display-name": "off",
        "react/prop-types": "off"
    },
};
