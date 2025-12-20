import Image from "next/image"
import { adumu } from "@/lib/fonts"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <div className="mb-6 mt-4 flex justify-center">
          <Image
            src="/LogoVintage.png"
            alt="Residencia Vintage Logo"
            width={32}
            height={32}
            className="w-12 h-12 md:w-12 md:h-12 rounded-full object-cover shadow-2xl border-2 border-white/20"
          />
        </div>
        <span 
          className={`text-xl tracking-wide ml-1 font-light ${adumu.className}`} 
          style={{ 
            color: "var(--logo-text)"
          }}
        >
          VINTAGE
        </span>
      </div>
    </div>
  )
}
