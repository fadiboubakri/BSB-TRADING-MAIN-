"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Mail, Bell, Clock, Send, Search, Filter, Download, Plus, Check, FileText, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function CommunicationsPage() {
  const [activeTab, setActiveTab] = useState("compose")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

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

  const messages = [
    {
      id: "MSG-001",
      subject: "Platform Maintenance Notice",
      recipients: "All Users (2,853)",
      type: "Email",
      sentAt: "Mar 28, 2023 - 3:15 PM",
      openRate: "68%",
      status: "sent",
    },
    {
      id: "MSG-002",
      subject: "New Features Announcement",
      recipients: "Active Users (1,756)",
      type: "Notification",
      sentAt: "Mar 20, 2023 - 10:30 AM",
      openRate: "72%",
      status: "sent",
    },
    {
      id: "MSG-003",
      subject: "Affiliate Program Updates",
      recipients: "Affiliates (124)",
      type: "Both",
      sentAt: "Feb 28, 2023 - 2:45 PM",
      openRate: "94%",
      status: "sent",
    },
    {
      id: "MSG-004",
      subject: "Weekend Trading Challenge",
      recipients: "All Users",
      type: "Notification",
      scheduledFor: "Apr 22, 2023 - 8:00 AM",
      status: "scheduled",
    },
    {
      id: "MSG-005",
      subject: "Account Verification Reminder",
      recipients: "Inactive Users (421)",
      type: "Email",
      status: "draft",
    },
  ]

  const templates = [
    {
      id: "TMP-001",
      name: "Welcome Message",
      description: "Sent to new users upon registration",
      type: "Email",
      lastUpdated: "2023-11-15",
    },
    {
      id: "TMP-002",
      name: "Mission Completed",
      description: "Notification for completed missions",
      type: "Notification",
      lastUpdated: "2023-11-10",
    },
    {
      id: "TMP-003",
      name: "Affiliate Payout",
      description: "Commission payout notification",
      type: "Both",
      lastUpdated: "2023-11-05",
    },
  ]

  const filteredMessages = messages.filter((message) => {
    const matchesSearch = message.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || message.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const handleDelete = () => {
    console.log("Deleting message:", selectedMessage?.id)
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
              Communications Center
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Send className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            Manage all platform communications including notifications, emails, and announcements
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
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
                  <p className="text-sm font-medium text-muted-foreground">Messages Sent</p>
                  <h3 className="text-2xl font-bold mt-1">1,284</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Send className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={75} className="h-1.5 bg-blue-100" indicatorClassName="bg-blue-500" />
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
                  <p className="text-sm font-medium text-muted-foreground">Open Rate</p>
                  <h3 className="text-2xl font-bold mt-1">72%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={72} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
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
                  <p className="text-sm font-medium text-muted-foreground">Scheduled</p>
                  <h3 className="text-2xl font-bold mt-1">8</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={40} className="h-1.5 bg-indigo-100" indicatorClassName="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="compose" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="compose" className="relative">
              {activeTab === "compose" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Compose
              </span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="relative">
              {activeTab === "templates" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Templates
              </span>
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="relative">
              {activeTab === "scheduled" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Scheduled
              </span>
            </TabsTrigger>
            <TabsTrigger value="sent" className="relative">
              {activeTab === "sent" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Send className="h-4 w-4" />
                Sent
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="compose" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">New Message</CardTitle>
                    <CardDescription>Create and deliver notifications or emails to your users</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Message Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select message type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="notification">
                            <div className="flex items-center gap-2">
                              <Bell className="h-4 w-4" /> In-App Notification
                            </div>
                          </SelectItem>
                          <SelectItem value="email">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" /> Email
                            </div>
                          </SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Recipients</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select recipients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Users</SelectItem>
                          <SelectItem value="active">Active Users</SelectItem>
                          <SelectItem value="inactive">Inactive Users</SelectItem>
                          <SelectItem value="affiliates">Affiliates</SelectItem>
                          <SelectItem value="admins">Admins</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Input placeholder="Enter message subject" />
                  </div>

                  <div className="space-y-2">
                    <Label>Message Content</Label>
                    <Textarea placeholder="Enter your message content here..." className="min-h-[200px]" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-md border p-4">
                      <Checkbox id="schedule" />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="schedule">Schedule for later</Label>
                        <p className="text-sm text-muted-foreground">Send this message at a scheduled time</p>
                      </div>
                    </div>

                    <div className="ml-8 space-y-2">
                      <Label>Scheduled Time</Label>
                      <Input type="datetime-local" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                      Send Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Message Templates</CardTitle>
                    <CardDescription>Pre-designed templates for common communications</CardDescription>
                  </div>{" "}
                  <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    <Plus className="h-4 w-4" />
                    <span>New Template</span>
                  </Button>{" "}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Template Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {templates.map((template) => (
                        <TableRow key={template.id}>
                          <TableCell className="font-medium">{template.name}</TableCell>
                          <TableCell>{template.description}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{template.type}</Badge>
                          </TableCell>
                          <TableCell>{template.lastUpdated}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="mr-2">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              Use
                            </Button>
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

        <TabsContent value="scheduled" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Scheduled Messages</CardTitle>
                    <CardDescription>Messages queued for future delivery</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-[200px] pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Recipients</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Scheduled For</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMessages
                        .filter((m) => m.status === "scheduled")
                        .map((message) => (
                          <TableRow key={message.id}>
                            <TableCell className="font-medium">{message.subject}</TableCell>
                            <TableCell>{message.recipients}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{message.type}</Badge>
                            </TableCell>
                            <TableCell>{message.scheduledFor}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="mr-2">
                                Edit
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-destructive"
                                onClick={() => {
                                  setSelectedMessage(message)
                                  setIsDeleteDialogOpen(true)
                                }}
                              >
                                Cancel
                              </Button>
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

        <TabsContent value="sent" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Sent Messages</CardTitle>
                    <CardDescription>History of all delivered communications</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-[200px] pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="sent">Sent</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Recipients</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Sent At</TableHead>
                        <TableHead>Open Rate</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMessages
                        .filter((m) => m.status === "sent")
                        .map((message) => (
                          <TableRow key={message.id}>
                            <TableCell className="font-medium">{message.subject}</TableCell>
                            <TableCell>{message.recipients}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{message.type}</Badge>
                            </TableCell>
                            <TableCell>{message.sentAt}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span>{message.openRate}</span>
                                <Progress value={Number.parseInt(message.openRate)} className="h-2 w-20" />
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="mr-2">
                                Details
                              </Button>
                              <Button variant="ghost" size="sm">
                                Resend
                              </Button>
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
      </Tabs>

      {/* Delete Message Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Scheduled Message</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this scheduled message? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4 py-2">
              <div className="rounded-md bg-destructive/10 p-4">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <p className="text-sm">
                    This will permanently cancel the scheduled message. This action cannot be reversed.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-delete">Type "CANCEL" to confirm</Label>
                <Input id="confirm-delete" placeholder="CANCEL" />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Confirm Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
