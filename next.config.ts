import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en-GB", "ro", "en"],
    defaultLocale: "en-GB",
    localeDetection: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
