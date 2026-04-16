"use client"

import { useEffect, useRef, useState } from "react"

const platforms = [
  {
    name: "Reddit",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FF4500] fill-current">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249z"/>
      </svg>
    ),
    color: "bg-[#FF4500]/10",
  },
  {
    name: "Quora",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#B92B27] fill-current">
        <path d="M12.738 17.914c-.622-1.233-1.239-2.009-2.326-2.009-.509 0-.841.165-1.017.33l-.563-.881c.554-.551 1.364-.881 2.379-.881 1.621 0 2.533.826 3.361 2.009.298-1.149.44-2.532.44-4.151 0-4.947-1.589-7.731-4.673-7.731-3.085 0-4.674 2.784-4.674 7.731 0 4.947 1.589 7.732 4.674 7.732.509 0 .987-.055 1.434-.165l.34.881c-.596.165-1.261.248-1.989.248C5.49 21.027 2 17.428 2 12.331 2 7.124 5.49 3.5 10.124 3.5c4.635 0 8.125 3.624 8.125 8.831 0 2.426-.553 4.464-1.511 5.583zm4.389 1.412L19.5 17.5l2.5 3.75L21 22z"/>
      </svg>
    ),
    color: "bg-[#B92B27]/10",
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1877F2] fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: "bg-[#1877F2]/10",
  },
]

const listeningFeatures = [
  {
    title: "Ranked Threads",
    description: "Threads already pulling thousands of visitors. Your brand needs to be on them.",
  },
  {
    title: "New Threads",
    description: "Be the first to show up in conversations your competitors haven't seen yet.",
  },
  {
    title: "Single Search",
    description: "Not ready for always-on monitoring? Search once, find what matters, move on.",
  },
  {
    title: "Alerts",
    description: "Get notified the moment a conversation worth joining appears. Email or Slack.",
  },
]

export function PlatformsSection() {
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
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Platforms */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-6">
            <span className="text-foreground/80 text-sm">Platforms</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10">
            Engagement Platforms
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${platform.color} flex items-center justify-center`}>
                  {platform.icon}
                </div>
                <span className="text-lg font-semibold text-foreground">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Listening */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-6">
              <span className="text-foreground/80 text-sm">Social Listening</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              Always Listening. Always First.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track and engage on every discussion that could shape how AI sees your brand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {listeningFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
