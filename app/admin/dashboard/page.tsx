"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  BarChart3,
  Trophy,
  Gift,
  Mail,
  UserPlus,
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Bell,
  Package,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

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
            Tableau de Bord Administrateur
          </h2>
          <p className="text-muted-foreground">Gérez les utilisateurs et surveillez les performances de BSBridge</p>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="neon-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Inscrits</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">2,853</div>
            <p className="text-xs text-muted-foreground">+12% ce mois</p>
          </CardContent>
        </Card>

        <Card className="neon-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capital Total Investi</CardTitle>
            <DollarSign className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">€14.2M</div>
            <p className="text-xs text-muted-foreground">+8.5% ce mois</p>
          </CardContent>
        </Card>

        <Card className="neon-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Missions Actives</CardTitle>
            <Target className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">145</div>
            <p className="text-xs text-muted-foreground">23 nouvelles cette semaine</p>
          </CardContent>
        </Card>

        <Card className="neon-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Récompenses Distribuées</CardTitle>
            <Gift className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,247</div>
            <p className="text-xs text-muted-foreground">+15% ce mois</p>
          </CardContent>
        </Card>
      </div>

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
                <BarChart3 className="h-4 w-4" />
                Aperçu
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
                Utilisateurs
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
                <Trophy className="h-4 w-4" />
                Battle Pass
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
                <Gift className="h-4 w-4" />
                Récompenses
              </span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="relative">
              {activeTab === "notifications" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-2">
            <motion.div variants={item}>
              <Card className="neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Activité Récente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      user: "john.doe@email.com",
                      action: "a complété la mission 'Premier Trade'",
                      time: "il y a 5 min",
                      type: "mission",
                    },
                    {
                      user: "marie.martin@email.com",
                      action: "a atteint le niveau 15",
                      time: "il y a 12 min",
                      type: "level",
                    },
                    {
                      user: "pierre.durand@email.com",
                      action: "a réclamé une récompense",
                      time: "il y a 18 min",
                      type: "reward",
                    },
                    {
                      user: "sophie.bernard@email.com",
                      action: "s'est inscrit",
                      time: "il y a 25 min",
                      type: "signup",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === "mission"
                            ? "bg-primary"
                            : activity.type === "level"
                              ? "bg-secondary"
                              : activity.type === "reward"
                                ? "bg-accent"
                                : "bg-green-500"
                        }`}
                      />
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    Performance Globale
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Taux de Réussite Moyen</span>
                      <span className="text-sm font-medium text-primary">72.3%</span>
                    </div>
                    <Progress value={72.3} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Missions Complétées</span>
                      <span className="text-sm font-medium text-secondary">89.1%</span>
                    </div>
                    <Progress value={89.1} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Utilisateurs Actifs</span>
                      <span className="text-sm font-medium text-accent">94.7%</span>
                    </div>
                    <Progress value={94.7} className="h-2" />
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-sm text-muted-foreground">
                      Profit total généré: <span className="font-medium text-primary">€2.4M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Liste des Utilisateurs Inscrits
                  </CardTitle>
                  <CardDescription>Gérez et surveillez tous les utilisateurs de la plateforme</CardDescription>
                </div>
                <Button className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  Nouvel Utilisateur
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "John Doe",
                    email: "john.doe@email.com",
                    capital: "€5,250",
                    profit: "+€234.56",
                    level: 24,
                    status: "Actif",
                    joinDate: "15 Mars 2024",
                  },
                  {
                    name: "Marie Martin",
                    email: "marie.martin@email.com",
                    capital: "€3,800",
                    profit: "+€156.78",
                    level: 18,
                    status: "Actif",
                    joinDate: "22 Mars 2024",
                  },
                  {
                    name: "Pierre Durand",
                    email: "pierre.durand@email.com",
                    capital: "€7,100",
                    profit: "+€445.23",
                    level: 31,
                    status: "Premium",
                    joinDate: "8 Mars 2024",
                  },
                  {
                    name: "Sophie Bernard",
                    email: "sophie.bernard@email.com",
                    capital: "€2,500",
                    profit: "+€89.45",
                    level: 12,
                    status: "Nouveau",
                    joinDate: "1 Avril 2024",
                  },
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Inscrit le {user.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-medium">Capital: {user.capital}</p>
                        <p className="text-sm text-primary">Profit: {user.profit}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Niveau {user.level}</p>
                        <Badge
                          variant={
                            user.status === "Premium" ? "default" : user.status === "Actif" ? "secondary" : "outline"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Voir Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                Missions Accomplies par Utilisateur (Battle Pass)
              </CardTitle>
              <CardDescription>Suivez la progression des utilisateurs dans le Battle Pass</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    mission: "Réaliser 10 trades profitables",
                    completions: 1247,
                    totalUsers: 2853,
                    difficulty: "Facile",
                    reward: "500 XP + €10 Bonus",
                  },
                  {
                    mission: "Maintenir 75% de taux de réussite pendant 1 semaine",
                    completions: 892,
                    totalUsers: 2853,
                    difficulty: "Moyen",
                    reward: "1000 XP + Template Bot Premium",
                  },
                  {
                    mission: "Parrainer 3 nouveaux utilisateurs",
                    completions: 456,
                    totalUsers: 2853,
                    difficulty: "Difficile",
                    reward: "1500 XP + 10% Bonus Commission",
                  },
                  {
                    mission: "Atteindre €10,000 de capital",
                    completions: 234,
                    totalUsers: 2853,
                    difficulty: "Expert",
                    reward: "2000 XP + Badge Elite",
                  },
                ].map((mission, i) => {
                  const completionRate = (mission.completions / mission.totalUsers) * 100
                  return (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{mission.mission}</h4>
                            <Badge
                              variant={
                                mission.difficulty === "Facile"
                                  ? "outline"
                                  : mission.difficulty === "Moyen"
                                    ? "secondary"
                                    : mission.difficulty === "Difficile"
                                      ? "default"
                                      : "destructive"
                              }
                            >
                              {mission.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Récompense: {mission.reward}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {mission.completions} / {mission.totalUsers}
                          </p>
                          <p className="text-sm text-primary">{completionRate.toFixed(1)}% complété</p>
                        </div>
                      </div>
                      <Progress value={completionRate} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-secondary" />
                    Gestion des Récompenses
                  </CardTitle>
                  <CardDescription>Gérez les récompenses à distribuer et celles déjà livrées</CardDescription>
                </div>
                <Button className="gap-2">
                  <Package className="h-4 w-4" />
                  Nouvelle Récompense
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium">Récompenses à Livrer</h4>
                    {[
                      {
                        user: "john.doe@email.com",
                        reward: "Badge Trader Pro",
                        level: "Niveau 25",
                        date: "Aujourd'hui",
                        status: "En attente",
                      },
                      {
                        user: "marie.martin@email.com",
                        reward: "5% Bonus Commission",
                        level: "Niveau 20",
                        date: "Hier",
                        status: "En attente",
                      },
                      {
                        user: "pierre.durand@email.com",
                        reward: "Template Bot Premium",
                        level: "Niveau 30",
                        date: "Il y a 2 jours",
                        status: "En attente",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.reward}</p>
                          <p className="text-sm text-muted-foreground">{item.user}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.level} • {item.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.status}</Badge>
                          <Button size="sm">Livrer</Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Récompenses Livrées</h4>
                    {[
                      {
                        user: "sophie.bernard@email.com",
                        reward: "Badge Débutant",
                        level: "Niveau 10",
                        date: "Il y a 3 jours",
                        status: "Livré",
                      },
                      {
                        user: "lucas.petit@email.com",
                        reward: "€25 Bonus Trading",
                        level: "Niveau 15",
                        date: "Il y a 5 jours",
                        status: "Livré",
                      },
                      {
                        user: "emma.dubois@email.com",
                        reward: "Accès VIP 1 mois",
                        level: "Niveau 35",
                        date: "Il y a 1 semaine",
                        status: "Livré",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg opacity-75">
                        <div>
                          <p className="font-medium">{item.reward}</p>
                          <p className="text-sm text-muted-foreground">{item.user}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.level} • {item.date}
                          </p>
                        </div>
                        <Badge variant="secondary">{item.status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Envoi d'Emailing / Push / Notifications
                  </CardTitle>
                  <CardDescription>Communiquez avec les utilisateurs via différents canaux</CardDescription>
                </div>
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Nouvelle Campagne
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">2,853</div>
                        <p className="text-xs text-muted-foreground">Utilisateurs avec email</p>
                        <Button size="sm" className="w-full">
                          Envoyer Email
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Push</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-secondary">1,247</div>
                        <p className="text-xs text-muted-foreground">Notifications activées</p>
                        <Button size="sm" className="w-full">
                          Envoyer Push
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">In-App</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-accent">2,156</div>
                        <p className="text-xs text-muted-foreground">Utilisateurs actifs</p>
                        <Button size="sm" className="w-full">
                          Notification App
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Campagnes Récentes</h4>
                  {[
                    {
                      title: "Nouvelle Mission Battle Pass",
                      type: "Email + Push",
                      sent: "2,853 utilisateurs",
                      date: "Il y a 2 heures",
                      status: "Envoyé",
                      openRate: "68%",
                    },
                    {
                      title: "Mise à jour des Récompenses",
                      type: "In-App",
                      sent: "2,156 utilisateurs",
                      date: "Hier",
                      status: "Envoyé",
                      openRate: "89%",
                    },
                    {
                      title: "Nouveau Template Bot Disponible",
                      type: "Email",
                      sent: "1,247 utilisateurs Premium",
                      date: "Il y a 3 jours",
                      status: "Envoyé",
                      openRate: "72%",
                    },
                  ].map((campaign, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{campaign.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {campaign.type} • {campaign.sent}
                        </p>
                        <p className="text-xs text-muted-foreground">{campaign.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Taux d'ouverture</p>
                          <p className="text-sm text-primary">{campaign.openRate}</p>
                        </div>
                        <Badge variant="secondary">{campaign.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
