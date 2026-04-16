"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CrowdReply?",
    answer: "CrowdReply is the AI search visibility platform that helps brands monitor, engage, and grow their presence across AI search engines like ChatGPT, Perplexity, Gemini, and Claude. We track how AI models see your brand, identify the citation sources they pull from, and give you the tools to engage on those platforms — so your brand becomes the one AI recommends. We combine analytics, social listening, and our proprietary Engagement Engine into one platform.",
  },
  {
    question: "Why does AI search visibility matter for my brand?",
    answer: "AI-powered search engines are increasingly replacing traditional search for buying decisions. When users ask ChatGPT or Perplexity for product recommendations, these AI models pull answers from community discussions, review sites, and editorial content. Brands mentioned in these sources get recommended. If you're not visible in AI search results, you're missing out on a growing channel of qualified leads.",
  },
  {
    question: "How does CrowdReply improve my AI search rankings?",
    answer: "CrowdReply works in three ways: First, we track your visibility across all major AI models so you know where you stand. Second, we identify high-impact conversations on platforms like Reddit, Quora, and Wikipedia that AI models cite. Third, our Engagement Engine helps you participate in these conversations authentically, building your brand's presence in the sources AI pulls from.",
  },
  {
    question: "Which AI models do you track?",
    answer: "We track all major AI search engines including ChatGPT (GPT-4), Perplexity, Google Gemini, Anthropic Claude, and others. Our platform monitors how each model references your brand, tracks citation sources, and benchmarks your visibility against competitors.",
  },
  {
    question: "What platforms can I engage on?",
    answer: "CrowdReply supports engagement on Reddit, Quora, and Facebook. These are the platforms most frequently cited by AI models when generating answers about products, services, and recommendations. We post through established community profiles to ensure authentic engagement.",
  },
  {
    question: "How much does CrowdReply cost?",
    answer: "CrowdReply offers tiered pricing starting at $99/month for our Starter plan, which includes visibility tracking and basic engagement features. We also offer Professional and Enterprise plans with additional features like advanced analytics, more engagement capacity, and dedicated support. Contact us for custom Enterprise pricing.",
  },
  {
    question: "Can I try CrowdReply for free?",
    answer: "Yes! We offer a 7-day free trial with full platform access. You can explore all features, track your AI visibility, and test the Engagement Engine. No credit card required to start. Cancel anytime.",
  },
  {
    question: "Can I use the platform to only engage on social platforms?",
    answer: "Absolutely. While CrowdReply offers comprehensive AI visibility tracking, you can use our Engagement Engine independently for social platform engagement. Many customers start with engagement-only and later add AI tracking as their strategy evolves.",
  },
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
          {/* Left side - Header */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-6">
                <span className="text-foreground/80 text-sm">FAQ</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
                Frequently Asked Questions
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Get answers to common questions here
              </p>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
