import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  // "sassOptions": {
  //   "silenceDeprecations": ['legacy-js-api'],
  // },
  // "pageExtensions": ["tsx", "ts", "js", "jsx"],
  // "webpack": (config) => {
  //   config.resolve.alias['@'] = resolve(__dirname, './src');
  //   config.resolve.alias['@app'] = resolve(__dirname, './src/app');
  //   config.resolve.alias['@pages'] = resolve(__dirname, './src/_pages');
  //   config.resolve.alias['@widgets'] = resolve(__dirname, './src/widgets');
  //   config.resolve.alias['@features'] = resolve(__dirname, './src/features');
  //   config.resolve.alias['@entities'] = resolve(__dirname, './src/entities');
  //   config.resolve.alias['@shared'] = resolve(__dirname, './src/shared');
  //   config.resolve.alias['@styles'] = resolve(__dirname, './src/shared/styles');

  //   return config;
  // },
};

export default nextConfig;
