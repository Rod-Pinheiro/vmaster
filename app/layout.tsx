import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'V MASTER - Assistência Técnica de Celulares e Notebooks',
  description: 'Assistência técnica especializada em celulares e notebooks em Ribeirão Preto. Troca de tela, bateria, formatação, upgrades e mais. Atendimento rápido com garantia.',
  generator: 'v0.app',
  icons: {
    icon: '/vmaster-logo.ico',
    shortcut: '/vmaster-logo.ico',
    apple: '/vmaster-logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
