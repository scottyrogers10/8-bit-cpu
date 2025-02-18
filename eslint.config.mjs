import prettier from "eslint-config-prettier";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		plugins: {
			"perfectionist": perfectionistPlugin,
			"react": reactPlugin,
			"sort-destructure-keys": sortDestructureKeysPlugin,
			"unused-imports": unusedImportsPlugin,
		},
		rules: {
			"no-console": "error",
			"no-debugger": "error",
			"no-unused-vars": "off",
			"perfectionist/sort-named-exports": ["error", { ignoreCase: false, type: "natural" }],
			"perfectionist/sort-objects": ["error", { ignoreCase: false, type: "natural" }],
			"react/jsx-curly-brace-presence": ["error", { children: "always", propElementValues: "always", props: "always" }],
			"react/jsx-sort-props": ["error", { ignoreCase: false }],
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"sort-destructure-keys/sort-destructure-keys": "error",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"error",
				{ args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
			],
		},
	},
	prettier,
];
