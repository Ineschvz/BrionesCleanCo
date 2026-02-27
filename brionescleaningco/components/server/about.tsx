import Image from "next/image"
import { Heart, Sparkles, Home } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/owner-portrait.jpg"
                alt="Owner of Briones Cleaning Co."
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years of dedicated service to our community</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block px-4 py-1.5  text-primary text-sm font-medium mb-4">
              Meet the Owner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-foreground">
              From Humble Beginnings to a Passion for Clean Spaces
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hi, I'm [Owner Name], the founder of Briones Cleaning Co. My journey into the cleaning industry started over a decade ago when I took my first job cleaning offices to support my family. What began as a necessity quickly became a passion.
              </p>
              <p>
                I discovered that there's something deeply satisfying about transforming a space - watching the stress melt away from a client's face when they walk into their freshly cleaned home. That feeling of making a real difference in people's daily lives is what drives me every single day.
              </p>
              <p>
                When I'm not working, you'll find me spending time with my family, tending to my garden, and volunteering in our local community. These experiences remind me why I started Briones Cleaning - to create more time and peace of mind for families just like mine.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Family First</h4>
                  <p className="text-xs text-muted-foreground">Treating every home like our own</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Detail Obsessed</h4>
                  <p className="text-xs text-muted-foreground">The little things matter most</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Home className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Community Rooted</h4>
                  <p className="text-xs text-muted-foreground">Proudly serving our neighbors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
