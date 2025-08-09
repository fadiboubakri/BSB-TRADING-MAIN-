import Link from "next/link"
import { MarketingHeader } from "@/components/marketing-header"
import { LandingHero } from "@/components/landing-hero"
import { TrustedStrip } from "@/components/trusted-strip"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(4,8,16)] text-white">
      <MarketingHeader />
      <main className="flex-1">
        <LandingHero />
        <TrustedStrip />
      </main>
      <footer className="border-t border-white/10">
        <div className="container py-6 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/90">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/90">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white/90">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
