"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Clock,
  Camera,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries",
    value: "hello@trizen-ai.com",
    href: "mailto:hello@trizen-ai.com",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Support",
    description: "Technical assistance",
    value: "talent@trizen-ai.com",
    href: "mailto:talent@trizen-ai.com",
    color: "secondary",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9am-6pm",
    value: "+91 9003382337",
    href: "tel:+919003382337",
    color: "accent",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@snapflo",
    href: "https://instagram.com/snapflo",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Facebook,
    name: "Facebook",
    handle: "Snapflo",
    href: "https://facebook.com/snapflo",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Snapflo",
    href: "https://linkedin.com/company/snapflo",
    color: "from-blue-600 to-blue-700",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-primary w-[500px] h-[500px] -left-32 top-0 animate-pulse-glow" />
        <div className="gradient-orb orb-secondary w-[400px] h-[400px] -right-32 bottom-0 animate-pulse-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-text-secondary text-sm">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Have questions about Snapflo? Want to request a demo? We&apos;d love to
              hear from you. Reach out and we&apos;ll get back to you as soon as
              possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-glow group text-center cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                    contact.color === "primary"
                      ? "from-primary/20 to-primary/10"
                      : contact.color === "secondary"
                      ? "from-secondary/20 to-secondary/10"
                      : "from-accent/20 to-accent/10"
                  }`}
                >
                  <contact.icon
                    className={`w-7 h-7 ${
                      contact.color === "primary"
                        ? "text-primary"
                        : contact.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 font-[family-name:var(--font-syne)] text-text-primary">
                  {contact.title}
                </h3>
                <p className="text-text-muted text-xs mb-3">
                  {contact.description}
                </p>
                <p
                  className={`font-medium group-hover:underline ${
                    contact.color === "primary"
                      ? "text-primary"
                      : contact.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }`}
                >
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section relative">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Demo Request Info */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-[family-name:var(--font-syne)]">
                      Request a Demo
                    </h2>
                    <p className="text-text-secondary text-sm">
                      See Snapflo in action
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  Ready to transform your photography studio? Schedule a
                  personalized demo with our team. We&apos;ll walk you through all
                  the features and answer any questions you have.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "30-minute personalized walkthrough",
                    "See features tailored to your needs",
                    "Get answers to all your questions",
                    "No commitment required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-text-primary text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:hello@trizen-ai.com?subject=Snapflow Demo Request"
                  className="btn btn-primary w-full"
                >
                  <Mail className="w-4 h-4" />
                  Request Demo via Email
                </a>
              </div>
            </AnimatedSection>

            {/* Office Hours & Social */}
            <div className="space-y-6">
              {/* Office Hours */}
              <AnimatedSection delay={0.1}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)]">
                      Office Hours
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {officeHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="text-text-secondary text-sm">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            schedule.hours === "Closed"
                              ? "text-text-muted"
                              : "text-text-primary"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.2}>
                <div className="card">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)] mb-6">
                    Follow Us
                  </h3>

                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-background hover:bg-surface-light transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}
                          >
                            <social.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-text-primary text-sm">
                              {social.name}
                            </p>
                            <p className="text-text-muted text-xs">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Location */}
              <AnimatedSection delay={0.3}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)]">
                      Our Location
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    123 Photography Lane
                    <br />
                    Creative District
                    <br />
                    San Francisco, CA 94102
                    <br />
                    United States
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section relative overflow-hidden">
        <div className="gradient-orb orb-accent w-[400px] h-[400px] left-1/2 -translate-x-1/2 top-0 animate-pulse-glow opacity-30" />

        <div className="container relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-syne)]">
              Common <span className="gradient-text-secondary">Questions</span>
            </h2>
            <p className="text-text-secondary mb-8">
              Quick answers to frequently asked questions.
            </p>

            <div className="grid gap-4 text-left">
              {[
                {
                  q: "How quickly can I get started?",
                  a: "You can be up and running within 24 hours of signing up. Our team will help you with onboarding.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
                },
                {
                  q: "Can I migrate my existing data?",
                  a: "Absolutely. Our support team will assist with migrating your existing photos, clients, and data.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card"
                >
                  <h4 className="font-semibold text-text-primary mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-text-secondary text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

