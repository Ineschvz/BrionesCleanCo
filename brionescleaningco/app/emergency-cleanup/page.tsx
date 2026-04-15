import { ArrowLeft, Phone, Check, Clock, Shield, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export const metadata = {
  title: "Emergency Water Extraction | Briones Cleaning Co.",
  description: "24/7 emergency water extraction services. Fast response to minimize water damage with professional-grade equipment. Serving NC since 2010.",
}

const features = [
  "24/7 emergency response",
  "Standing water removal",
  "Professional-grade extraction equipment",
  "Moisture detection and monitoring",
  "Structural drying and dehumidification",
  "Carpet and padding water extraction",
]

const benefits = [
  { icon: Shield, title: "Prevent Further Damage", text: "Fast water removal stops warping, swelling, and mold from setting in" },
  { icon: Clock, title: "Rapid Response", text: "We arrive quickly when you need us most — day or night" },
  { icon: Droplets, title: "Complete Water Removal", text: "Industrial extractors and dehumidifiers ensure no moisture is left behind" },
]

const process = [
  { step: 1, title: "Emergency Call", text: "Contact us immediately — we respond within the hour" },
  { step: 2, title: "Inspection", text: "Assess the extent of water intrusion and identify the source" },
  { step: 3, title: "Water Extraction", text: "Remove all standing water using professional-grade equipment" },
  { step: 4, title: "Drying & Monitoring", text: "Set up dehumidifiers and air movers, monitor moisture levels" },
  { step: 5, title: "Final Walkthrough", text: "Confirm the area is fully dry and ready for use" },
]

export default function EmergencyWaterExtractionPage() {
  return (
    <>

      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/Water-Hero-Image.jpeg"
            alt="Emergency Water Extraction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">
                24/7 Rapid Response When Water Strikes
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Emergency Water Extraction
              </h1>
              <a
                href="tel:+19196970333"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now: 919-697-0333
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
                <p className="text-muted-foreground leading-relaxed mb-8">
                  When water invades your property, every minute counts. Whether it&apos;s a burst pipe, appliance overflow, or storm flooding, our emergency water extraction team is available around the clock to remove standing water quickly and prevent lasting damage to your home or business.
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
              Water Emergency? We&apos;re Here 24/7
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Don&apos;t wait — every minute counts. Call us now for immediate water extraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19196970333"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-medium text-red-600 hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                919-697-0333
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
