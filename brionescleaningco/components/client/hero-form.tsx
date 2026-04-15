"use client"

import { useState } from "react"

export function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, message: "" }),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", service: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        id="website"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        style={{ display: "none" }}
        value={formData.website}
        onChange={handleChange}
      />
      <input
        id="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
      />
      <input
        id="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
      />
      <input
        id="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
      />
      <select
        id="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
      >
        <option value="">Select Service Type</option>
        <option value="janitorial">Janitorial</option>
        <option value="carpet">Upholstery & Rug Cleaning</option>
        <option value="floor">Floor Care</option>
        <option value="event-cleaning">Event Setup & Cleanup</option>
        <option value="emergency-cleanup">Emergency Water Extraction</option>
        <option value="window-cleaning">Window Cleaning</option>
      </select>
      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">Message sent! We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  )
}
