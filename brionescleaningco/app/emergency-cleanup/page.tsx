import { ArrowLeft, Phone, Check, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export const metadata = {
  title: "Emergency Cleanup & Restoration | Briones Cleaning Co.",
  description: "24/7 emergency response for water damage, fire damage, mold remediation, and biohazard cleanup. Fast, professional restoration services.",
}

const features = [
  "24/7 emergency response",
  "Water extraction and drying",
  "Fire and smoke damage cleanup",
  "Mold remediation",
  "Biohazard cleanup",
  "Contents restoration",
]

const benefits = [
  { icon: Shield, title: "Minimize Damage", text: "Fast response prevents secondary damage and mold growth" },
  { icon: Clock, title: "Always Available", text: "Our team is on call 24 hours a day, 7 days a week" },
  { icon: Award, title: "Insurance Assistance", text: "We work with your insurance for smoother claims" },
]

const process = [
  { step: 1, title: "Emergency Call", text: "Contact us immediately - we respond within the hour" },
  { step: 2, title: "Assessment", text: "Evaluate damage and create action plan" },
  { step: 3, title: "Mitigation", text: "Stop ongoing damage with extraction and containment" },
  { step: 4, title: "Restoration", text: "Clean, sanitize, and restore affected areas" },
  { step: 5, title: "Final Walkthrough", text: "Ensure complete restoration and your satisfaction" },
]

export default function EmergencyRestorationPage() {
  return (
    <>
      
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/services/emergency.jpg"
            alt="Emergency Cleanup & Restoration"
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
                24/7 Rapid Response When Disaster Strikes
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Emergency Cleanup & Restoration
              </h1>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now: (555) 123-4567
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
                  When water damage, fire, or other disasters strike, time is critical. Our emergency response team is available around the clock to minimize damage, remove hazards, and restore your property quickly.
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
        <section className="py-20 px-4 sm:px-6 bg-red-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Emergency? We're Here 24/7
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Don't wait - every minute counts. Call us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-medium text-red-600 hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Request Callback
              </Link>
            </div>
          </div>
        </section>
      </main>
     
    </>
  )
}
