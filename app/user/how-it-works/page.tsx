"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  HelpCircle,
  BarChart3,
  Users,
  Settings,
  Trophy,
  Zap,
  TrendingUp,
  Award,
  Goal,
  LineChart,
  DollarSign,
  Bot,
  Shield,
  Bell,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function HowItWorksPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("getting-started")
  const [searchQuery, setSearchQuery] = useState("")
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
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {language === "fr" ? "Comment ça marche" : "How it Works"}
            </h2>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <HelpCircle className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Apprenez à utiliser notre plateforme de trading de bots et à maximiser vos profits."
              : "Learn how to use our trading bot platform and maximize your profits."}
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="getting-started" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="getting-started" className="relative">
              {activeTab === "getting-started" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="how-it-works-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                {language === "fr" ? "Démarrage" : "Getting Started"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="features" className="relative">
              {activeTab === "features" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="how-it-works-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                {language === "fr" ? "Fonctionnalités" : "Features"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="strategies" className="relative">
              {activeTab === "strategies" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="how-it-works-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                {language === "fr" ? "Stratégies" : "Strategies"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="trading-pass" className="relative">
              {activeTab === "trading-pass" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="how-it-works-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                {language === "fr" ? "Passe de Trading" : "Trading Pass"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>
                  {language === "fr" ? "Commencer avec TradeBotX" : "Getting Started with TradeBotX"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Un guide étape par étape pour configurer votre compte et commencer à trader."
                    : "A step-by-step guide to setting up your account and start trading."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    {language === "fr" ? "Inscription et Connexion" : "Sign Up and Login"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr"
                      ? "Créez un compte et connectez-vous à votre tableau de bord."
                      : "Create an account and log in to your dashboard."}
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      {language === "fr"
                        ? 'Cliquez sur "S\'inscrire" et remplissez le formulaire.'
                        : 'Click on "Sign Up" and fill out the form.'}
                    </li>
                    <li>
                      {language === "fr"
                        ? "Vérifiez votre email et connectez-vous avec vos identifiants."
                        : "Verify your email and log in with your credentials."}
                    </li>
                  </ol>

                  <h3 className="text-lg font-medium">
                    {language === "fr" ? "Connexion de votre Compte d'Échange" : "Connecting Your Exchange Account"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr"
                      ? "Connectez votre compte d'échange pour commencer à trader."
                      : "Connect your exchange account to start trading."}
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      {language === "fr"
                        ? 'Allez dans "Paramètres" > "Connexions API".'
                        : 'Go to "Settings" > "API Connections".'}
                    </li>
                    <li>
                      {language === "fr"
                        ? "Générez une clé API sur votre compte d'échange avec les permissions de trading."
                        : "Generate an API key on your exchange account with trading permissions."}
                    </li>
                    <li>
                      {language === "fr"
                        ? "Entrez la clé API et le secret dans les champs correspondants."
                        : "Enter the API key and secret in the corresponding fields."}
                    </li>
                  </ol>

                  <h3 className="text-lg font-medium">
                    {language === "fr" ? "Configuration de votre Bot" : "Setting Up Your Bot"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr"
                      ? "Personnalisez votre bot de trading selon vos préférences."
                      : "Customize your trading bot according to your preferences."}
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      {language === "fr"
                        ? "Choisissez un modèle de bot ou créez votre propre stratégie."
                        : "Choose a bot template or create your own strategy."}
                    </li>
                    <li>
                      {language === "fr"
                        ? "Définissez les paramètres de risque, les paires de trading et les indicateurs."
                        : "Set risk parameters, trading pairs, and indicators."}
                    </li>
                    <li>
                      {language === "fr"
                        ? "Lancez votre bot et suivez ses performances."
                        : "Launch your bot and track its performance."}
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Fonctionnalités" : "Features"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Découvrez les fonctionnalités clés de notre plateforme de trading de bots."
                    : "Discover the key features of our trading bot platform."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: language === "fr" ? "Bots Automatisés" : "Automated Bots",
                      description:
                        language === "fr"
                          ? "Automatisez vos stratégies de trading et laissez nos bots travailler pour vous."
                          : "Automate your trading strategies and let our bots work for you.",
                      icon: Bot,
                    },
                    {
                      title: language === "fr" ? "Gestion des Risques" : "Risk Management",
                      description:
                        language === "fr"
                          ? "Définissez des paramètres de risque pour protéger votre capital."
                          : "Set risk parameters to protect your capital.",
                      icon: Shield,
                    },
                    {
                      title: language === "fr" ? "Tableau de Bord Analytique" : "Analytics Dashboard",
                      description:
                        language === "fr"
                          ? "Suivez vos performances de trading avec des analyses détaillées."
                          : "Track your trading performance with detailed analytics.",
                      icon: BarChart3,
                    },
                    {
                      title: language === "fr" ? "Passe de Trading" : "Trading Pass",
                      description:
                        language === "fr"
                          ? "Gagnez des récompenses et montez de niveau pour débloquer des fonctionnalités premium."
                          : "Earn rewards and level up to unlock premium features.",
                      icon: Trophy,
                    },
                    {
                      title: language === "fr" ? "Alertes en Temps Réel" : "Real-time Alerts",
                      description:
                        language === "fr"
                          ? "Recevez des notifications instantanées sur les événements de trading."
                          : "Receive instant notifications on trading events.",
                      icon: Bell,
                    },
                    {
                      title: language === "fr" ? "Support Communautaire" : "Community Support",
                      description:
                        language === "fr"
                          ? "Rejoignez notre communauté et obtenez de l'aide d'autres traders."
                          : "Join our community and get help from other traders.",
                      icon: Users,
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Stratégies de Trading" : "Trading Strategies"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Explorez les différentes stratégies de trading prises en charge par nos bots."
                    : "Explore the different trading strategies supported by our bots."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: language === "fr" ? "Suivi de Tendance" : "Trend Following",
                      description:
                        language === "fr"
                          ? "Identifie et suit les tendances du marché pour maximiser les profits."
                          : "Identifies and follows market trends to maximize profits.",
                      icon: TrendingUp,
                    },
                    {
                      title: language === "fr" ? "Moyenne Mobile" : "Moving Average",
                      description:
                        language === "fr"
                          ? "Utilise les moyennes mobiles pour identifier les points d'entrée et de sortie."
                          : "Uses moving averages to identify entry and exit points.",
                      icon: LineChart,
                    },
                    {
                      title: language === "fr" ? "Trading en Grille" : "Grid Trading",
                      description:
                        language === "fr"
                          ? "Place des ordres à intervalles réguliers pour profiter des fluctuations de prix."
                          : "Places orders at regular intervals to profit from price fluctuations.",
                      icon: Settings,
                    },
                    {
                      title: language === "fr" ? "Arbitrage" : "Arbitrage",
                      description:
                        language === "fr"
                          ? "Profitez des différences de prix entre les échanges."
                          : "Exploits price differences between exchanges.",
                      icon: DollarSign,
                    },
                  ].map((strategy, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <strategy.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{strategy.title}</h3>
                        <p className="text-sm text-muted-foreground">{strategy.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="trading-pass" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Passe de Trading" : "Trading Pass"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Débloquez des récompenses exclusives et montez de niveau pour des avantages supplémentaires."
                    : "Unlock exclusive rewards and level up for additional benefits."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">{language === "fr" ? "Niveau Actuel" : "Current Level"}: 24</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: language === "fr" ? "Récompenses de Niveau" : "Level Rewards",
                        description:
                          language === "fr"
                            ? "Débloquez des fonctionnalités premium et des bonus exclusifs en montant de niveau."
                            : "Unlock premium features and exclusive bonuses by leveling up.",
                        icon: Award,
                      },
                      {
                        title: language === "fr" ? "Missions Quotidiennes" : "Daily Missions",
                        description:
                          language === "fr"
                            ? "Complétez des missions quotidiennes pour gagner des XP et progresser."
                            : "Complete daily missions to earn XP and progress.",
                        icon: Goal,
                      },
                      {
                        title: language === "fr" ? "Bonus de Parrainage" : "Referral Bonuses",
                        description:
                          language === "fr"
                            ? "Gagnez des récompenses supplémentaires en invitant des amis."
                            : "Earn extra rewards by inviting friends.",
                        icon: Users,
                      },
                    ].map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
