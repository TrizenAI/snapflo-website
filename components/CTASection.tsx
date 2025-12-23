"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Studio?",
  description = "Join hundreds of photography studios already using Snapflo to deliver photos faster and grow their business.",
  primaryCTA = "Request a Demo",
  primaryHref = "/contact",
  secondaryCTA = "Explore Features",
  secondaryHref = "/features",
}: CTASectionProps) {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="gradient-orb orb-primary w-[500px] h-[500px] -left-64 top-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="gradient-orb orb-secondary w-[400px] h-[400px] -right-48 top-1/2 -translate-y-1/2 animate-pulse-glow" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryCTA}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={secondaryHref} className="btn btn-secondary">
              {secondaryCTA}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
