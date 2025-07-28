"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { UserPlus, ArrowLeft, Mail, Globe, Building, Percent, Hash, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

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
  website: z.string().url().optional().or(z.literal("")),
  company: z.string().optional(),
  commissionTier: z.string().default("standard"),
  referralCode: z.string().min(4, {
    message: "Referral code must be at least 4 characters.",
  }),
  notes: z.string().optional(),
  agreeTos: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  sendWelcomeEmail: z.boolean().default(true),
})

export default function NewAffiliatePage() {
  const { language } = useLanguage()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      company: "",
      commissionTier: "standard",
      referralCode: "",
      notes: "",
      agreeTos: false,
      sendWelcomeEmail: true,
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
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/affiliates">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {language === "fr" ? "Nouvel Affilié" : "New Affiliate"}
            </h1>
            <UserPlus className="h-7 w-7 text-indigo-500" />
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Enregistrez un nouveau partenaire affilié pour votre programme"
              : "Register a new affiliate partner for your program"}
          </p>
        </div>
        <Link href="/dashboard/affiliates">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {language === "fr" ? "Retour" : "Back"}
          </Button>
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-indigo-100">
                <UserPlus className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <CardTitle>{language === "fr" ? "Informations de l'Affilié" : "Affiliate Information"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Entrez les détails du nouveau partenaire affilié"
                    : "Enter details for the new affiliate partner"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Prénom" : "First Name"}</FormLabel>
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
                          <FormLabel>{language === "fr" ? "Nom" : "Last Name"}</FormLabel>
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
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {language === "fr" ? "Notes (Optionnel)" : "Notes (Optional)"}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={
                              language === "fr" ? "Entrez des notes supplémentaires" : "Enter any additional notes"
                            }
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
                    name="agreeTos"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>{language === "fr" ? "Conditions Générales" : "Terms and Conditions"}</FormLabel>
                          <FormDescription>
                            {language === "fr"
                              ? "L'affilié accepte les conditions générales du programme de parrainage"
                              : "The affiliate agrees to the terms of the referral program"}
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sendWelcomeEmail"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {language === "fr" ? "Envoyer un Email de Bienvenue" : "Send Welcome Email"}
                          </FormLabel>
                          <FormDescription>
                            {language === "fr"
                              ? "Envoyer un email automatique avec les instructions de connexion"
                              : "Send an automated welcome email with login instructions"}
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2 pt-2">
                    <Link href="/dashboard/affiliates">
                      <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        {language === "fr" ? "Annuler" : "Cancel"}
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    >
                      <UserPlus className="h-4 w-4" />
                      {language === "fr" ? "Créer l'Affilié" : "Create Affiliate"}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
