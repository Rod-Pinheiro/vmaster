"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5516999999999?text=Olá! Vim pelo site e gostaria de um orçamento."

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  )
}
