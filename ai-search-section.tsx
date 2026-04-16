"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, Target, FileText, Database } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "AI Search Visibility Tracking",
    description: "Track your visibility score across ChatGPT, Perplexity, Gemini, and Claude. Benchmark against competitors and monitor ranking shifts over time.",
  },
  {
    icon: Target,
    title: "Prompt Tracking",
    description: "Track which prompts trigger your brand in AI answers. See frequency, trends, and competitor coverage.",
  },
  {
    icon: FileText,
    title: "Powerful Reporting",
    description: "Shareable reports for stakeholders and clients. Export visibility trends, citation data, and engagement ROI.",
  },
  {
    icon: Database,
    title: "Citation Source Intelligence",
    description: "See which domains AI models cite for your category. Find gaps where competitors appear and you don't.",
  },
]

export function AISearchSection() {
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
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-6">
            <span className="text-foreground/80 text-sm">AI Search</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
            The Intelligence Layer Behind
            <br />
            Your AI Presence
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor every AI model, track citation sources and spot opportunities before competitors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
