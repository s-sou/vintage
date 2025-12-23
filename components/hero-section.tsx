"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { adumu, specialElite } from "@/lib/fonts";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={elementRef} className="relative h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{
            top: "20%",
            left: "10%",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "15%",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        {/* Subtle mouse-following gradient */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-muted/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
          }}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroVintage.png"
          alt="Residencia Vintage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10 pt-20 pb-20 md:pb-28 lg:pb-36">
        <div className="mb-4 mt-8 flex justify-center">
          <Image
            src="/LogoVintage.png"
            alt="Residencia Vintage Logo"
            width={96}
            height={96}
            className="w-32 h-32 md:w-32 md:h-32 rounded-full object-cover shadow-2xl border-2 border-white/20"
            unoptimized={true}
          />
        </div>

        <div
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            backgroundColor: "rgb(140, 196, 204, 0.3)",
            borderColor: "rgb(140, 196, 204, 0.3)",
            borderWidth: "1px",
          }}
        >
          {/* <Sparkles className="w-3 h-3" style={{ color: "var(--vintage-cream)" }} /> */}
          <span className={`text-sm tracking-wide ${specialElite.className}`} style={{ color: "var(--vintage-cream)" }}>
            Somos parte de tu historia
          </span>
        </div>

        <h1 className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2 text-balance leading-snug ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Residencias
          <br />
          <span className={`text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wider ${adumu.className}`} style={{ color: "var(--vintage-red)" }}>VINTAGE</span>
        </h1>

        <p className={`text-base sm:text-lg text-white mb-6 max-w-xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
          Ubicadas en el corazón de Montevideo, ofrecemos un espacio moderno y
          confortable para estudiantes universitarios que buscan calidad,
          comunidad y cercanía.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <Button
            size="lg"
            className="font-semibold group shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all"
            asChild
          >
            <a href="#process">
              Inscripciones Abiertas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-white hover:bg-primary/5 hover:border-primary font-semibold backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#portfolio">Tour Virtual</a>
          </Button>
        </div>
        
      </div>
      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
