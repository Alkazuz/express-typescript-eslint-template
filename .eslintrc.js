module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		'no-unused-vars': 'off',
		'linebreak-style': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		camelcase: 'off',
	},
};
