module.exports = {
  siteUrl: 'https://ioanawebstudio.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    sitemaps: [
      'https://ioanawebstudio.com/sitemap.xml',
    ],
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
  },
  // Handle multiple locales
  alternateRefs: [
    {
      hreflang: 'en-GB',
      href: 'https://ioanawebstudio.com/en-gb',
    },
    {
      hreflang: 'ro',
      href: 'https://ioanawebstudio.com/ro',
    },
    {
      hreflang: 'en',
      href: 'https://ioanawebstudio.com',
    },
    {
      hreflang: 'x-default',
      href: 'https://ioanawebstudio.com',
    },
  ],
}
