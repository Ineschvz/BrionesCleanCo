import { Heart, Sparkles, Home } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Story + Stats two-column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">

          {/* Left — story */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-foreground">
              A Family Business That Cares About Yours
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Amado&apos;s journey in the cleaning industry started over 20 years ago. In 2019, after years of hard work and dedication, he turned that experience into his own business.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since then, his priority has been to deliver the best service possible through a unique tailored approach that delivers quality results for our customers.
            </p>
            <div className="pt-6 border-t border-border">
              <p className="font-semibold text-foreground">Owner Amado Briones, Briones Cleaning Co.</p>
              <p className="text-sm text-muted-foreground mt-1">Locally Owned &amp; Operated Since 2019</p>
            </div>
          </div>

          {/* Right — stat collage */}
          <div className="rounded-3xl bg-primary/5 border border-primary/15 p-8 flex flex-col gap-4">
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-center">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm opacity-90 mt-1">Years of dedicated service</p>
            </div>
            <div className="rounded-2xl bg-foreground text-background p-6 flex flex-col justify-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm opacity-80 mt-1">Clients served across NC</p>
            </div>
            <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 flex flex-col justify-center">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction guaranteed</p>
            </div>
          </div>
        </div>

        {/* Values row */}
        <div className="rounded-3xl bg-secondary/50 p-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Family First</h4>
              <p className="text-sm text-muted-foreground">We treat every space like our own home, with care and respect.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Detail Obsessed</h4>
              <p className="text-sm text-muted-foreground">The little things matter most — we never cut corners.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Community Rooted</h4>
              <p className="text-sm text-muted-foreground">Proudly serving our North Carolina neighbors since 2019.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
