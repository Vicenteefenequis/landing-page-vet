import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
