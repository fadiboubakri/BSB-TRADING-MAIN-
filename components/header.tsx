"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"
import {
  Menu,
  Bell,
  LogOut,
  Moon,
  Sun,
  User,
  ChevronDown,
  Palette,
  AlertCircle,
  UserPlus,
  Trophy,
  Shield,
  Languages,
  Check,
  Globe,
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
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    <header className={cn("flex items-center justify-between px-6 py-4 bg-card border-b neon-glow", className)}>
      <div className="flex items-center gap-4">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div>
          <h1 className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            BSBridge {userRole === "admin" ? "Admin" : "Client"}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
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

          <Globe className="h-4 w-4 text-muted-foreground" />
          <Select value={language} onValueChange={(value: "fr" | "en") => setLanguage(value)}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">FR</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>

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

        <Button variant="outline" size="sm" onClick={onLogout} className="gap-2 bg-transparent">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "fr" ? "Déconnexion" : "Logout"}</span>
        </Button>
      </div>
    </header>
  )
}
