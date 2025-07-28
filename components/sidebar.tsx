"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
  routes: {
    label: string
    icon: React.ReactNode
    href: string
    active: boolean
  }[]
  onLogout: () => void
}

export function Sidebar({ className, routes, onLogout }: SidebarProps) {
  const { isOpen, toggle, isMobile } = useSidebar()
  const pathname = usePathname()

  if (isMobile && !isOpen) return null

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-card border-r relative",
        isOpen ? "w-64" : "w-[70px]",
        isMobile && isOpen ? "fixed inset-y-0 left-0 z-50" : "",
        className,
      )}
    >
      <div className="p-4 flex justify-between items-center">
        <div className={cn("overflow-hidden", !isOpen && "w-0")}>
          <Logo />
        </div>
        <Button variant="ghost" size="icon" onClick={toggle} className="h-8 w-8">
          <ChevronLeft className={cn("h-4 w-4 transition-all", !isOpen && "rotate-180")} />
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                route.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {route.icon}
              <span className={cn("transition-all", !isOpen && "w-0 opacity-0 hidden")}>{route.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
