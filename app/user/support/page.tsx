"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  MessageCircle,
  HelpCircle,
  FileText,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function SupportPage() {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("")
      setSubject("")
      // Show success message
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {language === "fr" ? "Support Client" : "Customer Support"}
          </h1>
        </div>
        <p className="text-muted-foreground">
          {language === "fr"
            ? "Notre équipe support est là pour vous aider avec toutes vos questions"
            : "Our support team is here to help you with all your questions"}
        </p>
      </motion.div>

      <Tabs defaultValue="contact" className="space-y-4">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="contact" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {language === "fr" ? "Contact" : "Contact"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {language === "fr" ? "Chat Live" : "Live Chat"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </span>
            </TabsTrigger>
            <TabsTrigger value="tickets" className="relative">
              <span className="relative z-20 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {language === "fr" ? "Mes Tickets" : "My Tickets"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {language === "fr" ? "Formulaire de Contact" : "Contact Form"}
                  </CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Envoyez-nous votre question et nous vous répondrons rapidement"
                      : "Send us your question and we'll respond quickly"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{language === "fr" ? "Votre Email" : "Your Email"}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{language === "fr" ? "Sujet" : "Subject"}</Label>
                      <Input
                        id="subject"
                        placeholder={language === "fr" ? "Décrivez votre problème" : "Describe your issue"}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{language === "fr" ? "Message" : "Message"}</Label>
                      <Textarea
                        id="message"
                        placeholder={
                          language === "fr"
                            ? "Décrivez votre question en détail..."
                            : "Describe your question in detail..."
                        }
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          {language === "fr" ? "Envoi en cours..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {language === "fr" ? "Envoyer le Message" : "Send Message"}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    {language === "fr" ? "Heures d'Ouverture" : "Business Hours"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>{language === "fr" ? "Lundi - Vendredi" : "Monday - Friday"}</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "fr" ? "Samedi" : "Saturday"}</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "fr" ? "Dimanche" : "Sunday"}</span>
                    <span className="text-muted-foreground">{language === "fr" ? "Fermé" : "Closed"}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    {language === "fr" ? "Autres Moyens de Contact" : "Other Contact Methods"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">support@bsbridge.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span className="text-sm">+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">
                      {language === "fr" ? "Chat disponible 24/7" : "Chat available 24/7"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                {language === "fr" ? "Chat en Direct" : "Live Chat"}
              </CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Discutez directement avec notre équipe support"
                  : "Chat directly with our support team"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 border rounded-lg p-4 bg-muted/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-medium">
                      {language === "fr" ? "Chat Support Disponible" : "Support Chat Available"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "fr"
                        ? "Cliquez pour démarrer une conversation avec notre équipe"
                        : "Click to start a conversation with our team"}
                    </p>
                  </div>
                  <Button className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {language === "fr" ? "Démarrer le Chat" : "Start Chat"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-secondary" />
                {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
              </CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Trouvez rapidement des réponses aux questions les plus courantes"
                  : "Find quick answers to the most common questions"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    question: language === "fr" ? "Comment puis-je suivre mes gains ?" : "How can I track my profits?",
                    answer:
                      language === "fr"
                        ? "Vos gains quotidiens et mensuels sont affichés sur votre tableau de bord principal. Vous pouvez également consulter l'onglet Performance pour des analyses détaillées."
                        : "Your daily and monthly profits are displayed on your main dashboard. You can also check the Performance tab for detailed analytics.",
                  },
                  {
                    question:
                      language === "fr" ? "Comment fonctionne le Battle Pass ?" : "How does the Battle Pass work?",
                    answer:
                      language === "fr"
                        ? "Le Battle Pass vous permet de progresser en complétant des missions. Chaque niveau débloque de nouvelles récompenses et fonctionnalités."
                        : "The Battle Pass allows you to progress by completing missions. Each level unlocks new rewards and features.",
                  },
                  {
                    question:
                      language === "fr" ? "Quand puis-je réclamer mes récompenses ?" : "When can I claim my rewards?",
                    answer:
                      language === "fr"
                        ? "Les récompenses sont automatiquement débloquées lorsque vous atteignez le niveau requis. Vous pouvez les consulter dans l'onglet Récompenses."
                        : "Rewards are automatically unlocked when you reach the required level. You can view them in the Rewards tab.",
                  },
                  {
                    question:
                      language === "fr"
                        ? "Comment contacter le support technique ?"
                        : "How do I contact technical support?",
                    answer:
                      language === "fr"
                        ? "Vous pouvez nous contacter via le formulaire de contact, le chat en direct, ou par email à support@bsbridge.com."
                        : "You can contact us via the contact form, live chat, or by email at support@bsbridge.com.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <Card className="neon-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    {language === "fr" ? "Mes Tickets de Support" : "My Support Tickets"}
                  </CardTitle>
                  <CardDescription>
                    {language === "fr"
                      ? "Suivez l'état de vos demandes de support"
                      : "Track the status of your support requests"}
                  </CardDescription>
                </div>
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  {language === "fr" ? "Nouveau Ticket" : "New Ticket"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "#12345",
                    subject: language === "fr" ? "Problème de connexion au bot" : "Bot connection issue",
                    status: language === "fr" ? "En cours" : "In Progress",
                    date: language === "fr" ? "Il y a 2 heures" : "2 hours ago",
                    priority: language === "fr" ? "Haute" : "High",
                  },
                  {
                    id: "#12344",
                    subject: language === "fr" ? "Question sur les récompenses" : "Question about rewards",
                    status: language === "fr" ? "Résolu" : "Resolved",
                    date: language === "fr" ? "Hier" : "Yesterday",
                    priority: language === "fr" ? "Normale" : "Normal",
                  },
                  {
                    id: "#12343",
                    subject: language === "fr" ? "Mise à jour du profil" : "Profile update",
                    status: language === "fr" ? "Fermé" : "Closed",
                    date: language === "fr" ? "Il y a 3 jours" : "3 days ago",
                    priority: language === "fr" ? "Basse" : "Low",
                  },
                ].map((ticket, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{ticket.id}</span>
                        <Badge
                          variant={
                            ticket.status === (language === "fr" ? "En cours" : "In Progress")
                              ? "default"
                              : ticket.status === (language === "fr" ? "Résolu" : "Resolved")
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{ticket.subject}</p>
                      <p className="text-xs text-muted-foreground">
                        {language === "fr" ? "Priorité" : "Priority"}: {ticket.priority} • {ticket.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {ticket.status === (language === "fr" ? "En cours" : "In Progress") && (
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                      )}
                      {ticket.status === (language === "fr" ? "Résolu" : "Resolved") && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      <Button variant="outline" size="sm">
                        {language === "fr" ? "Voir" : "View"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
