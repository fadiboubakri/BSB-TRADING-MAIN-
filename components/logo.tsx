import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
        <span className="text-white font-bold text-lg">B</span>
      </div>
      <span className="font-bold text-xl neon-text">BSBridge</span>
    </div>
  )
}
