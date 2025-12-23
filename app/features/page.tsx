"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Upload,
  Image,
  Share2,
  CreditCard,
  MessageCircle,
  BarChart3,
  Zap,
  Bell,
  Users,
  Smartphone,
  Globe,
  FileText,
  Camera,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

const featureCategories = [
  {
    title: "Photo Delivery",
    description: "Streamline your photo sharing workflow",
    color: "primary",
    features: [
      {
        icon: Upload,
        title: "Easy Photo Upload",
        description:
          "Upload photos for any event with drag-and-drop simplicity. Support for batch uploads, folder organization, and automatic metadata extraction.",
      },
      {
        icon: Zap,
        title: "Smart Compression",
        description:
          "Automatic intelligent compression optimizes photos for fast delivery without visible quality loss. Save bandwidth and storage costs.",
      },
      {
        icon: Share2,
        title: "Secure Gallery Sharing",
        description:
          "Generate secure, password-protected gallery links for each event. Control access with expiration dates and download limits.",
      },
      {
        icon: Image,
        title: "Customer Photo Selection",
        description:
          "Let customers browse galleries and select their favorites. Track selections in real-time and receive instant notifications.",
      },
    ],
  },
  {
    title: "Billing & Payments",
    description: "Professional invoicing made simple",
    color: "secondary",
    features: [
      {
        icon: CreditCard,
        title: "Invoice Generation",
        description:
          "Create professional, branded invoices in seconds. Customize templates, add line items, and track payment status automatically.",
      },
      {
        icon: FileText,
        title: "Quote Management",
        description:
          "Generate and send quotes to potential clients. Convert accepted quotes to invoices with a single click.",
      },
      {
        icon: Users,
        title: "Client Management",
        description:
          "Maintain a complete client database with contact details, booking history, and payment records all in one place.",
      },
    ],
  },
  {
    title: "Communication",
    description: "Stay connected with your clients",
    color: "accent",
    features: [
      {
        icon: MessageCircle,
        title: "WhatsApp Integration",
        description:
          "Send gallery links, updates, and reminders directly via WhatsApp. Automate messages for key milestones.",
      },
      {
        icon: Bell,
        title: "Email Notifications",
        description:
          "Automated email notifications keep clients informed about gallery availability, selection deadlines, and invoice status.",
      },
      {
        icon: Smartphone,
        title: "SMS Alerts",
        description:
          "Send SMS notifications for time-sensitive updates. Perfect for delivery confirmations and payment reminders.",
      },
      {
        icon: Globe,
        title: "Social Media Sharing",
        description:
          "Enable clients to share their favorite photos directly to social media with your studio watermark.",
      },
    ],
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven decisions for growth",
    color: "secondary",
    features: [
      {
        icon: BarChart3,
        title: "Studio Analytics",
        description:
          "Comprehensive dashboard showing booking trends, revenue analytics, and client engagement metrics.",
      },
      {
        icon: Camera,
        title: "Event Performance",
        description:
          "Track performance metrics for each event including delivery times, selection rates, and client satisfaction.",
      },
    ],
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10",
        border: "border-primary/20",
        text: "text-primary",
        gradient: "from-primary/20 to-primary/5",
      };
    case "secondary":
      return {
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        text: "text-secondary",
        gradient: "from-secondary/20 to-secondary/5",
      };
    case "accent":
      return {
        bg: "bg-accent/10",
        border: "border-accent/20",
        text: "text-accent",
        gradient: "from-accent/20 to-accent/5",
      };
    default:
      return {
        bg: "bg-primary/10",
        border: "border-primary/20",
        text: "text-primary",
        gradient: "from-primary/20 to-primary/5",
      };
  }
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-secondary w-[500px] h-[500px] -right-32 -top-32 animate-pulse-glow" />
        <div className="gradient-orb orb-primary w-[400px] h-[400px] -left-32 bottom-0 animate-pulse-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-text-secondary text-sm">
                Powerful Features
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Everything You Need to{" "}
              <span className="gradient-text">Run Your Studio</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Snapflo combines photo delivery, billing, communication, and
              analytics into one seamless platform designed for modern
              photography studios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => {
        const colors = getColorClasses(category.color);

        return (
          <section key={category.title} className="section relative">
            {categoryIndex % 2 === 1 && (
              <div className="absolute inset-0 bg-surface/50" />
            )}

            <div className="container relative z-10">
              <AnimatedSection className="mb-12">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border} mb-4`}
                >
                  <span className={`${colors.text} text-sm font-medium`}>
                    {category.title}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 font-[family-name:var(--font-syne)]">
                  {category.description}
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: featureIndex * 0.1,
                    }}
                    className="card card-glow group"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <feature.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-syne)] text-text-primary">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Snapflo Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent" />
        <div className="gradient-orb orb-accent w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0 animate-pulse-glow opacity-30" />

        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-syne)]">
              Why Studios Choose{" "}
              <span className="gradient-text-secondary">Snapflo</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Built by photographers, for photographers.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Save Time",
                description:
                  "Automate repetitive tasks and focus on what you do best — capturing moments.",
              },
              {
                title: "Increase Revenue",
                description:
                  "Faster delivery and professional billing lead to happier clients and more referrals.",
              },
              {
                title: "Stay Organized",
                description:
                  "Keep all your events, clients, and finances in one centralized platform.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-syne)]">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Streamline Your Studio?"
        description="Join photography studios already using Snapflo to work smarter, not harder."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
        secondaryCTA="Learn About Security"
        secondaryHref="/security"
      />
    </div>
  );
}
