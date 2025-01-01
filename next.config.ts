import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "src"),
			"@app": path.resolve(__dirname, "src/app"),
			"@pages": path.resolve(__dirname, "src/_pages"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@features": path.resolve(__dirname, "src/features"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@styles": path.resolve(__dirname, "src/shared/styles"),
		};
        return config;
	},
};

export default nextConfig;
