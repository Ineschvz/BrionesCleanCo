import Image from "next/image";
import Hero from "@/components/server/hero";
import About from "@/components/server/about";
import Services from "@/components/server/services";
import Contact from "@/components/server/contact";
import HowItWorks from "@/components/server/how-it-works";
import { Testimonials } from "@/components/server/testimonials";


export default function Home() {
  return (
   <main className="min-h-screen">
    <Hero />
    <About />
    <Services />
    <HowItWorks />
    <Testimonials />
    <Contact />

   </main>
  );
}
