"use client";

import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";

export function CTA() {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white"
      ariaLabel="Call to action section"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white leading-tight">
          Ready to Modernize Your Clinic&apos;s Operations?
        </h2>

        <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the waitlist for early access and be among the first to
          experience the future of healthcare automation.
        </p>

        <Button
          variant="accent"
          size="large"
          onClick={() => {
            // In a real implementation, this would open a modal or redirect to a signup form
            alert(
              "Thank you for your interest! A signup form would appear here."
            );
          }}
          className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-gray-100)] font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 shadow-xl"
        >
          Join the Waitlist
        </Button>

        <p className="mt-5 text-xs md:text-sm text-white/70">
          No credit card required • Early adopter benefits • Cancel anytime
        </p>
      </div>
    </Section>
  );
}
