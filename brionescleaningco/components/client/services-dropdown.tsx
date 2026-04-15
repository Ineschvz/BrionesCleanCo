"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const services = [
  { href: "/carpet", label: "Upholstery & Rug Cleaning" },
  { href: "/floor", label: "Floor Care" },
  { href: "/janitorial", label: "Janitorial" },
  { href: "/emergency-cleanup", label: "Emergency Water Extraction" },
  { href: "/event-cleaning", label: "Event Setup & Cleanup" },
  { href: "/window-cleaning", label: "Window Cleaning" },
]

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-lg text-muted-foreground hover:text-foreground transition-colors"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-border bg-background shadow-xl py-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
