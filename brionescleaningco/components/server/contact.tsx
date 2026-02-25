import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/client/client-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-2xl overflow-hidden bg-primary">
          <div className="grid lg:grid-cols-5">
            {/* Left side - Contact info on brand color */}
            <div className="lg:col-span-2 p-8 sm:p-10 text-primary-foreground flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  Get Your Free Estimate
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-10">
                  Ready for a spotless space? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary-foreground/15 p-2 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Phone</p>
                    <p className="font-medium">(888) 555-2532</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary-foreground/15 p-2 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Email</p>
                    <p className="font-medium">hello@brionescleaning.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary-foreground/15 p-2 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Address</p>
                    <p className="font-medium">123 Clean Street, Austin, TX 78701</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary-foreground/15 p-2 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Business Hours</p>
                    <p className="font-medium">Mon - Fri: 7 AM - 7 PM</p>
                    <p className="font-medium">Sat: 8 AM - 5 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side - Form on white */}
            <div className="lg:col-span-3 bg-card p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
