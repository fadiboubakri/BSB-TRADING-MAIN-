"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (language: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translations for demonstration
const translations = {
  en: {
    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome to your trading bot platform admin dashboard.",
    "dashboard.totalUsers": "Total Users",
    "dashboard.activeMissions": "Active Missions",
    "dashboard.tradingVolume": "Trading Volume",
    "dashboard.activeBots": "Active Bots",

    // Users
    "users.title": "User Management",
    "users.description": "Manage user accounts, roles, and permissions.",
    "users.addUser": "Add User",
    "users.search": "Search users...",

    // Missions
    "missions.title": "Mission Management",
    "missions.description": "Create and manage missions for users to complete.",
    "missions.createMission": "Create Mission",

    // Common
    "common.search": "Search",
    "common.filter": "Filter",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.view": "View",
    "common.actions": "Actions",
    "common.status": "Status",
    "common.active": "Active",
    "common.inactive": "Inactive",
    "common.pending": "Pending",

    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.users": "Users",
    "nav.missions": "Missions",
    "nav.bots": "Trading Bots",
    "nav.performance": "Performance",
    "nav.leaderboard": "Leaderboard",
    "nav.affiliates": "Affiliates",
    "nav.notifications": "Notifications",
    "nav.content": "Content",
    "nav.settings": "Settings",
    "nav.logout": "Logout",
  },
  fr: {
    // Dashboard
    "dashboard.title": "Tableau de Bord",
    "dashboard.welcome": "Bienvenue sur le tableau de bord d'administration de votre plateforme de bot de trading.",
    "dashboard.totalUsers": "Utilisateurs Totaux",
    "dashboard.activeMissions": "Missions Actives",
    "dashboard.tradingVolume": "Volume d'Échanges",
    "dashboard.activeBots": "Bots Actifs",

    // Users
    "users.title": "Gestion des Utilisateurs",
    "users.description": "Gérer les comptes, rôles et permissions des utilisateurs.",
    "users.addUser": "Ajouter un Utilisateur",
    "users.search": "Rechercher des utilisateurs...",

    // Missions
    "missions.title": "Gestion des Missions",
    "missions.description": "Créer et gérer des missions pour les utilisateurs.",
    "missions.createMission": "Créer une Mission",

    // Common
    "common.search": "Rechercher",
    "common.filter": "Filtrer",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.delete": "Supprimer",
    "common.edit": "Modifier",
    "common.view": "Voir",
    "common.actions": "Actions",
    "common.status": "Statut",
    "common.active": "Actif",
    "common.inactive": "Inactif",
    "common.pending": "En attente",

    // Navigation
    "nav.dashboard": "Tableau de Bord",
    "nav.users": "Utilisateurs",
    "nav.missions": "Missions",
    "nav.bots": "Bots de Trading",
    "nav.performance": "Performance",
    "nav.leaderboard": "Classement",
    "nav.affiliates": "Affiliés",
    "nav.notifications": "Notifications",
    "nav.content": "Contenu",
    "nav.settings": "Paramètres",
    "nav.logout": "Déconnexion",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  // Load language preference from localStorage on client side only
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const lang = language as keyof typeof translations
    const translationObj = translations[lang] || translations.en
    return translationObj[key as keyof typeof translationObj] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
