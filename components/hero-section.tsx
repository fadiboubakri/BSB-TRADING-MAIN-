import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-dark-blue text-white overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
            #1 Highest Rated Ad Tracking Software For Shopify
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Losing 60% of ad spend? Get every <span className="wetracked-gradient-text">conversion</span> back.
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            The only solution that pushes 100% accurate data into your ads manager. Raise ROAS by 50% in just 1 week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="wetracked-button-gradient text-white px-6 py-3 rounded-md font-semibold text-lg" asChild>
              <Link href="/register">Start 14 day free trial</Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-800 bg-transparent"
              asChild
            >
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Set up in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Exceptional 24/7 support</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Image src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
            <Image src="/placeholder.svg?height=24&width=24" alt="G2" width={24} height={24} />
            <Image src="/placeholder.svg?height=24&width=24" alt="Capterra" width={24} height={24} />
          </div>
        </div>
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="https://sjc.microlink.io/HmeqteHi1nIDL8QXcJQGsPf3deCJCCXiETfNgWaXGIvnQsXvPWCaLekokJSEz6n85O9USY65sQDl-N_7nj0BLA.jpeg"
            alt="Abstract visual with interconnected circles and icons"
            layout="fill"
            objectFit="contain"
            className="opacity-70"
          />
          {/* Placeholder for the live notification card */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Sarah F."
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-white">Sarah F.</p>
              <p className="text-xs text-gray-400">21 sec ago</p>
            </div>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">$352.49 PURCHASE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
