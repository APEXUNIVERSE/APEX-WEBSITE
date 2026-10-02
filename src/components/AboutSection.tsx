"use client";

import React from "react";
import { ABOUT_FEATURES, SITE_CONFIG } from "@/config/siteData";
import { Users2, Trophy, CalendarCheck, ShieldCheck, Flame } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import ShineCard from "@/components/ShineCard";
import FluidText from "@/components/FluidText";

export default function AboutSection() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Users2":
        return <Users2 className="h-7 w-7 text-red-400" />;
      case "Trophy":
        return <Trophy className="h-7 w-7 text-rose-400" />;
      case "CalendarCheck":
        return <CalendarCheck className="h-7 w-7 text-red-300" />;
      default:
        return <Flame className="h-7 w-7 text-red-400" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About APEX UNIVERSE"
      className="relative pt-3 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-0 overflow-hidden"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Decorative Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.2)]">
              <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
              <span className="font-tech tracking-wider uppercase">COMMUNITY HUB</span>
            </div>

            <h2 className="sr-only">MORE THAN A GAMING SERVER</h2>
            <div className="w-full max-w-6xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="MORE THAN A GAMING SERVER"
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

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-3xl mx-auto">
              {SITE_CONFIG.aboutText}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ABOUT_FEATURES.map((feature, idx) => (
            <ScrollReveal key={feature.id} direction="up" delayMs={100 * (idx + 1)} className="h-full">
              <ShineCard
                cardColor="#08090f"
                highlight="#FF1F3D"
                unlit="#2a0408"
                density={135}
                waveSpeed={38}
                sparkle={60}
                radius="28px"
                hoverScale={103}
                glow="rgba(255, 26, 53, 0.25)"
                border={{
                  borderColor: "rgba(255, 26, 53, 0.4)",
                  borderStyle: "solid",
                  borderWidth: 1.5,
                }}
                className="h-full"
              >
                <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6 min-h-[440px]">
                  {/* TOP: Logo/Icon + Badge + Title + Description (Unified Top Block) */}
                  <div className="rounded-2xl border border-red-500/35 bg-black/75 p-5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
                    {/* Top Row: Icon/Logo + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/60 bg-black/90 shadow-[0_0_16px_rgba(255,26,53,0.35)] transition-transform duration-300 group-hover:scale-105">
                        {getFeatureIcon(feature.icon)}
                      </div>
                      <span className="rounded-full border border-red-500/70 bg-black/90 px-3 py-1 font-tech text-[11px] font-bold uppercase tracking-wider text-red-200 shadow-md">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-gaming text-lg sm:text-xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-neutral-200 font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {feature.description}
                    </p>
                  </div>

                  {/* CENTER: Open Glitter Showcase Window */}
                  <div className="flex-1 min-h-[110px] flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-tech uppercase tracking-[0.2em] text-red-300/80 bg-black/60 px-3 py-1 rounded-full border border-red-500/30 backdrop-blur-sm">
                      METALLIC SHINE
                    </span>
                  </div>

                  {/* BOTTOM: Minimal Feature Step Pill */}
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-red-500/30">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-black/85 px-2.5 py-1 text-xs font-tech font-bold uppercase tracking-wider text-red-300 border border-red-500/40 shadow-sm">
                      0{idx + 1} // APEX FEATURE
                    </span>
                    {feature.link ? (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-950/40 px-2.5 py-1 text-[11px] font-tech font-bold uppercase tracking-wider text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <span>Join Channel</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-tech uppercase tracking-widest text-neutral-400">
                        LIVE IN DISCORD
                      </span>
                    )}
                  </div>
                </div>
              </ShineCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
