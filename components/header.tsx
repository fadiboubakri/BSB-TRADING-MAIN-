"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"
import {
  Menu,
  Bell,
  Search,
  LogOut,
  Moon,
  Sun,
  User,
  Settings,
  ChevronDown,
  Palette,
  AlertCircle,
  UserPlus,
  Trophy,
  Shield,
  Languages,
  Check
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  className?: string
  onLogout: () => void
  userRole: "admin" | "user"
}

export function Header({ className, onLogout, userRole }: HeaderProps) {
  const { toggle, isMobile } = useSidebar()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const router = useRouter()

  return (
    <header
      className={cn(
        "h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "flex items-center px-4 sticky top-0 z-30",
        "shadow-sm",
        className,
      )}
    >
      {isMobile && (
        <Button variant="ghost" size="icon" onClick={toggle} className="mr-2 hover:bg-muted/50">
          <Menu className="h-5 w-5" />
        </Button>
      )}

      <div className="flex-1 flex items-center">
        <form className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={language === "fr" ? "Rechercher..." : "Search..."}
            className="w-full pl-10 bg-background focus-visible:ring-1"
          />
        </form>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover:bg-muted/50">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0 rounded-lg shadow-lg border">
            <DropdownMenuLabel className="px-4 py-3 flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>{language === "fr" ? "Notifications" : "Notifications"}</span>
              <Badge variant="secondary" className="ml-auto">
                {language === "fr" ? "Nouveau" : "New"}
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="cursor-pointer px-4 py-3">
                <div className="flex gap-3 w-full">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <UserPlus className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {language === "fr" ? "Nouvel utilisateur enregistré" : "New user registered"}
                    </p>
                    <p className="text-xs text-muted-foreground">2 {language === "fr" ? "minutes" : "minutes ago"}</p>
                  </div>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer px-4 py-3">
                <div className="flex gap-3 w-full">
                  <div className="bg-emerald-500/10 p-2 rounded-full">
                    <Trophy className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {language === "fr" ? "Mission accomplie" : "Mission completed"}
                    </p>
                    <p className="text-xs text-muted-foreground">1 {language === "fr" ? "heures" : "hours ago"}</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer px-4 py-3">
                <div className="flex gap-3 w-full">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <Shield className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {language === "fr" ? "Nouvel affilié inscrit" : "New affiliate sign-up"}
                    </p>
                    <p className="text-xs text-muted-foreground">3 {language === "fr" ? "heures" : "hours ago"}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center text-primary font-medium py-2">
              {language === "fr" ? "Voir toutes les notifications" : "View all notifications"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="pl-2 pr-1 hover:bg-muted/50 gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-lg shadow-lg border">
            <DropdownMenuLabel className="px-4 py-3 flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{language === "fr" ? "Mon Compte" : "My Account"}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push(userRole === "admin" ? "/dashboard/settings" : "/user/profile")}
              className="px-4 py-2"
            >
              <User className="mr-2 h-4 w-4" />
              <span>{language === "fr" ? "Profil" : "Profile"}</span>
            </DropdownMenuItem>
          
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="px-4 py-2 flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>{language === "fr" ? "Apparence" : "Appearance"}</span>
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="px-4 py-2">
              {theme === "light" ? (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>{language === "fr" ? "Mode Sombre" : "Dark Mode"}</span>
                </>
              ) : (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>{language === "fr" ? "Mode Clair" : "Light Mode"}</span>
                </>
              )}
            </DropdownMenuItem>
             <DropdownMenuSeparator />
            <DropdownMenuLabel className="px-4 py-2 flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span>{language === "fr" ? "Langue" : "Language"}</span>
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setLanguage("en")} className="px-4 py-2">
              <span className={cn("mr-2", language === "en" ? "opacity-100" : "opacity-0")}>
                <Check className="h-4 w-4" />
              </span>
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("fr")} className="px-4 py-2">
              <span className={cn("mr-2", language === "fr" ? "opacity-100" : "opacity-0")}>
                <Check className="h-4 w-4" />
              </span>
              <span>Français</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="px-4 py-2 text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>{language === "fr" ? "Déconnexion" : "Logout"}</span>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
