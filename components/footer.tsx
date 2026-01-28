import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { INSTAGRAM_LINK } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/vmaster-logo.jpeg"
              alt="V MASTER Logo"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no Instagram"
                  >
                  <Instagram className="w-5 h-5" />
                  vmastercelulares
                  </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} V MASTER – Assistência Técnica de
              Celulares e Notebooks. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
