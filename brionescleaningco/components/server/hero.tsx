// import Image from "next/image"
// import { ArrowRight } from "lucide-react"

// export default function Hero() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
//         <Image
//             src="/HeroImage.webp"
//             alt=""
//             fill
//             className="object-cover"
//             priority
//         />

//         {/* Diagonal half overlay: left/top half uses a 70% foreground tint, the other half is transparent */}
//         <div
//             className="absolute inset-0"
//             style={{
//                 backgroundImage:
//                     "linear-gradient(135deg, rgba(17,24,39,0.7) 70%, rgba(17,24,39,0) 50%)",
//                 backgroundRepeat: "no-repeat",
//             }}
//         />

//         <div className="relative z-10 container mx-auto max-w-4xl text-center px-4 sm:px-6 py-20">
//             <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-white/70 mb-4">
//                 Professional Cleaning Services
//             </p>

//             <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
//                 A cleaner space,{" "}
//                 <span className="text-primary">without the hassle</span>
//             </h1>

//             <p className="text-pretty text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
//                 Briones Cleaning Co. delivers impeccable cleaning for your home or
//                 office. We handle the mess so you can enjoy your space.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <a
//                     href="#contact"
//                     className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
//                 >
//                     Get Your Free Quote
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a
//                     href="tel:+18885552532"
//                     className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
//                 >
//                     (888) 555-2532
//                 </a>
//             </div>
//         </div>
//     </section>
//   )
// }
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Fully Insured & Bonded",
  "Background-Checked Team",
  "Satisfaction Guaranteed",
]

export  default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/HeroImage.webp"
        alt="Professional cleaning service in action"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Trusted by 500+ Clients
            </span>

            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
              A cleaner Space, {" "}
              <span className="text-primary">Without the Hassle</span>
            </h1>

            <p className="text-pretty text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              We deliver meticulous cleaning services so you can focus on what matters most. Reliable, thorough, and always on time.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+18885552532"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call (888) 555-2532
              </a>
            </div>
          </div>

          {/* Right - Quick form card */}
          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-foreground mb-2">Request Your Free Estimate</h2>
            <p className="text-muted-foreground text-sm mb-6">We respond within 24 hours.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <select className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors">
                <option value="">Select Service Type</option>
                <option value="residential">Residential Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move">Move In / Move Out</option>
              </select>
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}