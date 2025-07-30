import { LandingPageHeader } from "@/components/landing-page/header"
import { HeroSection } from "@/components/landing-page/hero-section"
import { TrustedBySection } from "@/components/landing-page/trusted-by-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <LandingPageHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
      </main>
    </div>
  )
}
