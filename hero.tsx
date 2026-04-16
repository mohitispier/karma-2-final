"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// Floating Platform Icons
function QuoraIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B92B27] rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg md:text-xl">Q</span>
      </div>
    </div>
  )
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF4500] rounded-full flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white fill-current">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      </div>
    </div>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
    </div>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </div>
    </div>
  )
}

function WikipediaIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
        <span className="text-foreground font-serif font-bold text-lg md:text-xl">W</span>
      </div>
    </div>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
    </div>
  )
}

// AI Model Icons in header
function AIModelIcons() {
  return (
    <div className="flex items-center gap-1">
      {/* ChatGPT */}
      <div className="w-7 h-7 md:w-8 md:h-8 bg-[#10A37F] rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white fill-current">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      </div>
      {/* Perplexity */}
      <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1D1D1F] rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
      {/* Claude */}
      <div className="w-7 h-7 md:w-8 md:h-8 bg-[#CC5500] rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">*</span>
      </div>
    </div>
  )
}

// Curved Connection Lines SVG
function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Lines from platforms to center */}
      <path
        d="M 80 180 Q 300 250 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
      />
      <path
        d="M 130 320 Q 350 330 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
        style={{ animationDelay: "0.2s" }}
      />
      <path
        d="M 60 420 Q 300 400 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
        style={{ animationDelay: "0.4s" }}
      />
      <path
        d="M 1120 180 Q 900 250 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
        style={{ animationDelay: "0.1s" }}
      />
      <path
        d="M 1050 310 Q 850 330 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
        style={{ animationDelay: "0.3s" }}
      />
      <path
        d="M 1100 430 Q 900 400 600 350"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-foreground/10 animate-draw-line"
        style={{ animationDelay: "0.5s" }}
      />
    </svg>
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Connection Lines */}
      <ConnectionLines />

      {/* Floating Platform Icons */}
      <div className="hidden md:block">
        <QuoraIcon className="absolute left-[5%] top-[25%] animate-float opacity-0 animate-fade-in" />
        <RedditIcon className="absolute left-[10%] top-[45%] animate-float-delayed opacity-0 animate-fade-in delay-200" />
        <LinkedInIcon className="absolute left-[3%] top-[60%] animate-float opacity-0 animate-fade-in delay-400" />
        <WikipediaIcon className="absolute right-[5%] top-[25%] animate-float-delayed opacity-0 animate-fade-in delay-100" />
        <FacebookIcon className="absolute right-[8%] top-[48%] animate-float opacity-0 animate-fade-in delay-300" />
        <InstagramIcon className="absolute right-[4%] top-[65%] animate-float-delayed opacity-0 animate-fade-in delay-500" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8 shadow-sm">
            <span className="text-primary font-semibold text-sm">#1</span>
            <span className="text-foreground/80 text-sm">AI Search Visibility Tool</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-4 leading-tight">
            <span className="block">Make</span>
            <span className="inline-flex items-center gap-2 md:gap-3">
              <AIModelIcons />
            </span>
            <span className="block mt-2">Mention Your Brand</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Track your AI search visibility. Engage where AI pulls its answers. Become the brand AI recommends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-base border-foreground/20 hover:bg-foreground/5"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch how it works
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-6 text-base shadow-lg shadow-primary/25"
            >
              Start 7 day free trial
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile floating icons */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <QuoraIcon className="absolute left-[2%] top-[15%] scale-75 animate-float opacity-60" />
        <RedditIcon className="absolute left-[5%] top-[75%] scale-75 animate-float-delayed opacity-60" />
        <FacebookIcon className="absolute right-[2%] top-[20%] scale-75 animate-float opacity-60" />
        <InstagramIcon className="absolute right-[5%] top-[70%] scale-75 animate-float-delayed opacity-60" />
      </div>
    </section>
  )
}
