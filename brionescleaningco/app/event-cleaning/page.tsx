import { ArrowLeft, Phone, Check, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export const metadata = {
  title: "Event Cleaning & Setup | Briones Cleaning Co.",
  description: "Professional event cleaning and setup services for weddings, corporate events, and parties. Pre-event preparation and post-event cleanup.",
}

const features = [
  "Pre-event venue preparation",
  "Table and chair setup",
  "During-event maintenance",
  "Post-event deep cleaning",
  "Trash and recycling removal",
  "Same-day turnaround available",
]

const benefits = [
  { icon: Shield, title: "Stress-Free Events", text: "Enjoy your event knowing cleanup is handled" },
  { icon: Clock, title: "Quick Turnaround", text: "Venues ready for next booking on time" },
  { icon: Award, title: "Venue Partnerships", text: "Trusted by local venues for reliable service" },
]

const process = [
  { step: 1, title: "Planning", text: "Discuss event details, timeline, and requirements" },
  { step: 2, title: "Pre-Event", text: "Arrive early to prepare and set up the space" },
  // { step: 3, title: "Event Support", text: "Optional on-site staff for maintenance during event" },
  { step: 3, title: "Post-Event", text: "Comprehensive cleanup immediately after" },
  { step: 4, title: "Final Check", text: "Venue inspection to ensure it's ready for next use" },
]

export default function EventCleaningPage() {
  return (
    <>
      
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/Event-Hero-Image.jpeg"
            alt="Event Cleaning & Setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">
                Flawless Events from Start to Finish
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Event Cleaning & Setup
              </h1>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Make your event memorable for all the right reasons. We provide pre-event setup assistance and post-event cleanup for weddings, corporate events, parties, and more. Focus on your guests while we handle the rest.
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 p-5 rounded-xl bg-secondary">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 bg-secondary/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">Our Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 bg-primary">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact us today for a free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-medium text-primary hover:bg-white/90 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+19196970333"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                919-697-0333
              </a>
            </div>
          </div>
        </section>
      </main>
     
    </>
  )
}
