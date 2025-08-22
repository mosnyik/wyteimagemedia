"use client"

import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactBanner() {
  return (
    <div className="bg-primary text-white py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+44 20 7946 0958</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@wyteimage.com</span>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="hidden md:block">
          Get Quote
        </Button>
      </div>
    </div>
  )
}

export default ContactBanner
