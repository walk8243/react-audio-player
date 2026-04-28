import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const createConfig = (phase: string, { defaultConfig }: { defaultConfig: NextConfig }): NextConfig => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      transpilePackages: ["@walk8243/react-audio-player"],
      experimental: {},
    };
  }

  return {
    ...defaultConfig,
    transpilePackages: ["@walk8243/react-audio-player"],
    output: 'export',
    basePath: '/react-audio-player',
    trailingSlash: true,
    experimental: {},
  };
};

export default createConfig;
