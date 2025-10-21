import React from "react";
import { Section } from "./Section";

const painPointsSolutions = [
  {
    painPoint: "Slow, manual diagnostic workflows",
    solution:
      "AI-driven assistance that pre-screens data, highlights anomalies, and suggests next steps",
  },
  {
    painPoint: "Overloaded staff and chaotic scheduling",
    solution:
      "Smart triage and scheduling tools that adapt to clinic load in real-time",
  },
  {
    painPoint: "Fragmented data between departments",
    solution:
      "Centralized summaries with AI-generated patient overviews, readable and exportable",
  },
  {
    painPoint: "High cost of enterprise AI",
    solution: "Modular, affordable SaaS model with plug-and-play setup",
  },
];

export function ValueProposition() {
  return (
    <Section
      id="value-proposition"
      className="bg-white"
      ariaLabel="Value proposition"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-text-primary)]">
          Why Choose MedAI Flow?
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 text-sm md:text-base">
          Solving real challenges with intelligent automation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {painPointsSolutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[var(--color-gray-200)] hover:border-[var(--color-primary)] hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 text-sm md:text-base">
                    {item.painPoint}
                  </h3>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-4 pl-12">
                <div className="flex-1 border-l-2 border-[var(--color-primary)] pl-4">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
