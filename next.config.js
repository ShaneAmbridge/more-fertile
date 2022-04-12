/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	webpack: (config, { dev }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
			})
		);
		return config;
	},
};

module.exports = nextConfig;
