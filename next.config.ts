import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/src",
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	eslint: {
		"ignoreDuringBuilds": true,
	}
};

export default nextConfig;
