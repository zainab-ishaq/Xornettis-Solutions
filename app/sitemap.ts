import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://xornettis-solutions.vercel.app';

  // Sirf main homepage ka URL (Hash tags '#about' wagera sitemap me nahi dale jaate)
  const mainRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // Baqi dynamic pages
  const dynamicPages = [
    '/services/ai-solutions',
    '/services/software-development',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/cloud-solutions',
    '/services/business-automation',
    '/portfolio/ai-customer-support',
    '/portfolio/healthcare-platform',
    '/portfolio/business-analytics-dashboard',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [mainRoute, ...dynamicPages];
}