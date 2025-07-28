"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageSquare,
  ExternalLink,
  Send,
  Search,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  FileText,
  Trophy,
  Filter,
  Calendar,
  Download,
  Mail,
  Clock,
  Users,
  Eye,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("contact")
  const { toast } = useToast()
  const { language } = useLanguage()
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    // Start the animation after component mounts
    setAnimateCards(true)
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    toast({
      title: language === "fr" ? "Message envoyé" : "Message sent",
      description:
        language === "fr" ? "Nous vous répondrons dès que possible." : "We'll get back to you as soon as possible.",
    })
    // Reset form
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Animation variants
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

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {language === "fr" ? "Support & Assistance" : "Support & Assistance"}
          </h2>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Obtenez de l'aide avec vos bots de trading et la gestion de compte."
              : "Get help with your trading bots and account management."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>{language === "fr" ? "Cette semaine" : "This week"}</span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Download className="h-4 w-4" />
            <span>{language === "fr" ? "Exporter" : "Export"}</span>
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="contact" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="contact" className="relative">
              {activeTab === "contact" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="support-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="relative">
              {activeTab === "faq" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="support-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                {language === "fr" ? "FAQ" : "FAQ"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="tickets" className="relative">
              {activeTab === "tickets" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="support-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {language === "fr" ? "Mes Tickets" : "My Tickets"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="relative">
              {activeTab === "resources" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="support-tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {language === "fr" ? "Ressources" : "Resources"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {language === "fr" ? "Contacter le Support" : "Contact Support"}
                  </CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Remplissez le formulaire ci-dessous et notre équipe vous répondra dès que possible."
                      : "Fill out the form below and our team will get back to you as soon as possible."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          {language === "fr" ? "Nom" : "Name"}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={language === "fr" ? "Votre nom" : "Your name"}
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="border shadow"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {language === "fr" ? "Email" : "Email"}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={language === "fr" ? "Votre email" : "Your email"}
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="border shadow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        {language === "fr" ? "Sujet" : "Subject"}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={
                          language === "fr" ? "De quoi s'agit votre demande ?" : "What is your inquiry about?"
                        }
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="border shadow"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {language === "fr" ? "Message" : "Message"}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={
                          language === "fr"
                            ? "Veuillez décrire votre problème en détail"
                            : "Please describe your issue in detail"
                        }
                        rows={6}
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required
                        className="border shadow resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-md"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {language === "fr" ? "Envoyer le Message" : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {language === "fr" ? "Informations de Contact" : "Contact Information"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">{language === "fr" ? "Support par Email" : "Email Support"}</h3>
                    <p className="text-sm text-primary">support@tradebotx.com</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">{language === "fr" ? "Temps de Réponse" : "Response Time"}</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Nous répondons généralement dans les 24 heures pendant les jours ouvrables."
                          : "We typically respond within 24 hours during business days."}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">
                      {language === "fr" ? "Heures d'Ouverture" : "Business Hours"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {language === "fr"
                          ? "Lundi - Vendredi: 9:00 - 18:00 UTC"
                          : "Monday - Friday: 9:00 AM - 6:00 PM UTC"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {language === "fr" ? "Support Communautaire" : "Community Support"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full justify-start shadow" asChild>
                      <Link href="https://t.me/tradebotx" target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.51l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.833.95z" />
                        </svg>
                        {language === "fr" ? "Communauté Telegram" : "Telegram Community"}
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full justify-start shadow" asChild>
                      <Link href="https://discord.gg/tradebotx" target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        {language === "fr" ? "Serveur Discord" : "Discord Server"}
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full justify-start shadow" asChild>
                      <Link href="https://twitter.com/tradebotx" target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        {language === "fr" ? "Twitter" : "Twitter"}
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {language === "fr" ? "Questions Fréquemment Posées" : "Frequently Asked Questions"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Trouvez des réponses aux questions courantes sur notre plateforme"
                    : "Find answers to common questions about our platform"}
                </CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={language === "fr" ? "Rechercher dans les FAQs..." : "Search FAQs..."}
                    className="pl-9 border shadow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question:
                        language === "fr"
                          ? "Comment connecter mon compte d'échange ?"
                          : "How do I connect my exchange account?",
                      answer:
                        language === "fr" ? (
                          <>
                            <p className="text-sm text-muted-foreground mb-2">
                              Pour connecter votre compte d'échange, allez dans Paramètres {">"} Connexions API et
                              suivez ces étapes:
                            </p>
                            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                              <li>Connectez-vous à votre compte d'échange</li>
                              <li>Naviguez vers la section de gestion des API</li>
                              <li>Créez une nouvelle clé API avec les permissions de trading</li>
                              <li>Copiez la clé API et le secret</li>
                              <li>Collez-les dans les champs correspondants sur notre plateforme</li>
                            </ol>
                            <p className="text-sm text-muted-foreground mt-2">
                              Assurez-vous d'activer uniquement les permissions nécessaires pour le trading. Nous
                              recommandons de ne pas activer les permissions de retrait pour des raisons de sécurité.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-muted-foreground mb-2">
                              To connect your exchange account, go to Settings {">"} API Connections and follow these
                              steps:
                            </p>
                            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                              <li>Log in to your exchange account</li>
                              <li>Navigate to the API management section</li>
                              <li>Create a new API key with trading permissions</li>
                              <li>Copy the API key and secret</li>
                              <li>Paste them into the corresponding fields in our platform</li>
                            </ol>
                            <p className="text-sm text-muted-foreground mt-2">
                              Make sure to only enable the permissions required for trading. We recommend not enabling
                              withdrawal permissions for security reasons.
                            </p>
                          </>
                        ),
                    },
                    {
                      question: language === "fr" ? "Mes fonds sont-ils sécurisés ?" : "Are my funds safe?",
                      answer:
                        language === "fr"
                          ? "Oui, vos fonds restent dans votre compte d'échange à tout moment. Notre plateforme se connecte à votre échange via API et n'a que les permissions que vous lui accordez. Nous ne prenons jamais la garde de vos fonds, et toutes les transactions se font directement sur votre compte d'échange."
                          : "Yes, your funds remain in your exchange account at all times. Our platform connects to your exchange via API and only has the permissions you grant it. We never take custody of your funds, and all trading happens directly on your exchange account.",
                    },
                    {
                      question:
                        language === "fr"
                          ? "Comment les bots de trading prennent-ils des décisions ?"
                          : "How do trading bots make decisions?",
                      answer:
                        language === "fr"
                          ? "Nos bots de trading utilisent une combinaison d'indicateurs techniques, d'analyse de données de marché et de stratégies prédéfinies pour prendre des décisions de trading. Chaque modèle de bot a sa propre approche, et vous pouvez personnaliser les paramètres pour correspondre à votre tolérance au risque et à vos objectifs de trading."
                          : "Our trading bots use a combination of technical indicators, market data analysis, and predefined strategies to make trading decisions. Each bot template has its own approach, and you can customize the parameters to match your risk tolerance and trading goals.",
                    },
                    {
                      question:
                        language === "fr"
                          ? "Que se passe-t-il si je perds ma connexion Internet ?"
                          : "What happens if I lose internet connection?",
                      answer:
                        language === "fr"
                          ? "Nos bots fonctionnent sur des serveurs cloud sécurisés, ils continuent donc à fonctionner même si votre appareil personnel perd sa connexion Internet. Vous pouvez surveiller et contrôler vos bots depuis n'importe quel appareil avec accès Internet en vous connectant à votre compte."
                          : "Our bots run on secure cloud servers, so they continue to operate even if your personal device loses internet connection. You can monitor and control your bots from any device with internet access by logging into your account.",
                    },
                    {
                      question:
                        language === "fr"
                          ? "Comment gagner des XP pour mon Passe de Trading ?"
                          : "How do I earn XP for my Trading Pass?",
                      answer:
                        language === "fr"
                          ? "Vous gagnez des XP en complétant des missions, en réalisant des trades réussis, en maintenant des bots actifs, en parrainant de nouveaux utilisateurs et en participant aux activités de la plateforme. Plus vous êtes actif en tant que trader, plus vous monterez rapidement de niveau dans votre Passe de Trading."
                          : "You earn XP by completing missions, making successful trades, maintaining active bots, referring new users, and participating in platform activities. The more active you are as a trader, the faster you'll level up your Trading Pass.",
                    },
                    {
                      question:
                        language === "fr"
                          ? "Puis-je créer mon propre bot personnalisé ?"
                          : "Can I create my own custom bot?",
                      answer:
                        language === "fr"
                          ? "Oui, les utilisateurs avancés peuvent créer des bots personnalisés en utilisant notre interface de création de bot. Cette fonctionnalité vous permet de définir votre propre logique de trading, indicateurs et conditions. La création de bot personnalisé est disponible pour les utilisateurs de niveau 20 et plus."
                          : "Yes, advanced users can create custom bots using our bot builder interface. This feature allows you to define your own trading logic, indicators, and conditions. Custom bot creation is available to users at level 20 and above.",
                    },
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    >
                      <AccordionItem value={`item-${i + 1}`} className="border-b last:border-b-0">
                        <AccordionTrigger className="hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm text-muted-foreground">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>

                <div className="mt-6 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="shadow" asChild>
                      <Link href="/user/how-it-works">
                        {language === "fr" ? "Voir la Documentation Complète" : "View Complete Documentation"}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      {language === "fr" ? "Tickets de Support" : "Support Tickets"}
                    </CardTitle>
                    <CardDescription>
                      {language === "fr"
                        ? "Suivez l'état de vos demandes de support"
                        : "Track the status of your support requests"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border shadow-sm overflow-hidden">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b bg-muted/50">
                    <div>{language === "fr" ? "ID du Ticket" : "Ticket ID"}</div>
                    <div>{language === "fr" ? "Sujet" : "Subject"}</div>
                    <div>{language === "fr" ? "Date" : "Date"}</div>
                    <div>{language === "fr" ? "Statut" : "Status"}</div>
                    <div>{language === "fr" ? "Action" : "Action"}</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        id: "TKT-2023-1854",
                        subject: language === "fr" ? "Problème de configuration de bot" : "Bot configuration issue",
                        date: language === "fr" ? "12 Avr 2023" : "Apr 12, 2023",
                        status: language === "fr" ? "Résolu" : "Resolved",
                      },
                      {
                        id: "TKT-2023-1632",
                        subject: language === "fr" ? "Erreur de connexion API" : "API connection error",
                        date: language === "fr" ? "28 Mar 2023" : "Mar 28, 2023",
                        status: language === "fr" ? "En Cours" : "In Progress",
                      },
                      {
                        id: "TKT-2023-1521",
                        subject: language === "fr" ? "Question de facturation" : "Billing question",
                        date: language === "fr" ? "15 Mar 2023" : "Mar 15, 2023",
                        status: language === "fr" ? "Résolu" : "Resolved",
                      },
                    ].map((ticket, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="grid grid-cols-5 gap-4 p-4 text-sm hover:bg-muted/30 transition-colors"
                      >
                        <div>{ticket.id}</div>
                        <div>{ticket.subject}</div>
                        <div className="text-muted-foreground">{ticket.date}</div>
                        <div>
                          <Badge
                            variant={
                              ticket.status === (language === "fr" ? "Résolu" : "Resolved")
                                ? "outline"
                                : ticket.status === (language === "fr" ? "En Cours" : "In Progress")
                                  ? "default"
                                  : "secondary"
                            }
                            className={
                              ticket.status === (language === "fr" ? "Résolu" : "Resolved")
                                ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800"
                                : ""
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </div>
                        <div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" className="shadow gap-2">
                              <Eye className="h-3 w-3" />
                              {language === "fr" ? "Voir" : "View"}
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-md"
                      asChild
                    >
                      <Link href="#contact" onClick={() => setActiveTab("contact")}>
                        {language === "fr" ? "Créer un Nouveau Ticket" : "Create New Ticket"}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-background to-background/90">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {language === "fr" ? "Ressources Utiles" : "Helpful Resources"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Guides, tutoriels et ressources pour tirer le meilleur parti de notre plateforme"
                    : "Guides, tutorials, and resources to help you get the most out of our platform"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={animateCards ? "show" : "hidden"}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {[
                    {
                      title: language === "fr" ? "Guide de Démarrage" : "Getting Started Guide",
                      description:
                        language === "fr"
                          ? "Apprenez les bases de notre plateforme et comment configurer votre premier bot"
                          : "Learn the basics of our platform and how to set up your first bot",
                      icon: CheckCircle2,
                      color: "text-green-500",
                      bgColor: "bg-green-100",
                      link: "/user/how-it-works",
                      external: false,
                    },
                    {
                      title: language === "fr" ? "Stratégies de Trading" : "Trading Strategies",
                      description:
                        language === "fr"
                          ? "Explorez différentes stratégies de trading et comment les implémenter"
                          : "Explore different trading strategies and how to implement them",
                      icon: BarChart3,
                      color: "text-blue-500",
                      bgColor: "bg-blue-100",
                      link: "/user/how-it-works#strategies",
                      external: false,
                    },
                    {
                      title: language === "fr" ? "Documentation API" : "API Documentation",
                      description:
                        language === "fr"
                          ? "Documentation technique pour les développeurs"
                          : "Technical documentation for developers",
                      icon: FileText,
                      color: "text-purple-500",
                      bgColor: "bg-purple-100",
                      link: "https://docs.tradebotx.com/api",
                      external: true,
                    },
                    {
                      title: language === "fr" ? "Tutoriels Vidéo" : "Video Tutorials",
                      description:
                        language === "fr"
                          ? "Guides vidéo étape par étape pour utiliser notre plateforme"
                          : "Step-by-step video guides for using our platform",
                      icon: HelpCircle,
                      color: "text-amber-500",
                      bgColor: "bg-amber-100",
                      link: "/user/tutorials",
                      external: false,
                    },
                    {
                      title: language === "fr" ? "Guide du Passe de Trading" : "Trading Pass Guide",
                      description:
                        language === "fr"
                          ? "Apprenez à maximiser vos récompenses avec le Passe de Trading"
                          : "Learn how to maximize your rewards with the Trading Pass",
                      icon: Trophy,
                      color: "text-pink-500",
                      bgColor: "bg-pink-100",
                      link: "/user/how-it-works#pass",
                      external: false,
                    },
                    {
                      title: language === "fr" ? "Forum Communautaire" : "Community Forum",
                      description:
                        language === "fr"
                          ? "Connectez-vous avec d'autres traders et partagez des stratégies"
                          : "Connect with other traders and share strategies",
                      icon: MessageSquare,
                      color: "text-indigo-500",
                      bgColor: "bg-indigo-100",
                      link: "https://community.tradebotx.com",
                      external: true,
                    },
                  ].map((resource, i) => (
                    <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="overflow-hidden">
                      <Card className="h-full border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full ${resource.bgColor} p-2 ${resource.color}`}>
                              <resource.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button variant="outline" size="sm" className="w-full shadow" asChild>
                            <Link
                              href={resource.link}
                              target={resource.external ? "_blank" : undefined}
                              rel={resource.external ? "noopener noreferrer" : undefined}
                            >
                              {language === "fr" ? "Voir la Ressource" : "View Resource"}
                              {resource.external ? (
                                <ExternalLink className="ml-1 h-4 w-4" />
                              ) : (
                                <ChevronRight className="ml-1 h-4 w-4" />
                              )}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
