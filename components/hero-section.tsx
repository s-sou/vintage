"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* <div className="absolute inset-0 pointer-events-none">
        <Code2
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            top: "15%",
            left: "15%",
            animationDelay: "0s",
          }}
          size={40}
        />
        <Palette
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            top: "25%",
            right: "20%",
            animationDelay: "2s",
          }}
          size={35}
        />
        <Sparkles
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            bottom: "20%",
            left: "20%",
            animationDelay: "1s",
          }}
          size={30}
        />
      </div> */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroVintage.png"
          alt="Residencia Vintage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10 pt-20 pb-20 md:pb-28 lg:pb-36">
        <div className="mb-6 mt-4 flex justify-center">
          <Image
            src="/LogoVintage.png"
            alt="Residencia Vintage Logo"
            width={96}
            height={96}
            className="w-32 h-32 md:w-32 md:h-32 rounded-full object-cover shadow-2xl border-2 border-white/20"
          />
        </div>

        <div
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full mb-4 animate-fade-in-up"
          style={{
            backgroundColor: "rgb(140, 196, 204, 0.3)",
            borderColor: "rgb(140, 196, 204, 0.3)",
            borderWidth: "1px",
          }}
        >
          <Sparkles className="w-3 h-3 text-white" />
          <span className="text-xs text-white">
            Tu Hogar Universitario en Montevideo
          </span>
        </div>

        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 animate-fade-in-up text-balance">
          Residencia
          <br />
          <span className="text-primary relative inline-block">VINTAGE</span>
        </h1>

        <p className="text-base sm:text-lg text-white mb-10 max-w-xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Ubicadas en el corazón de Montevideo, ofrecemos un espacio moderno y
          confortable para estudiantes universitarios que buscan calidad,
          comunidad y cercanía.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-6">
          <Button
            size="lg"
            className="font-semibold group shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all"
            asChild
          >
            <a href="#contact">
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
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
