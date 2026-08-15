import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/admin/dashboard/'], // Protect admin panel from search engine indexing
    },
    sitemap: 'https://nityaphysiotherapy.com/sitemap.xml',
  };
}
