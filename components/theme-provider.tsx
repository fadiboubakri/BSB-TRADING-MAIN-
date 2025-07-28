"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}: {
  children: React.ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: Theme
  enableSystem?: boolean
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    let initialTheme: Theme = defaultTheme

    if (savedTheme) {
      initialTheme = savedTheme
    } else if (enableSystem) {
      initialTheme = systemTheme
    }

    setTheme(initialTheme)
  }, [defaultTheme, enableSystem])

  useEffect(() => {
    if (attribute === "class") {
      if (theme === "system") {
        document.documentElement.classList.remove("light", "dark")
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      } else if (theme === "dark") {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      }
    } else if (attribute === "data-theme") {
      document.documentElement.setAttribute("data-theme", theme)
    }

    if (theme !== "system") {
      localStorage.setItem("theme", theme)
    } else {
      localStorage.removeItem("theme")
    }
  }, [theme, attribute])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
