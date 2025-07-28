"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, TrendingUp, Trophy, BarChart2, Award, CheckCircle, Download, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function PerformancePage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")
  const [animateCards, setAnimateCards] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setAnimateCards(true)
  }, [])

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

  const traders = [
    {
      rank: 1,
      name: "Alex Johnson",
      profit: "$12,450",
      winRate: "78%",
      trades: 156,
      streak: 12,
      badge: "Elite",
      avatar: "/avatars/01.png",
    },
    {
      rank: 2,
      name: "Sarah Williams",
      profit: "$10,875",
      winRate: "75%",
      trades: 142,
      streak: 8,
      badge: "Expert",
      avatar: "/avatars/02.png",
    },
    {
      rank: 3,
      name: "Michael Chen",
      profit: "$9,320",
      winRate: "72%",
      trades: 128,
      streak: 6,
      badge: "Pro",
      avatar: "/avatars/03.png",
    },
  ]

  const bots = [
    {
      id: "1",
      name: "Alpha Trader",
      description: "Momentum-based trading strategy",
      status: "Active",
      performance: "+32.5%",
      trades: "245",
      lastActive: "2 minutes ago",
      type: "Momentum",
    },
    {
      id: "2",
      name: "Trend Follower",
      description: "Follows market trends with stop-loss",
      status: "Active",
      performance: "+24.2%",
      trades: "187",
      lastActive: "5 minutes ago",
      type: "Trend",
    },
    {
      id: "3",
      name: "Volatility Edge",
      description: "Capitalizes on market volatility",
      status: "Paused",
      performance: "+21.8%",
      trades: "156",
      lastActive: "2 hours ago",
      type: "Volatility",
    },
  ]

  const performanceTitle = language === "fr" ? "Performance & Analyses" : "Performance & Analytics"
  const performanceDesc =
    language === "fr"
      ? "Surveillez les performances des bots de trading, les statistiques des utilisateurs et les classements."
      : "Monitor trading bot performance, user statistics, and leaderboards."

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {performanceTitle}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <BarChart2 className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">{performanceDesc}</p>
        </div>

        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={language === "fr" ? "Période" : "Time period"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">{language === "fr" ? "7 derniers jours" : "Last 7 days"}</SelectItem>
              <SelectItem value="30days">{language === "fr" ? "30 derniers jours" : "Last 30 days"}</SelectItem>
              <SelectItem value="90days">{language === "fr" ? "90 derniers jours" : "Last 90 days"}</SelectItem>
              <SelectItem value="year">{language === "fr" ? "Année dernière" : "Last year"}</SelectItem>
              <SelectItem value="all">{language === "fr" ? "Tout le temps" : "All time"}</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
          >
            <Download className="h-4 w-4" />
            <span>{language === "fr" ? "Exporter" : "Export"}</span>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        animate={animateCards ? "show" : "hidden"}
      >
        <motion.div variants={item}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === "fr" ? "Profit Total" : "Total Profit"}
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.2M</div>
              <div className="mt-2">
                <Progress value={75} className="h-1.5 bg-green-100" indicatorClassName="bg-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "fr" ? "+15% par rapport à la période précédente" : "+15% from last period"}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === "fr" ? "Taux de Réussite" : "Win Rate"}
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68.5%</div>
              <div className="mt-2">
                <Progress value={68.5} className="h-1.5 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "fr" ? "+3.2% par rapport à la période précédente" : "+3.2% from last period"}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === "fr" ? "Durée Moy. des Trades" : "Avg. Trade Duration"}
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 {language === "fr" ? "jours" : "days"}</div>
              <div className="mt-2">
                <Progress value={65} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "fr" ? "-0.5 jours par rapport à la période précédente" : "-0.5 days from last period"}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === "fr" ? "Traders Actifs" : "Active Traders"}
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,856</div>
              <div className="mt-2">
                <Progress value={85} className="h-1.5 bg-pink-100" indicatorClassName="bg-pink-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {language === "fr" ? "+12% par rapport à la période précédente" : "+12% from last period"}
              </p>
            </CardContent>
          </Card>
        </motion.div>
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
                <BarChart2 className="h-4 w-4" />
                {language === "fr" ? "Aperçu" : "Overview"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="relative">
              {activeTab === "leaderboard" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Award className="h-4 w-4" />
                {language === "fr" ? "Classement" : "Leaderboard"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="users" className="relative">
              {activeTab === "users" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language === "fr" ? "Utilisateurs" : "Users"}
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
                <CheckCircle className="h-4 w-4" />
                {language === "fr" ? "Missions" : "Missions"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "Aperçu des Performances" : "Performance Overview"}</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <motion.div
                className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <TrendingUp className="h-16 w-16 text-muted-foreground/50" />
              </motion.div>
            </CardContent>
          </Card>

          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={container}
            initial="hidden"
            animate={animateCards ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Bots Performants" : "Top Performing Bots"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{language === "fr" ? "Nom" : "Name"}</TableHead>
                        <TableHead>{language === "fr" ? "Performance" : "Performance"}</TableHead>
                        <TableHead>{language === "fr" ? "Statut" : "Status"}</TableHead>
                        <TableHead className="text-right">{language === "fr" ? "Activité" : "Activity"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bots.map((bot) => (
                        <TableRow key={bot.id}>
                          <TableCell className="font-medium">{bot.name}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                Number.parseFloat(bot.performance) > 25
                                  ? "success"
                                  : Number.parseFloat(bot.performance) > 15
                                    ? "default"
                                    : "outline"
                              }
                            >
                              {bot.performance}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                bot.status === "Active"
                                  ? "success"
                                  : bot.status === "Paused"
                                    ? "warning"
                                    : "destructive"
                              }
                            >
                              {bot.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">{bot.lastActive}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Activités Récentes" : "Recent Activities"}</CardTitle>
                  <CardDescription>
                    {language === "fr" ? "Dernières activités de la plateforme" : "Latest platform activities"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {language === "fr"
                              ? 'Utilisateur a complété la mission "Premier Trade"'
                              : 'User completed "First Trade" mission'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {language === "fr" ? `Il y a ${i * 10} minutes` : `${i * 10} minutes ago`}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4 mt-6">
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate={animateCards ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Select defaultValue="profit">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={language === "fr" ? "Classement par" : "Ranking by"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="profit">{language === "fr" ? "Profit" : "Profit"}</SelectItem>
                      <SelectItem value="winRate">{language === "fr" ? "Taux de Réussite" : "Win Rate"}</SelectItem>
                      <SelectItem value="trades">
                        {language === "fr" ? "Nombre de Trades" : "Number of Trades"}
                      </SelectItem>
                      <SelectItem value="streak">{language === "fr" ? "Série Gagnante" : "Winning Streak"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                >
                  <Download className="h-4 w-4" />
                  <span>{language === "fr" ? "Exporter" : "Export"}</span>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader className="pb-2">
                  <CardTitle>{language === "fr" ? "Meilleurs Traders" : "Top Traders"}</CardTitle>
                  <CardDescription>
                    {language === "fr" ? "Classés par profit total ce mois-ci" : "Ranked by total profit this month"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="grid gap-4 md:grid-cols-3">
                      {traders.map((trader, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="group"
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <Card
                            className={`border-0 shadow-lg transition-all duration-300 ${
                              hoveredCard === index ? "shadow-xl border-primary/30 scale-[1.01]" : "shadow-md"
                            } ${
                              index === 0
                                ? "bg-gradient-to-b from-yellow-500/20 to-yellow-500/5"
                                : index === 1
                                  ? "bg-gradient-to-b from-gray-400/20 to-gray-400/5"
                                  : "bg-gradient-to-b from-amber-700/20 to-amber-700/5"
                            }`}
                          >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                              <div className="relative mb-4">
                                <div
                                  className={`absolute inset-0 rounded-full flex items-center justify-center ${
                                    index === 0
                                      ? "bg-yellow-500/20"
                                      : index === 1
                                        ? "bg-gray-400/20"
                                        : "bg-amber-700/20"
                                  }`}
                                ></div>
                                <Avatar className="h-20 w-20 border-4 border-background">
                                  <AvatarImage src={trader.avatar} />
                                  <AvatarFallback>{trader.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                                  <Trophy className="h-5 w-5" />
                                </div>
                              </div>
                              <h3 className="text-lg font-bold">{trader.name}</h3>
                              <p className="text-3xl font-bold mt-2">{trader.profit}</p>
                              <div className="flex items-center justify-center mt-2">
                                <Badge variant={index === 0 ? "default" : "outline"} className="mr-2">
                                  {language === "fr"
                                    ? trader.badge === "Elite"
                                      ? "Élite"
                                      : trader.badge === "Expert"
                                        ? "Expert"
                                        : "Pro"
                                    : trader.badge}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {trader.winRate} {language === "fr" ? "Taux de Réussite" : "Win Rate"}
                                </span>
                              </div>
                              <div className="mt-4 text-sm text-muted-foreground">
                                <span>
                                  {trader.trades} {language === "fr" ? "trades" : "trades"}
                                </span>
                                <span className="mx-2">•</span>
                                <span>
                                  {trader.streak} {language === "fr" ? "série" : "streak"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Votre Classement" : "Your Ranking"}</CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Votre position actuelle dans le classement"
                      : "Your current position on the leaderboard"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    className="flex items-center justify-between p-4 rounded-md bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="font-bold">24</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{language === "fr" ? "Votre Classement" : "Your Ranking"}</h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "fr" ? "Top 5% de tous les traders" : "Top 5% of all traders"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{language === "fr" ? "Profit" : "Profit"}</p>
                        <p className="font-bold text-green-500">$3,450</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          {language === "fr" ? "Taux de Réussite" : "Win Rate"}
                        </p>
                        <p className="font-bold">52%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{language === "fr" ? "Trades" : "Trades"}</p>
                        <p className="font-bold">48</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          {language === "fr" ? "Série Actuelle" : "Current Streak"}
                        </p>
                        <p className="font-bold">3</p>
                      </div>
                      <Button size="sm" className="gap-2">
                        <TrendingUp className="h-4 w-4" />
                        {language === "fr" ? "Améliorer Classement" : "Improve Ranking"}
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4 mt-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "Performance des Utilisateurs" : "User Performance"}</CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Métriques de performance pour les utilisateurs de la plateforme"
                  : "Performance metrics for platform users"}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] flex items-center justify-center bg-muted/20 rounded-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <BarChart2 className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === "fr"
                    ? "Contenu du tableau de bord de performance des utilisateurs"
                    : "User performance dashboard content"}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4 mt-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "Complétion des Missions" : "Mission Completion"}</CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Taux de complétion des missions et statistiques"
                  : "Mission completion rates and statistics"}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] flex items-center justify-center bg-muted/20 rounded-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <CheckCircle className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === "fr"
                    ? "Contenu du tableau de bord de complétion des missions"
                    : "Mission completion dashboard content"}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
