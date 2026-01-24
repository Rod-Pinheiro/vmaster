"use client"

import { MapPin, Store, Bike, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5516999999999?text=Olá! Vim pelo site e gostaria de um orçamento."

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          <span className="text-primary">Localização</span> e Atendimento
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Endereço
              </h3>
              <p className="text-muted-foreground">
                Rua Camilo de Mattos, 132 – Centro
                <br />
                Ribeirão Preto – SP
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Atendimento
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Store className="w-5 h-5 text-primary" />
                  Loja física
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Bike className="w-5 h-5 text-primary" />
                  Delivery disponível
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
