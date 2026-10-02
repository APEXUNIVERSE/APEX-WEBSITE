"use client";

import React, { useState } from "react";
import {
  MODERATORS_DATA,
  COLLABORATORS_DATA,
  Moderator,
  Collaborator,
  DISCORD_INVITE_URL,
} from "@/config/siteData";
import {
  Shield,
  Handshake,
  MessageSquare,
  ExternalLink,
  Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import StarfieldButton from "@/components/StarfieldButton";
import FluidText from "@/components/FluidText";
import LiquidCarveButton from "@/components/LiquidCarveButton";

export default function ModeratorsCollaboratorsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "moderators" | "collaborators">("all");

  return (
    <section
      id="moderators"
      aria-label="Moderators and Collaborators"
      className="relative pt-3 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-0 overflow-hidden"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 h-72 w-72 rounded-full bg-red-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.2)]">
              <Shield className="h-3.5 w-3.5 text-red-400" />
              <span className="font-tech tracking-wider uppercase">SUPPORT & ECOSYSTEM</span>
            </div>

            <h2 className="sr-only">MODERATORS & COLLABORATORS</h2>
            <div className="w-full max-w-7xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="MODERATORS & COLLABORATORS"
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
              Dedicated moderators ensuring high-integrity community rules, alongside visionary creators and sponsors fueling our tournaments.
            </p>

            {/* Tab Filter Switcher powered by StarfieldButton */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <StarfieldButton
                label="All Roster"
                isActive={activeTab === "all"}
                onClick={() => setActiveTab("all")}
                padding="8px 20px"
                rounded={100}
                font={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              />

              <StarfieldButton
                label={`Moderators (${MODERATORS_DATA.length})`}
                isActive={activeTab === "moderators"}
                onClick={() => setActiveTab("moderators")}
                padding="8px 20px"
                rounded={100}
                font={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              />

              <StarfieldButton
                label={`Collaborators (${COLLABORATORS_DATA.length})`}
                isActive={activeTab === "collaborators"}
                onClick={() => setActiveTab("collaborators")}
                padding="8px 20px"
                rounded={100}
                font={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Content Section */}
        <div className="mt-14 space-y-16">
          {/* A. MODERATORS */}
          {(activeTab === "all" || activeTab === "moderators") && (
            <div>
              <div className="flex items-center justify-between border-b border-red-500/25 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950/60 text-red-400 border border-red-500/30">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-gaming text-xl font-bold uppercase tracking-wider text-white">
                      Community Guardians (Moderators)
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Keeping discord channels friendly, active, fair, and organized 24/7.
                    </p>
                  </div>
                </div>

                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-tech font-bold uppercase tracking-wider text-red-400 hover:text-rose-300"
                >
                  <span>Apply for Mod</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {MODERATORS_DATA.map((mod: Moderator) => (
                  <div
                    key={mod.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d0f17]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-[#121520] hover:shadow-[0_10px_25px_rgba(255,26,53,0.2)]"
                  >
                    <div>
                      {/* Avatar Header */}
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-950 to-black p-[1.5px] border border-red-500/40 group-hover:scale-105 transition-transform">
                          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black text-red-400 font-tech font-bold text-sm">
                            {mod.name.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-black" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-gaming text-sm font-bold text-white truncate group-hover:text-red-400">
                            {mod.name}
                          </h4>
                          <span className="font-tech text-xs text-red-400 block truncate font-semibold">
                            {mod.discordTag}
                          </span>
                        </div>
                      </div>

                      {/* Role & 3D Weapon Badges */}
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="inline-block rounded-md bg-red-950/60 border border-red-500/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
                          {mod.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-tech uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded border border-white/10">
                          <span className="text-red-400">⚔</span>
                          <span className="truncate">{mod.weapon3D}</span>
                        </div>
                      </div>

                      {/* Operational Responsibilities Bio */}
                      <p className="mt-3 text-xs text-neutral-300 leading-relaxed min-h-[3.2rem]">
                        {mod.responsibility}
                      </p>
                    </div>

                    {/* Discord Link / Social Button */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-tech uppercase tracking-wider text-neutral-500">
                        {mod.role}
                      </span>
                      <div className="flex items-center gap-2">
                        {mod.youtubeUrl && (
                          <a
                            href={mod.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${mod.name} YouTube`}
                            className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-950/40 px-2 py-1 text-xs font-semibold text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        <a
                          href={mod.discordLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-950/40 px-2.5 py-1 text-xs font-semibold text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <MessageSquare className="h-3 w-3" />
                          <span>Discord</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* B. COLLABORATORS & CREATORS */}
          {(activeTab === "all" || activeTab === "collaborators") && (
            <div>
              <div className="flex items-center justify-between border-b border-red-500/25 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950/60 text-red-400 border border-red-500/30">
                    <Handshake className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-gaming text-xl font-bold uppercase tracking-wider text-white">
                      Official Collaborators & Creators
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Verified YouTube creators and tactical squad architects powering APEX UNIVERSE.
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-tech font-bold uppercase tracking-wider text-red-400 hover:text-white"
                >
                  <span>Partner With Us</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {COLLABORATORS_DATA.map((collab: Collaborator) => (
                  <div
                    key={collab.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d0f17]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-[#121520] hover:shadow-[0_10px_25px_rgba(255,26,53,0.2)]"
                  >
                    <div>
                      {/* Brand Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-950 to-black border border-red-500/40 p-2 font-gaming font-black text-red-400 group-hover:scale-105 transition-transform">
                          {collab.name.substring(0, 2).toUpperCase()}
                        </div>

                        <span className="rounded-md border border-red-500/30 bg-red-950/40 px-2 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-red-300">
                          {collab.type}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-gaming text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                          {collab.name}
                        </h4>
                        <span className="font-tech text-xs text-neutral-400 mt-0.5 block">
                          {collab.channelHandle}
                        </span>

                        <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed">
                          {collab.description}
                        </p>

                        {/* Verified Testimonial Quote */}
                        <div className="mt-3.5 rounded-xl border border-red-500/20 bg-black/60 p-3 italic text-xs text-neutral-300">
                          <span className="text-red-400 font-bold not-italic">“ </span>
                          {collab.testimonial}
                          <span className="text-red-400 font-bold not-italic"> ”</span>
                        </div>
                      </div>
                    </div>

                    {/* Visit YouTube Channel Button */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex justify-center">
                      <LiquidCarveButton
                        label={collab.buttonLabel.toUpperCase()}
                        link={collab.url}
                        newTab={true}
                        fill={collab.name === "Snipe Dogg" ? "#FF1A35" : "#0E1017"}
                        textColor="#FFFFFF"
                        blob={{
                          color: collab.name === "Snipe Dogg" ? "#880815" : "#FF1A35",
                          size: 70,
                          smoothness: 55,
                        }}
                        rounded={100}
                        padding="10px 18px"
                        addIcon={true}
                        icon={{
                          type: "symbol",
                          symbol: "↗",
                          color: "#FFFFFF",
                          size: 13,
                          padding: 0,
                          rounded: 0,
                          side: "right",
                        }}
                        font={{
                          fontFamily: "var(--font-gaming)",
                          fontWeight: 700,
                          fontSize: "11px",
                          letterSpacing: "0.06em",
                        }}
                        style={{
                          width: "100%",
                          border: collab.name === "Snipe Dogg" ? "none" : "1px solid rgba(255, 26, 53, 0.4)",
                          boxShadow: collab.name === "Snipe Dogg"
                            ? "0 0 16px rgba(255, 26, 53, 0.35)"
                            : "0 4px 12px rgba(0, 0, 0, 0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
