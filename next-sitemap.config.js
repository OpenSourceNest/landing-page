/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://opensourcenest.org",
  generateRobotsTxt: true,
  exclude: ["/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin/*"],
        allow: ["/"],
      },
    ],
  },
};
