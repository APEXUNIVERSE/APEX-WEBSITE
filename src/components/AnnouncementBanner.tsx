"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/siteData";
import { Flame, X } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 w-full overflow-hidden border-b border-red-500/30 bg-gradient-to-r from-red-950 via-black to-red-950 py-2 px-4 shadow-[0_2px_15px_rgba(255,26,53,0.2)] animate-gradient-shift"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex flex-1 items-center justify-center gap-2 text-center font-medium text-slate-200">
          <Flame className="hidden sm:inline-block h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span className="truncate tracking-wide text-neutral-200">
            {SITE_CONFIG.bannerAnnouncement}
          </span>
          <span className="hidden lg:inline-flex items-center rounded-full bg-red-500/20 px-2 py-0.5 text-[11px] font-semibold text-red-300 border border-red-500/40">
            SEASON 2026 LIVE
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="rounded p-1 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
