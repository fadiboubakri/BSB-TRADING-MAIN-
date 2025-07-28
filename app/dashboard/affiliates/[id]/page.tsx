"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Edit, Mail, Calendar, Clock, Users, TrendingUp, Banknote, Percent, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function AffiliateDetailsPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("referrals")

  // Mock data for the affiliate
  const affiliate = {
    id: params.id,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    status: "active",
    joined: "Jan 15, 2023",
    lastActive: "2 hours ago",
    commissionTier: "Premium (10%)",
    balance: "$3,720",
    totalEarnings: "$12,840",
    referrals: 124,
    activeReferrals: 98,
    conversionRate: "12.4%",
    referralCode: "sarah-j",
    bio: "Digital marketing expert with 8+ years of experience in crypto and fintech.",
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Link href="/dashboard/affiliates">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {language === "fr" ? "Détails de l'Affilié" : "Affiliate Details"}
          </h1>
        </div>
        <Link href={`/dashboard/affiliates/${affiliate.id}/edit`}>
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
            <Edit className="h-4 w-4" />
            {language === "fr" ? "Modifier" : "Edit"}
          </Button>
        </Link>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column: Affiliate Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`/placeholder.svg?height=128&width=128`} />
                  <AvatarFallback>{affiliate.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{affiliate.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{affiliate.email}</p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">{affiliate.commissionTier}</Badge>
                  <Badge variant={affiliate.status === "active" ? "success" : "destructive"}>
                    {affiliate.status.charAt(0).toUpperCase() + affiliate.status.slice(1)}
                  </Badge>
                </div>

                <div className="w-full mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{language === "fr" ? "Progression" : "Progress"}</span>
                    <span className="text-sm text-muted-foreground">
                      {affiliate.activeReferrals}/{affiliate.referrals} {language === "fr" ? "actifs" : "active"}
                    </span>
                  </div>
                  <Progress
                    value={(affiliate.activeReferrals / affiliate.referrals) * 100}
                    className="h-2"
                    indicatorClassName="bg-gradient-to-r from-pink-500 to-blue-500"
                  />
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">{affiliate.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <span className="text-sm">
                      {language === "fr" ? "Inscrit le" : "Joined"} {affiliate.joined}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">
                      {language === "fr" ? "Dernière activité" : "Last active"} {affiliate.lastActive}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Percent className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm">{affiliate.referralCode}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Tabs */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>{language === "fr" ? "À Propos" : "About"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{affiliate.bio}</p>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="bg-transparent p-0">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
                <TabsTrigger value="referrals" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {language === "fr" ? "Parrainages" : "Referrals"}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="performance" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    {language === "fr" ? "Performance" : "Performance"}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="payouts" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Banknote className="h-4 w-4" />
                    {language === "fr" ? "Paiements" : "Payouts"}
                  </span>
                </TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="referrals">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Parrainages" : "Referrals"}</CardTitle>
                  <CardDescription>
                    {language === "fr" ? "Statistiques sur les parrainages" : "Referral statistics"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Users className="h-6 w-6 text-blue-500" />,
                        label: language === "fr" ? "Total" : "Total Referrals",
                        value: affiliate.referrals,
                      },
                      {
                        icon: <Users className="h-6 w-6 text-green-500" />,
                        label: language === "fr" ? "Actifs" : "Active",
                        value: affiliate.activeReferrals,
                      },
                      {
                        icon: <Percent className="h-6 w-6 text-purple-500" />,
                        label: language === "fr" ? "Taux de Conversion" : "Conversion Rate",
                        value: affiliate.conversionRate,
                      },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg"
                      >
                        <div className="h-10 w-10 rounded-full bg-blue-100/50 flex items-center justify-center mb-2">
                          {stat.icon}
                        </div>
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                        <span className="text-xl font-bold">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Performance" : "Performance"}</CardTitle>
                  <CardDescription>
                    {language === "fr" ? "Résumé des performances financières" : "Financial performance summary"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Banknote className="h-6 w-6 text-pink-500" />,
                        label: language === "fr" ? "Gains Totaux" : "Total Earnings",
                        value: affiliate.totalEarnings,
                      },
                      {
                        icon: <Wallet className="h-6 w-6 text-indigo-500" />,
                        label: language === "fr" ? "Solde" : "Balance",
                        value: affiliate.balance,
                      },
                      {
                        icon: <Percent className="h-6 w-6 text-purple-500" />,
                        label: language === "fr" ? "Commission" : "Commission Tier",
                        value: affiliate.commissionTier,
                      },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg"
                      >
                        <div className="h-10 w-10 rounded-full bg-blue-100/50 flex items-center justify-center mb-2">
                          {stat.icon}
                        </div>
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                        <span className="text-xl font-bold">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payouts">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>{language === "fr" ? "Historique des Paiements" : "Payout History"}</CardTitle>
                  <CardDescription>
                    {language === "fr" ? "Historique des paiements effectués" : "History of payouts made"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mock payout data */}
                    {[
                      { amount: "$1,250", date: "Mar 15, 2023" },
                      { amount: "$800", date: "Feb 10, 2023" },
                    ].map((payout, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Banknote className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="font-medium">{payout.amount}</p>
                            <p className="text-sm text-muted-foreground">{payout.date}</p>
                          </div>
                        </div>
                        <Badge variant="success">{language === "fr" ? "Payé" : "Paid"}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
