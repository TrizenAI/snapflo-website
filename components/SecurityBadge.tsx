"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, CheckCircle, Database } from "lucide-react";
import Link from "next/link";

const securityFeatures = [
  {
    icon: Server,
    title: "Multi-Tenant Architecture",
    description: "Each studio operates in a completely isolated environment.",
  },
  {
    icon: Database,
    title: "Data Segregation",
    description: "Photos, customers, billing - all data is strictly separated.",
  },
  {
    icon: Eye,
    title: "No Cross-Studio Visibility",
    description: "Your data is invisible to other studios on the platform.",
  },
  {
    icon: Lock,
    title: "Encrypted Storage",
    description: "All data is encrypted at rest and in transit.",
  },
];

export default function SecurityBadge() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-orb orb-secondary w-[500px] h-[500px] -bottom-48 left-1/4 animate-pulse-glow" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm mb-6">
            <Shield className="w-4 h-4" />
            Enterprise-Grade Security
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
            Your Data, <span className="gradient-text">Your Control</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built from the ground up with security and privacy in mind. 
            Every studio gets their own isolated tenant with complete data separation.
          </p>
        </motion.div>

        {/* Security Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="bg-surface rounded-2xl border border-border p-8">
            {/* Central Platform */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-border">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                  Snapflo Platform
                </span>
              </div>
            </div>

            {/* Tenant Isolation Visualization */}
            <div className="grid md:grid-cols-3 gap-4">
              {["Studio Alpha", "Studio Beta", "Studio Gamma"].map((studio, index) => (
                <motion.div
                  key={studio}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-surface-light rounded-xl border border-border p-4 relative overflow-hidden group hover:border-secondary/50 transition-colors"
                >
                  <div className="absolute top-2 right-2">
                    <Lock className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="font-medium text-text-primary mb-3 text-sm">{studio}</p>
                  <div className="space-y-2">
                    {["Photos", "Customers", "Billing", "Analytics"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-text-muted">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-text-muted flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Isolated Tenant
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block absolute top-[140px] left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
            <div className="hidden md:flex absolute top-[172px] left-1/2 -translate-x-1/2 w-2/3 h-px bg-border" />
          </div>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2 font-[family-name:var(--font-syne)]">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
          >
            Learn more about our security
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

