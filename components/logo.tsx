import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">TB</span>
      </div>
      <span className="font-bold text-lg gradient-text">TradingBot</span>
    </div>
  )
}
