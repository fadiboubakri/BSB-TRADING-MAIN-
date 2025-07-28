"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Edit,
  Globe,
  ImageIcon,
  MoreHorizontal,
  Plus,
  Trash,
  Upload,
  FilePlus2,
  Newspaper,
  Library,
  LayoutDashboard,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function ContentManagementPage() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("homepage")

  const news = [
    {
      id: 1,
      title: "New Trading Algorithm Released",
      summary: "We've launched our latest trading algorithm with improved performance.",
      date: "2023-04-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Platform Maintenance Scheduled",
      summary: "Scheduled maintenance will occur on April 20th from 2-4 AM UTC.",
      date: "2023-04-12",
      status: "Published",
    },
    {
      id: 3,
      title: "New Partnership Announcement",
      summary: "We're excited to announce our partnership with CryptoExchange.",
      date: "2023-04-10",
      status: "Draft",
    },
    {
      id: 4,
      title: "Trading Bot Performance Update",
      summary: "Our trading bot has achieved a 15% increase in performance this quarter.",
      date: "2023-04-05",
      status: "Published",
    },
    {
      id: 5,
      title: "New User Interface Coming Soon",
      summary: "We're working on a new user interface that will be released next month.",
      date: "2023-04-01",
      status: "Draft",
    },
  ]

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
              {language === "fr" ? "Gestion de Contenu" : "Content Management"}
            </h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <FilePlus2 className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Gérez le contenu du site web, les actualités et les mises à jour concernant le bot de trading."
              : "Manage website content, news, and updates about the trading bot."}
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="homepage" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="homepage" className="relative">
              {activeTab === "homepage" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                {language === "fr" ? "Page d'Accueil" : "Homepage"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="news" className="relative">
              {activeTab === "news" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Newspaper className="h-4 w-4" />
                {language === "fr" ? "Actualités" : "News & Updates"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="media" className="relative">
              {activeTab === "media" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Library className="h-4 w-4" />
                {language === "fr" ? "Média" : "Media Library"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="homepage" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Contenu Principal" : "Homepage Content"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Modifiez les sections principales de votre page d'accueil"
                    : "Edit the main content sections of your homepage"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">{language === "fr" ? "Titre Principal" : "Hero Title"}</Label>
                  <Input id="hero-title" defaultValue="Automated Trading Bot with Gamified Progression" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">{language === "fr" ? "Sous-titre" : "Hero Subtitle"}</Label>
                  <Input
                    id="hero-subtitle"
                    defaultValue="Maximize your trading potential with our AI-powered bot and earn rewards as you progress"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero-description">{language === "fr" ? "Description" : "Hero Description"}</Label>
                  <Textarea
                    id="hero-description"
                    className="min-h-[100px]"
                    defaultValue="Our trading bot combines cutting-edge algorithms with a gamified experience. Complete missions, earn rewards, and climb the leaderboard while our bot handles your trades with precision and efficiency."
                  />
                </div>

                <div className="space-y-2">
                  <Label>{language === "fr" ? "Image Principale" : "Hero Image"}</Label>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-2 w-40 h-24 flex items-center justify-center bg-muted">
                      <ImageIcon className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      {language === "fr" ? "Changer l'Image" : "Change Image"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-medium">
                    {language === "fr" ? "Section Fonctionnalités" : "Features Section"}
                  </h3>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="border">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">
                            {language === "fr" ? `Fonctionnalité ${i}` : `Feature ${i}`}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <div className="space-y-1">
                            <Label htmlFor={`feature-${i}-title`} className="text-xs">
                              {language === "fr" ? "Titre" : "Title"}
                            </Label>
                            <Input id={`feature-${i}-title`} defaultValue={`Feature ${i} Title`} className="h-8" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor={`feature-${i}-desc`} className="text-xs">
                              {language === "fr" ? "Description" : "Description"}
                            </Label>
                            <Textarea
                              id={`feature-${i}-desc`}
                              defaultValue={`Description for feature ${i}`}
                              className="min-h-[80px]"
                            />
                          </div>
                          <div className="flex justify-end">
                            <Button variant="ghost" size="sm" className="h-7">
                              {language === "fr" ? "Modifier l'Icône" : "Edit Icon"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    {language === "fr" ? "Ajouter une Fonctionnalité" : "Add Feature"}
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <Label htmlFor="cta-text">
                    {language === "fr" ? "Texte d'Appel à l'Action" : "Call to Action Text"}
                  </Label>
                  <Input id="cta-text" defaultValue="Start Trading and Earning Today" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cta-button">
                    {language === "fr" ? "Bouton d'Appel à l'Action" : "Call to Action Button"}
                  </Label>
                  <Input id="cta-button" defaultValue="Get Started Now" />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    {language === "fr" ? "Aperçu des Modifications" : "Preview Changes"}
                  </Button>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    {language === "fr" ? "Enregistrer" : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="news" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{language === "fr" ? "Actualités" : "News & Updates"}</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md my-2">
                    <Plus className="h-4 w-4" />
                    {language === "fr" ? "Ajouter une Actualité" : "Add News Item"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{language === "fr" ? "Créer une Actualité" : "Create News Item"}</DialogTitle>
                    <DialogDescription>
                      {language === "fr"
                        ? "Ajoutez une nouvelle actualité ou une mise à jour concernant le bot de trading."
                        : "Add a new news item or update about the trading bot."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="news-title">{language === "fr" ? "Titre" : "Title"}</Label>
                      <Input id="news-title" placeholder={language === "fr" ? "Entrez le titre" : "Enter news title"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="news-summary">{language === "fr" ? "Résumé" : "Summary"}</Label>
                      <Textarea
                        id="news-summary"
                        placeholder={language === "fr" ? "Entrez un bref résumé" : "Enter a brief summary"}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="news-content">{language === "fr" ? "Contenu Complet" : "Full Content"}</Label>
                      <Textarea
                        id="news-content"
                        placeholder={language === "fr" ? "Entrez le contenu complet" : "Enter the full content"}
                        className="min-h-[150px]"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="news-date">
                          {language === "fr" ? "Date de Publication" : "Publication Date"}
                        </Label>
                        <Input id="news-date" type="date" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="news-status">{language === "fr" ? "Statut" : "Status"}</Label>
                        <select
                          id="news-status"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="draft">{language === "fr" ? "Brouillon" : "Draft"}</option>
                          <option value="published">{language === "fr" ? "Publié" : "Published"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">{language === "fr" ? "Annuler" : "Cancel"}</Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                      {language === "fr" ? "Enregistrer" : "Save News Item"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>{language === "fr" ? "Titre" : "Title"}</TableHead>
                      <TableHead>{language === "fr" ? "Résumé" : "Summary"}</TableHead>
                      <TableHead>{language === "fr" ? "Date" : "Date"}</TableHead>
                      <TableHead>{language === "fr" ? "Statut" : "Status"}</TableHead>
                      <TableHead className="text-right">{language === "fr" ? "Actions" : "Actions"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {news.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.summary}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "Published" ? "success" : "outline"} className="capitalize">
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>{language === "fr" ? "Actions" : "Actions"}</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                {language === "fr" ? "Modifier" : "Edit"}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Globe className="h-4 w-4 mr-2" />
                                {language === "fr" ? "Voir" : "View"}
                              </DropdownMenuItem>
                              {item.status === "Draft" ? (
                                <DropdownMenuItem>{language === "fr" ? "Publier" : "Publish"}</DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem>{language === "fr" ? "Dépublier" : "Unpublish"}</DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="h-4 w-4 mr-2" />
                                {language === "fr" ? "Supprimer" : "Delete"}
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
        </TabsContent>

        <TabsContent value="media" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{language === "fr" ? "Bibliothèque Média" : "Media Library"}</h2>
              <Button className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                <Upload className="h-4 w-4" />
                {language === "fr" ? "Téléverser" : "Upload Media"}
              </Button>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Fichiers Média" : "Media Files"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Gérez les images et autres fichiers multimédias utilisés sur votre site web"
                    : "Manage images and other media files used on your website"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                        selectedImage === `image-${i}` ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedImage(`image-${i}`)}
                    >
                      <div className="aspect-square bg-muted flex items-center justify-center">
                        <ImageIcon className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="p-2 text-sm truncate">image-{i + 1}.jpg</div>
                    </div>
                  ))}
                </div>

                {selectedImage && (
                  <div className="mt-4 p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">{language === "fr" ? "Média Sélectionné" : "Selected Media"}</h3>
                      <Button variant="destructive" size="sm">
                        {language === "fr" ? "Supprimer" : "Delete"}
                      </Button>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>{language === "fr" ? "Nom du Fichier" : "File Name"}</Label>
                        <Input value={`${selectedImage}.jpg`} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === "fr" ? "URL du Fichier" : "File URL"}</Label>
                        <div className="flex gap-2">
                          <Input value={`https://example.com/media/${selectedImage}.jpg`} readOnly />
                          <Button variant="outline" size="sm">
                            {language === "fr" ? "Copier" : "Copy"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
