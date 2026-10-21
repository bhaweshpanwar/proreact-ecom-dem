import React, { useEffect } from 'react';
import Home2Header from './components/Home2Header';
import Home2Hero from './components/Home2Hero';
import Home2Problem from './components/Home2Problem';
import Home2Services from './components/Home2Services';
import Home2StickyProcess from './components/Home2StickyProcess';
import Home2Timeline30Days from './components/Home2Timeline30Days';
import Home2AuditOffer from './components/Home2AuditOffer';
import Home2WhyNewAgency from './components/Home2WhyNewAgency';
import Home2ToolsMarquee from './components/Home2ToolsMarquee';
import Home2SampleWork from './components/Home2SampleWork';
import Home2Pricing from './components/Home2Pricing';
import Home2Faq from './components/Home2Faq';
import Home2FinalCta from './components/Home2FinalCta';
import Home2Footer from './components/Home2Footer';

/**
 * ============================================================================
 * HOME2 MASTER CONTENT DATA
 * Edit all page copy, labels, features, and placeholder pricing from this single object.
 * Placeholders are explicitly annotated with // TODO
 * ============================================================================
 */
const HOME2_CONTENT = {
  // 1. Hero
  hero: {
    eyebrow: "VOLUME 01 / 2026 · DIGITAL GROWTH ARCHITECTURE",
    headline: "Beyond digital. Into the next orbit.",
    description: "One senior team for ambitious brands scaling online. Marketplaces, performance marketing, high-conversion web engineering, and brand creative aligned directly to unit economics.",
    auditBtn: "Get a free audit",
    whatsappBtn: "WhatsApp us",
    heroImage: "/images/space/ring-part-2.jpg"
  },

  // 2. The Problem
  problem: {
    eyebrow: "02 / THE BOTTLENECK",
    headline: "Too many freelancers. Too little growth.",
    subtext: "Most expanding businesses end up managing 5 disconnected vendors: an ad agency that ignores catalogues, a web developer who blames the designer, and marketplace account managers operating in a dark room. Nobody owns the bottom-line revenue number.",
    painPoints: [
      {
        num: "01",
        label: "VENDOR FRAGMENTATION",
        title: "Disconnected Execution",
        desc: "Designers don't know Amazon catalog formatting. Ad buyers don't know technical SEO. You spend your weeks relaying feedback across 5 Slack channels."
      },
      {
        num: "02",
        label: "VANITY METRIC TRAP",
        title: "Impressions Over Margin",
        desc: "Agencies celebrate clicks, followers, and ad impressions while your net contribution margin and Buy-Box win rate stay completely flat."
      },
      {
        num: "03",
        label: "THE JUNIOR PASS-OFF",
        title: "Pitch Team vs Real Team",
        desc: "Pitched by senior agency founders, then handed off to junior interns who learn on your company ad budget. Zero commercial skin in the game."
      }
    ],
    statBlock: {
      image: "/images/space/ring-part-three.jpg",
      statPrimary: "5+",
      statLabelPrimary: "Vendors Replaced",
      statSub: "One sovereign team handling marketplaces, ad budgets, storefronts and creative.",
      statSecondary: "24h",
      statLabelSecondary: "Direct Slack & WhatsApp Response",
      statSecondarySub: "Direct partner access. No tiered ticketing queues."
    }
  },

  // 3. One Team, Five Orbits (Services)
  services: {
    eyebrow: "03 / FIVE ORBITS",
    headline: "One team, five orbits.",
    subtext: "Every capability required to scale commercial revenue online, aligned under one sovereign technical standard.",
    services: [
      {
        num: "01",
        title: "Marketplace Management",
        tag: "AMAZON · FLIPKART · QUICK COMMERCE",
        desc: "Catalogue onboarding, daily Buy-Box governance, Sponsored Ads, and algorithmic pricing compliance across major Indian and global marketplaces.",
        image: "/images/space/card-marketplace.jpg",
        link: "/services/ecommerce-management"
      },
      {
        num: "02",
        title: "Performance Marketing & SEO",
        tag: "GOOGLE ADS · META · TECHNICAL SEO",
        desc: "High-intent Google Search, Meta Advantage+ conversion funnels, and organic search architecture focused strictly on contribution margin and CAC efficiency.",
        image: "/images/space/dark-card-ads.jpg",
        link: "/services/digital-marketing"
      },
      {
        num: "03",
        title: "Web & App Development",
        tag: "SHOPIFY LIQUID · HEADLESS · CRO",
        desc: "Sub-second storefront architecture, custom Shopify theme engineering, checkout drop-off elimination, and automated ERP integrations.",
        image: "/images/space/dark-card-web.jpg",
        link: "/services/web-development"
      },
      {
        num: "04",
        title: "Creative & Brand Cinema",
        tag: "STUDIO SHOOTS · 3D CGI · VIDEO",
        desc: "Commercial e-commerce photography, 3D CGI photorealistic product models, and high-velocity short-form motion that elevate perceived market value.",
        image: "/images/space/dark-card-creative.jpg",
        link: "/services/creative-design"
      },
      {
        num: "05",
        title: "Growth & Analytics",
        tag: "FIRST-PARTY DATA · CAPI · GA4",
        desc: "Clean telemetry dashboards, conversion API tracking, customer LTV models, and weekly unit economic audits to scale without burning margin.",
        image: "/images/space/goals-galaxy.jpg",
        link: "/services/integrated-solutions"
      }
    ]
  },

  // 4. How We Work (4 Steps)
  process: {
    eyebrow: "04 / HOW WE WORK",
    headline: "Four steps from audit to orbit.",
    steps: [
      {
        num: "01",
        name: "Discover",
        tag: "FORENSIC DIAGNOSIS",
        heading: "Full Account Telemetry & Gap Analysis",
        desc: "We dive straight into your Google Ads query logs, Amazon Buy-Box share, catalogue health, and checkout drop-off rates. No generic playbooks. We uncover the exact leak points costing you margin.",
        deliverable: "Comprehensive 48-Hour Growth Diagnostic & Unit Economic Model",
        image: "/images/space/process-discover.jpg"
      },
      {
        num: "02",
        name: "Build",
        tag: "FOUNDATION OVERHAUL",
        heading: "Architecture, Catalogue & Campaign Construction",
        desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
        deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
        image: "/images/space/process-build.jpg"
      },
      {
        num: "03",
        name: "Launch",
        tag: "SYNCHRONIZED IGNITION",
        heading: "Omni-Channel Coordinated Go-Live",
        desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
        deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
        image: "/images/space/process-audit.jpg"
      },
      {
        num: "04",
        name: "Grow",
        tag: "SYSTEMATIC COMPOUNDING",
        heading: "Continuous Algorithmic Calibration",
        desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
        deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
        image: "/images/space/process-scale.jpg"
      }
    ]
  },

  // 5. Your First 30 Days
  timeline: {
    eyebrow: "05 / ONBOARDING ROADMAP",
    headline: "Your first 30 days.",
    subtext: "Plain, concrete deliverables from day one. Exactly what happens when you partner with E-Comet.",
    weeks: [
      {
        week: "WEEK 01",
        phase: "RECONNAISSANCE & AUDIT",
        deliverables: [
          "Complete ad account & query log forensic export",
          "Marketplace Buy-Box health & SKU variation audit",
          "Setup of unified WhatsApp / Slack communication channel",
          "Delivery of prioritized 90-day growth roadmap"
        ]
      },
      {
        week: "WEEK 02",
        phase: "FOUNDATION & REBUILD",
        deliverables: [
          "Restructuring underperforming ad campaigns & budgets",
          "Correction of listing errors, titles & back-end search terms",
          "Storefront speed check & mobile checkout CRO fixes",
          "Creative brief approval for new photo & video modules"
        ]
      },
      {
        week: "WEEK 03",
        phase: "SYNCHRONIZED GO-LIVE",
        deliverables: [
          "Live launch of revised Google & Meta ad funnels",
          "Marketplace Sponsored Brand & Sponsored Product deployment",
          "Activation of verified first-party CAPI / GA4 tracking",
          "Daily Buy-Box monitoring & ad bid calibration"
        ]
      },
      {
        week: "WEEK 04",
        phase: "FIRST CALIBRATION REVIEW",
        deliverables: [
          "First comprehensive weekly unit economic report",
          "Pruning negative keywords and low-margin ad spend",
          "Initial baseline comparison vs pre-launch metrics",
          "Approval of month two scaling targets"
        ]
      }
    ]
  },

  // 6. Free Growth Audit (Main Offer)
  audit: {
    eyebrow: "06 / DIAGNOSTIC OFFER",
    headline: "The Free Growth Audit.",
    subtext: "Before you commit a single rupee to a retainer, let us inspect your actual commercial telemetry. We run a comprehensive 48-hour diagnostic across your digital channels.",
    image: "/images/space/card-marketplace.jpg",
    auditFeatures: [
      {
        title: "Search & Ad Account Forensics",
        desc: "We analyze your Google & Meta search query logs, wasted negative keyword spend, and bid efficiency across bottom-funnel queries."
      },
      {
        title: "Marketplace Listing & Buy-Box Health",
        desc: "We evaluate SKU variations, backend search terms, Amazon Brand Store architecture, and daily Buy-Box suppression risks."
      },
      {
        title: "Storefront Latency & Checkout CRO",
        desc: "We audit mobile LCP load times, cart drawer friction, and drop-off barriers causing qualified visitors to leave without buying."
      },
      {
        title: "90-Day Prioritized Action Blueprint",
        desc: "You receive a clear, actionable roadmap detailing the exact levers that will generate 80% of your initial compound momentum."
      }
    ]
  },

  // 7. Why a New Agency Can Be Better
  whyNew: {
    eyebrow: "07 / THE CONTRAST",
    pullQuoteBlack: "Legacy agencies sell you headcounts.",
    pullQuoteGrey: "We deliver direct velocity.",
    fourPoints: [
      {
        num: "01",
        title: "Senior People on Your Account",
        desc: "You collaborate directly with founders and senior practitioners who build and execute. No junior bait-and-switch."
      },
      {
        num: "02",
        title: "Direct WhatsApp & Slack Access",
        desc: "Instant, real-time communications. No support ticketing queues, no 72-hour delay answering urgent catalogue issues."
      },
      {
        num: "03",
        title: "No 12-Month Lock-In",
        desc: "We operate on performance trust. Clear month-to-month retainers after onboarding. We earn your partnership continuously."
      },
      {
        num: "04",
        title: "Weekly Net Contribution Reports",
        desc: "We report actual commercial revenue, margin, and blended ROAS. Zero vanity graphs designed to mask flat sales."
      }
    ]
  },

  // 8. Tools We Work With
  tools: {
    eyebrow: "08 / TECH STACK & PLATFORMS",
    headline: "Tools we operate with daily.",
    subtext: "Text-only verification. We work natively inside standard enterprise growth and commerce software.",
    tools: [
      "Shopify",
      "Amazon Seller Central",
      "Google Ads",
      "Meta Ads Manager",
      "Flipkart Seller Hub",
      "Google Analytics 4",
      "Google Search Console",
      "WordPress",
      "Klaviyo",
      "Semrush",
      "Figma",
      "JioMart Seller Engine"
    ]
  },

  // 9. Sample Work (Concept Projects)
  work: {
    eyebrow: "09 / CONCEPT PORTFOLIO",
    headline: "Sample Work (Concept Projects).",
    subtext: "Explicitly labelled as conceptual frameworks. Demonstrating our technical methodology and aesthetic standards across key sectors.",
    projects: [
      {
        num: "CONCEPT 01",
        category: "D2C HEALTH & NUTRITION",
        title: "Multi-Marketplace Synchronization",
        desc: "Unified catalogue architecture, Amazon Brand Store overhaul, and high-intent keyword capture models.",
        image: "/images/space/work-1.jpg",
        tags: ["AMAZON", "CATALOGUE", "BUY-BOX"]
      },
      {
        num: "CONCEPT 02",
        category: "HIGH-FASHION & APPAREL",
        title: "Headless Shopify & Checkout CRO",
        desc: "Sub-second mobile loading speed, cart drawer conversion triggers, and Meta Advantage+ catalogue funnels.",
        image: "/images/space/work-2.jpg",
        tags: ["SHOPIFY", "META ADS", "CRO"]
      },
      {
        num: "CONCEPT 03",
        category: "ARCHITECTURAL HOME LIVING",
        title: "Category Market Share Dominance",
        desc: "Sponsored Brands video architecture, competitor Buy-Box monitoring, and organic search ranking.",
        image: "/images/space/work-3.jpg",
        tags: ["SPONSORED ADS", "VIDEO", "SEO"]
      },
      {
        num: "CONCEPT 04",
        category: "B2B INDUSTRIAL SUPPLY",
        title: "High-Intent Qualified Pipeline",
        desc: "Google Search bottom-funnel keyword bidding, CRM tracking hooks, and conversion landing page models.",
        image: "/images/space/work-4.jpg",
        tags: ["GOOGLE ADS", "B2B PIPELINE", "CAPI"]
      },
      {
        num: "CONCEPT 05",
        category: "CONSUMER HARDWARE & TECH",
        title: "3D CGI Commercial Product Motion",
        desc: "Photorealistic 3D rendering, feature breakdown animations, and short-form launch creative.",
        image: "/images/space/work-5.jpg",
        tags: ["3D CGI", "MOTION", "CINEMA"]
      }
    ]
  },

  // 10. Pricing Clarity
  pricing: {
    eyebrow: "10 / COMMERCIAL MODELS",
    headline: "Pricing clarity.",
    subtext: "Transparent partnership structures. No hidden markup fees, no percentage-of-ad-spend traps that incentivize wasteful spending.",
    tiers: [
      {
        num: "01",
        name: "FOUNDATION SPRINT",
        scope: "One-Time Architecture Overhaul",
        pricePlaceholder: "Starting from ₹75,000", // TODO: Update with finalized commercial sprint pricing
        badge: "ONE-TIME FIXED FEE",
        desc: "Ideal for brands needing a complete rebuild of their catalogue, search indexing, custom Shopify storefront, or broken ad tracking.",
        includes: [
          "Complete catalogue rebuild & variations",
          "Shopify speed & checkout CRO overhaul",
          "Meta CAPI & GA4 first-party tracking setup",
          "30 days post-launch warranty support"
        ]
      },
      {
        num: "02",
        name: "MONTHLY GROWTH RETAINER",
        scope: "Dedicated Multi-Channel Pod",
        pricePlaceholder: "Starting from ₹1,20,000/mo", // TODO: Update with finalized monthly retainer tiers
        badge: "MONTH-TO-MONTH PERFORMANCE",
        desc: "A dedicated senior team managing daily marketplace Buy-Box algorithms, Google & Meta ads, creative iterations, and weekly reporting.",
        includes: [
          "Daily marketplace & ad bid governance",
          "Continuous creative motion & listing updates",
          "Direct founder Slack / WhatsApp line",
          "Weekly net contribution margin reports"
        ]
      },
      {
        num: "03",
        name: "GROWTH DIAGNOSTIC AUDIT",
        scope: "Comprehensive 48h Inspection",
        pricePlaceholder: "Complimentary for Qualified Brands", // TODO: Confirm qualifying criteria for complimentary audits
        badge: "NO OBLIGATION",
        desc: "A forensic inspection of your current search query logs, Buy-Box suppression risks, and checkout drop-off before signing any agreement.",
        includes: [
          "Full search & ad account forensics",
          "Marketplace listing health score",
          "Checkout speed & mobile latency audit",
          "90-day prioritized execution roadmap"
        ]
      }
    ]
  },

  // 11. FAQ
  faq: {
    eyebrow: "11 / FREQUENTLY ASKED QUESTIONS",
    headline: "Clear answers. Direct terms.",
    subtext: "Everything you need to know about our scope, coordination, contract lengths, and team structure.",
    faqs: [
      {
        q: "How fast can we get started with E-Comet?",
        a: "We initiate with the 48-Hour Growth Diagnostic Audit upon receiving read-only access. Once the roadmap and scope are approved, onboarding takes less than 5 business days to launch the first phase."
      },
      {
        q: "Do we have to sign a long-term contract?",
        a: "No. After an initial 30-day onboarding foundation period, our retainers operate on a flexible month-to-month basis with a 30-day notice. We earn your partnership every single month through measurable net contribution."
      },
      {
        q: "How do you coordinate across marketplaces and ads?",
        a: "All four core practice areas—marketplaces, performance ads, storefront engineering, and creative—work within one single room under one technical director. When an ad budget scales, the marketplace inventory and catalogue teams are automatically synchronized."
      },
      {
        q: "Who actually works on our account?",
        a: "Direct specialists and senior practitioners. We do not use the legacy agency model of pitching with founders and passing your brand to junior graduates. You communicate directly with the individuals building your campaigns."
      },
      {
        q: "What access do you need to begin the audit?",
        a: "Only read-only permissions to your primary ad accounts (Google Ads, Meta Ads Manager) and your marketplace dashboards (Amazon Seller Central, Flipkart). We never ask for admin passwords or financial withdrawal rights."
      }
    ]
  },

  // 12. Final CTA
  cta: {
    eyebrow: "12 / INITIATE TRANSMISSION",
    headline: "Enter the next orbit.",
    subtext: "Request your 48-Hour Diagnostic Growth Audit or schedule a confidential briefing with our senior team.",
    wordmark: "E-COMET"
  }
};

