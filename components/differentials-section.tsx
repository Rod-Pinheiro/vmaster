import {
  FileText,
  ShieldCheck,
  Zap,
  Store,
  Truck,
} from "lucide-react"

const differentials = [
  { icon: FileText, label: "Orçamento sem compromisso" },
  { icon: ShieldCheck, label: "Garantia nos serviços" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Store, label: "Loja física no centro" },
  { icon: Truck, label: "Delivery disponível" },
]

export function DifferentialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          Por que escolher a <span className="text-primary">V MASTER</span>?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {differentials.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
