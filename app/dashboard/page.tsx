"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  DollarSign,
  Flag,
  Users,
  Download,
  FileText,
  BarChart,
  Link as AffiliateLink,
  LayoutDashboard,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// Chart component for Performance Overview
const PerformanceChart = () => {
  return (
    <div className="h-[300px] relative">
      {/* Chart header */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm font-medium">Trading Volume</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Profit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-sm font-medium">Active Users</span>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="absolute top-12 left-0 right-0 bottom-0 flex items-end px-4">
        {/* Generate 30 days of data */}
        {Array.from({ length: 30 }).map((_, i) => {
          // Generate random heights for each metric
          const volumeHeight = 30 + Math.random() * 70
          const profitHeight = 20 + Math.random() * 60
          const usersHeight = 25 + Math.random() * 50

          return (
            <div key={i} className="flex-1 flex items-end gap-1 h-full">
              <div className="w-1 bg-primary rounded-t opacity-80" style={{ height: `${volumeHeight}%` }}></div>
              <div className="w-1 bg-green-500 rounded-t opacity-80" style={{ height: `${profitHeight}%` }}></div>
              <div className="w-1 bg-amber-500 rounded-t opacity-80" style={{ height: `${usersHeight}%` }}></div>
            </div>
          )
        })}
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-muted-foreground">
        <span>1 May</span>
        <span>15 May</span>
        <span>30 May</span>
      </div>
    </div>
  )
}

// Analytics Dashboard Component
const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("30days")

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Platform Analytics
          </h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <BarChart className="h-7 w-7 text-indigo-500" />
          </motion.div>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days" value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">User Acquisition</CardTitle>
              <CardDescription>New users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end space-x-1 pt-6">
                {Array.from({ length: 12 }).map((_, i) => {
                  const height = 30 + Math.random() * 70
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary/80 rounded-t" style={{ height: `${height}%` }}></div>
                      <span className="text-xs text-muted-foreground mt-1">{i + 1}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">User Engagement</CardTitle>
              <CardDescription>Daily active users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] relative">
                <div className="absolute inset-0 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,50 Q10,30 20,45 T40,35 T60,50 T80,30 T100,40"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,50 Q10,30 20,45 T40,35 T60,50 T80,30 T100,40 V100 H0 Z"
                      fill="hsl(var(--primary) / 0.2)"
                      stroke="none"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">User Distribution</CardTitle>
              <CardDescription>By account type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {/* Pie chart segments */}
                  <div
                    className="absolute inset-0 rounded-full border-8 border-primary"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-green-500"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-amber-500"
                    style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 100%)" }}
                  ></div>

                  {/* Center circle */}
                  <div className="absolute inset-[15%] bg-background rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">2,853</span>
                  </div>
                </div>

                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Standard (65%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Premium (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm">Admin (10%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where users are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Direct", percentage: 35, value: 998 },
                  { source: "Organic Search", percentage: 28, value: 799 },
                  { source: "Referral", percentage: 22, value: 627 },
                  { source: "Social Media", percentage: 15, value: 429 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.source}</span>
                      <span className="text-sm text-muted-foreground">{item.value} users</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>Mission Completion</CardTitle>
              <CardDescription>Top completed missions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "First Trade", completion: 92, users: 1245 },
                  { name: "Consecutive Wins", completion: 78, users: 987 },
                  { name: "Portfolio Diversification", completion: 65, users: 756 },
                  { name: "Risk Management", completion: 54, users: 632 },
                ].map((mission, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{mission.name}</span>
                        <span className="text-green-500 font-medium">{mission.completion}%</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${mission.completion}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">{mission.users} users</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

// Reports Dashboard Component
const ReportsDashboard = () => {
  const [reportType, setReportType] = useState("performance")
  const [dateRange, setDateRange] = useState("last30days")
  const [format, setFormat] = useState("pdf")

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Report Generation
          </h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <FileText className="h-7 w-7 text-indigo-500" />
          </motion.div>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
          <Download className="h-4 w-4" />
          <span>Generate Report</span>
        </Button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>Report Type</CardTitle>
              <CardDescription>Select the type of report to generate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "performance", name: "Performance Report", icon: <BarChart className="h-5 w-5" /> },
                  { id: "users", name: "User Activity Report", icon: <Users className="h-5 w-5" /> },
                  { id: "financial", name: "Financial Report", icon: <DollarSign className="h-5 w-5" /> },
                  { id: "missions", name: "Mission Completion Report", icon: <Flag className="h-5 w-5" /> },
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer border ${
                      reportType === item.id ? "border-primary bg-primary/5" : "border-transparent hover:bg-muted/50"
                    }`}
                    onClick={() => setReportType(item.id)}
                  >
                    <div className={`${reportType === item.id ? "text-primary" : "text-muted-foreground"}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>Date Range</CardTitle>
              <CardDescription>Select the time period for the report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "last7days", name: "Last 7 Days" },
                  { id: "last30days", name: "Last 30 Days" },
                  { id: "last90days", name: "Last 90 Days" },
                  { id: "lastYear", name: "Last Year" },
                  { id: "custom", name: "Custom Range" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer border ${
                      dateRange === item.id ? "border-primary bg-primary/5" : "border-transparent hover:bg-muted/50"
                    }`}
                    onClick={() => setDateRange(item.id)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border ${
                        dateRange === item.id ? "border-4 border-primary" : "border border-muted-foreground"
                      }`}
                    ></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}

                {dateRange === "custom" && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="space-y-1">
                      <label className="text-sm">Start Date</label>
                      <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-1" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm">End Date</label>
                      <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-1" />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle>Report Options</CardTitle>
              <CardDescription>Configure additional report options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Format</label>
                  <div className="flex gap-2">
                    {[
                      { id: "pdf", name: "PDF" },
                      { id: "excel", name: "Excel" },
                      { id: "csv", name: "CSV" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        className={`flex-1 py-2 rounded-md border ${
                          format === item.id ? "border-primary bg-primary/5" : "border-input"
                        }`}
                        onClick={() => setFormat(item.id)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Include</label>
                  <div className="space-y-2">
                    {[
                      { id: "charts", name: "Charts & Graphs" },
                      { id: "tables", name: "Data Tables" },
                      { id: "summary", name: "Executive Summary" },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <input type="checkbox" id={item.id} defaultChecked className="rounded border-input h-4 w-4" />
                        <label htmlFor={item.id} className="text-sm">
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <FileText className="h-4 w-4" />
                    Preview Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Previously generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Monthly Performance Report", date: "May 1, 2023", type: "Performance", format: "PDF" },
                { name: "User Activity Analysis", date: "Apr 15, 2023", type: "Users", format: "Excel" },
                { name: "Q1 Financial Report", date: "Apr 1, 2023", type: "Financial", format: "PDF" },
                { name: "Mission Completion Analysis", date: "Mar 15, 2023", type: "Missions", format: "PDF" },
              ].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 border-b last:border-0">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.date} • {report.type} • {report.format}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default function DashboardPage() {
  const { t } = useLanguage()
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    setAnimateCards(true)
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {t("dashboard.title")}
          </h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <LayoutDashboard className="h-7 w-7 text-indigo-500" />
          </motion.div>
        </div>
        <p className="text-muted-foreground">{t("dashboard.welcome")}</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Card className="overflow-hidden border-t-4 border-t-pink-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.totalUsers")}</CardTitle>
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-pink-500" />
              </div>{" "}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
              <div className="mt-2">
                <Progress value={12} className="h-1.5 bg-pink-100" indicatorClassName="bg-pink-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="overflow-hidden border-t-4 border-t-purple-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.activeMissions")}</CardTitle>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Flag className="h-4 w-4 text-purple-500" />{" "}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <p className="text-xs text-muted-foreground">+4% from last month</p>
              <div className="mt-2">
                <Progress value={4} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="overflow-hidden border-t-4 border-t-indigo-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.tradingVolume")}</CardTitle>
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-indigo-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
              <div className="mt-2">
                <Progress value={18} className="h-1.5 bg-indigo-100" indicatorClassName="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="overview" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Overview
              </span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Analytics
              </span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Reports
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-4"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <PerformanceChart />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-3"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">User completed "First Trade" mission</p>
                          <p className="text-xs text-muted-foreground">{i * 10} minutes ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Popular Missions",
                description: "Most engaged missions this month",
                data: [
                  { name: "First Trade", completion: "92%" },
                  { name: "Consecutive Wins", completion: "78%" },
                  { name: "Portfolio Diversification", completion: "65%" },
                  { name: "Risk Management", completion: "54%" },
                ],
                icon: <Flag className="h-5 w-5 text-primary" />,
              },
              {
                title: "Reward Redemptions",
                description: "Most redeemed rewards",
                data: [
                  { name: "Premium Trading Pass", count: "124" },
                  { name: "Trading Fee Discount", count: "98" },
                  { name: "VIP Strategy Access", count: "87" },
                  { name: "Exclusive Webinar", count: "76" },
                ],
                icon: <DollarSign className="h-5 w-5 text-primary" />,
              },
              {
                title: "Top Affiliates",
                description: "Highest referring affiliates",
                data: [
                  { name: "Sarah Johnson", referrals: "124" },
                  { name: "Michael Chen", referrals: "98" },
                  { name: "Emma Davis", referrals: "87" },
                  { name: "James Wilson", referrals: "76" },
                ],
                icon: <Users className="h-5 w-5 text-primary" />,
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{section.title}</CardTitle>
                      {section.icon}
                    </div>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.data.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">{i + 1}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                          </div>
                          <div className="text-sm font-medium text-primary">
                            {item.completion || item.count}
                            {item.completion && <span className="text-green-500">%</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <AnalyticsDashboard />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ReportsDashboard />
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Quick Actions</h2>
        </div>
        <Link href="/dashboard/actions">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
          >
            View All
          </Button>
        </Link>
      </motion.div>

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
        {[
          {
            title: "Add New User",
            description: "Create a new user account with role assignment",
            href: "/dashboard/users/new",
            icon: <Users className="h-6 w-6 text-pink-500" />,
            bgColor: "bg-pink-100",
          },
          {
            title: "Create Mission",
            description: "Design a new mission with objectives and rewards",
            href: "/dashboard/missions/new",
            icon: <Flag className="h-6 w-6 text-purple-500" />,
            bgColor: "bg-purple-100",
          },
          {
            title: "Send Notification",
            description: "Send notifications to users about new features",
            href: "/dashboard/notifications",
            icon: <FileText className="h-6 w-6 text-indigo-500" />,
            bgColor: "bg-indigo-100",
          },
          {
            title: "Generate Affiliate Link",
            description: "Create new affiliate links for tracking referrals",
            href: "/dashboard/affiliates/links",
            icon: <AffiliateLink className="h-6 w-6 text-blue-500" />,
            bgColor: "bg-blue-100",
          },
        ].map((action, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
          >
            <Link href={action.href}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
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
    </div>
  )
}
