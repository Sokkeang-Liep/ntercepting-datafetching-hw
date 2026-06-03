import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ntercepting-datafetching-8wib2sd6k-sokkeang-lieps-projects.vercel.app/sitemap.xml',
  }
}