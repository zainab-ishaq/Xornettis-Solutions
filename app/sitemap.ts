import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://xornettis-solutions.vercel.app';

  // Base routes / sections based on your main navigation
  const routes = [
    '',
    '/#about',
    '/#services',
    '/#solutions',
    '/#process',
    '/#portfolio',
    '/#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Generic/Dynamic routes if you have separate pages for services, portfolio or case studies in future
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

  return [...routes, ...dynamicPages];
}