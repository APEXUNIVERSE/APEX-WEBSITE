import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ModeratorsCollaboratorsSection from "@/components/ModeratorsCollaboratorsSection";
import VideoOfTheWeekSection from "@/components/VideoOfTheWeekSection";
import LatestVideosSection from "@/components/LatestVideosSection";
import CommunityCtaSection from "@/components/CommunityCtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollWaveField from "@/components/ScrollWaveField";
import { SITE_CONFIG, DISCORD_INVITE_URL } from "@/config/siteData";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": SITE_CONFIG.brandName,
    "alternateName": "APEX UNIVERSE Gaming Community",
    "url": SITE_CONFIG.seo.url,
    "description": SITE_CONFIG.seo.description,
    "sameAs": [
      DISCORD_INVITE_URL,
      "https://youtube.com/@apexuniverse-placeholder",
      "https://twitch.tv/apexuniverse_placeholder",
      "https://instagram.com/apexuniverse_placeholder"
    ]
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Particle Canvas for Top Atmosphere */}
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen flex-col bg-black/40">
        {/* 1. Top Announcement Banner */}
        <AnnouncementBanner />

        {/* Sticky Navbar */}
        <Navbar />

        <main className="flex-1">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* Continuous Scroll Wave Field Background from About Section to Last Section */}
          <div className="relative">
            {/* Sticky 3D WebGL Wave Field viewport background */}
            <div className="sticky top-0 h-screen w-full -z-10 pointer-events-none overflow-hidden [margin-bottom:-100vh]">
              <ScrollWaveField
                background="#06070a"
                colors={["#ff1a35", "#ff3b5c", "#e11d48", "#880815", "#ff4d6d"]}
                density={140}
                dotSize={2.2}
                scatter={95}
                cameraHeight={48}
                wave={{
                  waveSpeed: 175,
                  waveHeight: 180,
                  waveLength: 1950,
                }}
                tilt={{
                  tiltStart: 12,
                  rollStart: 0,
                }}
                cursor={{
                  cursorLift: 42,
                  cursorRadius: 26,
                }}
              />
              {/* Soft atmospheric gradient transitions */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-transparent to-[#050608]/85 pointer-events-none" />
            </div>

            <div className="relative z-10">
              {/* 3. About / Community Introduction */}
              <AboutSection />

              {/* 4. APEX Team Members Section */}
              <TeamSection />

              {/* 5. Moderators & Collaborators Section */}
              <ModeratorsCollaboratorsSection />

              {/* 6. Video of the Week Section */}
              <VideoOfTheWeekSection />

              {/* 7. Latest Uploads and Clutches Section */}
              <LatestVideosSection />

              {/* 8. Community Call to Action Section */}
              <CommunityCtaSection />

              {/* 9. Contact Us Section */}
              <ContactSection />

              {/* 10. Footer */}
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
