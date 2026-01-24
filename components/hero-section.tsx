"use client"

import { MessageCircle, Smartphone, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5516999999999?text=Olá! Vim pelo site e gostaria de um orçamento."

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <Laptop className="w-12 h-12 md:w-14 md:h-14 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Assistência Técnica Especializada em{" "}
            <span className="text-primary">Celulares</span> e{" "}
            <span className="text-primary">Notebooks</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Conserto rápido • Garantia • Atendimento em loja e delivery
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 gap-3"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
