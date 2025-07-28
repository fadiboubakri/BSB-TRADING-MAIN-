"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import {
  Trophy,
  Rocket,
  Zap,
  TrendingUp,
  Award,
  Gift,
  Crown,
  Bot,
  X,
  Coins,
  ChevronUp,
  Filter,
  Download,
  Users,
  Plus,
  Goal,
} from "lucide-react"

export default function RewardsPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("rewards-config")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    // Start the animation after component mounts
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
              {language === "fr" ? "Gestion des Récompenses" : "Rewards Management"}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Trophy className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Configurez les niveaux, les récompenses et les missions pour les utilisateurs."
              : "Configure levels, rewards and missions for users."}
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
                    {language === "fr" ? "Niveaux Totaux" : "Total Levels"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">10</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={100} className="h-1.5 bg-pink-100" indicatorClassName="bg-pink-500" />
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
                    {language === "fr" ? "Missions Actives" : "Active Missions"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={80} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
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
                    {language === "fr" ? "Utilisateurs Premium" : "Premium Users"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">57%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={57} className="h-1.5 bg-indigo-100" indicatorClassName="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="rewards-config" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="rewards-config" className="relative">
              {activeTab === "rewards-config" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Gift className="h-4 w-4" />
                {language === "fr" ? "Configuration des Récompenses" : "Rewards Configuration"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="missions-config" className="relative">
              {activeTab === "missions-config" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Goal className="h-4 w-4" />
                {language === "fr" ? "Configuration des Missions" : "Missions Configuration"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="users-progress" className="relative">
              {activeTab === "users-progress" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language === "fr" ? "Progression des Utilisateurs" : "Users Progress"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="rewards-config" className="space-y-4 mt-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {language === "fr" ? "Niveaux et Récompenses" : "Levels and Rewards"}
                    <Badge variant="outline" className="ml-2 text-xs font-normal border-primary/30 bg-primary/10">
                      10 {language === "fr" ? "Niveaux" : "Levels"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Configurez les niveaux et les récompenses du passe de trading"
                      : "Configure the levels and rewards for the trading pass"}
                  </CardDescription>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                  <Plus className="h-4 w-4" />
                  <span>{language === "fr" ? "Ajouter un Niveau" : "Add Level"}</span>
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
                {[...Array(5)].map((_, index) => {
                  const tier = {
                    level: index + 1,
                    freeReward: {
                      name:
                        language === "fr"
                          ? index % 2 === 0
                            ? `Badge Niveau ${index + 1}`
                            : `${(index + 1) * 10}$ Bonus`
                          : index % 2 === 0
                            ? `Level ${index + 1} Badge`
                            : `$${(index + 1) * 10} Bonus`,
                      icon: index % 2 === 0 ? <Award className="h-6 w-6" /> : <Coins className="h-6 w-6" />,
                    },
                    premiumReward: {
                      name:
                        language === "fr"
                          ? index % 3 === 0
                            ? `Cadeau Premium ${index + 1}`
                            : `Bot ${["Scalping", "Volatilité", "Tendance"][index % 3]}`
                          : index % 3 === 0
                            ? `Premium Gift ${index + 1}`
                            : `${["Scalping", "Volatility", "Trend"][index % 3]} Bot`,
                      icon: index % 3 === 0 ? <Gift className="h-6 w-6" /> : <Bot className="h-6 w-6" />,
                      isPhysical: index % 3 === 0,
                    },
                    xpRequired: (index + 1) * 500,
                  }

                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card
                        className={`border p-0 transition-all duration-300 ${hoveredCard === index ? "shadow-xl border-primary/30 scale-[1.01]" : "shadow-md"}`}
                      >
                        <CardContent className="p-0">
                          <div className="flex items-start gap-4 p-6 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                              }}
                            />
                            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xl font-bold shadow-lg relative z-10">
                              {tier.level}
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2 text-base">
                                  <span className="text-muted-foreground">
                                    {language === "fr" ? "Récompense Gratuite" : "Free Reward"}
                                  </span>
                                  <div className="h-px flex-1 bg-muted"></div>
                                </h3>
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 rounded-md bg-muted/80">{tier.freeReward.icon}</div>
                                  <input
                                    type="text"
                                    className="flex h-10 w-full rounded-md border-0 bg-muted/30 shadow-sm px-3 py-1 text-sm ring-1 ring-inset ring-border transition-colors hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    defaultValue={tier.freeReward.name}
                                  />
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2 text-base">
                                  <span className="text-muted-foreground">
                                    {language === "fr" ? "Récompense Premium" : "Premium Reward"}
                                  </span>
                                  <div className="h-px flex-1 bg-muted"></div>
                                </h3>
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 rounded-md bg-amber-500/10 text-amber-500">
                                    {tier.premiumReward.icon}
                                  </div>
                                  <input
                                    type="text"
                                    className="flex h-10 w-full rounded-md border-0 bg-muted/30 shadow-sm px-3 py-1 text-sm ring-1 ring-inset ring-border transition-colors hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    defaultValue={tier.premiumReward.name}
                                  />
                                </div>
                                {tier.premiumReward.isPhysical && (
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      id={`physical-${index}`}
                                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                      defaultChecked={tier.premiumReward.isPhysical}
                                    />
                                    <label htmlFor={`physical-${index}`} className="text-sm">
                                      {language === "fr" ? "Récompense Physique" : "Physical Reward"}
                                    </label>
                                  </div>
                                )}
                              </div>
                              <div className="md:col-span-2">
                                <div className="flex items-center justify-between mb-2">
                                  <label className="text-sm font-medium">
                                    {language === "fr" ? "XP Requis" : "Required XP"}
                                  </label>
                                  <input
                                    type="number"
                                    className="flex h-9 w-32 rounded-md border-0 bg-muted/30 shadow-sm px-3 py-1 text-sm ring-1 ring-inset ring-border transition-colors hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    defaultValue={tier.xpRequired}
                                  />
                                </div>
                                <div className="mt-3 h-1 w-full bg-muted/50 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-primary to-primary/70"
                                    style={{ width: `${Math.min(100, (tier.xpRequired / 15000) * 100)}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}

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
                    {language === "fr" ? "Afficher plus de niveaux" : "Show more levels"}
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="missions-config" className="space-y-4 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="h-full border-0 shadow-lg overflow-hidden bg-gradient-to-bl from-pink-500/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {language === "fr" ? "Missions Permanentes" : "Permanent Missions"}
                        <Badge variant="outline" className="ml-2 text-xs font-normal border-primary/30 bg-primary/10">
                          3 {language === "fr" ? "Missions" : "Missions"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        {language === "fr"
                          ? "Configurez les missions permanentes qui permettent aux utilisateurs de gagner des XP"
                          : "Configure permanent missions that allow users to earn XP"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="px-6 space-y-1">
                    {[
                      {
                        title: language === "fr" ? "Trader Régulier" : "Regular Trader",
                        description:
                          language === "fr"
                            ? "Effectuez 5 trades par jour pendant 7 jours"
                            : "Make 5 trades per day for 7 days",
                        xp: 500,
                        icon: <TrendingUp className="h-5 w-5" />,
                      },
                      {
                        title: language === "fr" ? "Maître des Bots" : "Bot Master",
                        description:
                          language === "fr"
                            ? "Configurez et utilisez 3 bots différents"
                            : "Set up and use 3 different bots",
                        xp: 750,
                        icon: <Bot className="h-5 w-5" />,
                      },
                      {
                        title: language === "fr" ? "Série Gagnante" : "Winning Streak",
                        description:
                          language === "fr"
                            ? "Réalisez 10 trades gagnants consécutifs"
                            : "Achieve 10 consecutive winning trades",
                        xp: 1000,
                        icon: <Zap className="h-5 w-5" />,
                      },
                    ].map((mission, i) => (
                      <div
                        key={i}
                        className="relative flex items-start gap-4 p-5 border-b last:border-0 transition-colors hover:bg-muted/30 group"
                      >
                        <div className="absolute top-0 right-0 h-full w-1.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="rounded-full bg-primary/10 p-3 text-primary">{mission.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <input
                              type="text"
                              className="flex h-9 w-full rounded-md border-0 bg-transparent shadow-none px-0 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                              defaultValue={mission.title}
                            />
                            <div className="flex items-center gap-2 ml-4">
                              <span className="text-sm font-medium">XP:</span>
                              <input
                                type="number"
                                className="flex h-9 w-24 rounded-md border-0 bg-muted/30 shadow-sm px-3 py-1 text-sm ring-1 ring-inset ring-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                defaultValue={mission.xp}
                              />
                            </div>
                          </div>
                          <textarea
                            className="flex min-h-[60px] w-full rounded-md border-0 bg-muted/30 shadow-sm px-3 py-2 text-sm ring-1 ring-inset ring-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue={mission.description}
                            rows={2}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 self-start text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-muted/30 border-t flex justify-center">
                  <Button className="w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <Plus className="mr-2 h-4 w-4" />
                    {language === "fr" ? "Ajouter une Mission" : "Add Mission"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden bg-gradient-to-br from-purple-500/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {language === "fr" ? "Missions Quotidiennes" : "Daily Missions"}
                        <Badge variant="outline" className="ml-2 text-xs font-normal border-primary/30 bg-primary/10">
                          2 {language === "fr" ? "Missions" : "Missions"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        {language === "fr"
                          ? "Configurez les missions qui se réinitialisent chaque jour"
                          : "Configure missions that reset every day"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="px-6 space-y-1">
                    {[
                      {
                        title: language === "fr" ? "Premier Trade du Jour" : "First Trade of the Day",
                        description:
                          language === "fr"
                            ? "Effectuez votre premier trade de la journée"
                            : "Make your first trade of the day",
                        xp: 100,
                        icon: <Coins className="h-5 w-5" />,
                      },
                      {
                        title: language === "fr" ? "Vérification des Bots" : "Bot Check",
                        description:
                          language === "fr" ? "Vérifiez la performance de vos bots" : "Check your bots' performance",
                        xp: 50,
                        icon: <Bot className="h-5 w-5" />,
                      },
                    ].map((mission, i) => (
                      <div
                        key={i}
                        className="relative flex items-start gap-4 p-5 border-b last:border-0 transition-colors hover:bg-muted/30 group"
                      >
                        <div className="absolute top-0 right-0 h-full w-1.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="rounded-full bg-primary/10 p-3 text-primary">{mission.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <input
                              type="text"
                              className="flex h-9 w-full rounded-md border-0 bg-transparent shadow-none px-0 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                              defaultValue={mission.title}
                            />
                            <div className="flex items-center gap-2 ml-4">
                              <span className="text-sm font-medium">XP:</span>
                              <input
                                type="number"
                                className="flex h-9 w-24 rounded-md border-0 bg-muted/30 shadow-sm px-3 py-1 text-sm ring-1 ring-inset ring-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                defaultValue={mission.xp}
                              />
                            </div>
                          </div>
                          <textarea
                            className="flex min-h-[60px] w-full rounded-md border-0 bg-muted/30 shadow-sm px-3 py-2 text-sm ring-1 ring-inset ring-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue={mission.description}
                            rows={2}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 self-start text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-muted/30 border-t flex justify-center">
                  <Button className="w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <Plus className="mr-2 h-4 w-4" />
                    {language === "fr" ? "Ajouter une Mission Quotidienne" : "Add Daily Mission"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="users-progress" className="space-y-4 mt-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {language === "fr" ? "Progression des Utilisateurs" : "Users Progress"}
                    <Badge variant="outline" className="ml-2 text-xs font-normal border-primary/30 bg-primary/10">
                      5 {language === "fr" ? "Utilisateurs" : "Users"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Suivez la progression des utilisateurs dans le passe de trading"
                      : "Track users' progress in the trading pass"}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ChevronUp className="h-4 w-4" />
                    <span>{language === "fr" ? "Trier" : "Sort"}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                animate={animateCards ? "show" : "hidden"}
              >
                {[
                  { name: "John Doe", level: 7, xp: 5240, premium: true },
                  { name: "Jane Smith", level: 4, xp: 3750, premium: true },
                  { name: "Robert Johnson", level: 2, xp: 1200, premium: false },
                  { name: "Emily Davis", level: 5, xp: 2890, premium: true },
                  { name: "Michael Brown", level: 1, xp: 50, premium: false },
                ].map((user, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="group"
                    onMouseEnter={() => setHoveredCard(i + 10)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card
                      className={`border rounded-lg overflow-hidden transition-all duration-300 ${hoveredCard === i + 10 ? "shadow-xl border-primary/30 scale-[1.01]" : "shadow-md"}`}
                    >
                      <CardContent className="p-0">
                        <div className="p-5 relative">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                            }}
                          />
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 font-medium text-gray-600">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <h3 className="font-medium">{user.name}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                              {user.premium && (
                                <Badge className="bg-gradient-to-r from-amber-500 to-pink-500 text-white border-0 shadow-sm">
                                  <Crown className="mr-1 h-3 w-3" />
                                  Premium
                                </Badge>
                              )}
                              <Badge variant="outline" className="bg-primary/10 shadow-sm">
                                {language === "fr" ? "Niveau " : "Level "}
                                {user.level}
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                {language === "fr" ? "Progression:" : "Progress:"}
                              </span>
                              <span className="font-medium">{user.xp} XP</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-primary/70"
                                style={{ width: `${(user.xp % 1000) / 10}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" size="sm" className="h-8 px-3 rounded-md text-sm font-medium">
                              {language === "fr" ? "Modifier" : "Edit"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-3 rounded-md text-sm font-medium text-destructive border-destructive/30 hover:bg-destructive/10"
                            >
                              {language === "fr" ? "Réinitialiser" : "Reset"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
