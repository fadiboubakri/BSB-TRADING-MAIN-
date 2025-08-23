"use client"

import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import { SidebarProvider } from "@/components/sidebar-provider"
import { useRouter } from "next/navigation"
import { Users, Trophy, Gift, Bell, Settings, LayoutDashboard } from "lucide-react"
import { usePathname } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    router.push("/login")
  }

  const routes = [
    {
      label: "Tableau de Bord",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/admin/dashboard",
      active: pathname === "/admin/dashboard",
    },
    {
      label: "Utilisateurs",
      icon: <Users className="h-5 w-5" />,
      href: "/admin/users",
      active: pathname.startsWith("/admin/users"),
    },
    {
      label: "Battle Pass",
      icon: <Trophy className="h-5 w-5" />,
      href: "/admin/missions",
      active: pathname.startsWith("/admin/missions"),
    },
    {
      label: "Récompenses",
      icon: <Gift className="h-5 w-5" />,
      href: "/admin/rewards",
      active: pathname.startsWith("/admin/rewards"),
    },
    {
      label: "Notifications",
      icon: <Bell className="h-5 w-5" />,
      href: "/admin/notifications",
      active: pathname === "/admin/notifications",
    },
    {
      label: "Paramètres",
      icon: <Settings className="h-5 w-5" />,
      href: "/admin/settings",
      active: pathname === "/admin/settings",
    },
  ]

  return (
    <LanguageProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar routes={routes} onLogout={handleLogout} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onLogout={handleLogout} userRole="admin" />
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </LanguageProvider>
  )
}
