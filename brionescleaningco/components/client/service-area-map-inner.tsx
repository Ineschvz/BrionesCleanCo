"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet"
import L from "leaflet"

const DURHAM_CENTER: [number, number] = [35.994, -78.8986]
const RADIUS_METERS = 241_402 // 150 miles

const markerIcon = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2a7fbf" width="32" height="32"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

export default function ServiceAreaMapInner() {
  return (
    <MapContainer
      center={DURHAM_CENTER}
      zoom={6}
      scrollWheelZoom={false}
      className="h-[200px] sm:h-[250px] rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={DURHAM_CENTER}
        radius={RADIUS_METERS}
        pathOptions={{
          color: "#2a7fbf",
          fillColor: "#2a7fbf",
          fillOpacity: 0.15,
          weight: 2,
        }}
      />
      <Marker position={DURHAM_CENTER} icon={markerIcon}>
        <Popup>Briones Cleaning Co. — Durham, NC</Popup>
      </Marker>
    </MapContainer>
  )
}
