"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Plus, Search, Eye, Edit, Lock, UserX, UserCheck, Trash, Download, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function UsersPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const router = useRouter()

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // State for confirmation dialogs
  const [userToDelete, setUserToDelete] = useState<string | null>(null)
  const [userToToggleStatus, setUserToToggleStatus] = useState<{ id: string; status: string } | null>(null)

  // Mock user data
  const allUsers = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "Active",
      joined: "Jan 12, 2023",
      progress: "Level 8",
      missions: "12/15",
      lastActive: "2 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Standard",
      status: "Active",
      joined: "Feb 24, 2023",
      progress: "Level 5",
      missions: "8/15",
      lastActive: "1 day ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Affiliate",
      status: "Active",
      joined: "Mar 15, 2023",
      progress: "Level 7",
      missions: "10/15",
      lastActive: "3 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Standard",
      status: "Inactive",
      joined: "Apr 3, 2023",
      progress: "Level 3",
      missions: "4/15",
      lastActive: "2 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david@example.com",
      role: "Standard",
      status: "Active",
      joined: "May 18, 2023",
      progress: "Level 6",
      missions: "9/15",
      lastActive: "5 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      name: "Jessica Taylor",
      email: "jessica@example.com",
      role: "Affiliate",
      status: "Active",
      joined: "Jun 7, 2023",
      progress: "Level 9",
      missions: "13/15",
      lastActive: "1 hour ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "7",
      name: "Ryan Martinez",
      email: "ryan@example.com",
      role: "Standard",
      status: "Pending",
      joined: "Jul 22, 2023",
      progress: "Level 1",
      missions: "1/15",
      lastActive: "1 week ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "8",
      name: "Olivia Anderson",
      email: "olivia@example.com",
      role: "Admin",
      status: "Active",
      joined: "Aug 14, 2023",
      progress: "Level 10",
      missions: "15/15",
      lastActive: "30 minutes ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Filter users based on search query and filters
  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesRole && matchesStatus
  })

  // Handle user actions
  const handleViewProfile = (userId) => {
    router.push(`/dashboard/users/${userId}`)
  }

  const handleEditUser = (userId) => {
    router.push(`/dashboard/users/${userId}/edit`)
  }

  const handleResetPassword = (userId) => {
    toast({
      title: "Password reset initiated",
      description: `Reset email sent to user ID: ${userId}`,
    })
  }

  const confirmToggleStatus = () => {
    if (!userToToggleStatus) return

    const { id, status } = userToToggleStatus
    const newStatus = status === "Active" ? "Inactive" : "Active"

    toast({
      title: `User ${newStatus.toLowerCase()}`,
      description: `User ID: ${id} is now ${newStatus.toLowerCase()}`,
    })

    setUserToToggleStatus(null)
  }

  const confirmDeleteUser = () => {
    if (!userToDelete) return

    toast({
      title: "User deleted",
      description: `User ID: ${userToDelete} has been deleted`,
      variant: "destructive",
    })

    setUserToDelete(null)
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
              {t("users.title")}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Users className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">{t("users.description")}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("users.search")}
              className="w-[300px] pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select defaultValue="all" value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="affiliate">Affiliate</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/dashboard/users/new">
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
            <Plus className="h-4 w-4" />
            {t("users.addUser")}
          </Button>
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>Showing {filteredUsers.length} users</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Missions</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">{user.name}</span>
                          <span className="text-sm text-muted-foreground">{user.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "Admin" ? "default" : user.role === "Affiliate" ? "outline" : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "Active" ? "success" : user.status === "Inactive" ? "destructive" : "outline"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={Number.parseInt(user.progress.split(" ")[1]) * 10}
                          className="w-24 h-2"
                          indicatorClassName="bg-gradient-to-r from-pink-500 to-blue-500"
                        />
                        <span className="text-xs font-medium">{user.progress}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.missions}</TableCell>
                    <TableCell>{user.lastActive}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleViewProfile(user.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View profile
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditUser(user.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit user
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleResetPassword(user.id)}>
                            <Lock className="mr-2 h-4 w-4" />
                            Reset password
                          </DropdownMenuItem>
                          {user.status === "Active" ? (
                            <DropdownMenuItem
                              className="text-amber-600"
                              onClick={() => setUserToToggleStatus({ id: user.id, status: user.status })}
                            >
                              <UserX className="mr-2 h-4 w-4" />
                              Deactivate account
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem
                              className="text-amber-600"
                              onClick={() => setUserToToggleStatus({ id: user.id, status: user.status })}
                            >
                              <UserCheck className="mr-2 h-4 w-4" />
                              Activate account
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => setUserToDelete(user.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Delete User Confirmation Dialog */}
      <Dialog open={!!userToDelete} onOpenChange={(open) => !open && setUserToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user account? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUserToDelete(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteUser}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Toggle Status Confirmation Dialog */}
      <Dialog open={!!userToToggleStatus} onOpenChange={(open) => !open && setUserToToggleStatus(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {userToToggleStatus?.status === "Active" ? "Deactivate" : "Activate"} User Account
            </DialogTitle>
            <DialogDescription>
              {userToToggleStatus?.status === "Active"
                ? "Are you sure you want to deactivate this user account? The user will no longer be able to access the platform."
                : "Are you sure you want to activate this user account? The user will regain access to the platform."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUserToToggleStatus(null)}>
              Cancel
            </Button>
            <Button
              variant={userToToggleStatus?.status === "Active" ? "destructive" : "default"}
              onClick={confirmToggleStatus}
            >
              {userToToggleStatus?.status === "Active" ? "Deactivate" : "Activate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
