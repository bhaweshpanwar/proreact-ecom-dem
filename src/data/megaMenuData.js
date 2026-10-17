/**
 * E-Comet Official Services Architecture & Mega-Menu Data
 * Source of Truth: E-Comet Developer Handoff Document & Services Brief
 * Defines the 6 core pillars and their sub-services.
 */

export const PILLARS_DATA = [
  {
    id: "ecommerce-management",
    title: "E-Commerce Management",
    shortTitle: "E-Commerce",
    badge: "Marketplaces",
    tagline: "Amazon, Flipkart & Multi-Marketplace Growth",
    description: "Marketplace operations, product listings, catalogue optimisation, advertising support, and ongoing account management.",
    primarySlug: "/ecommerce-management",
    colorHex: "#00B4D8",
    links: [
      { label: "Amazon Seller Account Management", href: "/services/amazon-operations" },
      { label: "Flipkart Seller Account Management", href: "/services/flipkart-management" },
      { label: "Duo Management (Amazon + Flipkart)", href: "/services/marketplace-management" },
      { label: "Listing & Catalogue Optimisation", href: "/services/catalog-listing-optimization" },
      { label: "Marketplace Advertising & Sponsored PPC", href: "/services/marketplace-advertising" },
      { label: "Quick Commerce Operations (Blinkit, Zepto)", href: "/services/quick-commerce" },
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    badge: "Growth & Reach",
    tagline: "Audience Reach, Visibility & Performance Campaigns",
    description: "Build online visibility through social media management, paid advertising, SEO, lead generation, and creative content.",
    primarySlug: "/digital-marketing",
    colorHex: "#FF6B4A",
    links: [
      { label: "Social Media Management", href: "/services/social-media" },
      { label: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads" },
      { label: "Google Ads (Search & Shopping)", href: "/services/google-ads" },
      { label: "Search Engine Optimisation (SEO)", href: "/services/seo" },
      { label: "Inbound Lead Generation", href: "/services/lead-generation" },
      { label: "Email & WhatsApp Marketing", href: "/services/email-whatsapp" },
    ]
  },
  {
    id: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    badge: "Engineering",
    tagline: "High-Performance Websites, Stores & Funnels",
    description: "Professional online presence with business websites, e-commerce stores, landing pages, WordPress, and redesigns.",
    primarySlug: "/website-development",
    colorHex: "#10B981",
    links: [
      { label: "Business & Corporate Websites", href: "/services/websites" },
      { label: "E-Commerce & Shopify Plus Stores", href: "/services/shopify-stores" },
      { label: "WordPress Website Development", href: "/services/wordpress-development" },
      { label: "High-Converting Landing Pages", href: "/services/landing-pages" },
      { label: "Website Redesign & UI/UX Systems", href: "/services/uiux-design" },
      { label: "Website Maintenance & Support", href: "/services/website-maintenance" },
    ]
  },
  {
    id: "youtube-video-services",
    title: "YouTube & Video Services",
    shortTitle: "Video Services",
    badge: "Media Production",
    tagline: "Channel Setup, Editing, Shorts & Video SEO",
    description: "Make your content clearer and more engaging with video editing, Shorts, Reels, thumbnails, and channel support.",
    primarySlug: "/youtube-video-services",
    colorHex: "#F43F5E",
    links: [
      { label: "Long-Form YouTube Video Editing", href: "/services/video-motion" },
      { label: "YouTube Shorts & Instagram Reels", href: "/services/video-motion" },
      { label: "High-CTR Thumbnail Design", href: "/services/youtube-growth" },
      { label: "YouTube Channel Optimisation & SEO", href: "/services/youtube-growth" },
      { label: "Promotional & Product Commercials", href: "/services/product-video-production" },
      { label: "Multi-Platform Content Repurposing", href: "/services/video-motion" },
    ]
  },
  {
    id: "creative-services",
    title: "Creative Services",
    shortTitle: "Creative",
    badge: "Brand Design",
    tagline: "Brand Identity, Infographics, Ads & Packaging",
    description: "Transform business ideas into clear, consistent visual experiences that support brand recognition and communication.",
    primarySlug: "/creative-services",
    colorHex: "#8B5CF6",
    links: [
      { label: "Brand Identity & Logo Design", href: "/services/brand-identity" },
      { label: "E-Commerce Infographics & A+ Visuals", href: "/services/catalog-listing-optimization" },
      { label: "Social Media Creative & Carousels", href: "/services/graphic-design" },
      { label: "Advertising & Promotional Visuals", href: "/services/graphic-design" },
      { label: "Packaging & Product Label Design", href: "/services/packaging-design" },
      { label: "Strategic Copywriting & Voice", href: "/services/content-copywriting" },
    ]
  },
  {
    id: "integrated-solutions",
    title: "Integrated Digital Solutions",
    shortTitle: "Integrated",
    badge: "Multi-Discipline",
    tagline: "Coordinated Multi-Discipline Growth Packages",
    description: "Combines two or more E-Comet services into one coordinated scope so you work with one unified growth partner.",
    primarySlug: "/integrated-solutions",
    colorHex: "#F59E0B",
    links: [
      { label: "E-Commerce + Digital Marketing", href: "/services/integrated-solutions" },
      { label: "Website + SEO + Digital Marketing", href: "/services/integrated-solutions" },
      { label: "Website + E-Commerce Operations", href: "/services/integrated-solutions" },
      { label: "Social Media + Creative + Video", href: "/services/integrated-solutions" },
      { label: "Complete Brand Development", href: "/services/integrated-solutions" },
      { label: "Custom Multi-Service Solutions", href: "/services/integrated-solutions" },
    ]
  }
];

export const MEGA_MENU_DATA = {
  pillars: PILLARS_DATA,
  featured: {
    tag: "CUSTOM QUOTATION",
    title: "Ready to Take Your Business to the Next Orbit?",
    desc: "Tell us what you are building and where you want to go. We will discuss the services that fit your goals.",
    cta: "Get a Custom Quote",
    href: "#closing"
  }
};
