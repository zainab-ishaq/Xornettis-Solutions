export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://xornettis.com/#organization',
  name: 'Xornettis Solutions',
  url: 'https://xornettis.com',
  logo: 'https://xornettis.com/logo.png', // Apne actual logo image ka path rakhein
  email: 'contact@xornettis.com',
  sameAs: [
    'https://www.linkedin.com/company/xornettis',
    'https://github.com/xornettis',
    'https://twitter.com/xornettis',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressCountry: 'PK',
  },
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://xornettis.com/#website',
  url: 'https://xornettis.com',
  name: 'Xornettis Solutions',
  publisher: {
    '@id': 'https://xornettis.com/#organization',
  },
});

export const getServicesSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'AI Solutions & Automation',
      description: 'Custom AI agents, workflow automation, and machine learning solutions.',
      provider: { '@id': 'https://xornettis.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Web Development',
      description: 'Modern, high-performance web applications built with Next.js and React.',
      provider: { '@id': 'https://xornettis.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Software Development',
      description: 'Scalable cloud architecture and enterprise software engineering.',
      provider: { '@id': 'https://xornettis.com/#organization' },
    },
  ],
});

export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Xornettis Solutions offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xornettis Solutions provides AI consulting, custom web development, business automation, and software engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get started with Xornettis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact us through our website contact form or email us directly at contact@xornettis.com for a free consultation.',
      },
    },
  ],
});