export default function sitemap() {
  return [
    {
      url: 'https://xornettis-solutions.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Agar aapke website par mazeed pages hain (jaise about, contact), toh unhe niche is tarah add karein:
    /*
    {
      url: 'https://xornettis-solutions.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ];
}