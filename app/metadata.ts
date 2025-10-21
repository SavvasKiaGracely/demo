import { Metadata } from "next";

const siteConfig = {
  name: "MedAI Flow",
  title: "MedAI Flow - Intelligent Healthcare Automation for Clinics",
  description:
    "Harness the power of AI to analyze patient data, assist diagnostics, and optimize daily operations. Designed for clinics, imaging centers, and small hospitals.",
  url: "https://medaiflow.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "healthcare AI",
    "medical automation",
    "clinic management software",
    "AI diagnostics",
    "healthcare workflow",
    "medical AI assistant",
    "EHR integration",
    "patient data management",
    "clinical decision support",
    "medical imaging AI",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Intelligent Healthcare Automation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@medaiflow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service",
    email: "contact@medaiflow.com",
    areaServed: "US",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Healthcare Blvd",
    addressLocality: "Medical District",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/medaiflow",
    "https://twitter.com/medaiflow",
    "https://www.facebook.com/medaiflow",
    "https://www.youtube.com/@medaiflow",
  ],
};
