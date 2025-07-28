"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import {
  Users,
  Link as LinkIcon,
  DollarSign,
  Settings,
  Search,
  Filter,
  Download,
  Plus,
  Copy,
  MoreHorizontal,
  UserX,
  Trash2,
  TrendingUp,
  Eye,
  Link2,
  Edit,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function AffiliatesPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("affiliates")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [animateCards, setAnimateCards] = useState(false)
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedAffiliate, setSelectedAffiliate] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

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

  const affiliates = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      referrals: 124,
      earnings: "$3,720",
      status: "Active",
      joined: "Jan 15, 2023",
      link: "tradebotx.com/ref/sarah-j",
      avatar: "/avatars/01.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@example.com",
      referrals: 98,
      earnings: "$2,940",
      status: "Active",
      joined: "Feb 3, 2023",
      link: "tradebotx.com/ref/michael-c",
      avatar: "/avatars/02.png",
    },
    {
      id: "3",
      name: "Emma Davis",
      email: "emma@example.com",
      referrals: 87,
      earnings: "$2,610",
      status: "Active",
      joined: "Mar 22, 2023",
      link: "tradebotx.com/ref/emma-d",
      avatar: "/avatars/03.png",
    },
    {
      id: "4",
      name: "James Wilson",
      email: "james@example.com",
      referrals: 76,
      earnings: "$2,280",
      status: "Active",
      joined: "Apr 10, 2023",
      link: "tradebotx.com/ref/james-w",
      avatar: "/avatars/04.png",
    },
    {
      id: "5",
      name: "Olivia Martinez",
      email: "olivia@example.com",
      referrals: 65,
      earnings: "$1,950",
      status: "Inactive",
      joined: "May 5, 2023",
      link: "tradebotx.com/ref/olivia-m",
      avatar: "/avatars/05.png",
    },
    {
      id: "6",
      name: "William Taylor",
      email: "william@example.com",
      referrals: 54,
      earnings: "$1,620",
      status: "Active",
      joined: "Jun 18, 2023",
      link: "tradebotx.com/ref/william-t",
      avatar: "/avatars/06.png",
    },
    {
      id: "7",
      name: "Sophia Brown",
      email: "sophia@example.com",
      referrals: 43,
      earnings: "$1,290",
      status: "Pending",
      joined: "Jul 7, 2023",
      link: "tradebotx.com/ref/sophia-b",
      avatar: "/avatars/07.png",
    },
    {
      id: "8",
      name: "Liam Anderson",
      email: "liam@example.com",
      referrals: 32,
      earnings: "$960",
      status: "Active",
      joined: "Aug 25, 2023",
      link: "tradebotx.com/ref/liam-a",
      avatar: "/avatars/08.png",
    },
  ]

  const payouts = [
    {
      id: "1",
      affiliate: "Sarah Johnson",
      amount: "$1,250.00",
      status: "Paid",
      date: "Mar 15, 2023",
      method: "Bank Transfer",
    },
    {
      id: "2",
      affiliate: "Michael Chen",
      amount: "$980.00",
      status: "Pending",
      date: "Apr 1, 2023",
      method: "PayPal",
    },
    {
      id: "3",
      affiliate: "Emma Davis",
      amount: "$870.00",
      status: "Pending",
      date: "Apr 1, 2023",
      method: "Bank Transfer",
    },
  ]

  const filteredAffiliates = affiliates.filter((affiliate) => {
    const matchesSearch =
      affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      affiliate.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || affiliate.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const handleDeactivate = () => {
    console.log("Deactivating affiliate:", selectedAffiliate?.id)
    setIsDeactivateDialogOpen(false)
  }

  const handleDelete = () => {
    console.log("Deleting affiliate:", selectedAffiliate?.id)
    setIsDeleteDialogOpen(false)
  }

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
              {language === "fr" ? "Gestion des Affiliés" : "Affiliate Management"}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <LinkIcon className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Gérez les partenaires affiliés, les liens de parrainage et les commissions."
              : "Manage affiliate partners, referral links, and commissions."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span>{language === "fr" ? "Exporter" : "Export"}</span>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-pink-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Affiliés Actifs" : "Active Affiliates"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">6</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={75} className="h-1.5 bg-pink-100" indicatorClassName="bg-pink-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Revenus Totaux" : "Total Revenue"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">$17,370</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={65} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-indigo-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Taux de Conversion" : "Conversion Rate"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">12.5%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={12.5} className="h-1.5 bg-indigo-100" indicatorClassName="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="affiliates" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="affiliates" className="relative">
              {activeTab === "affiliates" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language === "fr" ? "Affiliés" : "Affiliates"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="links" className="relative">
              {activeTab === "links" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                {language === "fr" ? "Liens de Parrainage" : "Referral Links"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="payouts" className="relative">
              {activeTab === "payouts" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {language === "fr" ? "Paiements" : "Payouts"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="relative">
              {activeTab === "settings" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {language === "fr" ? "Paramètres" : "Settings"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="affiliates" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {language === "fr" ? "Liste des Affiliés" : "Affiliates List"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Gérez vos partenaires affiliés et leurs performances"
                        : "Manage your affiliate partners and their performance"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder={language === "fr" ? "Rechercher..." : "Search..."}
                        className="w-[200px] pl-9"
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
                        <SelectItem value="active">{language === "fr" ? "Actif" : "Active"}</SelectItem>
                        <SelectItem value="inactive">{language === "fr" ? "Inactif" : "Inactive"}</SelectItem>
                        <SelectItem value="pending">{language === "fr" ? "En attente" : "Pending"}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Link href="/dashboard/affiliates/new">
                      <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                        <Plus className="h-4 w-4" />
                        <span>{language === "fr" ? "Ajouter un Affilié" : "Add Affiliate"}</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div
                  className="space-y-4"
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Affiliate</TableHead>
                        <TableHead>Referrals</TableHead>
                        <TableHead>Earnings</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Referral Link</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAffiliates.map((affiliate) => (
                        <TableRow key={affiliate.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                                <AvatarFallback>{affiliate.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span className="font-medium">{affiliate.name}</span>
                                <span className="text-sm text-muted-foreground">{affiliate.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{affiliate.referrals}</TableCell>
                          <TableCell>{affiliate.earnings}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                affiliate.status === "Active"
                                  ? "success"
                                  : affiliate.status === "Inactive"
                                    ? "destructive"
                                    : "outline"
                              }
                            >
                              {affiliate.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <code className="text-xs bg-muted px-2 py-1 rounded">{affiliate.link}</code>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => {
                                  navigator.clipboard.writeText(affiliate.link)
                                  // In a real app, you would show a toast notification
                                }}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
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
                                <DropdownMenuItem asChild>
                                  <Link href={`/dashboard/affiliates/${affiliate.id}`}>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View profile
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={`/dashboard/affiliates/${affiliate.id}/edit`}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit affiliate
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Link2 className="mr-2 h-4 w-4" />
                                  Generate new link
                                </DropdownMenuItem>{" "}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  className="text-amber-600"
                                  onClick={() => {
                                    setSelectedAffiliate(affiliate)
                                    setIsDeactivateDialogOpen(true)
                                  }}
                                >
                                  <UserX className="mr-2 h-4 w-4" />
                                  Deactivate account
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setSelectedAffiliate(affiliate)
                                    setIsDeleteDialogOpen(true)
                                  }}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete account
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="links" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {language === "fr" ? "Liens de Parrainage" : "Referral Links"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Créez et gérez des liens de parrainage personnalisés"
                        : "Create and manage custom referral links"}
                    </CardDescription>
                  </div>
                  <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <Plus className="h-4 w-4" />
                    <span>{language === "fr" ? "Nouveau Lien" : "New Link"}</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                >
                  {[
                    {
                      id: "1",
                      name: "Summer Promotion",
                      link: "tradebotx.com/ref/summer2023",
                      affiliate: "Sarah Johnson",
                      affiliateId: "sarah",
                      clicks: 245,
                      conversions: 32,
                      rate: "13.1%",
                      status: "active",
                      commissionRate: "15",
                    },
                    {
                      id: "2",
                      name: "VIP Exclusive",
                      link: "tradebotx.com/ref/vip-access",
                      affiliate: "Michael Chen",
                      affiliateId: "michael",
                      clicks: 187,
                      conversions: 28,
                      rate: "15.0%",
                      status: "active",
                      commissionRate: "20",
                    },
                    {
                      id: "3",
                      name: "New User Bonus",
                      link: "tradebotx.com/ref/welcome-bonus",
                      affiliate: "Emma Davis",
                      affiliateId: "emma",
                      clicks: 156,
                      conversions: 19,
                      rate: "12.2%",
                      status: "paused",
                      commissionRate: "10",
                    },
                  ].map((link, i) => (
                    <motion.div
                      key={link.id}
                      variants={item}
                      className="group"
                      onMouseEnter={() => setHoveredCard(i + 10)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card
                        className={`border p-0 transition-all duration-300 ${hoveredCard === i + 10 ? "shadow-xl border-primary/30 scale-[1.01]" : "shadow-md"}`}
                      >
                        <CardContent className="p-0">
                          <div className="flex items-start gap-4 p-6 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                              }}
                            />
                            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg relative z-10">
                              <LinkIcon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2 text-base">
                                  <span className="text-muted-foreground">
                                    {language === "fr" ? "Détails du Lien" : "Link Details"}
                                  </span>
                                  <div className="h-px flex-1 bg-muted"></div>
                                </h3>
                                <div className="space-y-3">
                                  <div>
                                    <Label htmlFor={`link-name-${link.id}`}>
                                      {language === "fr" ? "Nom de la Campagne" : "Campaign Name"}
                                    </Label>
                                    <Input id={`link-name-${link.id}`} defaultValue={link.name} className="mt-1" />
                                  </div>
                                  <div>
                                    <Label htmlFor={`link-url-${link.id}`}>
                                      {language === "fr" ? "URL de Parrainage" : "Referral URL"}
                                    </Label>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Input id={`link-url-${link.id}`} defaultValue={link.link} className="flex-1" />
                                      <Button variant="outline" size="icon">
                                        <Copy className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2 text-base">
                                  <span className="text-muted-foreground">
                                    {language === "fr" ? "Statistiques" : "Statistics"}
                                  </span>
                                  <div className="h-px flex-1 bg-muted"></div>
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">
                                      {language === "fr" ? "Clics" : "Clicks"}
                                    </p>
                                    <p className="font-medium">{link.clicks}</p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">
                                      {language === "fr" ? "Conversions" : "Conversions"}
                                    </p>
                                    <p className="font-medium">{link.conversions}</p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">
                                      {language === "fr" ? "Taux" : "Rate"}
                                    </p>
                                    <p className="font-medium">{link.rate}</p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">
                                      {language === "fr" ? "Statut" : "Status"}
                                    </p>
                                    <Select defaultValue={link.status}>
                                      <SelectTrigger className="h-8">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="active">{language === "fr" ? "Actif" : "Active"}</SelectItem>
                                        <SelectItem value="paused">
                                          {language === "fr" ? "En pause" : "Paused"}
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2 text-base">
                                  <span className="text-muted-foreground">
                                    {language === "fr" ? "Paramètres" : "Settings"}
                                  </span>
                                  <div className="h-px flex-1 bg-muted"></div>
                                </h3>
                                <div className="space-y-3">
                                  <div>
                                    <Label htmlFor={`affiliate-${link.id}`}>
                                      {language === "fr" ? "Affilié" : "Affiliate"}
                                    </Label>
                                    <Select defaultValue={link.affiliateId}>
                                      <SelectTrigger id={`affiliate-${link.id}`} className="mt-1">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                                        <SelectItem value="michael">Michael Chen</SelectItem>
                                        <SelectItem value="emma">Emma Davis</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label htmlFor={`commission-${link.id}`}>
                                      {language === "fr" ? "Taux de Commission" : "Commission Rate"}
                                    </Label>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Input
                                        id={`commission-${link.id}`}
                                        defaultValue={link.commissionRate}
                                        className="w-20"
                                      />
                                      <span>%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <Button
                      variant="outline"
                      className="w-full max-w-sm mx-auto text-muted-foreground border-dashed border-2"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {language === "fr" ? "Afficher plus de liens" : "Show more links"}
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {language === "fr" ? "Historique des Paiements" : "Payout History"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Suivez les paiements envoyés à vos affiliés"
                        : "Track payments sent to your affiliates"}
                    </CardDescription>
                  </div>
                  <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <Plus className="h-4 w-4" />
                    <span>{language === "fr" ? "Nouveau Paiement" : "New Payout"}</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div
                  className="space-y-4"
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Affiliate</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">Sarah Johnson</span>
                          </div>
                        </TableCell>
                        <TableCell>$1,250.00</TableCell>
                        <TableCell>
                          <Badge variant="success">Paid</Badge>
                        </TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                              <AvatarFallback>MC</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">Michael Chen</span>
                          </div>
                        </TableCell>
                        <TableCell>$980.00</TableCell>
                        <TableCell>
                          <Badge variant="outline">Pending</Badge>
                        </TableCell>
                        <TableCell>Apr 1, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Process
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                              <AvatarFallback>ED</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">Emma Davis</span>
                          </div>
                        </TableCell>
                        <TableCell>$870.00</TableCell>
                        <TableCell>
                          <Badge variant="outline">Pending</Badge>
                        </TableCell>
                        <TableCell>Apr 1, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Process
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === "fr" ? "Paramètres du Programme" : "Program Settings"}
                </CardTitle>
                <CardDescription>
                  {language === "fr" ? "Configurez votre programme d'affiliation" : "Configure your affiliate program"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                >
                  <motion.div variants={item}>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">
                        {language === "fr" ? "Taux de Commission" : "Commission Rates"}
                      </h3>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label>{language === "fr" ? "Standard" : "Standard"}</Label>
                          <div className="flex items-center">
                            <Input type="number" defaultValue="5" className="w-20" />
                            <span className="ml-2">%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{language === "fr" ? "Premium" : "Premium"}</Label>
                          <div className="flex items-center">
                            <Input type="number" defaultValue="10" className="w-20" />
                            <span className="ml-2">%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{language === "fr" ? "VIP" : "VIP"}</Label>
                          <div className="flex items-center">
                            <Input type="number" defaultValue="15" className="w-20" />
                            <span className="ml-2">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item}>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">
                        {language === "fr" ? "Paramètres de Paiement" : "Payout Settings"}
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>{language === "fr" ? "Montant Minimum de Paiement" : "Minimum Payout Amount"}</Label>
                          <div className="flex items-center">
                            <span className="mr-2">$</span>
                            <Input type="number" defaultValue="100" className="w-32" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{language === "fr" ? "Calendrier" : "Schedule"}</Label>
                          <Select defaultValue="monthly">
                            <SelectTrigger>
                              <SelectValue placeholder="Select schedule" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weekly">{language === "fr" ? "Hebdomadaire" : "Weekly"}</SelectItem>
                              <SelectItem value="biweekly">
                                {language === "fr" ? "Bi-hebdomadaire" : "Bi-weekly"}
                              </SelectItem>
                              <SelectItem value="monthly">{language === "fr" ? "Mensuel" : "Monthly"}</SelectItem>
                              <SelectItem value="quarterly">
                                {language === "fr" ? "Trimestriel" : "Quarterly"}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item}>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">
                        {language === "fr" ? "Conditions du Programme" : "Program Terms"}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center h-5 mt-0.5">
                            <input
                              type="checkbox"
                              id="terms-approval"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                          <label htmlFor="terms-approval" className="text-sm">
                            {language === "fr"
                              ? "Exiger l'approbation manuelle des nouveaux affiliés"
                              : "Require manual approval for new affiliates"}
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center h-5 mt-0.5">
                            <input
                              type="checkbox"
                              id="terms-cookies"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                          <label htmlFor="terms-cookies" className="text-sm">
                            {language === "fr" ? "Suivi des cookies de 30 jours" : "30-day cookie tracking"}
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center h-5 mt-0.5">
                            <input
                              type="checkbox"
                              id="terms-recurring"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                          <label htmlFor="terms-recurring" className="text-sm">
                            {language === "fr"
                              ? "Commissions récurrentes sur les abonnements"
                              : "Recurring commissions on subscriptions"}
                          </label>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="pt-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                      {language === "fr" ? "Enregistrer les Paramètres" : "Save Settings"}
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Deactivate Account Dialog */}
      <Dialog open={isDeactivateDialogOpen} onOpenChange={setIsDeactivateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {language === "fr" ? "Désactiver le Compte Affilié" : "Deactivate Affiliate Account"}
            </DialogTitle>
            <DialogDescription>
              {language === "fr"
                ? "Êtes-vous sûr de vouloir désactiver ce compte affilié ? L'affilié ne pourra plus se connecter ou gagner des commissions, mais ses données seront conservées."
                : "Are you sure you want to deactivate this affiliate account? The affiliate will no longer be able to log in or earn commissions, but their data will be preserved."}
            </DialogDescription>
          </DialogHeader>
          {selectedAffiliate && (
            <div className="space-y-4 py-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={selectedAffiliate.avatar} />
                  <AvatarFallback>
                    {selectedAffiliate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedAffiliate.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedAffiliate.email}</p>
                </div>
              </div>
              <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-950">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {language === "fr"
                    ? "Cette action empêchera immédiatement l'affilié de se connecter ou de générer de nouveaux parrainages. Les parrainages existants ne seront pas affectés."
                    : "This action will immediately prevent the affiliate from logging in or generating new referrals. Existing referrals will not be affected."}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeactivateDialogOpen(false)}>
              {language === "fr" ? "Annuler" : "Cancel"}
            </Button>
            <Button variant="destructive" onClick={handleDeactivate}>
              {language === "fr" ? "Désactiver" : "Deactivate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{language === "fr" ? "Supprimer le Compte Affilié" : "Delete Affiliate Account"}</DialogTitle>
            <DialogDescription>
              {language === "fr"
                ? "Êtes-vous sûr de vouloir supprimer définitivement ce compte affilié ? Cette action est irréversible et toutes les données associées à cet affilié seront définitivement supprimées."
                : "Are you sure you want to permanently delete this affiliate account? This action cannot be undone and all data associated with this affiliate will be permanently removed."}
            </DialogDescription>
          </DialogHeader>
          {selectedAffiliate && (
            <div className="space-y-4 py-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={selectedAffiliate.avatar} />
                  <AvatarFallback>
                    {selectedAffiliate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedAffiliate.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedAffiliate.email}</p>
                </div>
              </div>
              <div className="rounded-md bg-destructive/10 p-4">
                <p className="text-sm text-destructive">
                  {language === "fr"
                    ? "Cela supprimera définitivement le compte affilié, toutes les données de parrainage et l'historique des commissions. Cette action ne peut pas être annulée."
                    : "This will permanently delete the affiliate account, all referral data, and commission history. This action cannot be reversed."}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-delete">
                  {language === "fr" ? 'Tapez "SUPPRIMER" pour confirmer' : 'Type "DELETE" to confirm'}
                </Label>
                <Input id="confirm-delete" placeholder={language === "fr" ? "SUPPRIMER" : "DELETE"} />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              {language === "fr" ? "Annuler" : "Cancel"}
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              {language === "fr" ? "Supprimer" : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
