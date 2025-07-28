"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MoreHorizontal, Plus, Search, Goal, Trash2, Eye, Edit, Trash2, UserX, CopyPlus } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function MissionsPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)
  const [isDuplicateDialogOpen, setIsDuplicateDialogOpen] = useState(false)
  const [selectedMission, setSelectedMission] = useState<any>(null)
  const [statusAction, setStatusAction] = useState<"activate" | "deactivate">("deactivate")
  const [animateCards, setAnimateCards] = useState(false)

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

  const missions = [
    {
      id: "1",
      name: language === "fr" ? "Premier Trade" : "First Trade",
      description:
        language === "fr"
          ? "Complétez votre premier trade sur la plateforme"
          : "Complete your first trade on the platform",
      difficulty: language === "fr" ? "Facile" : "Easy",
      reward: language === "fr" ? "Bonus de $10" : "$10 Bonus",
      status: language === "fr" ? "Actif" : "Active",
      completions: "1,245",
    },
    {
      id: "2",
      name: language === "fr" ? "Série de Trades" : "Trading Streak",
      description:
        language === "fr"
          ? "Complétez des trades pendant 5 jours consécutifs"
          : "Complete trades for 5 consecutive days",
      difficulty: language === "fr" ? "Moyen" : "Medium",
      reward: language === "fr" ? "Bonus de $25" : "$25 Bonus",
      status: language === "fr" ? "Actif" : "Active",
      completions: "876",
    },
    {
      id: "3",
      name: language === "fr" ? "Diversification de Portefeuille" : "Portfolio Diversification",
      description:
        language === "fr" ? "Tradez sur au moins 5 actifs différents" : "Trade in at least 5 different assets",
      difficulty: language === "fr" ? "Moyen" : "Medium",
      reward: language === "fr" ? "Accès à un Bot Premium" : "Premium Bot Access",
      status: language === "fr" ? "Actif" : "Active",
      completions: "654",
    },
    {
      id: "4",
      name: language === "fr" ? "Maîtrise du Risque" : "Risk Management Master",
      description:
        language === "fr" ? "Maintenez un solde positif pendant 30 jours" : "Maintain a positive balance for 30 days",
      difficulty: language === "fr" ? "Difficile" : "Hard",
      reward: language === "fr" ? "Bonus de $50" : "$50 Bonus",
      status: language === "fr" ? "Actif" : "Active",
      completions: "321",
    },
    {
      id: "5",
      name: language === "fr" ? "Champion du Volume" : "Trading Volume Champion",
      description: language === "fr" ? "Atteignez $10,000 en volume de trades" : "Reach $10,000 in trading volume",
      difficulty: language === "fr" ? "Difficile" : "Hard",
      reward: language === "fr" ? "Statut VIP" : "VIP Status",
      status: language === "fr" ? "Actif" : "Active",
      completions: "189",
    },
    {
      id: "6",
      name: language === "fr" ? "Bonus de Parrainage" : "Referral Bonus",
      description: language === "fr" ? "Parrainez 3 amis sur la plateforme" : "Refer 3 friends to the platform",
      difficulty: language === "fr" ? "Moyen" : "Medium",
      reward: language === "fr" ? "Bonus de 10% de Commission" : "10% Commission Boost",
      status: language === "fr" ? "Actif" : "Active",
      completions: "432",
    },
    {
      id: "7",
      name: language === "fr" ? "Configuration de Bot" : "Trading Bot Setup",
      description:
        language === "fr"
          ? "Configurez et lancez votre premier bot de trading"
          : "Configure and run your first trading bot",
      difficulty: language === "fr" ? "Facile" : "Easy",
      reward: language === "fr" ? "Pack de Modèles de Bots" : "Bot Template Pack",
      status: language === "fr" ? "Brouillon" : "Draft",
      completions: "0",
    },
    {
      id: "8",
      name: language === "fr" ? "Analyse de Marché" : "Market Analysis",
      description:
        language === "fr" ? "Complétez le tutoriel d'analyse de marché" : "Complete the market analysis tutorial",
      difficulty: language === "fr" ? "Facile" : "Easy",
      reward: language === "fr" ? "Accès aux Outils d'Analyse" : "Analysis Tool Access",
      status: language === "fr" ? "Inactif" : "Inactive",
      completions: "765",
    },
  ]

  const handleDeleteMission = () => {
    console.log(`Deleting mission: ${selectedMission?.id}`)
    toast({
      title: language === "fr" ? "Mission supprimée" : "Mission deleted",
      description:
        language === "fr"
          ? `"${selectedMission?.name}" a été supprimée avec succès.`
          : `"${selectedMission?.name}" has been deleted successfully.`,
    })
    setIsDeleteDialogOpen(false)
  }

  const handleStatusChange = () => {
    console.log(
      `Changing mission ${selectedMission?.id} status to: ${statusAction === "activate" ? "Active" : "Inactive"}`,
    )
    toast({
      title:
        language === "fr"
          ? `Mission ${statusAction === "activate" ? "activée" : "désactivée"}`
          : `Mission ${statusAction === "activate" ? "activated" : "deactivated"}`,
      description:
        language === "fr"
          ? `"${selectedMission?.name}" a été ${statusAction === "activate" ? "activée" : "désactivée"} avec succès.`
          : `"${selectedMission?.name}" has been ${statusAction === "activate" ? "activated" : "deactivated"} successfully.`,
    })
    setIsStatusDialogOpen(false)
  }

  const handleDuplicateMission = () => {
    console.log(`Duplicating mission: ${selectedMission?.id}`)
    toast({
      title: language === "fr" ? "Mission dupliquée" : "Mission duplicated",
      description:
        language === "fr"
          ? `Une copie de "${selectedMission?.name}" a été créée.`
          : `A copy of "${selectedMission?.name}" has been created.`,
    })
    setIsDuplicateDialogOpen(false)
  }

  const openDeleteDialog = (mission: any) => {
    setSelectedMission(mission)
    setIsDeleteDialogOpen(true)
  }

  const openStatusDialog = (mission: any, action: "activate" | "deactivate") => {
    setSelectedMission(mission)
    setStatusAction(action)
    setIsStatusDialogOpen(true)
  }

  const openDuplicateDialog = (mission: any) => {
    setSelectedMission(mission)
    setIsDuplicateDialogOpen(true)
  }

  const filteredMissions = missions.filter((mission) => {
    const matchesSearch =
      mission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDifficulty =
      difficultyFilter === "all" || mission.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || mission.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesDifficulty && matchesStatus
  })

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
              {language === "fr" ? "Gestion des Missions" : "Mission Management"}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Goal className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Créez et gérez des missions pour que les utilisateurs les complètent."
              : "Create and manage missions for users to complete."}
          </p>
        </div>

        <Link href="/dashboard/missions/new">
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
            <Plus className="h-4 w-4" />
            <span>{language === "fr" ? "Créer une Mission" : "Create Mission"}</span>
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={language === "fr" ? "Rechercher des missions..." : "Search missions..."}
              className="w-[300px] pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select defaultValue="all" value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={language === "fr" ? "Difficulté" : "Difficulty"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{language === "fr" ? "Toutes difficultés" : "All Difficulties"}</SelectItem>
              <SelectItem value="easy">{language === "fr" ? "Facile" : "Easy"}</SelectItem>
              <SelectItem value="medium">{language === "fr" ? "Moyen" : "Medium"}</SelectItem>
              <SelectItem value="hard">{language === "fr" ? "Difficile" : "Hard"}</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={language === "fr" ? "Statut" : "Status"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{language === "fr" ? "Tous statuts" : "All Statuses"}</SelectItem>
              <SelectItem value="active">{language === "fr" ? "Actif" : "Active"}</SelectItem>
              <SelectItem value="inactive">{language === "fr" ? "Inactif" : "Inactive"}</SelectItem>
              <SelectItem value="draft">{language === "fr" ? "Brouillon" : "Draft"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate={animateCards ? "show" : "hidden"}>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardHeader className="p-4">
            <CardTitle>{language === "fr" ? "Missions" : "Missions"}</CardTitle>
            <CardDescription>
              {language === "fr"
                ? `Affichage de ${filteredMissions.length} missions`
                : `Showing ${filteredMissions.length} missions`}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mission</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Reward</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Completions</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMissions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No missions found matching your filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredMissions.map((mission) => (
                    <TableRow key={mission.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{mission.name}</span>
                          <span className="text-sm text-muted-foreground">{mission.description}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            mission.difficulty === "Easy"
                              ? "outline"
                              : mission.difficulty === "Medium"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {mission.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>{mission.reward}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            mission.status === "Active"
                              ? "success"
                              : mission.status === "Inactive"
                                ? "destructive"
                                : "outline"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{mission.completions}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onSelect={() => router.push(`/dashboard/missions/${mission.id}`)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => router.push(`/dashboard/missions/${mission.id}/edit`)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit mission
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => openDuplicateDialog(mission)}>
                              {" "}
                              <CopyPlus className="mr-2 h-4 w-4" />
                              Duplicate
                            </DropdownMenuItem>
                            {mission.status === "Active" ? (
                              <DropdownMenuItem
                                className="text-amber-600"
                                onSelect={() => openStatusDialog(mission, "deactivate")}
                              >
                                <UserX className="mr-2 h-4 w-4" />
                                Deactivate
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem onSelect={() => openStatusDialog(mission, "activate")}>
                                Activate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive" onSelect={() => openDeleteDialog(mission)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete mission
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{language === "fr" ? "Supprimer la Mission" : "Delete Mission"}</DialogTitle>
            <DialogDescription>
              {language === "fr"
                ? `Êtes-vous sûr de vouloir supprimer la mission "${selectedMission?.name}" ? Cette action est irréversible.`
                : `Are you sure you want to delete the mission "${selectedMission?.name}"? This action cannot be undone.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              {language === "fr" ? "Annuler" : "Cancel"}
            </Button>
            <Button variant="destructive" onClick={handleDeleteMission}>
              {language === "fr" ? "Supprimer" : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Status Change Confirmation Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {statusAction === "activate"
                ? language === "fr"
                  ? "Activer la Mission"
                  : "Activate Mission"
                : language === "fr"
                  ? "Désactiver la Mission"
                  : "Deactivate Mission"}
            </DialogTitle>
            <DialogDescription>
              {statusAction === "activate"
                ? language === "fr"
                  ? `Êtes-vous sûr de vouloir activer la mission "${selectedMission?.name}" ? Elle sera visible par les utilisateurs.`
                  : `Are you sure you want to activate the mission "${selectedMission?.name}"? This will make it visible to users.`
                : language === "fr"
                  ? `Êtes-vous sûr de vouloir désactiver la mission "${selectedMission?.name}" ? Les utilisateurs ne pourront plus la voir ou la compléter.`
                  : `Are you sure you want to deactivate the mission "${selectedMission?.name}"? Users will no longer be able to see or complete it.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStatusDialogOpen(false)}>
              {language === "fr" ? "Annuler" : "Cancel"}
            </Button>
            <Button onClick={handleStatusChange}>
              {statusAction === "activate"
                ? language === "fr"
                  ? "Activer"
                  : "Activate"
                : language === "fr"
                  ? "Désactiver"
                  : "Deactivate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Duplicate Confirmation Dialog */}
      <Dialog open={isDuplicateDialogOpen} onOpenChange={setIsDuplicateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{language === "fr" ? "Dupliquer la Mission" : "Duplicate Mission"}</DialogTitle>
            <DialogDescription>
              {language === "fr"
                ? `Êtes-vous sûr de vouloir dupliquer la mission "${selectedMission?.name}" ? Une copie sera créée avec "Copie" ajouté au nom.`
                : `Are you sure you want to duplicate the mission "${selectedMission?.name}"? A copy will be created with "Copy" added to the name.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDuplicateDialogOpen(false)}>
              {language === "fr" ? "Annuler" : "Cancel"}
            </Button>
            <Button onClick={handleDuplicateMission}>{language === "fr" ? "Dupliquer" : "Duplicate"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
