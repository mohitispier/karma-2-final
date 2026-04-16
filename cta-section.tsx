"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Platform icons floating around CTA
const floatingIcons = [
  { type: "facebook", position: "left-[5%] top-[30%]", size: "w-14 h-14", delay: "0s" },
  { type: "google", position: "left-[15%] top-[60%]", size: "w-12 h-12", delay: "0.2s" },
  { type: "reddit", position: "left-[25%] top-[35%]", size: "w-16 h-16 bg-primary", delay: "0.4s" },
  { type: "chatgpt", position: "right-[35%] top-[25%]", size: "w-10 h-10", delay: "0.1s" },
  { type: "perplexity", position: "right-[25%] top-[55%]", size: "w-20 h-10 bg-[#A5C4E3]", delay: "0.3s" },
  { type: "quora", position: "right-[8%] top-[65%]", size: "w-14 h-14", delay: "0.5s" },
]

export function CTASection() {
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
    <section ref={ref} className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute left-[5%] top-[20%] w-32 h-16 bg-[#F5F0E8] rounded-full rotate-[-15deg] opacity-80" />
        <div className="absolute left-[10%] top-[50%] w-20 h-36 bg-foreground rounded-full rotate-[10deg] opacity-90" />
        <div className="absolute left-[20%] top-[30%] w-28 h-14 bg-primary rounded-full rotate-[-5deg]" />
        
        <div className="absolute right-[5%] top-[25%] w-24 h-36 bg-foreground rounded-full rotate-[15deg] opacity-90" />
        <div className="absolute right-[15%] top-[55%] w-36 h-12 bg-[#A5C4E3] rounded-full rotate-[-10deg]" />
        <div className="absolute right-[8%] top-[70%] w-16 h-16 bg-[#B92B27] rounded-full" />
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <path d="M 100 100 Q 400 200 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
          <path d="M 150 200 Q 400 250 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
          <path d="M 200 300 Q 400 250 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
          <path d="M 1100 100 Q 800 200 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
          <path d="M 1050 200 Q 800 250 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
          <path d="M 1000 300 Q 800 250 600 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-white/10" />
        </svg>

        {/* Platform icons */}
        <div className="absolute left-[8%] top-[40%] w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center animate-float">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        
        <div className="absolute left-[25%] top-[65%] w-10 h-10 bg-white rounded-lg flex items-center justify-center animate-float-delayed shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        
        <div className="absolute left-[40%] top-[20%] w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center animate-float">
          <span className="text-white font-bold">✦</span>
        </div>
        
        <div className="absolute right-[30%] top-[70%] w-10 h-10 bg-[#FF4500] rounded-full flex items-center justify-center animate-float-delayed">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
            <circle cx="9" cy="13" r="1.5"/>
            <circle cx="15" cy="13" r="1.5"/>
          </svg>
        </div>
        
        <div className="absolute right-[20%] top-[30%] w-10 h-10 bg-[#1D1D1F] rounded-lg flex items-center justify-center animate-float">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        
        <div className="absolute right-[10%] top-[50%] w-12 h-12 bg-[#B92B27] rounded-full flex items-center justify-center animate-float-delayed">
          <span className="text-white font-bold text-lg">Q</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 leading-tight">
            Your Brand Deserves to Be
            <br />
            <span className="text-primary">the Answer</span>
          </h2>
          
          <p className="text-lg text-white/70 mb-10">
            Start your 7-day free trial. Full platform access. Cancel anytime.
          </p>
          
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25"
          >
            Start your 7-day free trial
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
