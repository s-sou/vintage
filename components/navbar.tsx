"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
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
            <Link href="/#About" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Nosotros
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/#Services" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Servicios
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/#Residences" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Residencias
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/#process" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110">
              <span className="relative">
                Hospedate
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/#pakketten" className="text-sm font-medium hover:text-primary hover:font-bold transition-all duration-200 relative group inline-block hover:scale-110 mr-0">
              <span className="relative">
                Tour Virtual
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <div className="flex gap-4 border-l border-border pl-4">
              <Link
                href="https://wa.me/59894580911?text=Hola,%20tengo%20interés%20en%20hospedarme%20en%20una%20de%20sus%20residencias.."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://www.facebook.com/residenciauniversitariavintage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
              >
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/residencia_vintage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-130 transition-all duration-200"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">

            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
