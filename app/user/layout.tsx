"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { BarChart3, LayoutDashboard, Users, Target, HelpCircle, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import { SidebarProvider } from "@/components/sidebar-provider"

interface LayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: LayoutProps) {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
  }

  const routes = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/user/dashboard",
      active: router.pathname === "/user/dashboard",
    },
    {
      label: "Missions & Rewards",
      icon: <Target className="h-5 w-5" />,
      href: "/user/missions",
      active: router.pathname === "/user/missions" || router.pathname.startsWith("/user/missions/"),
    },
    {
      label: "Performance & Leaderboard",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/user/performance",
      active: router.pathname === "/user/performance",
    },
    {
      label: "Affiliation",
      icon: <Users className="h-5 w-5" />,
      href: "/user/affiliation",
      active: router.pathname === "/user/affiliation",
    },
    {
      label: "How it Works",
      icon: <HelpCircle className="h-5 w-5" />,
      href: "/user/how-it-works",
      active: router.pathname === "/user/how-it-works",
    },
    {
      label: "Support",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/user/support",
      active: router.pathname === "/user/support",
    },
  ]

  return (
    <LanguageProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar routes={routes} onLogout={handleLogout} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onLogout={handleLogout} userRole="user" />
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </LanguageProvider>
  )
}
