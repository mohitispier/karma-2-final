"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote: "I've never seen such huge ROAS anywhere else. I was able to take my e-com stores to rank in almost all of our core topics in our niche, which has led to over $1M extra revenue since January.",
    author: "Marcus A",
    company: "eCom",
    image: null,
  },
  {
    quote: "The tool really made our work so much easier, we're able to give our clients not only good results, but with less effort from our side. We've been with CrowdReply since they started, primarily for Reddit marketing, but now we're also able to offer AI visibility to our clients.",
    author: "Michal H",
    company: "Red-engage",
    image: null,
  },
  {
    quote: "Our app launched 4 months ago and ranking on LLM's have driven more traffic than paid ads for us. We've tried to get our brand into all the relevant Reddit citations that we see LLM's citing from.",
    author: "Adrina W",
    company: "App",
    image: null,
  },
  {
    quote: "We've had an incredible ROI using CrowdReply at our app, Optimal Bet. In fact, it's our best marketing channel!!",
    author: "Patrick",
    company: "Optimal Bet",
    image: null,
  },
]

const stats = [
  { value: "+47%", label: "Increased LLM visibility" },
  { value: "75%", label: "Citations coverage" },
  { value: "2X", label: "Increased sales" },
]

export function TestimonialsSection() {
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
            <span className="text-foreground/80 text-sm">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            Don&apos;t Take Our Word for It
          </h2>
          
          <p className="text-lg text-muted-foreground mt-4">
            See how teams are turning AI search gaps into competitive advantages.
          </p>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <span className="text-foreground/80 text-sm">Case Studies</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-6 mb-4">
            See how brands improved their visibility
          </h3>
        </div>
      </div>
    </section>
  )
}
