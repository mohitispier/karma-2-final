"use client"

import Link from "next/link"

const footerLinks = {
  pages: [
    { label: "Case Study", href: "#case-studies" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "#privacy" },
    { label: "Terms conditions", href: "#terms" },
    { label: "Refund Policy", href: "#refund" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-4 h-1 bg-[#F97316] rounded-sm" />
                    <div className="w-4 h-1 bg-[#FBBF24] rounded-sm" />
                    <div className="w-4 h-1 bg-[#3B82F6] rounded-sm" />
                  </div>
                </div>
                <span className="text-xl font-semibold text-foreground">CrowdReply</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              The #1 AI Search Visibility Tool. Track, engage, and grow your brand&apos;s presence across AI search engines.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CrowdReply. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
