import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

  // Tab Icon / Favicon Configuration (Updated to work perfectly with icon.ts / icon.tsx)
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

  authors: [
    {
      name: "Xornettis Solutions",
    },
  ],

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
    description:
      "Helping businesses grow through AI, Business Automation, Software Development and Digital Transformation.",
    url: "https://xornettis-solutions.vercel.app",
    siteName: "Xornettis Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xornettis Solutions",
    description:
      "Helping businesses grow through AI, Business Automation, Software Development and Digital Transformation.",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}