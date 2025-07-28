"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Award,
  Target,
  Users,
  ChevronRight,
  Bot,
  Zap,
  Trophy,
  Gift,
  LayoutDashboard,
  LineChart,
  Goal,
  Package,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { language } = useLanguage()

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
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {language === "fr" ? "Bienvenue, John !" : "Welcome back, John!"}
          </h2>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Voici ce qui se passe avec votre compte de trading aujourd'hui."
              : "Here's what's happening with your trading account today."}
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="overview" className="relative">
              {activeTab === "overview" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                {language === "fr" ? "Aperçu" : "Overview"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="relative">
              {activeTab === "analytics" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                {language === "fr" ? "Analytiques" : "Analytics"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="missions" className="relative">
              {activeTab === "missions" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Goal className="h-4 w-4" />
                {language === "fr" ? "Missions" : "Missions"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="relative">
              {activeTab === "rewards" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Package className="h-4 w-4" />
                {language === "fr" ? "Récompenses" : "Rewards"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          {/* Trading Pass Progress */}
          <motion.div variants={item}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  {language === "fr" ? "Progrès du Passe de Trading" : "Trading Pass Progress"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Niveau 24 / 100 - Complétez des missions pour monter de niveau et débloquer des récompenses"
                    : "Level 24 / 100 - Complete missions to level up and unlock rewards"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-medium">
                        {language === "fr" ? "Niveau actuel : 24" : "Current Level: 24"}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {language === "fr" ? "Prochaine récompense au niveau 25" : "Next reward at level 25"}
                    </div>
                  </div>

                  <Progress value={78} className="h-2" />

                  <div className="flex items-center justify-between text-sm">
                    <div>{language === "fr" ? "78% vers le niveau 25" : "78% to Level 25"}</div>
                    <div className="font-medium">{language === "fr" ? "220 XP nécessaires" : "220 XP needed"}</div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/user/missions">
                        {language === "fr" ? "Voir toutes les missions" : "View All Missions"}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-green-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === "fr" ? "Profit Total" : "Total Profit"}
                        </p>
                        <h3 className="text-2xl font-bold mt-1">$1,234.56</h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 flex items-center">
                          <ArrowUpRight className="mr-1 h-4 w-4" />
                          +12.5%
                        </span>
                        {language === "fr" ? "depuis le mois dernier" : "from last month"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-blue-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === "fr" ? "Bots Actifs" : "Active Bots"}
                        </p>
                        <h3 className="text-2xl font-bold mt-1">3</h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 flex items-center">
                          <ArrowUpRight className="mr-1 h-4 w-4" />
                          +1
                        </span>
                        {language === "fr" ? "depuis la semaine dernière" : "from last week"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-amber-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === "fr" ? "Taux de Réussite" : "Win Rate"}
                        </p>
                        <h3 className="text-2xl font-bold mt-1">68.7%</h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500 flex items-center">
                          <ArrowDownRight className="mr-1 h-4 w-4" />
                          -2.3%
                        </span>
                        {language === "fr" ? "depuis la semaine dernière" : "from last week"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-purple-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === "fr" ? "Classement" : "Leaderboard Rank"}
                        </p>
                        <h3 className="text-2xl font-bold mt-1">#42</h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <Award className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 flex items-center">
                          <ArrowUpRight className="mr-1 h-4 w-4" />
                          +5
                        </span>
                        {language === "fr" ? "positions cette semaine" : "positions this week"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Recent Activity and Upcoming Missions */}
          <motion.div variants={container} className="grid gap-4 md:grid-cols-2">
            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    {language === "fr" ? "Activité Récente" : "Recent Activity"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: language === "fr" ? "Bot #2 a complété un trade" : "Bot #2 completed a trade",
                      description: "BTC/USDT +$32.45",
                      time: language === "fr" ? "il y a 2 heures" : "2 hours ago",
                      icon: Bot,
                      iconColor: "text-green-500",
                    },
                    {
                      title: language === "fr" ? "Mission complétée" : "Completed mission",
                      description: language === "fr" ? "Faire 5 trades profitables" : "Make 5 profitable trades",
                      time: language === "fr" ? "Hier" : "Yesterday",
                      icon: Target,
                      iconColor: "text-blue-500",
                    },
                    {
                      title: language === "fr" ? "Atteint le niveau 24" : "Reached level 24",
                      description:
                        language === "fr" ? "Paramètres avancés de bot débloqués" : "Unlocked Advanced Bot Settings",
                      time: language === "fr" ? "il y a 2 jours" : "2 days ago",
                      icon: Award,
                      iconColor: "text-amber-500",
                    },
                    {
                      title: language === "fr" ? "Nouveau parrainage" : "New referral signed up",
                      description: "user123@example.com",
                      time: language === "fr" ? "il y a 3 jours" : "3 days ago",
                      icon: Users,
                      iconColor: "text-purple-500",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`rounded-full p-2 ${item.iconColor} bg-muted`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-500" />
                    {language === "fr" ? "Missions à Venir" : "Upcoming Missions"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: language === "fr" ? "Compléter 10 trades" : "Complete 10 trades",
                      description:
                        language === "fr" ? "Récompense : 500 XP + Bonus de $10" : "Reward: 500 XP + $10 Bonus",
                      progress: 70,
                      difficulty: language === "fr" ? "Facile" : "Easy",
                    },
                    {
                      title:
                        language === "fr"
                          ? "Atteindre 75% de taux de réussite pendant 1 semaine"
                          : "Achieve 75% win rate for 1 week",
                      description:
                        language === "fr"
                          ? "Récompense : 1000 XP + Modèle de Bot Premium"
                          : "Reward: 1000 XP + Premium Bot Template",
                      progress: 45,
                      difficulty: language === "fr" ? "Moyen" : "Medium",
                    },
                    {
                      title: language === "fr" ? "Parrainer 3 nouveaux utilisateurs" : "Refer 3 new users",
                      description:
                        language === "fr"
                          ? "Récompense : 1500 XP + Bonus de 10% de commission"
                          : "Reward: 1500 XP + 10% Commission Boost",
                      progress: 33,
                      difficulty: language === "fr" ? "Difficile" : "Hard",
                    },
                  ].map((mission, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{mission.title}</span>
                            <Badge
                              variant={
                                mission.difficulty === (language === "fr" ? "Facile" : "Easy")
                                  ? "outline"
                                  : mission.difficulty === (language === "fr" ? "Moyen" : "Medium")
                                    ? "secondary"
                                    : "default"
                              }
                            >
                              {mission.difficulty}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{mission.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Progress value={mission.progress} className="h-2" />
                        <p className="text-xs text-right text-muted-foreground">
                          {mission.progress}% {language === "fr" ? "complété" : "complete"}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/user/missions">
                      {language === "fr" ? "Voir toutes les missions" : "View All Missions"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "Analytiques de Trading" : "Trading Analytics"}</CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Votre performance de trading au fil du temps"
                  : "Your trading performance over time"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  {language === "fr"
                    ? "Les graphiques de performance de trading apparaîtront ici"
                    : "Trading performance charts will appear here"}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-500" />
                {language === "fr" ? "Missions Actives" : "Active Missions"}
              </CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Complétez des missions pour gagner de l'XP et des récompenses"
                  : "Complete missions to earn XP and rewards"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                >
                  <Link href="/user/missions">
                    {language === "fr" ? "Aller à la page des missions" : "Go to Missions Page"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-green-500" />
                {language === "fr" ? "Récompenses Disponibles" : "Available Rewards"}
              </CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Récompenses que vous avez débloquées grâce à votre passe de trading"
                  : "Rewards you've unlocked through your trading pass"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                >
                  <Link href="/user/missions">
                    {language === "fr" ? "Voir toutes les récompenses" : "View All Rewards"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
