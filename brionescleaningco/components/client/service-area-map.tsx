"use client"

import dynamic from "next/dynamic"

const Map = dynamic(() => import("./service-area-map-inner"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] sm:h-[250px] rounded-lg bg-primary-foreground/10 animate-pulse" />
  ),
})

export function ServiceAreaMap() {
  return <Map />
}
