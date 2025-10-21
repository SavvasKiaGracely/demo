import React from "react";
import { Section } from "./Section";

const testimonials = [
  {
    quote:
      "Within weeks, MedAI Flow streamlined our reporting process and reduced our scheduling chaos.",
    author: "Dr. Maria K.",
    role: "Radiology Center Director",
  },
  {
    quote:
      "The AI diagnostic assistance has become an invaluable second opinion tool for our team.",
    author: "Dr. James T.",
    role: "Chief Medical Officer",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      className="bg-white"
      ariaLabel="Testimonials from healthcare professionals"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-text-primary)]">
          What Healthcare Professionals Say
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 text-sm md:text-base">
          Real feedback from clinicians using MedAI Flow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-[var(--color-gray-50)] rounded-2xl p-6 md:p-8 border border-[var(--color-gray-200)] hover:shadow-lg transition-shadow"
            >
              <blockquote>
                <svg
                  className="w-8 h-8 text-[var(--color-primary)] opacity-30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                </svg>
                <p className="text-base md:text-lg text-[var(--color-text-primary)] mb-5 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="border-t border-[var(--color-gray-200)] pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-[var(--color-text-primary)] text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                      {testimonial.role}
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
