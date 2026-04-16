import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { ProblemSection } from "@/components/problem-section"
import { EngagementEngine } from "@/components/engagement-engine"
import { AISearchSection } from "@/components/ai-search-section"
import { PlatformsSection } from "@/components/platforms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoCloud />
      <ProblemSection />
      <EngagementEngine />
      <AISearchSection />
      <PlatformsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
