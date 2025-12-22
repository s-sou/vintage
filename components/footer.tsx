import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { adumu, specialElite } from "@/lib/fonts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="order-3 md:order-1 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="flex items-center gap-1">
                <Image
                  src="/LogoVintage.png"
                  alt="Residencia Vintage Logo"
                  width={32}
                  height={32}
                  unoptimized={true}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span
                  className={`text-xl tracking-wide ml-1 font-light ${adumu.className}`}
                  style={{
                    color: "var(--logo-text)",
                  }}
                >
                  VINTAGE
                </span>
              </div>
            </div>
             <p className={`text-sm tracking-wide ${specialElite.className}`}>Somos parte de tu historia</p>
             <br />
             <br />
            <p className="text-sm text-muted-foreground leading-relaxed">
              © 2025 Todos los derechos reservados.<br /> Hecho con ❤️ en Montevideo
            </p>
          </div>

          <div className="order-2 md:order-2 text-center md:text-left">
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#About"
                  className="text-sm text-muted-foreground hover:text-primary hover:font-semibold hover:translate-x-1 transition-all duration-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-sm text-muted-foreground hover:text-primary hover:font-semibold hover:translate-x-1 transition-all duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-muted-foreground hover:text-primary hover:font-semibold hover:translate-x-1 transition-all duration-200"
                >
                  Residencias
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary hover:font-semibold hover:translate-x-1 transition-all duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-3 text-center md:text-left">
            <h4 className="font-semibold mb-4">Redes</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/residenciauniversitariavintage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:font-semibold hover:scale-130 transition-all duration-200"
              >
                <FaFacebook className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/residencia_vintage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:font-semibold hover:scale-130 transition-all duration-200"
              >
                <FaInstagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/59894580911?text=Hola,%20tengo%20interés%20en%20hospedarme%20en%20una%20de%20sus%20residencias.."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:font-semibold hover:scale-130 transition-all duration-200"
              >
                <FaWhatsapp className="h-7 w-7" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
