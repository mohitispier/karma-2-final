"use client"

import { useEffect, useRef, useState } from "react"

const logos = [
  { name: "KAMATERA", text: "KAMATERA" },
  { name: "ALVAO", text: "ALVAO", color: "#E53935" },
  { name: "XBert", text: "XBert" },
  { name: "Facetune", text: "Facetune" },
  { name: "wodify", text: "wodify" },
  { name: "OPENVPN", text: "OPENVPN" },
]

export function LogoCloud() {
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
    <section ref={ref} className="py-12 md:py-16 border-y border-border/50 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span 
                className="text-lg md:text-xl font-semibold tracking-wide"
                style={{ color: logo.color }}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">4.9</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">5,000+</span> brands
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
