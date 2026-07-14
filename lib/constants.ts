export const COMPANY_NAME = "Xornettis Solutions";
export const COMPANY_TAGLINE = "Engineering the Future of Business.";
export const COMPANY_SHORT_NAME = "Xornettis";
export const COMPANY_DESCRIPTION =
  "Xornettis Solutions delivers cutting-edge AI, digital transformation, and enterprise software solutions that empower organizations to innovate, scale, and lead in the digital era.";

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// ─── Contact Information ─────────────────────────────────────────────────────

export const CONTACT_INFO = {
  email: "hello@xornettis.com",
  phone: "+1 (555) 000-0000",
  address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
};

// ─── Social Links ────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/company/xornettis", icon: "Linkedin" },
  { label: "Twitter / X", href: "https://twitter.com/xornettis", icon: "Twitter" },
  { label: "GitHub", href: "https://github.com/xornettis", icon: "Github" },
  { label: "YouTube", href: "https://youtube.com/@xornettis", icon: "Youtube" },
];

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    title: "AI & Machine Learning",
    description:
      "Custom AI models, NLP pipelines, computer vision, and predictive analytics that drive measurable business outcomes.",
    icon: "Brain",
    href: "/services#ai-ml",
  },
  {
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems and business processes with cloud-native architecture.",
    icon: "Zap",
    href: "/services#digital-transformation",
  },
  {
    title: "Enterprise Software",
    description:
      "Scalable, secure, and maintainable enterprise applications built with best-in-class engineering practices.",
    icon: "Code2",
    href: "/services#enterprise-software",
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS, Azure, and GCP architecture design, migration, cost optimization, and managed operations.",
    icon: "Cloud",
    href: "/services#cloud",
  },
  {
    title: "Data Engineering",
    description:
      "Data lakes, real-time pipelines, warehousing, and business intelligence dashboards at enterprise scale.",
    icon: "Database",
    href: "/services#data",
  },
  {
    title: "Cybersecurity",
    description:
      "Zero-trust security architecture, penetration testing, compliance automation, and incident response.",
    icon: "ShieldCheck",
    href: "/services#security",
  },
];

// ─── Footer Quick Links ───────────────────────────────────────────────────────

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  { label: "AI & Machine Learning", href: "/services#ai-ml" },
  { label: "Digital Transformation", href: "/services#digital-transformation" },
  { label: "Enterprise Software", href: "/services#enterprise-software" },
  { label: "Cloud Solutions", href: "/services#cloud" },
  { label: "Data Engineering", href: "/services#data" },
  { label: "Cybersecurity", href: "/services#security" },
];

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const SITE_URL = "https://xornettis.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
