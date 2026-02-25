"use client"

import { useState } from 'react';
import {Menu, X} from 'lucide-react'

const Links =[
    {href: "#about", label: "About"},
    {href: "#services", label: "Services"},
    {href: "#reviews", label: "Reviews"},
    {href: "#contact", label: "Contact"},
]


export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button
         type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    
        </button>
        {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {Links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
        )}
        </>
        
    )
}