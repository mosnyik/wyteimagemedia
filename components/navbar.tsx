"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Wyte Image Media" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                pathname === "/"
                  ? "text-green-700 font-semibold bg-green-100"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                pathname.startsWith("/services")
                  ? "text-green-700 font-semibold bg-green-100"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                pathname === "/about"
                  ? "text-green-700 font-semibold bg-green-100"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-green-700 font-semibold bg-green-100"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 mt-4">
              <Link
                href="/"
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  pathname === "/"
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  pathname === "/about"
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  pathname === "/contact"
                    ? "text-green-700 font-semibold bg-green-100"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-fit transition-colors duration-300 mt-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
