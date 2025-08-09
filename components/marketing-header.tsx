import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full backdrop-blur-xl bg-gradient-to-b from-black/40 to-black/10 border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            <span className="neon-text-blue">BSB Bridge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="#services" className="hover:text-white">
              Services
            </Link>
            <Link href="#trading" className="hover:text-white">
              Trading
            </Link>
            <Link href="#battle-pass" className="hover:text-white">
              Battle Pass
            </Link>
            <Link href="#couture" className="hover:text-white">
              Couture
            </Link>
            <Link href="#how" className="hover:text-white">
              Comment ça marche
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="px-4 h-9 glass-button hover:bg-white/20">
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild className="px-4 h-9 btn-gradient-glow">
              <Link href="/register">Commencer</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
