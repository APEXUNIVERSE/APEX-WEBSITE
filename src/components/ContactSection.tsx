"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  DISCORD_INVITE_URL,
  WHATSAPP_GROUP_URL,
  YOUTUBE_CHANNEL_URL,
  INSTAGRAM_URL,
  TWITCH_URL,
  CONTACT_EMAIL,
  CONTACT_SUBJECT_OPTIONS,
} from "@/config/siteData";
import {
  Mail,
  Send,
  MessageSquare,
  Users,
  Video,
  Share2,
  Tv,
  CheckCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import FluidText from "@/components/FluidText";
import LiquidCarveButton from "@/components/LiquidCarveButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discordUser: "",
    subject: CONTACT_SUBJECT_OPTIONS[0],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#ff1a35", "#ef4444", "#ff4d6d", "#ffffff"],
      });
    }, 900);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact APEX UNIVERSE"
      className="relative pt-3 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-0 overflow-hidden"
    >
      {/* Top Section Transition Divider - Sits behind the floating banner */}
      <div className="pt-1 pb-3">
        <SectionDivider className="mb-4 sm:mb-5" />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-6xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,26,53,0.2)]">
              <Mail className="h-3.5 w-3.5 text-red-400" />
              <span className="font-tech tracking-wider uppercase">GET IN TOUCH</span>
            </div>

            <h2 className="sr-only">CONTACT APEX UNIVERSE</h2>
            <div className="w-full max-w-6xl mx-auto h-20 sm:h-24 md:h-28 my-1">
              <FluidText
                text="CONTACT APEX UNIVERSE"
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
              Have a collaboration idea, tournament proposal, sponsorship inquiry, or question for our team? Send us a message.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0d0f17]/85 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-950/50 text-red-400 border border-red-500/50 shadow-[0_0_30px_rgba(255,26,53,0.4)]">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-gaming text-2xl font-bold text-white">
                  Message Transmitted!
                </h3>
                <p className="mt-2 max-w-md text-sm text-neutral-300">
                  Thank you, <span className="text-red-400 font-bold">{formData.name}</span>. Our community team will review your dispatch and follow up via Discord or Email shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      discordUser: "",
                      subject: CONTACT_SUBJECT_OPTIONS[0],
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-xl border border-red-500/40 bg-red-950/40 px-6 py-2.5 font-tech text-xs font-bold uppercase tracking-wider text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Drake"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0c0e14] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0c0e14] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Discord Username */}
                  <div>
                    <label
                      htmlFor="discordUser"
                      className="block font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Discord Username
                    </label>
                    <input
                      id="discordUser"
                      type="text"
                      placeholder="username#0000 or @handle"
                      value={formData.discordUser}
                      onChange={(e) => setFormData({ ...formData, discordUser: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0c0e14] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Subject Inquiry <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0c0e14] px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                    >
                      {CONTACT_SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#12151f] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-tech text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your team, event proposal, partnership details, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#0c0e14] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="w-full pt-2">
                  <LiquidCarveButton
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                    fill="#FF1A35"
                    textColor="#FFFFFF"
                    blob={{ color: "#880815", size: 95, smoothness: 55 }}
                    rounded={100}
                    padding="16px 32px"
                    addIcon={true}
                    icon={{
                      type: "custom",
                      customNode: <Send className="h-4 w-4 text-white" />,
                      size: 16,
                      color: "#FFFFFF",
                      side: "right",
                    }}
                    font={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                    }}
                    style={{
                      width: "100%",
                      boxShadow: "0 0 25px rgba(255,26,53,0.5)",
                    }}
                  />
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Panel */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#0d0f17]/85 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-600 p-2 text-white shadow-[0_0_15px_rgba(255,26,53,0.5)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-gaming text-lg font-bold uppercase text-white">
                    Direct Comms
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Official channels & links
                  </p>
                </div>
              </div>

              {/* Contact Channels List */}
              <div className="space-y-4">
                {/* Discord Server */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-red-500/40">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-red-400" />
                      Discord Server
                    </span>
                    <button
                      onClick={() => handleCopy(DISCORD_INVITE_URL, "discord")}
                      aria-label="Copy Discord link"
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {copiedLink === "discord" ? "Copied!" : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-red-400 break-all"
                  >
                    <span className="truncate">{DISCORD_INVITE_URL}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-1 text-neutral-500" />
                  </a>
                </div>

                {/* WhatsApp Group */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-red-500/40">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-red-400" />
                      WhatsApp Group
                    </span>
                    <button
                      onClick={() => handleCopy(WHATSAPP_GROUP_URL, "whatsapp")}
                      aria-label="Copy WhatsApp link"
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {copiedLink === "whatsapp" ? "Copied!" : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <a
                    href={WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-red-400 break-all"
                  >
                    <span className="truncate">{WHATSAPP_GROUP_URL}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-1 text-neutral-500" />
                  </a>
                </div>

                {/* YouTube */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-red-500/40">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                      <Video className="h-3.5 w-3.5 text-red-400" />
                      YouTube Channel
                    </span>
                    <button
                      onClick={() => handleCopy(YOUTUBE_CHANNEL_URL, "youtube")}
                      aria-label="Copy YouTube link"
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {copiedLink === "youtube" ? "Copied!" : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-red-400 break-all"
                  >
                    <span className="truncate">{YOUTUBE_CHANNEL_URL}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-1 text-neutral-500" />
                  </a>
                </div>

                {/* Instagram */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-red-500/40">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                      <Share2 className="h-3.5 w-3.5 text-rose-400" />
                      Instagram
                    </span>
                    <button
                      onClick={() => handleCopy(INSTAGRAM_URL, "instagram")}
                      aria-label="Copy Instagram link"
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {copiedLink === "instagram" ? "Copied!" : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-rose-400 break-all"
                  >
                    <span className="truncate">{INSTAGRAM_URL}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-1 text-neutral-500" />
                  </a>
                </div>

                {/* Email Address */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-red-500/40">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-red-400" />
                      Email
                    </span>
                    <button
                      onClick={() => handleCopy(CONTACT_EMAIL, "email")}
                      aria-label="Copy Email link"
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {copiedLink === "email" ? "Copied!" : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-red-400 break-all"
                  >
                    <span className="truncate">{CONTACT_EMAIL}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 ml-1 text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Clickable Social Media Icon Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="block text-xs font-tech font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Video className="h-4 w-4" />
                </a>

                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-neutral-300 hover:border-rose-500 hover:text-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all"
                >
                  <Share2 className="h-4 w-4" />
                </a>

                <a
                  href={TWITCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitch"
                  className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Tv className="h-4 w-4" />
                </a>

                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-neutral-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,26,53,0.4)] transition-all"
                >
                  <Users className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
}
