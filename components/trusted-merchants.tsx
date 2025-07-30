import Image from "next/image"

export function TrustedMerchants() {
  return (
    <section className="py-16 bg-dark-blue text-white text-center">
      <div className="container space-y-8">
        <p className="text-lg text-gray-300">Trusted by 7,000+ satisfied merchants</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Onyx"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Amiri"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Alex Fedotoff"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Polarwise"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Omnify"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Clearly"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Naked Wardrobe"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
