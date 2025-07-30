import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-dark-blue/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=24&width=24" alt="Wetracked.io Logo" width={24} height={24} />
            <span className="font-bold text-white">wetracked.io</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gray-900 rounded-md shadow-lg">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Wetracked.io</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            The ultimate ad tracking solution.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/products/overview" title="Overview">
                      Learn about our core features.
                    </ListItem>
                    <ListItem href="/products/features" title="Features">
                      Explore detailed capabilities.
                    </ListItem>
                    <ListItem href="/products/integrations" title="Integrations">
                      Connect with your favorite platforms.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-900 rounded-md shadow-lg">
                    <ListItem href="/resources/blog" title="Blog">
                      Read our latest articles.
                    </ListItem>
                    <ListItem href="/resources/guides" title="Guides">
                      Step-by-step tutorials.
                    </ListItem>
                    <ListItem href="/resources/faq" title="FAQ">
                      Frequently asked questions.
                    </ListItem>
                    <ListItem href="/resources/support" title="Support">
                      Get help from our team.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/integrations" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white")}
                  >
                    Integrations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white")}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2" asChild>
            <Link href="/register">Sign up</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-accent-foreground focus:bg-gray-800 focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
