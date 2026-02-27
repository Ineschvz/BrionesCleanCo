import { Home, Building2, Sparkles, Wind, Paintbrush, CalendarCheck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms, and living areas.",
    features: ["Weekly / Bi-Weekly", "One-Time Deep Clean"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your workspace professional and healthy with thorough office and retail cleaning.",
    features: ["After-Hours Available", "Custom Plans"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Top-to-bottom detail cleaning for every corner. Perfect for seasonal refreshes.",
    features: ["Baseboards & Vents", "Inside Appliances"],
  },
  {
    icon: Wind,
    title: "Move In / Move Out",
    description: "Make your transition seamless with a spotless space, ready for the next chapter.",
    features: ["Full Property Clean", "Deposit-Ready"],
  },
  {
    icon: Paintbrush,
    title: "Post-Construction",
    description: "Remove dust, debris, and residue after renovations so your new space shines.",
    features: ["Dust Removal", "Surface Polishing"],
  },
  {
    icon: CalendarCheck,
    title: "Recurring Plans",
    description: "Set it and forget it. Scheduled cleaning so your space always stays fresh.",
    features: ["Flexible Schedule", "Priority Booking"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5  text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From routine upkeep to heavy-duty deep cleans, we have the expertise to handle it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
          >
            Get a custom quote for your needs
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
