import type { MetadataRoute } from 'next';
import { getBaseUrl } from '~/lib/get-base-url';
import { registry } from '~registry/__all__';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getBaseUrl(),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...Object.values(registry).map((item) => ({
      url: `${getBaseUrl()}/docs/components/${item.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
