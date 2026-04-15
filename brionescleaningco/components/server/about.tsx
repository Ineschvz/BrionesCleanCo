import { Heart, Sparkles, Home, Quote } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            A Family Business That Cares About Yours
          </h2>
        </div>

        {/* Feature quote + stats row */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Quote card — spans 3 cols */}
          <div className="lg:col-span-3 relative bg-primary/5 border border-primary/15 rounded-3xl p-8 sm:p-10">
            <Quote className="h-10 w-10 text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">
              My journey into the cleaning industry started over a decade ago when I took my first job cleaning offices to support my family. What began as a necessity quickly became a passion — there&apos;s something deeply satisfying about transforming a space and watching the stress melt away from a client&apos;s face.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That feeling of making a real difference in people&apos;s daily lives is what drives me every single day. I started Briones Cleaning Co. to create more time and peace of mind for families just like mine.
            </p>
            <div className="mt-8 pt-6 border-t border-primary/15">
              <p className="font-semibold text-foreground">Briones Cleaning Co.</p>
              <p className="text-sm text-muted-foreground">Locally Owned &amp; Operated Since 2010</p>
            </div>
          </div>

          {/* Stats column — spans 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-center">
              <p className="text-3xl sm:text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90 mt-1">Years of dedicated service</p>
            </div>
            <div className="rounded-2xl bg-foreground text-background p-6 flex flex-col justify-center">
              <p className="text-3xl sm:text-4xl font-bold">500+</p>
              <p className="text-sm opacity-80 mt-1">Clients served across NC</p>
            </div>
            <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 flex flex-col justify-center col-span-2 lg:col-span-1">
              <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction guaranteed</p>
            </div>
          </div>
        </div>

        {/* Values row */}
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
            <p className="text-sm text-muted-foreground">Proudly serving our North Carolina neighbors since 2010.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
