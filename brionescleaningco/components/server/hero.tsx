import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { HeroForm } from "@/components/client/hero-form"

const highlights = [
  "Locally Owned & Operated",
  "100% Satisfaction Guaranteed",
  "Serving NC Since 2010",
]

export  default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/HeroImage.webp"
        alt="Professional cleaning service in action"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Trusted by 500+ Clients
            </span>

            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
              A cleaner Space, {" "}
              <span className="text-primary">Without the Hassle</span>
            </h1>

            <p className="text-pretty text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              We deliver meticulous cleaning services so you can focus on what matters most. Reliable, thorough, and always on time.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
                <a
                href="tel:+19196970333"
                aria-label="Call 919-697-0333"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                Call 919-697-0333
                </a>
            </div>
          </div>

          {/* Right - Quick form card */}
          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-foreground mb-2">Request Your Free Estimate</h2>
            <p className="text-muted-foreground text-sm mb-6">We respond within 24 hours.</p>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  )
}
