import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { 
  getOrganizationSchema, 
  getWebSiteSchema, 
  getServicesSchema, 
  getFAQSchema 
} from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xornettis-solutions.vercel.app"),

  alternates: {
    canonical: "https://xornettis-solutions.vercel.app",
  },

  title: {
    default: "Xornettis Solutions | AI & Digital Transformation",
    template: "%s | Xornettis Solutions",
  },

  description:
    "Xornettis Solutions helps businesses grow through Artificial Intelligence, Business Automation, Software Development, Cloud Solutions and Digital Transformation.",

  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },

  keywords: [
    "Xornettis Solutions",
    "Artificial Intelligence",
    "AI",
    "Business Automation",
    "Software Development",
    "Web Development",
    "Cloud Solutions",
    "Digital Transformation",
    "Next.js",
    "AI Consulting",
  ],

  authors: [{ name: "Xornettis Solutions" }],
  creator: "Xornettis Solutions",
  publisher: "Xornettis Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Xornettis Solutions",
    description: "Helping businesses grow through AI, Business Automation, Software Development and Digital Transformation.",
    url: "https://xornettis-solutions.vercel.app",
    siteName: "Xornettis Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xornettis Solutions",
    description: "Helping businesses grow through AI, Business Automation, Software Development and Digital Transformation.",
  },

  verification: {
    google: "vYsMZcUzmXYp0g8GGxoVkABMPX4E4aeF7iGctu_ujkU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const servicesSchema = getServicesSchema();
  const faqSchema = getFAQSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data / Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        
        {/* AdSense Verification Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3100149636228107"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}