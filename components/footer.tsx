import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/vmaster-logo.jpeg"
              alt="V MASTER Logo"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} V MASTER – Assistência Técnica de
            Celulares e Notebooks. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
