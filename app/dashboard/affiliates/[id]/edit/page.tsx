"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Phone,
  Globe,
  Building,
  Percent,
  Hash,
  FileText,
  Banknote,
  CreditCard,
  Flag,
  Bell,
  Check,
  X,
  Clock,
} from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  company: z.string().optional(),
  commissionTier: z.string(),
  referralCode: z.string().min(4, {
    message: "Referral code must be at least 4 characters.",
  }),
  bio: z.string().optional(),
  status: z.string(),
  paymentMethod: z.string(),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
  accountName: z.string().optional(),
  taxId: z.string().optional(),
  taxForm: z.string().optional(),
  country: z.string().optional(),
  sendNotifications: z.boolean().default(true),
})

export default function EditAffiliatePage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("profile")

  // Mock data for the affiliate
  const affiliate = {
    id: params.id,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://sarahjohnson.com",
    company: "Johnson Marketing",
    status: "active",
    commissionTier: "premium",
    referralCode: "sarah-j",
    bio: "Digital marketing expert with 8+ years of experience in the crypto and fintech space. Specializing in content marketing and community building.",
    paymentMethod: "bank",
    bankName: "Chase Bank",
    accountNumber: "****4567",
    accountName: "Sarah Johnson",
    taxId: "XX-XXXXXXX",
    taxForm: "W-9",
    country: "United States",
    sendNotifications: true,
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: affiliate.firstName,
      lastName: affiliate.lastName,
      email: affiliate.email,
      phone: affiliate.phone,
      website: affiliate.website,
      company: affiliate.company,
      commissionTier: affiliate.commissionTier,
      referralCode: affiliate.referralCode,
      bio: affiliate.bio,
      status: affiliate.status,
      paymentMethod: affiliate.paymentMethod,
      bankName: affiliate.bankName,
      accountNumber: affiliate.accountNumber,
      accountName: affiliate.accountName,
      taxId: affiliate.taxId,
      taxForm: affiliate.taxForm,
      country: affiliate.country,
      sendNotifications: affiliate.sendNotifications,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // This would typically send the data to your API
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/affiliates/${params.id}`}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {language === "fr" ? "Modifier l'Affilié" : "Edit Affiliate"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {language === "fr" ? "Mettez à jour les informations de l'affilié" : "Update affiliate information"}
            </p>
          </div>
        </div>
        <Button
          type="submit"
          form="affiliate-form"
          className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
        >
          <Save className="h-4 w-4" />
          {language === "fr" ? "Enregistrer" : "Save Changes"}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border"
      >
        <Avatar className="h-16 w-16">
          <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
          <AvatarFallback>{`${affiliate.firstName.charAt(0)}${affiliate.lastName.charAt(0)}`}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{`${affiliate.firstName} ${affiliate.lastName}`}</h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{affiliate.email}</p>
            <Badge
              variant={
                affiliate.status === "active" ? "success" : affiliate.status === "inactive" ? "destructive" : "outline"
              }
              className="flex items-center gap-1"
            >
              {affiliate.status === "active" && <Check className="h-3 w-3" />}
              {affiliate.status === "inactive" && <X className="h-3 w-3" />}
              {affiliate.status === "pending" && <Clock className="h-3 w-3" />}
              {affiliate.status.charAt(0).toUpperCase() + affiliate.status.slice(1)}
            </Badge>
          </div>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="profile" className="relative flex items-center gap-2">
              {activeTab === "profile" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <User className="h-4 w-4" />
                {language === "fr" ? "Profil" : "Profile"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="commission" className="relative flex items-center gap-2">
              {activeTab === "commission" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Percent className="h-4 w-4" />
                {language === "fr" ? "Commission" : "Commission"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="tax" className="relative flex items-center gap-2">
              {activeTab === "tax" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {language === "fr" ? "Fiscalité" : "Tax"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="relative flex items-center gap-2">
              {activeTab === "preferences" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Bell className="h-4 w-4" />
                {language === "fr" ? "Préférences" : "Preferences"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <Form {...form}>
          <form id="affiliate-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <TabsContent value="profile" className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-indigo-100">
                        <User className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle>{language === "fr" ? "Informations du Profil" : "Profile Information"}</CardTitle>
                        <CardDescription>
                          {language === "fr"
                            ? "Mettez à jour les informations personnelles et de contact"
                            : "Update personal and contact information"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              {language === "fr" ? "Prénom" : "First Name"}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={language === "fr" ? "Entrez le prénom" : "Enter first name"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              {language === "fr" ? "Nom" : "Last Name"}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={language === "fr" ? "Entrez le nom" : "Enter last name"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Email" : "Email"}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={language === "fr" ? "Entrez l'email" : "Enter email address"}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "L'affilié utilisera cet email pour se connecter et recevoir des notifications"
                              : "The affiliate will use this email to log in and receive notifications"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Téléphone (Optionnel)" : "Phone (Optional)"}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={language === "fr" ? "Entrez le numéro" : "Enter phone number"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              {language === "fr" ? "Site Web (Optionnel)" : "Website (Optional)"}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              {language === "fr" ? "Entreprise (Optionnel)" : "Company (Optional)"}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={language === "fr" ? "Entrez le nom de l'entreprise" : "Enter company name"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Bio (Optionnel)" : "Bio (Optional)"}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={language === "fr" ? "Entrez une courte bio" : "Enter a brief bio"}
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Flag className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Statut du Compte" : "Account Status"}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un statut" : "Select account status"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="active">
                                <div className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-success" />
                                  <span>{language === "fr" ? "Actif" : "Active"}</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="inactive">
                                <div className="flex items-center gap-2">
                                  <X className="h-4 w-4 text-destructive" />
                                  <span>{language === "fr" ? "Inactif" : "Inactive"}</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="pending">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-amber-500" />
                                  <span>{language === "fr" ? "En Attente" : "Pending"}</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Les affiliés inactifs ne peuvent pas se connecter ou gagner des commissions"
                              : "Inactive affiliates cannot log in or earn commissions"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="commission" className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <Percent className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle>{language === "fr" ? "Commission & Paiements" : "Commission & Payments"}</CardTitle>
                        <CardDescription>
                          {language === "fr"
                            ? "Configurez les taux de commission et les détails de paiement"
                            : "Configure commission rates and payment details"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="commissionTier"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Percent className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Niveau de Commission" : "Commission Tier"}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un niveau" : "Select commission tier"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Standard (5%)</SelectItem>
                              <SelectItem value="premium">Premium (10%)</SelectItem>
                              <SelectItem value="vip">VIP (15%)</SelectItem>
                              <SelectItem value="custom">{language === "fr" ? "Personnalisé" : "Custom"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Le pourcentage de commission que l'affilié gagnera sur les références"
                              : "The commission percentage the affiliate will earn on referrals"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="referralCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Hash className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Code de Parrainage" : "Referral Code"}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={language === "fr" ? "Entrez un code unique" : "Enter unique referral code"}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "Un code unique pour suivre les références de cet affilié"
                              : "A unique code for tracking this affiliate's referrals"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Banknote className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Méthode de Paiement" : "Payment Method"}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez une méthode" : "Select payment method"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="bank" className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4" />
                                {language === "fr" ? "Virement Bancaire" : "Bank Transfer"}
                              </SelectItem>
                              <SelectItem value="paypal" className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4" />
                                PayPal
                              </SelectItem>
                              <SelectItem value="crypto" className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4" />
                                {language === "fr" ? "Cryptomonnaie" : "Cryptocurrency"}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.watch("paymentMethod") === "bank" && (
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="bankName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <Building className="h-4 w-4 text-muted-foreground" />
                                {language === "fr" ? "Nom de la Banque" : "Bank Name"}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={language === "fr" ? "Entrez le nom de la banque" : "Enter bank name"}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="accountNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Hash className="h-4 w-4 text-muted-foreground" />
                                  {language === "fr" ? "Numéro de Compte" : "Account Number"}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={language === "fr" ? "Entrez le numéro" : "Enter account number"}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="accountName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  {language === "fr" ? "Titulaire du Compte" : "Account Holder"}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={language === "fr" ? "Entrez le nom" : "Enter account holder name"}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="tax" className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-amber-100">
                        <FileText className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle>{language === "fr" ? "Informations Fiscales" : "Tax Information"}</CardTitle>
                        <CardDescription>
                          {language === "fr"
                            ? "Mettez à jour les détails fiscaux pour les rapports et la conformité"
                            : "Update tax details for reporting and compliance"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Flag className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Pays" : "Country"}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un pays" : "Select country"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="United States">
                                {language === "fr" ? "États-Unis" : "United States"}
                              </SelectItem>
                              <SelectItem value="Canada">Canada</SelectItem>
                              <SelectItem value="United Kingdom">
                                {language === "fr" ? "Royaume-Uni" : "United Kingdom"}
                              </SelectItem>
                              <SelectItem value="Australia">{language === "fr" ? "Australie" : "Australia"}</SelectItem>
                              <SelectItem value="Other">{language === "fr" ? "Autre" : "Other"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="taxForm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Formulaire Fiscal" : "Tax Form"}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un formulaire" : "Select tax form"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="W-9">
                                W-9 ({language === "fr" ? "Personnes US" : "US Persons"})
                              </SelectItem>
                              <SelectItem value="W-8BEN">
                                W-8BEN ({language === "fr" ? "Étrangers" : "Foreign Individuals"})
                              </SelectItem>
                              <SelectItem value="W-8BEN-E">
                                W-8BEN-E ({language === "fr" ? "Entités Étrangères" : "Foreign Entities"})
                              </SelectItem>
                              <SelectItem value="None">{language === "fr" ? "Non Requis" : "None Required"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Le formulaire fiscal soumis par cet affilié à des fins de déclaration"
                              : "The tax form submitted by this affiliate for tax reporting"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="taxId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Hash className="h-4 w-4 text-muted-foreground" />
                            {language === "fr" ? "Identifiant Fiscal / SSN" : "Tax ID / SSN"}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={language === "fr" ? "Entrez l'identifiant" : "Enter tax ID or SSN"}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "Pour des raisons de sécurité, ces informations sont partiellement masquées"
                              : "For security, this information is partially masked"}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <Bell className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>
                          {language === "fr" ? "Préférences de Notification" : "Notification Preferences"}
                        </CardTitle>
                        <CardDescription>
                          {language === "fr"
                            ? "Configurez comment et quand l'affilié reçoit des notifications"
                            : "Configure how and when the affiliate receives notifications"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="sendNotifications"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {language === "fr" ? "Notifications par Email" : "Email Notifications"}
                            </FormLabel>
                            <FormDescription>
                              {language === "fr"
                                ? "Envoyer des notifications sur les nouveaux parrainages, commissions et paiements"
                                : "Send notifications about new referrals, commissions, and payouts"}
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </form>
        </Form>
      </Tabs>
    </div>
  )
}
