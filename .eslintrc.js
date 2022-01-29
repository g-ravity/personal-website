const path = require('path');

module.exports = {
	extends: [
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier/@typescript-eslint',
		'plugin:import/typescript',
		'plugin:@next/next/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier', 'react', 'import', 'jsx-a11y'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@/components/*', path.resolve(__dirname, './src/components')],
					['@/containers/*', path.resolve(__dirname, './src/containers')],
					['@/reusable-components/*', path.resolve(__dirname, './src/reusable-components')],
					['@/commonHelpers', path.resolve(__dirname, './src/utils/commonHelpers')],
					['@/otherHelpers', path.resolve(__dirname, './src/utils/otherHelpers')],
					['@/gql/*', path.resolve(__dirname, './src/gql')],
					['@/types/*', path.resolve(__dirname, './src/types')],
					['@/svgs/*', path.resolve(__dirname, './src/svgs')],
					['@/hooks/*', path.resolve(__dirname, './src/hooks')],
					['@/apollo/*', path.resolve(__dirname, './src/apollo')],
					['@/utils/*', path.resolve(__dirname, './src/utils')],
					['@/lib/*', path.resolve(__dirname, './src/lib')],
					['@/styleguide/*', path.resolve(__dirname, './src/styleguide')],
					['@/connectors/*', path.resolve(__dirname, './src/connectors')],
					['@/helpers/*', path.resolve(__dirname, './src/helpers')],
				],
				extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
			},
		},
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'jsx-a11y/href-no-hash': ['off'],
		'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/prop-types': 0,
		'react/no-unescaped-entities': 'off',
		'max-len': [
			'warn',
			{
				code: 100,
				tabWidth: 2,
				comments: 100,
				ignoreComments: false,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'dot-notation': 'off',
		'no-use-before-define': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': [2, { props: false }],
		'import/prefer-default-export': 'off',
		'consistent-return': 'off',
		'jsx-a11y/media-has-caption': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-shadow': 'off',
		'react/require-default-props': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 0,
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'jest.setup.ts'] },
		],
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
