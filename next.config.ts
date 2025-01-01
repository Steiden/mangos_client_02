import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "sassOptions": {
    "silenceDeprecations": ['legacy-js-api'],
  },
  "pageExtensions": ["tsx", "ts", "js", "jsx"],
  "webpack": (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
      "@app": __dirname + "/src/app",
      "@pages": __dirname + "/src/_pages",
      "@widgets": __dirname + "/src/widgets",
      "@features": __dirname + "/src/features",
      "@entities": __dirname + "/src/entities",
      "@shared": __dirname + "/src/shared",
      "@styles": __dirname + "/src/shared/styles",
    };

    return config;
  },
};

export default nextConfig;
