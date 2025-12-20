"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, PaletteIcon, Rocket, ArrowRight } from "lucide-react"
import { Fragment } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Lightbulb,
    title: "Escribinos",
    description:
      "Comunicate con nosotros a través de nuestras redes sociales indicando el hogar que preferís y tus datos de contacto.",
    number: "01",
  },
  {
    icon: PaletteIcon,
    title: "Te contactamos",
    description:
      "Nos comunicaremos contigo para confirmar detalles y enviarte nuestro formulario de reservas para que completes.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Hospedate",
    description:
      "Nos encontramos en la residencia que seleccionaste a la hora que indicaste en el formulario para que la recorras y confirmes tu estadía.",
    number: "03",
  },
]

export function ProcessSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section ref={elementRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            🚀 En 3 pasos
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary">Hospedate</span> con nosotros
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Seguí estos 3 simples pasos para hospedarte en nuestras residencias de estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                key={index}
                className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${0.5 + index * 0.3}s` } : undefined}
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-linear-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
