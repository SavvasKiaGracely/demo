import React from "react";
import { Section } from "./Section";

const benefits = [
  {
    stat: "30-50%",
    label: "faster diagnostic turnaround",
  },
  {
    stat: "40%",
    label: "reduction in admin work",
  },
  {
    stat: "24/7",
    label: "AI decision support",
  },
  {
    stat: "100%",
    label: "improved efficiency",
  },
];

const keyBenefits = [
  "Improved staff efficiency with automated case prioritization",
  "Real-time AI decision support to empower clinicians",
  "Intelligent summaries reducing administrative burden",
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
      ariaLabel="Benefits and statistics"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
          Transform Your Clinic Operations
        </h2>
        <p className="text-center text-white/80 mb-16 text-base md:text-lg">
          Measurable improvements from day one
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all"
            >
              <div className="text-3xl md:text-5xl font-bold mb-2 text-white">
                {benefit.stat}
              </div>
              <p className="text-white/90 text-xs md:text-sm leading-tight">
                {benefit.label}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3" role="list">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white/95 text-sm md:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
