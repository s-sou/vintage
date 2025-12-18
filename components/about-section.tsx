"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Home, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

//  Valores para las 4 cards pequeñas
const values = [
  {
    title: "Ubicación Céntrica",
    description:
      "A pasos de universidades y servicios en el centro de Montevideo",
    icon: MapPin,
  },
  {
    title: "Comunidad Estudiantil",
    description:
      "Ambiente universitario con espacios para socializar y estudiar",
    icon: Users,
  },
  {
    title: "Confort Moderno",
    description: "Instalaciones renovadas con todas las comodidades",
    icon: Home,
  },
  {
    title: "Ambiente Familiar",
    description: "Un hogar lejos de casa con atención personalizada",
    icon: Heart,
  },
];

const galleryImages = [
  { src: "/ImgVintage1.png", alt: "Fondo" },
  { src: "/ImgVintage2.png", alt: "Parrillero" },
  { src: "/ImgVintage3.png", alt: "Barbacoa" },
  { src: "/ImgVintage4.png", alt: "Sala de estudio" },
];

export function AboutSection() {
  return (
    <section id="About" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Título centrado ocupando todo el ancho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            Somos parte de tu vida
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Tu Residencia Universitaria {" "}
            <span className="text-primary relative">
              en Montevideo
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4C50 2 150 6 200 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Layout de 2 columnas: Texto+Cards | Imágenes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna Izquierda: Párrafo + 4 Cards */}
          <div className="space-y-8">
            {/* Párrafo */}
            <p className="text-md text-muted-foreground leading-relaxed text-pretty">
              Residencia Vintage es más que un lugar para vivir: es una
              comunidad de estudiantes que comparten la experiencia
              universitaria en un ambiente cálido y acogedor. Ubicada en pleno
              centro de Montevideo, ofrecemos la combinación perfecta de
              comodidad, ubicación y vida comunitaria. <br />
              <br />
              Nuestras instalaciones modernas incluyen habitaciones individuales
              y compartidas, espacios comunes para el estudio y la recreación, y
              todos los servicios necesarios para que te concentres en lo más
              importante: tu formación académica.
            </p>

            {/* 4 Cards pequeñas y cuadradas */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-card/50 cursor-pointer hover:-translate-y-2"
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className="h-6 w-6 text-primary mb-2 mx-auto group-hover:scale-125 transition-transform" />
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: 4 Cards con imágenes*/}
          <div className="grid grid-cols-2 gap-4 content-start lg:mt-12">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 p-0"
              >
                <div className="relative aspect-4/3 bg-muted overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
