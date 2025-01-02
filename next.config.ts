import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/src",
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	distDir: "./dist",
	eslint: {
		"ignoreDuringBuilds": true,
	}
};

export default nextConfig;
