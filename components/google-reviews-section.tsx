"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const reviews = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    date: "2 semanas atrás",
    comment: "Serviço excelente! Trocaram a tela do meu celular em menos de 2 horas. Preço justo e atendimento muito profissional. Recomendo!",
    avatar: "JS"
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 5,
    date: "1 mês atrás",
    comment: "Levei meu notebook para formatar e upgrade de SSD. Ficou muito rápido e o atendimento foi impecável. Voltarei com certeza!",
    avatar: "MS"
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    rating: 4,
    date: "3 semanas atrás",
    comment: "Repararam o conector de carga do meu celular. O serviço foi bom, mas demorou um pouco mais do que o esperado. No geral, satisfeito.",
    avatar: "CO"
  },
  {
    id: 4,
    name: "Ana Costa",
    rating: 5,
    date: "2 meses atrás",
    comment: "Atendimento 5 estrelas! Resolveram o problema de software do meu celular que outras lojas não conseguiam. Equipe muito qualificada.",
    avatar: "AC"
  },
  {
    id: 5,
    name: "Roberto Lima",
    rating: 5,
    date: "1 semana atrás",
    comment: "Fiz a troca de bateria do meu iPhone e ficou perfeito! Preço melhor que concorrentes e serviço rápido. Muito recomendado!",
    avatar: "RL"
  },
  {
    id: 6,
    name: "Fernanda Dias",
    rating: 4,
    date: "1 mês atrás",
    comment: "Limpeza interna no notebook que estava superaquecendo. Resolvido o problema e o atendimento foi ótimo. Nota 10!",
    avatar: "FD"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

export function GoogleReviewsSection() {
  const averageRating = 4.8
  const totalReviews = 127

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Avaliações dos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Veja o que nossos clientes dizem sobre nosso serviço
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={5} />
                <span className="text-2xl font-bold text-foreground">
                  {averageRating}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em {totalReviews} avaliações
              </p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Google Reviews
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-4 h-4 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-2">
                    {review.comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=v+master+ribeirao+preto&newwindow=1&sca_esv=bc6b0ee74de4300f&sxsrf=ANbL-n4n0u_rPI4R1m2Bm_XnSki79QwdLA%3A1769559570357&source=hp&ei=ElZ5afSrE7rY5OUP7ty6mQk&iflsig=AFdpzrgAAAAAaXlkIg7bbCUpuo8r_8xbg_YF8Wj9l_Cz&oq=v+master+ribei&gs_lp=Egdnd3Mtd2l6Ig52IG1hc3RlciByaWJlaSoCCAAyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FSPQeUABYxhVwAHgAkAEAmAGAAqABihaqAQUwLjcuN7gBA8gBAPgBAZgCDqACwhbCAgQQIxgnwgIKECMYgAQYigUYJ8ICEBAjGMkCGPAFGIAEGIoFGCfCAg4QLhiABBiKBRixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIIEAAYgAQYsQPCAgQQABgDwgIIEC4YgAQYsQPCAg4QABiABBiKBRixAxiDAcICBRAAGIAEwgIIEC4YsQMYgATCAgUQLhiABMICCxAAGIAEGLEDGIMBwgIOEC4YgAQYxwEYrwEYjgXCAgsQLhivARjHARiABMICDhAuGK8BGMcBGMsBGIAEwgIIEAAYgAQYywHCAgYQABgWGB7CAggQABgWGB4YCpgDAJIHBTAuNy43oAeLdrIHBTAuNy43uAfCFsIHBjAuMTIuMsgHIoAIAQ&sclient=gws-wiz#lrd=0xa0067dc113b987a3:0xd76fe0cd9ebc8809,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Star className="w-5 h-5" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}