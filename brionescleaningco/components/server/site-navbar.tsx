
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '@/components/client/mobile-nav';
import ServicesDropdown from '@/components/client/services-dropdown';

export default function SiteNavbar(){
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Briones -_Primary Logo Full Color.png"
                        alt="Briones Cleaning Co."
                        width={160}
                        height={48}
                        className="h-40 w-auto"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#about" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                        About
                    </Link>
                    <ServicesDropdown />
                    <Link href="/#testimonials" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                        Testimonials
                    </Link>
                    <Link href="/#contact" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-3">
                    <a 
                    href="#contact"
                    className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Get a Quote
                    </a>
                    <MobileNav />
                </div>
            </div>
        
        </div>
        </header>
    )
}
