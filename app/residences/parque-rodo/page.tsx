"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const images = Array.from({ length: 50 }, (_, i) => ({
  src: `/ParqueRodo${i + 1}.jpg`,
  alt: `Residencia Parque Rodó - Imagen ${i + 1}`
}))

export default function ParquePage() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>()
  const order = ["parque-rodo", "palermo", "parque-rodo-2"]
  const current = "parque-rodo"
  const idx = order.indexOf(current)
  const prevSlug = order[(idx - 1 + order.length) % order.length]
  const nextSlug = order[(idx + 1) % order.length]
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold text-primary">Residencias</p>
          <div className="mt-2 mb-3 flex items-center justify-center gap-6">
            <Link href={`/residences/${prevSlug}`} aria-label="Anterior" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-primary/5 text-primary/80 hover:bg-primary/15 hover:text-primary shadow-sm transition">
              ‹
            </Link>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Residencia Parque Rodó</h1>
            <Link href={`/residences/${nextSlug}`} aria-label="Siguiente" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-primary/5 text-primary/80 hover:bg-primary/15 hover:text-primary shadow-sm transition">
              ›
            </Link>
          </div>
          <p className={`text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Galería de fotos de la Residencia Parque Rodó.
          </p>
        </div>
        <GalleryGrid images={images} title="Visor de imágenes - Parque Rodó" />
      </main>
      <Footer />
    </div>
  )
}
