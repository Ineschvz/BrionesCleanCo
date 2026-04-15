import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { ServiceAreaMap } from "@/components/client/service-area-map"  

export default function SiteFooter() {
    return (
        <footer className="bg-secondary border-t border-border">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/Briones -_Primary Logo Full Color.png"
                                alt="Briones Cleaning Co."
                                width={160}
                                height={48}
                                className="h-24 w-auto"
                            />
                        </Link>
                       
                        <div className="mt-4 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/janitorial" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Janitorial
                                </Link>
                            </li>
                            <li>
                                <Link href="/carpet" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Carpet Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/floor" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Floor Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/event-cleaning" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Event Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/emergency-cleanup" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Emergency Water Extraction
                                </Link>
                            </li>
                             <li>
                                <Link href="/window-cleaning" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Window Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <a href="tel:+19196970333" className="text-muted-foreground hover:text-foreground transition-colors">
                                    919-697-0333
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <a href="mailto:brionescleaningco@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                    brionescleaningco@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Serving the Greater NC Area</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <ServiceAreaMap />
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Briones Cleaning Co. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
