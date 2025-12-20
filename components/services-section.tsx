"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Wifi, Utensils, Waves, BookOpenText, ShieldCheck, Tv, Wind, Clock, Users, Bus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Wifi,
    title: "WiFi Gratis",
    description:
      "Conexión rápida en todas las áreas.",
  },
  {
    icon: Utensils,
    title: "Cocina Equipada",
    description:
      "Cocina completa con todos los accesorios.",
  },
  {
    icon: Waves,
    title: "Lavandería",
    description:
      "Servicio de lavandería disponible.",
  },
  {
    icon: BookOpenText,
    title: "Salas de Estudio",
    description:
      "Espacios tranquilos y bien equipados.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad 24/7",
    description:
      "Protección constante para tu tranquilidad.",
  },
  {
    icon: Tv,
    title: "Sala de TV",
    description:
      "Espacio compartido para entretenerte.",
  },
  {
    icon: Wind,
    title: "Limpieza",
    description:
      "Servicio regular para áreas comunes.",
  },
  {
    icon: Clock,
    title: "Acceso 24hs",
    description:
      "Entra y salí cuando lo necesites.",
  },
  {
    icon: Users,
    title: "Áreas Comunes",
    description:
      "Espacios para socializar y hacer amigos.",
  },
  {
    icon: Bus,
    title: "Transporte Público",
    description:
      "Acceso a múltiples rutas de ómnibus.",
  },
]

export function ServicesSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} id="Services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            Comodidades
          </div>
        </div>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Todo lo que necesitás <span className="text-primary">para Estudiar</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-md ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
          Diseñamos cada detalle pensando en tu comodidad y bienestar. Encontrá todo lo necesario para una experiencia universitaria exitosa.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm cursor-pointer ${
                index >= 6 ? 'hidden lg:flex lg:flex-col' : ''
              }`}
            >
              <CardHeader className="space-y-0">
                <div className="mb-4 flex justify-center p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mt-0">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
