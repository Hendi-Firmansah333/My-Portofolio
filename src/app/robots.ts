import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual Vercel domain later
  const baseUrl = 'https://hendi-firmansah.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
