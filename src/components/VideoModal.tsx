"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Play } from "lucide-react";
import { YOUTUBE_CHANNEL_URL } from "@/config/siteData";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    creator?: string;
    youtubeUrl?: string;
    embedVideoId?: string;
    category?: string;
    viewCount?: string;
  } | null;
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-red-500/50 bg-[#0d0f17] shadow-[0_0_50px_rgba(255,26,53,0.3)]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
            <h3
              id="video-modal-title"
              className="font-gaming text-sm sm:text-base font-bold text-white truncate max-w-md"
            >
              {video.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-xl border border-red-500/40 bg-red-950/40 p-2 text-red-300 hover:bg-red-600 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          {video.embedVideoId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.embedVideoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-red-950/60 via-[#0e1017] to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/20 border border-red-500/60 shadow-[0_0_30px_rgba(255,26,53,0.5)]">
                <Play className="h-8 w-8 fill-red-500 text-red-500 ml-1" />
              </div>
              <p className="mt-4 font-gaming text-lg font-bold text-white">
                YouTube Video Player Placeholder
              </p>
              <p className="mt-2 max-w-md text-xs sm:text-sm text-neutral-400">
                Replace with your actual YouTube video embed ID in <code className="text-red-400">src/config/siteData.ts</code> to stream instantly.
              </p>
              <a
                href={video.youtubeUrl || YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,26,53,0.4)] hover:brightness-110 transition-all"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* Bottom Details Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 bg-black/60 px-6 py-4">
          <div className="flex items-center gap-3 text-xs text-neutral-300">
            {video.creator && (
              <span>
                Creator: <strong className="text-white">{video.creator}</strong>
              </span>
            )}
            {video.category && (
              <span className="rounded bg-red-950/60 border border-red-500/40 px-2 py-0.5 text-red-300">
                {video.category}
              </span>
            )}
            {video.viewCount && <span className="text-neutral-400">{video.viewCount}</span>}
          </div>

          <a
            href={video.youtubeUrl || YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-wider text-red-400 hover:text-rose-300"
          >
            <span>Open in YouTube Channel</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
