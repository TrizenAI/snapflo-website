"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle2,
  Database,
  Key,
  Users,
  FileCheck,
  Globe,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

const securityPillars = [
  {
    icon: Server,
    title: "Multi-Tenant Architecture",
    description:
      "Each photography studio operates within its own isolated tenant environment. Your data is logically separated from other studios at every level of the platform.",
  },
  {
    icon: Lock,
    title: "Complete Data Isolation",
    description:
      "Photos, customer information, billing data, and analytics are completely segregated. There is zero cross-tenant data visibility or access possibility.",
  },
  {
    icon: Key,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted both at rest and in transit using industry-standard AES-256 encryption. Your sensitive information is protected at every stage.",
  },
  {
    icon: Fingerprint,
    title: "Secure Authentication",
    description:
      "Multi-factor authentication, secure session management, and role-based access controls ensure only authorized users access your studio data.",
  },
];

const privacyCommitments = [
  {
    icon: Eye,
    title: "No Cross-Studio Visibility",
    description:
      "Studios cannot see, access, or even know about other studios on the platform.",
  },
  {
    icon: Database,
    title: "Your Data, Your Control",
    description:
      "Export your data anytime. Request deletion and we'll remove everything.",
  },
  {
    icon: Users,
    title: "Customer Privacy",
    description:
      "Your customers' information is protected with the same rigor as your studio data.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description:
      "Built to help you meet GDPR, CCPA, and other privacy regulation requirements.",
  },
];

const securityFeatures = [
  "256-bit AES encryption at rest",
  "TLS 1.3 for data in transit",
  "Regular security audits",
  "Automated threat detection",
  "Secure backup systems",
  "99.9% uptime SLA",
  "SOC 2 compliance practices",
  "Regular penetration testing",
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-primary w-[500px] h-[500px] -left-32 -top-32 animate-pulse-glow" />
        <div className="gradient-orb orb-secondary w-[400px] h-[400px] -right-32 top-1/2 animate-pulse-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-text-secondary text-sm">
                Enterprise-Grade Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Your Data,{" "}
              <span className="gradient-text">Completely Secure</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Snapflo is built from the ground up with security and privacy as
              core principles. We understand the trust you place in us with your
              studio&apos;s data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Visual */}
      <section className="section relative py-12">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-surface border border-border rounded-3xl p-8 md:p-12">
                <div className="flex flex-col items-center text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
                  >
                    <ShieldCheck className="w-12 h-12 text-white" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] mb-2">
                    Multi-Tenant Security Model
                  </h2>
                  <p className="text-text-secondary max-w-xl">
                    Each studio operates in complete isolation within our secure
                    platform
                  </p>
                </div>

                {/* Tenant Isolation Visualization */}
                <div className="grid md:grid-cols-3 gap-6">
                  {["Your Studio", "Studio B", "Studio C"].map((studio, i) => (
                    <motion.div
                      key={studio}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className={`relative rounded-2xl border p-6 ${
                        i === 0
                          ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30"
                          : "bg-background border-border opacity-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            i === 0 ? "bg-primary/20" : "bg-surface"
                          }`}
                        >
                          <Lock
                            className={`w-5 h-5 ${
                              i === 0 ? "text-primary" : "text-text-muted"
                            }`}
                          />
                        </div>
                        <div>
                          <p
                            className={`font-semibold ${
                              i === 0 ? "text-text-primary" : "text-text-muted"
                            }`}
                          >
                            {studio}
                          </p>
                          <p className="text-xs text-text-muted">
                            {i === 0 ? "Your isolated tenant" : "Isolated"}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {["Photos", "Clients", "Billing", "Analytics"].map(
                          (item) => (
                            <div
                              key={item}
                              className={`h-2 rounded-full ${
                                i === 0 ? "bg-primary/30" : "bg-surface-light"
                              }`}
                              style={{ width: `${60 + Math.random() * 40}%` }}
                            />
                          )
                        )}
                      </div>

                      {i === 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-text-muted text-sm">
                    <Lock className="w-4 h-4 inline mr-1" />
                    Each tenant is cryptographically isolated with unique
                    encryption keys
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-syne)]">
              Built on <span className="gradient-text">Strong Foundations</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Our security architecture is designed to protect your data at
              every level.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {securityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-glow"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-syne)] text-text-primary">
                      {pillar.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Commitments */}
      <section className="section relative">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <Eye className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">
                Privacy First
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-syne)]">
              Our Privacy <span className="gradient-text-secondary">Commitments</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We take your privacy seriously. Here&apos;s what we promise.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-syne)] text-text-primary">
                  {commitment.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="gradient-orb orb-accent w-[400px] h-[400px] right-0 top-1/2 -translate-y-1/2 animate-pulse-glow opacity-30" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-syne)]">
                Security <span className="gradient-text">Features</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                We implement industry-leading security measures to protect your
                data and give you peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-text-primary text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-3xl" />
                <div className="relative bg-surface border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">
                        Global Infrastructure
                      </p>
                      <p className="text-xs text-text-muted">
                        Distributed & redundant
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Uptime", value: "99.99%", color: "green" },
                      { label: "Security Score", value: "A+", color: "green" },
                      {
                        label: "Data Centers",
                        value: "Multi-region",
                        color: "accent",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between p-3 rounded-xl bg-background"
                      >
                        <span className="text-text-secondary text-sm">
                          {stat.label}
                        </span>
                        <span
                          className={`font-semibold ${
                            stat.color === "green"
                              ? "text-green-500"
                              : "text-accent"
                          }`}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Experience enterprise-grade security with Snapflo. Your data is safe with us."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
        secondaryCTA="View Privacy Policy"
        secondaryHref="/privacy"
      />
    </div>
  );
}
