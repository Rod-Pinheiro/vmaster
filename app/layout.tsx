import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script"

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
      <head>
        <Script defer src="https://umami.pinuslab.dev/script.js" data-website-id="a64a4a47-68fe-4af5-b8bc-223be5fc4cdd"/>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
