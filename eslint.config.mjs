import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
	{ ignores: ['main.js', 'node_modules/**', 'coverage/**'] },
	{
		files: ['src/**/*.ts'],
		languageOptions: { parser: tsParser, parserOptions: { sourceType: 'module' } },
		plugins: { '@typescript-eslint': tsPlugin },
		rules: { ...tsPlugin.configs.recommended.rules },
	},
];
