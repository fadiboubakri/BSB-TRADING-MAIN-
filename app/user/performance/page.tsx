"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import {
  TrendingUp,
  Trophy,
  Clock,
  Calendar,
  ArrowUpRight,
  Zap,
  Filter,
  BarChart,
  LineChart,
  PieChart,
  CandlestickChart,
  Download,
  Award,
  FileClock,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function PerformancePage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("performance")
  const [timeframe, setTimeframe] = useState("week")
  const [chartType, setChartType] = useState("line")
  const [animateChart, setAnimateChart] = useState(false)

  // For animated chart path
  const [pathLength, setPathLength] = useState(0)
  const [chartPath, setChartPath] = useState("")

  useEffect(() => {
    // Create a random chart path for visualization
    const points = 50
    let path = `M0,50 `
    for (let i = 1; i <= points; i++) {
      const x = (i / points) * 100
      // Generate a semi-random y value that generally trends upward
      const y = 50 - (Math.sin(i / 5) * 20 + (i / points) * 30)
      path += `L${x},${y} `
    }
    setChartPath(path)
    setAnimateChart(true)
  }, [timeframe, chartType])

  // Sample performance data
  const performanceData = {
    totalTrades: 142,
    winRate: 68.3,
    profitLoss: 2845.75,
    profitLossPercentage: 12.4,
    averageTradeTime: "1h 24m",
    bestTrade: 420.5,
    worstTrade: -180.25,
    totalTradesChange: 8.2,
    winRateChange: 2.1,
    profitLossChange: 15.3,
  }

  // Sample leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      profit: 12450.75,
      winRate: 72.4,
      trades: 215,
      change: 2,
    },
    {
      rank: 2,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      profit: 10820.5,
      winRate: 68.9,
      trades: 178,
      change: 0,
    },
    {
      rank: 3,
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      profit: 9540.25,
      winRate: 65.2,
      trades: 203,
      change: 1,
    },
    {
      rank: 4,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      profit: 8975.8,
      winRate: 63.7,
      trades: 190,
      change: -2,
    },
    {
      rank: 5,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      profit: 7845.3,
      winRate: 61.5,
      trades: 168,
      change: 1,
    },
  ]

  // Sample user rank data
  const userRank = {
    rank: 24,
    totalUsers: 1250,
    percentile: 98.1,
    change: -2,
  }

  // Sample trading history data
  const tradingHistory = [
    {
      id: 1,
      pair: "BTC/USD",
      type: "Long",
      entry: 42500.75,
      exit: 43250.5,
      profit: 749.75,
      profitPercentage: 1.76,
      time: "2h 15m",
      date: "Today, 14:30",
    },
    {
      id: 2,
      pair: "ETH/USD",
      type: "Short",
      entry: 2850.25,
      exit: 2780.1,
      profit: 70.15,
      profitPercentage: 2.46,
      time: "45m",
      date: "Today, 11:20",
    },
    {
      id: 3,
      pair: "SOL/USD",
      type: "Long",
      entry: 125.5,
      exit: 132.75,
      profit: 7.25,
      profitPercentage: 5.78,
      time: "3h 30m",
      date: "Yesterday, 16:45",
    },
    {
      id: 4,
      pair: "ADA/USD",
      type: "Long",
      entry: 0.58,
      exit: 0.55,
      profit: -0.03,
      profitPercentage: -5.17,
      time: "1h 10m",
      date: "Yesterday, 10:15",
    },
    {
      id: 5,
      pair: "XRP/USD",
      type: "Short",
      entry: 0.75,
      exit: 0.72,
      profit: 0.03,
      profitPercentage: 4.0,
      time: "50m",
      date: "2 days ago, 15:30",
    },
  ]

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
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {language === "fr" ? "Performance & Classement" : "Performance & Leaderboard"}
          </h2>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Suivez vos performances de trading et comparez-vous aux autres traders."
              : "Track your trading performance and compare yourself to other traders."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder={language === "fr" ? "Période" : "Timeframe"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">{language === "fr" ? "Aujourd'hui" : "Today"}</SelectItem>
              <SelectItem value="week">{language === "fr" ? "Cette semaine" : "This week"}</SelectItem>
              <SelectItem value="month">{language === "fr" ? "Ce mois" : "This month"}</SelectItem>
              <SelectItem value="quarter">{language === "fr" ? "Ce trimestre" : "This quarter"}</SelectItem>
              <SelectItem value="year">{language === "fr" ? "Cette année" : "This year"}</SelectItem>
              <SelectItem value="all">{language === "fr" ? "Tout" : "All time"}</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" className="hidden md:flex">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <h3 className="text-2xl font-bold mt-1 text-green-500">
                    ${performanceData.profitLoss.toLocaleString()}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>
                  +{performanceData.profitLossChange}%{" "}
                  {language === "fr" ? "depuis la dernière période" : "from previous period"}
                </span>
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
                    {language === "fr" ? "Taux de Réussite" : "Win Rate"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{performanceData.winRate}%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress
                  value={performanceData.winRate}
                  className="h-1.5 bg-blue-100"
                  indicatorClassName="bg-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Classement" : "Rank"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">
                    #{userRank.rank}{" "}
                    <span className="text-sm font-normal text-muted-foreground">/ {userRank.totalUsers}</span>
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <span className="text-muted-foreground">{language === "fr" ? "Meilleur que" : "Better than"} </span>
                <span className="ml-1 font-medium text-purple-500">{userRank.percentile}% </span>
                <span className="ml-1 text-muted-foreground">{language === "fr" ? "des traders" : "of traders"}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="performance" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="performance" className="relative">
              {activeTab === "performance" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="performance-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                {language === "fr" ? "Performance" : "Performance"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="relative">
              {activeTab === "leaderboard" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="performance-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Award className="h-4 w-4" />
                {language === "fr" ? "Classement" : "Leaderboard"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="history" className="relative">
              {activeTab === "history" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="performance-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FileClock className="h-4 w-4" />
                {language === "fr" ? "Historique" : "History"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="performance" className="space-y-6 mt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={language === "fr" ? "Type de graphique" : "Chart type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="line">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4" />
                      <span>{language === "fr" ? "Ligne" : "Line"}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bar">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4" />
                      <span>{language === "fr" ? "Barres" : "Bar"}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="pie">
                    <div className="flex items-center gap-2">
                      <PieChart className="h-4 w-4" />
                      <span>{language === "fr" ? "Camembert" : "Pie"}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="candlestick">
                    <div className="flex items-center gap-2">
                      <CandlestickChart className="h-4 w-4" />
                      <span>{language === "fr" ? "Chandelier" : "Candlestick"}</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
              </Button>
            </div>
          </div>

          {/* Performance chart with enhanced visualization */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === "fr" ? "Évolution de la Performance" : "Performance Over Time"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? `Visualisation de vos performances de trading (${
                        timeframe === "day"
                          ? "aujourd'hui"
                          : timeframe === "week"
                            ? "cette semaine"
                            : timeframe === "month"
                              ? "ce mois"
                              : timeframe === "quarter"
                                ? "ce trimestre"
                                : timeframe === "year"
                                  ? "cette année"
                                  : "tout le temps"
                      })`
                    : `Visualization of your trading performance (${
                        timeframe === "day"
                          ? "today"
                          : timeframe === "week"
                            ? "this week"
                            : timeframe === "month"
                              ? "this month"
                              : timeframe === "quarter"
                                ? "this quarter"
                                : timeframe === "year"
                                  ? "this year"
                                  : "all time"
                      })`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full relative bg-gradient-to-b from-background to-muted/10 rounded-md flex items-center justify-center overflow-hidden">
                  {/* Chart visualization */}
                  <div className="absolute inset-0 p-4">
                    <div className="relative h-full w-full">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                        <span>+15%</span>
                        <span>+10%</span>
                        <span>+5%</span>
                        <span>0%</span>
                        <span>-5%</span>
                      </div>

                      {/* X-axis grid lines */}
                      <div className="absolute left-12 right-0 top-0 bottom-0">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-muted-foreground/10"
                            style={{ top: `${i * 25}%` }}
                          />
                        ))}
                      </div>

                      {/* X-axis labels */}
                      <div className="absolute left-12 right-0 bottom-0 flex justify-between text-xs text-muted-foreground">
                        {timeframe === "week" && (
                          <>
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </>
                        )}
                        {timeframe === "month" && (
                          <>
                            <span>Week 1</span>
                            <span>Week 2</span>
                            <span>Week 3</span>
                            <span>Week 4</span>
                          </>
                        )}
                        {timeframe === "day" && (
                          <>
                            <span>00:00</span>
                            <span>06:00</span>
                            <span>12:00</span>
                            <span>18:00</span>
                            <span>24:00</span>
                          </>
                        )}
                      </div>

                      {/* Chart line */}
                      <div className="absolute left-12 right-4 top-4 bottom-4">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Background gradient for the chart area */}
                          <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
                              <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                            </linearGradient>
                          </defs>

                          {/* Fill area under the line */}
                          <motion.path
                            d={`${chartPath} L100,100 L0,100 Z`}
                            fill="url(#chartGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animateChart ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />

                          {/* Animated line */}
                          <motion.path
                            d={chartPath}
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: animateChart ? 1 : 0,
                              opacity: animateChart ? 1 : 0,
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />

                          {/* Gradient for the line */}
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>

                          {/* Current value indicator */}
                          <motion.circle
                            cx="100"
                            cy="25"
                            r="4"
                            fill="#ec4899"
                            filter="drop-shadow(0 0 4px rgba(236, 72, 153, 0.7))"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: animateChart ? 1 : 0,
                              scale: animateChart ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: 1.5 }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Chart type icon (for empty state) */}
                  {!animateChart && (
                    <div className="flex flex-col items-center gap-2">
                      {chartType === "line" && <LineChart className="h-8 w-8 text-muted-foreground" />}
                      {chartType === "bar" && <BarChart className="h-8 w-8 text-muted-foreground" />}
                      {chartType === "pie" && <PieChart className="h-8 w-8 text-muted-foreground" />}
                      {chartType === "candlestick" && <CandlestickChart className="h-8 w-8 text-muted-foreground" />}
                      <span className="text-muted-foreground">
                        {language === "fr" ? "Chargement des données..." : "Loading data..."}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional metrics */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden bg-gradient-to-bl from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {language === "fr" ? "Meilleures Performances" : "Best Performances"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-100 p-2 text-green-600">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {language === "fr" ? "Meilleur Trade" : "Best Trade"}
                          </div>
                          <div className="text-xs text-muted-foreground">BTC/USD</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">
                          +${performanceData.bestTrade.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === "fr" ? "il y a 3 jours" : "3 days ago"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {language === "fr" ? "Durée Moyenne" : "Average Duration"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {language === "fr" ? "par trade" : "per trade"}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{performanceData.averageTradeTime}</div>
                        <div className="text-xs text-muted-foreground">
                          {language === "fr" ? "tous trades" : "all trades"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{language === "fr" ? "Meilleur Jour" : "Best Day"}</div>
                          <div className="text-xs text-muted-foreground">
                            {language === "fr" ? "cette semaine" : "this week"}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{language === "fr" ? "Mercredi" : "Wednesday"}</div>
                        <div className="text-xs text-green-600">+$1,245.50</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden bg-gradient-to-br from-purple-500/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-xl">{language === "fr" ? "Classement" : "Leaderboard Rank"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{language === "fr" ? "Vous" : "You"}</p>
                          <p className="text-xs text-muted-foreground">
                            {language === "fr" ? "Niveau" : "Level"} 24 • {performanceData.totalTrades}{" "}
                            {language === "fr" ? "trades" : "trades"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+${performanceData.profitLoss.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "fr" ? "Taux de réussite" : "Win rate"}: {performanceData.winRate}%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4 mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">
                      {language === "fr" ? "Classement Global" : "Global Leaderboard"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr" ? "Les meilleurs traders classés par profit" : "Top traders ranked by profit"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {/* Your current rank */}
                  <motion.div
                    variants={item}
                    className="bg-primary/5 p-4 rounded-lg border border-primary/20 shadow-md"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                          {userRank.rank}
                        </div>
                        <Avatar className="h-10 w-10 border-2 border-primary">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your Avatar" />
                          <AvatarFallback>YA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{language === "fr" ? "Vous" : "You"}</p>
                          <p className="text-xs text-muted-foreground">
                            {language === "fr" ? "Niveau" : "Level"} 24 • {performanceData.totalTrades}{" "}
                            {language === "fr" ? "trades" : "trades"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-500">+${performanceData.profitLoss.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "fr" ? "Taux de réussite" : "Win rate"}: {performanceData.winRate}%
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top traders */}
                  {leaderboardData.map((trader, i) => (
                    <motion.div
                      key={i}
                      variants={item}
                      className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 border-b last:border-0 rounded-lg hover:bg-muted/30 transition-colors group"
                    >
                      <div className="absolute top-0 right-0 h-full w-1.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold ${
                            trader.rank <= 3
                              ? trader.rank === 1
                                ? "bg-amber-100 text-amber-700"
                                : trader.rank === 2
                                  ? "bg-slate-100 text-slate-700"
                                  : "bg-slate-100 text-slate-700"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {trader.rank}
                        </div>
                        <Avatar>
                          <AvatarImage src={trader.avatar} alt={trader.name} />
                          <AvatarFallback>{trader.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{trader.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {language === "fr" ? "Niveau" : "Level"} 24 • {trader.trades}{" "}
                            {language === "fr" ? "trades" : "trades"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-500">+${trader.profit.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "fr" ? "Taux de réussite" : "Win rate"}: {trader.winRate}%
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">
                      {language === "fr" ? "Historique des Transactions" : "Trading History"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Vos dernières transactions et leurs résultats"
                        : "Your latest trades and their outcomes"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-muted-foreground">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Paire" : "Pair"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Type" : "Type"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Entrée" : "Entry"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Sortie" : "Exit"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Profit" : "Profit"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Temps" : "Time"}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {language === "fr" ? "Date" : "Date"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tradingHistory.map((trade, i) => (
                        <tr key={i} className="border-b">
                          <td className="px-4 py-3 font-medium text-gray-900">{trade.pair}</td>
                          <td className="px-4 py-3">{trade.type}</td>
                          <td className="px-4 py-3">${trade.entry.toLocaleString()}</td>
                          <td className="px-4 py-3">${trade.exit.toLocaleString()}</td>
                          <td
                            className={`px-4 py-3 font-medium ${trade.profit > 0 ? "text-green-500" : "text-red-500"}`}
                          >
                            {trade.profit > 0 ? "+" : "-"}${Math.abs(trade.profit).toLocaleString()}
                            <span className="text-xs text-muted-foreground ml-1">({trade.profitPercentage}%)</span>
                          </td>
                          <td className="px-4 py-3">{trade.time}</td>
                          <td className="px-4 py-3">{trade.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
