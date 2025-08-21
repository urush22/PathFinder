"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { PathFinderLogo } from "./pathfinder-logo"
import { Button } from "./ui/button"
import { User, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface SharedHeaderProps {
  showAuthButtons?: boolean
  userName?: string
}

export function SharedHeader({ showAuthButtons = false, userName = "Alex Johnson" }: SharedHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem("user")
    localStorage.removeItem("authToken")
    // Redirect to login page
    router.push("/login")
  }

  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/resume-parser", label: "Resume Parser" },
    { href: "/interview-practice", label: "Interview" },
    { href: "/profile", label: "Profile" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PathFinderLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {showAuthButtons ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}
