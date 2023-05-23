/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["cs", "en", "de", "ru"],
    defaultLocale: "cs",
    localeDetection: true,
  },
};

module.exports = nextConfig;
