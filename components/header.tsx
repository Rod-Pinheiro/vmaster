"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { WHATSAPP_LINK } from "@/lib/constants"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/vmaster-logo.jpeg"
            alt="V MASTER Logo"
            width={120}
            height={60}
            className="h-10 w-auto"
          />
        </div>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
