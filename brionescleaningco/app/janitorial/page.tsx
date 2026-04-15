import { ArrowLeft, Phone, Check, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import GalleryCarousel from "@/components/client/gallery-carousel"  

export const metadata = {
  title: "Janitorial Maintenance | Briones Cleaning Co.",
  description: "Comprehensive janitorial services for commercial spaces. Daily, weekly, or monthly cleaning customized to your business needs.",
}

const galleryImages = [
    {
        src: "/IMG_1288-preview.jpg",
        alt: "Janitorial service team cleaning a commercial office space",
    }
]
const features = [
  "Daily, weekly, or monthly cleaning",
  "Restroom sanitation and restocking",
  "Trash removal and recycling",
  "Break room and kitchen cleaning",
  "Window and glass cleaning",
  "Dusting and surface disinfection",
]

const benefits = [
  { icon: Shield, title: "Healthier Workplace", text: "Reduce sick days with thorough sanitization practices" },
  { icon: Clock, title: "Flexible Scheduling", text: "After-hours service so we never disrupt your business" },
  { icon: Award, title: "Professional Image", text: "A clean space impresses clients and boosts morale" },
]

const process = [
  { step: 1, title: "Consultation", text: "Assess your facility and discuss your needs" },
  { step: 2, title: "Custom Plan", text: "Create a tailored cleaning schedule and checklist" },
  { step: 3, title: "Team Assignment", text: "Dedicated crew trained on your specific requirements" },
  { step: 4, title: "Regular Service", text: "Consistent, reliable cleaning on your schedule" },
  { step: 5, title: "Quality Checks", text: "Ongoing inspections to maintain our high standards" },
]

export default function JanitorialPage() {
  return (
    <>
      
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/Janitorial-Hero-Image.jpeg"
            alt="Janitorial Maintenance"
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
                Keep Your Business Spotless
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Janitorial Maintenance
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
                  Our comprehensive janitorial services keep your commercial space clean, healthy, and professional. From daily cleaning to periodic deep cleans, we customize our services to fit your schedule and budget.
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
