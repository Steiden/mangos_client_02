import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	distDir: "./dist",
	eslint: {
		"ignoreDuringBuilds": true,
	}
};

export default nextConfig;
