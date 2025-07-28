"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
  isMobile: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isOpen, setIsOpen] = useState(!isMobile)

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  const toggle = () => setIsOpen(!isOpen)

  return <SidebarContext.Provider value={{ isOpen, toggle, isMobile }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
