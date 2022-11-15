/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://maximzhelev.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
};
