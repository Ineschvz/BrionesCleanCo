import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Austin, TX",
    rating: 5,
    content:
      "Briones Cleaning transformed my home. Their attention to detail is unmatched and the team is always so professional. I've tried other services, but nothing compares.",
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    location: "Round Rock, TX",
    rating: 5,
    content:
      "Our office has never looked better. The crew is reliable, thorough, and always on time. We've been using them for over two years and couldn't be happier.",
  },
  {
    name: "Emily Rodriguez",
    role: "Busy Parent",
    location: "Cedar Park, TX",
    rating: 5,
    content:
      "As a busy mom of three, this service is a lifesaver. Trustworthy, meticulous, and worth every penny. My house sparkles every single week.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Rated 4.9 out of 5 from over 500 verified reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 border border-border"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="pt-5 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role} &middot; {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
