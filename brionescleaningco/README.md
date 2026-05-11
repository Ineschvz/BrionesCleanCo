# Briones Cleaning Co. — Business Website

A professional marketing website built for Briones Cleaning Co., a commercial and residential cleaning business. The goal was to give the client a clean, fast, and modern web presence that clearly communicates their services, builds trust with potential customers, and makes it easy for people to get in touch.

## Why I Built This

The client needed a website to establish their business online, attract new customers, and provide a way for people to request cleaning services. Before this, they had no web presence. The site was designed to be simple to navigate, mobile-friendly, and professional enough to compete with larger cleaning companies in the area.

## Pages

- **Home** — Hero, About, Services overview, How It Works, and Contact form
- **Service pages** — Dedicated landing pages for Carpet Cleaning, Floor Cleaning, Janitorial, Emergency Cleanup, and Event Cleaning
- **Contact form** — Sends inquiries directly to the business email via Gmail SMTP

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework — server components, routing, and performance |
| React 19 | UI library |
| Tailwind CSS v4 | Styling — utility-first, no config file needed |
| Nodemailer + Gmail SMTP | Contact form email delivery |
| Vercel Analytics | Page view tracking |
| Lucide React | Icons |
| next/font | Optimized Google Fonts (Inter + Poppins) |

## Architecture

Components are split by rendering strategy:

- **`components/server/`** — Static sections rendered on the server (Hero, About, Services, Contact, Navbar, Footer)
- **`components/client/`** — Interactive components with `"use client"` (contact form, mobile nav, gallery carousel)

Design tokens (colors, spacing, radius) are defined as CSS custom properties in `app/globals.css` using the OkLCH color space.

## Local Development

```bash
npm install
npm run dev
```

Create a `.env.local` file with Gmail credentials for the contact form:

```
EMAIL_USERNAME=your@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Deployment

Deployed on Vercel. Add the same environment variables in the Vercel project settings for the contact form to work in production.
