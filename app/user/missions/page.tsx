"use client"

import React from "react"

import { useState, useEffect, useRef, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/components/language-provider"
import {
  Trophy,
  Rocket,
  Zap,
  Award,
  Gift,
  Crown,
  Star,
  Lock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Coins,
  Bot,
  X,
  Target,
  Clock,
  CheckCircle2,
  Filter,
  Download,
  Calendar,
  Goal,
  Ticket,
} from "lucide-react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

// Ajouter ces imports pour les modèles 3D
import { Canvas } from "@react-three/fiber"
import { PresentationControls, Environment, useTexture, Html, Float, Stars } from "@react-three/drei"
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing"

// Créer des styles pour les animations de particules
const particleAnimations = Array.from({ length: 15 })
  .map((_, i) => {
    const x1 = Math.random() * 100 - 50
    const y1 = Math.random() * 100 - 50
    const x2 = Math.random() * 100 - 50
    const y2 = Math.random() * 100 - 50

    return `
    @keyframes float-${i} {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(${x1}px, ${y1}px); }
      50% { transform: translate(${x2}px, ${y2}px); }
      75% { transform: translate(${-x1}px, ${-y1}px); }
    }
  `
  })
  .join("\n")

// Créer un style pour l'effet de scintillement premium
const premiumGlowStyle = `
@keyframes premium-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(245, 158, 11, 0.3); }
  50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.5); }
}

.premium-glow {
  animation: premium-pulse 2s infinite ease-in-out;
}

.card-glow {
  position: relative;
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-glow:hover::before {
  opacity: 1;
}

.premium-bg {
  background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.1), transparent 70%),
              radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.1), transparent 70%);
}

.path-gradient-pulse {
  animation: path-pulse 3s infinite linear;
}

@keyframes path-pulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.5; }
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.03);
}
`

const lineAnimations = Array.from({ length: 20 })
  .map((_, i) => {
    return `
    @keyframes line-float-${i} {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(1000%); }
    }
  `
  })
  .join("\n")

// Modifier le composant TexturedBox pour créer des images plus réalistes
function TexturedBox({ texture, ...props }) {
  const colorMap = useTexture(texture)

  return (
    <group {...props}>
      {/* Main panel with the image */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial map={colorMap} metalness={0.6} roughness={0.5} envMapIntensity={1.8} />
      </mesh>

      {/* Add some depth with additional elements */}
      <mesh position={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[1.8, 1.8, 0.2]} />
        <meshStandardMaterial
          color={props.color || "#ffffff"}
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={2}
          opacity={0.9}
          transparent={true}
        />
      </mesh>

      {/* Add shadow-casting plane behind */}
      <mesh position={[0, 0, -0.25]} receiveShadow>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial color={props.color || "#ffffff"} opacity={0.1} transparent={true} />
      </mesh>

      {/* Add subtle glow effect */}
      <mesh position={[0, 0, -0.3]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color={props.color || "#ffffff"} opacity={0.05} transparent={true} blending={2} />
      </mesh>
    </group>
  )
}

// Améliorer le composant RewardViewer pour mieux afficher les images
function RewardViewer({ reward, onClose }) {
  const { language } = useLanguage()
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [0.9, 1],
      opacity: [0, 1],
      transition: { duration: 0.5, ease: "easeOut" },
    })
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={controls}
        className="relative w-full max-w-3xl h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-xl border border-white/20 overflow-hidden shadow-2xl"
      >
        <button
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shadow-lg"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="absolute top-4 left-0 right-0 text-center z-10">
          <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {reward.name}
          </h2>
          <p className="text-white/70 mt-1">{reward.description || "Exclusive premium reward"}</p>
        </div>

        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 5, 15]} />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
            castShadow
            shadow-mapSize={1024}
          />
          <directionalLight position={[-5, 5, 5]} intensity={0.8} castShadow />

          <Suspense
            fallback={
              <Html center>
                <div className="text-white text-lg">Loading 3D Model...</div>
              </Html>
            }
          >
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              {/* Rotating platform with shadow */}
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[0, -0.5, 0]}>
                {/* Product visualization */}
                <TexturedBox
                  texture={reward.image}
                  scale={reward.scale || 2}
                  position={[0, 0.5, 0]}
                  color={reward.color}
                />

                {/* Enhanced lighting for the product */}
                <pointLight position={[0, 2, 2]} intensity={0.5} color={reward.color || "#ffffff"} />
                <pointLight position={[0, -2, -2]} intensity={0.3} color="#ffffff" />
              </Float>

              {/* Enhanced particles with dynamic colors */}
              {Array.from({ length: 30 }).map((_, i) => (
                <Float
                  key={i}
                  speed={2 + Math.random() * 2}
                  rotationIntensity={0.2}
                  floatIntensity={0.5}
                  position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 8]}
                >
                  <mesh>
                    <sphereGeometry args={[0.05 + Math.random() * 0.05, 8, 8]} />
                    <meshStandardMaterial
                      color={reward.color || "#ec4899"}
                      emissive={reward.color || "#ec4899"}
                      emissiveIntensity={3}
                      transparent
                      opacity={0.7 + Math.random() * 0.3}
                    />
                  </mesh>
                </Float>
              ))}
            </PresentationControls>

            {/* Improved environment with higher intensity */}
            <Environment preset="city" background={false} intensity={2.5} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />

            {/* Post-processing effects */}
            <EffectComposer>
              <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
              <ChromaticAberration radialModulation={true} offset={[0.0005, 0.0005]} />
            </EffectComposer>
          </Suspense>
        </Canvas>

        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-white/70 text-sm backdrop-blur-sm bg-black/30 inline-block px-4 py-1 rounded-full">
            {language === "fr"
              ? "Cliquez et faites glisser pour faire pivoter • Utilisez la molette pour zoomer"
              : "Click and drag to rotate • Use scroll to zoom"}
          </p>
          <p className="text-amber-400/80 text-xs mt-2">
            {language === "fr"
              ? "Ceci est une représentation 3D stylisée. Le produit réel peut différer."
              : "This is a stylized 3D representation. Actual product may vary."}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Badge component with gradient effect
