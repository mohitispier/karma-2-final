"use client"

import { useEffect, useRef, useState } from "react"

// AI Chat icons
function GoogleIcon() {
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    </div>
  )
}

function PerplexityIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#1D1D1F] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  )
}

function ClaudeIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#CC785C] flex items-center justify-center">
      <span className="text-white text-xs font-bold">*</span>
    </div>
  )
}

const aiQuestions = [
  { icon: GoogleIcon, question: "Best CRM for B2B companies?", delay: 0 },
  { icon: PerplexityIcon, question: "Top alternatives to HubSpot", delay: 100 },
  { icon: ClaudeIcon, question: "Free design tools for beginners", delay: 200 },
  { icon: GoogleIcon, question: "What payroll tool do startups use?", delay: 300 },
  { icon: PerplexityIcon, question: "Top analytics tools for ecommerce", delay: 400 },
  { icon: ClaudeIcon, question: "Easy design tools for non designers", delay: 500 },
]

export function ProblemSection() {
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
    <section ref={ref} id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side - Text */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-6">
              <span className="text-foreground/80 text-sm">Problem</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
              AI is the new search engine. Are you visible?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ChatGPT, Perplexity, Gemini and others are replacing Google for buying decisions. They pull answers from community discussions, review sites, and editorial content. The brands in those sources get recommended. The rest get ignored.
            </p>
          </div>

          {/* Right side - AI Questions */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="space-y-4">
              {aiQuestions.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${item.delay + 200}ms` }}
                  >
                    <Icon />
                    <span className="text-foreground font-medium">{item.question}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
