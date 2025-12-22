"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden cursor-pointer"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    );
  }

  const menuItems = [
    { href: "/#About", label: "Nosotros" },
    { href: "/#Services", label: "Servicios" },
    { href: "/#Residences", label: "Residencias" },
    { href: "/#contact", label: "Contacto" },
    { href: "/#pakketten", label: "Tour Virtual" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription>
            Navega por las secciones del sitio
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium hover:text-primary hover:bg-primary/10 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">Redes</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://wa.me/59894580911?text=Hola,%20tengo%20interés%20en%20hospedarme%20en%20una%20de%20sus%20residencias.."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="https://www.facebook.com/residenciauniversitariavintage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
            >
              <FaFacebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/residencia_vintage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
            >
              <FaInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
