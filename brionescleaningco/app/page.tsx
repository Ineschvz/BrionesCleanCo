import Image from "next/image";
import Hero from "@/components/server/hero";
import About from "@/components/server/about";
import Services from "@/components/server/services";
import Contact from "@/components/server/contact";

export default function Home() {
  return (
   <main className="min-h-screen">
    <Hero />
    <About />
    <Services />
    <Contact />

   </main>
  );
}
