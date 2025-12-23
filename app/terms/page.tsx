"use client";

import { motion } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface TermsSectionProps {
  title: string;
  content: string[];
  index: number;
}

function TermsSection({ title, content, index }: TermsSectionProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

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
          {index + 1}. {title}
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

const termsData = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Snapflo's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all users of the platform, including studio owners, photographers, and end customers who access galleries shared through our platform.",
      "We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.",
    ],
  },
  {
    title: "Description of Services",
    content: [
      "Snapflo provides a cloud-based photo studio management platform that includes photo delivery, gallery sharing, billing, communication tools, and analytics.",
      "Our services are provided on a subscription basis. Features and availability may vary based on your subscription plan.",
      "We strive to maintain high availability but do not guarantee uninterrupted access to the platform.",
    ],
  },
  {
    title: "User Accounts and Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during registration and to update such information as necessary.",
      "You must notify us immediately of any unauthorized use of your account or any other breach of security.",
      "You are responsible for ensuring that your use of the platform complies with all applicable laws and regulations.",
    ],
  },
  {
    title: "Photo Ownership and Usage Rights",
    content: [
      "You retain all ownership rights to photos uploaded to Snapflo. We do not claim any ownership of your content.",
      "By uploading photos, you grant Snapflo a limited license to store, process, and display your photos as necessary to provide our services.",
      "You represent that you have all necessary rights and permissions to upload and share the photos through our platform.",
      "We do not use your photos for any purpose other than providing the services you have requested.",
    ],
  },
  {
    title: "Billing and Payment",
    content: [
      "Subscription fees are billed in advance on a monthly or annual basis, depending on your chosen plan.",
      "All fees are non-refundable unless otherwise specified in writing.",
      "We reserve the right to change pricing with 30 days' notice. Existing subscriptions will honor the current rate until renewal.",
      "Failure to pay may result in suspension or termination of your account.",
    ],
  },
  {
    title: "Data Privacy and Security",
    content: [
      "Your use of Snapflo is also governed by our Privacy Policy, which describes how we collect, use, and protect your data.",
      "We implement industry-standard security measures to protect your data, but we cannot guarantee absolute security.",
      "You are responsible for maintaining appropriate backups of your content.",
    ],
  },
  {
    title: "Prohibited Uses",
    content: [
      "You may not use our services for any illegal or unauthorized purpose.",
      "You may not upload content that is defamatory, obscene, or infringes on the rights of others.",
      "You may not attempt to gain unauthorized access to our systems or other users' accounts.",
      "You may not use our platform to distribute malware or engage in any activity that disrupts our services.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Snapflo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
      "Our total liability for any claims arising from these terms shall not exceed the amount paid by you for the service in the twelve months preceding the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability. In such jurisdictions, our liability is limited to the maximum extent permitted by law.",
    ],
  },
  {
    title: "Account Suspension and Termination",
    content: [
      "We may suspend or terminate your account if you violate these terms or engage in conduct that we deem harmful to other users or our platform.",
      "You may terminate your account at any time by contacting our support team.",
      "Upon termination, your right to use the service ceases immediately. We may delete your data after a reasonable retention period.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Snapflo is incorporated.",
      "Any disputes arising from these terms shall be resolved through binding arbitration in accordance with applicable arbitration rules.",
      "You agree to submit to the exclusive jurisdiction of the courts located within our jurisdiction for any actions not subject to arbitration.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden pb-12">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="gradient-orb orb-primary w-[400px] h-[400px] -left-32 -top-32 animate-pulse-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-text-secondary text-sm">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>

            <p className="text-text-secondary text-lg">
              Please read these terms carefully before using Snapflo.
            </p>

            <p className="text-text-muted text-sm mt-4">
              Last updated: December 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section pt-0">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-8">
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-text-secondary text-sm leading-relaxed">
                  These Terms and Conditions (&quot;Terms&quot;) govern your access to and
                  use of Snapflo&apos;s photo studio management platform and related
                  services. By using our services, you agree to be bound by these
                  Terms.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {termsData.map((section, index) => (
                <TermsSection
                  key={section.title}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
              ))}
            </div>

            <AnimatedSection className="mt-12">
              <div className="bg-surface border border-border rounded-xl p-6 text-center">
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-syne)]">
                  Questions about these terms?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Contact our legal team for clarification.
                </p>
                <a
                  href="mailto:hello@trizen-ai.com"
                  className="text-primary hover:text-primary-dark transition-colors font-medium"
                >
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
