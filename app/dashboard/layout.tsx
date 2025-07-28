"use client"

import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import { SidebarProvider } from "@/components/sidebar-provider"
import { useRouter } from "next/navigation"
import { BarChart3, Flag, LayoutDashboard, LucideLink, Mail, Settings, Users, FileText } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: LayoutProps) {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
  }

  const routes = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      active: router.pathname === "/dashboard",
    },
    {
      label: "Users",
      icon: <Users className="h-5 w-5" />,
      href: "/dashboard/users",
      active: router.pathname.startsWith("/dashboard/users"),
    },
    {
      label: "Missions",
      icon: <Flag className="h-5 w-5" />,
      href: "/dashboard/missions",
      active: router.pathname.startsWith("/dashboard/missions"),
    },
    {
      label: "Performance",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/dashboard/performance",
      active: router.pathname === "/dashboard/performance",
    },
    {
      label: "Affiliates",
      icon: <LucideLink className="h-5 w-5" />,
      href: "/dashboard/affiliates",
      active: router.pathname.startsWith("/dashboard/affiliates"),
    },
    {
      label: "Notifications",
      icon: <Mail className="h-5 w-5" />,
      href: "/dashboard/notifications",
      active: router.pathname === "/dashboard/notifications",
    },
    {
      label: "Content",
      icon: <FileText className="h-5 w-5" />,
      href: "/dashboard/content",
      active: router.pathname === "/dashboard/content",
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/dashboard/settings",
      active: router.pathname === "/dashboard/settings",
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
