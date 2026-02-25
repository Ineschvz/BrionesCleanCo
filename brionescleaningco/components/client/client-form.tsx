"use client"

import { ArrowRight } from "lucide-react"

export function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
            Service Needed
          </label>
          <select
            id="service"
            className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"
          >
            <option value="">Select a Service</option>
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move">Move In / Move Out</option>
            <option value="post-construction">Post-Construction</option>
            <option value="recurring">Recurring Plan</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your space and any special requests..."
          className="flex w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors min-h-[120px]"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
      >
        Request Free Estimate
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}
