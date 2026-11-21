import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "@/components/server/site-navbar";
import SiteFooter from "@/components/server/site-footer";
import type React from "react"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Briones Cleaning Co. | Professional Cleaning Services in Raleigh & the Triangle, NC",
  description: "Professional carpet cleaning, floor care, janitorial, and window cleaning services in Raleigh, Durham, and the Triangle, NC. Locally owned since 2019. Free estimates — call 919-973-9643.",
  openGraph: {
    title: "Briones Cleaning Co. | Professional Cleaning Services in Raleigh & the Triangle, NC",
    description: "Professional carpet cleaning, floor care, janitorial, and window cleaning services in Raleigh, Durham, and the Triangle, NC. Locally owned since 2019. Free estimates — call 919-973-9643.",
    url: "https://www.brionescleaning.com",
    siteName: "Briones Cleaning Co.",
    images: [
      {
        url: "https://www.brionescleaning.com/HeroImage.webp",
        width: 1200,
        height: 630,
        alt: "Briones Cleaning Co. - Professional Cleaning Services in Raleigh, NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briones Cleaning Co. | Professional Cleaning Services in Raleigh & the Triangle, NC",
    description: "Professional carpet cleaning, floor care, janitorial, and window cleaning services in Raleigh, Durham, and the Triangle, NC. Locally owned since 2019. Free estimates — call 919-973-9643.",
    images: ["https://www.brionescleaning.com/HeroImage.webp"],
  },
};

//Structured data for SEO using JSON-LD format
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningBusiness",
  name: "Briones Cleaning Co.",
  url: "https://www.brionescleaning.com",
  telephone: "+1-919-973-9643",
  email: "brionescleaningco@gmail.com",
  foundingDate: "2019",
  founder: {
    "@type": "Person",
    name: "Amado Briones",
  },
  areaServed: [
    { "@type": "City", name: "Raleigh", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Durham", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Chapel Hill", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Cary", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Apex", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Morrisville", containedInPlace: { "@type": "State", name: "North Carolina" } },
  ],
  serviceType: [
    "Carpet Cleaning",
    "Floor Care",
    "Janitorial Services",
    "Window Cleaning",
    "Event Cleaning",
    "Emergency Water Extraction",
  ],
  logo: "https://www.brionescleaning.com/Briones-PrimLogo.png",
  image: "https://www.brionescleaning.com/HeroImage.webp",
  priceRange: "$$",
  sameAs: [
    "https://share.google/bdrjjOKyqCI8I40fd",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} ${poppins.variable} font-sans antialiased`}
      >
        <SiteNavbar />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
