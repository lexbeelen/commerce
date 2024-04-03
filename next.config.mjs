/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en-us", "nl-nl"],
    defaultLocale: "default",
    localeDetection: true,
  },
  trailingSlash: false,
};

export default nextConfig;
