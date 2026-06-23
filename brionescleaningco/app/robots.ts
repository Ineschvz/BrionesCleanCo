//This file. is used to specify the rules for web crawlers and search engines on how to index and interact with the site. 

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://www.brionescleaning.com/sitemap.xml",
  }
}
