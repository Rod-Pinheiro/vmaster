import {
  Smartphone,
  Laptop,
  MonitorSmartphone,
  Battery,
  Plug,
  RefreshCw,
  Power,
  HardDrive,
  MemoryStick,
  Monitor,
  Fan,
  Gauge,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cellphoneServices = [
  { icon: MonitorSmartphone, label: "Troca de tela" },
  { icon: Battery, label: "Troca de bateria" },
  { icon: Plug, label: "Conector de carga" },
  { icon: RefreshCw, label: "Software e atualizações" },
  { icon: Power, label: "Aparelho não liga / molhou" },
  { icon: MemoryStick, label: "Reparo de placa" },
]

const notebookServices = [
  { icon: RefreshCw, label: "Formatação" },
  { icon: HardDrive, label: "Upgrade (SSD e Memória)" },
  { icon: Monitor, label: "Troca de tela" },
  { icon: Fan, label: "Limpeza interna" },
  { icon: Gauge, label: "Correção de lentidão" },
  { icon: MemoryStick, label: "Reparo de placa" },

]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-foreground">
                <Smartphone className="w-8 h-8 text-primary" />
                Celulares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {cellphoneServices.map((service) => (
                  <li key={service.label} className="flex items-center gap-3">
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-foreground">
                <Laptop className="w-8 h-8 text-primary" />
                Notebooks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {notebookServices.map((service) => (
                  <li key={service.label} className="flex items-center gap-3">
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
