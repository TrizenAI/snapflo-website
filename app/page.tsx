"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Upload,
  Image,
  Share2,
  CreditCard,
  MessageCircle,
  BarChart3,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  Lock,
  Eye,
  TrendingUp,
  Camera,
  Cake,
  Heart,
  PartyPopper,
  Home as HomeIcon,
  Baby,
  GraduationCap,
  Calendar,
  ImageIcon,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Upload,
    title: "Easy Photo Upload",
    description:
      "Upload photos for any event with our intuitive interface. Drag, drop, and organize effortlessly.",
  },
  {
    icon: Zap,
    title: "Auto Compression",
    description:
      "Automatic smart compression for faster delivery without compromising quality.",
  },
  {
    icon: Share2,
    title: "Secure Gallery Sharing",
    description:
      "Share secure galleries with customers via private links with password protection.",
  },
  {
    icon: Image,
    title: "Photo Selection",
    description:
      "Let customers browse and select their favorite photos with an intuitive workflow.",
  },
  {
    icon: CreditCard,
    title: "Billing & Invoicing",
    description:
      "Generate professional invoices and manage payments seamlessly in one place.",
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Notifications",
    description:
      "Send updates via WhatsApp, SMS, and email to keep customers informed.",
  },
];

const analyticsFeatures = [
  { icon: TrendingUp, text: "Track customer engagement rates" },
  { icon: BarChart3, text: "Monitor selection completion status" },
  { icon: Eye, text: "View event performance insights" },
  { icon: Users, text: "Analyze customer response times" },
];

