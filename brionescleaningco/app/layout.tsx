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
  title: "Briones Cleaning Co. | Professional Cleaning Services",
  description: "Experience the best cleaning services with Briones Cleaning Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
