"use client"

import { AvatarImage } from "@/components/ui/avatar"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Copy,
  Users,
  DollarSign,
  TrendingUp,
  Share2,
  Target,
  Gift,
  Link,
  Filter,
  Calendar,
  Download,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Goal } from "lucide-react"

export default function AffiliationPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const { toast } = useToast()
  const { language } = useLanguage()
  const [referralLink] = useState("https://tradebotx.com/ref/johndoe123")
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    // Start the animation after component mounts
    setAnimateCards(true)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    toast({
      title: language === "fr" ? "Copié dans le presse-papiers" : "Copied to clipboard",
      description:
        language === "fr"
          ? "Votre lien de parrainage a été copié dans le presse-papiers"
          : "Your referral link has been copied to clipboard",
    })
  }

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
            {language === "fr" ? "Programme d'Affiliation" : "Affiliation Program"}
          </h2>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Invitez des amis et gagnez des commissions sur leur activité de trading."
              : "Invite friends and earn commissions on their trading activity."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>{language === "fr" ? "Ce mois" : "This month"}</span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Download className="h-4 w-4" />
            <span>{language === "fr" ? "Exporter" : "Export"}</span>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5 text-primary" />
              {language === "fr" ? "Votre Lien de Parrainage" : "Your Referral Link"}
            </CardTitle>
            <CardDescription>
              {language === "fr"
                ? "Partagez ce lien avec vos amis pour gagner des commissions"
                : "Share this link with friends to earn commissions"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Input value={referralLink} readOnly className="pr-10 border shadow" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-10 w-10"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-md"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                  {language === "fr" ? "Copier le Lien" : "Copy Link"}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="gap-2 shadow">
                  <Share2 className="h-4 w-4" />
                  {language === "fr" ? "Partager" : "Share"}
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Parrainages Totaux" : "Total Referrals"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">12</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+3</span> {language === "fr" ? "ce mois" : "this month"}
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
          <Card className="overflow-hidden border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Commission Gagnée" : "Commission Earned"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">$342.86</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+$78.50</span> {language === "fr" ? "ce mois" : "this month"}
                </p>
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
                    {language === "fr" ? "Taux de Commission" : "Commission Rate"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">15%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+5%</span>{" "}
                  {language === "fr" ? "bonus de niveau" : "bonus from level"}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="overview" className="relative">
              {activeTab === "overview" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="affiliation-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language === "fr" ? "Aperçu" : "Overview"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="referrals" className="relative">
              {activeTab === "referrals" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="affiliation-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language === "fr" ? "Mes Parrainages" : "My Referrals"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="missions" className="relative">
              {activeTab === "missions" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="affiliation-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Goal className="h-4 w-4" />
                {language === "fr" ? "Missions d'Affiliation" : "Affiliate Missions"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="payouts" className="relative">
              {activeTab === "payouts" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="affiliation-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )} 
              <span className="relative z-20 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {language === "fr" ? "Paiements" : "Payouts"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === "fr" ? "Aperçu du Programme d'Affiliation" : "Affiliation Program Overview"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Comment fonctionne notre programme d'affiliation et comment maximiser vos gains"
                    : "How our affiliation program works and how you can maximize your earnings"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {language === "fr" ? "Comment Ça Marche" : "How It Works"}
                    </h3>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-4">
                      <li>
                        {language === "fr"
                          ? "Partagez votre lien de parrainage unique avec vos amis"
                          : "Share your unique referral link with friends"}
                      </li>
                      <li>
                        {language === "fr"
                          ? "Lorsqu'ils s'inscrivent en utilisant votre lien, ils deviennent votre filleul"
                          : "When they sign up using your link, they become your referral"}
                      </li>
                      <li>
                        {language === "fr"
                          ? "Gagnez des commissions sur leurs frais de trading et paiements d'abonnement"
                          : "Earn commissions on their trading fees and subscription payments"}
                      </li>
                      <li>
                        {language === "fr"
                          ? "Obtenez des bonus supplémentaires en complétant des missions d'affiliation"
                          : "Get additional bonuses by completing affiliate missions"}
                      </li>
                      <li>
                        {language === "fr"
                          ? "Retirez vos gains ou utilisez-les pour les frais de plateforme"
                          : "Withdraw your earnings or use them for platform fees"}
                      </li>
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {language === "fr" ? "Objectif Mensuel: 5 Parrainages" : "Monthly Goal: 5 Referrals"}
                        </span>
                        <span className="text-sm text-muted-foreground">3/5</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div className="rounded-lg border p-4 shadow-sm">
                      <h4 className="font-medium mb-2">
                        {language === "fr" ? "Structure de Commission" : "Commission Structure"}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{language === "fr" ? "Taux de Commission de Base" : "Base Commission Rate"}</span>
                          <span className="font-medium">10%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "fr" ? "Bonus de Niveau" : "Level Bonus"}</span>
                          <span className="font-medium">+5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "fr" ? "Bonus de Mission" : "Mission Bonus"}</span>
                          <span className="font-medium">+0%</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                          <span>{language === "fr" ? "Votre Taux Actuel" : "Your Current Rate"}</span>
                          <span>15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-md"
                      onClick={() => setActiveTab("missions")}
                    >
                      <Target className="h-4 w-4" />
                      {language === "fr" ? "Voir les Missions d'Affiliation" : "View Affiliate Missions"}
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="referrals" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">
                      {language === "fr" ? "Vos Parrainages" : "Your Referrals"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Personnes inscrites avec votre lien de parrainage"
                        : "People who signed up using your referral link"}
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
                <div className="rounded-md border shadow-sm overflow-hidden">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>{language === "fr" ? "Utilisateur" : "User"}</div>
                    <div>{language === "fr" ? "Inscrit" : "Joined"}</div>
                    <div>{language === "fr" ? "Statut" : "Status"}</div>
                    <div>{language === "fr" ? "Généré" : "Generated"}</div>
                    <div>{language === "fr" ? "Commission" : "Commission"}</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        user: "alex87",
                        joined: language === "fr" ? "il y a 2 semaines" : "2 weeks ago",
                        status: language === "fr" ? "Actif" : "Active",
                        generated: "$1,245.00",
                        commission: "$186.75",
                      },
                      {
                        user: "trading_pro",
                        joined: language === "fr" ? "il y a 1 mois" : "1 month ago",
                        status: language === "fr" ? "Actif" : "Active",
                        generated: "$876.50",
                        commission: "$131.48",
                      },
                      {
                        user: "crypto_jane",
                        joined: language === "fr" ? "il y a 2 mois" : "2 months ago",
                        status: language === "fr" ? "Inactif" : "Inactive",
                        generated: "$120.00",
                        commission: "$18.00",
                      },
                      {
                        user: "trader_bob",
                        joined: language === "fr" ? "il y a 3 jours" : "3 days ago",
                        status: language === "fr" ? "En attente" : "Pending",
                        generated: "$0.00",
                        commission: "$0.00",
                      },
                    ].map((referral, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="grid grid-cols-5 gap-4 p-4 text-sm hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback>{referral.user.charAt(0).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span>{referral.user}</span>
                        </div>
                        <div className="text-muted-foreground">{referral.joined}</div>
                        <div>
                          <Badge
                            variant={
                              referral.status === (language === "fr" ? "Actif" : "Active")
                                ? "default"
                                : referral.status === (language === "fr" ? "En attente" : "Pending")
                                  ? "outline"
                                  : "secondary"
                            }
                            className={
                              referral.status === (language === "fr" ? "Actif" : "Active")
                                ? "bg-green-500 hover:bg-green-600"
                                : ""
                            }
                          >
                            {referral.status}
                          </Badge>
                        </div>
                        <div>{referral.generated}</div>
                        <div className="font-medium text-green-500">{referral.commission}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === "fr" ? "Missions d'Affiliation" : "Affiliate Missions"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Complétez ces missions pour gagner des commissions bonus et des récompenses"
                    : "Complete these missions to earn bonus commissions and rewards"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                  className="space-y-4"
                >
                  {[
                    {
                      title: language === "fr" ? "Parrainer 5 Utilisateurs Actifs" : "Refer 5 Active Users",
                      description:
                        language === "fr"
                          ? "Parrainez 5 utilisateurs qui effectuent au moins un trade"
                          : "Refer 5 users who complete at least one trade",
                      reward:
                        language === "fr"
                          ? "+2% de Taux de Commission pendant 30 jours"
                          : "+2% Commission Rate for 30 days",
                      progress: 60,
                      current: 3,
                      total: 5,
                      expires: language === "fr" ? "30 jours" : "30 days",
                    },
                    {
                      title: language === "fr" ? "Parrainer un Utilisateur Premium" : "Refer a Premium User",
                      description:
                        language === "fr"
                          ? "Parrainez un utilisateur qui souscrit à notre plan Premium"
                          : "Refer a user who subscribes to our Premium plan",
                      reward: language === "fr" ? "Bonus de 50$ + 500 XP" : "$50 Bonus + 500 XP",
                      progress: 0,
                      current: 0,
                      total: 1,
                      expires: language === "fr" ? "Pas d'expiration" : "No expiration",
                    },
                    {
                      title:
                        language === "fr" ? "Générer 1 000$ de Volume de Trading" : "Generate $1,000 in Trading Volume",
                      description:
                        language === "fr"
                          ? "Vos filleuls doivent générer un volume de trading combiné de 1 000$"
                          : "Your referrals must generate a combined trading volume of $1,000",
                      reward:
                        language === "fr"
                          ? "5% de Bonus sur les Commissions du Volume"
                          : "5% Bonus on Commissions from Volume",
                      progress: 45,
                      current: 450,
                      total: 1000,
                      expires: language === "fr" ? "14 jours" : "14 days",
                    },
                  ].map((mission, i) => (
                    <motion.div
                      key={i}
                      variants={item}
                      whileHover={{ y: -5 }}
                      className="rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <h3 className="font-medium">{mission.title}</h3>
                          <p className="text-sm text-muted-foreground">{mission.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Gift className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">
                              {language === "fr" ? "Récompense: " : "Reward: "}
                              {mission.reward}
                            </span>
                          </div>
                        </div>
                        <div className="sm:text-right">
                          <div className="text-sm text-muted-foreground mb-1">
                            {language === "fr" ? "Expire dans: " : "Expires in: "}
                            {mission.expires}
                          </div>
                          <div className="text-sm font-medium">
                            {language === "fr" ? "Progression: " : "Progress: "}
                            {mission.current} / {mission.total}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${mission.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === "fr" ? "Paiements de Commission" : "Commission Payouts"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Consultez et gérez vos paiements de commission"
                    : "View and manage your commission payouts"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-lg border p-6 shadow-sm bg-gradient-to-r from-green-500/5 to-transparent"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-medium text-lg">
                          {language === "fr" ? "Disponible pour Retrait" : "Available for Withdrawal"}
                        </h3>
                        <div className="text-3xl font-bold mt-2 text-green-500">$142.86</div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-md">
                          {language === "fr" ? "Demander un Paiement" : "Request Payout"}
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="font-medium mb-3">
                      {language === "fr" ? "Historique des Paiements" : "Payout History"}
                    </h3>
                    <div className="rounded-md border shadow-sm overflow-hidden"/>
                      <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b bg-muted/50">
                        <div>{language === "fr" ? "Date" : "Date"}</div>
                        <div>{language === "fr" ? "Montant" : "Amount"}</div>
                        <div>{language === "fr" ? "Méthode" : "Method"}</div>
                        <div>{language === "fr" ? "Statut" : "Status"}</div>
                      </div>
                      <div className="divide-y">
                        {[
                          {
                            date: language === "fr" ? "15 Mars 2023" : "Mar 15, 2023",
                            amount: "$120.00",
                            method: language === "fr" ? "Virement Bancaire" : "Bank Transfer",
                            status: language === "fr" ? "Complété" : "Completed",
                          },
                          {
                            date: language === "fr" ? "12 Fév 2023" : "Feb 12, 2023",
                            amount: "$80.00",
                            method: language === "fr" ? "Crypto (BTC)" : "Crypto (BTC)",
                            status: language === "fr" ? "Complété" : "Completed",
                          },
                          {
                            date: language === "fr" ? "5 Jan 2023" : "Jan 5, 2023",
                            amount: "$65.50",
                            method: language === "fr" ? "Crédit Plateforme" : "Platform Credit",
                            status: language === "fr" ? "Complété" : "Completed",
                          },
                        ].map((payout, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="grid grid-cols-4 gap-4 p-4 text-sm hover:bg-muted/30 transition-colors"
                          >
                            <div>{payout.date}</div>
                            <div className="font-medium text-green-500">{payout.amount}</div>
                            <div>{payout.method}</div>
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800"
                              >
                                {payout.status}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      )
    }
