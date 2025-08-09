export function TrustedStrip() {
  return (
    <section aria-label="Trusted by" className="relative">
      {/* soft divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container py-10">
        <p className="text-center text-white/60 text-sm mb-6">
          Déjà approuvé par <span className="text-white">7,000+ utilisateurs</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/40">
          <span className="brand-faint">ONYX</span>
          <span className="brand-faint">AMIRI</span>
          <span className="brand-faint">Polarwise</span>
          <span className="brand-faint">Omnify</span>
          <span className="brand-faint">Clearly</span>
          <span className="brand-faint">Wardrobe</span>
        </div>
      </div>
    </section>
  )
}
