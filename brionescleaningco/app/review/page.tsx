import type { Metadata } from "next"
import { TestimonialForm } from "@/components/client/testimonial-form"

export const metadata: Metadata = {
  title: "Share Your Experience",
  description:
    "Leave a review for Briones Cleaning Co. Your feedback helps our family business grow and serve North Carolina better.",
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Leave a Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Share Your Experience
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you! Your feedback helps our family business grow
            and lets others know what to expect.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
          <TestimonialForm />
        </div>
      </div>
    </main>
  )
}
