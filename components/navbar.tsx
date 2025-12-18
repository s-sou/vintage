"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-navbar ${
        isScrolled ? "backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#About" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Nosotros
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#diensten" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Servicios
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Residencias
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#pakketten" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Tour Virtual
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Contacto
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">

            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
