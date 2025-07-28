"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Edit, BellDot, SunMoon, FileKey2, GlobeLock, Settings } from "lucide-react"
const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  urls: z.object({
    twitter: z.string().url().optional().or(z.literal("")),
    github: z.string().url().optional().or(z.literal("")),
    website: z.string().url().optional().or(z.literal("")),
  }),
})

const notificationsFormSchema = z.object({
  tradeAlerts: z.boolean().default(true),
  botUpdates: z.boolean().default(true),
  marketNews: z.boolean().default(false),
  securityAlerts: z.boolean().default(true),
  emailNotifications: z.boolean().default(true),
  pushNotifications: z.boolean().default(false),
})

const appearanceFormSchema = z.object({
  theme: z.string().default("dark"),
  fontSize: z.string().default("medium"),
  colorScheme: z.string().default("default"),
  language: z.string().default("en"),
})

export default function SettingsPage() {
  const { language } = useLanguage()
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "tradinguser",
      email: "user@example.com",
      bio: "Passionate trader focused on algorithmic strategies.",
      urls: {
        twitter: "",
        github: "",
        website: "",
      },
    },
  })

  const notificationsForm = useForm<z.infer<typeof notificationsFormSchema>>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      tradeAlerts: true,
      botUpdates: true,
      marketNews: false,
      securityAlerts: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  })

  const appearanceForm = useForm<z.infer<typeof appearanceFormSchema>>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: "dark",
      fontSize: "medium",
      colorScheme: "default",
      language: "en",
    },
  })

  function onProfileSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values)
  }

  function onNotificationsSubmit(values: z.infer<typeof notificationsFormSchema>) {
    console.log(values)
  }

  function onAppearanceSubmit(values: z.infer<typeof appearanceFormSchema>) {
    console.log(values)
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {language === "fr" ? "Paramètres" : "Settings"}
          </h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Settings className="h-7 w-7 text-indigo-500" />
          </motion.div>
        </div>
        <p className="text-muted-foreground">
          {language === "fr"
            ? "Gérez les paramètres et préférences de votre compte."
            : "Manage your account settings and preferences."}
        </p>
      </motion.div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="profile" className="relative z-20 flex items-center gap-2">
              <Edit className="h-4 w-4" />
              {language === "fr" ? "Profil" : "Profile"}
            </TabsTrigger>
            <TabsTrigger value="notifications" className="relative z-20 flex items-center gap-2">
              <BellDot className="h-4 w-4" />
              {language === "fr" ? "Notifications" : "Notifications"}
            </TabsTrigger>
            <TabsTrigger value="appearance" className="relative z-20 flex items-center gap-2">
              <SunMoon className="h-4 w-4" />
              {language === "fr" ? "Apparence" : "Appearance"}
            </TabsTrigger>
            <TabsTrigger value="security" className="relative z-20 flex items-center gap-2">
              <GlobeLock className="h-4 w-4" />
              {language === "fr" ? "Sécurité" : "Security"}
            </TabsTrigger>
            <TabsTrigger value="api" className="relative z-20 flex items-center gap-2">
              <FileKey2 className="h-4 w-4" />
              {language === "fr" ? "Clés API" : "API Keys"}
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Profil" : "Profile"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Gérez les informations de votre profil public."
                    : "Manage your public profile information."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                    <FormField
                      control={profileForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Nom d'utilisateur" : "Username"}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "Votre nom d'utilisateur unique sur la plateforme."
                              : "Your unique username on the platform."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "Votre adresse email pour les notifications et la récupération de compte."
                              : "Your email address for notifications and account recovery."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Biographie" : "Bio"}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={language === "fr" ? "Parlez-nous de vous" : "Tell us about yourself"}
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {language === "fr"
                              ? "Brève description pour votre profil. Max 160 caractères."
                              : "Brief description for your profile. Max 160 characters."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <h3 className="mb-4 text-sm font-medium">
                        {language === "fr" ? "Liens sociaux" : "Social Links"}
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={profileForm.control}
                          name="urls.twitter"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Twitter</FormLabel>
                              <FormControl>
                                <Input placeholder="https://twitter.com/username" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="urls.github"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>GitHub</FormLabel>
                              <FormControl>
                                <Input placeholder="https://github.com/username" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="urls.website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{language === "fr" ? "Site web" : "Website"}</FormLabel>
                              <FormControl>
                                <Input placeholder="https://example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                    >
                      {language === "fr" ? "Mettre à jour le profil" : "Update Profile"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Notifications" : "Notifications"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Configurez la manière dont vous recevez les notifications."
                    : "Configure how you receive notifications."}
                </CardDescription>
              </CardHeader>
              <CardContent classNam="overflow-y-auto">
                <Form {...notificationsForm}>
                  <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-sm font-medium">
                        {language === "fr" ? "Types de notifications" : "Notification Types"}
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={notificationsForm.control}
                          name="tradeAlerts"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Alertes de trading" : "Trade Alerts"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications sur vos trades."
                                    : "Receive notifications about your trades."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={notificationsForm.control}
                          name="botUpdates"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Mises à jour des bots" : "Bot Updates"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications sur vos bots de trading."
                                    : "Receive notifications about your trading bots."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={notificationsForm.control}
                          name="marketNews"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Actualités du marché" : "Market News"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications sur les mises à jour du marché."
                                    : "Receive notifications about market updates."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={notificationsForm.control}
                          name="securityAlerts"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Alertes de sécurité" : "Security Alerts"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications sur les événements de sécurité."
                                    : "Receive notifications about security events."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="mb-4 text-sm font-medium">
                        {language === "fr" ? "Canaux de notification" : "Notification Channels"}
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={notificationsForm.control}
                          name="emailNotifications"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Notifications par email" : "Email Notifications"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications par email."
                                    : "Receive notifications via email."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={notificationsForm.control}
                          name="pushNotifications"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {language === "fr" ? "Notifications push" : "Push Notifications"}
                                </FormLabel>
                                <FormDescription>
                                  {language === "fr"
                                    ? "Recevez des notifications sur votre appareil."
                                    : "Receive notifications on your device."}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                    >
                      {language === "fr" ? "Enregistrer les paramètres" : "Save Notification Settings"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Apparence" : "Appearance"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Personnalisez l'apparence de l'application."
                    : "Customize the look and feel of the application."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...appearanceForm}>
                  <form onSubmit={appearanceForm.handleSubmit(onAppearanceSubmit)} className="space-y-6">
                    <FormField
                      control={appearanceForm.control}
                      name="theme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Thème" : "Theme"}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un thème" : "Select theme"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="light">{language === "fr" ? "Clair" : "Light"}</SelectItem>
                              <SelectItem value="dark">{language === "fr" ? "Sombre" : "Dark"}</SelectItem>
                              <SelectItem value="system">{language === "fr" ? "Système" : "System"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Sélectionnez le thème de l'application."
                              : "Select the theme for the application."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={appearanceForm.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Langue" : "Language"}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez une langue" : "Select language"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Sélectionnez votre langue préférée."
                              : "Select your preferred language."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={appearanceForm.control}
                      name="fontSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Taille de police" : "Font Size"}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez une taille" : "Select font size"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">{language === "fr" ? "Petite" : "Small"}</SelectItem>
                              <SelectItem value="medium">{language === "fr" ? "Moyenne" : "Medium"}</SelectItem>
                              <SelectItem value="large">{language === "fr" ? "Grande" : "Large"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Sélectionnez la taille de police pour l'application."
                              : "Select the font size for the application."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={appearanceForm.control}
                      name="colorScheme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{language === "fr" ? "Schéma de couleurs" : "Color Scheme"}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={language === "fr" ? "Sélectionnez un schéma" : "Select color scheme"}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="default">{language === "fr" ? "Par défaut" : "Default"}</SelectItem>
                              <SelectItem value="purple">Purple</SelectItem>
                              <SelectItem value="blue">Blue</SelectItem>
                              <SelectItem value="green">Green</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {language === "fr"
                              ? "Sélectionnez le schéma de couleurs pour l'application."
                              : "Select the color scheme for the application."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                    >
                      {language === "fr" ? "Enregistrer les paramètres" : "Save Appearance Settings"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Sécurité" : "Security"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Gérez les paramètres de sécurité de votre compte."
                    : "Manage your account security settings."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">
                        {language === "fr" ? "Changer le mot de passe" : "Change Password"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Mettez à jour le mot de passe de votre compte."
                          : "Update your account password."}
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                      {language === "fr" ? "Changer" : "Change Password"}
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">
                        {language === "fr" ? "Authentification à deux facteurs" : "Two-Factor Authentication"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Ajoutez une couche de sécurité supplémentaire à votre compte."
                          : "Add an extra layer of security to your account."}
                      </p>
                    </div>
                    <Button variant="outline">{language === "fr" ? "Activer 2FA" : "Enable 2FA"}</Button>
                  </div>
                  <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">
                        {language === "fr" ? "Sessions actives" : "Active Sessions"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Gérez vos sessions de connexion actives."
                          : "Manage your active login sessions."}
                      </p>
                    </div>
                    <Button variant="outline">{language === "fr" ? "Voir les sessions" : "View Sessions"}</Button>
                  </div>
                  <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">
                        {language === "fr" ? "Journal d'activité" : "Account Activity Log"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Consultez l'activité de votre compte et les événements de sécurité."
                          : "View your account activity and security events."}
                      </p>
                    </div>
                    <Button variant="outline">{language === "fr" ? "Voir le journal" : "View Log"}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="api" className="space-y-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle>{language === "fr" ? "Clés API" : "API Keys"}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Gérez les clés API pour les intégrations externes."
                    : "Manage API keys for external integrations."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">
                      {language === "fr" ? "Générer une clé API" : "Generate API Key"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "fr"
                        ? "Créez une nouvelle clé API pour les applications externes."
                        : "Create a new API key for external applications."}
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
                    {language === "fr" ? "Générer" : "Generate Key"}
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">{language === "fr" ? "Vos clés API" : "Your API Keys"}</h3>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 items-center p-4 font-medium border-b">
                      <div className="col-span-2">{language === "fr" ? "Nom" : "Name"}</div>
                      <div className="col-span-1">{language === "fr" ? "Créé" : "Created"}</div>
                      <div className="col-span-1">{language === "fr" ? "Dernière utilisation" : "Last Used"}</div>
                      <div className="col-span-1 text-right">{language === "fr" ? "Actions" : "Actions"}</div>
                    </div>
                    <div className="grid grid-cols-5 items-center p-4 hover:bg-muted/50 transition-colors">
                      <div className="col-span-2">
                        <div className="font-medium">
                          {language === "fr" ? "API de trading bot" : "Trading Bot API"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === "fr" ? "Pour le trading automatisé" : "For automated trading"}
                        </div>
                      </div>
                      <div className="col-span-1">Apr 12, 2023</div>
                      <div className="col-span-1">2 hours ago</div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="sm">
                          {language === "fr" ? "Révoquer" : "Revoke"}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 items-center p-4 hover:bg-muted/50 transition-colors">
                      <div className="col-span-2">
                        <div className="font-medium">
                          {language === "fr" ? "Intégration analytique" : "Analytics Integration"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === "fr" ? "Pour l'analyse de données" : "For data analysis"}
                        </div>
                      </div>
                      <div className="col-span-1">Mar 5, 2023</div>
                      <div className="col-span-1">1 day ago</div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="sm">
                          {language === "fr" ? "Révoquer" : "Revoke"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
