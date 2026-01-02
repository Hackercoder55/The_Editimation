// ========================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ========================================

export const portfolioConfig = {
  // Personal Information
  name: "AMAN VASHIST",
  title: "VIDEO EDITOR",
  subtitle: "YOUTUBE : NichLmao",
  
  // About Section
  about: {
    yearsExperience: "5+",
    description: `In my 5+ years as a video editor, specializing in Adobe Premiere Pro & After Effects on YouTube videos and Instagram reels, I've had the honor of collaborating with a variety of clients, crafting visually captivating edits tailored to each platform's unique audience and format. From dynamic vlogs to punchy, attention-grabbing reels, I bring creativity, precision, and a passion for storytelling to every project, ensuring maximum impact and engagement.`,
    skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading", "Sound Design"],
  },
  
  // Social Links
  socials: {
    instagram: "https://www.instagram.com/real._menace_02/",
    youtube: "https://youtube.com/@NichLmao",
    email: "contact@amanvashist.com",
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
      id: "dQw4w9WgXcQ",
      title: "Cinematic Edit",
      category: "YouTube",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Vlog Edit",
      category: "YouTube",
    },
    {
      id: "9bZkp7q19f0",
      title: "Music Video",
      category: "YouTube",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Short Form",
      category: "Reels",
    },
    {
      id: "RgKAFK5djSk",
      title: "Documentary",
      category: "YouTube",
    },
    {
      id: "JGwWNGJdvx8",
      title: "Gaming Edit",
      category: "YouTube",
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
  
  // Testimonials
  testimonials: [
    {
      name: "Creator Name",
      role: "YouTuber • 1M Subscribers",
      text: "Working with Aman transformed my channel. The edits are always on point and delivered on time.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Brand Name",
      role: "Marketing Director",
      text: "Exceptional quality and creativity. Our engagement rates doubled after working together.",
      avatar: "/placeholder.svg",
    },
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
