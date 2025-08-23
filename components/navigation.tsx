"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/awards", label: "Awards" },
    { href: "/profile", label: "Profile Magazine" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/wyte-logo.png" alt="Wyte Image Media" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-all duration-200",
                    isActive ? "text-primary" : "text-foreground hover:text-primary",
                    isActive &&
                      "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button className="animate-pulse-glow" onClick={()=>{router.push("/contact")}}>Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-foreground hover:text-primary hover:bg-muted",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="px-3 py-2">
              <Button className="w-full">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
