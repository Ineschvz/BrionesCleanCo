import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    slug: "carpet",
    title: "Upholstery & Rug Cleaning Services",
    description: "Deep extraction cleaning for carpets, rugs, sofas, and chairs. Remove stains, odors, and allergens.",
    image: "/Carpet-Hero-Image.jpeg",
    features: ["Steam Cleaning", "Stain Removal", "Pet Odor Treatment"],
  },
  {
    slug: "floor",
    title: "Floor Care Services",
    description: "Professional care for hardwood, tile, vinyl, and concrete floors. Stripping, waxing, and polishing.",
    image: "/Floor-Hero-Image.jpeg",
    features: ["Strip & Wax", "Buffing & Polishing", "Grout Cleaning"],
  },
  {
    slug: "janitorial",
    title: "Janitorial Services",
    description: "Ongoing commercial cleaning for offices, retail, and facilities. Keep your business spotless daily.",
    image: "/Janitorial-Hero-Image.jpeg",
    features: ["Daily / Weekly Plans", "Restroom Sanitation", "Trash Removal"],
  },
  {
    slug: "emergency-cleanup",
    title: "Emergency Water Extraction Services",
    description: "24/7 rapid response for water damage, fire damage, and disaster cleanup. We restore your space fast.",
    image: "/Water-Hero-Image.jpeg",
    features: ["24/7 Availability", "Water Extraction", "Odor Removal"],
  },
  {
    slug: "event-cleaning",
    title: "Event Setup & Cleanup Services",
    description: "Pre-event setup and post-event cleanup for weddings, corporate events, and private parties.",
    image: "/Event-Hero-Image.jpeg",
    features: ["Setup Assistance", "Same-Day Cleanup", "Venue Partnerships"],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning Services",
    description: "Interior and exterior window cleaning for homes and businesses. Streak-free results with professional-grade tools.",
    image: "/Window-Hero-Image.jpeg",
    features: ["Streak-Free Finish", "Screen Cleaning", "Hard Water Removal"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From routine upkeep to emergency restoration, we have the expertise to handle it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}