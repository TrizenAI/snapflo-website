"use client";

import { motion } from "framer-motion";
import { Shield, ChevronDown, Mail } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface PrivacySectionProps {
  title: string;
  content: string[];
  index: number;
}

function PrivacySection({ title, content, index }: PrivacySectionProps) {
  const [isOpen, setIsOpen] = useState(index < 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-surface hover:bg-surface-light transition-colors text-left"
      >
        <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)] text-text-primary">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-text-secondary transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-5 pt-0 bg-surface">
          <div className="pt-4 border-t border-border space-y-4">
            {content.map((paragraph, i) => (
              <p key={i} className="text-text-secondary text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

const privacyData = [
  {
    title: "Information We Collect",
    content: [
      "Account Information: When you create an account, we collect your name, email address, phone number, and business information such as your studio name and address.",
      "Photos and Content: We store the photos you upload to our platform for the purpose of providing our photo delivery and gallery sharing services.",
      "Customer Data: Information about your customers that you add to the platform, including their names, contact details, and event information.",
      "Billing Information: Payment details processed securely through our payment providers. We do not store complete credit card numbers on our servers.",
      "Usage Data: Information about how you interact with our platform, including features used, pages visited, and actions taken.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and maintain our photo studio management services, including photo storage, gallery sharing, and delivery.",
      "To process transactions and send related information, including invoices, receipts, and payment confirmations.",
      "To communicate with you about your account, including service updates, security alerts, and support messages.",
      "To send notifications via email, SMS, or WhatsApp as configured by you for your customers.",
      "To analyze usage patterns and improve our platform's functionality and user experience.",
      "To comply with legal obligations and protect our rights and the rights of our users.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Communication Services: We integrate with WhatsApp, email providers, and SMS gateways to deliver notifications on your behalf. These services process message content and recipient information as necessary to deliver your messages.",
      "Payment Processing: We use secure third-party payment processors to handle financial transactions. Your payment information is processed directly by these providers and is subject to their privacy policies.",
      "Cloud Infrastructure: We use reputable cloud service providers to host our platform and store your data securely. These providers maintain strict security and privacy standards.",
      "Analytics: We may use analytics services to understand how our platform is used. This data is aggregated and anonymized where possible.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "Your data is stored on secure servers with encryption at rest using AES-256 encryption standards.",
      "All data transmitted between your device and our servers is encrypted using TLS 1.3.",
      "We implement multi-tenant architecture to ensure complete isolation between different studio accounts.",
      "Regular security audits and penetration testing are conducted to identify and address potential vulnerabilities.",
      "We maintain automated backup systems to protect against data loss, with backups stored in geographically distributed locations.",
      "Access to production systems is strictly controlled and monitored, with multi-factor authentication required for all administrative access.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "Essential Cookies: We use cookies that are necessary for the platform to function properly, including session management and security features.",
      "Analytics Cookies: With your consent, we may use cookies to understand how you use our platform and to improve our services.",
      "Preference Cookies: We store your preferences, such as language and display settings, to provide a personalized experience.",
      "You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.",
    ],
  },
  {
    title: "Your Rights and Choices",
    content: [
      "Access: You have the right to request a copy of the personal data we hold about you.",
      "Correction: You can update or correct your personal information through your account settings or by contacting us.",
      "Deletion: You can request deletion of your account and associated data. We will process such requests in accordance with applicable laws and our data retention policies.",
      "Data Portability: You can export your data in standard formats for transfer to another service.",
      "Opt-Out: You can opt out of non-essential communications at any time through your account settings.",
      "Restriction: You can request that we restrict processing of your data under certain circumstances.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Account Data: We retain your account information for as long as your account is active and for a reasonable period afterward to comply with legal obligations.",
      "Photos: Photos are retained according to your account settings. Deleted photos are permanently removed from our systems within 30 days.",
      "Customer Data: Information about your customers is retained as long as you maintain an active account. Upon account deletion, this data is removed according to our data deletion procedures.",
      "Billing Records: Financial transaction records are retained for the period required by applicable tax and accounting laws.",
      "Logs and Analytics: System logs and analytics data are retained for a limited period for security and service improvement purposes.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
      "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
      "Upon verification, we will promptly delete such information from our systems.",
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      "Your data may be transferred to and processed in countries other than your country of residence.",
      "We ensure that such transfers comply with applicable data protection laws through appropriate safeguards.",
      "By using our services, you consent to the transfer of your information to our facilities and to the facilities of third parties with whom we share it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "We will notify you of any material changes by posting the new policy on our website and, where appropriate, by email.",
      "Your continued use of our services after such changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden pb-12">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-secondary w-[400px] h-[400px] -right-32 -top-32 animate-pulse-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-text-secondary text-sm">Privacy</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Privacy <span className="gradient-text-secondary">Policy</span>
            </h1>

            <p className="text-text-secondary text-lg">
              We are committed to protecting your privacy and being transparent
              about how we handle your data.
            </p>

            <p className="text-text-muted text-sm mt-4">
              Last updated: December 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section pt-0">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-8">
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-text-secondary text-sm leading-relaxed">
                  This Privacy Policy explains how Snapflo (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                  collects, uses, shares, and protects your personal information
                  when you use our photo studio management platform. We take your
                  privacy seriously and are committed to maintaining the trust you
                  place in us.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {privacyData.map((section, index) => (
                <PrivacySection
                  key={section.title}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
              ))}
            </div>

            <AnimatedSection className="mt-12">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-syne)]">
                  Privacy Inquiries
                </h3>
                <p className="text-text-secondary text-sm mb-4 max-w-md mx-auto">
                  If you have any questions about this Privacy Policy or want to
                  exercise your data rights, please contact our Privacy Team.
                </p>
                <a
                  href="mailto:hello@trizen-ai.com"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  hello@trizen-ai.com
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
