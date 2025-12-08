"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#over-ons", label: "Nosotros" },
    { href: "#diensten", label: "Servicios" },
    { href: "#portfolio", label: "Residencias" },
    { href: "#pakketten", label: "Tour Virtual" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription>Navega por las secciones del sitio</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
