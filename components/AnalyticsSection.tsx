"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Clock, Eye, CheckCircle } from "lucide-react";

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Event Performance",
    description: "Track delivery times, customer engagement, and photo selection rates for every event.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Insights",
    description: "Monitor billing trends, payment status, and revenue forecasts in real-time.",
  },
  {
    icon: Users,
    title: "Customer Behavior",
    description: "Understand how customers interact with galleries and optimize your workflow.",
  },
  {
    icon: Clock,
    title: "Turnaround Time",
    description: "Measure and improve your delivery speed to boost customer satisfaction.",
  },
];

export default function AnalyticsSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-orb orb-accent w-[400px] h-[400px] top-1/2 -right-48 animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-6">
              <Eye className="w-4 h-4" />
              Analytics & Insights
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Data-Driven Decisions for{" "}
              <span className="gradient-text-secondary">Better Results</span>
            </h2>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Get powerful insights into your studio&apos;s performance. Track events, 
              monitor customer engagement, and optimize your workflow with tenant-specific 
              analytics that keep your data private and secure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-text-primary font-[family-name:var(--font-syne)]">
                  Studio Analytics
                </h4>
                <span className="text-xs text-text-muted">Last 30 days</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Events", value: "47", color: "text-primary" },
                  { label: "Photos Shared", value: "12.4k", color: "text-secondary" },
                  { label: "Avg. Response", value: "2.3h", color: "text-accent" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className={`text-2xl font-bold ${stat.color} font-[family-name:var(--font-syne)]`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-surface-light rounded-xl p-4 border border-border mb-6">
                <p className="text-xs text-text-muted mb-4">Customer Engagement</p>
                <div className="flex items-end justify-between h-32 gap-1">
                  {[35, 52, 45, 78, 62, 85, 70, 92, 68, 88, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-accent/60 to-accent rounded-t transition-all hover:from-accent hover:to-accent"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Metrics */}
              <div className="space-y-3">
                {[
                  { label: "Selection Completion Rate", value: "94%", trend: "+5%" },
                  { label: "Average Delivery Time", value: "1.8 days", trend: "-12%" },
                  { label: "Customer Satisfaction", value: "4.9/5", trend: "+0.3" },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between p-3 bg-surface-light rounded-lg border border-border">
                    <span className="text-sm text-text-secondary">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text-primary">{metric.value}</span>
                      <span className="text-xs text-green-400">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-secondary/10 blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

