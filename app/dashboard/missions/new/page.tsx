"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  FileImage,
  Gift,
  Settings,
  Target,
  Trophy,
  Plus,
} from "lucide-react"

const detailsFormSchema = z.object({
  name: z.string().min(2, {
    message: "Mission name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  difficulty: z.string(),
  category: z.string(),
  image: z.any().optional(),
})

const objectivesFormSchema = z.object({
  objective1Name: z.string().min(2, {
    message: "Objective name must be at least 2 characters.",
  }),
  objective1Description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  objective1Type: z.string(),
  objective1Target: z.string(),
})

const rewardsFormSchema = z.object({
  xpPoints: z.string(),
  bonusAmount: z.string(),
  unlockFeature: z.boolean().default(false),
  featureToUnlock: z.string().optional(),
  badge: z.boolean().default(false),
})

const settingsFormSchema = z.object({
  status: z.string().default("draft"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  prerequisite: z.boolean().default(false),
  notifyUsers: z.boolean().default(true),
})

export default function NewMissionPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("details")
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
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

  const detailsForm = useForm<z.infer<typeof detailsFormSchema>>({
    resolver: zodResolver(detailsFormSchema),
    defaultValues: {
      name: "",
      description: "",
      difficulty: "easy",
      category: "trading",
    },
  })

  const objectivesForm = useForm<z.infer<typeof objectivesFormSchema>>({
    resolver: zodResolver(objectivesFormSchema),
    defaultValues: {
      objective1Name: "",
      objective1Description: "",
      objective1Type: "trade",
      objective1Target: "",
    },
  })

  const rewardsForm = useForm<z.infer<typeof rewardsFormSchema>>({
    resolver: zodResolver(rewardsFormSchema),
    defaultValues: {
      xpPoints: "",
      bonusAmount: "",
      unlockFeature: false,
      featureToUnlock: "",
      badge: false,
    },
  })

  const settingsForm = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      status: "draft",
      startDate: "",
      endDate: "",
      prerequisite: false,
      notifyUsers: true,
    },
  })

  function onDetailsSubmit(values: z.infer<typeof detailsFormSchema>) {
    console.log(values)
    setActiveTab("objectives")
  }

  function onObjectivesSubmit(values: z.infer<typeof objectivesFormSchema>) {
    console.log(values)
    setActiveTab("rewards")
  }

  function onRewardsSubmit(values: z.infer<typeof rewardsFormSchema>) {
    console.log(values)
    setActiveTab("settings")
  }

  function onSettingsSubmit(values: z.infer<typeof settingsFormSchema>) {
    console.log(values)
    // Final submission would combine all form data and submit to API
  }

  const getFormTitle = (tab: string) => {
    switch(tab) {
      case "details":
        return language === "fr" ? "Détails de la Mission" : "Mission Details"
      case "objectives":
        return language === "fr" ? "Objectifs" : "Objectives"
      case "rewards":
        return language === "fr" ? "Récompenses" : "Rewards"
      case "settings":
        return language === "fr" ? "Paramètres" : "Settings"
      default:
        return ""
    }
  }

  const getFormDescription = (tab: string) => {
    switch(tab) {
      case "details":
        return language === "fr" 
          ? "Entrez les détails de base pour la nouvelle mission" 
          : "Enter the basic details for the new mission"
      case "objectives":
        return language === "fr" 
          ? "Définissez ce que les utilisateurs doivent faire pour compléter la mission" 
          : "Define what users need to do to complete the mission"
      case "rewards":
        return language === "fr" 
          ? "Définissez ce que les utilisateurs recevront après avoir complété la mission" 
          : "Define what users will receive upon mission completion"
      case "settings":
        return language === "fr" 
          ? "Configurez les paramètres supplémentaires de la mission" 
          : "Configure additional mission settings"
      default:
        return ""
    }
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
          <Link href="/dashboard/missions">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {language === "fr" ? "Créer une Mission" : "Create Mission"}
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
              ? "Concevez une nouvelle mission avec des objectifs et des récompenses." 
              : "Design a new mission with objectives and rewards."}
          </p>
        </div>
        <Link href="/dashboard/missions">
          <Button variant="outline">
            {language === "fr" ? "Annuler" : "Cancel"}
          </Button>
        </Link>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="details" className="relative">
              {activeTab === "details" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {language === "fr" ? "Détails" : "Details"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="objectives" className="relative">
              {activeTab === "objectives" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Target className="h-4 w-4" />
                {language === "fr" ? "Objectifs" : "Objectives"}
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
                {language === "fr" ? "Récompenses" : "Rewards"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="relative">
              {activeTab === "settings" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {language === "fr" ? "Paramètres" : "Settings"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="details" className="space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{getFormTitle("details")}</CardTitle>
                <CardDescription>{getFormDescription("details")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...detailsForm}>
                  <form onSubmit={detailsForm.handleSubmit(onDetailsSubmit)} className="grid gap-6">
                    <motion.div variants={container} initial="hidden" animate={animateCards ? "show" : "hidden"}>
                      <motion.div variants={item}>
                        <FormField
                          control={detailsForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Nom de la Mission" : "Mission Name"}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={language === "fr" ? "Entrez le nom de la mission" : "Enter mission name"} 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Un nom court et descriptif pour la mission" 
                                  : "A short, descriptive name for the mission"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={detailsForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Description" : "Description"}</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={language === "fr" ? "Entrez la description de la mission" : "Enter mission description"} 
                                  className="min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Expliquez en quoi consiste la mission et comment la compléter" 
                                  : "Explain what the mission involves and how to complete it"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={detailsForm.control}
                          name="difficulty"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Niveau de Difficulté" : "Difficulty Level"}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={language === "fr" ? "Sélectionnez la difficulté" : "Select difficulty"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="easy">{language === "fr" ? "Facile" : "Easy"}</SelectItem>
                                  <SelectItem value="medium">{language === "fr" ? "Moyen" : "Medium"}</SelectItem>
                                  <SelectItem value="hard">{language === "fr" ? "Difficile" : "Hard"}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {language === "fr" 
                                  ? "À quel point la mission est difficile à compléter" 
                                  : "How challenging the mission is to complete"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={detailsForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Catégorie" : "Category"}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={language === "fr" ? "Sélectionnez une catégorie" : "Select category"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="trading">{language === "fr" ? "Trading" : "Trading"}</SelectItem>
                                  <SelectItem value="learning">{language === "fr" ? "Apprentissage" : "Learning"}</SelectItem>
                                  <SelectItem value="social">{language === "fr" ? "Social" : "Social"}</SelectItem>
                                  <SelectItem value="achievement">{language === "fr" ? "Réussite" : "Achievement"}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Le type d'activité impliqué dans cette mission" 
                                  : "The type of activity this mission involves"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={detailsForm.control}
                          name="image"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Image de la Mission" : "Mission Image"}</FormLabel>
                              <FormControl>
                                <div className="flex items-center gap-4">
                                  <Input 
                                    type="file" 
                                    className="cursor-pointer"
                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                  />
                                  <FileImage className="h-5 w-5 text-muted-foreground" />
                                </div>
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Une image pour représenter la mission (optionnel)" 
                                  : "An image to represent the mission (optional)"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="flex justify-end">
                        <Button 
                          type="submit" 
                          className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                        >
                          <span>{language === "fr" ? "Continuer vers Objectifs" : "Continue to Objectives"}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="objectives" className="space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{getFormTitle("objectives")}</CardTitle>
                <CardDescription>{getFormDescription("objectives")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...objectivesForm}>
                  <form onSubmit={objectivesForm.handleSubmit(onObjectivesSubmit)} className="space-y-4">
                    <motion.div variants={container} initial="hidden" animate={animateCards ? "show" : "hidden"}>
                      <motion.div variants={item}>
                        <div className="border rounded-md p-4">
                          <h3 className="text-sm font-medium mb-2">
                            {language === "fr" ? "Objectif 1" : "Objective 1"}
                          </h3>
                          <div className="grid gap-4">
                            <FormField
                              control={objectivesForm.control}
                              name="objective1Name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{language === "fr" ? "Nom" : "Name"}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder={language === "fr" ? "Entrez le nom de l'objectif" : "Enter objective name"} 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={objectivesForm.control}
                              name="objective1Description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{language === "fr" ? "Description" : "Description"}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder={language === "fr" ? "Entrez la description de l'objectif" : "Enter objective description"} 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="grid gap-4 md:grid-cols-2">
                              <FormField
                                control={objectivesForm.control}
                                name="objective1Type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{language === "fr" ? "Type" : "Type"}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder={language === "fr" ? "Sélectionnez le type" : "Select type"} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="trade">{language === "fr" ? "Compléter un Trade" : "Complete Trade"}</SelectItem>
                                        <SelectItem value="volume">{language === "fr" ? "Volume de Trading" : "Trading Volume"}</SelectItem>
                                        <SelectItem value="profit">{language === "fr" ? "Atteindre un Profit" : "Achieve Profit"}</SelectItem>
                                        <SelectItem value="streak">{language === "fr" ? "Série de Trading" : "Trading Streak"}</SelectItem>
                                        <SelectItem value="social">{language === "fr" ? "Action Sociale" : "Social Action"}</SelectItem>
                                        <SelectItem value="custom">{language === "fr" ? "Personnalisé" : "Custom"}</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={objectivesForm.control}
                                name="objective1Target"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{language === "fr" ? "Valeur Cible" : "Target Value"}</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder={language === "fr" ? "Entrez la valeur cible" : "Enter target value"} 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div variants={item}>
                        <Button 
                          variant="outline" 
                          className="w-full gap-2 my-2"
                          type="button"
                        >
                          <Plus className="h-4 w-4" />
                          <span>{language === "fr" ? "Ajouter un Autre Objectif" : "Add Another Objective"}</span>
                        </Button>
                      </motion.div>
                      <motion.div variants={item} className="flex gap-2 justify-between">
                      
                        <Button 
                          variant="outline" 
                          type="button" 
                          onClick={() => setActiveTab("details")}
                          className="gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>{language === "fr" ? "Retour" : "Back"}</span>
                        </Button>
                          <Button 
                          type="submit" 
                          className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                        >
                          <span>{language === "fr" ? "Continuer vers Récompenses" : "Continue to Rewards"}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{getFormTitle("rewards")}</CardTitle>
                <CardDescription>{getFormDescription("rewards")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...rewardsForm}>
                  <form onSubmit={rewardsForm.handleSubmit(onRewardsSubmit)} className="space-y-4">
                    <motion.div variants={container} initial="hidden" animate={animateCards ? "show" : "hidden"}>
                      <motion.div variants={item}>
                        <FormField
                          control={rewardsForm.control}
                          name="xpPoints"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Points d'Expérience" : "XP Points"}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={language === "fr" ? "Entrez les points XP" : "Enter XP points"} 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Points d'expérience attribués pour la complétion de la mission" 
                                  : "Experience points awarded for mission completion"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={rewardsForm.control}
                          name="bonusAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Montant du Bonus" : "Bonus Amount"}</FormLabel>
                              <div className="flex items-center gap-2">
                                <span>$</span>
                                <FormControl>
                                  <Input 
                                    placeholder={language === "fr" ? "Entrez le montant du bonus" : "Enter bonus amount"} 
                                    {...field} 
                                  />
                                </FormControl>
                              </div>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Bonus en espèces attribué pour la complétion de la mission" 
                                  : "Cash bonus awarded for mission completion"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={rewardsForm.control}
                          name="unlockFeature"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>{language === "fr" ? "Débloquer une Fonctionnalité" : "Unlock Feature"}</FormLabel>
                                <FormDescription>
                                  {language === "fr" 
                                    ? "Accorder l'accès à une fonctionnalité premium après complétion" 
                                    : "Grant access to a premium feature upon completion"}
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={rewardsForm.control}
                          name="featureToUnlock"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Fonctionnalité à Débloquer" : "Feature to Unlock"}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={language === "fr" ? "Sélectionnez une fonctionnalité" : "Select feature"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="premiumBot">{language === "fr" ? "Accès à un Bot Premium" : "Premium Bot Access"}</SelectItem>
                                  <SelectItem value="advancedAnalytics">{language === "fr" ? "Analyses Avancées" : "Advanced Analytics"}</SelectItem>
                                  <SelectItem value="vipSupport">{language === "fr" ? "Support VIP" : "VIP Support"}</SelectItem>
                                  <SelectItem value="customStrategies">{language === "fr" ? "Stratégies Personnalisées" : "Custom Strategies"}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {language === "fr" 
                                  ? "La fonctionnalité premium qui sera débloquée" 
                                  : "The premium feature that will be unlocked"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={rewardsForm.control}
                          name="badge"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>{language === "fr" ? "Attribuer un Badge" : "Award Badge"}</FormLabel>
                                <FormDescription>
                                  {language === "fr" 
                                    ? "Accorder un badge de profil après complétion" 
                                    : "Grant a profile badge upon completion"}
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="flex gap-2 my-2 justify-between">
                        
                        <Button 
                          variant="outline" 
                          type="button" 
                          onClick={() => setActiveTab("objectives")}
                          className="gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>{language === "fr" ? "Retour" : "Back"}</span>
                        </Button>
                        <Button 
                          type="submit" 
                          className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                        >
                          <span>{language === "fr" ? "Continuer vers Paramètres" : "Continue to Settings"}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{getFormTitle("settings")}</CardTitle>
                <CardDescription>{getFormDescription("settings")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...settingsForm}>
                  <form onSubmit={settingsForm.handleSubmit(onSettingsSubmit)} className="space-y-4">
                    <motion.div variants={container} initial="hidden" animate={animateCards ? "show" : "hidden"}>
                      <motion.div variants={item}>
                        <FormField
                          control={settingsForm.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Statut" : "Status"}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={language === "fr" ? "Sélectionnez le statut" : "Select status"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="draft">{language === "fr" ? "Brouillon" : "Draft"}</SelectItem>
                                  <SelectItem value="active">{language === "fr" ? "Actif" : "Active"}</SelectItem>
                                  <SelectItem value="inactive">{language === "fr" ? "Inactif" : "Inactive"}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Le statut actuel de la mission" 
                                  : "The current status of the mission"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={settingsForm.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Date de Début" : "Start Date"}</FormLabel>
                              <FormControl>
                                <div className="flex items-center gap-2">
                                  <Input type="date" {...field} />
                                  <Calendar className="h-5 w-5 text-muted-foreground" />
                                </div>
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Quand la mission devient disponible" 
                                  : "When the mission becomes available"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={settingsForm.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Date de Fin" : "End Date"}</FormLabel>
                              <FormControl>
                                <div className="flex items-center gap-2">
                                  <Input type="date" {...field} />
                                  <Calendar className="h-5 w-5 text-muted-foreground" />
                                </div>
                              </FormControl>
                              <FormDescription>
                                {language === "fr" 
                                  ? "Quand la mission expire (laisser vide pour aucune expiration)" 
                                  : "When the mission expires (leave blank for no expiration)"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item}>
                        <FormField
                          control={settingsForm.control}
                          name="prerequisite"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>{language === "fr" ? "Prérequis Nécessaires" : "Require Prerequisites"}</FormLabel>
                                <FormDescription>
                                  {language === "fr" 
                                    ? "Exiger la complétion d'autres missions d'abord" 
                                    : "Require completion of other missions first"}
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="my-2">
                        <FormField
                          control={settingsForm.control}
                          name="notifyUsers"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none ">
                                <FormLabel>{language === "fr" ? "Notifier les Utilisateurs" : "Notify Users"}</FormLabel>
                                <FormDescription>
                                  {language === "fr" 
                                    ? "Envoyer une notification lorsque la mission devient disponible" 
                                    : "Send notification when mission becomes available"}
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      <motion.div variants={item} className="flex gap-2 my-2">
                        <Button 
                          variant="outline" 
                          type="button" 
                          onClick={() => setActiveTab("rewards")}>
                                                    <ArrowLeft className="h-4 w-4" />

                      {language === "fr" ? "Retour" : "Back"}
                    </Button>
                    
                    <Link href="/dashboard/missions">
                      <Button variant="ghost">{language === "fr" ? "Annuler" : "Cancel"}</Button>
                    </Link>
                        
                        <Button 
                          variant="outline" 
                          type="button"
                        >
                          {language === "fr" ? "Enregistrer comme Brouillon" : "Save as Draft"}
                        </Button>
                      <Button 
                          type="submit" 
                          className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                        >
                          <Check className="h-4 w-4" />
                          <span>{language === "fr" ? "Créer la Mission" : "Create Mission"}</span>
                        </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
