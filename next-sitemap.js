/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://maxdev.vercel.app/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };