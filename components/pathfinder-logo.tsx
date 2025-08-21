import { Compass, Navigation, Zap } from "lucide-react"

interface PathFinderLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function PathFinderLogo({ size = "md", showText = true, className = "" }: PathFinderLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Enhanced PathFinder Logo with layered design */}
      <div className="relative">
        <div
          className={`bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center ${sizeClasses[size]} shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl`}
        >
          <div className="relative">
            <Compass className={`${iconSizeClasses[size]} text-white animate-spin-slow`} />
            {/* Animated navigation arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Navigation className="w-3 h-3 text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>
        {/* Floating elements around logo */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
        <Zap className="absolute -top-2 -left-2 w-4 h-4 text-yellow-400 animate-ping opacity-75" />
      </div>
      {showText && (
        <span
          className={`font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent ${textSizeClasses[size]} hover:from-emerald-500 hover:to-teal-500 transition-all duration-300`}
        >
          PathFinder
        </span>
      )}
    </div>
  )
}