const securityPoints = [
  "Multi-tenant architecture with complete data isolation",
  "Each studio operates in a secure, private tenant",
  "No cross-studio data visibility or access",
  "Enterprise-grade encryption at rest and in transit",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-primary w-[600px] h-[600px] -left-48 -top-48 animate-pulse-glow" />
        <div className="gradient-orb orb-secondary w-[500px] h-[500px] -right-32 top-1/4 animate-pulse-glow" />
        <div className="gradient-orb orb-accent w-[400px] h-[400px] left-1/4 -bottom-32 animate-pulse-glow opacity-40" />

        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-text-secondary text-sm">
                Trusted by 500+ Photography Studios
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-syne)] leading-tight">
              Smart Photo Delivery &{" "}
              <span className="gradient-text">Studio Management</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Deliver photos faster, bill smarter, gain insights, and
              communicate seamlessly — all within a secure, privacy-first
              platform built for modern photography businesses.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn btn-primary text-base">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/features" className="btn btn-secondary text-base">
                Explore Features
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-24 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface p-2 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative rounded-xl overflow-hidden bg-background border border-border">
                {/* Mock Dashboard */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden md:flex flex-col w-16 bg-surface border-r border-border p-3 gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2 mt-4">
                      {[BarChart3, Image, Users, CreditCard, MessageCircle].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            i === 1 ? "bg-primary/20 text-primary" : "text-text-muted hover:bg-surface-light"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-4 md:p-6">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="hidden sm:flex items-center gap-2 h-8 px-4 bg-surface rounded-full border border-border">
                        <div className="w-3 h-3 rounded-full bg-text-muted/30" />
                        <span className="text-text-muted text-xs">Search events, clients...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                          JS
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {[
                        { label: "Total Events", value: "127", change: "+12%", color: "text-green-500" },
                        { label: "Photos Delivered", value: "12.4K", change: "+8%", color: "text-green-500" },
                        { label: "Active Clients", value: "89", change: "+5", color: "text-green-500" },
                        { label: "Revenue", value: "$24.8K", change: "+18%", color: "text-green-500" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                          className="bg-surface rounded-xl p-3 md:p-4 border border-border"
                        >
                          <p className="text-text-muted text-[10px] md:text-xs mb-1">
                            {stat.label}
                          </p>
                          <div className="flex items-end justify-between">
                            <p className="text-lg md:text-2xl font-bold font-[family-name:var(--font-syne)] text-text-primary">
                              {stat.value}
                            </p>
                            <span className={`text-[10px] md:text-xs font-medium ${stat.color}`}>
                              {stat.change}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Recent Events Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                        Recent Events
                      </h3>
                      <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View All</span>
                    </div>

                    {/* Event Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {[
                        { type: "Wedding", client: "Priya & Rahul", photos: 248, date: "Dec 20", icon: Heart, gradient: "from-rose-500 to-pink-600", status: "Delivered" },
                        { type: "Birthday", client: "Arjun (5th)", photos: 86, date: "Dec 18", icon: Cake, gradient: "from-amber-500 to-orange-600", status: "Selecting" },
                        { type: "House Party", client: "Sharma Family", photos: 124, date: "Dec 15", icon: HomeIcon, gradient: "from-emerald-500 to-teal-600", status: "Delivered" },
                        { type: "Baby Shower", client: "Meera & Karthik", photos: 95, date: "Dec 12", icon: Baby, gradient: "from-purple-500 to-violet-600", status: "Editing" },
                        { type: "Graduation", client: "Ananya K.", photos: 156, date: "Dec 10", icon: GraduationCap, gradient: "from-blue-500 to-indigo-600", status: "Delivered" },
                        { type: "Anniversary", client: "Mr. & Mrs. Iyer", photos: 112, date: "Dec 8", icon: Heart, gradient: "from-pink-500 to-rose-600", status: "Delivered" },
                        { type: "Corporate", client: "TechCorp Event", photos: 320, date: "Dec 5", icon: Calendar, gradient: "from-cyan-500 to-blue-600", status: "Selecting" },
                        { type: "Engagement", client: "Sneha & Vikram", photos: 178, date: "Dec 2", icon: Heart, gradient: "from-red-500 to-pink-600", status: "Delivered" },
                      ].map((event, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 1.0 + i * 0.05 }}
                          className="bg-surface rounded-xl border border-border p-3 hover:border-border-light transition-all cursor-pointer group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                              <event.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                              event.status === "Delivered" 
                                ? "bg-green-500/10 text-green-500" 
                                : event.status === "Selecting"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}>
                              {event.status}
                            </span>
                          </div>
                          <h4 className="text-xs font-semibold text-text-primary mb-0.5 truncate">{event.type}</h4>
                          <p className="text-[10px] text-text-muted truncate mb-2">{event.client}</p>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-text-muted flex items-center gap-1">
                              <ImageIcon className="w-3 h-3" />
                              {event.photos}
                            </span>
                            <span className="text-text-muted">{event.date}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Action Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.5 }}
                      className="mt-4 flex items-center justify-between p-3 bg-surface rounded-lg border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-text-secondary">8 events this month</span>
                        <span className="text-xs text-green-500 font-medium">• 1,319 photos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-xs bg-surface-light rounded-lg text-text-secondary border border-border hover:bg-border transition-colors">
                          Export Report
                        </button>
                        <button className="px-3 py-1.5 text-xs bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                          + New Event
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section relative">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-syne)]">
              Everything You Need to{" "}
              <span className="gradient-text">Run Your Studio</span>
            </h2>
            <p className="text-text-secondary text-lg">
              From photo delivery to billing, Snapflo provides all the tools
              modern photography studios need to succeed.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
        <div className="gradient-orb orb-secondary w-[600px] h-[600px] -right-64 top-1/2 -translate-y-1/2 animate-pulse-glow opacity-40" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <BarChart3 className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-medium">
                  Analytics & Insights
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-syne)]">
                Data-Driven Decisions for{" "}
                <span className="gradient-text-secondary">Your Studio</span>
              </h2>

              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                Get actionable insights into your studio&apos;s performance.
                Track customer engagement, monitor selection rates, and optimize
                your workflow with real-time analytics.
              </p>

              <ul className="space-y-4">
                {analyticsFeatures.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-text-primary">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-3xl" />
                <div className="relative bg-surface border border-border rounded-2xl p-6 md:p-8">
                  {/* Mock Analytics Chart */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                      Monthly Overview
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                      +23% Growth
                    </div>
                  </div>

                  <div className="flex items-end gap-2 h-40 mb-6">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary to-accent"
                        />
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Avg. Response", value: "4.2h" },
                      { label: "Completion", value: "94%" },
                      { label: "Satisfaction", value: "4.9" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl bg-background"
                      >
                        <p className="text-2xl font-bold text-text-primary font-[family-name:var(--font-syne)]">
                          {stat.value}
                        </p>
                        <p className="text-text-muted text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection delay={0.2} className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <div className="relative bg-surface border border-border rounded-2xl p-6 md:p-8">
                  {/* Security Visual */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                      >
                        <Shield className="w-12 h-12 text-white" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Tenant Isolation Visual */}
                  <div className="grid grid-cols-3 gap-3">
                    {["Studio A", "Studio B", "Studio C"].map((studio, i) => (
                      <motion.div
                        key={studio}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="bg-background rounded-xl p-4 border border-border text-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-surface mx-auto mb-2 flex items-center justify-center">
                          <Lock className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-xs text-text-secondary">{studio}</p>
                        <p className="text-[10px] text-text-muted">Isolated</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">
                  Enterprise Security
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-syne)]">
                Your Data, <span className="gradient-text">Completely Secure</span>
              </h2>

              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                Built with multi-tenant architecture from the ground up. Each
                studio&apos;s data is completely isolated, ensuring privacy and
                security at every level.
              </p>

              <ul className="space-y-4">
                {securityPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-text-primary">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/security"
                className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Learn more about our security
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
