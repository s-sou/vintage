import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const images = [
  { src: "/can-uitzendbureau-project.png", alt: "Residencia Parque Rodó II - fachada" },
  { src: "/HeroVintage.png", alt: "Residencia Parque Rodó II - interior" },
  { src: "/LogoVintage.png", alt: "Residencia Parque Rodó II - detalle" },
]

export default function Parque2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold text-primary">Residencias</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3">Residencia Parque Rodó II</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Galería de fotos de la Residencia Parque Rodó II.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div key={idx} className="relative w-full aspect-4/3 overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
