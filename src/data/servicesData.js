/**
 * E-COMET COMPREHENSIVE SERVICES DATA
 * Extracted & Synthesized from services.pdf across all 6 Core Pillars:
 * 1. E-Commerce Management (Marketplaces)
 * 2. Website Development
 * 3. Digital Marketing
 * 4. YouTube & Video Services
 * 5. Creative Services
 * 6. Integrated Digital Solutions
 */

export const SERVICES_DATA = [
  // =========================================================================
  // OFFICIAL PARENT PILLARS (DIRECT ROUTING & BRIEF ARCHITECTURE)
  // =========================================================================
  {
    id: "ecommerce-management",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Build a More Organised Marketplace Business.",
    shortTitle: "E-Commerce Management",
    tagline: "Amazon & Flipkart Marketplace Operations, Listing Optimisation & Account Management",
    heroBadge: "Core Pillar · 01",
    colorHex: "#00B4D8",
    speed: 0.040,
    overview: "Selling on online marketplaces involves more than uploading products. From catalogue quality and pricing to inventory, advertising, and account operations, each area needs attention. E-Comet helps sellers organise and improve their marketplace presence with services shaped around their requirements.",
    whoBenefits: [
      { role: "New Marketplace Sellers", desc: "Sellers preparing to enter online marketplaces with proper onboarding and setup guidance." },
      { role: "Existing Amazon & Flipkart Brands", desc: "Active sellers seeking structured account management, listing improvements, and advertising efficiency." },
      { role: "Manufacturers & Wholesalers", desc: "Wholesalers and product brands exploring online sales without building a large internal team." }
    ],
    keyFeatures: [
      { title: "Amazon Seller Account Management", desc: "Seller account onboarding, listing optimisation, catalogue mapping, pricing monitoring, and Amazon Ads campaign support." },
      { title: "Flipkart Seller Account Management", desc: "Seller onboarding, catalogue creation, product attributes, Flipkart Ads support, and operational monitoring." },
      { title: "Duo Marketplace Management", desc: "Coordinated marketplace support across both Amazon and Flipkart under one unified scope." },
      { title: "Listing & Catalogue Optimisation", desc: "SEO-focused titles, bullet points, backend keywords, category mapping, variation structure, and content recommendations." },
      { title: "Marketplace Brand Building", desc: "Consistent product presentation through infographics, Amazon A+ Content, Flipkart Enhanced Content, and Brand Stores." },
      { title: "Marketplace Advertising Support", desc: "Keyword research, campaign structure, budget recommendations, and performance reporting for Amazon Ads and Flipkart Ads." }
    ],
    process: [
      { step: "01", title: "Business Analysis", desc: "Understand products, margins, capacity, and business goals." },
      { step: "02", title: "Marketplace Review", desc: "Review the current setup, catalogue hygiene, and operational needs." },
      { step: "03", title: "Scope & Proposal", desc: "Confirm deliverables, responsibilities, timing, and custom quote." },
      { step: "04", title: "Setup or Optimisation", desc: "Complete agreed account, listing, and advertising campaign work." }
    ],
    deliverables: [
      "Seller account setup and onboarding guidance",
      "Product listing creation and catalogue SEO optimisation",
      "Category mapping, attributes, and variation support",
      "Pricing and inventory monitoring support",
      "Advertising campaign setup and performance reporting",
      "Account health checks and issue tracking within agreed scope"
    ],
    kpis: [
      { label: "Account Health", value: "Clean & Compliant" },
      { label: "Listing Quality", value: "High Indexing" },
      { label: "Platforms Supported", value: "Amazon + Flipkart" },
      { label: "Support Model", value: "Dedicated Scope" }
    ],
    faqs: [
      { q: "Can E-Comet help a new seller start on Amazon or Flipkart?", a: "Yes. We can discuss onboarding and setup guidance. Requirements depend on your business documents, product category, and marketplace rules." },
      { q: "Can I choose Amazon, Flipkart, or both?", a: "Yes. You can enquire about Amazon management, Flipkart management, or the Duo option for both platforms." },
      { q: "Is advertising spend included?", a: "Ad spend is separate unless it is explicitly included in the written proposal." },
      { q: "Can you guarantee sales or a specific ROAS?", a: "No. Marketplace results depend on product demand, pricing, competition, reviews, inventory, advertising, and other factors. We do not guarantee sales, ranking, or ROAS." },
      { q: "What documents are required?", a: "Requirements vary by marketplace, business type, and product category. We can discuss the likely requirements during the initial conversation." },
      { q: "How is pricing decided?", a: "Pricing depends on the platforms, number of products, account condition, deliverables, advertising scope, and ongoing workload. Contact us for a custom quote." }
    ]
  },
  {
    id: "digital-marketing",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Reach Your Audience With a Clearer Digital Strategy.",
    shortTitle: "Digital Marketing",
    tagline: "Social Media, Meta & Google Ads, SEO, Lead Generation & Creative Content",
    heroBadge: "Core Pillar · 02",
    colorHex: "#FF6B4A",
    speed: 0.040,
    overview: "Digital marketing works best when the message, audience, channel, and goal support one another. E-Comet helps businesses plan and manage digital marketing activities that fit their objectives, whether they want to build visibility, promote products, generate enquiries, or communicate their brand more consistently.",
    whoBenefits: [
      { role: "Small & Local Businesses", desc: "Local companies looking to build digital presence and generate local customer enquiries." },
      { role: "E-Commerce Brands", desc: "Product businesses promoting catalogue items across social media and paid search." },
      { role: "Service Providers & B2B", desc: "Professional services and B2B companies seeking qualified incoming leads." }
    ],
    keyFeatures: [
      { title: "Social Media Management", desc: "Content planning, post and caption creation, creative coordination, content calendars, publishing, and reviews." },
      { title: "Meta Ads (Facebook & Instagram)", desc: "Campaign planning, audience research, creative coordination, setup, budget recommendations, and optimisation." },
      { title: "Google Ads (Search & Display)", desc: "Search and shopping advertising campaign support, keyword research, campaign structure, and conversion tracking." },
      { title: "Search Engine Optimisation (SEO)", desc: "Keyword research, meta descriptions, on-page content recommendations, heading structure, and internal linking." },
      { title: "Inbound Lead Generation", desc: "Targeted campaigns, landing-page recommendations, lead-form setup coordination, and tracking." },
      { title: "Creative Design & Marketing Content", desc: "Social media graphics, promotional creatives, campaign visuals, and promotional video editing support." }
    ],
    process: [
      { step: "01", title: "Understand", desc: "Understand the business, target audience, and primary commercial goal." },
      { step: "02", title: "Review", desc: "Review current channels, content, website, and campaign needs." },
      { step: "03", title: "Recommend", desc: "Recommend relevant channels and define the agreed scope." },
      { step: "04", title: "Execute & Refine", desc: "Execute agreed marketing activities and review performance data." }
    ],
    deliverables: [
      "Custom channel strategy and campaign roadmap",
      "Social media content calendars and post assets",
      "Ad campaign setup and continuous budget optimisation",
      "SEO on-page recommendations and search readiness checks",
      "Lead generation campaign setup and form tracking",
      "Monthly performance review and recommendations"
    ],
    kpis: [
      { label: "Targeting", value: "Audience-Led" },
      { label: "Channels", value: "Meta · Google · SEO" },
      { label: "Strategy", value: "Connected Growth" },
      { label: "Execution", value: "Professional Scope" }
    ],
    faqs: [
      { q: "Do you provide Facebook and Instagram ads?", a: "Yes. Meta Ads support can be discussed as a standalone service or as part of a wider marketing scope." },
      { q: "How quickly will I get results?", a: "Timing varies by channel, competition, budget, offer, creative, and audience. We do not promise a fixed outcome or timeline." },
      { q: "Is advertising spend included in the service fee?", a: "Advertising spend is separate unless the written proposal explicitly says otherwise." },
      { q: "How long does SEO take?", a: "SEO is an ongoing process and timing depends on the website, competition, technical condition, content, and search demand. Specific rankings are not guaranteed." },
      { q: "Can I combine marketing with website development?", a: "Yes. Website development and marketing services can be scoped together when that fits your goals." },
      { q: "How is pricing decided?", a: "Pricing depends on selected channels, deliverables, content volume, campaign complexity, and ongoing support. Contact us for a custom quote." }
    ]
  },
  {
    id: "website-development",
    category: "Website Development",
    pillarId: "websites",
    title: "Your Business Deserves More Than Just a Website.",
    shortTitle: "Website Development",
    tagline: "Business Websites, E-Commerce Stores, Landing Pages & WordPress",
    heroBadge: "Core Pillar · 03",
    colorHex: "#10B981",
    speed: 0.040,
    overview: "A website should make it easier for people to understand your business, explore your offer, and take the next step. E-Comet helps businesses plan and build websites with a clear structure, professional presentation, and content aligned with their goals.",
    whoBenefits: [
      { role: "Corporate & Service Firms", desc: "Businesses that need a credible, modern central online presence explaining their strengths." },
      { role: "Online Retailers & D2C", desc: "Brands wanting to present products, organise categories, and guide customers through checkout." },
      { role: "Campaign Advertisers", desc: "Marketers requiring focused landing pages designed around a specific offer or enquiry goal." }
    ],
    keyFeatures: [
      { title: "Business & Corporate Websites", desc: "Professional websites that explain your business, services, strengths, and contact options." },
      { title: "E-Commerce Websites", desc: "Online store development support, category organisation, product pages, and purchase journey." },
      { title: "WordPress Website Development", desc: "Manageable content system built on WordPress with themes, plugins, and security considerations." },
      { title: "High-Converting Landing Pages", desc: "Focused pages designed around specific campaigns, offers, products, or lead-generation goals." },
      { title: "Website Redesign & Improvement", desc: "Review and improve an existing website's structure, presentation, content, and mobile usability." },
      { title: "Website Maintenance & Support", desc: "Ongoing updates, content changes, basic checks, backups, troubleshooting, and maintenance tasks." }
    ],
    process: [
      { step: "01", title: "Understand", desc: "Discuss the business, target audience, goals, and required features." },
      { step: "02", title: "Structure", desc: "Plan pages, navigation hierarchy, content structure, and user journeys." },
      { step: "03", title: "Design & Build", desc: "Build the agreed website layout, responsive styling, and features." },
      { step: "04", title: "Review & Launch", desc: "Review with client, complete agreed revisions, and publish with proper checks." }
    ],
    deliverables: [
      "Custom responsive design for desktop, tablet, and mobile",
      "Clean page structure, typography, and navigation",
      "Content integration and contact/enquiry form setup",
      "Basic on-page SEO readiness (titles, meta, headings)",
      "Cross-browser testing and performance check before launch",
      "Post-launch handover or agreed maintenance support"
    ],
    kpis: [
      { label: "Responsiveness", value: "100% Mobile Ready" },
      { label: "Architecture", value: "Clean & Structured" },
      { label: "CMS Options", value: "WordPress · Custom" },
      { label: "Engagement", value: "One-Time or Retainer" }
    ],
    faqs: [
      { q: "Can you build a website for a new business?", a: "Yes. We can discuss the type of website, pages, content, and features appropriate for your business." },
      { q: "Can you create an e-commerce website?", a: "Yes. E-commerce website requirements, product volume, payment methods, shipping, and integrations need to be scoped before quoting." },
      { q: "Will the website work on mobile?", a: "Responsive behaviour should be included in the agreed build scope and checked before launch." },
      { q: "Do I need to buy a domain and hosting?", a: "Most websites require a domain and hosting or an equivalent platform plan. These costs are separate unless the proposal states otherwise." },
      { q: "Will my website rank on Google automatically?", a: "No. Website development alone does not guarantee search rankings. SEO may require separate or ongoing work." },
      { q: "Do you provide maintenance?", a: "Maintenance can be discussed as a separate or ongoing service with a clearly defined scope." },
      { q: "How much does a website cost?", a: "Pricing depends on page count, design requirements, features, integrations, content, and support. Contact us for a custom quote." }
    ]
  },
  {
    id: "youtube-video-services",
    category: "YouTube & Video Services",
    pillarId: "video",
    title: "Turn Your Content Into Something Worth Watching.",
    shortTitle: "YouTube & Video Services",
    tagline: "Long-Form Video Editing, Shorts, Reels, Thumbnails & Channel SEO",
    heroBadge: "Core Pillar · 04",
    colorHex: "#F43F5E",
    speed: 0.040,
    overview: "Strong video content needs a clear message, thoughtful pacing, and presentation suited to its platform. E-Comet helps creators and businesses prepare video content that communicates clearly and supports their wider content or marketing goals.",
    whoBenefits: [
      { role: "YouTubers & Creators", desc: "Independent content creators needing consistent, professional editing and thumbnail support." },
      { role: "Small Businesses & Brands", desc: "Local brands building brand awareness through Reels, Shorts, and product showcases." },
      { role: "Educators & Coaches", desc: "Consultants, educators, and authorities creating high-value informational content." }
    ],
    keyFeatures: [
      { title: "YouTube Video Editing", desc: "Trimming, pacing, transitions, audio clean-up, text and graphics, and agreed edits for long-form video." },
      { title: "YouTube Shorts & Instagram Reels", desc: "Short-form vertical edits, selecting highlights from supplied footage, captions, and platform exports." },
      { title: "Custom Thumbnail Design", desc: "Readable text, clear visual hierarchy, and alignment with the video topic and channel style." },
      { title: "YouTube Channel Optimisation Support", desc: "Channel presentation, descriptions, titles, tags, playlists, and metadata recommendations." },
      { title: "Content Planning & Pillars", desc: "Topic ideas, content themes, publishing plans, and a practical editorial calendar." },
      { title: "Promotional & Product Videos", desc: "Video editing and content preparation for products, services, offers, and brand promotion." }
    ],
    process: [
      { step: "01", title: "Goal & Style", desc: "Understand the video goal, target audience, style, and platform." },
      { step: "02", title: "Footage Review", desc: "Confirm footage, references, deliverables, and editing requirements." },
      { step: "03", title: "Edit & Polish", desc: "Edit agreed assets, add captions, audio polish, and motion elements." },
      { step: "04", title: "Review & Deliver", desc: "Complete agreed revision rounds and deliver platform-ready exports." }
    ],
    deliverables: [
      "Long-form YouTube video edits with clean pacing and audio",
      "Vertical short-form clips (Shorts & Reels) with captions",
      "High-contrast, readable custom thumbnail designs",
      "Channel metadata and playlist organisation recommendations",
      "Platform-specific aspect ratios (16:9, 9:16, 1:1)",
      "Agreed revision rounds and handover of final export files"
    ],
    kpis: [
      { label: "Pacing", value: "Retention Focused" },
      { label: "Formats", value: "16:9 & 9:16" },
      { label: "Thumbnails", value: "High Contrast Hierarchy" },
      { label: "Turnaround", value: "Agreed Schedule" }
    ],
    faqs: [
      { q: "What types of videos can you edit?", a: "We can discuss long-form YouTube videos, Shorts, Reels, product videos, promotional content, and other agreed formats." },
      { q: "Can I provide my own footage?", a: "Yes. Supplied footage can be used, subject to file quality, format, rights, and the agreed scope." },
      { q: "Can one long video be turned into Shorts?", a: "Yes. The number and length of short clips, caption style, and delivery formats should be agreed in advance." },
      { q: "Do you design thumbnails?", a: "Thumbnail design can be included as a separate deliverable or part of a package if specified." },
      { q: "Do you provide channel management?", a: "Channel optimisation and content-planning support can be discussed. The exact responsibilities and account access must be agreed." },
      { q: "Can I get monthly editing support?", a: "Monthly or batch-based arrangements can be discussed depending on volume, complexity, and turnaround requirements." },
      { q: "How is pricing decided?", a: "Pricing depends on video length, complexity, volume, turnaround, revisions, and additional production needs. Contact us for a custom quote." }
    ]
  },
  {
    id: "creative-services",
    category: "Creative Services",
    pillarId: "creative",
    title: "Transform Business Ideas Into Compelling Visuals.",
    shortTitle: "Creative Services",
    tagline: "Brand Identity, Listing Infographics, Social Creatives & Packaging",
    heroBadge: "Core Pillar · 05",
    colorHex: "#8B5CF6",
    speed: 0.040,
    overview: "E-Comet transforms business ideas into clear, consistent, and compelling visual experiences. Creative work should support brand recognition and communication, not just decoration.",
    whoBenefits: [
      { role: "Emerging Brands", desc: "New businesses requiring a complete, memorable brand identity and visual starter kit." },
      { role: "E-Commerce Merchants", desc: "Product sellers needing high-converting listing infographics, comparison charts, and packaging." },
      { role: "Marketing Teams", desc: "Growing companies requiring regular monthly social media and advertising design assets." }
    ],
    keyFeatures: [
      { title: "Brand Identity & Logo Design", desc: "Logo concepts, colour palette, typography, identity assets, and brand guidelines according to scope." },
      { title: "E-Commerce Creative Design", desc: "Product infographics, feature highlights, comparison graphics, listing images, and brand visuals." },
      { title: "Social Media Creative Design", desc: "Static posts, carousels, stories, promotional posts, and branded Canva or design templates." },
      { title: "Advertising & Promotional Creatives", desc: "Ad banners, campaign graphics, sale announcements, and promotional visuals." },
      { title: "Website & Digital Graphics", desc: "Website banners, hero-section graphics, landing-page visuals, icons, and digital assets." },
      { title: "Packaging & Label Design", desc: "Product labels, packaging concepts, box designs, and brand-consistent packaging graphics." }
    ],
    process: [
      { step: "01", title: "Brief & Discovery", desc: "Review brand positioning, target audience, references, and deliverables." },
      { step: "02", title: "Concept Development", desc: "Create initial design concepts and visual directions for review." },
      { step: "03", title: "Refinement", desc: "Complete agreed revision rounds on selected design direction." },
      { step: "04", title: "Asset Handover", desc: "Deliver production-ready files in web, vector, and print formats." }
    ],
    deliverables: [
      "Custom vector logo files, colour palette, and typography guide",
      "Product listing infographic graphics (up to 5 images per set)",
      "High-engagement social media posts and carousel slide decks",
      "Performance advertising banners for Meta and Google Display",
      "Print-ready packaging dieline and product label files",
      "Agreed revision rounds and final asset exports"
    ],
    kpis: [
      { label: "Design System", value: "Cohesive & Scalable" },
      { label: "Formats", value: "Vector · Web · Print" },
      { label: "Pricing Model", value: "Monthly or Project" },
      { label: "Revisions", value: "Clear Scope Limits" }
    ],
    faqs: [
      { q: "Can I request a one-time creative design?", a: "Yes. Logo, banner, thumbnail, brochure, packaging, and other design projects can be quoted individually." },
      { q: "What is the difference between Creative Services and Digital Marketing?", a: "Creative Services focuses on design assets and visual identity. Digital Marketing focuses on planning and managing channels and campaigns. They can be purchased separately or together." },
      { q: "Do you offer monthly creative packages?", a: "Yes. We offer monthly packages (Orbit, Nova, Cosmic) starting at ₹4,999/month ($149/mo) for ongoing design needs." },
      { q: "Who owns the final design content?", a: "Ownership, usage rights, and handover terms are clearly stated in the proposal upon project completion." },
      { q: "Are source files included?", a: "Source files can be quoted according to project scope and requirements." }
    ]
  },

  // =========================================================================
  // PILLAR 1: E-COMMERCE MANAGEMENT (MARKETPLACES)
  // =========================================================================
  {
    id: "amazon-operations",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Amazon Account Management & Scale",
    shortTitle: "Amazon Scale",
    tagline: "End-to-end 1P Vendor & 3P Seller Central dominance",
    heroBadge: "Marketplace Pillar · 01",
    colorHex: "#FF9526",
    speed: 0.042,
    overview: "We take full operational, advertising, and catalog ownership of your Amazon presence. From algorithmic buy-box defense and FBA replenishment modeling to high-yield Sponsored Products, Sponsored Brands, and Amazon DSP programmatic acquisition, we turn Amazon into a predictable, compounding revenue engine.",
    whoBenefits: [
      { role: "Established Brands", desc: "Brands experiencing sales plateaus, margin erosion, or high advertising TACoS seeking systematic profit turnaround." },
      { role: "Traditional Manufacturers", desc: "Offline FMCG or consumer brands transitioning directly onto Amazon with zero in-house operational overhead." },
      { role: "Direct-to-Consumer Pioneers", desc: "D2C brands seeking to capture high-intent Amazon purchase volume without diluting their flagship brand equity." }
    ],
    keyFeatures: [
      { title: "Buy-Box Governance & Defense", desc: "Algorithmic repricing strategy, unauthorized reseller suppression, and Brand Registry enforcement." },
      { title: "Amazon Ads (PPC & DSP)", desc: "Granular keyword harvesting, exact match bidding architecture, negative keyword negation, and off-Amazon DSP retargeting." },
      { title: "A+ Content & Brand Storefronts", desc: "Conversion-optimized modular storytelling, comparison matrices, and high-converting storefront curation." },
      { title: "Listing Optimization & SEO", desc: "Title keyword density, indexing backend search terms, customer search intent mapping, and browse node hygiene." },
      { title: "FBA Logistics & Stock Flow", desc: "Restock limit planning, stranded inventory liquidation, fee reconciliations, and safe lead-time buffer modeling." },
      { title: "Review & Rating Architecture", desc: "Compliant Vine review generation, buyer-seller messaging sequences, and product defect root-cause feedback loops." }
    ],
    deliverables: [
      "Weekly TACoS & ACoS performance dashboards",
      "Full listing catalog audit and keyword optimization",
      "Custom Amazon Brand Storefront & mobile-first A+ modules",
      "FBA restock recommendations & inbound shipment creation",
      "Monthly brand analytics & market share competitive reporting"
    ],
    process: [
      { step: "01", title: "Forensic Audit", desc: "We audit account health, lost buy-box opportunities, suppressed ASINs, and wasted ad spend." },
      { step: "02", title: "Catalog Restructuring", desc: "Fix parent-child variations, rewrite listing metadata for indexing, and deploy premium A+ content." },
      { step: "03", title: "PPC Restructuring", desc: "Rebuild campaigns into isolated single-keyword ad groups with tight bid caps and automated negation." },
      { step: "04", title: "Weekly Calibration", desc: "Iterate bids based on target margin, handle returns disputes, and scale top-converting product lines." }
    ],
    kpis: [
      { label: "ACoS / TACoS Target", value: "< 14% TACoS" },
      { label: "Buy-Box Win Rate", value: "98.5%+" },
      { label: "Listing Conversion Rate", value: "+38% Average" },
      { label: "Organic Rank Velocity", value: "Top 3 ASINs" }
    ],
    faqs: [
      { q: "Can E-Comet manage both 1P Vendor Central and 3P Seller Central?", a: "Yes. We have specialized operational playbooks for both 1P purchase order reconciliation and direct 3P retail seller accounts." },
      { q: "Are advertising ad spend costs included in your management fee?", a: "No. Advertising budgets are paid directly to Amazon via your advertising console, while our fee covers strategic setup, execution, and optimization." },
      { q: "How long before we see organic rank and sales improvements?", a: "Indexing and buy-box corrections take effect within 7–14 days, with compounding organic momentum materializing by month two." }
    ]
  },
  {
    id: "flipkart-management",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Flipkart Seller Management & Tiering",
    shortTitle: "Flipkart Scale",
    tagline: "Gold Tier account management, PLA ads & Big Billion Days readiness",
    heroBadge: "Marketplace Pillar · 02",
    colorHex: "#2874F0",
    speed: 0.039,
    overview: "Flipkart requires distinct catalog taxonomy, PLA/PCA ad bids, and Tier performance mechanics. We manage end-to-end listing synchronization, Smart Fulfillment onboarding, Price Recommendation governance, and festival event promotions to secure Tier Gold status and high category visibility.",
    whoBenefits: [
      { role: "Tier-2 & Tier-3 Market Expanders", desc: "Brands seeking penetration across regional pin codes and massive value-conscious buyer demographics." },
      { role: "Sellers Facing Account Demotions", desc: "Merchants stuck in Bronze/Silver tiers with high cancellation rates needing account health recovery." },
      { role: "Festive Season Sellers", desc: "Brands preparing for Big Billion Days and category seasonal spikes." }
    ],
    keyFeatures: [
      { title: "Flipkart Account Tiering Governance", desc: "Monitoring RTD (Ready to Dispatch) compliance, zero cancellation rates, and return quality metrics to maintain Gold status." },
      { title: "PLA & PCA Advertising", desc: "Product Listing Ads and Product Contextual Ads structured for minimum CPC and maximum top-of-funnel impression share." },
      { title: "Smart / Flipkart Fulfillment Setup", desc: "Onboarding into Flipkart Assured badge programs for boosted buy-button priority and algorithmic reach." },
      { title: "Catalog & Variation Management", desc: "Optimizing vertical attributes, clearing indexing rejections, and setting up clean multi-attribute size/color variations." }
    ],
    deliverables: [
      "Flipkart Assured badge enablement and fulfillment audit",
      "PLA advertising budget optimization & negative keyword filters",
      "Catalog variation structuring and attribute enrichment",
      "Weekly account health scorecards & dispute claim filings"
    ],
    process: [
      { step: "01", title: "Account Diagnosis", desc: "Resolve pending buyer disputes, SLA delays, and tier qualification bottlenecks." },
      { step: "02", title: "Listing Optimization", desc: "Align titles and specifications with Flipkart's vertical ranking algorithms." },
      { step: "03", title: "Ad System Launch", desc: "Deploy targeted PLA campaigns across high-converting category keywords." },
      { step: "04", title: "Promotion & Scale", desc: "Enroll products into approved Flipkart promotions and optimize replenishment schedules." }
    ],
    kpis: [
      { label: "Account Tier Status", value: "Gold Tier" },
      { label: "Flipkart Assured Coverage", value: "100% Core SKUs" },
      { label: "SLA Breach Rate", value: "< 0.05%" },
      { label: "Ad ROAS Target", value: "4.5x - 8.0x" }
    ],
    faqs: [
      { q: "How do you help us get the Flipkart Assured badge?", a: "By meeting strict dispatch SLAs, zero out-of-stock cancellations, and transitioning fast-moving items into Smart Fulfillment or FAssured fulfillment hubs." },
      { q: "Can you assist with brand registry and trademark protection on Flipkart?", a: "Yes. We verify brand ownership with Flipkart Brand Infringement tools to remove counterfeit listings." }
    ]
  },
  {
    id: "marketplace-management",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Multi-Marketplace Growth (Meesho, Myntra, Nykaa, Ajio)",
    shortTitle: "Omni-Marketplace",
    tagline: "Expanded distribution across India's premier vertical marketplaces",
    heroBadge: "Marketplace Pillar · 03",
    colorHex: "#B7A27D",
    speed: 0.036,
    overview: "True marketplace scale requires conquering specialized vertical channels. We handle brand onboarding, catalog mapping, compliance, and growth across Myntra, Nykaa, Ajio, Meesho, and Tata CliQ, allowing your products to reach distinct consumer segments simultaneously.",
    whoBenefits: [
      { role: "Fashion & Apparel Labels", desc: "Brands scaling on Myntra and Ajio needing strict photo guidelines and seasonal catalog drops." },
      { role: "Beauty & Wellness Formulators", desc: "Cosmetics, skincare, and supplement brands seeking verified shelf presence on Nykaa." },
      { role: "High-Volume Value Brands", desc: "Manufacturers leveraging Meesho's zero-commission model for immense tier-3 scale." }
    ],
    keyFeatures: [
      { title: "Vertical Platform Onboarding", desc: "Navigating merchant agreements, margin structures, and documentation for Myntra, Nykaa, and Ajio." },
      { title: "Centralized Inventory Sync", desc: "Ensuring cross-platform inventory allocation to eliminate stockouts and cancellation penalties." },
      { title: "Channel-Specific Pricing Rules", desc: "Designing MAP (Minimum Advertised Price) rules to prevent inter-channel price wars." },
      { title: "Promotions & Banner Bidding", desc: "Participating in platform curated sale days, brand spotlights, and in-app banner visibility." }
    ],
    deliverables: [
      "Onboarding & brand approval across 4+ vertical portals",
      "Format-specific image and spec sheet compliance",
      "Unified inventory buffer planning and order synchronization",
      "Monthly cross-channel revenue and margin reconciliation"
    ],
    process: [
      { step: "01", title: "Channel Selection", desc: "Identify which portals match your price point, customer demographic, and product category." },
      { step: "02", title: "Catalog Conformance", desc: "Format product specifications and imagery to adhere to strict platform style guides." },
      { step: "03", title: "Go-Live & Promotion", desc: "Launch flagship collections and submit for platform curation events." },
      { step: "04", title: "Margin Calibration", desc: "Measure return-to-origin (RTO) rates and commission structures to protect bottom-line profit." }
    ],
    kpis: [
      { label: "Active Channels", value: "4+ Portals" },
      { label: "Catalog Approval Rate", value: "99.2%" },
      { label: "RTO Reduction", value: "-22% Average" },
      { label: "Multi-Channel GMV Growth", value: "+110% YoY" }
    ],
    faqs: [
      { q: "How do you prevent price wars between Amazon and Nykaa/Myntra?", a: "We enforce strict Minimum Advertised Price (MAP) governance and design channel-exclusive combo packs and bundle SKUs." }
    ]
  },
  {
    id: "quick-commerce",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Quick Commerce Operations (Blinkit, Zepto, Instamart)",
    shortTitle: "Quick Commerce",
    tagline: "10-minute delivery retail onboarding, dark store allocation & ads",
    heroBadge: "Marketplace Pillar · 04",
    colorHex: "#F59E0B",
    speed: 0.045,
    overview: "Quick commerce has redefined consumer impulse buying. We navigate vendor onboarding, dark store micro-fulfillment allocations, inventory velocity tracking, and high-visibility in-app sponsored banner bids on Blinkit, Zepto, and Swiggy Instamart.",
    whoBenefits: [
      { role: "Packaged Goods & Snacks", desc: "Food, beverages, and impulse consumables that require instant availability." },
      { role: "Personal Care Essentials", desc: "Everyday grooming, oral care, and hygiene products purchased with immediate need." },
      { role: "Seasonal & Festive Brands", desc: "Products capitalizing on festival gifts, party supplies, and weekend demand spikes." }
    ],
    keyFeatures: [
      { title: "Dark Store Distribution Mapping", desc: "Allocating inventory across micro-warehouses based on high-density geographical pincode demand." },
      { title: "In-App Search & Brand Banners", desc: "Securing prime category tile slots, search autosuggestion placements, and checkout add-on recommendations." },
      { title: "Stockout Prevention Telemetry", desc: "High-frequency stock monitoring to prevent stockout delisting in top-performing micro-regions." }
    ],
    deliverables: [
      "Vendor onboarding agreement & margin structure advisory",
      "Pincode demand mapping & dark store distribution schedules",
      "In-app advertising campaign setup & ROAS tracking",
      "Weekly stock fill rate & velocity audit reports"
    ],
    process: [
      { step: "01", title: "Vendor Setup", desc: "Complete vendor registration, GST compliance, and brand category allocation." },
      { step: "02", title: "Dark Store Allocation", desc: "Determine initial inventory dispatch quantities based on regional purchase intent." },
      { step: "03", title: "Search Banner Launch", desc: "Deploy in-app keyword bidding for immediate category presence." },
      { step: "04", title: "Replenishment Flow", desc: "Maintain continuous PO cycles to prevent dark store depletion." }
    ],
    kpis: [
      { label: "Delivery Speed Promise", value: "10-15 Min" },
      { label: "Dark Store Fill Rate", value: "95%+" },
      { label: "Search Share of Voice", value: "Top 3 Tiles" },
      { label: "Repeat Purchase Rate", value: "32%+" }
    ],
    faqs: [
      { q: "What margins do Quick Commerce platforms expect?", a: "Platforms typically require 25%–40% trade margins depending on category velocity and refrigerated vs ambient storage." }
    ]
  },
  {
    id: "marketplace-advertising",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Marketplace Advertising & Sponsored PPC",
    shortTitle: "Marketplace Ads",
    tagline: "Algorithmic keyword harvesting, DSP programmatic & margin protection",
    heroBadge: "Marketplace Pillar · 05",
    colorHex: "#2563EB",
    speed: 0.040,
    overview: "Stop bleeding ad spend on unqualified clicks. We architect sophisticated Sponsored Products, Sponsored Brands Video, Sponsored Display, and Amazon DSP programmatic funnels engineered to maximize organic rank crossover while maintaining strict TACoS targets.",
    whoBenefits: [
      { role: "High-ACoS Sellers", desc: "Brands spending heavily on ads without seeing corresponding improvements in organic rank." },
      { role: "Competitive Category Brands", desc: "Sellers needing defensive conquesting on competitor product detail pages." },
      { role: "Catalog Scalers", desc: "Brands with 100+ SKUs requiring automated keyword harvesting and algorithmic bid adjustments." }
    ],
    keyFeatures: [
      { title: "Exact Match Rank Campaigns", desc: "Single-keyword ad groups (SKAGs) with custom top-of-search placement multipliers." },
      { title: "Negative Keyword Automation", desc: "Automated negative phrase and exact harvesting to block non-converting search terms." },
      { title: "Sponsored Brands Video (SBV)", desc: "High-CTR auto-playing video ad modules engineered for mobile search dominance." },
      { title: "Competitor ASIN Conquesting", desc: "Placing your product directly beneath rival buy-boxes with irresistible value positioning." }
    ],
    deliverables: [
      "Custom PPC campaign hierarchy and bid optimization rules",
      "Weekly search term reports & negative keyword additions",
      "Sponsored Brands Video creative asset creation",
      "TACoS vs Organic sales correlation reporting"
    ],
    process: [
      { step: "01", title: "Search Query Audit", desc: "Extract 90 days of advertising search term logs to identify non-performing spend." },
      { step: "02", title: "Funnel Structuring", desc: "Separate discovery (auto/broad) campaigns from scale (exact) and defensive campaigns." },
      { step: "03", title: "Dayparting & Bidding", desc: "Deploy algorithmic hourly bid adjustments during peak consumer purchase windows." },
      { step: "04", title: "Rank Compounding", desc: "Redirect ad spend toward target search terms that trigger top-of-page organic rank." }
    ],
    kpis: [
      { label: "ACoS Reduction", value: "-28% Average" },
      { label: "Organic Rank Lift", value: "+45% Top 10" },
      { label: "CTR Benchmark", value: "> 1.4%" },
      { label: "ROAS Range", value: "3.8x - 7.2x" }
    ],
    faqs: [
      { q: "What is the difference between ACoS and TACoS?", a: "ACoS measures ad spend divided by ad sales. TACoS measures total ad spend divided by total (organic + ad) revenue, showing true margin impact." }
    ]
  },
  {
    id: "catalog-listing-optimization",
    category: "Marketplaces",
    pillarId: "marketplaces",
    title: "Catalog, Listing SEO & A+ Design",
    shortTitle: "Catalog & A+",
    tagline: "Conversion-optimized listings that rank organically and convert",
    heroBadge: "Marketplace Pillar · 06",
    colorHex: "#8B5CF6",
    speed: 0.035,
    overview: "Your product listing is your 24/7 digital salesperson. We combine high-density semantic SEO indexing with editorial A+ Content (EBC), infographics, comparison charts, and lifestyle renders that eliminate buyer hesitation and elevate brand authority.",
    whoBenefits: [
      { role: "Low-Converting Listings", desc: "Products with high page views but poor purchase conversion rates." },
      { role: "Complex Technical Products", desc: "Items requiring visual sizing guides, ingredient transparency, or specification breakdowns." },
      { role: "Premium Brands", desc: "Labels seeking luxury, editorial presentation that commands premium price points." }
    ],
    keyFeatures: [
      { title: "Semantic Title & Bullet Copywriting", desc: "Algorithmic keyword placement blended with human emotional hook copywriting." },
      { title: "Premium A+ (EBC) Content", desc: "Full-width editorial visual modules, carousel banners, and interactive comparison tables." },
      { title: "Infographic Asset Creation", desc: "Callout badges, dimension guides, packaging contents, and certified benefit graphics." },
      { title: "Backend Search Term Indexing", desc: "Exhaustive 249-byte non-repeating backend keyword optimization." }
    ],
    deliverables: [
      "Optimized 200-character titles, 5 benefit-driven bullet points, and description",
      "Complete set of 7 high-resolution listing gallery images",
      "Full modular A+ Content / Enhanced Brand Content design",
      "Backend search terms, subject matter fields, and browse node updates"
    ],
    process: [
      { step: "01", title: "Customer Analysis", desc: "Study buyer reviews and competitor complaints to identify primary purchasing triggers." },
      { step: "02", title: "Keyword Clustering", desc: "Gather high-intent root keywords and semantic LSI search phrases." },
      { step: "03", title: "Visual Storyboarding", desc: "Design high-contrast visual infographics and lifestyle comparison layouts." },
      { step: "04", title: "Upload & Verification", desc: "Publish through Brand Registry and verify keyword indexing via search telemetry." }
    ],
    kpis: [
      { label: "Listing Conversion Rate", value: "+30% - +65%" },
      { label: "Mobile Readability Score", value: "98/100" },
      { label: "Search Index Coverage", value: "100% Core Terms" },
      { label: "Return Rate Reduction", value: "-18% Average" }
    ],
    faqs: [
      { q: "Do you create the graphics and renders as well?", a: "Yes. Our creative team handles all infographic typography, retouching, 3D renders, and layout formatting." }
    ]
  },

  // =========================================================================
  // PILLAR 2: WEBSITE DEVELOPMENT
  // =========================================================================
  {
    id: "websites",
    category: "Websites",
    pillarId: "websites",
    title: "Custom Business Website Development",
    shortTitle: "Business Websites",
    tagline: "High-performance digital flagships engineered for speed & authority",
    heroBadge: "Development Pillar · 01",
    colorHex: "#5B7C99",
    speed: 0.038,
    overview: "Your website is the single digital asset you truly own. We engineer bespoke, lightning-fast digital flagship sites with clean semantic architecture, sub-second TTFB, flawless responsive ergonomics, and high-converting inbound contact funnels.",
    whoBenefits: [
      { role: "B2B Enterprises & Consultancies", desc: "Organizations needing credible, authority-building web presences that attract high-ticket clients." },
      { role: "Established Mid-Market Firms", desc: "Businesses replacing slow, outdated legacy CMS templates with modern web architecture." },
      { role: "Emerging High-Growth Brands", desc: "Brands launching with institutional credibility from Day One." }
    ],
    keyFeatures: [
      { title: "Sub-Second Performance", desc: "Zero framework bloat, optimized web fonts, server-side caching, and 95+ Mobile Lighthouse scores." },
      { title: "Tailored Inbound Funnels", desc: "Interactive objective selectors, lead calculators, and qualification forms." },
      { title: "Technical SEO Foundation", desc: "Schema.org structured data, semantic HTML5 hierarchy, dynamic XML sitemaps, and canonical routing." },
      { title: "Responsive Ergonomics", desc: "Pixel-perfect touch targets, fluid typography scaling, and dark/light mode adaptability." }
    ],
    deliverables: [
      "Custom responsive website built with modern component architecture",
      "Interactive lead generation forms with webhook / CRM synchronization",
      "Full technical SEO metadata, Schema markup, and Open Graph tags",
      "Hosting deployment, SSL security, and continuous automated backup setup"
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "Map user navigation journeys, page hierarchies, and primary conversion goals." },
      { step: "02", title: "UI/UX Prototyping", desc: "Design interactive high-fidelity prototypes in Figma focused on clarity and credibility." },
      { step: "03", title: "Engineering & QA", desc: "Build with clean, maintainable code adhering to strict performance and accessibility standards." },
      { step: "04", title: "Deployment & Telemetry", desc: "Launch onto global CDN infrastructure with Google Analytics 4 and Tag Manager instrumentation." }
    ],
    kpis: [
      { label: "Page Load Speed", value: "< 0.8s Global" },
      { label: "Mobile Lighthouse Score", value: "98/100" },
      { label: "Inbound Lead Conversion", value: "3.5x Industry Avg" },
      { label: "Core Web Vitals", value: "100% Passed" }
    ],
    faqs: [
      { q: "Will I be able to edit page text and images after launch?", a: "Yes. We configure user-friendly CMS dashboards with modular block controls so your team can publish updates effortlessly." },
      { q: "Do you handle domain names, hosting, and SSL certificates?", a: "We guide domain configuration and deploy your website to secure, enterprise-grade cloud hosting with automatic SSL renewal." }
    ]
  },
  {
    id: "shopify-stores",
    category: "Websites",
    pillarId: "websites",
    title: "E-Commerce & Shopify Plus Stores",
    shortTitle: "Shopify Stores",
    tagline: "High-conversion D2C storefronts built for scale & checkout velocity",
    heroBadge: "Development Pillar · 02",
    colorHex: "#10B981",
    speed: 0.041,
    overview: "We architect high-converting Shopify and Shopify Plus storefronts designed for relentless conversion velocity, seamless one-click checkout, automated inventory sync, and maximum average order value (AOV) via post-purchase upsells and loyalty systems.",
    whoBenefits: [
      { role: "Direct-to-Consumer Brands", desc: "Labels seeking independent customer relationships away from marketplace dependence." },
      { role: "Multi-SKU Retailers", desc: "Catalogs requiring faceted search filters, smart collections, and real-time inventory tracking." },
      { role: "High-Growth Brands", desc: "Stores experiencing flash sale traffic spikes requiring unbreakable server stability." }
    ],
    keyFeatures: [
      { title: "High-Velocity Checkout", desc: "Streamlined 1-page checkout flows, express payment wallets (Apple Pay, Google Pay, UPI), and address autocomplete." },
      { title: "AOV Maximization", desc: "In-cart progress bars for free shipping, tiered discounts, bundle builders, and one-click upsells." },
      { title: "ERP & Multi-Courier Integration", desc: "Automated tracking links, Shiprocket / Delhivery / Bluedart shipping APIs, and ERP inventory synchronization." },
      { title: "Mobile-First Design", desc: "Thumb-zone navigation, sticky Add-to-Cart bars, and blazing fast product image carousels." }
    ],
    deliverables: [
      "Custom bespoke Shopify theme tailored to brand identity",
      "Payment gateway integrations (Razorpay, Stripe, Cashfree, UPI, COD verification)",
      "App stack curation to maintain sub-second speed with zero script bloat",
      "GA4 E-Commerce tracking and Meta Conversions API (CAPI) setup"
    ],
    process: [
      { step: "01", title: "Merchandising Strategy", desc: "Define catalog categorization, bundling logic, and checkout upsell funnels." },
      { step: "02", title: "Theme Customization", desc: "Build custom Liquid and React components tailored for fluid mobile shopping." },
      { step: "03", title: "Integration & Testing", desc: "Conduct end-to-end sandbox payments, order fulfillment tests, and inventory sync." },
      { step: "04", title: "Live Launch & Handover", desc: "Deploy with 301 redirects from old URLs and comprehensive client training." }
    ],
    kpis: [
      { label: "D2C Conversion Rate", value: "3.2% - 5.8%" },
      { label: "Average Order Value (AOV)", value: "+24% Uplift" },
      { label: "Mobile Checkout Speed", value: "< 1.2s" },
      { label: "Cart Abandonment Drop", value: "-19% Average" }
    ],
    faqs: [
      { q: "Can you migrate our existing store from WooCommerce or Magento to Shopify?", a: "Yes. We execute seamless migrations preserving customer accounts, historical order data, and SEO URL structures." }
    ]
  },
  {
    id: "landing-pages",
    category: "Websites",
    pillarId: "websites",
    title: "High-Converting Landing Pages & A/B Funnels",
    shortTitle: "Landing Pages",
    tagline: "Dedicated performance landers engineered for maximum ad conversion",
    heroBadge: "Development Pillar · 03",
    colorHex: "#F43F5E",
    speed: 0.043,
    overview: "Sending paid ad traffic to your generic homepage is burning budget. We build focused, dedicated campaign landing pages engineered around a single irresistible call-to-action, eliminating visual friction, objection handlers, and maximizing customer acquisition.",
    whoBenefits: [
      { role: "Paid Ad Advertisers", desc: "Brands running Meta or Google ad campaigns needing dedicated landing page conversion match." },
      { role: "Lead Gen & Service Firms", desc: "Companies generating consultation bookings, demo requests, or webinar registrations." },
      { role: "Product Launchers", desc: "Teams launching a single signature hero product seeking focused pre-order momentum." }
    ],
    keyFeatures: [
      { title: "Message Match Engineering", desc: "Mirroring the exact ad creative headline and visual promise on the landing page hero." },
      { title: "Frictionless Forms", desc: "Multi-step micro-commitment forms that capture verified phone and email contacts." },
      { title: "Dynamic Objection Handlers", desc: "Authentic testimonial carousels, video reviews, guarantee badges, and live FAQs." },
      { title: "A/B Multivariate Testing", desc: "Split-testing headlines, hero visuals, and CTA copy to continuously drive down CPA." }
    ],
    deliverables: [
      "Custom responsive performance landing page",
      "A/B test variant page setup for headline and offer testing",
      "Lead delivery notifications via WhatsApp, email, and CRM integration",
      "Full tracking pixel and conversion event verification"
    ],
    process: [
      { step: "01", title: "Ad Campaign Alignment", desc: "Analyze campaign audience segments and identify primary emotional conversion hooks." },
      { step: "02", title: "Direct-Response Copy", desc: "Draft high-converting narrative copy adhering to proven problem-agitate-solve formulas." },
      { step: "03", title: "Rapid Development", desc: "Build ultra-lightweight landing page with sub-second mobile rendering." },
      { step: "04", title: "Conversion Calibration", desc: "Review heatmaps, scroll depth drop-offs, and deploy iterative winning variants." }
    ],
    kpis: [
      { label: "Lead Conversion Rate", value: "8.5% - 18.2%" },
      { label: "Cost Per Acquisition (CPA)", value: "-34% Reduction" },
      { label: "Mobile Bounce Rate", value: "< 28%" },
      { label: "Form Completion Rate", value: "72%+" }
    ],
    faqs: [
      { q: "Can landing pages integrate directly with our CRM?", a: "Yes. We connect leads to HubSpot, Zoho, Google Sheets, Salesforce, or WhatsApp Business API instantly." }
    ]
  },
  {
    id: "uiux-design",
    category: "Websites",
    pillarId: "websites",
    title: "UI/UX Design & Design Systems",
    shortTitle: "UI/UX Design",
    tagline: "Human-centric digital interfaces, clickable prototypes & design tokens",
    heroBadge: "Development Pillar · 04",
    colorHex: "#6366F1",
    speed: 0.034,
    overview: "Great software feels invisible. We design intuitive, visually striking web and mobile interfaces that reduce cognitive friction, guide user attention effortlessly, and turn complex workflows into delightful digital experiences.",
    whoBenefits: [
      { role: "SaaS & App Startups", desc: "Tech founders needing user-tested wireframes and production-ready Figma design systems." },
      { role: "Legacy Portals", desc: "Corporate intranets and customer dashboards seeking modern usability overhauls." },
      { role: "Brand Elevators", desc: "Businesses wanting bespoke visual prestige that differentiates them from generic competitors." }
    ],
    keyFeatures: [
      { title: "User Journey & Wireframing", desc: "Low-fidelity structural maps that validate information hierarchy before pixel design." },
      { title: "High-Fidelity Figma Systems", desc: "Atomic design components, typography scales, color tokens, and responsive autolayouts." },
      { title: "Interactive Prototypes", desc: "Clickable, realistic micro-interactions for user testing and stakeholder alignment." },
      { title: "Developer Handoff Specs", desc: "Comprehensive spacing tokens, CSS variable exports, and asset documentation." }
    ],
    deliverables: [
      "Complete interactive Figma prototype ready for user testing",
      "Scalable design system with reusable components and variant states",
      "Developer-ready design tokens and asset exports (SVG, WebP)",
      "Usability testing report and conversion enhancement recommendations"
    ],
    process: [
      { step: "01", title: "Discovery & User Persona", desc: "Research user goals, mental models, and pain points." },
      { step: "02", title: "Wireframing", desc: "Establish optimal screen flows and interactive layouts." },
      { step: "03", title: "Visual System Creation", desc: "Apply bespoke typography, color harmony, and tactile micro-states." },
      { step: "04", title: "Prototype & Handoff", desc: "Deliver clickable prototypes and support frontend engineering during implementation." }
    ],
    kpis: [
      { label: "Task Completion Rate", value: "96.4%" },
      { label: "System Component Reusability", value: "90%+" },
      { label: "Time on Task Drop", value: "-42% Friction" },
      { label: "Accessibility Grade", value: "WCAG AAA" }
    ],
    faqs: [
      { q: "Do you supply Figma source files?", a: "Yes. You receive full ownership of the clean, organized Figma design system files." }
    ]
  },
  {
    id: "wordpress-development",
    category: "Websites",
    pillarId: "websites",
    title: "Custom WordPress & Headless CMS",
    shortTitle: "WordPress Sites",
    tagline: "Custom theme development without generic bloated page-builder plugins",
    heroBadge: "Development Pillar · 05",
    colorHex: "#21759B",
    speed: 0.037,
    overview: "We rescue WordPress from generic, sluggish page builders. We develop lightweight custom Gutenberg block themes and headless WordPress configurations engineered for security, modular content editing, and lightning performance.",
    whoBenefits: [
      { role: "Content Publishers & Blogs", desc: "Publications requiring high-volume editorial workflows, tags, and rapid SEO indexing." },
      { role: "Corporate Enterprises", desc: "Organizations needing multi-lingual, multi-region content management." },
      { role: "Marketing Teams", desc: "Teams that need to create landing pages independently using pre-built branded blocks." }
    ],
    keyFeatures: [
      { title: "Custom Gutenberg Block Themes", desc: "Native modular editor blocks styled precisely to brand guidelines with zero Elementor/Divi bloat." },
      { title: "Enterprise Hardened Security", desc: "Database prefix masking, two-factor authentication, Cloudflare WAF integration, and zero backdoor vulnerabilities." },
      { title: "Advanced Custom Fields (ACF)", desc: "Structured data models that make editing headers, stats, and testimonials foolproof." },
      { title: "Object Caching & CDN", desc: "Redis object caching and edge caching for sub-second page loads even under heavy traffic." }
    ],
    deliverables: [
      "Custom WordPress theme developed without heavy page builders",
      "Suite of reusable Gutenberg editor blocks for marketing agility",
      "Hardened security protocol configuration and automated off-site backups",
      "Video walkthrough tutorial for internal staff onboarding"
    ],
    process: [
      { step: "01", title: "Content Architecture", desc: "Define custom post types, taxonomies, and modular field structures." },
      { step: "02", title: "Theme Engineering", desc: "Code custom PHP/React templates matching Figma designs with clean semantic markup." },
      { step: "03", title: "Optimization", desc: "Eliminate unused CSS/JS, configure Redis caching, and optimize media delivery." },
      { step: "04", title: "Security & Launch", desc: "Deploy with SSL, security monitoring, and automated database backups." }
    ],
    kpis: [
      { label: "Mobile Speed Index", value: "< 1.0s" },
      { label: "Plugin Count Discipline", value: "< 12 Total" },
      { label: "Security Vulnerabilities", value: "0 Detected" },
      { label: "Editorial Publishing Time", value: "-60% Faster" }
    ],
    faqs: [
      { q: "Why avoid generic page builders like Elementor?", a: "Heavy builders inject excessive DOM nodes and uncompressed scripts, devastating Core Web Vitals and SEO rankings. Native block themes provide the same drag-and-drop freedom with 10x faster speed." }
    ]
  },
  {
    id: "website-maintenance",
    category: "Websites",
    pillarId: "websites",
    title: "Website Speed, Security & Maintenance",
    shortTitle: "Maintenance & SLA",
    tagline: "Proactive uptime monitoring, security patching & continuous speed tuning",
    heroBadge: "Development Pillar · 06",
    colorHex: "#1E2633",
    speed: 0.033,
    overview: "A website is living infrastructure. We protect your digital investment with 24/7 uptime monitoring, proactive security patches, off-site daily backups, speed calibration, and dedicated monthly development hours for ongoing improvements.",
    whoBenefits: [
      { role: "Mission-Critical Businesses", desc: "Companies where an hour of downtime translates into substantial direct revenue loss." },
      { role: "Teams Without In-House IT", desc: "Founders and marketing managers who need reliable, expert technical support on retainer." },
      { role: "E-Commerce Stores", desc: "Online stores requiring continuous checkout testing, security compliance, and database cleanup." }
    ],
    keyFeatures: [
      { title: "24/7 Uptime & Anomaly Monitoring", desc: "Instant alert dispatch and automated failover recovery in the event of server interruptions." },
      { title: "Daily Cloud Backups", desc: "Encrypted daily off-site snapshots stored across redundant multi-region AWS S3 buckets." },
      { title: "Continuous Speed Calibration", desc: "Monthly database defragmentation, broken link pruning, and image compression audits." },
      { title: "Dedicated Engineering Retainer", desc: "Monthly hours for content updates, new promotional banners, and feature enhancements." }
    ],
    deliverables: [
      "24/7 real-time uptime monitoring with sub-15 minute incident response SLA",
      "Weekly core, theme, and security extension patch updates in staging environments",
      "Monthly performance and security vulnerability health report",
      "Dedicated developer hours for ongoing site updates"
    ],
    process: [
      { step: "01", title: "Baseline Health Audit", desc: "Inspect current server environment, database overhead, and active vulnerabilities." },
      { step: "02", title: "Staging Setup", desc: "Establish isolated staging mirrors so all updates are tested before going live." },
      { step: "03", title: "Automated Guardrails", desc: "Configure uptime telemetry, WAF firewalls, and daily backup cron jobs." },
      { step: "04", title: "Continuous Optimization", desc: "Execute regular monthly speed checks, database optimization, and content updates." }
    ],
    kpis: [
      { label: "Uptime SLA Guarantee", value: "99.95%" },
      { label: "Incident Response Time", value: "< 15 Mins" },
      { label: "Daily Backups Retained", value: "30 Days" },
      { label: "Security Patch Latency", value: "< 24 Hours" }
    ],
    faqs: [
      { q: "What happens if our site goes down over the weekend?", a: "Our automated monitoring triggers emergency engineer notification immediately, 24 hours a day, 365 days a year." }
    ]
  },

  // =========================================================================
  // PILLAR 3: DIGITAL MARKETING
  // =========================================================================
  {
    id: "seo",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Search Engine Optimization (Technical & Organic)",
    shortTitle: "Organic SEO",
    tagline: "High-intent organic search dominance that compounds over time",
    heroBadge: "Marketing Pillar · 01",
    colorHex: "#38BDF8",
    speed: 0.046,
    overview: "Capture demand from consumers already searching for what you offer. We build authoritative search architecture combining deep technical audits, semantic keyword mapping, topical authority clusters, and authoritative digital PR backlink acquisition.",
    whoBenefits: [
      { role: "Customer Acquisition Scalers", desc: "Businesses seeking sustainable, compounding customer pipeline without rising ad costs." },
      { role: "B2B & High-Ticket Firms", desc: "Companies selling complex solutions where buyers research extensively on Google before contacting sales." },
      { role: "Brands Trapped in PPC Dependence", desc: "Companies spending excessively on Google Ads seeking organic balance." }
    ],
    keyFeatures: [
      { title: "Technical SEO & Architecture", desc: "Eliminating crawl bloat, canonical loops, orphan pages, and optimizing Core Web Vitals." },
      { title: "Topical Authority Content Clusters", desc: "Comprehensive pillar-and-spoke content hubs that establish clear subject matter dominance in Google's eyes." },
      { title: "High-Intent Keyword Mapping", desc: "Targeting commercial investigation and transactional search queries rather than empty vanity keywords." },
      { title: "Authoritative Link Acquisition", desc: "High-tier digital PR placements, contextual mentions, and editorial industry links." }
    ],
    deliverables: [
      "Full technical SEO audit with prioritized developer action backlog",
      "Competitor keyword gap analysis and 6-month topical cluster roadmap",
      "On-page optimization across meta titles, H-tags, and semantic schema",
      "Monthly organic keyword ranking & qualified organic traffic reports"
    ],
    process: [
      { step: "01", title: "Technical Crawl Audit", desc: "Identify and resolve indexation issues, site speed bottlenecks, and redirect chains." },
      { step: "02", title: "Keyword Opportunity Gap", desc: "Identify high-intent search terms where competitors are winning commercial volume." },
      { step: "03", title: "On-Page Optimization", desc: "Restructure existing pages and publish new authoritative topical cluster content." },
      { step: "04", title: "Authority Building", desc: "Execute high-tier outreach and PR to build trusted contextual backlinks." }
    ],
    kpis: [
      { label: "Top 3 Organic Rankings", value: "+180% Growth" },
      { label: "Qualified Search Traffic", value: "+120% YoY" },
      { label: "Organic Customer Pipeline", value: "Compounding" },
      { label: "Crawl Error Resolution", value: "100% Cleared" }
    ],
    faqs: [
      { q: "How long before SEO produces tangible business results?", a: "Technical fixes show indexing improvements in 2–4 weeks. Noticeable organic rank and lead velocity gains typically compound within 3 to 6 months." },
      { q: "Do you guarantee #1 rankings on Google?", a: "No legitimate agency can guarantee specific #1 rankings because Google's algorithm evolves constantly. We guarantee strict adherence to Google's best-practice guidelines and proven topical authority frameworks." }
    ]
  },
  {
    id: "local-seo",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Local SEO & Google Business Profile Maps",
    shortTitle: "Local SEO",
    tagline: "Dominate Google 3-Pack Maps rankings and drive local footfall & calls",
    heroBadge: "Marketing Pillar · 02",
    colorHex: "#10B981",
    speed: 0.040,
    overview: "When local customers search for services near them, winning the Google Maps 3-Pack is the difference between thriving and being invisible. We optimize your Google Business Profile (GBP), build consistent local citations, and execute review acceleration systems to dominate your service radius.",
    whoBenefits: [
      { role: "Multi-Location Retailers & Clinics", desc: "Hospitals, clinics, salons, and retail chains with physical customer-facing locations." },
      { role: "Local Service Providers", desc: "Law firms, interior designers, contractors, and agencies serving specific geographic territories." },
      { role: "Regional Franchises", desc: "Franchise brands requiring unified local profile management across cities." }
    ],
    keyFeatures: [
      { title: "Google Business Profile (GBP) Optimization", desc: "Exhaustive category selection, geo-tagged photos, service menus, and regular promotional updates." },
      { title: "Local Citation Consistency (NAP)", desc: "100% unified Name, Address, Phone Number synchronization across 50+ trusted directories." },
      { title: "Review Velocity Automation", desc: "Compliant SMS and QR-code systems to systematically collect 5-star customer reviews." },
      { title: "Geo-Targeted Local Pages", desc: "City and neighborhood landing pages with localized Schema markup." }
    ],
    deliverables: [
      "Complete Google Business Profile audit and keyword enhancement",
      "50+ verified local business directory citations and map pinpointing",
      "Automated customer review request templates and QR display collateral",
      "Monthly local search calls, direction requests, and map rank reporting"
    ],
    process: [
      { step: "01", title: "Profile Claim & Audit", desc: "Verify ownership, remove duplicate listings, and correct inconsistent NAP information." },
      { step: "02", title: "Category & Keyword Setup", desc: "Optimize primary and secondary categories to match local search intent." },
      { step: "03", title: "Citation Building", desc: "Distribute consistent business citations across authoritative local directories." },
      { step: "04", title: "Review Generation", desc: "Deploy customer review workflows to continuously build social proof." }
    ],
    kpis: [
      { label: "Google Map 3-Pack Share", value: "Top 3 Ranking" },
      { label: "Phone Call Actions", value: "+85% Increase" },
      { label: "Direction Requests", value: "+64% Lift" },
      { label: "Monthly 5-Star Reviews", value: "+25 New/Month" }
    ],
    faqs: [
      { q: "How do you improve Google Maps rankings?", a: "By optimizing primary categories, increasing review velocity and sentiment, maintaining 100% NAP consistency, and building localized web signals." }
    ]
  },
  {
    id: "google-ads",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Google Ads (Search, Shopping, Performance Max)",
    shortTitle: "Google Ads",
    tagline: "High-intent paid search, Google Shopping & Performance Max campaigns",
    heroBadge: "Marketing Pillar · 03",
    colorHex: "#EA4335",
    speed: 0.044,
    overview: "Capture buyers at the exact second they are searching for your product or service. We build high-efficiency Google Ads systems with single-intent ad groups, negative keyword walls, high-converting responsive search copy, and tightly calibrated Performance Max asset groups.",
    whoBenefits: [
      { role: "Immediate Lead Seekers", desc: "Businesses that need qualified leads or sales this week rather than waiting months for organic build-up." },
      { role: "E-Commerce Product Sellers", desc: "Brands scaling through Google Shopping feeds and Performance Max campaigns." },
      { role: "High-LTV Service Providers", desc: "Companies where a single customer acquisition covers weeks of ad spend." }
    ],
    keyFeatures: [
      { title: "Intent-Isolated Search Campaigns", desc: "Structuring campaigns by user intent levels (High Transactional vs Brand vs Informational) with strict bid limits." },
      { title: "Negative Keyword Architecture", desc: "Multi-tiered negative keyword lists blocking job seekers, freebie seekers, and unrelated queries." },
      { title: "Merchant Center & Shopping Feeds", desc: "Optimizing Google Shopping titles, custom product labels, and promotional price drops." },
      { title: "Offline Conversion Tracking", desc: "Feeding closed-won deal data back into Google AI bidding to prioritize buyers, not just form fills." }
    ],
    deliverables: [
      "Custom Google Ads account structure and campaign builds",
      "High-converting Responsive Search Ad copy and extension setups",
      "Negative keyword lists and search query audit routines",
      "Weekly ROAS / Cost per Acquisition (CPA) optimization and reporting"
    ],
    process: [
      { step: "01", title: "Search Intent Research", desc: "Identify commercial keywords with high purchase intent and acceptable CPC." },
      { step: "02", title: "Campaign Build", desc: "Construct tightly themed ad groups with customized landing page pairings." },
      { step: "03", title: "Negative Keyword Guardrails", desc: "Deploy extensive negative keyword lists before spend begins." },
      { step: "04", title: "Smart Bidding Scaling", desc: "Transition into Target CPA / Target ROAS once conversion history matures." }
    ],
    kpis: [
      { label: "Cost Per Lead (CPL)", value: "-36% Reduction" },
      { label: "Average ROAS", value: "4.2x - 7.5x" },
      { label: "Impression Share", value: "Top of Page > 80%" },
      { label: "Quality Score Benchmark", value: "8/10 or Higher" }
    ],
    faqs: [
      { q: "What minimum monthly Google Ads spend do you recommend?", a: "We typically recommend a minimum advertising spend of ₹35,000 to ₹75,000 ($500–$1,000) per month to allow algorithmic learning models to calibrate effectively." }
    ]
  },
  {
    id: "meta-ads",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Meta & Instagram Performance Advertising",
    shortTitle: "Meta Ads",
    tagline: "High-yield creative testing, Advantage+ campaigns & ROAS discipline",
    heroBadge: "Marketing Pillar · 04",
    colorHex: "#1877F2",
    speed: 0.042,
    overview: "Scale profitable customer acquisition on Facebook and Instagram. We combine high-velocity direct-response creative testing (UGC, reels, hooks, statics) with Meta's Advantage+ shopping algorithms and server-side Conversions API (CAPI) tracking to lower customer acquisition costs.",
    whoBenefits: [
      { role: "Direct-to-Consumer Brands", desc: "Product businesses that thrive on visual impulse buying, lifestyle aesthetics, and problem-solution demonstration." },
      { role: "Lead Generation Businesses", desc: "Firms generating qualified consultation inquiries through high-converting instant forms and landing page funnels." },
      { role: "Brands Trapped at Scale Ceilings", desc: "Advertisers who cannot spend past $500/day without ROAS crashing." }
    ],
    keyFeatures: [
      { title: "Dynamic Creative Testing (DCT)", desc: "Testing 3-5 hooks, 2-3 body copies, and multiple visual formats simultaneously to find clear winning combinations." },
      { title: "Meta Conversions API (CAPI)", desc: "Server-side event tracking that bypasses iOS ad blockers to provide 100% accurate conversion attribution." },
      { title: "Creative Fatigue Management", desc: "Publishing fresh creative variations weekly to maintain low CPMs and consistent conversion rates." },
      { title: "Full-Funnel Retargeting", desc: "Dynamic catalog ads targeting cart abandoners and past purchasers with cross-sell incentives." }
    ],
    deliverables: [
      "Meta Ads campaign architecture (Prospecting, Testing, Retargeting)",
      "Weekly creative briefs, static graphics, and video ad edits",
      "Meta Pixel and Server-Side Conversions API (CAPI) installation",
      "Weekly performance reports tracking CPA, ROAS, and creative metrics"
    ],
    process: [
      { step: "01", title: "Customer Avatar Mapping", desc: "Isolate core customer pains, desires, objections, and buying motivations." },
      { step: "02", title: "Creative Production", desc: "Produce diversified static, carousel, and video creative assets focused on hook rate." },
      { step: "03", title: "Dynamic Testing", desc: "Deploy structured dynamic testing campaigns to identify winning combinations." },
      { step: "04", title: "Horizontal Scaling", desc: "Scale budget into winning ads while continuously introducing new creative angles." }
    ],
    kpis: [
      { label: "Blended ROAS", value: "3.5x - 6.0x" },
      { label: "Hook Rate (3-Sec View)", value: "> 35%" },
      { label: "Customer Acquisition Cost", value: "-28% Average" },
      { label: "Event Match Quality", value: "9.2/10 (CAPI)" }
    ],
    faqs: [
      { q: "How do you combat creative fatigue when ads stop performing?", a: "We run ongoing weekly creative testing cycles, constantly introducing new visual hooks, angles, and formats before primary campaigns fatigue." }
    ]
  },
  {
    id: "social-media",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Social Media Strategy & Community Growth",
    shortTitle: "Social Presence",
    tagline: "Build genuine audience equity, cultural relevance & compounding organic reach",
    heroBadge: "Marketing Pillar · 05",
    colorHex: "#A855F7",
    speed: 0.035,
    overview: "Social media is your brand's digital personality. We develop cohesive editorial strategies, produce thumb-stopping visual carousels and reels, manage daily community engagement, and position your brand as an authoritative, culturally relevant leader in your space.",
    whoBenefits: [
      { role: "Brands with Inactive Social Profiles", desc: "Businesses whose social pages look abandoned or post generic, low-engagement corporate updates." },
      { role: "Consumer Lifestyle Brands", desc: "Fashion, beauty, food, and wellness brands that rely on daily visual aesthetics and community loyalty." },
      { role: "Founders & Executives", desc: "Leaders building personal brand authority on LinkedIn and Instagram." }
    ],
    keyFeatures: [
      { title: "Editorial Content Calendar", desc: "Planned monthly content themes balancing educational value, brand authority, and product promotions." },
      { title: "Short-Form Video & Carousel Design", desc: "Engaging multi-slide educational carousels and trending audio reels designed for viral reach." },
      { title: "Active Community Management", desc: "Prompt responses to comments, DMs, story mentions, and active engagement with category leaders." },
      { title: "Influencer Gifting & Collaborations", desc: "Partnering with verified micro-influencers for authentic third-party product reviews." }
    ],
    deliverables: [
      "Monthly 30-day editorial calendar with copy, hashtags, and creative assets",
      "12–16 bespoke feed posts, carousel designs, and story graphics per month",
      "Daily engagement monitoring and DM customer inquiry triage",
      "Monthly audience growth, engagement rate, and reach analytics"
    ],
    process: [
      { step: "01", title: "Brand Voice & Visual Style", desc: "Define your visual aesthetic, brand tone, content pillars, and color consistency." },
      { step: "02", title: "Content Batching", desc: "Produce graphics, copywriting, and short-form video in monthly batches for approval." },
      { step: "03", title: "Publishing & Community", desc: "Schedule posts at peak audience times and engage actively in the comments." },
      { step: "04", title: "Performance Review", desc: "Analyze top-performing formats and double down on formats that drive organic shares." }
    ],
    kpis: [
      { label: "Engagement Rate", value: "3.5x Industry Avg" },
      { label: "Organic Monthly Reach", value: "+140% Lift" },
      { label: "Profile Visits to Link Clicks", value: "> 8.5%" },
      { label: "Community Inquiries", value: "Daily Inbound" }
    ],
    faqs: [
      { q: "Do you respond to direct messages and comments?", a: "Yes. We monitor engagement and either answer standard FAQs or route high-intent customer leads to your sales team." }
    ]
  },
  {
    id: "lead-generation",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Inbound Lead Generation & B2B Funnels",
    shortTitle: "Lead Generation",
    tagline: "Predictable B2B qualified pipeline through multi-channel lead funnels",
    heroBadge: "Marketing Pillar · 06",
    colorHex: "#3B82F6",
    speed: 0.041,
    overview: "Build a reliable, automated machine that fills your sales calendar with qualified business prospects. We engineer full-funnel inbound lead generation systems combining LinkedIn B2B targeting, Google Search capture, qualification lead magnets, and automated nurturing flows.",
    whoBenefits: [
      { role: "B2B Service Providers", desc: "IT firms, consultancies, legal practices, and agencies needing predictable high-ticket deal flow." },
      { role: "High-Value Consumer Services", desc: "Real estate developers, luxury interior designers, and elective medical clinics." },
      { role: "Software & SaaS Companies", desc: "Platforms generating sales demo bookings and qualified enterprise trials." }
    ],
    keyFeatures: [
      { title: "Multi-Step Lead Qualification", desc: "Filtering tire-kickers with budget, timeline, and company size qualification questions." },
      { title: "High-Value Lead Magnets", desc: "Industry benchmark reports, calculators, and audit checklists that compel prospects to share details." },
      { title: "Automated Instant Triage", desc: "Instant SMS/WhatsApp confirmation dispatched within 60 seconds of form submission." },
      { title: "Calendar Booking Integration", desc: "Direct integration with Calendly, HubSpot, or Google Calendar for friction-free meeting scheduling." }
    ],
    deliverables: [
      "Custom multi-step qualification lead generation funnel",
      "High-value lead magnet asset creation (PDF guide, checklist, or calculator)",
      "CRM and email/WhatsApp automation sequences",
      "Weekly cost per qualified lead (CPQL) optimization"
    ],
    process: [
      { step: "01", title: "Ideal Customer Profile", desc: "Define exact job titles, company revenue tiers, and decision-maker criteria." },
      { step: "02", title: "Funnel Engineering", desc: "Build dedicated high-converting qualification page with zero external navigation leaks." },
      { step: "03", title: "Multi-Channel Traffic", desc: "Drive high-intent traffic via Google Search and LinkedIn Sponsored Content." },
      { step: "04", title: "Nurturing Automation", desc: "Deploy immediate multi-touch follow-ups to maximize sales call show-up rates." }
    ],
    kpis: [
      { label: "Cost Per Qualified Lead", value: "-40% Reduction" },
      { label: "Form-to-Call Booking Rate", value: "38%+" },
      { label: "Sales Call Show-Up Rate", value: "> 85%" },
      { label: "Lead Pipeline Value", value: "Tracked in CRM" }
    ],
    faqs: [
      { q: "How do you filter out low-quality or fake leads?", a: "We implement OTP phone verification, corporate email requirements, and mandatory budget qualification questions." }
    ]
  },
  {
    id: "email-whatsapp",
    category: "Digital Marketing",
    pillarId: "marketing",
    title: "Email & WhatsApp Marketing Automation",
    shortTitle: "Email & WhatsApp",
    tagline: "Automated revenue workflows, broadcast campaigns & 98% open rates",
    heroBadge: "Marketing Pillar · 07",
    colorHex: "#25D366",
    speed: 0.038,
    overview: "Your subscriber list is your most profitable owned channel. We architect sophisticated Klaviyo and WhatsApp Business API automated workflows—welcome series, abandoned cart recovery, browse abandonment, post-purchase VIP sequences—generating 25%–40% of total store revenue on autopilot.",
    whoBenefits: [
      { role: "E-Commerce Stores", desc: "D2C brands seeking to recover lost carts and drive repeat purchases without paying for ads." },
      { role: "Service Businesses", desc: "Firms keeping prospects warm through automated appointment reminders and educational newsletters." },
      { role: "Course Creators & Communities", desc: "Brands nurturing high-engagement communities with zero algorithm interference." }
    ],
    keyFeatures: [
      { title: "WhatsApp Business API Flows", desc: "Automated cart abandonment recovery, order tracking updates, and promotional broadcasts with 98% open rates." },
      { title: "Klaviyo Automated Revenue Flows", desc: "Welcome series, browse abandonment, abandoned checkout, customer winback, and VIP tiered rewards." },
      { title: "Dynamic Audience Segmentation", desc: "Segmenting buyers by lifetime spend, purchase frequency, and product category affinity." },
      { title: "Deliverability Optimization", desc: "SPF, DKIM, and DMARC authentication ensuring primary inbox delivery with zero spam folder drops." }
    ],
    deliverables: [
      "Complete WhatsApp Business API and Klaviyo automation integration",
      "8 core behavioral automated revenue flows with custom responsive visual templates",
      "2–4 targeted promotional broadcast campaigns per month",
      "Deliverability monitoring and monthly attributed revenue reports"
    ],
    process: [
      { step: "01", title: "Technical Setup", desc: "Authenticate sending domains with SPF, DKIM, DMARC, and WhatsApp Business API." },
      { step: "02", title: "Flow Architecture", desc: "Build high-converting email and WhatsApp automated flows with dynamic discount logic." },
      { step: "03", title: "List Segmentation", desc: "Clean inactive contacts and isolate high-value repeat customer clusters." },
      { step: "04", title: "A/B Subject Testing", desc: "Continuously test subject lines, send-time optimization, and offer structures." }
    ],
    kpis: [
      { label: "Attributed Store Revenue", value: "25% - 40%" },
      { label: "WhatsApp Open Rate", value: "98% Average" },
      { label: "Email Open Rate", value: "38% - 52%" },
      { label: "Cart Recovery Rate", value: "18% - 24%" }
    ],
    faqs: [
      { q: "Is WhatsApp marketing spam-compliant?", a: "Yes. We use official Meta WhatsApp Business API with verified opt-in permissions and easy one-click opt-out controls." }
    ]
  },

  // =========================================================================
  // PILLAR 4: YOUTUBE & VIDEO SERVICES
  // =========================================================================
  {
    id: "youtube-growth",
    category: "YouTube & Video",
    pillarId: "video",
    title: "YouTube Channel Setup, Optimization & Video SEO",
    shortTitle: "YouTube Growth",
    tagline: "Turn your channel into an authority engine that generates continuous views",
    heroBadge: "Video Pillar · 01",
    colorHex: "#FF0000",
    speed: 0.044,
    overview: "YouTube is the world's second-largest search engine. We optimize your YouTube channel architecture, execute algorithmic keyword research, write high-CTR title variations, design clickable custom thumbnails, and optimize video metadata so your content ranks organically for years.",
    whoBenefits: [
      { role: "Corporate & B2B Brands", desc: "Companies establishing thought leadership and customer education video libraries." },
      { role: "Product Review Channels", desc: "Brands showcasing detailed product demonstrations and unboxing reviews." },
      { role: "Subject Matter Experts", desc: "Doctors, consultants, financial educators, and founders building authority." }
    ],
    keyFeatures: [
      { title: "Channel Branding Architecture", desc: "Custom banner art, channel trailer strategy, organized playlists, and verified handle setup." },
      { title: "Search-Led Video Topic Research", desc: "Identifying high-volume search queries where competition is weak." },
      { title: "Video SEO Metadata", desc: "Keyword-rich descriptions, chapter timestamps, cards, and end-screen subscription funnels." },
      { title: "High-CTR Thumbnail Strategy", desc: "Custom thumbnail design with high visual contrast, facial emotion, and curiosity-driven hooks." }
    ],
    deliverables: [
      "Complete channel audit and visual branding kit (Banner, Avatar, Watermark)",
      "Targeted video topic backlog based on YouTube search query volume",
      "Full video SEO upload packages (Title, Description, Tags, Chapters)",
      "Custom high-resolution thumbnail designs for every upload"
    ],
    process: [
      { step: "01", title: "Channel Audit", desc: "Review past video analytics, audience retention curves, and channel branding." },
      { step: "02", title: "Keyword Research", desc: "Identify long-tail search queries that drive consistent evergreen monthly search volume." },
      { step: "03", title: "Metadata Packaging", desc: "Package videos with high-CTR thumbnails, compelling titles, and detailed descriptions." },
      { step: "04", title: "Playlist Funneling", desc: "Structure playlists to maximize session watch time across multiple videos." }
    ],
    kpis: [
      { label: "Click-Through Rate (CTR)", value: "7.5% - 12.0%" },
      { label: "Search View Share", value: "+160% Lift" },
      { label: "Average View Duration", value: "+35% Retention" },
      { label: "Subscriber Conversion", value: "Compounding" }
    ],
    faqs: [
      { q: "Do you guarantee a certain number of views or subscribers?", a: "No ethical agency guarantees views because YouTube's algorithm rewards viewer retention. We guarantee industry-best video packaging, keyword indexing, and high-CTR presentation." }
    ]
  },
  {
    id: "video-motion",
    category: "YouTube & Video",
    pillarId: "video",
    title: "Video Editing, YouTube Shorts & Instagram Reels",
    shortTitle: "Reels & Shorts",
    tagline: "High-pace, viral short-form editing that commands viewer attention",
    heroBadge: "Video Pillar · 02",
    colorHex: "#EC4899",
    speed: 0.047,
    overview: "In modern social media, the first 3 seconds decide everything. We edit raw video footage into dynamic, high-retention Reels, YouTube Shorts, and long-form YouTube episodes complete with animated kinetic captions, sound design, motion graphics, and visual pattern interrupts.",
    whoBenefits: [
      { role: "Content Creators & Influencers", desc: "Creators with plenty of raw footage needing fast, high-quality post-production editing." },
      { role: "Consumer Brands", desc: "D2C labels needing entertaining, viral short-form product videos for Instagram and TikTok." },
      { role: "Podcasters & Educators", desc: "Long-form speakers who need their episodes repurposed into 15–20 viral short clips." }
    ],
    keyFeatures: [
      { title: "Kinetic Captions & Subtitles", desc: "Bold, animated word-by-word subtitles styled with brand colors and emojis." },
      { title: "Pattern Interrupts & B-Roll", desc: "Pacing zooms, sound effects, stock footage overlays, and meme cuts that prevent viewers from swiping away." },
      { title: "Audio Mastering & Sound Design", desc: "Audio cleanup, background music ducking, and satisfying sound effects (whooshes, pops, impacts)." },
      { title: "Long-to-Short Repurposing", desc: "Extracting the 3–5 most compelling golden nuggets from 60-minute podcasts or webinars." }
    ],
    deliverables: [
      "12–20 professionally edited vertical Reels / Shorts per month",
      "Full kinetic subtitles, sound effects, and color grading included",
      "Raw video footage turnaround within 48–72 hours",
      "Thumbnail cover frames designed for grid aesthetics"
    ],
    process: [
      { step: "01", title: "Footage Ingestion", desc: "Receive raw footage and select the highest-impact moments and hooks." },
      { step: "02", title: "Rough Cut & Pacing", desc: "Trim silence, filler words, and structure the narrative for immediate gratification." },
      { step: "03", title: "Motion & Effects", desc: "Add kinetic captions, visual B-roll, motion graphics, and sound design." },
      { step: "04", title: "Review & Delivery", desc: "Provide review links for feedback and deliver final high-bitrate exports." }
    ],
    kpis: [
      { label: "Completion Rate", value: "> 65% on Reels" },
      { label: "Average Viral Reach", value: "10x Follower Base" },
      { label: "Turnaround SLA", value: "48-72 Hours" },
      { label: "Viewer Retention Lift", value: "+45% Watch Time" }
    ],
    faqs: [
      { q: "Can we supply raw video shot on smartphones?", a: "Yes. Modern iPhone and smartphone footage shot in good lighting produces exceptional results when paired with our editing." }
    ]
  },
  {
    id: "product-video-production",
    category: "YouTube & Video",
    pillarId: "video",
    title: "Product Shoots & Promotional Video Production",
    shortTitle: "Product Videos",
    tagline: "Commercial product films and 3D motion renders that elevate brand prestige",
    heroBadge: "Video Pillar · 03",
    colorHex: "#F97316",
    speed: 0.039,
    overview: "Consumers cannot touch your product online; your video must do the selling. We produce cinema-grade promotional product videos, lifestyle commercial reels, unboxing showcases, and photorealistic 3D product renders that command premium pricing.",
    whoBenefits: [
      { role: "D2C Hardware & Electronics", desc: "Brands needing close-up macro details and feature demonstrations." },
      { role: "Cosmetics & Skincare Brands", desc: "Formulas needing texture swatches, application walkthroughs, and aesthetic bottle lighting." },
      { role: "Amazon & Shopify Merchants", desc: "Sellers needing compliant hero listing videos that boost purchase confidence." }
    ],
    keyFeatures: [
      { title: "Studio Product Commercials", desc: "Macro turntable shoots, controlled atmospheric lighting, and high-speed slow-motion capture." },
      { title: "Photorealistic 3D Renders", desc: "CGI product modeling, explosive component breakdown animations, and liquid simulations." },
      { title: "Amazon Video Ad Ready", desc: "Formatted with silent captions and high-contrast visuals for silent autoplay feeds." }
    ],
    deliverables: [
      "15-second, 30-second, and 60-second commercial video cuts",
      "Vertical (9:16) and widescreen (16:9) multi-channel exports",
      "High-resolution still frame exports for website and packaging",
      "Full commercial music licensing and voiceover narration included"
    ],
    process: [
      { step: "01", title: "Script & Storyboard", desc: "Write commercial video scripts focused on key product differentiators." },
      { step: "02", title: "Production / 3D Setup", desc: "Execute studio camera shoots or build photorealistic 3D CGI models." },
      { step: "03", title: "Post-Production", desc: "Color grade, add motion typography callouts, and integrate licensed audio." },
      { step: "04", title: "Format Export", desc: "Deliver optimized bitrate exports tailored for Amazon, Instagram, and web hero backgrounds." }
    ],
    kpis: [
      { label: "Conversion Lift", value: "+35% on Product Page" },
      { label: "Return Rate Drop", value: "-22% Less Confusion" },
      { label: "Ad Click-Through Rate", value: "> 2.2% on Ads" },
      { label: "Production Resolution", value: "4K Cinema Quality" }
    ],
    faqs: [
      { q: "How do we ship product samples for studio shoots?", a: "We provide secure shipping instructions to our production studios and return or archive samples upon project completion." }
    ]
  },

  // =========================================================================
  // PILLAR 5: CREATIVE SERVICES
  // =========================================================================
  {
    id: "brand-identity",
    category: "Creative Services",
    pillarId: "creative",
    title: "Brand Identity, Logo Design & Guidelines",
    shortTitle: "Brand Identity",
    tagline: "Timeless visual identity systems that command enterprise prestige",
    heroBadge: "Creative Pillar · 01",
    colorHex: "#B8737A",
    speed: 0.036,
    overview: "Your brand is the sum of every emotional perception people hold about your business. We craft timeless brand identities—from vector logo marks and typography hierarchies to color psychology palettes, packaging design tokens, and comprehensive brand guidelines.",
    whoBenefits: [
      { role: "New Brand Launches", desc: "Founders seeking institutional credibility, timeless aesthetics, and legal trademark readiness." },
      { role: "Established Rebranding", desc: "Legacy companies whose outdated visual identity no longer reflects their true scale." },
      { role: "Merger & Acquisition Firms", desc: "Businesses consolidating multiple brand entities under one unified identity system." }
    ],
    keyFeatures: [
      { title: "Vector Logo Mark & Wordmark", desc: "Primary logo, secondary submarks, favicon icons, and monochrome negative-space variations." },
      { title: "Typography & Color Architecture", desc: "Curated display and editorial font pairings with digital and print color codes (HEX, RGB, CMYK, Pantone)." },
      { title: "Brand Identity Guidelines (Book)", desc: "Exhaustive documentation on clear space, improper usage, grid systems, and brand voice guidelines." },
      { title: "Stationery & Collateral Suite", desc: "Business cards, digital letterheads, presentation pitch decks, and email signature templates." }
    ],
    deliverables: [
      "Master vector logo files (.AI, .EPS, .SVG, .PDF, .PNG with transparency)",
      "Comprehensive 30+ page Brand Identity Guidelines Book",
      "Curated licensed typography pairings and color system",
      "Executive stationery collateral and corporate presentation deck template"
    ],
    process: [
      { step: "01", title: "Brand Discovery & Moodboard", desc: "Explore competitive positioning, brand values, and curate visual aesthetic moodboards." },
      { step: "02", title: "Concept Generation", desc: "Present 3 distinct creative logo directions with real-world mockups." },
      { step: "03", title: "Refinement & Polish", desc: "Fine-tune chosen concept kerning, optical weights, and color balance." },
      { step: "04", title: "Asset Packaging", desc: "Export full production-ready vector suite and compile comprehensive Brand Book." }
    ],
    kpis: [
      { label: "Trademark Ready", value: "100% Vector Original" },
      { label: "Concept Directions", value: "3 Distinct Routes" },
      { label: "Asset Format Coverage", value: "Print & Digital" },
      { label: "Perceived Value Lift", value: "Immediate Prestige" }
    ],
    faqs: [
      { q: "Do we own full copyright and intellectual property rights?", a: "Yes. Upon project completion and final invoice payment, full commercial IP rights transfer to your company." }
    ]
  },
  {
    id: "graphic-design",
    category: "Creative Services",
    pillarId: "creative",
    title: "Graphic Design, Ad Creatives & Marketing Collateral",
    shortTitle: "Graphic Design",
    tagline: "High-volume visual collateral, ad creatives & digital assets on demand",
    heroBadge: "Creative Pillar · 02",
    colorHex: "#F59E0B",
    speed: 0.038,
    overview: "Every touchpoint matters. We provide consistent, high-velocity graphic design across paid ad banners, social carousels, investor pitch decks, digital brochures, email templates, and trade show displays, maintaining flawless brand consistency.",
    whoBenefits: [
      { role: "Active Performance Advertisers", desc: "Teams needing 10–20 fresh ad creative variations monthly to beat ad fatigue." },
      { role: "B2B Sales Teams", desc: "Sales representatives needing polished case study PDFs, whitepapers, and presentation decks." },
      { role: "Event & Conference Exhibitors", desc: "Companies requiring high-resolution roll-up banners, backdrops, and printed flyers." }
    ],
    keyFeatures: [
      { title: "Direct-Response Ad Creatives", desc: "High-CTR static and carousel ad graphics engineered for Meta, LinkedIn, and Google Display." },
      { title: "Corporate Pitch Decks", desc: "Clean, persuasive investor and sales presentation decks in PowerPoint, Google Slides, or Figma." },
      { title: "Brochures, Catalogs & One-Pagers", desc: "Multi-page digital and print-ready product catalogs and service capability guides." }
    ],
    deliverables: [
      "Suite of multi-ratio digital ad creatives (1:1, 4:5, 9:16, 16:9)",
      "High-resolution print-ready CMYK PDFs with crop marks and bleed",
      "Editable presentation decks and editable Canva/Figma source templates",
      "Dedicated fast turnaround for ongoing graphic asset requests"
    ],
    process: [
      { step: "01", title: "Creative Briefing", desc: "Review copy, dimensions, primary call to action, and reference benchmarks." },
      { step: "02", title: "Layout & Typography", desc: "Design high-contrast visual compositions adhering strictly to brand identity standards." },
      { step: "03", title: "Client Review", desc: "Gather centralized revision feedback and adjust details swiftly." },
      { step: "04", title: "Production Exports", desc: "Deliver compressed web assets and print-ready production files." }
    ],
    kpis: [
      { label: "Ad Click-Through Rate", value: "+45% Higher CTR" },
      { label: "Turnaround Time", value: "24-48 Hours" },
      { label: "Brand Consistency", value: "100% Adherence" },
      { label: "Revision Satisfaction", value: "99.4%" }
    ],
    faqs: [
      { q: "Can we request graphic design on a monthly retainer basis?", a: "Yes. We offer flexible ongoing creative retainers with dedicated weekly deliverables and priority turnarounds." }
    ]
  },
  {
    id: "packaging-design",
    category: "Creative Services",
    pillarId: "creative",
    title: "Product Packaging, Label & Unboxing Design",
    shortTitle: "Packaging Design",
    tagline: "Tangible shelf appeal, compliant nutrition labels & memorable unboxing",
    heroBadge: "Creative Pillar · 03",
    colorHex: "#10B981",
    speed: 0.035,
    overview: "Your packaging is the physical handshake with your customer. We design eye-catching retail packaging, bottles, boxes, pouch pouches, shipping cartons, and unboxing experiences that stand out on store shelves and delight customers upon delivery.",
    whoBenefits: [
      { role: "FMCG, Food & Beverage Brands", desc: "Products requiring regulatory nutrition panels, barcodes, and airtight dieline compliance." },
      { role: "Cosmetics & Skincare Labels", desc: "Bottles, jars, and luxury carton boxes with foil stamping, embossing, and spot UV details." },
      { role: "D2C E-Commerce Brands", desc: "Companies transforming shipping boxes into memorable unboxing experiences that trigger organic social shares." }
    ],
    keyFeatures: [
      { title: "Dieline Engineering & Alignment", desc: "Precision alignment to manufacturer dielines with correct bleeds, glue tabs, and fold lines." },
      { title: "Specialty Finish Guidance", desc: "Design specs for hot foil stamping, debossing, embossing, matte lamination, and selective spot UV." },
      { title: "Regulatory & Compliance Hygiene", desc: "FSSAI, FDA, barcode, batch number, and mandatory statutory warning placement." },
      { title: "Photorealistic 3D Mockups", desc: "High-resolution 3D packaging renders for your website and pitch deck before printing begins." }
    ],
    deliverables: [
      "100% print-ready vector dieline files (.AI, .PDF) with color separation",
      "Photorealistic 3D pack renders from multiple visual angles",
      "Printer specification sheet with Pantone color callouts and material recommendations",
      "Direct coordination with your chosen packaging manufacturer"
    ],
    process: [
      { step: "01", title: "Dieline & Material Audit", desc: "Obtain official dieline specs from your manufacturer and review shelf ergonomics." },
      { step: "02", title: "Concept Directions", desc: "Develop 2–3 distinctive visual packaging concepts illustrating the unboxing journey." },
      { step: "03", title: "Statutory Detailing", desc: "Incorporate ingredients, barcodes, regulatory text, and manufacture details." },
      { step: "04", title: "Print Production Ready", desc: "Export CMYK vector files with outlined fonts and provide printer guidance." }
    ],
    kpis: [
      { label: "Shelf Standout Score", value: "Top Tier" },
      { label: "Dieline Print Accuracy", value: "100% Fit" },
      { label: "Unboxing Social Shares", value: "3x Organic Boost" },
      { label: "Regulatory Compliance", value: "Zero Rejections" }
    ],
    faqs: [
      { q: "Do you coordinate with our packaging printing factory?", a: "Yes. We speak directly with your packaging printers to ensure color profiles, bleeds, and material finishes match specifications perfectly." }
    ]
  },
  {
    id: "content-copywriting",
    category: "Creative Services",
    pillarId: "creative",
    title: "Strategic Copywriting & Brand Positioning",
    shortTitle: "Copywriting",
    tagline: "Words that clarify, persuade, and turn passive readers into loyal customers",
    heroBadge: "Creative Pillar · 04",
    colorHex: "#647285",
    speed: 0.033,
    overview: "Design attracts attention; copywriting closes the sale. We craft clear, persuasive direct-response website copy, sales page narratives, video scripts, brand taglines, and email sequences that eliminate confusion, convey value, and motivate customer action.",
    whoBenefits: [
      { role: "Confusing or Technical Businesses", desc: "Companies with brilliant products that struggle to articulate their value in simple terms." },
      { role: "Low-Converting Websites", desc: "Sites with strong traffic that fail to convert visitors into inquiries due to weak messaging." },
      { role: "Rebranding Companies", desc: "Businesses crafting a unified brand voice across executive communications and marketing." }
    ],
    keyFeatures: [
      { title: "Direct-Response Website Copywriting", desc: "Hero headlines, value propositions, feature-to-benefit translations, and compelling CTAs." },
      { title: "Brand Voice & Tone Guidelines", desc: "Codifying brand vocabulary, dos and don'ts, and narrative style for internal consistency." },
      { title: "Commercial Video Scripts", desc: "Compelling narrative scripts with visual cue notes engineered for high viewer retention." }
    ],
    deliverables: [
      "Complete website page copy with formatted H1–H3 headlines and conversion copy",
      "Brand messaging matrix and elevator pitch framework",
      "Commercial video and advertisement script drafts",
      "Two rounds of iterative copy refinements included"
    ],
    process: [
      { step: "01", title: "Customer Interviews", desc: "Analyze customer language, objections, and buying epiphanies." },
      { step: "02", title: "Value Proposition", desc: "Draft crisp, memorable positioning statements that set you apart from competitors." },
      { step: "03", title: "Drafting", desc: "Write persuasive page copy with clear visual section layout recommendations." },
      { step: "04", title: "Conversion Polish", desc: "Refine verbs, eliminate passive fluff, and strengthen call-to-action hooks." }
    ],
    kpis: [
      { label: "Clarity Score", value: "Grade 7 Readability" },
      { label: "On-Page Time", value: "+55% Increase" },
      { label: "Lead Form Submissions", value: "+42% Conversion Lift" },
      { label: "Objection Friction", value: "Zero Hesitation" }
    ],
    faqs: [
      { q: "How do you learn our specific industry technical terminology?", a: "We conduct detailed founder interviews and study customer reviews, competitor documentation, and industry case studies." }
    ]
  },

  // =========================================================================
  // PILLAR 6: INTEGRATED DIGITAL SOLUTIONS
  // =========================================================================
  {
    id: "integrated-solutions",
    category: "Integrated Solutions",
    pillarId: "integrated",
    title: "Integrated Digital Growth Architecture",
    shortTitle: "Integrated Solutions",
    tagline: "One unified partnership connecting marketplaces, websites & performance marketing",
    heroBadge: "Unified Pillar · 01",
    colorHex: "#0E1218",
    speed: 0.048,
    overview: "Why hire five disconnected agencies when one synchronized partner can drive everything? Our Integrated Solutions bundle e-commerce management, website engineering, search visibility, paid ads, and brand creative into one compounding growth engine with zero handoff friction.",
    whoBenefits: [
      { role: "Ambitious Enterprise Brands", desc: "Brands scaling past $1M–$10M wanting complete digital marketing and operational harmony." },
      { role: "Founders Tired of Vendor Chaos", desc: "Leaders weary of managing separate SEO, web dev, Amazon, and performance ad agencies." },
      { role: "Fast-Track Market Entrants", desc: "Companies launching flagship products requiring synchronized multi-channel rollout." }
    ],
    keyFeatures: [
      { title: "One Unified Strategic Leadership", desc: "A dedicated Fractional Growth Director orchestrating your entire digital presence." },
      { title: "Cross-Channel Synergies", desc: "SEO keywords inform Amazon listing copy; Meta ad winners inform website hero messaging." },
      { title: "Single Unified Reporting", desc: "One consolidated dashboard tracking blended CAC, total business GMV, and net profit margins." },
      { title: "Flexible Resource Allocation", desc: "Shift monthly engineering and marketing resources dynamically to where ROI is highest." }
    ],
    deliverables: [
      "End-to-end management across marketplaces, custom website, and paid acquisition",
      "Bi-weekly strategic growth calibration meetings with lead partners",
      "Full creative, copywriting, and technical development support on retainer",
      "Real-time unified BI dashboard with blended CAC and margin telemetry"
    ],
    process: [
      { step: "01", title: "Holistic Audit", desc: "Audit search console, ad spend, Amazon health, website speed, and brand consistency." },
      { step: "02", title: "Master Growth Blueprint", desc: "Build integrated 12-month cross-channel roadmap aligning all service pillars." },
      { step: "03", title: "Synchronized Execution", desc: "Deploy new web architecture, listing optimizations, and ad campaigns simultaneously." },
      { step: "04", title: "Weekly Compounding", desc: "Weekly calibrations to reallocate budget toward highest-performing channels." }
    ],
    kpis: [
      { label: "Blended Business GMV", value: "2.4x - 4.5x Growth" },
      { label: "Vendor Consolidation", value: "1 Partner, 0 Bloat" },
      { label: "Blended CAC Improvement", value: "-32% Average" },
      { label: "Speed to Execution", value: "3x Faster Deploy" }
    ],
    faqs: [
      { q: "What packages do you offer for Integrated Solutions?", a: "We offer the Orbit (Launchpad), Nova (Acceleration), and Cosmic (Enterprise Multi-Channel) frameworks customized to your revenue stage." },
      { q: "Can we start with one service and expand into Integrated Solutions later?", a: "Yes. Many clients start with Amazon management or website development and transition into full integrated partnership as results compound." }
    ]
  }
];

export const SERVICES_COMETS = SERVICES_DATA;
