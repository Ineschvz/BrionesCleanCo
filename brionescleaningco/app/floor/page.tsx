import { ArrowLeft, Phone, Check, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import GalleryCarousel from "@/components/client/gallery-carousel"


export const metadata = {
  title: "Floor Care Services | Briones Cleaning Co.",
  description: "Professional floor care for hardwood, tile, VCT, concrete, and natural stone. Cleaning, polishing, waxing, and restoration services.",
}
const galleryImages = [
    {
        src: "/before .jpg",
        alt: "Before floor care service - dull, dirty floor",
    },
    {
        src: "/after.jpg",
        alt: "After floor care service - clean, shiny floor",
    },
    {
        src: "/before 2.jpg",
        alt: "Before floor care service - dull, dirty floor",
    },
    {
        src: "/after 2.jpg",
        alt: "After floor care service - clean, shiny floor",
    }
]
const features = [
  "Hardwood floor cleaning and polishing",
  "Tile and grout deep cleaning",
  "VCT stripping and waxing",
  "Concrete floor sealing",
  "Natural stone restoration",
  "Anti-slip treatments",
]

const benefits = [
  { icon: Shield, title: "Surface Protection", text: "Sealants and wax protect floors from damage and wear" },
  { icon: Clock, title: "Long-Lasting Results", text: "Professional care means less frequent maintenance needed" },
  { icon: Award, title: "Enhanced Appearance", text: "Restore dull, worn floors to their original luster" },
]

const process = [
  { step: 1, title: "Assessment", text: "Identify floor type and condition to determine best approach" },
  { step: 2, title: "Preparation", text: "Clear area and protect surrounding surfaces" },
  { step: 3, title: "Deep Clean", text: "Remove built-up dirt, old wax, and grime" },
  { step: 4, title: "Restoration", text: "Apply appropriate finish, wax, or sealant" },
  { step: 5, title: "Buff & Polish", text: "Final buffing for a brilliant, lasting shine" },
]

export default function FloorCarePage() {
  return (
    <>
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/floor-care.webp"
            alt="Floor Care Services"
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
                Restore the Shine to Any Surface
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Floor Care Services
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
                  From hardwood to tile, vinyl to concrete, our floor care specialists have the expertise and equipment to clean, restore, and protect all types of flooring. We bring back the original beauty of your floors.
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

        {/* Gallery */}
        <GalleryCarousel
          images={galleryImages}
          title="Carpet & Upholstery Results"
          subtitle="See the transformation our professional cleaning delivers"
        />
        
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
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}
