import React from "react";
import { Section } from "./Section";

const features = [
  {
    title: "AI Diagnostic Assistance",
    description:
      "Analyze images, test results, and records to flag potential findings and provide intelligent insights.",
    icon: "🧠",
    ariaLabel: "Brain icon representing AI diagnostics",
  },
  {
    title: "Workflow Triage Engine",
    description:
      "Automatically prioritize tasks and route cases based on urgency and specialty for optimal efficiency.",
    icon: "📋",
    ariaLabel: "Clipboard icon representing workflow management",
  },
  {
    title: "Patient Data Summarization",
    description:
      "Summarize medical records, history, and visit notes into actionable insights that save time.",
    icon: "🩺",
    ariaLabel: "Stethoscope icon representing patient data",
  },
  {
    title: "Smart Scheduling & Optimization",
    description:
      "Dynamically organize appointments and staff time based on predicted workloads.",
    icon: "🕒",
    ariaLabel: "Clock icon representing scheduling",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect easily with existing EHR/EMR systems or appointment management platforms.",
    icon: "🔗",
    ariaLabel: "Link icon representing integrations",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      className="bg-[var(--color-gray-50)]"
      ariaLabel="Core features"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-text-primary)]">
          Powerful Features for Modern Clinics
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Everything you need to transform your healthcare operations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-gray-200)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300"
            >
              <div
                className="text-4xl mb-4"
                role="img"
                aria-label={feature.ariaLabel}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
