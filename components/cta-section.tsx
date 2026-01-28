"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Precisa de um <span className="text-primary">orçamento</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato agora mesmo pelo WhatsApp e receba atendimento
            rápido e personalizado.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-10 py-7 gap-3 animate-pulse hover:animate-none"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-7 h-7" />
              CHAMAR NO WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