export default function Home2Page() {
  useEffect(() => {
    // Scroll progress line for Home2
    const progressLine = document.getElementById('scroll-progress-line');
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressLine && docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        progressLine.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#040612] text-[#FFFFFF] font-grotesk antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* 0. Editorial Top Navigation Header */}
      <Home2Header />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Home2Hero data={HOME2_CONTENT.hero} />

        {/* 2. The Problem */}
        <Home2Problem data={HOME2_CONTENT.problem} />

        {/* 3. One Team, Five Orbits (Services) */}
        <Home2Services data={HOME2_CONTENT.services} />

        {/* 4. How We Work (4 Steps Sticky) */}
        <Home2StickyProcess data={HOME2_CONTENT.process} />

        {/* 5. Your First 30 Days */}
        <Home2Timeline30Days data={HOME2_CONTENT.timeline} />

        {/* 6. Free Growth Audit (Main Offer Split Block) */}
        <Home2AuditOffer data={HOME2_CONTENT.audit} />

        {/* 7. Why a New Agency Can Be Better (Split Band) */}
        <Home2WhyNewAgency data={HOME2_CONTENT.whyNew} />

        {/* 8. Tools We Work With */}
        <Home2ToolsMarquee data={HOME2_CONTENT.tools} />

        {/* 9. Sample Work (Concept Projects Carousel) */}
        <Home2SampleWork data={HOME2_CONTENT.work} />

        {/* 10. Pricing Clarity (with // TODO placeholders) */}
        <Home2Pricing data={HOME2_CONTENT.pricing} />

        {/* 11. FAQ Accordion */}
        <Home2Faq data={HOME2_CONTENT.faq} />

        {/* 12. Final CTA with Mini Form & Giant Cropped Wordmark */}
        <Home2FinalCta data={HOME2_CONTENT.cta} />
      </main>

      {/* 13. Minimalist Black Footer */}
      <Home2Footer />

    </div>
  );
}
