"use client";

import React, { useState } from "react";
import { VIDEO_OF_THE_WEEK } from "@/config/siteData";
import {
  Play,
  Flame,
  Calendar,
  Eye,
  User,
  ExternalLink,
  Award,
  Sparkles,
} from "lucide-react";
import VideoModal from "./VideoModal";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import FluidText from "@/components/FluidText";
import LiquidCarveButton from "@/components/LiquidCarveButton";

export default function VideoOfTheWeekSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="video-of-week"
      aria-label="Video of the Week"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 overflow-hidden"
    >
      {/* Top Section Transition Divider */}
      <SectionDivider className="mb-20" />

      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-20 right-10 h-80 w-80 rounded-full bg-red-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-rose-700/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-6xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.25)]">
              <Flame className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span className="font-tech tracking-wider uppercase">COMMUNITY SPOTLIGHT</span>
            </div>

            <h2 className="sr-only">VIDEO OF THE WEEK</h2>
            <div className="w-full max-w-6xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="VIDEO OF THE WEEK"
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
              Hand-voted by the APEX UNIVERSE community as the most clutch, high-IQ round of the week.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Featured Video Embed Placeholder */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-red-500/30 bg-[#0d0f17]/85 p-5 sm:p-6 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            {/* Thumbnail / Player Placeholder */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950 via-[#0e1017] to-black group">
              {/* Cyber grid in background */}
              <div className="absolute inset-0 bg-cyber-grid opacity-30" />
              <div className="absolute inset-0 bg-radial-vignette" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-red-600 px-2.5 py-1 text-[11px] font-tech font-bold uppercase tracking-wider text-white shadow-md shadow-red-950">
                  <Flame className="h-3 w-3 fill-white" />
                  HOT CLUTCH
                </span>
                <span className="rounded-md bg-black/75 backdrop-blur-md border border-red-500/30 px-2 py-1 text-[11px] font-tech text-red-300">
                  {VIDEO_OF_THE_WEEK.gameBadge}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-20">
                <span className="rounded-md bg-black/80 backdrop-blur-md px-2 py-1 font-tech text-xs text-white border border-red-500/30">
                  {VIDEO_OF_THE_WEEK.duration}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Play featured video"
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105 focus:outline-none"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-rose-500 p-[2px] shadow-[0_0_30px_rgba(255,26,53,0.6)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(255,26,53,0.9)]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-black/85 transition-colors group-hover:bg-black/60">
                    <Play className="h-8 w-8 fill-red-500 text-red-500 ml-1 transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <span className="font-tech text-xs font-bold tracking-widest uppercase text-white bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-red-500/40 group-hover:border-red-400">
                  Click to Preview Clutch
                </span>
              </button>

              {/* Bottom scanline gradient */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            </div>

            {/* Video Details */}
            <div className="mt-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-gaming text-xl sm:text-2xl font-bold text-white">
                  {VIDEO_OF_THE_WEEK.title}
                </h3>
                <h4 className="font-tech text-sm font-semibold text-red-400 mt-1">
                  {VIDEO_OF_THE_WEEK.subtitle}
                </h4>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {VIDEO_OF_THE_WEEK.description}
                </p>
              </div>

              {/* Meta Stats & Watch Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-red-400" />
                    <span>By: <strong className="text-white">{VIDEO_OF_THE_WEEK.creatorName}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-neutral-300" />
                    <span>{VIDEO_OF_THE_WEEK.dateUploaded}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5 text-red-400" />
                    <span>{VIDEO_OF_THE_WEEK.viewCount}</span>
                  </div>
                </div>

                <LiquidCarveButton
                  label="WATCH ON YOUTUBE"
                  link={VIDEO_OF_THE_WEEK.youtubeUrl}
                  newTab={true}
                  fill="#FF1A35"
                  textColor="#FFFFFF"
                  blob={{ color: "#880815", size: 70, smoothness: 55 }}
                  rounded={100}
                  padding="10px 22px"
                  addIcon={true}
                  icon={{
                    type: "custom",
                    customNode: <ExternalLink className="h-3.5 w-3.5 text-white" />,
                    size: 14,
                    color: "#FFFFFF",
                    side: "right",
                  }}
                  font={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 800,
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                  }}
                  style={{
                    boxShadow: "0 0 15px rgba(255,26,53,0.4)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: "Why this is featured" Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-red-500/30 bg-[#0d0f17]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-950/60 text-red-400 border border-red-500/40">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-gaming text-xl font-bold uppercase text-white">
                    Why This Is Featured
                  </h3>
                  <p className="text-xs font-tech tracking-wider uppercase text-red-400">
                    Staff Breakdown & Criteria
                  </p>
                </div>
              </div>

              {/* Reasons List */}
              <div className="mt-8 space-y-6">
                {VIDEO_OF_THE_WEEK.whyFeatured.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-950 text-red-300 text-xs font-bold font-gaming border border-red-500/40">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-tech text-base font-bold text-white group-hover:text-red-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit clip callout */}
            <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-950/30 p-5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-red-400" />
                <span className="font-gaming text-xs font-bold uppercase tracking-wider text-red-300">
                  Got an Insane Play?
                </span>
              </div>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                Post your 30s clips in the <strong className="text-red-400">#clip-submissions</strong> Discord channel. Community votes close every Sunday evening!
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

      {/* Video Preview Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        video={{
          title: VIDEO_OF_THE_WEEK.title,
          creator: VIDEO_OF_THE_WEEK.creatorName,
          category: VIDEO_OF_THE_WEEK.gameBadge,
          viewCount: VIDEO_OF_THE_WEEK.viewCount,
          youtubeUrl: VIDEO_OF_THE_WEEK.youtubeUrl,
          embedVideoId: VIDEO_OF_THE_WEEK.embedVideoId,
        }}
      />
    </section>
  );
}
