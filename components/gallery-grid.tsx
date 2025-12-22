"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type GalleryImage = { src: string; alt: string }

export function GalleryGrid({
  images,
  title = "Visor de imágenes",
}: {
  images: GalleryImage[]
  title?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const total = images.length
  const hasOpen = openIndex !== null

  const showNext = useCallback(() => {
    if (openIndex === null) return
    setOpenIndex((openIndex + 1) % total)
  }, [openIndex, total])

  const showPrev = useCallback(() => {
    if (openIndex === null) return
    setOpenIndex((openIndex + total - 1) % total)
  }, [openIndex, total])

  useEffect(() => {
    if (!hasOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [hasOpen, showNext, showPrev])

  const gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
  const sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"

  return (
    <>
      <div className={`w-full mx-auto grid ${gridCols}`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className="group relative w-full aspect-4/3 overflow-hidden rounded-xl border border-border bg-card cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5"
            onClick={() => setOpenIndex(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05] will-change-transform"
              sizes={sizes}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <Dialog open={hasOpen} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent aria-label={title} className="sm:max-w-3xl md:max-w-5xl p-0 border-none bg-transparent shadow-none duration-300">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {openIndex !== null && (
            <div className="relative w-[92vw] max-w-5xl h-[78vh] sm:w-[85vw] sm:h-[80vh]">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                fill
                className="object-contain select-none"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black/70 text-white text-sm px-3 py-1 pointer-events-auto">
                    {openIndex + 1}/{total}
                  </div>
                  <button
                    aria-label="Anterior"
                    onClick={showPrev}
                    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/70 text-white p-3 text-2xl hover:bg-black/80 focus:outline-hidden pointer-events-auto"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Siguiente"
                    onClick={showNext}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/70 text-white p-3 text-2xl hover:bg-black/80 focus:outline-hidden pointer-events-auto"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
