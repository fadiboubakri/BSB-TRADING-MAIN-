import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrustedMerchants } from "@/components/trusted-merchants"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col wetracked-bg">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <TrustedMerchants />
    </div>
  )
}
