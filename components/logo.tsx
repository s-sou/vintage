import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {/* Pink angle brackets */}
        <div className="mb-6 mt-4 flex justify-center">
                  <Image
                    src="/LogoVintage.png"
                    alt="Residencia Vintage Logo"
                    width={32}
                    height={32}
                    className="w-12 h-12 md:w-12 md:h-12 rounded-full object-cover shadow-2xl border-2 border-white/20"
                  />
                </div>
        {/* Brand text */}
        <span className="text-xl font-light tracking-tight ml-1">Vintage</span>
      </div>
    </div>
  )
}
