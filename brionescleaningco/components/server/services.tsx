import React from "react"
import { Home, Building2, Sparkles, Wind, Paintbrush, CalendarCheck } from "lucide-react"

const services = [
    {
        icon: Home,
        title: "Residential Cleaning",
        description:
            "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms, and living areas.",
        features: ["Weekly / Bi-Weekly", "One-Time Deep Clean"],
    },
    {
        icon: Building2,
        title: "Commercial Cleaning",
        description:
            "Comprehensive cleaning services for offices, retail spaces, and other commercial properties.",
        features: ["After-Hours Available", "Custom Plans"],
    },
    {
        icon: Sparkles,
        title: "Carpet Cleaning",
        description: "Deep cleaning for carpets and rugs, removing stains and allergens.",
        features: ["Steam Cleaning", "Dry Cleaning"],
    },
    {
        icon: Wind,
        title: "Window Cleaning",
        description: "Professional window cleaning for homes and businesses.",
        features: ["Interior & Exterior", "Screen Cleaning"],
    },
    {
        icon: Paintbrush,
        title: "Post-Construction Cleaning",
        description: "Thorough cleaning after construction or renovation projects.",
        features: ["Debris Removal", "Detailed Cleaning"],
    },
    {
        icon: CalendarCheck,
        title: "Special Event Cleaning",
        description: "Cleaning services tailored for events, parties, and gatherings.",
        features: ["Pre-Event Setup", "Post-Event Cleanup"],
    },
]

export default function Services(): JSX.Element {
    return (
        <section id="services" className="border-2 border-gray-300 p-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
                        Cleaning Services
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Discover our comprehensive range of cleaning services designed to meet your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}