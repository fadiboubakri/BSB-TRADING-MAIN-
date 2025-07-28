"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Copy, MoreHorizontal, Plus, Search, LinkIcon, ExternalLink, BarChart, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AffiliateLinksPage() {
  const [generatedLink, setGeneratedLink] = useState("")

  // Mock function to generate a link
  const generateLink = () => {
    const randomString = Math.random().toString(36).substring(2, 8)
    setGeneratedLink(`https://tradebotx.com/ref/${randomString}`)
  }

  const affiliateLinks = [
    {
      id: "1",
      name: "Summer Promotion",
      affiliate: "Sarah Johnson",
      url: "tradebotx.com/ref/sarah-j/summer",
      clicks: 342,
      signups: 28,
      conversion: "8.2%",
      earnings: "$840",
      status: "Active",
      created: "May 15, 2023",
      expires: "Aug 31, 2023",
    },
    {
      id: "2",
      name: "Blog Referral",
      affiliate: "Michael Chen",
      url: "tradebotx.com/ref/michael-c/blog",
      clicks: 215,
      signups: 19,
      conversion: "8.8%",
      earnings: "$570",
      status: "Active",
      created: "Apr 10, 2023",
      expires: "Never",
    },
    {
      id: "3",
      name: "YouTube Channel",
      affiliate: "Emma Davis",
      url: "tradebotx.com/ref/emma-d/youtube",
      clicks: 187,
      signups: 15,
      conversion: "8.0%",
      earnings: "$450",
      status: "Active",
      created: "May 5, 2023",
      expires: "Never",
    },
    {
      id: "4",
      name: "Crypto Conference",
      affiliate: "James Wilson",
      url: "tradebotx.com/ref/james-w/conf",
      clicks: 98,
      signups: 12,
      conversion: "12.2%",
      earnings: "$360",
      status: "Inactive",
      created: "Mar 20, 2023",
      expires: "Jun 20, 2023",
    },
    {
      id: "5",
      name: "Trading Course",
      affiliate: "Olivia Martinez",
      url: "tradebotx.com/ref/olivia-m/course",
      clicks: 76,
      signups: 8,
      conversion: "10.5%",
      earnings: "$240",
      status: "Active",
      created: "May 1, 2023",
      expires: "Never",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Affiliate Links</h1>
        <p className="text-muted-foreground">Generate and manage tracking links for your affiliate partners</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Links</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search links..." className="w-[300px] pl-9" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by affiliate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Affiliates</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="michael">Michael Chen</SelectItem>
                  <SelectItem value="emma">Emma Davis</SelectItem>
                  <SelectItem value="james">James Wilson</SelectItem>
                  <SelectItem value="olivia">Olivia Martinez</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => document.getElementById("generate-section")?.scrollIntoView({ behavior: "smooth" })}>
              <Plus className="mr-2 h-4 w-4" />
              Generate New Link
            </Button>
          </div>

          <Card>
            <CardHeader className="p-4">
              <CardTitle>Affiliate Links</CardTitle>
              <CardDescription>Showing {affiliateLinks.length} links</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Link</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {affiliateLinks.map((link) => (
                    <TableRow key={link.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{link.name}</span>
                          <span className="text-xs text-muted-foreground">Created: {link.created}</span>
                        </div>
                      </TableCell>
                      <TableCell>{link.affiliate}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{link.clicks} clicks</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-sm">{link.signups} signups</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-green-500">{link.conversion} conversion</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs font-medium">{link.earnings} earned</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            link.status === "Active"
                              ? "success"
                              : link.status === "Inactive"
                                ? "destructive"
                                : "outline"
                          }
                        >
                          {link.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-2 py-1 rounded">{link.url}</code>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
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
                            <DropdownMenuItem>
                              <BarChart className="mr-2 h-4 w-4" />
                              View Analytics
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Open Link
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Copy Link
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {link.status === "Active" ? (
                              <DropdownMenuItem>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Deactivate Link
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <LinkIcon className="mr-2 h-4 w-4" />
                                Activate Link
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {/* Similar content as "all" tab but filtered for active links */}
          <Card>
            <CardHeader>
              <CardTitle>Active Links</CardTitle>
              <CardDescription>Currently active affiliate links</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing active affiliate links</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive" className="space-y-4">
          {/* Similar content as "all" tab but filtered for inactive links */}
          <Card>
            <CardHeader>
              <CardTitle>Inactive Links</CardTitle>
              <CardDescription>Manually deactivated affiliate links</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing inactive affiliate links</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {/* Similar content as "all" tab but filtered for expired links */}
          <Card>
            <CardHeader>
              <CardTitle>Expired Links</CardTitle>
              <CardDescription>Links that have reached their expiration date</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing expired affiliate links</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div id="generate-section">
        <Card>
          <CardHeader>
            <CardTitle>Generate New Affiliate Link</CardTitle>
            <CardDescription>Create a new tracking link for an affiliate partner</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Link Type</label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select link type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (5% commission)</SelectItem>
                      <SelectItem value="premium">Premium (10% commission)</SelectItem>
                      <SelectItem value="vip">VIP (15% commission)</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Affiliate</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select affiliate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Chen</SelectItem>
                      <SelectItem value="emma">Emma Davis</SelectItem>
                      <SelectItem value="james">James Wilson</SelectItem>
                      <SelectItem value="olivia">Olivia Martinez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Name</label>
                  <Input placeholder="Summer Promotion" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiration</label>
                  <Select defaultValue="never">
                    <SelectTrigger>
                      <SelectValue placeholder="Select expiration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="60days">60 Days</SelectItem>
                      <SelectItem value="90days">90 Days</SelectItem>
                      <SelectItem value="custom">Custom Date</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Show date picker if custom expiration is selected */}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Custom Path (Optional)</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">tradebotx.com/ref/affiliate-id/</span>
                  <Input placeholder="custom-path" className="max-w-[200px]" />
                </div>
                <p className="text-xs text-muted-foreground">Leave blank to generate automatically</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">UTM Parameters (Optional)</label>
                <div className="grid gap-2 md:grid-cols-3">
                  <div className="space-y-1">
                    <label className="text-xs">UTM Source</label>
                    <Input placeholder="e.g., newsletter" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs">UTM Medium</label>
                    <Input placeholder="e.g., email" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs">UTM Campaign</label>
                    <Input placeholder="e.g., summer_promo" />
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={generateLink}>
                Generate Link
              </Button>

              {generatedLink && (
                <div className="mt-4 p-4 border rounded-md bg-muted/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-medium">Generated Link</h3>
                      <p className="text-xs text-muted-foreground">Share this link with your affiliate partner</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(generatedLink)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.open(generatedLink, "_blank")}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-background rounded border flex items-center justify-between">
                    <code className="text-sm">{generatedLink}</code>
                    <Badge variant="success">Active</Badge>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Link Performance Overview</CardTitle>
          <CardDescription>Summary of all affiliate link performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Clicks</p>
              <p className="text-2xl font-bold">918</p>
              <p className="text-xs text-green-500">+12% from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Signups</p>
              <p className="text-2xl font-bold">82</p>
              <p className="text-xs text-green-500">+8% from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold">8.9%</p>
              <p className="text-xs text-amber-500">-0.3% from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="text-2xl font-bold">$2,460</p>
              <p className="text-xs text-green-500">+15% from last month</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Top Performing Links</h3>
            <div className="space-y-3">
              {affiliateLinks.slice(0, 3).map((link, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{link.name}</span>
                      <span className="text-green-500 font-medium">{link.conversion} conversion</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{link.affiliate}</span>
                      <span>{link.earnings} earned</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
