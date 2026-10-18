/**
 * E-Comet Official Services Architecture & Mega-Menu Data
 * Source of Truth: E-Comet Developer Handoff Document & Services Brief
 * Defines the 6 core pillars, their sub-services, and multi-column expanded sub-pillars.
 */

export const PILLARS_DATA = [
  {
    id: "ecommerce-management",
    title: "E-Commerce Management",
    shortTitle: "E-Commerce",
    badge: "Marketplaces",
    tagline: "Amazon, Flipkart & Multi-Marketplace Growth",
    description: "Marketplace operations, product listings, catalogue optimisation, advertising support, and ongoing account management.",
    primarySlug: "/services/ecommerce-management",
    colorHex: "#00B4D8",
    links: [
      { label: "Amazon Seller Account Management", href: "/services/amazon-operations" },
      { label: "Flipkart Seller Account Management", href: "/services/flipkart-management" },
      { label: "Duo Management (Amazon + Flipkart)", href: "/services/marketplace-management" },
      { label: "Listing & Catalogue Optimisation", href: "/services/catalog-listing-optimization" },
      { label: "Marketplace Advertising & Sponsored PPC", href: "/services/marketplace-advertising" },
      { label: "Quick Commerce Operations (Blinkit, Zepto)", href: "/services/quick-commerce" },
    ],
    subPillars: [
      {
        kicker: "Marketplace Leaders",
        links: [
          { label: "Amazon Seller Account Management", href: "/services/amazon-operations" },
          { label: "Flipkart Seller Account Management", href: "/services/flipkart-management" },
          { label: "Amazon PPC & Sponsored Ads", href: "/services/marketplace-advertising" },
          { label: "Flipkart PLA & Performance Ads", href: "/services/marketplace-advertising" },
          { label: "Amazon Brand Store & A+ Visuals", href: "/services/catalog-listing-optimization" },
        ]
      },
      {
        kicker: "Fashion & Multi-Marketplaces",
        links: [
          { label: "Meesho Seller Growth & Ops", href: "/services/marketplace-management" },
          { label: "Myntra Brand Portal & Listing", href: "/services/marketplace-management" },
          { label: "Nykaa & Nykaa Man Operations", href: "/services/marketplace-management" },
          { label: "Tata 1mg, Ajio & Marketplace Duo", href: "/services/marketplace-management" },
          { label: "Cross-Marketplace Inventory Sync", href: "/services/marketplace-management" },
        ]
      },
      {
        kicker: "Quick Commerce & Catalogue SEO",
        links: [
          { label: "Blinkit Brand & Darkstore Ops", href: "/services/quick-commerce" },
          { label: "Zepto & Instamart Rapid Fulfillment", href: "/services/quick-commerce" },
          { label: "Listing & Catalogue SEO Indexing", href: "/services/catalog-listing-optimization" },
          { label: "Buy-Box Defense & Margin Audits", href: "/services/ecommerce-management" },
          { label: "Account Health & Escalation Desk", href: "/services/ecommerce-management" },
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    badge: "Growth & Reach",
    tagline: "Audience Reach, Visibility & Performance Campaigns",
    description: "Build online visibility through social media management, paid advertising, SEO, lead generation, and creative content.",
    primarySlug: "/services/digital-marketing",
    colorHex: "#FF6B4A",
    links: [
      { label: "Social Media Management", href: "/services/social-media" },
      { label: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads" },
      { label: "Google Ads (Search & Shopping)", href: "/services/google-ads" },
      { label: "Search Engine Optimisation (SEO)", href: "/services/seo" },
      { label: "Inbound Lead Generation", href: "/services/lead-generation" },
      { label: "Email & WhatsApp Marketing", href: "/services/email-whatsapp" },
    ],
    subPillars: [
      {
        kicker: "Paid Media & Performance",
        links: [
          { label: "Meta Ads (Facebook & Instagram Growth)", href: "/services/meta-ads" },
          { label: "Google Ads (Search, Shopping & PMax)", href: "/services/google-ads" },
          { label: "YouTube Ads & Video Retargeting", href: "/services/google-ads" },
          { label: "ROAS Optimization & Margin Bidding", href: "/services/digital-marketing" },
          { label: "Paid Campaign Restructure & Scaling", href: "/services/digital-marketing" },
        ]
      },
      {
        kicker: "Organic Reach & Search",
        links: [
          { label: "Search Engine Optimisation (Technical SEO)", href: "/services/seo" },
          { label: "Local & E-Commerce Keyword Ranking", href: "/services/seo" },
          { label: "Organic Social Media Management", href: "/services/social-media" },
          { label: "Content Marketing & Thought Leadership", href: "/services/content-copywriting" },
          { label: "Brand Community & Engagement Sprints", href: "/services/social-media" },
        ]
      },
      {
        kicker: "Conversion & Retention",
        links: [
          { label: "Inbound B2B & B2C Lead Generation", href: "/services/lead-generation" },
          { label: "Automated WhatsApp Flow Architecture", href: "/services/email-whatsapp" },
          { label: "Klaviyo & Email Lifecycle Automation", href: "/services/email-whatsapp" },
          { label: "Conversion Rate Optimization (CRO)", href: "/services/landing-pages" },
          { label: "Audience Retargeting & LTV Systems", href: "/services/digital-marketing" },
        ]
      }
    ]
  },
  {
    id: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    badge: "Engineering",
    tagline: "High-Performance Websites, Stores & Funnels",
    description: "Professional online presence with business websites, e-commerce stores, landing pages, WordPress, and redesigns.",
    primarySlug: "/services/website-development",
    colorHex: "#10B981",
    links: [
      { label: "Business & Corporate Websites", href: "/services/websites" },
      { label: "E-Commerce & Shopify Plus Stores", href: "/services/shopify-stores" },
      { label: "WordPress Website Development", href: "/services/wordpress-development" },
      { label: "High-Converting Landing Pages", href: "/services/landing-pages" },
      { label: "Website Redesign & UI/UX Systems", href: "/services/uiux-design" },
      { label: "Website Maintenance & Support", href: "/services/website-maintenance" },
    ],
    subPillars: [
      {
        kicker: "Custom Web & Corporate",
        links: [
          { label: "High-Speed Next.js & React Web Apps", href: "/services/websites" },
          { label: "Corporate & Enterprise Brand Portals", href: "/services/websites" },
          { label: "Full Website Redesign & Modernization", href: "/services/uiux-design" },
          { label: "Technical Core Web Vitals Optimization", href: "/services/website-maintenance" },
          { label: "Custom API & Third-Party Integrations", href: "/services/websites" },
        ]
      },
      {
        kicker: "E-Commerce & Stores",
        links: [
          { label: "Custom Shopify & Shopify Plus Stores", href: "/services/shopify-stores" },
          { label: "WooCommerce High-Volume Architectures", href: "/services/shopify-stores" },
          { label: "Checkout & Cart Conversion Systems", href: "/services/shopify-stores" },
          { label: "Payment Gateway & Logistics Integrations", href: "/services/shopify-stores" },
          { label: "Catalog Architecture & Variant Matrix", href: "/services/shopify-stores" },
        ]
      },
      {
        kicker: "Landing Pages & Support",
        links: [
          { label: "High-Converting Direct Response Pages", href: "/services/landing-pages" },
          { label: "WordPress Custom Theme Engineering", href: "/services/wordpress-development" },
          { label: "UI/UX Design Systems & Wireframing", href: "/services/uiux-design" },
          { label: "24/7 Security, Backups & Maintenance", href: "/services/website-maintenance" },
          { label: "Speed Audits & Mobile Optimization", href: "/services/website-maintenance" },
        ]
      }
    ]
  },
  {
    id: "youtube-video-services",
    title: "YouTube & Video Services",
    shortTitle: "Video Services",
    badge: "Media Production",
    tagline: "Channel Setup, Editing, Shorts & Video SEO",
    description: "Make your content clearer and more engaging with video editing, Shorts, Reels, thumbnails, and channel support.",
    primarySlug: "/services/youtube-video-services",
    colorHex: "#F43F5E",
    links: [
      { label: "Long-Form YouTube Video Editing", href: "/services/video-motion" },
      { label: "YouTube Shorts & Instagram Reels", href: "/services/video-motion" },
      { label: "High-CTR Thumbnail Design", href: "/services/youtube-growth" },
      { label: "YouTube Channel Optimisation & SEO", href: "/services/youtube-growth" },
      { label: "Promotional & Product Commercials", href: "/services/product-video-production" },
      { label: "Multi-Platform Content Repurposing", href: "/services/video-motion" },
    ],
    subPillars: [
      {
        kicker: "Long-Form YouTube Production",
        links: [
          { label: "Commercial Video Editing & Storytelling", href: "/services/video-motion" },
          { label: "Documentary & Narrative YouTube Videos", href: "/services/video-motion" },
          { label: "Podcast Video Production & Multicam", href: "/services/video-motion" },
          { label: "Dynamic Motion Graphics & Sound Design", href: "/services/video-motion" },
          { label: "Color Grading & Cinematic Master Mix", href: "/services/video-motion" },
        ]
      },
      {
        kicker: "Short-Form & Viral Motion",
        links: [
          { label: "High-Retention YouTube Shorts", href: "/services/video-motion" },
          { label: "Instagram Reels & TikTok Video Edits", href: "/services/video-motion" },
          { label: "Captions, B-Roll & Visual Pacing Hooks", href: "/services/video-motion" },
          { label: "Multi-Platform Video Repurposing", href: "/services/video-motion" },
          { label: "Shorts Channel Incubation Sprints", href: "/services/video-motion" },
        ]
      },
      {
        kicker: "Channel Growth & Packaging",
        links: [
          { label: "High-CTR Custom YouTube Thumbnails", href: "/services/youtube-growth" },
          { label: "YouTube Channel Audit & Keyword SEO", href: "/services/youtube-growth" },
          { label: "Title & Packaging Conversion Testing", href: "/services/youtube-growth" },
          { label: "Promotional Product Video Production", href: "/services/product-video-production" },
          { label: "Channel Monetization & Strategy", href: "/services/youtube-growth" },
        ]
      }
    ]
  },
  {
    id: "creative-services",
    title: "Creative Services",
    shortTitle: "Creative",
    badge: "Brand Design",
    tagline: "Brand Identity, Infographics, Ads & Packaging",
    description: "Transform business ideas into clear, consistent visual experiences that support brand recognition and communication.",
    primarySlug: "/services/creative-services",
    colorHex: "#8B5CF6",
    links: [
      { label: "Brand Identity & Logo Design", href: "/services/brand-identity" },
      { label: "E-Commerce Infographics & A+ Visuals", href: "/services/catalog-listing-optimization" },
      { label: "Social Media Creative & Carousels", href: "/services/graphic-design" },
      { label: "Advertising & Promotional Visuals", href: "/services/graphic-design" },
      { label: "Packaging & Product Label Design", href: "/services/packaging-design" },
      { label: "Strategic Copywriting & Voice", href: "/services/content-copywriting" },
    ],
    subPillars: [
      {
        kicker: "Brand Identity & Strategy",
        links: [
          { label: "Logo Design & Visual Identity Systems", href: "/services/brand-identity" },
          { label: "Brand Style Guides & Typography Rules", href: "/services/brand-identity" },
          { label: "Color Palette & Design Systems", href: "/services/brand-identity" },
          { label: "Strategic Copywriting & Brand Voice", href: "/services/content-copywriting" },
          { label: "Brand Re-Positioning & Identity Refresh", href: "/services/brand-identity" },
        ]
      },
      {
        kicker: "E-Commerce & Commercial Design",
        links: [
          { label: "Amazon A+ Content & Infographics", href: "/services/catalog-listing-optimization" },
          { label: "Brand Storefront Design & Layouts", href: "/services/catalog-listing-optimization" },
          { label: "Paid Social High-Converting Ad Creatives", href: "/services/graphic-design" },
          { label: "Performance Banners & Display Assets", href: "/services/graphic-design" },
          { label: "Conversion-Focused Carousel Decks", href: "/services/graphic-design" },
        ]
      },
      {
        kicker: "Packaging & Print",
        links: [
          { label: "Consumer Product Packaging Design", href: "/services/packaging-design" },
          { label: "Box, Bottle & Pouch Label Architecture", href: "/services/packaging-design" },
          { label: "Print-Ready Dielines & Production Proofs", href: "/services/packaging-design" },
          { label: "Marketing Collateral & Pitch Decks", href: "/services/graphic-design" },
          { label: "Eco-Friendly & Retail Ready Packaging", href: "/services/packaging-design" },
        ]
      }
    ]
  },
  {
    id: "integrated-solutions",
    title: "Integrated Digital Solutions",
    shortTitle: "Integrated",
    badge: "Multi-Discipline",
    tagline: "Coordinated Multi-Discipline Growth Packages",
    description: "Combines two or more E-Comet services into one coordinated scope so you work with one unified growth partner.",
    primarySlug: "/services/integrated-solutions",
    colorHex: "#F59E0B",
    links: [
      { label: "E-Commerce + Digital Marketing", href: "/services/integrated-solutions" },
      { label: "Website + SEO + Digital Marketing", href: "/services/integrated-solutions" },
      { label: "Website + E-Commerce Operations", href: "/services/integrated-solutions" },
      { label: "Social Media + Creative + Video", href: "/services/integrated-solutions" },
      { label: "Complete Brand Development", href: "/services/integrated-solutions" },
      { label: "Custom Multi-Service Solutions", href: "/services/integrated-solutions" },
    ],
    subPillars: [
      {
        kicker: "Omnichannel Strategic Growth",
        links: [
          { label: "Full-Funnel Digital Operating System", href: "/services/integrated-solutions" },
          { label: "Cross-Pillar Marketing & E-Commerce", href: "/services/integrated-solutions" },
          { label: "Product Launch & GTM Blueprints", href: "/services/integrated-solutions" },
          { label: "Market Expansion & Category Penetration", href: "/services/integrated-solutions" },
          { label: "Multi-Channel Revenue Acceleration", href: "/services/integrated-solutions" },
        ]
      },
      {
        kicker: "Commercial Intelligence",
        links: [
          { label: "Multi-Channel Margin & Unit Economics", href: "/services/integrated-solutions" },
          { label: "Cross-Platform Attribution & Telemetry", href: "/services/integrated-solutions" },
          { label: "Inventory Forecasting & Supply Health", href: "/services/integrated-solutions" },
          { label: "Weekly Executive Performance Dossier", href: "/services/integrated-solutions" },
          { label: "Ad Spend vs Organic Revenue Modeling", href: "/services/integrated-solutions" },
        ]
      },
      {
        kicker: "Dedicated Executive Leadership",
        links: [
          { label: "Dedicated Senior Practice Leadership", href: "/services/integrated-solutions" },
          { label: "Direct WhatsApp & Slack Command Channel", href: "/services/integrated-solutions" },
          { label: "Transparent Monthly Governance Reviews", href: "/services/integrated-solutions" },
          { label: "Zero Delegation to Junior Trainees", href: "/services/integrated-solutions" },
          { label: "Custom Tailored Enterprise Agreements", href: "/services/integrated-solutions" },
        ]
      }
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
