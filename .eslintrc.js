module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["error", 3], // tab = 3
		semi: [2, "always"], // " "
		"space-before-function-paren": ["error", "never"], // function()
		quotes: ["error", "double", { allowTemplateLiterals: true }], //
	},
};
