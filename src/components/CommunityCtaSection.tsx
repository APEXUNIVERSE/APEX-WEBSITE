"use client";

import React from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  DISCORD_INVITE_URL,
  WHATSAPP_GROUP_URL,
  SITE_CONFIG,
  DISCORD_STREAM_MEMBERS,
} from "@/config/siteData";
import { MessageSquare, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import LiquidCarveButton from "@/components/LiquidCarveButton";
import FluidText from "@/components/FluidText";

export default function CommunityCtaSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.7 },
      colors: ["#ff1a35", "#ef4444", "#ff4d6d", "#ffffff", "#b91c1c"],
    });
  };

  return (
    <section
      id="community"
      aria-label="Community Call to Action"
      className="relative pt-3 sm:pt-4 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-0"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Background Cyber Red Radial Energy */}
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-red-600/15 blur-[150px]" />

      <ScrollReveal direction="up" delayMs={50} className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Wolf Mascot Miniature Emblem */}
        <div className="mx-auto mb-6 flex justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-neutral-800 bg-black">
            <Image
              src="/apex-wolf-logo.png"
              alt="APEX UNIVERSE Mascot"
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,26,53,0.25)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </span>
          <span className="font-tech text-xs font-bold uppercase tracking-wider text-red-300">
            DISCORD & WHATSAPP HUBS ACTIVE NOW
          </span>
        </div>

        {/* Headline */}
        <h2 className="sr-only">READY TO JOIN THE UNIVERSE?</h2>
        <div className="w-full max-w-4xl mx-auto h-28 sm:h-36 md:h-44 my-2">
          <FluidText
            text={"READY TO JOIN THE\nUNIVERSE?"}
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

        {/* Supporting description */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-neutral-300 font-normal leading-relaxed">
          Find teammates, join events, share your clips, meet creators, and become part of the APEX UNIVERSE community.
        </p>

        {/* Feature quick bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-red-400" /> Instant LFG Squads
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-red-400" /> Weekly Clip Bounties
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-red-400" /> Free Scrim Tournaments
          </span>
        </div>

        {/* Two Large Action Buttons with Originkit Liquid Carve Shader Effect */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-2xl mx-auto">
          {/* Button 1: Join Discord Server */}
          <LiquidCarveButton
            label="Join Discord Server"
            link={DISCORD_INVITE_URL}
            onClick={triggerConfetti}
            fill="#FF1A35"
            textColor="#FFFFFF"
            blob={{
              color: "#5865F2", // Discord Purple liquid
              size: 110,
              smoothness: 55,
            }}
            rounded={100}
            padding="16px 28px"
            addIcon={true}
            icon={{
              type: "custom",
              customNode: <MessageSquare className="h-5 w-5 text-white" />,
              size: 20,
              side: "left",
            }}
            gap={10}
            font={{
              fontFamily: "var(--font-gaming), sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
            style={{
              width: "100%",
              maxWidth: "290px",
              height: "62px",
              boxShadow: "0 0 25px rgba(255,26,53,0.5)",
            }}
          />

          {/* Button 2: Join WhatsApp Group */}
          <LiquidCarveButton
            label="Join WhatsApp Group"
            link={WHATSAPP_GROUP_URL}
            fill="#0E1017"
            textColor="#FFFFFF"
            blob={{
              color: "#25D366", // WhatsApp Green liquid
              size: 110,
              smoothness: 55,
            }}
            rounded={100}
            padding="16px 28px"
            addIcon={true}
            icon={{
              type: "custom",
              customNode: <Users className="h-5 w-5 text-[#25D366]" />,
              size: 20,
              side: "left",
            }}
            gap={10}
            font={{
              fontFamily: "var(--font-gaming), sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
            style={{
              width: "100%",
              maxWidth: "290px",
              height: "62px",
              border: "1px solid rgba(37,211,102,0.45)",
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* Official Dedicated Discord Hubs from Clan Dossier */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <a
            href="https://discord.com/channels/1511457449360752690/1511758689009270785"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-black/60 p-3 text-left hover:border-red-500/50 hover:bg-red-950/20 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-tech text-xs font-bold text-red-400 group-hover:text-red-300 uppercase"># METAS</span>
              <span className="text-[10px] text-neutral-500 uppercase">Gunsmith</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">Weapon & Loadout Tuning Discussions</p>
          </a>

          <a
            href="https://discord.com/channels/1511457449360752690/1511457452481187883"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-black/60 p-3 text-left hover:border-red-500/50 hover:bg-red-950/20 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-tech text-xs font-bold text-red-400 group-hover:text-red-300 uppercase"># Clips & Streams</span>
              <span className="text-[10px] text-neutral-500 uppercase">Highlights</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">Community Clutch Clips & Bounties</p>
          </a>

          <a
            href="https://discord.com/channels/1511457449360752690/1512613907284365403"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-black/60 p-3 text-left hover:border-red-500/50 hover:bg-red-950/20 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-tech text-xs font-bold text-red-400 group-hover:text-red-300 uppercase"># Gamer Tags</span>
              <span className="text-[10px] text-neutral-500 uppercase">Recruitment</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">Squad ID Exchange & LFG Matching</p>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-tech uppercase tracking-widest text-neutral-400">
          <ShieldCheck className="h-4 w-4 text-red-400" />
          <span>{SITE_CONFIG.reassuranceText}</span>
        </div>
      </ScrollReveal>

      {/* Discord Members Joined Flow Banner - Positioned right below "Respect the community. Play fair. Have fun." and before Contact section */}
      <div className="mt-12 sm:mt-14 w-full relative">
        {/* Banner Ticker Container */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden border-y border-red-500/20 bg-[#080a10]/80 py-3.5 backdrop-blur-md shadow-[0_0_25px_rgba(255,26,53,0.1)]">
          {/* Subtle Cyber Red Edge Glow & Ambient Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#06070a] via-[#06070a]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#06070a] via-[#06070a]/90 to-transparent z-10" />

          {/* Continuous Flow Marquee */}
          <div className="animate-marquee-flow flex items-center gap-4 whitespace-nowrap py-1">
            {/* Track 1 */}
            <div className="flex shrink-0 items-center gap-4">
              {DISCORD_STREAM_MEMBERS.map((member, idx) => (
                <div
                  key={`stream-1-${idx}`}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-[#0b0e14]/95 shadow-[0_2px_10px_rgba(0,0,0,0.4)] hover:border-red-500/50 hover:bg-[#141822] transition-colors cursor-default select-none"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,26,53,0.9)]" />
                  <span className="font-gaming text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {member.name}
                  </span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-red-400">
                    {member.discordUsername}
                  </span>
                  <span className="font-tech text-[11px] sm:text-xs font-bold text-neutral-200 rounded border border-red-500/30 bg-red-950/60 px-2 py-0.5 shadow-inner">
                    [{member.joinedYear}]
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
              {DISCORD_STREAM_MEMBERS.map((member, idx) => (
                <div
                  key={`stream-2-${idx}`}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-white/10 bg-[#0b0e14]/95 shadow-[0_2px_10px_rgba(0,0,0,0.4)] hover:border-red-500/50 hover:bg-[#141822] transition-colors cursor-default select-none"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,26,53,0.9)]" />
                  <span className="font-gaming text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {member.name}
                  </span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-red-400">
                    {member.discordUsername}
                  </span>
                  <span className="font-tech text-[11px] sm:text-xs font-bold text-neutral-200 rounded border border-red-500/30 bg-red-950/60 px-2 py-0.5 shadow-inner">
                    [{member.joinedYear}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
