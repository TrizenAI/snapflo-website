"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-orb orb-primary w-[500px] h-[500px] top-0 right-0 animate-pulse-glow" />
      <div className="gradient-orb orb-secondary w-[600px] h-[600px] bottom-0 left-0 animate-pulse-glow" />
      <div className="gradient-orb orb-accent w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" />

      <div className="container relative z-10 text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-text-secondary">
            Trusted by 500+ Photo Studios
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-syne)] leading-tight"
        >
          Smart Photo Delivery &<br />
          <span className="gradient-text">Studio Management</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Deliver photos faster, bill smarter, and communicate seamlessly. 
          The all-in-one platform built for modern photography businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/features" className="btn btn-secondary text-base px-8 py-4">
            <Play className="w-5 h-5" />
            See How It Works
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Photo Delivery",
            "Studio Billing",
            "WhatsApp Integration",
            "Secure Galleries",
            "Real-time Analytics",
          ].map((feature, index) => (
            <span
              key={feature}
              className="px-4 py-2 rounded-full bg-surface-light border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-colors"
            >
              {feature}
            </span>
          ))}
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/50">
            {/* Mock Dashboard */}
            <div className="bg-surface p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-text-muted">Snapflo Dashboard</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Active Events", value: "24", change: "+12%" },
                  { label: "Photos Delivered", value: "8,432", change: "+28%" },
                  { label: "Revenue", value: "$45,230", change: "+18%" },
                  { label: "Customer Rating", value: "4.9", change: "+0.2" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-surface-light rounded-xl p-4 border border-border"
                  >
                    <p className="text-xs text-text-muted mb-1">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-bold text-text-primary font-[family-name:var(--font-syne)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-400 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-surface-light rounded-xl p-4 border border-border h-40 flex items-center justify-center">
                  <div className="flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                      <div
                        key={i}
                        className="w-4 md:w-6 bg-gradient-to-t from-primary to-secondary rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-surface-light rounded-xl p-4 border border-border h-40">
                  <p className="text-xs text-text-muted mb-3">Recent Activity</p>
                  <div className="space-y-2">
                    {["Wedding Photos Delivered", "Invoice Paid - $2,400", "New Gallery Created"].map((activity, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-text-secondary truncate">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}

