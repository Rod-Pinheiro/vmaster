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
                src="/images/about-me.jpeg"
                alt="Vinícius Soares - V MASTER"
                width={200}
                height={200}
                className="w-60 h-auto md:w-72 md:h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Meu nome é Vinícius Soares, atuo com assistência técnica em celulares e notebooks desde 2014. Iniciei minha formação em São Paulo, com cursos especializados, e adquiri grande parte da minha experiência em lojas tradicionais e assistências técnicas reconhecidas, realizando milhares de reparos ao longo dos anos.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
                Atuei de forma independente, investi em diversas especializações e também tive experiência em assistência autorizada Apple, seguindo padrões rigorosos de qualidade e processos.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
                Hoje, a <span className="text-primary font-semibold">V MASTER</span> nasce com o propósito de oferecer um atendimento rápido, transparente e seguro, com reparos feitos na hora, na frente do cliente ou por meio do serviço delivery, levando comodidade até você. Trabalhamos com transparência, peças de qualidade e garantia em todos os serviços. A V MASTER é uma assistência técnica especializada em celulares e notebooks, localizada no centro de Ribeirão Preto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
