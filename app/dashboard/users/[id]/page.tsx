"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Mail, Calendar, Clock, Flag, BarChart, Award } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function UserProfilePage() {
  const params = useParams()
  const userId = params.id as string

  // Mock user data
  const user = {
    id: userId,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 12, 2023",
    progress: "Level 8",
    missions: "12/15",
    lastActive: "2 hours ago",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Experienced trader with a focus on cryptocurrency markets. Passionate about algorithmic trading and market analysis.",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    completedMissions: [
      { name: "First Trade", completedAt: "Jan 15, 2023", reward: "10 XP" },
      { name: "Trading Streak", completedAt: "Feb 2, 2023", reward: "25 XP" },
      { name: "Portfolio Diversification", completedAt: "Feb 18, 2023", reward: "Premium Bot Access" },
      { name: "Risk Management Master", completedAt: "Mar 5, 2023", reward: "50 XP" },
    ],
    tradingStats: {
      totalTrades: 156,
      winRate: "78%",
      avgProfit: "$125",
      totalProfit: "$12,450",
      longestStreak: 12,
    },
    rewards: [
      { name: "Beginner Badge", date: "Jan 20, 2023", type: "Badge" },
      { name: "Trading Pro", date: "Feb 15, 2023", type: "Badge" },
      { name: "Premium Bot Access", date: "Feb 18, 2023", type: "Feature" },
      { name: "$50 Bonus", date: "Mar 10, 2023", type: "Bonus" },
    ],
    activity: [
      { action: "Completed mission", target: "Risk Management Master", time: "Mar 5, 2023" },
      { action: "Earned reward", target: "$50 Bonus", time: "Mar 10, 2023" },
      { action: "Logged in", target: "", time: "2 hours ago" },
      { action: "Updated profile", target: "", time: "1 day ago" },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Link href="/dashboard/users">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            User Profile
          </h1>
        </div>
        <div className="flex gap-2">
          <Link href={`/dashboard/users/${userId}/edit`}>
            <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                <div className="flex gap-2 mb-4">
                  <Badge
                    variant={user.role === "Admin" ? "default" : user.role === "Affiliate" ? "outline" : "secondary"}
                  >
                    {user.role}
                  </Badge>
                  <Badge variant={user.status === "Active" ? "success" : "destructive"}>{user.status}</Badge>
                </div>

                <div className="w-full mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{user.progress}</span>
                    <span className="text-sm text-muted-foreground">{user.missions} completed</span>
                  </div>
                  <Progress
                    value={Number.parseInt(user.progress.split(" ")[1]) * 10}
                    className="h-2"
                    indicatorClassName="bg-gradient-to-r from-pink-500 to-blue-500"
                  />
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Joined {user.joined}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Last active {user.lastActive}</span>
                  </div>
                  {user.location && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Mail className="h-5 w-5 text-amber-500" />
                      <span className="text-sm">{user.location}</span>
                    </div>
                  )}
                  {user.phone && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Mail className="h-5 w-5 text-indigo-500" />
                      <span className="text-sm">{user.phone}</span>
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
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{user.bio}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="stats" className="space-y-4">
            <TabsList className="bg-transparent p-0">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
                <TabsTrigger value="stats" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    Trading Stats
                  </span>
                </TabsTrigger>
                <TabsTrigger value="missions" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Missions
                  </span>
                </TabsTrigger>
                <TabsTrigger value="rewards" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Rewards
                  </span>
                </TabsTrigger>
                <TabsTrigger value="activity" className="relative">
                  <span className="relative z-20 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Activity
                  </span>
                </TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="stats">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Trading Performance</CardTitle>
                  <CardDescription>User's trading statistics and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      {
                        icon: <BarChart className="h-6 w-6 text-blue-500" />,
                        label: "Total Trades",
                        value: user.tradingStats.totalTrades,
                      },
                      {
                        icon: <BarChart className="h-6 w-6 text-green-500" />,
                        label: "Win Rate",
                        value: user.tradingStats.winRate,
                      },
                      {
                        icon: <BarChart className="h-6 w-6 text-purple-500" />,
                        label: "Avg. Profit",
                        value: user.tradingStats.avgProfit,
                      },
                      {
                        icon: <BarChart className="h-6 w-6 text-pink-500" />,
                        label: "Total Profit",
                        value: user.tradingStats.totalProfit,
                      },
                      {
                        icon: <BarChart className="h-6 w-6 text-indigo-500" />,
                        label: "Longest Streak",
                        value: user.tradingStats.longestStreak,
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

            <TabsContent value="missions">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Completed Missions</CardTitle>
                  <CardDescription>Missions the user has successfully completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.completedMissions.map((mission, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Flag className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="font-medium">{mission.name}</p>
                            <p className="text-sm text-muted-foreground">Completed on {mission.completedAt}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{mission.reward}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Earned Rewards</CardTitle>
                  <CardDescription>Rewards the user has earned through missions and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.rewards.map((reward, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <Award className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="font-medium">{reward.name}</p>
                            <p className="text-sm text-muted-foreground">Earned on {reward.date}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{reward.type}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>User's recent actions and events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.activity.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-3 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {item.action} {item.target && <span className="text-primary">{item.target}</span>}
                          </p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
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
