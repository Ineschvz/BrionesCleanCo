import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
            src="/HeroImage.webp"
            alt=""
            fill
            className="object-cover"
            priority
        />

        {/* Diagonal half overlay: left/top half uses a 70% foreground tint, the other half is transparent */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage:
                    "linear-gradient(135deg, rgba(17,24,39,0.7) 70%, rgba(17,24,39,0) 50%)",
                backgroundRepeat: "no-repeat",
            }}
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center px-4 sm:px-6 py-20">
            <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-white/70 mb-4">
                Professional Cleaning Services
            </p>

            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                A cleaner space,{" "}
                <span className="text-primary">without the hassle</span>
            </h1>

            <p className="text-pretty text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Briones Cleaning Co. delivers impeccable cleaning for your home or
                office. We handle the mess so you can enjoy your space.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
                >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href="tel:+18885552532"
                    className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
                >
                    (888) 555-2532
                </a>
            </div>
        </div>
    </section>
  )
}
