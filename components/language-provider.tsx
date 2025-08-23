"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    "dashboard.title": "Tableau de Bord",
    "dashboard.welcome": "Bienvenue sur votre tableau de bord BSBridge",
    "dashboard.totalUsers": "Utilisateurs Total",
    "dashboard.activeMissions": "Missions Actives",
    "dashboard.tradingVolume": "Volume de Trading",
    "nav.dashboard": "Tableau de Bord",
    "nav.users": "Utilisateurs",
    "nav.missions": "Missions",
    "nav.performance": "Performance",
    "nav.affiliates": "Affiliés",
    "nav.notifications": "Notifications",
    "nav.settings": "Paramètres",
    "nav.support": "Support",
    "nav.profile": "Profil",
    "nav.rewards": "Récompenses",
    "common.loading": "Chargement...",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",
    "common.view": "Voir",
    "common.add": "Ajouter",
    "common.search": "Rechercher",
    "common.filter": "Filtrer",
    "common.export": "Exporter",
    "common.import": "Importer",
    "common.refresh": "Actualiser",
    "common.close": "Fermer",
    "common.open": "Ouvrir",
    "common.yes": "Oui",
    "common.no": "Non",
    "common.ok": "OK",
    "common.error": "Erreur",
    "common.success": "Succès",
    "common.warning": "Attention",
    "common.info": "Information",
  },
  en: {
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome to your BSBridge dashboard",
    "dashboard.totalUsers": "Total Users",
    "dashboard.activeMissions": "Active Missions",
    "dashboard.tradingVolume": "Trading Volume",
    "nav.dashboard": "Dashboard",
    "nav.users": "Users",
    "nav.missions": "Missions",
    "nav.performance": "Performance",
    "nav.affiliates": "Affiliates",
    "nav.notifications": "Notifications",
    "nav.settings": "Settings",
    "nav.support": "Support",
    "nav.profile": "Profile",
    "nav.rewards": "Rewards",
    "common.loading": "Loading...",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.view": "View",
    "common.add": "Add",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.import": "Import",
    "common.refresh": "Refresh",
    "common.close": "Close",
    "common.open": "Open",
    "common.yes": "Yes",
    "common.no": "No",
    "common.ok": "OK",
    "common.error": "Error",
    "common.success": "Success",
    "common.warning": "Warning",
    "common.info": "Information",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
