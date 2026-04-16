"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#case-studies", label: "Case Studies" },
    { href: "#benefits", label: "Benefits" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQs" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-1 bg-[#F97316] rounded-sm" />
                  <div className="w-4 h-1 bg-[#FBBF24] rounded-sm" />
                  <div className="w-4 h-1 bg-[#3B82F6] rounded-sm" />
                </div>
              </div>
              <span className="text-xl font-semibold text-foreground">Karma</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5"
            >
              Login
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full mt-2"
              >
                Login
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
