"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowRight, Check, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const benefits = [
    {
      title: "Full AI visibility tracking",
      description: "Monitor ChatGPT, Perplexity, Gemini, and more"
    },
    {
      title: "Complete citation analysis",
      description: "Discover every source mentioning your brand"
    },
    {
      title: "Engage on high-traffic threads and posts across social",
      description: "Comment directly on Reddit, Quora, and other citation sources"
    },
    {
      title: "Monitor and outrank competitors",
      description: "See how you compare and where to improve"
    }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-dark-bg flex flex-col min-h-screen">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-semibold text-white">Karma</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                {isLogin ? "Welcome back" : "Start tracking your AI visibility"}
              </h1>
              <p className="text-white/60">
                {isLogin 
                  ? "Enter your credentials to access your dashboard" 
                  : "See where your brand appears in ChatGPT, Perplexity, and Gemini"
                }
              </p>
            </div>

            {/* Google Button */}
            <Button
              variant="outline"
              className="w-full mb-6 bg-white text-dark-bg hover:bg-white/90 border-0 h-12"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-white/40 text-sm">OR</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Form Fields */}
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name" className="text-white/80 text-sm">
                    Full Name<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="James Brown"
                    className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email" className="text-white/80 text-sm">
                  Email Address<span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="my@email.com"
                  className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
                />
                {!isLogin && (
                  <p className="text-xs text-white/40 mt-1">Please use your work email address.</p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-white/80 text-sm">
                  Password<span className="text-primary">*</span>
                </Label>
                <div className="relative mt-1.5">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="min. 8 characters."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-end">
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-medium"
              >
                {isLogin ? "Login" : "Register"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Terms */}
            <p className="text-xs text-white/40 text-center mt-6">
              By continuing, you agree to our{" "}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {" "}and{" "}
              <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between text-sm text-white/40">
          <span>&copy; 2026 Karma</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/60">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex w-1/2 bg-background flex-col justify-center px-12 xl:px-20">
        <div className="max-w-lg">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Try Karma free for 7 days
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Track your AI visibility and start engaging where it matters most.
          </p>

          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="mt-12 relative">
            <div className="bg-dark-bg rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white font-medium">Welcome back, User</p>
                  <p className="text-white/60 text-sm">Your AI visibility progress over the last 30 days.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/60 text-sm">LLM Visibility Score</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold text-white">10%</span>
                    <span className="text-green-400 text-sm">+0.48%</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Citation Coverage</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold text-white">#8</span>
                    <span className="text-white/60 text-sm">Your rank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
