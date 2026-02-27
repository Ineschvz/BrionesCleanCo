const steps = [
    {
        step: "01",
        title: "Request a Quote",
        description: "Tell us about your space and cleaning needs. We'll respond within 24 hours.",
    },
    {
        step: "02",
        title: "Book Your Clean",
        description: "Choose a date and time that fits your schedule. We're flexible.",
    },
    {
        step: "03",
        title: "We Get to Work",
        description: "Our trained professionals arrive on time, equipped and ready.",
    },
    {
        step: "04",
        title: "Enjoy the Results",
        description: "Walk into a spotless space. Satisfaction guaranteed.",
    },
]

export default function HowItWorks() {
    return (
        <section className="py-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Getting started is simple. Four easy steps to a cleaner space.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div key={item.title} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                            )}
                            
                            <div className="relative bg-card rounded-2xl p-6 border border-border text-center aspect-square flex flex-col justify-center items-center">
                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
