"use client";

import React from "react";
import { Crown, MousePointer, Hand, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import LiquidGlassCarousel from "@/components/LiquidGlassCarousel";
import FluidText from "@/components/FluidText";

const CAROUSEL_ITEMS = [
  { image: "/team/snipe-dogg.svg" },
  { image: "/team/vinsoul.svg" },
  { image: "/team/ghostpants.svg" },
  { image: "/team/teenup.svg" },
];

export default function TeamSection() {

  return (
    <section
      id="team"
      aria-label="Core Team"
      className="relative pt-3 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-0 overflow-hidden"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-red-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-rose-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.2)]">
              <Crown className="h-3.5 w-3.5 text-red-400" />
              <span className="font-tech tracking-wider uppercase">CORE ROSTER</span>
            </div>

            <h2 className="sr-only">MEET THE APEX TEAM</h2>
            <div className="w-full max-w-6xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="MEET THE APEX TEAM"
                font={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: "64px",
                  lineHeight: "1.15em",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                }}
                paletteColors={["#ff1a35", "#ff0055", "#ec4899", "#3b82f6", "#00fff5"]}
              />
            </div>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto">
              The strategists, creators, and competitors steering APEX UNIVERSE to the pinnacle of competitive gaming.
            </p>
          </div>
        </ScrollReveal>

        {/* Interaction Hint Bar */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-tech uppercase tracking-wider text-neutral-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/25 bg-black/60 px-3 py-1 text-red-300 backdrop-blur-sm">
              <Hand className="h-3.5 w-3.5 text-red-400" />
              DRAG OR SCROLL TO GLIDE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/25 bg-black/60 px-3 py-1 text-red-300 backdrop-blur-sm">
              <MousePointer className="h-3.5 w-3.5 text-red-400" />
              CLICK CARD TO FOCUS &amp; ZOOM
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-neutral-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              LIQUID GLASS REFRACTION
            </span>
          </div>
        </ScrollReveal>

        {/* Liquid Glass Carousel */}
        <div className="mt-8 relative">
          <ScrollReveal direction="up" delayMs={150}>
            <div className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] rounded-3xl overflow-hidden border border-red-500/35 bg-[#050508] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,31,61,0.15)]">
              {/* Outer Cyber Rim Accent */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 z-20" />

              <LiquidGlassCarousel
                items={CAROUSEL_ITEMS}
                cardWidth={370}
                cardHeight={550}
                gap={22}
                background="#040407"
                lens={{
                  shape: "circle",
                  width: 0.62,
                  height: 1.0,
                  rotation: 58,
                  dispersion: 13,
                  ringColor: "#ff1f3d",
                  glow: 4.8,
                  whiteGlow: 0.0,
                }}
                motion={{
                  sensitivity: 4.5,
                  glide: 6.2,
                  snap: true,
                }}
                interaction={{
                  wheel: true,
                  drag: true,
                  clickToFocus: true,
                }}
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
