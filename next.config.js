/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');
const path = require('path');

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
});

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, './src/assets/css/')],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['kk', 'en', 'ru'],
    defaultLocale: 'kk',
    domains: [
      { domain: 'zhasapp.com/kk', defaultLocale: 'kk' },
      { domain: 'zhasapp.com/en', defaultLocale: 'en' },
      { domain: 'zhasapp.com/ru', defaultLocale: 'ru' },
    ],
  },
  images: {
    domains: [
      'localhost',
      'localhost:8000',
      '127.0.0.1:8000',
      'zhasapp.com',
      'backend.zhasapp.com',
      'admin.zhasapp.com',
      'zhasapp.com/backend',
      'maps.googleapis.com',
      's3.amazonaws.com',
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:locale/docs/terms.pdf',
  //       destination: '/docs/terms.pdf',
  //     },
  //   ];
  // },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
