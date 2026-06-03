import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ntercepting-datafetching-8wib2sd6k-sokkeang-lieps-projects.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ntercepting-datafetching-8wib2sd6k-sokkeang-lieps-projects.vercel.app//dashboard',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
     {
      url: 'https://ntercepting-datafetching-8wib2sd6k-sokkeang-lieps-projects.vercel.app//dashboard/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ntercepting-datafetching-8wib2sd6k-sokkeang-lieps-projects.vercel.app//dashboard/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}