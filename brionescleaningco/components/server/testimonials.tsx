import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We&apos;re collecting reviews from the amazing clients we&apos;ve had the pleasure of working with.
          </p>

          <div className="flex items-center justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>

          <Link
            href="/review"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Share Your Experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
