"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Edit,
  Trophy,
  Users,
  Search,
  Download,
  Zap,
  Award,
  Target,
  BarChart,
} from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function MissionDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const missionId = params.id as string
  const [isUserProgressOpen, setIsUserProgressOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [animateCards, setAnimateCards] = useState(false)
  const [activeTab, setActiveTab] = useState("objectives")

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

  // Mission data
  const mission = {
    id: missionId,
    name: language === "fr" ? "Série de Trades" : "Trading Streak",
    description:
      language === "fr"
        ? "Complétez des trades pendant 5 jours consécutifs pour démontrer votre constance et votre engagement envers votre stratégie de trading. Cette mission aide à développer de bonnes habitudes de trading et récompense l'engagement régulier sur la plateforme."
        : "Complete trades for 5 consecutive days to demonstrate consistency and commitment to your trading strategy. This mission helps build good trading habits and rewards regular platform engagement.",
    difficulty: language === "fr" ? "Moyen" : "Medium",
    reward: language === "fr" ? "Bonus de $25" : "$25 Bonus",
    status: language === "fr" ? "Actif" : "Active",
    completions: "876",
    completionRate: 68,
    category: language === "fr" ? "Trading" : "Trading",
    xpPoints: "500",
    startDate: "2023-10-15",
    endDate: "2024-12-31",
    objectives: [
      {
        name: language === "fr" ? "Trade Quotidien" : "Daily Trade",
        description:
          language === "fr" ? "Complétez au moins un trade chaque jour" : "Complete at least one trade each day",
        type: "streak",
        target: "5",
        progress: "3",
      },
    ],
    recentCompletions: [
      {
        id: "u1",
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        date: language === "fr" ? "Il y a 2 heures" : "2 hours ago",
      },
      {
        id: "u2",
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
        date: language === "fr" ? "Il y a 5 heures" : "5 hours ago",
      },
      {
        id: "u3",
        name: "David Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        date: language === "fr" ? "Hier" : "Yesterday",
      },
      {
        id: "u4",
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        date: language === "fr" ? "Hier" : "Yesterday",
      },
      {
        id: "u5",
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        date: language === "fr" ? "Il y a 2 jours" : "2 days ago",
      },
    ],
  }

  // Mock user progress data
  const userProgressData = [
    {
      id: "u1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      progress: 100,
      status: language === "fr" ? "Complété" : "Completed",
      completedDate: language === "fr" ? "15 mars 2024" : "Mar 15, 2024",
    },
    // ... other user progress data
  ]

  const filteredUserProgress = userProgressData.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Link href="/dashboard/missions">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {language === "fr" ? "Détails de Mission" : "Mission Details"}
          </h1>
        </div>
        <div className="flex gap-2">
          <Link href={`/dashboard/missions/${missionId}/edit`}>
            <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
              <Edit className="h-4 w-4" />
              {language === "fr" ? "Modifier" : "Edit"}
            </Button>
          </Link>
          <Button
            onClick={() => setIsUserProgressOpen(true)}
            className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md"
          >
            <Users className="h-4 w-4" />
            {language === "fr" ? "Progrès des Utilisateurs" : "User Progress"}
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-xl font-bold">{mission.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{mission.category}</p>
                <div className="flex gap-2 mb-4">
                  <Badge variant={mission.difficulty === "Medium" ? "secondary" : "outline"}>
                    {mission.difficulty}
                  </Badge>
                  <Badge variant={mission.status === "Active" ? "success" : "destructive"}>{mission.status}</Badge>
                </div>

                <div className="w-full mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{mission.completionRate}% Completion</span>
                    <span className="text-sm text-muted-foreground">{mission.completions} users</span>
                  </div>
                  <Progress
                    value={mission.completionRate}
                    className="h-2"
                    indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">{mission.reward}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Zap className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{mission.xpPoints} XP Points</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Started {mission.startDate}</span>
                  </div>
                  {mission.endDate && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Calendar className="h-5 w-5 text-amber-500" />
                      <span className="text-sm">Ends {mission.endDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "Description" : "Description"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{mission.description}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="objectives" className="space-y-4">
            <TabsList className="bg-transparent p-0">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
                <TabsTrigger value="objectives" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    {language === "fr" ? "Objectifs" : "Objectives"}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="rewards" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {language === "fr" ? "Récompenses" : "Rewards"}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="stats" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    {language === "fr" ? "Statistiques" : "Statistics"}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="completions" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {language === "fr" ? "Complétions" : "Completions"}
                  </span>
                </TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="objectives">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Objectifs" : "Objectives"}</CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Conditions à remplir pour terminer cette mission"
                      : "Requirements to complete this mission"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mission.objectives.map((objective, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Target className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="font-medium">{objective.name}</p>
                            <p className="text-sm text-muted-foreground">{objective.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-medium">
                            {objective.progress}/{objective.target}
                          </span>
                          <Progress
                            value={(Number.parseInt(objective.progress) / Number.parseInt(objective.target)) * 100}
                            className="h-2 w-32 bg-primary/10"
                            indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Récompenses" : "Rewards"}</CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Ce que les utilisateurs reçoivent après avoir complété la mission"
                      : "What users receive upon mission completion"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                          <Award className="h-5 w-5 text-blue-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === "fr" ? "Récompense" : "Reward"}
                        </span>
                        <span className="text-xl font-bold">{mission.reward}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                          <Zap className="h-5 w-5 text-green-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">XP Points</span>
                        <span className="text-xl font-bold">{mission.xpPoints}</span>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Statistiques" : "Statistics"}</CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Performances globales de cette mission"
                      : "Overall performance of this mission"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-purple-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === "fr" ? "Participants" : "Participants"}
                        </span>
                        <span className="text-xl font-bold">{mission.completions}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                          <BarChart className="h-5 w-5 text-pink-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === "fr" ? "Taux de complétion" : "Completion Rate"}
                        </span>
                        <span className="text-xl font-bold">{mission.completionRate}%</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                          <Trophy className="h-5 w-5 text-indigo-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === "fr" ? "Taux de réussite" : "Success Rate"}
                        </span>
                        <span className="text-xl font-bold">82%</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                          <Clock className="h-5 w-5 text-amber-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === "fr" ? "Durée moyenne" : "Avg. Duration"}
                        </span>
                        <span className="text-xl font-bold">6.2 {language === "fr" ? "jours" : "days"}</span>
                      </div>
                    </motion.div>
                  </div>{" "}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completions">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Dernières Complétions" : "Recent Completions"}</CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Utilisateurs ayant récemment terminé cette mission"
                      : "Users who recently completed this mission"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mission.recentCompletions.map((user, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{user.date}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* User Progress Dialog */}
      <Dialog open={isUserProgressOpen} onOpenChange={setIsUserProgressOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {language === "fr" ? "Progrès des Utilisateurs" : "User Progress"} - {mission.name}
            </DialogTitle>
            <DialogDescription>
              {language === "fr" ? "Suivi détaillé des progrès des utilisateurs" : "Detailed tracking of user progress"}
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={language === "fr" ? "Rechercher des utilisateurs..." : "Search users..."}
                  className="w-[250px] pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={language === "fr" ? "Filtrer par statut" : "Filter by status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "fr" ? "Tous les statuts" : "All Statuses"}</SelectItem>
                  <SelectItem value="completed">{language === "fr" ? "Complété" : "Completed"}</SelectItem>
                  <SelectItem value="in progress">{language === "fr" ? "En Cours" : "In Progress"}</SelectItem>
                  <SelectItem value="not started">{language === "fr" ? "Pas Commencé" : "Not Started"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span>{language === "fr" ? "Exporter" : "Export"}</span>
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{language === "fr" ? "Utilisateur" : "User"}</TableHead>
                <TableHead>{language === "fr" ? "Progrès" : "Progress"}</TableHead>
                <TableHead>{language === "fr" ? "Statut" : "Status"}</TableHead>
                <TableHead>{language === "fr" ? "Date de Complétion" : "Completion Date"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUserProgress.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    {language === "fr" ? "Aucun utilisateur trouvé" : "No users found"}
                  </TableCell>
                </TableRow>
              ) : (
                filteredUserProgress.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={user.progress}
                          className="h-2 w-[100px] bg-primary/10"
                          indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                        <span className="text-sm">{user.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === (language === "fr" ? "Complété" : "Completed")
                            ? "success"
                            : user.status === (language === "fr" ? "En Cours" : "In Progress")
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.completedDate || "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  )
}
