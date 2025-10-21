"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="container flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-[var(--color-primary)] hover:no-underline focus-visible:outline-offset-4"
            aria-label="MedAI Flow - Home"
          >
            MedAI Flow
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8" role="list">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] font-medium transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            variant="primary"
            size="medium"
            onClick={() => (window.location.href = "#contact")}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-4" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-primary)] font-medium transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <Button
                  variant="primary"
                  size="medium"
                  className="w-full"
                  onClick={() => {
                    window.location.href = "#contact";
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book a Demo
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
