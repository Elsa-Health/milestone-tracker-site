module.exports = {
	testPathIgnorePatterns: [
		"<rootDir>/.next/",
		"<rootDir>/.vercel/",
		"<rootDir>/node_modules/",
	],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{js,jsx,ts,tsx}",
		"!**/coverage/**",
		"!**/.next/**",
		"!**/.vercel/**",
		"!**/test-coverage/**",
	],
	coverageReporters: ["lcov"],
	coverageDirectory: "test-coverage",
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};
