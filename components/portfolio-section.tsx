"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const residences = [
  {
    title: "Residencia Parque Rodó",
    slug: "parque-rodo",
    dir: "Dirección 1",
    image: "/HeroVintage.png",
    features: [
      "Habitaciones individuales y compartidas",
      "Cerca de Parque Rodó y la playa",
      "Áreas comunes amplias",
      "WiFi de alta velocidad",
      "Cocina equipada"
    ],
  },
  {
    title: "Residencia Palermo",
    slug: "palermo",
    dir: "Dirección 2",
    image: "/ImgVintage5.png",
    features: [
      "Ubicación céntrica y tranquila",
      "Cerca de universidades",
      "Salas de estudio",
      "Seguridad 24/7",
      "Transporte público cercano"
    ],
  },
  {
    title: "¡Nueva!\n Residencia Parque Rodó II",
    slug: "parque-rodo-2",
    dir: "Dirección 3",
    image: "/ImgVintage6.png",
    features: [
      "Espacios modernos y luminosos",
      "Diseño arquitectónico único",
      "Áreas de convivencia",
      "Equipamiento completo",
      "Excelente conectividad"
    ],
  },
]

export function PortfolioSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section ref={elementRef} id="Residences" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            Ubicaciónes
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Nuestras <span className="text-primary">Residencias</span></h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Contamos con tres residencias en Montevideo. Elegí la que mejor se adapte a tu ubicación y preferencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {residences.map((residence, index) => (
              <Link key={index} href={`/residences/${residence.slug}`} className="block">
                <Card
                  className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={residence.image || "/placeholder.svg"}
                      alt={residence.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6 pb-4">
                    <p className="text-sm text-primary font-semibold mb-2">{residence.dir}</p>
                    <h3 className="text-xl font-bold mb-4 whitespace-pre-line">{residence.title}</h3>
                    <ul className="space-y-2">
                      {residence.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
