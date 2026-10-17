/**
 * Official E-Comet Package Tiers & Commercial Rates
 * Source of Truth: E-Comet Website Services Content & Developer Brief (Section 4 to 12)
 * Tier Naming: Orbit (Foundation) · Nova (Growth) · Cosmic (Advanced)
 */

export const PACKAGES_BY_PILLAR = {
  // 1. E-COMMERCE MANAGEMENT (MARKETPLACES)
  marketplaces: {
    disclaimer: "Ad spend is separate from management fees. E-Comet does not guarantee sales, ranking, or ROAS. Packages subject to catalog size and account condition.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Essential Marketplace Support",
        badge: "Foundation",
        description: "For businesses establishing or organizing their marketplace foundation on Amazon or Flipkart.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹14,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $249/mo",
        popular: false,
        deliverables: [
          "Seller account setup & onboarding guidance",
          "Initial catalogue creation & category mapping (up to 20 SKUs)",
          "SEO listing optimisation (titles, bullets, search terms)",
          "Basic inventory & pricing monitoring checks",
          "Account health reviews & issue tracking",
          "Monthly performance summary & recommendations"
        ]
      },
      {
        name: "Nova",
        tagline: "Growth & Optimization",
        badge: "Most Popular",
        description: "For sellers who need ongoing listing improvements, account support, and structured PPC optimization.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹24,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $399/mo",
        popular: true,
        deliverables: [
          "Ongoing catalogue management (up to 50 SKUs)",
          "Advanced listing SEO, backend terms & variation cleanups",
          "Amazon A+ Content / Flipkart Enhanced Content coordination",
          "Marketplace Ads setup, monitoring & bid optimization",
          "Inventory alert monitoring & stock flow guidance",
          "Bi-weekly performance review & growth recommendations"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Advanced Marketplace Growth",
        badge: "Enterprise / Duo",
        description: "For businesses requiring broader account operations, catalogue work, advertising support, and deeper reporting.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹39,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $599/mo",
        popular: false,
        deliverables: [
          "Duo Marketplace Management (Amazon + Flipkart coordinated)",
          "Full catalogue governance (100+ SKUs & complex variations)",
          "Brand Storefront design & A+ Content strategy",
          "Full-funnel advertising management (Sponsored PPC & Display)",
          "Buy Box defense, price monitoring & order issue resolution",
          "Dedicated account specialist & weekly strategic sync"
        ]
      }
    ]
  },

  // 2. DIGITAL MARKETING
  marketing: {
    disclaimer: "Advertising spend is separate from management fees unless explicitly stated. Do not guarantee a fixed number of leads, sales, ROAS, or rankings.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Digital Essentials",
        badge: "Foundation",
        description: "For businesses starting structured digital marketing with selected channels.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹14,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $249/mo",
        popular: false,
        deliverables: [
          "1 Primary channel management (Meta Ads or Google Ads)",
          "8 Static creative assets per month",
          "Audience research & campaign setup",
          "Basic on-page SEO recommendations",
          "Conversion tracking coordination",
          "Monthly performance summary"
        ]
      },
      {
        name: "Nova",
        tagline: "Audience Growth",
        badge: "Most Popular",
        description: "For businesses seeking more consistent content, audience development, and campaign optimization.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹24,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $399/mo",
        popular: true,
        deliverables: [
          "Up to 2 ad channels (Meta Ads + Google Ads)",
          "16 Creatives/month (including 2 carousels)",
          "Campaign A/B testing & retargeting funnel",
          "On-page SEO keyword mapping & technical checks",
          "Lead generation campaign & landing page review",
          "Bi-weekly optimization & monthly reporting"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Integrated Digital Growth",
        badge: "Multi-Channel",
        description: "For businesses coordinating several channels and requiring more structured reporting and strategy.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹39,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $599/mo",
        popular: false,
        deliverables: [
          "Multi-channel coordinated strategy (Meta + Google + SEO + Social)",
          "24 Creatives + 4 short-form video edits per month",
          "Advanced audience segmentation & remarketing funnels",
          "Comprehensive SEO on-page & search readiness roadmap",
          "Full lead tracking & attribution coordination",
          "Dedicated marketing manager & monthly strategic review"
        ]
      }
    ]
  },

  // 3. WEBSITE DEVELOPMENT
  websites: {
    disclaimer: "Website development is quoted as a one-time project. Hosting, domain, third-party plugins, and ongoing maintenance are quoted separately.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Essential Website",
        badge: "Foundation",
        description: "A focused starting website for a business with clearly defined requirements.",
        inrPrice: "₹19,999",
        inrSub: "one-time project quote",
        usdPrice: "$299",
        usdSub: "one-time project quote",
        popular: false,
        deliverables: [
          "Up to 5 custom-designed responsive pages",
          "Desktop, tablet & mobile layout testing",
          "Clean typography & intuitive page structure",
          "Contact & enquiry form setup",
          "Basic search engine readiness (titles, meta, headings)",
          "Handover check & standard launch assistance"
        ]
      },
      {
        name: "Nova",
        tagline: "Business Website Plus",
        badge: "Most Popular",
        description: "A broader website with more pages or features according to the approved scope.",
        inrPrice: "₹34,999",
        inrSub: "one-time project quote",
        usdPrice: "$499",
        usdSub: "one-time project quote",
        popular: true,
        deliverables: [
          "Up to 10-12 responsive pages with custom layouts",
          "CMS setup (WordPress or manageable blocks)",
          "Custom UI component styling & micro-animations",
          "Lead capture & WhatsApp integration",
          "Performance optimization & image compression",
          "2 Revision rounds & 14-day post-launch support"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Advanced Digital Experience",
        badge: "E-Commerce / Custom",
        description: "A customized website experience or online store with additional integrations or advanced requirements.",
        inrPrice: "₹59,999",
        inrSub: "one-time project quote",
        usdPrice: "$899",
        usdSub: "one-time project quote",
        popular: false,
        deliverables: [
          "Full online store or complex multi-page web platform",
          "Product catalogue, category taxonomy, cart & checkout",
          "Payment gateway & shipping API integration coordination",
          "Sub-second speed architecture & Core Web Vitals hygiene",
          "Advanced custom interactions & responsive states",
          "30-Day post-launch warranty & handover walkthrough"
        ]
      }
    ]
  },

  // 4. YOUTUBE & VIDEO SERVICES
  video: {
    disclaimer: "Filming, studio rental, actors, voice-over, stock assets, and original production are separate unless explicitly listed in the quote. Outcomes depend on audience and platform factors.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Content Essentials",
        badge: "Foundation",
        description: "For creators or businesses starting a consistent video presence.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹12,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $199/mo",
        popular: false,
        deliverables: [
          "Up to 4 Long-form YouTube edits per month (up to 10 mins)",
          "Pacing, cuts, transitions & audio clean-up",
          "4 Custom high-CTR thumbnail designs",
          "Video SEO: title, description & tag recommendations",
          "1 Consolidated revision round per video batch",
          "Platform-ready 1080p MP4 master exports"
        ]
      },
      {
        name: "Nova",
        tagline: "Content Growth",
        badge: "Most Popular",
        description: "For regular video publishing, Shorts/Reels repurposing, and improved content presentation.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹21,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $349/mo",
        popular: true,
        deliverables: [
          "Up to 8 Long-form video edits per month",
          "8 Repurposed Shorts / Reels with animated captions",
          "8 Custom thumbnail variations with text hierarchy",
          "Channel presentation & playlist organisation recommendations",
          "2 Revision rounds per video batch",
          "B-roll curation from client-supplied footage"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Complete Video Presence",
        badge: "Full Channel",
        description: "For broader channel support and a coordinated video-content workflow.",
        inrPrice: "Custom Quote",
        inrSub: "starting from ₹34,999/mo",
        usdPrice: "Custom Quote",
        usdSub: "starting from $549/mo",
        popular: false,
        deliverables: [
          "12+ Long-form edits + 16 vertical Shorts/Reels",
          "Advanced sound design, motion graphics & dynamic zooms",
          "Thumbnail A/B test variations with CTR focus",
          "Content planning: topic pillars & publishing calendar",
          "Channel metadata, end-screens & cards curation",
          "Dedicated video editor & weekly production review"
        ]
      }
    ]
  },

  // 5. CREATIVE SERVICES (EXACT PRICING FROM BRIEF SECTION 8.2)
  creative: {
    disclaimer: "Packages are subject to scope confirmation. Printing, original photography, 3D modelling, source files, and out-of-scope work are charged separately.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Orbit Creative",
        badge: "Foundation",
        description: "Best suited for small shops, local businesses, and emerging brands establishing their visual baseline.",
        inrPrice: "₹4,999",
        inrSub: "per month",
        usdPrice: "$149",
        usdSub: "per month",
        popular: false,
        deliverables: [
          "8 Static social media designs per month",
          "2 Promotional / offer campaign creatives",
          "1 Simple website or marketplace banner",
          "Existing brand assets & fonts utilized",
          "1 Consolidated revision round per batch",
          "Standard web-optimized PNG & JPG delivery"
        ]
      },
      {
        name: "Nova",
        tagline: "Nova Creative",
        badge: "Most Popular",
        description: "Best suited for growing businesses running regular promotions and active social channels.",
        inrPrice: "₹9,999",
        inrSub: "per month",
        usdPrice: "$299",
        usdSub: "per month",
        popular: true,
        deliverables: [
          "12 Static social media designs per month",
          "4 Multi-slide carousels (up to 5 slides each)",
          "4 Promotional / advertising creatives",
          "2 Website or campaign promotional banners",
          "2 Revision rounds per design batch",
          "High-resolution social & ad formats"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Cosmic Creative",
        badge: "Full Design System",
        description: "Best suited for brands needing coordinated multi-channel visuals across web, ads, and packaging.",
        inrPrice: "₹17,999",
        inrSub: "per month",
        usdPrice: "$499",
        usdSub: "per month",
        popular: false,
        deliverables: [
          "16 Static designs + 4 carousels (up to 6 slides each)",
          "6 High-impact advertising / sale creatives",
          "4 Website or marketplace hero banners",
          "4 Custom YouTube thumbnails or video covers",
          "Monthly visual brand consistency review",
          "Priority turnaround & organized asset library"
        ]
      }
    ]
  },

  // 6. INTEGRATED DIGITAL SOLUTIONS (EXACT PRICING FROM BRIEF SECTION 9.2)
  integrated: {
    disclaimer: "One-time website or campaign setup is charged separately. Marketplace management scoped separately based on SKU count and order volume.",
    tiers: [
      {
        name: "Orbit",
        tagline: "Digital Foundation",
        badge: "Foundation",
        description: "Combines single platform social presence with core creative planning for new businesses.",
        inrPrice: "₹9,999",
        inrSub: "per month",
        usdPrice: "$299",
        usdSub: "per month",
        popular: false,
        deliverables: [
          "1 Social platform management",
          "8 Static creatives per month",
          "Basic editorial content planning",
          "Monthly digital presence summary report",
          "1 Monthly review meeting with account lead",
          "Important exclusions: Website build, ad spend, daily DM reply"
        ]
      },
      {
        name: "Nova",
        tagline: "Business Growth",
        badge: "Most Popular",
        description: "Coordinated social media, Meta Ads, and website review for active growing businesses.",
        inrPrice: "₹19,999",
        inrSub: "per month",
        usdPrice: "$599",
        usdSub: "per month",
        popular: true,
        deliverables: [
          "Up to 2 social platforms coordinated",
          "12 Static creatives + 4 carousels per month",
          "Meta Ads management within agreed scope",
          "Basic website & landing page performance review",
          "Monthly reporting & next-step recommendations",
          "Important exclusions: Ad spend, new website development"
        ]
      },
      {
        name: "Cosmic",
        tagline: "Multi-Channel Growth",
        badge: "Complete Orbit",
        description: "Comprehensive multi-channel alignment across ads, content, video, and search monitoring.",
        inrPrice: "₹34,999",
        inrSub: "per month",
        usdPrice: "$999",
        usdSub: "per month",
        popular: false,
        deliverables: [
          "Up to 3 agreed platforms coordinated",
          "16 Static creatives + 4 carousels + 4 short-form video edits",
          "Meta Ads & agreed Google Ads campaign management",
          "Basic on-page SEO & website performance monitoring",
          "Monthly strategy review & consolidated performance report",
          "Dedicated growth strategist & priority communication"
        ]
      }
    ]
  }
};

