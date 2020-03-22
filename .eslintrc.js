module.exports = {
	root: true,
	env: {
		// this section will be used to determine which APIs are available to us
		// (i.e are we running in a browser environment or a node.js env)
		node: true,
		browser: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
		// specifying a module sourcetype prevent eslint from marking import statements as errors
		sourceType: 'module',
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended"
	],
	rules: {
		// we should always disable console logs and debugging in production
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0,
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'quotes': [1, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
		'prettier/prettier': 0,
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'], // disallow trailing commas in object literals
		'vue/html-indent': ['error', 'tab', {
			'attribute': 2,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],
		}],
		'vue/html-self-closing': 'off',
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'never',
			},
		],
		'vue/singleline-html-element-content-newline': ['error', {
			'ignoreWhenNoAttributes': true,
			'ignoreWhenEmpty': true,
			'ignores': ['pre', 'textarea', 'p', 'span', 'li'],
		}],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': true,
			},
		}],
	},
}
