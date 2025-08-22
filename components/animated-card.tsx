"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ title, description, children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <Card
      className={cn("animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
