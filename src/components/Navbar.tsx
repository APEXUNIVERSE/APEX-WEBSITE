"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/config/siteData";
import { Menu, X } from "lucide-react";
import StarfieldButton from "@/components/StarfieldButton";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxShift, setMaxShift] = useState(255);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Measure dynamic horizontal shift to center nav perfectly on any screen size
  useEffect(() => {
    const calculateShift = () => {
      if (!containerRef.current || !navRef.current) return;
      const containerW = containerRef.current.offsetWidth;
      const navW = navRef.current.offsetWidth;
      // On desktop lg: container padding is 32px (px-8)
      const padding = 32;
      // Distance from center of container to right-aligned position
      const shift = Math.max(0, containerW / 2 - navW / 2 - padding);
      setMaxShift(shift);
    };

    calculateShift();
    window.addEventListener("resize", calculateShift);

    // Also observe resize of container and nav in case fonts load
    const ro = new ResizeObserver(calculateShift);
    if (containerRef.current) ro.observe(containerRef.current);
    if (navRef.current) ro.observe(navRef.current);

    return () => {
      window.removeEventListener("resize", calculateShift);
      ro.disconnect();
    };
  }, []);

  // Reactive scroll tracking: smooth button glide and precise active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Reactive scroll progress for banner button glide (0 = right-aligned, 1 = centered)
      // Range: from 20px (initial scroll) to 380px (before reaching About section at ~1000px)
      const start = 20;
      const end = 380;
      const rawProgress = (scrollY - start) / (end - start);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clamped);

      // 2. Continuous active section detection (HOME -> ABOUT -> TEAM -> ...)
      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }

      const sections = NAV_LINKS.map((item) => item.href.replace("#", ""));
      const viewPivot = window.innerHeight * 0.35; // Trigger line at 35% viewport height

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewPivot) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Current shift in pixels: glides smoothly from maxShift (right) to 0 (exact center)
  const currentShift = (1 - scrollProgress) * maxShift;

  return (
    <header
      className="sticky top-0 z-40 w-full pointer-events-none transition-colors duration-200 py-2.5"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${(1 - scrollProgress) * 0.45})`,
        borderBottomColor: `rgba(255, 255, 255, ${(1 - scrollProgress) * 0.06})`,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        backdropFilter: scrollProgress < 0.95 ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrollProgress < 0.95 ? "blur(8px)" : "none",
      }}
    >
      <div
        ref={containerRef}
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14 pointer-events-none"
      >
        {/* Brand Logo with Cyber Wolf Mascot Image - Smoothly glides away and fades out */}
        <div
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 1.5),
            transform: `translate3d(-${scrollProgress * 36}px, 0, 0) scale(${1 - scrollProgress * 0.08})`,
            pointerEvents: scrollProgress > 0.75 ? "none" : "auto",
            transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          }}
          className="flex-shrink-0"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-black overflow-hidden border border-neutral-800 shadow-md">
              <Image
                src="/apex-wolf-logo.png"
                alt="APEX UNIVERSE Mascot"
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="flex flex-col whitespace-nowrap">
              <span className="font-gaming text-lg font-black tracking-wider text-white transition-colors group-hover:text-red-400">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-500">
                Esports & Community
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Dock - Centered at left: 50% and reactively glides from right to middle */}
        <div
          className="hidden lg:block absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            transform: `translate3d(calc(-50% + ${currentShift}px), -50%, 0)`,
            transition: "transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <nav
            ref={navRef}
            className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full border border-red-500/25 bg-black/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,31,61,0.18)]"
          >
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <StarfieldButton
                  key={link.label}
                  label={link.label}
                  link={link.href}
                  isActive={isActive}
                  padding="7px 16px"
                  rounded={100}
                  font={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                />
              );
            })}
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="pointer-events-auto rounded-lg p-2 text-neutral-300 hover:bg-neutral-900 hover:text-red-400 lg:hidden focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 bg-black/80 border border-red-500/30 ml-auto"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-red-500" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto border-b border-red-500/25 bg-[#08090d]/98 px-4 pt-3 pb-6 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <div key={link.label} className="w-full">
                  <StarfieldButton
                    label={link.label}
                    link={link.href}
                    isActive={isActive}
                    padding="10px 18px"
                    rounded={12}
                    className="w-full"
                    style={{ width: "100%" }}
                    font={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textAlign: "left",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
