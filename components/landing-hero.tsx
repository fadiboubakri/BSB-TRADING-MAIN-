import type React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Cog, Code2, LifeBuoy } from "lucide-react"
import Link from "next/link"

export function LandingHero() {
  return (
    <section className="relative w-full" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/manus-hero.jpg')" }}
        role="img"
        aria-label="Cinematic night city background"
      />
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      {/* Subtle neon beams */}
      <div className="absolute inset-0 -z-10 pointer-events-none neon-beams" />

      <div className="container pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-chip text-xs text-white/80 mb-6">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>{"#1 Plateforme d'investissement innovante"}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="neon-text-blue">Maximisez vos performances</span>
            <br />
            <span className="text-white">avec un suivi transparent.</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80">
            Données fiables, configuration rapide et assistance 24/7. Une expérience élégante, propulsée par une
            technologie de pointe.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild className="btn-gradient-glow px-6 h-11 text-base">
              <Link href="/register">Commencer</Link>
            </Button>
            <Button asChild variant="secondary" className="px-6 h-11 text-base glass-button hover:bg-white/15">
              <Link href="/login">Connexion</Link>
            </Button>
          </div>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <FeatureChip icon={<Cog className="h-4 w-4 text-emerald-400" />} label="Configuration en 5 minutes" />
            <FeatureChip icon={<Code2 className="h-4 w-4 text-sky-400" />} label="Aucun code requis" />
            <FeatureChip icon={<LifeBuoy className="h-4 w-4 text-indigo-400" />} label="Support 24/7 exceptionnel" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass-chip px-3 py-1 rounded-full inline-flex items-center gap-2 text-white/80">
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