/**
 * Illustrative Real-World Use Cases
 * (Strictly aligned with client's policy: Genuine sample business scenarios, no fabricated client claims)
 */
export const USE_CASES_BY_PILLAR = {
  marketplaces: [
    {
      title: "New Category Entry Onboarding",
      clientType: "Consumer Goods Manufacturer",
      challenge: "A traditional manufacturer with 35 SKUs had zero online marketplace presence and lacked Amazon seller documentation, variation hierarchy, and barcoding.",
      solution: "Structured Brand Registry setup, product taxonomy mapping, compliant variation matrices, and initial catalogue listing optimization with basic keyword indexing.",
      outcome: "Full catalogue active and verified within 18 days with zero suppressed listings and clean brand presentation ready for customer search."
    },
    {
      title: "Catalogue Hygiene & Ads Turnaround",
      clientType: "Active Amazon & Flipkart Merchant",
      challenge: "An existing merchant was suffering from multiple suppressed ASINs, mismatched bullet points, high ad TACoS, and declining Buy Box shares.",
      solution: "Conducted backend keyword audit, fixed broken variation nodes, implemented negative keyword negations on PPC campaigns, and coordinated Amazon A+ visual storytelling.",
      outcome: "Restored 100% catalogue visibility, reduced wasted ad spend on irrelevant search terms, and established stable account health."
    }
  ],
  marketing: [
    {
      title: "Local Service Lead Pipeline",
      clientType: "Regional Professional Service Firm",
      challenge: "Inconsistent referral volume and no structured digital acquisition channel to generate predictable weekly customer enquiries.",
      solution: "Engineered a focused landing page with clear offer messaging, deployed targeted Meta lead-form campaigns, and configured immediate WhatsApp enquiry routing.",
      outcome: "Established a consistent weekly flow of qualified inbound prospect conversations with full cost-per-lead transparency."
    },
    {
      title: "E-Commerce Organic Search Readiness",
      clientType: "Direct-to-Consumer Product Brand",
      challenge: "A lifestyle brand with an online store had low organic search visibility and poor heading/meta tag structure on key product pages.",
      solution: "Performed technical crawl checks, optimized category title tags and meta descriptions for search intent, and structured internal linking across bestsellers.",
      outcome: "Improved search engine readiness across 85 priority product pages with cleaner crawl indexing."
    }
  ],
  websites: [
    {
      title: "Corporate Website Modernization",
      clientType: "Industrial B2B Supplier",
      challenge: "An outdated non-responsive website built in 2017 caused mobile visitors to drop off without reading service capabilities.",
      solution: "Architected a custom 8-page responsive website with clear service hierarchies, mobile-friendly navigation, fast loading performance, and structured enquiry forms.",
      outcome: "Delivered a clean, modern digital flagship that properly communicates company strengths across desktop, tablet, and mobile devices."
    },
    {
      title: "Campaign-Specific Landing Page",
      clientType: "Promotional Product Launch",
      challenge: "Traffic from paid ad campaigns was landing on a crowded homepage, resulting in high bounce rates and low enquiry completion.",
      solution: "Built a dedicated, single-objective landing page with focused value propositions, benefit breakdowns, FAQs, and a direct enquiry form.",
      outcome: "Increased visitor engagement and simplified the path from ad click to enquiry submission."
    }
  ],
  video: [
    {
      title: "YouTube Channel Presentation & Retention",
      clientType: "Educational Content Creator",
      challenge: "Great educational topics but videos suffered from flat pacing, low initial retention, and cluttered thumbnail designs.",
      solution: "Implemented tighter trimming, engaging visual hooks in the first 30 seconds, clean caption styling, and high-contrast thumbnail typography.",
      outcome: "Improved viewer pacing, consistent visual identity across uploads, and established a repeatable weekly editing workflow."
    },
    {
      title: "Long-Form to Shorts Repurposing",
      clientType: "Founder Brand & Business Podcast",
      challenge: "Hour-long podcast recordings were getting limited reach without short-form discoverability on vertical platforms.",
      solution: "Extracted high-intent 45-second highlights, reframed to 9:16 vertical, added animated captions, and exported platform-ready Reels and Shorts.",
      outcome: "Multiplied content output from 1 recorded session into 6 discoverable assets across YouTube Shorts and Instagram."
    }
  ],
  creative: [
    {
      title: "Brand Identity & Packaging Starter",
      clientType: "New D2C Packaged Goods Brand",
      challenge: "A new consumer brand needed cohesive visual assets before initiating marketplace listings and social media presence.",
      solution: "Developed primary vector logo marks, typography guidelines, clean color palettes, product label concepts, and initial packaging mockups.",
      outcome: "Created a production-ready visual foundation that seamlessly translates from physical packaging to digital storefronts."
    },
    {
      title: "Listing Infographics Transformation",
      clientType: "Amazon Kitchenware Merchant",
      challenge: "Plain product photography failed to communicate material quality, dimensions, and unique product differentiators to shoppers.",
      solution: "Designed a 5-part infographic series highlighting key features, size comparisons, material certifications, and step-by-step usage visuals.",
      outcome: "Transformed product page readability, allowing customers to easily digest critical product details before purchasing."
    }
  ],
  integrated: [
    {
      title: "E-Commerce + Digital Marketing Synergy",
      clientType: "Growing Apparel Brand",
      challenge: "Managing separate freelancers for marketplace catalogue operations and social media ads created disconnected messaging and wasted time.",
      solution: "Unified under an integrated scope: coordinated Amazon listing optimization, synchronized Meta ad creatives with marketplace promotional sales, and consolidated weekly reporting.",
      outcome: "Streamlined communication to a single point of contact with unified visual branding across ads and product pages."
    },
    {
      title: "Website + SEO + Content Launch",
      clientType: "Emerging Service Brand",
      challenge: "Needed a credible business website and search readiness launched simultaneously without managing multiple separate agencies.",
      solution: "Delivered responsive website development, initial search engine optimization setup, brand graphics, and monthly performance tracking under one unified scope.",
      outcome: "Launched a fully coordinated digital presence with clear scope boundaries and no conflicting vendor overlap."
    }
  ]
};
