"use client"
import {useState, useEffect, useCallback} from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

//typescript check for gallery images
interface GalleryImages {
    src: string;
    alt: string;
}

//typescript check for props
interface GalleryCarouselProps {
    images: GalleryImages[];
    title: string;
    subtitle: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    objectFit?: "cover" | "contain"
}


export default function GalleryCarousel({
    images,
    title,
    subtitle,
    autoPlay = true,
    autoPlayInterval = 5000,
    objectFit = "contain",
}: GalleryCarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const goToNext = useCallback(()=> {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const goToPrev = useCallback(()=> {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

    useEffect(() => {
    if (!autoPlay || isHovered) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, goToNext])

  if (images.length === 0) return null

    return (
           <section id="gallery" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={objectFit === "contain" ? "object-contain" : "object-cover"}
                  priority={index === 0}
                />
                
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            {images.map((image, index) => (
              <button
                key={image.src}
                onClick={() => goToSlide(index)}
                className={`relative h-16 w-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dot Indicators (for mobile) */}
          <div className="mt-4 flex gap-2 justify-center sm:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}