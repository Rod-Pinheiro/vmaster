import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-8">
            Sobre a <span className="text-primary">V MASTER</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/vmaster-logo.jpeg"
                alt="V MASTER Logo"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg"
              />
            </div>
            <div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                A <span className="text-primary font-semibold">V MASTER</span> é
                uma assistência técnica especializada em celulares e notebooks,
                localizada no centro de Ribeirão Preto. Trabalhamos com
                transparência, peças de qualidade e garantia em todos os
                serviços. Nosso objetivo é oferecer soluções rápidas e
                confiáveis, tanto em loja física quanto através de atendimento
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
