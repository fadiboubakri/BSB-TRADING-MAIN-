"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Search, Users, Flag, Gift, UserPlus, FileText, Bell, Settings, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ActionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Define all actions by category
  const actions = {
    user: [
      {
        title: "Add New User",
        description: "Create a new user account with role assignment",
        href: "/dashboard/users/new",
        icon: <UserPlus className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "Manage Users",
        description: "View and manage all user accounts",
        href: "/dashboard/users",
        icon: <Users className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "User Permissions",
        description: "Configure user roles and permissions",
        href: "/dashboard/users/permissions",
        icon: <Users className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "User Activity Log",
        description: "View detailed user activity history",
        href: "/dashboard/users/activity",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
    ],
    mission: [
      {
        title: "Create Mission",
        description: "Design a new mission with objectives and rewards",
        href: "/dashboard/missions/new",
        icon: <Flag className="h-5 w-5 text-green-500" />,
        bgColor: "bg-green-100",
      },
      {
        title: "Manage Missions",
        description: "View and edit existing missions",
        href: "/dashboard/missions",
        icon: <Flag className="h-5 w-5 text-green-500" />,
        bgColor: "bg-green-100",
      },
      {
        title: "Mission Analytics",
        description: "View mission completion statistics",
        href: "/dashboard/missions/analytics",
        icon: <FileText className="h-5 w-5 text-green-500" />,
        bgColor: "bg-green-100",
      },
      {
        title: "Mission Categories",
        description: "Manage mission categories and tags",
        href: "/dashboard/missions/categories",
        icon: <Flag className="h-5 w-5 text-green-500" />,
        bgColor: "bg-green-100",
      },
    ],
    reward: [
      {
        title: "Add New Reward",
        description: "Create a new reward for mission completion",
        href: "/dashboard/rewards/new",
        icon: <Gift className="h-5 w-5 text-amber-500" />,
        bgColor: "bg-amber-100",
      },
      {
        title: "Manage Rewards",
        description: "View and edit existing rewards",
        href: "/dashboard/rewards",
        icon: <Gift className="h-5 w-5 text-amber-500" />,
        bgColor: "bg-amber-100",
      },
      {
        title: "Reward Redemptions",
        description: "View reward redemption history",
        href: "/dashboard/rewards/redemptions",
        icon: <FileText className="h-5 w-5 text-amber-500" />,
        bgColor: "bg-amber-100",
      },
      {
        title: "Reward Categories",
        description: "Manage reward categories and tiers",
        href: "/dashboard/rewards/categories",
        icon: <Gift className="h-5 w-5 text-amber-500" />,
        bgColor: "bg-amber-100",
      },
    ],
    affiliate: [
      {
        title: "Generate Affiliate Link",
        description: "Create new affiliate links for tracking referrals",
        href: "/dashboard/affiliates/links",
        icon: <DollarSign className="h-5 w-5 text-purple-500" />,
        bgColor: "bg-purple-100",
      },
      {
        title: "Manage Affiliates",
        description: "View and manage affiliate accounts",
        href: "/dashboard/affiliates",
        icon: <Users className="h-5 w-5 text-purple-500" />,
        bgColor: "bg-purple-100",
      },
      {
        title: "Affiliate Analytics",
        description: "View affiliate performance metrics",
        href: "/dashboard/affiliates/analytics",
        icon: <FileText className="h-5 w-5 text-purple-500" />,
        bgColor: "bg-purple-100",
      },
      {
        title: "Commission Settings",
        description: "Configure affiliate commission rates",
        href: "/dashboard/affiliates/commissions",
        icon: <Settings className="h-5 w-5 text-purple-500" />,
        bgColor: "bg-purple-100",
      },
    ],
    notification: [
      {
        title: "Send Notification",
        description: "Send notifications to users about new features",
        href: "/dashboard/notifications",
        icon: <Bell className="h-5 w-5 text-indigo-500" />,
        bgColor: "bg-indigo-100",
      },
      {
        title: "Notification Templates",
        description: "Create and manage notification templates",
        href: "/dashboard/notifications/templates",
        icon: <FileText className="h-5 w-5 text-indigo-500" />,
        bgColor: "bg-indigo-100",
      },
      {
        title: "Notification History",
        description: "View sent notification history",
        href: "/dashboard/notifications/history",
        icon: <FileText className="h-5 w-5 text-indigo-500" />,
        bgColor: "bg-indigo-100",
      },
      {
        title: "Notification Settings",
        description: "Configure notification preferences",
        href: "/dashboard/notifications/settings",
        icon: <Settings className="h-5 w-5 text-indigo-500" />,
        bgColor: "bg-indigo-100",
      },
    ],
    content: [
      {
        title: "Manage Content",
        description: "Create and edit platform content",
        href: "/dashboard/content",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "Content Categories",
        description: "Manage content categories and tags",
        href: "/dashboard/content/categories",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "Media Library",
        description: "Upload and manage media assets",
        href: "/dashboard/content/media",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "Content Schedule",
        description: "Schedule content publication",
        href: "/dashboard/content/schedule",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        bgColor: "bg-blue-100",
      },
    ],
    settings: [
      {
        title: "Platform Settings",
        description: "Configure global platform settings",
        href: "/dashboard/settings",
        icon: <Settings className="h-5 w-5 text-gray-500" />,
        bgColor: "bg-gray-100",
      },
      {
        title: "Appearance Settings",
        description: "Customize platform appearance",
        href: "/dashboard/settings/appearance",
        icon: <Settings className="h-5 w-5 text-gray-500" />,
        bgColor: "bg-gray-100",
      },
      {
        title: "Security Settings",
        description: "Configure security and privacy settings",
        href: "/dashboard/settings/security",
        icon: <Settings className="h-5 w-5 text-gray-500" />,
        bgColor: "bg-gray-100",
      },
      {
        title: "Integration Settings",
        description: "Manage third-party integrations",
        href: "/dashboard/settings/integrations",
        icon: <Settings className="h-5 w-5 text-gray-500" />,
        bgColor: "bg-gray-100",
      },
    ],
  }
  const categoryIcons = {
    user: <Users className="h-4 w-4" />,
    mission: <Flag className="h-4 w-4" />,
    reward: <Gift className="h-4 w-4" />,
    affiliate: <DollarSign className="h-4 w-4" />,
    notification: <Bell className="h-4 w-4" />,
    content: <FileText className="h-4 w-4" />,
    settings: <Settings className="h-4 w-4" />,
  }
  // Filter actions based on search query
  const filterActions = (actionList) => {
    if (!searchQuery) return actionList
    return actionList.filter(
      (action) =>
        action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        action.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  // Recent actions (would typically come from a database)
  const recentActions = [
    { title: "Added new user", description: "Alex Johnson", timestamp: "2 hours ago", status: "completed" },
    { title: "Created mission", description: "Portfolio Diversification", timestamp: "Yesterday", status: "completed" },
    { title: "Sent notification", description: "New Feature Announcement", timestamp: "2 days ago", status: "pending" },
    {
      title: "Generated affiliate link",
      description: "For Sarah Williams",
      timestamp: "3 days ago",
      status: "completed",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              All Actions
            </h1>
          </div>
          <p className="text-muted-foreground">View and access all available admin actions</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search actions..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      <Tabs defaultValue="user" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto bg-transparent p-0">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            {Object.keys(actions).map((category) => (
              <TabsTrigger key={category} value={category} className="relative capitalize">
                <span className="relative z-20 flex items-center gap-2">
                  {categoryIcons[category]}
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        {Object.keys(actions).map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <motion.div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {filterActions(actions[category]).map((action, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={action.href}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
                      <CardHeader className="flex flex-row items-center justify-between pt-6 pb-2">
                        <div className={`h-12 w-12 rounded-full ${action.bgColor} flex items-center justify-center`}>
                          {action.icon}
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardHeader>
                      <CardContent className="pb-6">
                        <h3 className="font-medium text-lg mb-1">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-xl font-bold">Recent Actions</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Your recent admin actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActions.map((action, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{action.title}</span>
                    <span className="text-sm text-muted-foreground">{action.description}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={action.status === "completed" ? "success" : "outline"}>{action.status}</Badge>
                    <span className="text-sm text-muted-foreground">{action.timestamp}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
