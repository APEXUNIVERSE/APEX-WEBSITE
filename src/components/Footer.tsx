"use client";

import React from "react";
import Image from "next/image";
import {
  NAV_LINKS,
  DISCORD_INVITE_URL,
  WHATSAPP_GROUP_URL,
  YOUTUBE_CHANNEL_URL,
  INSTAGRAM_URL,
  TWITCH_URL,
  SITE_CONFIG,
} from "@/config/siteData";
import {
  MessageSquare,
  Users,
  Video,
  Share2,
  Tv,
  ArrowUp,
} from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import LiquidCarveButton from "@/components/LiquidCarveButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative bg-[#050608]/75 backdrop-blur-sm pt-12 pb-12 px-4 sm:px-6 lg:px-8 text-neutral-400 overflow-hidden"
    >
      {/* Top Transition Divider */}
      <SectionDivider className="mb-14" />

      {/* Background ambient red accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[650px] bg-red-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-red-500/15">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden bg-black border border-neutral-800">
                  <Image
                    src="/apex-wolf-logo.png"
                    alt="APEX UNIVERSE Mascot"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                <span className="font-gaming text-xl font-black tracking-wider text-white">
                  {SITE_CONFIG.brandName}
                </span>
              </div>

              <p className="mt-4 max-w-md text-sm text-neutral-300 leading-relaxed font-tech tracking-wide text-base">
                “{SITE_CONFIG.shortTagline}”
              </p>

              <p className="mt-2 max-w-md text-xs text-neutral-400 leading-relaxed">
                The premier hub for competitive esports players, clutch submission creators, scrim tournaments, and discord squad finding.
              </p>
            </div>

            {/* Direct Discord & WhatsApp Join Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <LiquidCarveButton
                label="DISCORD"
                link={DISCORD_INVITE_URL}
                newTab={true}
                fill="#0E1017"
                textColor="#FFFFFF"
                blob={{ color: "#5865F2", size: 70, smoothness: 55 }}
                rounded={100}
                padding="10px 22px"
                addIcon={true}
                icon={{
                  type: "custom",
                  customNode: <MessageSquare className="h-3.5 w-3.5 text-[#5865F2]" />,
                  size: 14,
                  color: "#FFFFFF",
                }}
                font={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                }}
                style={{
                  border: "1px solid rgba(88,101,242,0.4)",
                  boxShadow: "0 0 15px rgba(88,101,242,0.25)",
                }}
              />

              <LiquidCarveButton
                label="WHATSAPP"
                link={WHATSAPP_GROUP_URL}
                newTab={true}
                fill="#0E1017"
                textColor="#FFFFFF"
                blob={{ color: "#25D366", size: 70, smoothness: 55 }}
                rounded={100}
                padding="10px 22px"
                addIcon={true}
                icon={{
                  type: "custom",
                  customNode: <Users className="h-3.5 w-3.5 text-[#25D366]" />,
                  size: 14,
                  color: "#FFFFFF",
                }}
                font={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                }}
                style={{
                  border: "1px solid rgba(37,211,102,0.4)",
                  boxShadow: "0 0 15px rgba(37,211,102,0.25)",
                }}
              />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-gaming text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-tech text-neutral-400 hover:text-red-400 transition-colors uppercase tracking-wider text-xs block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons & Community links */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-gaming text-xs font-bold uppercase tracking-widest text-white mb-4">
                Official Channels
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                Follow our official accounts for tournament announcements, highlight shorts, and community polls.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="rounded-lg border border-white/10 bg-black/60 p-2 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Video className="h-4 w-4" />
                </a>

                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord Server"
                  className="rounded-lg border border-white/10 bg-black/60 p-2 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(255,26,53,0.4)] transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="rounded-lg border border-white/10 bg-black/60 p-2 text-neutral-300 hover:border-rose-500 hover:text-rose-400 hover:shadow-[0_0_12px_rgba(244,63,94,0.4)] transition-all"
                >
                  <Share2 className="h-4 w-4" />
                </a>

                <a
                  href={TWITCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitch Live Stream"
                  className="rounded-lg border border-white/10 bg-black/60 p-2 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Tv className="h-4 w-4" />
                </a>

                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Community"
                  className="rounded-lg border border-white/10 bg-black/60 p-2 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Users className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-8 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 rounded-xl border border-red-500/30 bg-black/80 px-4 py-2 font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 hover:border-red-500 hover:text-red-400 hover:bg-red-950/30 transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-neutral-500">
          <div>
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.copyrightOwner} ({SITE_CONFIG.brandSubtitle}). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-tech">
            <a
              href="mailto:teamapexsquads@gmail.com"
              className="text-neutral-400 hover:text-red-400 transition-colors"
            >
              teamapexsquads@gmail.com
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://github.com/APEXUNIVERSE/APEX-WEBSITE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-red-400 transition-colors"
            >
              github.com/APEXUNIVERSE/APEX-WEBSITE
            </a>
          </div>

          <div className="font-tech text-xs tracking-wider text-neutral-500">
            {SITE_CONFIG.footerSubtext}
          </div>
        </div>
      </div>
    </footer>
  );
}