function GradientBadge({ children, className = "", ...props }) {
  return (
    <Badge
      className={`bg-gradient-to-r from-pink-500 to-purple-500 border-0 text-white shadow-md ${className}`}
      {...props}
    >
      {children}
    </Badge>
  )
}

// For premium badge
function PremiumBadge({ className = "", ...props }) {
  return (
    <Badge
      className={`bg-gradient-to-r from-amber-500 to-pink-500 border-0 text-white shadow-md ${className}`}
      {...props}
    >
      <Crown className="mr-1 h-3 w-3" />
      Premium
    </Badge>
  )
}

export default function MissionsPage() {
  const { language } = useLanguage()
  const [progress, setProgress] = useState(42)
  const [currentTier, setCurrentTier] = useState(4)
  const [isPremium, setIsPremium] = useState(false)
  const [activeTab, setActiveTab] = useState("battle-pass")
  const [rotateY, setRotateY] = useState(0)
  const [hoveredReward, setHoveredReward] = useState(null)
  const [selectedReward, setSelectedReward] = useState(null)
  const [showViewer, setShowViewer] = useState(false)
  const [animateCards, setAnimateCards] = useState(false)

  // Ajouter ces états pour la visualisation 3D
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cardRefs] = useState(() => new Map())
  const battlePassRef = useRef(null)

  // Animation controls
  const controls = useAnimation()

  useEffect(() => {
    // Start the animation after component mounts
    setAnimateCards(true)
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    })
  }, [controls])

  // Fonction pour afficher la visualisation 3D
  const handleViewReward = (reward) => {
    setSelectedReward(reward)
    setShowViewer(true)
  }

  // Fonction pour fermer la visualisation 3D
  const handleCloseViewer = () => {
    setShowViewer(false)
    setSelectedReward(null)
  }

  // Fonction pour calculer l'effet de carte 3D basé sur la position de la souris
  const calculateCardTransform = (event, cardElement) => {
    if (!cardElement) return { x: 0, y: 0 }

    const rect = cardElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculer la position relative de la souris par rapport au centre de la carte
    const x = (event.clientX - centerX) / (rect.width / 2)
    const y = (event.clientY - centerY) / (rect.height / 2)

    return { x, y }
  }

  // Simulate progress increase
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 45) {
        setProgress((prev) => Math.min(prev + 0.5, 100))
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [progress])

  // Rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateY((prev) => (prev + 0.2) % 360) // Rotation plus lente et subtile
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Ajouter un style global pour les animations
  React.useEffect(() => {
    // Créer un élément style
    const styleElement = document.createElement("style")
    styleElement.innerHTML = particleAnimations + premiumGlowStyle + lineAnimations
    document.head.appendChild(styleElement)

    // Nettoyer lors du démontage
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  // Définir les récompenses avec des images plus détaillées
  const tiers = [
    {
      level: 1,
      freeReward: {
        name: language === "fr" ? "Badge Débutant" : "Beginner Badge",
        icon: <Award className="h-6 w-6" />,
      },
      premiumReward: {
        name: language === "fr" ? "Casque Gaming" : "Gaming Headset",
        icon: <Gift className="h-6 w-6" />,
        isPhysical: true,
        image: "https://m.media-amazon.com/images/I/71rwPzXKDGL.jpg",
        description: language === "fr" ? "Casque gaming haute performance" : "High-performance gaming headset",
        color: "#4ade80",
        scale: 2.2,
        rotation: Math.PI / 6,
      },
      xpRequired: 100,
    },
    {
      level: 2,
      freeReward: { name: language === "fr" ? "10$ Bonus" : "$10 Bonus", icon: <Coins className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Souris Gaming" : "Gaming Mouse",
        icon: <Gift className="h-6 w-6" />,
        isPhysical: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSWqouwsTNk0BnDx6-8QUpsR3pL2uj6S2Qw&s",
        description: language === "fr" ? "Souris gaming ergonomique" : "Ergonomic gaming mouse",
        color: "#3b82f6",
        scale: 1.8,
        rotation: Math.PI / 4,
      },
      xpRequired: 250,
    },
    {
      level: 3,
      freeReward: { name: language === "fr" ? "Icône Spéciale" : "Special Icon", icon: <Star className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Clavier Mécanique" : "Mechanical Keyboard",
        icon: <Gift className="h-6 w-6" />,
        isPhysical: true,
        image: "https://m.media-amazon.com/images/I/71iUUN3rSZL.jpg",
        description: language === "fr" ? "Clavier mécanique RGB" : "RGB mechanical keyboard",
        color: "#a855f7",
        scale: 1.8,
        rotation: Math.PI / 4,
      },
      xpRequired: 500,
    },
    {
      level: 4,
      freeReward: { name: language === "fr" ? "25$ Bonus" : "$25 Bonus", icon: <Coins className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Carte Cadeau 100$" : "$100 Gift Card",
        icon: <Gift className="h-6 w-6" />,
        isPhysical: true,
        image: "https://read.cardtonic.com/wp-content/uploads/2024/08/Giftcards-100.jpg",
        description: language === "fr" ? "Carte cadeau de 100$" : "$100 gift card",
        color: "#22c55e",
        scale: 1.7,
        rotation: Math.PI / 8,
      },
      xpRequired: 1000,
    },
    {
      level: 5,
      freeReward: {
        name: language === "fr" ? "Badge Intermédiaire" : "Intermediate Badge",
        icon: <Award className="h-6 w-6" />,
      },
      premiumReward: {
        name: language === "fr" ? "Bot Volatilité" : "Volatility Bot",
        icon: <Bot className="h-6 w-6" />,
        isPhysical: false,
      },
      xpRequired: 2000,
    },
    {
      level: 6,
      freeReward: { name: language === "fr" ? "50$ Bonus" : "$50 Bonus", icon: <Coins className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Accès VIP" : "VIP Access",
        icon: <Crown className="h-6 w-6" />,
        isPhysical: false,
      },
      xpRequired: 3500,
    },
    {
      level: 7,
      freeReward: { name: language === "fr" ? "Badge Expert" : "Expert Badge", icon: <Award className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Bot Scalping" : "Scalping Bot",
        icon: <Bot className="h-6 w-6" />,
        isPhysical: false,
      },
      xpRequired: 5000,
    },
    {
      level: 8,
      freeReward: { name: language === "fr" ? "100$ Bonus" : "$100 Bonus", icon: <Coins className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Stratégie Ultime" : "Ultimate Strategy",
        icon: <Rocket className="h-6 w-6" />,
        isPhysical: false,
      },
      xpRequired: 7500,
    },
    {
      level: 9,
      freeReward: { name: language === "fr" ? "Badge Élite" : "Elite Badge", icon: <Award className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Console PS5" : "PS5 Console",
        icon: <Gift className="h-6 w-6" />,
        isPhysical: true,
        image: "https://koodoo.co.za/cdn/shop/files/PS5-Slim_-DS5.png?v=1712045458",
        description: language === "fr" ? "Console PlayStation 5" : "PlayStation 5 console",
        color: "#ec4899",
        scale: 2.3,
        rotation: Math.PI / 5,
      },
      xpRequired: 10000,
    },
    {
      level: 10,
      freeReward: { name: language === "fr" ? "250$ Bonus" : "$250 Bonus", icon: <Coins className="h-6 w-6" /> },
      premiumReward: {
        name: language === "fr" ? "Trophée Légendaire" : "Legendary Trophy",
        icon: <Trophy className="h-6 w-6" />,
        isPhysical: true,
        image:
          "/placeholder.svg?height=512&width=512&text=Legendary+Trophy&fontWeight=bold&fontSize=28&textColor=white&bgColor=f59e0b",
        description: language === "fr" ? "Trophée exclusif en métal" : "Exclusive metal trophy",
        color: "#f59e0b",
        scale: 2,
        rotation: 0,
      },
      xpRequired: 15000,
    },
  ]

  const visibleTiers = tiers.slice(Math.max(0, currentTier - 3), Math.min(tiers.length, currentTier + 4))

  const handlePrevTier = () => {
    if (currentTier > 1) {
      setCurrentTier(currentTier - 1)
    }
  }

  const handleNextTier = () => {
    if (currentTier < tiers.length) {
      setCurrentTier(currentTier + 1)
    }
  }

  const currentXP = 4200
  const nextLevelXP = tiers[currentTier]?.xpRequired || 1000
  const prevLevelXP = tiers[currentTier - 2]?.xpRequired || 0
  const levelProgress = ((currentXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100

  // Sample missions data
  const missions = [
    {
      id: 1,
      title: language === "fr" ? "Compléter 10 trades" : "Complete 10 trades",
      description: language === "fr" ? "Exécuter 10 trades avec n'importe quel bot" : "Execute 10 trades with any bot",
      reward: language === "fr" ? "500 XP + 10$ Bonus" : "500 XP + $10 Bonus",
      progress: 70,
      total: 10,
      current: 7,
      difficulty: language === "fr" ? "Facile" : "Easy",
      category: language === "fr" ? "Trading" : "Trading",
      isNew: true,
      expiresIn: language === "fr" ? "2 jours" : "2 days",
    },
    {
      id: 2,
      title:
        language === "fr" ? "Atteindre 75% de taux de réussite pendant 1 semaine" : "Achieve 75% win rate for 1 week",
      description:
        language === "fr"
          ? "Maintenir un taux de réussite d'au moins 75% pendant 7 jours consécutifs"
          : "Maintain a win rate of at least 75% for 7 consecutive days",
      reward: language === "fr" ? "1000 XP + Modèle de Bot Premium" : "1000 XP + Premium Bot Template",
      progress: 45,
      total: 7,
      current: 3,
      difficulty: language === "fr" ? "Moyen" : "Medium",
      category: language === "fr" ? "Performance" : "Performance",
      isNew: false,
      expiresIn: language === "fr" ? "5 jours" : "5 days",
    },
    {
      id: 3,
      title: language === "fr" ? "Parrainer 3 nouveaux utilisateurs" : "Refer 3 new users",
      description:
        language === "fr"
          ? "Inviter 3 amis à rejoindre la plateforme avec votre lien de parrainage"
          : "Invite 3 friends to join the platform using your referral link",
      reward: language === "fr" ? "1500 XP + 10% de commission supplémentaire" : "1500 XP + 10% Commission Boost",
      progress: 33,
      total: 3,
      current: 1,
      difficulty: language === "fr" ? "Difficile" : "Hard",
      category: language === "fr" ? "Affiliation" : "Affiliation",
      isNew: false,
      expiresIn: language === "fr" ? "14 jours" : "14 days",
    },
    {
      id: 5,
      title: language === "fr" ? "Compléter le tutoriel" : "Complete the tutorial",
      description:
        language === "fr"
          ? "Suivre toutes les étapes du tutoriel de la plateforme"
          : "Go through all steps of the platform tutorial",
      reward: language === "fr" ? "300 XP + Modèle de Bot Basique" : "300 XP + Basic Bot Template",
      progress: 100,
      total: 1,
      current: 1,
      difficulty: language === "fr" ? "Facile" : "Easy",
      category: language === "fr" ? "Intégration" : "Onboarding",
      isNew: false,
      completed: true,
      completedDate: language === "fr" ? "il y a 2 jours" : "2 days ago",
    },
  ]

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
      {/* Afficher le visualiseur 3D lorsqu'une récompense est sélectionnée */}
      <AnimatePresence>
        {showViewer && selectedReward && <RewardViewer reward={selectedReward} onClose={handleCloseViewer} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {language === "fr" ? "Missions & Récompenses" : "Missions & Rewards"}
            </h2>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <Trophy className="h-7 w-7 text-indigo-500" />
              <Goal className="h-7 w-7 text-indigo-500" />
            </motion.div>
          </div>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Complétez des missions, gagnez des XP et débloquez des récompenses exclusives."
              : "Complete missions, earn XP, and unlock exclusive rewards."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>{language === "fr" ? "Cette semaine" : "This week"}</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>{language === "fr" ? "Filtrer" : "Filter"}</span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Download className="h-4 w-4" />
            <span>{language === "fr" ? "Exporter" : "Export"}</span>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Niveau Actuel" : "Current Level"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{currentTier}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <div className="mt-4">
                <Progress
                  value={levelProgress}
                  className="h-1.5 bg-pink-100"
                  indicatorClassName="bg-gradient-to-r from-pink-500 to-purple-500"
                />
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
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "XP Total" : "Total XP"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{currentXP} XP</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-muted-foreground">
                  {language === "fr"
                    ? `${nextLevelXP - currentXP} XP jusqu'au niveau ${currentTier + 1}`
                    : `${nextLevelXP - currentXP} XP to level ${currentTier + 1}`}
                </div>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "fr" ? "Missions Actives" : "Active Missions"}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{missions.filter((m) => !m.completed).length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              <div className="mt-">
                {!isPremium ? (
                  <Button
                    onClick={() => setIsPremium(true)}
                    className="w-full bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white border-0"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {language === "fr" ? "Passer Premium" : "Upgrade to Premium"}
                  </Button>
                ) : (
                  <Badge className="bg-gradient-to-r from-amber-500 to-pink-500 text-white border-0 w-full py-1 flex items-center justify-center">
                    <Crown className="mr-2 h-4 w-4" />
                    {language === "fr" ? "PREMIUM ACTIF" : "PREMIUM ACTIVE"}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="battle-pass" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="w-full p-0 bg-transparent">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground backdrop-blur-sm">
            <TabsTrigger value="battle-pass" className="relative">
              {activeTab === "battle-pass" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                {language === "fr" ? "Passe de Trading" : "Trading Pass"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="missions" className="relative">
              {activeTab === "missions" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                {language === "fr" ? "Missions Actives" : "Active Missions"}
              </span>
            </TabsTrigger>
            <TabsTrigger value="completed" className="relative">
              {activeTab === "completed" && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-sm z-10"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                {language === "fr" ? "Complétées" : "Completed"}
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
                <Ticket className="h-4 w-4" />
                {language === "fr" ? "Mes Récompenses" : "My Rewards"}
              </span>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="battle-pass" className="space-y-6">
          {/* 3D Battle Pass Visualization */}
          <motion.div
            ref={battlePassRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] w-full overflow-hidden rounded-xl border shadow-xl bg-gradient-to-b from-background via-background/95 to-background/90"
          >
            {/* 3D Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu">
                {/* Grid lines with advanced styling */}
                <div
                  className="absolute inset-0 bg-grid-pattern opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                />

                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={`grid-h-${i}`}
                    className="absolute h-[1px] w-[2000px] bg-primary/5"
                    style={{ top: `${(i - 10) * 100}px`, left: "-1000px" }}
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={`grid-v-${i}`}
                    className="absolute h-[2000px] w-[1px] bg-primary/5"
                    style={{ left: `${(i - 10) * 100}px`, top: "-1000px" }}
                  />
                ))}

                {/* 3D floating elements with animations */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[300px] top-[-150px] h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
                  style={{
                    transform: `translateZ(${Math.sin((rotateY * Math.PI) / 180) * 100}px) rotateY(${rotateY}deg)`,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                  }}
                />

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute right-[200px] top-[100px] h-16 w-16 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-500/5"
                  style={{
                    transform: `translateZ(${Math.cos((rotateY * Math.PI) / 180) * 80}px) rotateY(${rotateY * 1.5}deg)`,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                  }}
                />

                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute left-[100px] bottom-[50px] h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5"
                  style={{
                    transform: `translateZ(${Math.sin(((rotateY + 120) * Math.PI) / 180) * 120}px) rotateY(${rotateY * 0.8}deg)`,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                  }}
                />

                {/* Enhanced floating particles with motion */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    animate={{
                      y: [0, Math.random() * 30 - 15, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                    className="absolute rounded-full bg-primary/10"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `translateZ(${Math.sin(((rotateY + i * 30) * Math.PI) / 180) * 50}px)`,
                      boxShadow: `0 0 ${Math.random() * 4}px rgba(236, 72, 153, 0.5)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Battle Pass Path with enhanced styling */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-5xl px-8">
                {/* Navigation buttons with improved styling */}{" "}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={handlePrevTier}
                  disabled={currentTier <= 3}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={handleNextTier}
                  disabled={currentTier >= tiers.length - 3}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                {/* Enhanced path line with glow effect */}
                <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 bg-muted overflow-hidden rounded-full shadow-inner">
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={`line-particle-${i}`}
                        className="absolute h-2 w-6 bg-white rounded-full"
                        animate={{
                          x: ["-100%", "1000%"],
                        }}
                        transition={{
                          duration: 10 + i * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: i * 0.2,
                        }}
                        style={{
                          opacity: 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentTier - 1) / (tiers.length - 1)) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-1/2 h-2 -translate-y-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full path-gradient-pulse"
                  style={{
                    boxShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
                  }}
                />
                {/* Reward nodes with improved animations */}
                <div className="relative flex items-center justify-between mt-8">
                  {visibleTiers.map((tier, index) => {
                    const isCompleted = tier.level <= currentTier - 1
                    const isCurrent = tier.level === currentTier
                    const isLocked = tier.level > currentTier

                    return (
                      <motion.div
                        key={tier.level}
                        className="relative flex flex-col items-center mx-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        {/* Level node with pulse effect for current level */}
                        <motion.div
                          className={`
                            relative z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg
                            ${
                              isCompleted
                                ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
                                : isCurrent
                                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                                  : "bg-muted text-muted-foreground"
                            }
                          `}
                          animate={
                            isCurrent
                              ? {
                                  boxShadow: [
                                    "0 0 0 rgba(236, 72, 153, 0.4)",
                                    "0 0 15px rgba(236, 72, 153, 0.7)",
                                    "0 0 0 rgba(236, 72, 153, 0.4)",
                                  ],
                                }
                              : {}
                          }
                          transition={
                            isCurrent
                              ? {
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }
                              : {}
                          }
                        >
                          {tier.level}
                        </motion.div>

                        {/* Reward cards with hover effects and animations */}
                        <div className="mt-8 flex flex-col gap-6">
                          {/* Free reward */}
                          <motion.div
                            className={`
                              hover-scale group relative h-[130px] w-[160px] rounded-lg border p-3
                              ${
                                isCompleted
                                  ? "bg-muted/80 shadow"
                                  : isCurrent
                                    ? "bg-background card-glow shadow-lg"
                                    : "bg-muted/50 opacity-80"
                              }
                            `}
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex h-full flex-col items-center justify-center">
                              <div className="mb-2 text-xs font-medium text-muted-foreground">
                                {language === "fr" ? "GRATUIT" : "FREE"}
                              </div>
                              <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.05 }}>
                                <div className={`mb-2 ${isCompleted ? "text-primary" : ""}`}>
                                  {tier.freeReward.icon}
                                </div>
                                <div className="text-center text-xs font-medium">{tier.freeReward.name}</div>
                              </motion.div>
                              {isCompleted && (
                                <Badge variant="outline" className="mt-2 bg-primary/10 text-[10px]">
                                  {language === "fr" ? "RÉCLAMÉ" : "CLAIMED"}
                                </Badge>
                              )}
                              {isCurrent && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    size="sm"
                                    className="mt-2 h-7 text-[10px] bg-gradient-to-r from-primary to-primary/80"
                                  >
                                    {language === "fr" ? "RÉCLAMER" : "CLAIM"}
                                  </Button>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>

                          {/* Premium reward with enhanced styling */}
                          <motion.div
                            className={`
                              hover-scale group relative h-[130px] w-[160px] rounded-lg border p-3
                              ${
                                isPremium && isCompleted
                                  ? "bg-gradient-to-br from-amber-500/20 to-pink-500/20 border-amber-500/50 shadow"
                                  : isPremium && isCurrent
                                    ? "bg-background shadow-lg border-amber-500/50 premium-glow"
                                    : "bg-muted/50 opacity-80"
                              }
                            `}
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex h-full flex-col items-center justify-center">
                              <div className="mb-2 text-xs font-medium text-amber-500">
                                <Crown className="mr-1 inline-block h-3 w-3" />
                                {language === "fr" ? "PREMIUM" : "PREMIUM"}
                              </div>
                              <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.05 }}>
                                <div className={`mb-2 ${isPremium && isCompleted ? "text-amber-500" : ""}`}>
                                  {tier.premiumReward.icon}
                                </div>
                                <div className="text-center text-xs font-medium">{tier.premiumReward.name}</div>
                              </motion.div>

                              {!isPremium && <Lock className="absolute right-2 top-2 h-3 w-3 text-muted-foreground" />}

                              {isPremium && isCompleted && (
                                <Badge variant="outline" className="mt-2 bg-amber-500/10 text-amber-500 text-[10px]">
                                  {language === "fr" ? "RÉCLAMÉ" : "CLAIMED"}
                                </Badge>
                              )}

                              {isPremium && isCurrent && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    size="sm"
                                    className="mt-2 h-7 bg-gradient-to-r from-amber-500 to-pink-500 text-[10px] border-0 shadow"
                                  >
                                    {language === "fr" ? "RÉCLAMER" : "CLAIM"}
                                  </Button>
                                </motion.div>
                              )}

                              {isPremium && tier.premiumReward.isPhysical && isCompleted && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    size="sm"
                                    className="mt-2 h-7 bg-gradient-to-r from-blue-500 to-purple-500 text-[10px] border-0 shadow"
                                    onClick={() => handleViewReward(tier.premiumReward)}
                                  >
                                    {language === "fr" ? "VOIR EN 3D" : "VIEW IN 3D"}
                                  </Button>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium benefits card with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden premium-bg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                  <Crown className="mr-2 h-5 w-5 text-amber-500" />
                  {language === "fr" ? "Avantages Premium" : "Premium Benefits"}
                </CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Débloquez des récompenses exclusives avec le Passe Premium"
                    : "Unlock exclusive rewards with the Premium Pass"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-amber-500/20 to-amber-500/10 p-3 text-amber-500 shadow-inner">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "fr" ? "Bots Exclusifs" : "Exclusive Bots"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr" ? "Accédez à des bots de trading avancés" : "Access advanced trading bots"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-pink-500/20 to-pink-500/10 p-3 text-pink-500 shadow-inner">
                      <Gift className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "fr" ? "Cadeaux Physiques" : "Physical Gifts"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr" ? "Recevez des cadeaux réels exclusifs" : "Receive exclusive real gifts"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 p-3 text-purple-500 shadow-inner">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "fr" ? "XP Boostés" : "Boosted XP"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "fr" ? "+50% d'XP sur toutes les missions" : "+50% XP on all missions"}
                      </p>
                    </div>
                  </div>
                </div>

                {!isPremium && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-6 flex justify-center"
                  >
                    <Button
                      onClick={() => setIsPremium(true)}
                      className="w-1/2 bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white shadow-lg border-0"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {language === "fr" ? "Passer Premium Maintenant" : "Upgrade to Premium Now"}
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={animateCards ? "show" : "hidden"}
            className="grid gap-4 md:grid-cols-2"
          >
            {missions
              .filter((m) => !m.completed)
              .map((mission, index) => (
                <motion.div key={mission.id} variants={item} whileHover={{ y: -5 }} className="hover-scale">
                  <Card className="border shadow-lg overflow-hidden">
                    <CardHeader className="pb-2 bg-gradient-to-br from-background to-muted/10">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {mission.title}
                            {mission.isNew && (
                              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary border-0 shadow">
                                {language === "fr" ? "Nouveau" : "New"}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription>{mission.description}</CardDescription>
                        </div>
                        <Badge
                          className={
                            mission.difficulty === (language === "fr" ? "Facile" : "Easy")
                              ? "bg-green-500 border-0 shadow"
                              : mission.difficulty === (language === "fr" ? "Moyen" : "Medium")
                                ? "bg-blue-500 border-0 shadow"
                                : "bg-amber-500 border-0 shadow"
                          }
                        >
                          {mission.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-primary" />
                            <span>
                              {language === "fr" ? "Progression" : "Progress"}: {mission.current} / {mission.total}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-500" />
                            <span>
                              {language === "fr" ? "Expire dans" : "Expires in"}: {mission.expiresIn}
                            </span>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary via-purple-500 to-blue-500"
                            style={{ width: `${mission.progress}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">
                          {language === "fr" ? "Récompense" : "Reward"}: {mission.reward}
                        </span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" className="border shadow">
                          {language === "fr" ? "Détails" : "Details"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={animateCards ? "show" : "hidden"}
            className="grid gap-4 md:grid-cols-2"
          >
            {missions
              .filter((m) => m.completed)
              .map((mission, index) => (
                <motion.div key={mission.id} variants={item} whileHover={{ y: -5 }} className="hover-scale">
                  <Card className="border shadow-lg overflow-hidden bg-gradient-to-br from-green-500/5 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            {mission.title}
                          </CardTitle>
                          <CardDescription>{mission.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border border-green-200 bg-green-100/10 text-green-500">
                          {language === "fr" ? "Complété" : "Completed"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {language === "fr" ? "Complété" : "Completed"}: {mission.completedDate}
                            </span>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">
                          {language === "fr" ? "Récompense" : "Reward"}: {mission.reward}
                        </span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" className="border shadow">
                          {language === "fr" ? "Détails" : "Details"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/90">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {language === "fr" ? "Mes Récompenses" : "My Rewards"}
              </CardTitle>
              <CardDescription>
                {language === "fr"
                  ? "Toutes les récompenses que vous avez débloquées"
                  : "All the rewards you have unlocked"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={container}
                initial="hidden"
                animate={animateCards ? "show" : "hidden"}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {tiers.slice(0, currentTier - 1).map((tier, index) => (
                  <motion.div
                    key={`reward-${tier.level}`}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="hover-scale"
                  >
                    <Card className="overflow-hidden border shadow-lg">
                      <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 p-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-background shadow">
                            {language === "fr" ? "Niveau " : "Level "}
                            {tier.level}
                          </Badge>
                          <Badge variant="outline" className="bg-primary/10 text-primary shadow">
                            {language === "fr" ? "Réclamé" : "Claimed"}
                          </Badge>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="rounded-full bg-background p-3 shadow-inner">{tier.freeReward.icon}</div>
                          <div>
                            <h3 className="font-medium">{tier.freeReward.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {language === "fr" ? "Récompense Gratuite" : "Free Reward"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}

                {isPremium &&
                  tiers.slice(0, currentTier - 1).map((tier, index) => (
                    <motion.div
                      key={`premium-reward-${tier.level}`}
                      variants={item}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="hover-scale"
                    >
                      <Card className="overflow-hidden border-amber-500/20 shadow-lg">
                        <div className="bg-gradient-to-r from-amber-500/10 to-pink-500/10 p-4">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className="border-amber-500/20 bg-amber-500/10 text-amber-500 shadow"
                            >
                              <Crown className="mr-1 h-3 w-3" />
                              {language === "fr" ? "Niveau " : "Level "}
                              {tier.level}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-amber-500/20 bg-amber-500/10 text-amber-500 shadow"
                            >
                              {language === "fr" ? "Réclamé" : "Claimed"}
                            </Badge>
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <div className="rounded-full bg-background p-3 text-amber-500 shadow-inner">
                              {tier.premiumReward.icon}
                            </div>
                            <div>
                              <h3 className="font-medium">{tier.premiumReward.name}</h3>
                              <p className="text-sm text-amber-500">
                                {language === "fr" ? "Récompense Premium" : "Premium Reward"}
                              </p>
                            </div>
                          </div>
                          {tier.premiumReward.isPhysical && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-md"
                                onClick={() => handleViewReward(tier.premiumReward)}
                              >
                                {language === "fr" ? "VOIR EN 3D" : "VIEW IN 3D"}
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
