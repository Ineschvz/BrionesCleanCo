"use client"

import { Star, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function TestimonialForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    location: "",
    service: "",
    otherService: "",
    testimonial: "",
    website: "",
  })
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (rating === 0) return
    if (formData.testimonial.length < 50 || formData.testimonial.length > 300) return
    if (formData.service === "other" && !formData.otherService.trim()) return

    setStatus("loading")
    try {
      const res = await fetch("/api/send-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, rating }),
      })
      if (res.ok) {
        setStatus("success")
        setTimeout(() => router.push("/"), 3000)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"

  const charCount = formData.testimonial.length
  const charCountColor =
    charCount > 300 || (charCount > 0 && charCount < 50)
      ? "text-destructive"
      : "text-muted-foreground"

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
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

      {/* First Name / Last Name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Role / Location */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1.5">
            Role / Title <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="role"
            type="text"
            placeholder="e.g. Office Manager"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Raleigh, NC"
            value={formData.location}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Rating
        </label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            >
              <Star
                className={`h-7 w-7 transition-colors ${
                  star <= (hoverRating || rating)
                    ? "fill-primary text-primary"
                    : "text-border"
                }`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="text-sm text-muted-foreground ml-2">{rating}/5</span>
          )}
        </div>
        {status !== "idle" && rating === 0 && (
          <p className="text-sm text-destructive mt-1">Please select a rating</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
          Service Used
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Select a Service</option>
          <option value="Janitorial">Janitorial</option>
          <option value="Upholstery & Rug Cleaning">Upholstery & Rug Cleaning</option>
          <option value="Floor Care">Floor Care</option>
          <option value="Event Setup & Cleanup">Event Setup & Cleanup</option>
          <option value="Emergency Water Extraction">Emergency Water Extraction</option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="other">Other</option>
        </select>
        {formData.service === "other" && (
          <input
            id="otherService"
            type="text"
            placeholder="Please specify the service"
            value={formData.otherService}
            onChange={handleChange}
            required
            className={`${inputClass} mt-3`}
          />
        )}
      </div>

      {/* Testimonial */}
      <div>
        <label htmlFor="testimonial" className="block text-sm font-medium text-foreground mb-1.5">
          Your Testimonial
        </label>
        <textarea
          id="testimonial"
          placeholder="Tell us about your experience working with Briones Cleaning Co..."
          value={formData.testimonial}
          onChange={handleChange}
          required
          minLength={50}
          maxLength={300}
          className={`${inputClass} min-h-[140px]`}
        />
        <p className={`text-xs mt-1.5 ${charCountColor}`}>
          {charCount}/300 characters {charCount > 0 && charCount < 50 && "(minimum 50)"}
        </p>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-sm text-green-700 font-medium">
            Thank you for your review! Redirecting you to the homepage...
          </p>
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Review"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}
