"use client";

import React from "react";
import { Button } from "./Button";
import { Section } from "./Section";

export function Hero() {
  return (
    <Section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[var(--color-gray-50)] to-white"
      ariaLabel="Hero section"
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 text-[var(--color-text-primary)] leading-tight tracking-tight">
          Empowering Clinics with Intelligent Diagnostics and Workflow
          Automation
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Harness the power of AI to analyze patient data, assist diagnostics,
          and optimize daily operations — designed for clinics, imaging centers,
          and small hospitals.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="large"
            onClick={() => (window.location.href = "#contact")}
            aria-label="Book a demo with MedAI Flow"
          >
            Book a Demo
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => (window.location.href = "#contact")}
            aria-label="Join early access program"
          >
            Join Early Access
          </Button>
        </div>
      </div>
    </Section>
  );
}
