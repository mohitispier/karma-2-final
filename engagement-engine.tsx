"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Edit3, Send, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

// AI Model Icons
function AIModelIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${className}`}>
      {children}
    </div>
  )
}

const aiModels = [
  { bg: "bg-white border border-gray-200", icon: <GoogleColorIcon /> },
  { bg: "bg-[#1D1D1F]", icon: <PerplexityWhiteIcon /> },
  { bg: "bg-[#CC785C]", icon: <span className="text-white text-xl">*</span> },
  { bg: "bg-gradient-to-br from-blue-400 to-cyan-400", icon: <span className="text-white text-sm font-bold">G</span> },
  { bg: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500", icon: <ColorfulIcon /> },
  { bg: "bg-[#00D4AA]", icon: <span className="text-white text-sm font-bold">✦</span> },
]

function GoogleColorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function PerplexityWhiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function ColorfulIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
      <polygon points="12,2 22,20 2,20" />
    </svg>
  )
}

const steps = [
  {
    icon: Search,
    title: "Find High-Impact Conversations",
    description: "Surface threads across Reddit, Quora, Wikipedia, and blog sites — filtered by relevance and AI citation potential.",
  },
  {
    icon: Edit3,
    title: "Craft Your Response",
    description: "Write your own or let AI generate a reply matched to context.",
  },
  {
    icon: Send,
    title: "We Post for You",
    description: "Posted through trusted community profiles on your behalf.",
  },
  {
    icon: Bell,
    title: "Never Miss a New Conversation",
    description: "Spot emerging threads in real time. Get in before AI picks them up.",
  },
]

export function EngagementEngine() {
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
    <section ref={ref} className="py-20 md:py-32 bg-dark-bg text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6">
            <span className="text-white/80 text-sm">Your Competitive Moat</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Meet the <span className="text-primary">Engagement Engine</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Other tools show you where you&apos;re missing. CrowdReply gets you in.
          </p>
        </div>

        {/* AI Models Flow */}
        <div className={`mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {aiModels.map((model, index) => (
              <AIModelIcon key={index} className={model.bg}>
                {model.icon}
              </AIModelIcon>
            ))}
          </div>
          
          {/* Connection lines */}
          <svg className="w-full h-24 md:h-32" viewBox="0 0 800 100" preserveAspectRatio="xMidYMid meet">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M ${100 + i * 120} 0 Q ${400} 60 400 100`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary/40"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </svg>
          
          {/* Your Brand badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/30">
              <span className="text-primary font-medium">Your Brand</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base">
            Get started
          </Button>
        </div>
      </div>
    </section>
  )
}
