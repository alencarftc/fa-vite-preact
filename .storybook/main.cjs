module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-mdx-gfm',
	],
	framework: {
		name: '@storybook/preact-vite',
		options: {},
	},
	features: {
		storyStoreV7: true,
	},
	docs: {
		autodocs: true,
	},
};
