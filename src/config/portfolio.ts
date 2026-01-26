// ========================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ========================================

export const portfolioConfig = {
  // Personal Information
  name: "SANTOSH KUMAR",
  title: "VIDEO EDITOR",
  subtitle: "YOUTUBE : EditFlareMedia",

  // About Section
  about: {
    yearsExperience: "5+",
    description: `In my 5+ years as a video editor, specializing in Adobe Premiere Pro & After Effects on YouTube videos and Instagram reels, I've had the honor of collaborating with a variety of clients, crafting visually captivating edits tailored to each platform's unique audience and format. From dynamic vlogs to punchy, attention-grabbing reels, I bring creativity, precision, and a passion for storytelling to every project, ensuring maximum impact and engagement.`,
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/the_editimation/",
    youtube: "https://www.youtube.com/@EditFlareMedia",
    email: "Queries.santosh@gmail.com",
    whatsapp: "916205789970", // Replace with your actual WhatsApp number (with country code, no + sign)
  },

  // Profile Image (replace with your own image URL or import)
  profileImage: "/placeholder.svg",

  // Hero Background Image
  heroBackground: "/placeholder.svg",

  // Portfolio Videos - Add your YouTube video IDs here
  // To get the video ID, copy the part after "v=" in the YouTube URL
  // Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ → ID is "dQw4w9WgXcQ"
  videos: [
    {
      id: "RitQ0vEaRbA",
      title: "Show reels",
      category: "YouTube",
    },
    {
      id: "ypoTEhZEVvg",
      title: "Short Edit",
      category: "YouTube",
    },
    {
      id: "TZV4sumxi7k",
      title: "Documentry style Video",
      category: "YouTube",
    },
    {
      id: "OYs4DGrFid0",
      title: "Map Animation",
      category: "Youtube",
    },
    {
      id: "25eePvHgv2Y",
      title: "Documentary",
      category: "YouTube",
    },
    {
      id: "aSte18D2_YE",
      title: "SaaS Video",
      category: "YouTube",
    },
    {
      id:"f04u-7ditpY",
      title: "Long Form",
      Category: "Youtube",
    },
    {
      id: "slD0uPfVRkc",
      title: "Long Form",
      Category: "Youtube",
    },
    {
      id: "bwdq9zBftB8",
      title: "Long Form",
      Category: "Youtube",
    },
    {
      id: "X-qanHnl0Cs",
      title: "Long Form",
      Category: "Youtube"
    },
  ],

  // Services Offered
  services: [
    {
      title: "YouTube Editing",
      description: "Full video production from raw footage to final export",
      icon: "youtube",
    },
    {
      title: "Instagram Reels",
      description: "Short-form, attention-grabbing content",
      icon: "film",
    },
    {
      title: "Motion Graphics",
      description: "Custom animations and visual effects",
      icon: "sparkles",
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading",
      icon: "palette",
    },
  ],

  // Testimonials - Your Clients
  // platform: "youtube" will auto-fetch profile picture
  // platform: "instagram" requires manual avatar (API restrictions)
  testimonials: [
    {
      name: "Anmol From India",
      role: "YouTuber",
      text: "Amazing editing skills! The content quality improved significantly.",
      avatar: "/placeholder.svg", // Fallback only
      link: "https://www.youtube.com/@anmolfromindia",
      platform: "youtube" as const,
      handle: "anmolfromindia",
    },
    {
      name: "TechCM Shorts",
      role: "YouTuber",
      text: "Professional and creative edits that boosted our engagement.",
      avatar: "/placeholder.svg",
      link: "https://www.youtube.com/@techcmshorts",
      platform: "youtube" as const,
      handle: "techcmshorts",
    },
    {
      name: "Creator Adarsh",
      role: "Instagram Creator",
      text: "Exceptional reels editing that helped grow my audience.",
      avatar: "/placeholder.svg", // Manual upload needed for Instagram
      link: "https://www.instagram.com/creator.adarshh/",
      platform: "instagram" as const,
    },
    {
      name: "Kagan Dunlap",
      role: "YouTuber",
      text: "Outstanding work on every project. Highly recommended!",
      avatar: "/placeholder.svg",
      link: "https://www.youtube.com/@kagan.dunlap",
      platform: "youtube" as const,
      handle: "kagan.dunlap",
    },
    {
      name: "Zack D Films",
      role: "YouTuber",
      text: "Creative vision and attention to detail in every edit.",
      avatar: "/placeholder.svg",
      link: "https://www.youtube.com/@zackdfilms",
      platform: "youtube" as const,
      handle: "zackdfilms",
    },
    {
      name: "Battle Tested Lawyer",
      role: "Instagram Creator",
      text: "Professional editing that elevated my content quality.",
      avatar: "/placeholder.svg", // Manual upload needed for Instagram
      link: "https://www.instagram.com/battletestedlawyer/",
      platform: "instagram" as const,
    },
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
