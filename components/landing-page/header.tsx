import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"

export function LandingPageHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
      <Link className="flex items-center gap-2" href="#">
        <img src="/placeholder.svg?height=24&width=24" alt="wetracked.io logo" className="h-6 w-6" />
        <span className="text-lg font-semibold text-white">wetracked.io</span>
      </Link>
      <nav className="hidden space-x-6 md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white hover:text-gray-300" variant="ghost">
              Products
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Product 1</DropdownMenuItem>
            <DropdownMenuItem>Product 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white hover:text-gray-300" variant="ghost">
              Resources
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Blog</DropdownMenuItem>
            <DropdownMenuItem>Guides</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="text-white hover:text-gray-300" href="#">
          Integrations
        </Link>
        <Link className="text-white hover:text-gray-300" href="#">
          Pricing
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="text-white hover:text-gray-300" variant="ghost">
          Login
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign up</Button>
      </div>
    </header>
  )
}
