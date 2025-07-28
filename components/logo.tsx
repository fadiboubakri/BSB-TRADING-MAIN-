import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          className={cn("h-full w-auto", sizeClasses[size])}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
            stroke="url(#paint0_linear)"
            strokeWidth="8"
          />
          <path d="M50 30V70" stroke="url(#paint1_linear)" strokeWidth="8" strokeLinecap="round" />
          <path d="M35 30V70" stroke="url(#paint2_linear)" strokeWidth="8" strokeLinecap="round" />
          <path d="M65 30V70" stroke="url(#paint3_linear)" strokeWidth="8" strokeLinecap="round" />
          <defs>
            <linearGradient id="paint0_linear" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="50.5" y1="30" x2="50.5" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="35.5" y1="30" x2="35.5" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="65.5" y1="30" x2="65.5" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="ml-2 font-bold text-xl gradient-text">SBSTrading</span>
    </div>
  )
}
