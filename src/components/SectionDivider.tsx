"use client";

import React from "react";

interface SectionDividerProps {
  accentColor?: string;
  className?: string;
}

export default function SectionDivider({
  accentColor = "via-red-500/35",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full flex items-center justify-center overflow-hidden py-1 pointer-events-none ${className}`}
    >
      {/* Soft Ambient Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-80 sm:w-[500px] rounded-full bg-red-600/10 blur-2xl" />

      {/* Tapered Gradient Hairline */}
      <div className={`relative h-[1px] w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent ${accentColor} to-transparent`} />

      {/* Cyber Center Node Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="h-1.5 w-1.5 rotate-45 bg-red-500/80 shadow-[0_0_10px_rgba(255,26,53,0.9)]" />
      </div>
    </div>
  );
}
