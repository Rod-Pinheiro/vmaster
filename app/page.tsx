import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { AboutSection } from "@/components/about-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <AboutSection />
      <GoogleReviewsSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
