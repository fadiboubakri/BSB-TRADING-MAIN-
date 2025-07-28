"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import {
  User,
  Settings,
  Shield,
  Award,
  TrendingUp,
  Lock,
  CheckCircle2,
  Key,
  History,
  Camera,
  Edit,
  BarChart3,
  Bot,
} from "lucide-react"

export default function UserProfilePage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("stats")
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    // Start the animation after component mounts
    setAnimateCards(true)
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <Card className="flex-1 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
              <User className="h-5 w-5 text-pink-500" />
              {language === "fr" ? "Profil Utilisateur" : "User Profile"}
            </CardTitle>
            <CardDescription>
              {language === "fr"
                ? "Gérez vos informations de compte et préférences"
                : "Manage your account information and preferences"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative group">
                  <Avatar className="h-24 w-24 border-2 border-primary/20 shadow-lg">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 shadow">
                  <Camera className="h-4 w-4" />
                  {language === "fr" ? "Changer d'Avatar" : "Change Avatar"}
                </Button>
              </motion.div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Nom Complet" : "Full Name"}
                    </label>
                    <p className="text-base font-medium">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Email" : "Email"}
                    </label>
                    <p className="text-base font-medium">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Membre Depuis" : "Member Since"}
                    </label>
                    <p className="text-base font-medium">January 15, 2023</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Niveau de Trading" : "Trading Level"}
                    </label>
                    <div className="flex items-center gap-2">
                      <p className="text-base font-medium">Silver</p>
                      <Badge className="bg-gradient-to-r from-slate-400 to-slate-500 border-0 text-white shadow">
                        {language === "fr" ? "Niveau 3" : "Level 3"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-md">
                    <Edit className="h-4 w-4" />
                    {language === "fr" ? "Modifier le Profil" : "Edit Profile"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="stats" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="stats" className="relative">
              {activeTab === "stats" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="profile-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                {language === "fr" ? "Statistiques" : "Trading Stats"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="relative">
              {activeTab === "achievements" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="profile-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Award className="h-4 w-4" />
                {language === "fr" ? "Réalisations" : "Achievements"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="security" className="relative">
              {activeTab === "security" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="profile-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                {language === "fr" ? "Sécurité" : "Security"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="stats" className="space-y-4 mt-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={animateCards ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={item}>
              <Card className="border-t-4 border-t-green-500 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {language === "fr" ? "Trades Totaux" : "Total Trades"}
                      </p>
                      <h3 className="text-3xl font-bold mt-1">247</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-green-500 flex items-center">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      +12% {language === "fr" ? "depuis le mois dernier" : "from last month"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-t-4 border-t-blue-500 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {language === "fr" ? "Taux de Réussite" : "Win Rate"}
                      </p>
                      <h3 className="text-3xl font-bold mt-1">68%</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-blue-500 flex items-center">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      +3% {language === "fr" ? "depuis le mois dernier" : "from last month"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-t-4 border-t-purple-500 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {language === "fr" ? "Profit" : "Profit"}
                      </p>
                      <h3 className="text-3xl font-bold mt-1 text-green-500">+$1,247</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      {language === "fr" ? "30 derniers jours" : "Last 30 days"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl">{language === "fr" ? "Bots Actifs" : "Active Bots"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Vos bots de trading actuellement en cours d'exécution"
                    : "Your currently running trading bots"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "BTC Momentum Bot",
                      duration: language === "fr" ? "En cours depuis 14 jours" : "Running for 14 days",
                      performance: "+8.2%",
                      positive: true,
                    },
                    {
                      name: "ETH Swing Trader",
                      duration: language === "fr" ? "En cours depuis 7 jours" : "Running for 7 days",
                      performance: "+4.7%",
                      positive: true,
                    },
                    {
                      name: "Altcoin DCA Bot",
                      duration: language === "fr" ? "En cours depuis 30 jours" : "Running for 30 days",
                      performance: "-2.1%",
                      positive: false,
                    },
                  ].map((bot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex justify-between items-center p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{bot.name}</p>
                          <p className="text-sm text-muted-foreground">{bot.duration}</p>
                        </div>
                      </div>
                      <Badge className={bot.positive ? "bg-green-500" : "bg-red-500"}>{bot.performance}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4 mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  {language === "fr" ? "Réalisations" : "Achievements"}
                </CardTitle>
                <CardDescription>
                  {language === "fr" ? "Vos jalons de trading et badges" : "Your trading milestones and badges"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      emoji: "🚀",
                      title: language === "fr" ? "Premier Trade" : "First Trade",
                      description: language === "fr" ? "Premier trade complété" : "Completed first trade",
                      unlocked: true,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      emoji: "💰",
                      title: language === "fr" ? "Maître du Profit" : "Profit Master",
                      description: language === "fr" ? "10% de profit atteint" : "Achieved 10% profit",
                      unlocked: true,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      emoji: "🤖",
                      title: language === "fr" ? "Créateur de Bot" : "Bot Creator",
                      description: language === "fr" ? "3 bots créés" : "Created 3 bots",
                      unlocked: true,
                      color: "from-purple-500 to-indigo-500",
                    },
                    {
                      emoji: "🏆",
                      title: language === "fr" ? "Top 100" : "Top 100",
                      description: language === "fr" ? "Verrouillé (Atteindre le top 100)" : "Locked (Reach top 100)",
                      unlocked: false,
                      color: "from-gray-400 to-gray-500",
                    },
                  ].map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className={`flex flex-col items-center p-4 border rounded-lg shadow ${!achievement.unlocked ? "bg-muted/50" : ""}`}
                    >
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-2 text-white text-xl shadow-md`}
                      >
                        <span>{achievement.emoji}</span>
                      </div>
                      <p className="font-medium text-center">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground text-center">{achievement.description}</p>
                      {!achievement.unlocked && (
                        <div className="mt-2">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                      {achievement.unlocked && (
                        <div className="mt-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-medium">
                      {language === "fr" ? "Progression de Niveau" : "Level Progress"}
                    </p>
                    <p className="text-sm font-medium">75/100 XP</p>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {language === "fr"
                      ? "25 XP nécessaires pour atteindre le Niveau 4"
                      : "25 XP needed to reach Level 4"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  {language === "fr" ? "Paramètres de Sécurité" : "Security Settings"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Gérez vos préférences de sécurité de compte"
                    : "Manage your account security preferences"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: language === "fr" ? "Authentification à Deux Facteurs" : "Two-Factor Authentication",
                    description:
                      language === "fr"
                        ? "Ajoutez une couche de sécurité supplémentaire"
                        : "Add an extra layer of security",
                    icon: Shield,
                    color: "text-green-500",
                    bgColor: "bg-green-100",
                    buttonText: language === "fr" ? "Activer" : "Enable",
                    enabled: false,
                  },
                  {
                    title: language === "fr" ? "Changer le Mot de Passe" : "Change Password",
                    description:
                      language === "fr"
                        ? "Mettez à jour votre mot de passe régulièrement"
                        : "Update your password regularly",
                    icon: Key,
                    color: "text-blue-500",
                    bgColor: "bg-blue-100",
                    buttonText: language === "fr" ? "Mettre à jour" : "Update",
                    enabled: false,
                  },
                  {
                    title: language === "fr" ? "Clés API" : "API Keys",
                    description: language === "fr" ? "Gérez vos clés API de trading" : "Manage your trading API keys",
                    icon: Settings,
                    color: "text-purple-500",
                    bgColor: "bg-purple-100",
                    buttonText: language === "fr" ? "Gérer" : "Manage",
                    enabled: false,
                  },
                  {
                    title: language === "fr" ? "Historique de Connexion" : "Login History",
                    description:
                      language === "fr"
                        ? "Consultez votre activité de connexion récente"
                        : "View your recent login activity",
                    icon: History,
                    color: "text-amber-500",
                    bgColor: "bg-amber-100",
                    buttonText: language === "fr" ? "Voir" : "View",
                    enabled: false,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full ${item.bgColor} p-2 ${item.color}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="shadow">
                      {item.buttonText}
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ArrowUpRight(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}
