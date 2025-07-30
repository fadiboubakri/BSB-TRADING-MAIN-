import { Button } from "@/components/ui/button"
import {
  CheckIcon,
  StarIcon,
  GlobeIcon,
  ZapIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon as TiktokIcon,
  InstagramIcon as SnapchatIcon,
  ShoppingBagIcon,
  PinIcon as PinterestIcon,
  ChromeIcon as GoogleIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">
            #1 Highest Rated Ad Tracking Software For Shopify
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Losing 60% of ad spend? Get every conversion back.
          </h1>
          <p className="max-w-[600px] text-gray-400 md:text-xl">
            The only solution that pushes 100% accurate data into your ads manager. Raise ROAS by 50% in just 1 week.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Start 14 day free trial</Button>
            <Button className="border border-gray-700 bg-gray-900 text-white hover:bg-gray-800" variant="outline">
              Book a demo
            </Button>
          </div>
          <div className="grid gap-2 pt-4 text-gray-400 md:grid-cols-3">
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-green-500" />
              Set up in 5 minutes
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-green-500" />
              No coding required
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-green-500" />
              Exceptional 24/7 support
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <StarIcon className="h-6 w-6 text-yellow-400" />
            <img src="/placeholder.svg?height=24&width=24" alt="G2 logo" className="h-6 w-6" />
            <img src="/placeholder.svg?height=24&width=24" alt="Capterra logo" className="h-6 w-6" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Placeholder for the complex circular graphic */}
          <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-700 animate-pulse" />
            <div className="absolute h-[200px] w-[200px] rounded-full border border-gray-700 animate-pulse-slow" />
            <div className="absolute h-[100px] w-[100px] rounded-full border border-gray-700 animate-pulse-slower" />

            {/* Central icon */}
            <GlobeIcon className="h-12 w-12 text-white absolute z-10" />

            {/* Icons around the circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <FacebookIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute top-[25%] right-[15%] -translate-x-1/2 -translate-y-1/2">
                <TiktokIcon className="h-8 w-8 text-black bg-white rounded-full p-1" />
              </div>
              <div className="absolute top-[50%] right-[5%] -translate-x-1/2 -translate-y-1/2">
                <PinterestIcon className="h-8 w-8 text-red-600" />
              </div>
              <div className="absolute bottom-[25%] right-[15%] -translate-x-1/2 -translate-y-1/2">
                <GoogleIcon className="h-8 w-8 text-green-500" />
              </div>
              <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <XIcon className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                <ShoppingBagIcon className="h-8 w-8 text-green-500" />
              </div>
              <div className="absolute top-[50%] left-[5%] -translate-x-1/2 -translate-y-1/2">
                <SnapchatIcon className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                <ZapIcon className="h-8 w-8 text-purple-500" />
              </div>
            </div>

            {/* Notification pop-up */}
            <div className="absolute bottom-10 left-10 bg-gray-800 p-3 rounded-lg shadow-lg flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="Sarah F." src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-white">Sarah F.</p>
                <p className="text-xs text-gray-400">21 sec ago</p>
                <p className="text-xs text-gray-400">James M.</p>
                <p className="text-xs text-gray-400">21 sec ago</p>
              </div>
              <Button className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">$352.49 PURCHASE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
