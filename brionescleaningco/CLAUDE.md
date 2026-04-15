# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Run production server
```

No test suite is configured.

## Architecture

This is a **Next.js App Router** website for Briones Cleaning Co., a commercial/residential cleaning business.

### Route Structure

- `/` — Homepage (`app/page.tsx`) — assembles all section components
- `/carpet`, `/floor`, `/janitorial`, `/emergency-cleanup`, `/event-cleaning` — Service-specific landing pages, each with their own hero image and content
- `/api/send-email` — POST endpoint using **nodemailer** + Gmail SMTP to forward contact form submissions to the business email

### Component Architecture

Components are split by rendering strategy:

- **`components/server/`** — React Server Components (no interactivity): `hero.tsx`, `services.tsx`, `about.tsx`, `contact.tsx`, `how-it-works.tsx`, `testimonials.tsx`, `site-navbar.tsx`, `site-footer.tsx`
- **`components/client/`** — Client Components (`"use client"`): `client-form.tsx` (contact form with submission logic), `hero-form.tsx` (hero section form variant), `mobile-nav.tsx`, `gallery-carousel.tsx`

The root layout (`app/layout.tsx`) wraps all pages with `<SiteNavbar>`, `<SiteFooter>`, and `<Analytics>` (Vercel).

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Design tokens are defined as CSS custom properties in `app/globals.css` using the OkLCH color space. Semantic tokens (primary, secondary, accent, destructive, radius scales) are set there — edit tokens in `globals.css` rather than hardcoding colors.

### Email API

`app/api/send-email/route.js` reads `EMAIL_USERNAME` and `EMAIL_PASSWORD` from `.env.local` for Gmail SMTP auth. These credentials must be present locally and in the deployment environment for the contact form to work.

### Key Dependencies

- `next` / `react` / `react-dom` — App Router with React 19
- `tailwindcss@4` — Utility CSS (v4 syntax, no `tailwind.config.js` needed)
- `nodemailer` — Email sending from the API route
- `lucide-react` — Icons
- `@vercel/analytics` — Page view tracking
