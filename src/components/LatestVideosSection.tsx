"use client";

import React, { useState } from "react";
import { LATEST_VIDEOS, VideoItem, YOUTUBE_CHANNEL_URL } from "@/config/siteData";
import {
  Play,
  Video,
  Clock,
  Eye,
  ExternalLink,
  Flame,
} from "lucide-react";
import VideoModal from "./VideoModal";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import StarfieldButton from "@/components/StarfieldButton";
import FluidText from "@/components/FluidText";
import LiquidCarveButton from "@/components/LiquidCarveButton";

const CATEGORIES = [
  "All",
  "Clutch",
  "Gameplay",
  "Tournament",
  "Highlights",
  "Funny Moments",
  "Shorts",
];

export default function LatestVideosSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  const filteredVideos =
    selectedCategory === "All"
      ? LATEST_VIDEOS
      : LATEST_VIDEOS.filter((v) => v.category === selectedCategory);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Clutch":
        return "bg-red-600 text-white border-red-500 font-black shadow-sm shadow-red-950";
      case "Gameplay":
        return "bg-red-950/60 text-red-300 border-red-500/40";
      case "Tournament":
        return "bg-rose-950/60 text-rose-200 border-rose-500/40 font-bold";
      case "Highlights":
        return "bg-neutral-900 text-neutral-200 border-red-500/30";
      case "Funny Moments":
        return "bg-neutral-900 text-red-300 border-red-500/30";
      case "Shorts":
        return "bg-red-950/50 text-red-200 border-red-500/40";
      default:
        return "bg-neutral-900 text-neutral-300 border-neutral-800";
    }
  };

  return (
    <section
      id="videos"
      aria-label="Latest Videos and Clutches"
      className="relative pt-3 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-0 overflow-hidden"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.2)]">
              <Video className="h-3.5 w-3.5 text-red-400" />
              <span className="font-tech tracking-wider uppercase">COMMUNITY VAULT</span>
            </div>

            <h2 className="sr-only">LATEST UPLOADS AND CLUTCHES</h2>
            <div className="w-full max-w-7xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="LATEST UPLOADS AND CLUTCHES"
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
              High-octane gameplays, 1vX comeback clutches, hilarious voice comms, and tournament finishes.
            </p>

            {/* Category Filter Badges powered by StarfieldButton */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((category) => (
                <StarfieldButton
                  key={category}
                  label={category}
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  padding="7px 16px"
                  rounded={100}
                  font={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Video Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video, idx) => (
            <ScrollReveal key={video.id} direction="up" delayMs={60 * ((idx % 3) + 1)}>
              <div
                className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f17]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-[#121520] hover:shadow-[0_15px_30px_rgba(255,26,53,0.2)]"
              >
              <div>
                {/* Video Thumbnail Placeholder */}
                <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${video.thumbnailPlaceholderColor} p-4 border-b border-red-500/20`}>
                  {/* Cyber Grid Pattern */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-30" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`rounded-md border px-2.5 py-0.5 font-tech text-[10px] font-black uppercase tracking-wider ${getCategoryBadgeClass(
                        video.category
                      )}`}
                    >
                      {video.category}
                    </span>

                    <span className="rounded-md bg-black/80 border border-red-500/30 backdrop-blur-md px-2 py-0.5 font-tech text-xs text-neutral-300">
                      {video.duration}
                    </span>
                  </div>

                  {/* Optional Featured Tag */}
                  {video.featuredTag && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-tech font-bold uppercase tracking-wider text-white shadow shadow-red-950">
                        <Flame className="h-2.5 w-2.5" />
                        {video.featuredTag}
                      </span>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideoModal(video)}
                    aria-label={`Play ${video.title}`}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 focus:outline-none"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20 border border-red-500/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,26,53,0.4)] group-hover:bg-red-600 group-hover:text-white text-red-400 transition-all duration-300">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                  </button>
                </div>

                {/* Video Info Content */}
                <div className="p-5">
                  <h3 className="font-gaming text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 min-h-[3rem]">
                    {video.title}
                  </h3>

                  <div className="mt-2 text-xs text-neutral-400">
                    By <strong className="text-white">{video.creator}</strong>
                  </div>
                </div>
              </div>

              {/* Bottom Meta & Watch Now Button */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-red-400" />
                      {video.uploadDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3 text-rose-400" />
                      {video.viewCount}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveVideoModal(video)}
                    className="inline-flex items-center gap-1 rounded-lg bg-red-950/40 border border-red-500/30 px-3 py-1.5 font-tech text-xs font-bold uppercase tracking-wider text-red-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all"
                  >
                    <span>Watch Now</span>
                    <Play className="h-2.5 w-2.5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* View All Videos CTA */}
      <ScrollReveal direction="up" delayMs={150}>
        <div className="mt-14 text-center">
          <LiquidCarveButton
            label="VIEW ALL VIDEOS ON YOUTUBE"
            link={YOUTUBE_CHANNEL_URL}
            newTab={true}
            fill="#0E1017"
            textColor="#FFFFFF"
            blob={{ color: "#FF1A35", size: 85, smoothness: 55 }}
            rounded={100}
            padding="15px 32px"
            addIcon={true}
            icon={{
              type: "custom",
              customNode: <Video className="h-4 w-4 text-red-400" />,
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
              boxShadow: "0 0 25px rgba(255,26,53,0.3)",
            }}
          />
        </div>
      </ScrollReveal>
    </div>

      {/* Video Modal Preview */}
      {activeVideoModal && (
        <VideoModal
          isOpen={!!activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          video={{
            title: activeVideoModal.title,
            creator: activeVideoModal.creator,
            category: activeVideoModal.category,
            viewCount: activeVideoModal.viewCount,
            youtubeUrl: activeVideoModal.youtubeUrl,
            embedVideoId: activeVideoModal.embedVideoId,
          }}
        />
      )}
    </section>
  );
}
