"use client";

import React from "react";
import confetti from "canvas-confetti";
import ReflectShader from "@/components/ReflectShader";
import FluidText from "@/components/FluidText";
import ScrollReveal from "@/components/ScrollReveal";
import LiquidCarveButton from "@/components/LiquidCarveButton";
import {
  DISCORD_INVITE_URL,
  WHATSAPP_GROUP_URL,
  YOUTUBE_CHANNEL_URL,
  INSTAGRAM_URL,
  TWITCH_URL,
  SITE_CONFIG,
  STATS_DATA,
} from "@/config/siteData";
import {
  Play,
  Users,
  Video,
  Flame,
  Gamepad2,
  Tv,
  MessageSquare,
  Share2,
  ChevronDown,
} from "lucide-react";

export default function HeroSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#ff1a35", "#ef4444", "#ff4d6d", "#ffffff", "#b91c1c"],
    });
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-5 w-5 text-red-400" />;
      case "Video":
        return <Video className="h-5 w-5 text-rose-300" />;
      case "Flame":
        return <Flame className="h-5 w-5 text-red-500 fill-red-500" />;
      case "Gamepad2":
        return <Gamepad2 className="h-5 w-5 text-red-300" />;
      default:
        return <Gamepad2 className="h-5 w-5 text-red-400" />;
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      {/* Originkit Reflect WebGL Shader */}
      <ReflectShader
        background="#000000"
        tint="#ffffff"
        speed={50}
        brightness={120}
        thickness={25}
        chromatic={12}
        bandGap={20}
        zoom={295}
        hover={90}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Subtle Cyber Grid Lines */}
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-15 z-[1]" />

      {/* Smooth Bottom Dissolve Transition into About Section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#06070a] via-[#06070a]/60 to-transparent z-[2]" />

      {/* Hero Central Content */}
      <ScrollReveal direction="up" delayMs={50} className="relative z-10 mx-auto max-w-5xl flex-1 flex flex-col items-center justify-center text-center my-auto">
        {/* Esports Badge & Community Status */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(255,26,53,0.25)]">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span className="font-tech text-xs font-bold tracking-widest uppercase text-red-400">
            ACTIVE COMMUNITY • 2026
          </span>
          <span className="text-red-700">•</span>
          <span className="text-xs text-slate-300 font-tech uppercase">FORMERLY APEX SQUAD</span>
        </div>

        {/* Main Headline */}
        <h1 className="sr-only">WELCOME TO APEX UNIVERSE</h1>
        <div className="w-full max-w-4xl h-28 sm:h-36 md:h-44 lg:h-52 my-1">
          <FluidText
            text={"WELCOME TO\nAPEX UNIVERSE"}
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

        {/* Supported Titles Tags */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {SITE_CONFIG.supportedTitles.map((title) => (
            <span
              key={title}
              className="rounded-lg border border-red-500/30 bg-black/60 px-2.5 py-1 text-xs font-tech font-bold uppercase tracking-wider text-neutral-300 backdrop-blur-sm"
            >
              {title}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed">
          {SITE_CONFIG.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          {/* Button 1: Join Our Discord */}
          <LiquidCarveButton
            label="JOIN OUR DISCORD"
            link={DISCORD_INVITE_URL}
            newTab={true}
            onClick={triggerConfetti}
            fill="#FF1A35"
            textColor="#FFFFFF"
            blob={{ color: "#5865F2", size: 85, smoothness: 55 }}
            rounded={100}
            padding="15px 30px"
            addIcon={true}
            icon={{
              type: "custom",
              customNode: <MessageSquare className="h-4 w-4 text-white" />,
              size: 16,
              color: "#FFFFFF",
            }}
            font={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              letterSpacing: "0.06em",
            }}
            style={{
              boxShadow: "0 0 25px rgba(255,26,53,0.5)",
            }}
          />

          {/* Button 2: Watch Latest Videos */}
          <LiquidCarveButton
            label="WATCH LATEST VIDEOS"
            link="#videos"
            newTab={false}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("videos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            fill="#0E1017"
            textColor="#FFFFFF"
            blob={{ color: "#FF1A35", size: 85, smoothness: 55 }}
            rounded={100}
            padding="15px 30px"
            addIcon={true}
            icon={{
              type: "custom",
              customNode: <Play className="h-4 w-4 fill-red-500 text-red-500" />,
              size: 16,
              color: "#FFFFFF",
            }}
            font={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              letterSpacing: "0.06em",
            }}
            style={{
              border: "1px solid rgba(255,26,53,0.45)",
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* Small Social Icon Links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-widest text-neutral-400 mr-2 hidden sm:inline-block font-tech">
            Connect:
          </span>

          {/* YouTube */}
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-neutral-300 transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:-translate-y-0.5"
          >
            <Video className="h-4 w-4" />
          </a>

          {/* Discord */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Server"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-neutral-300 transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:-translate-y-0.5"
          >
            <MessageSquare className="h-4 w-4" />
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-neutral-300 transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:-translate-y-0.5"
          >
            <Share2 className="h-4 w-4" />
          </a>

          {/* Twitch */}
          <a
            href={TWITCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch Stream"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-neutral-300 transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:-translate-y-0.5"
          >
            <Tv className="h-4 w-4" />
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Group"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-neutral-300 transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:-translate-y-0.5"
          >
            <Users className="h-4 w-4" />
          </a>
        </div>
      </ScrollReveal>

      {/* Stats Row Section */}
      <ScrollReveal direction="up" delayMs={150} className="relative z-10 mx-auto mt-12 w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f17]/80 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-[#121520]/90 hover:shadow-[0_0_20px_rgba(255,26,53,0.2)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-red-950/40 border border-red-500/30 p-2 transition-transform duration-300 group-hover:scale-110">
                  {getStatIcon(stat.icon)}
                </div>
                <span className="font-tech text-[10px] tracking-wider uppercase text-red-400">
                  VERIFIED
                </span>
              </div>
              <div className="mt-3">
                <div className="font-gaming text-2xl sm:text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-400">
                  {stat.label}
                </div>
              </div>
              {/* Bottom Glowing Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Down Scroll Indicator */}
      <div className="mt-8 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center text-neutral-500 hover:text-red-400 transition-colors"
        >
          <span className="text-[10px] uppercase font-tech tracking-widest">EXPLORE</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
