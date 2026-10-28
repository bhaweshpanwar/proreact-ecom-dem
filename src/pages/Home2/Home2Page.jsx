import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CelestialHero from '../../components/Hero3D/CelestialHero';
import Home2Problem from './components/Home2Problem';
import Home2UnifiedShowcase from './components/Home2UnifiedShowcase';
import Home2Services from './components/Home2Services';
import Home2StickyProcess from './components/Home2StickyProcess';
import Home2Timeline30Days from './components/Home2Timeline30Days';
import Home2AuditOffer from './components/Home2AuditOffer';
import Home2WhyNewAgency from './components/Home2WhyNewAgency';
import Home2ToolsMarquee from './components/Home2ToolsMarquee';
import Home2SampleWork from './components/Home2SampleWork';
import Home2Faq from './components/Home2Faq';
import Home2FinalCta from './components/Home2FinalCta';
import Footer from '../../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

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
    eyebrow: "Digital Growth Architecture",
    headline: "Beyond digital. Into the next orbit.",
    description: "Stop managing five disconnected vendors who blame each other. We engineer full-funnel digital revenue—scaling Amazon marketplaces, high-margin paid acquisition, and custom web architecture governed strictly by your bottom line.",
    auditBtn: "Get a free audit",
    whatsappBtn: "WhatsApp us",
    heroImage: "/images/space/ring-part-2.jpg"
  },

  // 2. The Problem
  problem: {
    eyebrow: "Connected Digital Strategy",
    headline: "Different Agencies for Every Service. Still Waiting for Growth?",
    subtext: "Most expanding businesses end up managing multiple disconnected vendors: an ad agency that ignores catalogues, a web developer who blames the designer, and marketplace account managers operating in a dark room. Nobody owns the bottom-line revenue number.",
    secondaryText: "Your website, digital marketing, branding and marketplace operations shouldn't work in isolation. Bring your digital services together with one integrated growth partner.",
    highlightText: "One Business. One Connected Strategy. E-COMET OUTVERSE.",
    painPoints: [
      {
        num: "01",
        label: "DISCONNECTED DIGITAL EFFORTS",
        title: "When Digital Activities Lack Coordination",
        desc: "Marketplace listings, websites, advertising and social content can operate independently. A clearer plan can help align these activities around your business priorities."
      },
      {
        num: "02",
        label: "ACTIVITY WITHOUT A CLEAR DIRECTION",
        title: "Beyond Clicks, Posts and Impressions",
        desc: "Digital activity should serve a purpose. Define what matters to your business visibility, enquiries, product presentation, customer engagement or online sales and choose services accordingly."
      },
      {
        num: "03",
        label: "SOLUTIONS THAT FIT YOUR BUSINESS",
        title: "Not Every Business Needs Everything",
        desc: "Startup, retailer and established brand have different requirements. We start by understanding your needs before discussing relevant services."
      }
    ],
    statBlock: {
      image: "/images/space/dualvoidanima-art.gif",
      statPrimary: "8+",
      statLabelPrimary: "Services Unified",
      statSub: "One integrated partner managing marketplaces, ad campaigns, storefronts, and brand creative under a single connected strategy.",
      statSecondary: "Direct Team Communication",
      statLabelSecondary: "Clear updates. Structured support.",
      statSecondarySub: "Work directly with our team for project discussions, progress updates and coordinated digital solutions."
    }
  },

  // 3. One Team, Eight Orbits (Services)
  services: {
    eyebrow: "Our Core Services",
    headline: "One team, eight orbits.",
    subtext: "Every capability required to scale commercial revenue online, aligned under one sovereign technical standard.",
    services: [
      {
        num: "01",
        title: "Marketplace Management",
        tag: "AMAZON · FLIPKART · QUICK COMMERCE",
        planet: "ORBIT 01 · MERCURY",
        desc: "Catalogue onboarding, listing optimization, marketplace operations, Sponsored Ads, inventory coordination, and pricing management across major Indian and global marketplaces.",
        image: "/images/space/planet-mercury.jpg",
        link: "/services/ecommerce-management"
      },
      {
        num: "02",
        title: "Digital Marketing",
        tag: "META · GOOGLE · SEO · AI SEARCH",
        planet: "ORBIT 02 · VENUS",
        desc: "Social media management, paid advertising, search engine optimization, lead generation, content marketing, and performance tracking to strengthen digital visibility and support business growth.",
        image: "/images/space/planet-venus.jpg",
        link: "/services/digital-marketing"
      },
      {
        num: "03",
        title: "Website Development",
        tag: "WORDPRESS · SHOPIFY · WOOCOMMERCE",
        planet: "ORBIT 03 · EARTH",
        desc: "Business websites, e-commerce storefronts, landing pages, UI/UX design, third-party integrations, and website performance optimization tailored to business requirements.",
        image: "/images/space/planet-earth.jpg",
        link: "/services/web-development"
      },
      {
        num: "04",
        title: "Creatives & Graphic Design",
        tag: "BRANDING · GRAPHIC DESIGN · AD CREATIVES",
        planet: "ORBIT 04 · MARS",
        desc: "Brand identity, logo design, social media creatives, advertising visuals, marketplace graphics, product packaging, brochures, and visual assets built around your brand identity.",
        image: "/images/space/planet-mars.jpg",
        link: "/services/creative-design"
      },
      {
        num: "05",
        title: "Photography & Photoshoots",
        tag: "PRODUCT · FASHION · FOOD · CORPORATE",
        planet: "ORBIT 05 · JUPITER",
        desc: "Product photography, lifestyle shoots, catalogue images, model photography, food and menu photography, corporate portraits, and professional image post-production for digital and commercial use.",
        image: "/images/space/planet-jupiter.jpg",
        link: "/services/photography-photoshoots"
      },
      {
        num: "06",
        title: "Video Production & Editing",
        tag: "REELS · ADS · BRAND FILMS · YOUTUBE",
        planet: "ORBIT 06 · SATURN",
        desc: "Short-form videos, promotional films, product videos, corporate presentations, reels, YouTube content, motion graphics, subtitles, color grading, and multi-platform video editing.",
        image: "/images/space/planet-saturn.jpg",
        link: "/services/video-production-editing"
      },
      {
        num: "07",
        title: "YouTube Strategy, Channel Management & Content Growth",
        tag: "YOUTUBE SEO · CONTENT STRATEGY · ANALYTICS",
        planet: "ORBIT 07 · URANUS",
        desc: "Channel setup and branding, niche and keyword research, content planning, scripting, thumbnail optimization, publishing workflows, audience retention analysis, and channel performance tracking.",
        image: "/images/space/planet-uranus.jpg",
        link: "/services/youtube-strategy-management"
      },
      {
        num: "08",
        title: "Integrated Digital Solutions",
        tag: "INTEGRATED STRATEGY · CONNECTED SERVICES · BUSINESS GROWTH",
        planet: "ORBIT 08 · NEPTUNE",
        desc: "Customized digital growth frameworks combining marketplaces, websites, marketing, branding, content, and lead generation into a coordinated approach based on your business goals and requirements.",
        image: "/images/space/planet-neptune.jpg",
        link: "/services/integrated-solutions"
      }
    ]
  },

  // 4. How We Work (4 Steps)
  process: {
    eyebrow: "How We Work",
    headline: "Four steps from audit to orbit.",
    steps: [
      {
        num: "01",
        name: "Discover",
        tag: "FORENSIC DIAGNOSIS",
        heading: "Full Account Telemetry & Gap Analysis",
        desc: "We dive straight into your Google Ads query logs, Amazon Buy-Box share, catalogue health, and checkout drop-off rates. No generic playbooks. We uncover the exact leak points costing you margin.",
        deliverable: "Comprehensive 48-Hour Growth Diagnostic & Unit Economic Model",
        deliverablesList: [
          "Google & Meta Ad Account Forensics",
          "Amazon & Marketplace Buy-Box Audit",
          "Storefront Checkout Drop-off & Conversion Barriers",
          "Unit Economic & Contribution Margin Model"
        ],
        buttonText: "Read the Discover Chapter",
        bgColor: "#FF5226", // Vibrant Orange / Coral
        image: "/images/space/process-discover-new.jpg"
      },
      {
        num: "02",
        name: "Build",
        tag: "FOUNDATION OVERHAUL",
        heading: "Architecture, Catalogue & Campaign Construction",
        desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
        deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
        deliverablesList: [
          "Clean Campaign Structure & Negative Keyword Lists",
          "Catalogue SKU Variations & Category Alignment",
          "Custom Web Speed Optimization & Checkout CRO",
          "Conversion API (CAPI) & GA4 Tracking Setup"
        ],
        buttonText: "Read the Build Chapter",
        bgColor: "#9B72FF", // Vibrant Violet / Lavender
        image: "/images/space/process-build-new.jpg"
      },
      {
        num: "03",
        name: "Launch",
        tag: "SYNCHRONIZED IGNITION",
        heading: "Omni-Channel Coordinated Go-Live",
        desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
        deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
        deliverablesList: [
          "Synchronized Multi-Platform Campaign Ignition",
          "Active Amazon Brand Store & A+ Content Live",
          "Direct Tracking & Attribution Verification",
          "Live Margin & Blended ROAS Monitoring"
        ],
        buttonText: "Read the Launch Chapter",
        bgColor: "#E9F835", // Vibrant Electric Acid Yellow
        image: "/images/space/process-launch-new.jpg"
      },
      {
        num: "04",
        name: "Grow",
        tag: "SYSTEMATIC COMPOUNDING",
        heading: "Continuous Algorithmic Calibration",
        desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
        deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
        deliverablesList: [
          "Weekly Net Contribution & Margin Governance",
          "Search Query Harvesting & Algorithmic Bidding",
          "Competitor Buy-Box Anomaly Detection",
          "High-Velocity Creative Testing & Iteration"
        ],
        buttonText: "Read the Grow Chapter",
        bgColor: "#00D2FF", // Vibrant Electric Cyan / Azure
        image: "/images/space/quan-you-zhang-8jW6xCtmYsw-unsplash.jpg"
      }
    ]
  },

  // 5. Your First 30 Days
  timeline: {
    eyebrow: "Onboarding Roadmap",
    headline: "YOUR FIRST 30 DAYS.",
    subtext: "Clear deliverables from day one. Here's what happens when you partner with E-Comet Outverse.",
    footerStrip: "FLEXIBLE EXECUTION · SERVICE-SPECIFIC DELIVERABLES · INTEGRATED DIGITAL SOLUTIONS",
    weeks: [
      {
        week: "WEEK 01",
        phaseNumber: "PHASE 01",
        phase: "DISCOVERY & AUDIT",
        deliverables: [
          "Business goals, brand positioning & service requirements review",
          "Digital presence, website & marketplace audit",
          "Social media, YouTube & existing content assessment",
          "Customized 30-day action plan & priorities"
        ],
        status: "STATUS: DAY 01–DAY 07"
      },
      {
        week: "WEEK 02",
        phaseNumber: "PHASE 02",
        phase: "STRATEGY & FOUNDATION",
        deliverables: [
          "Digital marketing, campaign & channel strategy setup",
          "Website improvements & marketplace listing optimization planning",
          "Creative direction, graphic design & content calendar approval",
          "YouTube strategy and photography/video production planning"
        ],
        status: "STATUS: DAY 08–DAY 14"
      },
      {
        week: "WEEK 03",
        phaseNumber: "PHASE 03",
        phase: "EXECUTION & GO-LIVE",
        deliverables: [
          "Launch or optimize approved digital marketing campaigns",
          "Implement agreed website & marketplace improvements",
          "Produce approved creatives, graphics, photos & video content",
          "Begin YouTube publishing and channel management activities"
        ],
        status: "STATUS: DAY 15–DAY 21"
      },
      {
        week: "WEEK 04",
        phaseNumber: "PHASE 04",
        phase: "REVIEW & OPTIMIZATION",
        deliverables: [
          "First performance report across active services",
          "Review campaign results, website activity & marketplace performance",
          "Evaluate creative, video & content performance",
          "Prioritized next-month roadmap and scaling recommendations"
        ],
        status: "STATUS: DAY 22–DAY 30"
      }
    ]
  },

  // 6. Free Growth Audit (Main Offer)
  audit: {
    eyebrow: "Growth Diagnostic",
    headline: "The Free Growth Audit.",
    subtext: "Before you commit a single rupee to a retainer, let us inspect your actual commercial telemetry. We run a comprehensive 48-hour diagnostic across your digital channels.",
    image: "/images/space/new-second-section-web.jpg",
    auditFeatures: [
      {
        tag: "GROWTH & MARKETING",
        title: "Digital Marketing Performance",
        desc: "We review your digital presence, marketing campaigns, audience targeting, engagement, and opportunities to improve reach and conversions."
      },
      {
        tag: "E-COMMERCE & WEB",
        title: "Marketplace & Website Health",
        desc: "We assess your marketplace listings, product visibility, store performance, website experience, and conversion barriers."
      },
      {
        tag: "CONTENT & CREATIVE",
        title: "Content & Creative Impact",
        desc: "We evaluate your brand creatives, product photography, video content, editing style, and YouTube strategy to identify opportunities for stronger brand communication."
      },
      {
        tag: "STRATEGY & EXECUTION",
        title: "Customized Growth Roadmap",
        desc: "You receive a prioritized action plan tailored to your business goals, service requirements, and opportunities for an integrated digital solution."
      }
    ]
  },

  // 7. Why a New Agency Can Be Better
  whyNew: {
    eyebrow: "Why Partner With Us",
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
    eyebrow: "Platforms & Technology",
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

  // 9. Sample Work (Concept Projects with Orbital Space Visuals)
  work: {
    eyebrow: "Featured Work",
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

  // 11. FAQ
  faq: {
    eyebrow: "Frequently Asked Questions",
    headline: "Clear answers. Direct terms.",
    subtext: "Everything you need to know about our scope, coordination, contract lengths, and team structure.",
    faqs: [
      {
        q: "How fast can we get started with E-Comet Outverse?",
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
    eyebrow: "Contact Us",
    headline: "Enter the next orbit.",
    subtext: "Request your growth diagnostic or schedule a direct consultation with our senior team."
  }
};

export default function Home2Page() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // High-impact GSAP scroll parallax: as user scrolls down from 3D hero to section 2
    let heroParallaxST;
    const heroWrapper = document.getElementById('hero-parallax-wrapper');
    const heroCanvas = document.getElementById('webgl-canvas');
    const heroLabels = document.getElementById('labels-container');
    const heroOverlay = document.querySelector('.viewport-atmospheric-overlay');
    const heroCue = document.getElementById('hero-scroll-cue');
    const mainContent = document.getElementById('main-content');

    if (heroWrapper && mainContent) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContent,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          onUpdate: (self) => {
            // Performance guard: pause visibility when completely covered by mainContent
            if (self.progress >= 1) {
              heroWrapper.style.visibility = 'hidden';
              heroWrapper.style.pointerEvents = 'none';
            } else {
              heroWrapper.style.visibility = 'visible';
              heroWrapper.style.pointerEvents = 'auto';
            }
          }
        }
      });

      // 1. 3D WebGL Canvas Parallax: drifts down at slower speed and recedes into deep space
      if (heroCanvas) {
        const animProps = {
          yPercent: isMobile ? 20 : 32,
          scale: isMobile ? 0.95 : 0.90,
          opacity: 0.35,
          ease: 'none',
        };
        // Only apply blur filter on desktop (never on mobile GPU to preserve 60 FPS)
        if (!isMobile) {
          animProps.filter = 'blur(6px)';
        }
        tl.to(heroCanvas, animProps, 0);
      }

      // 2. Projected 2D Comet Labels: floats upwards into space with negative parallax
      if (heroLabels) {
        tl.to(heroLabels, {
          yPercent: -40,
          opacity: 0,
          ease: 'none',
        }, 0);
      }

      // 3. Cosmic Atmosphere Vignette Darkens
      if (heroOverlay) {
        tl.to(heroOverlay, {
          opacity: 0.95,
          ease: 'none',
        }, 0);
      }

      // 4. Hero Scroll Cue Fades & Drifts Away
      if (heroCue) {
        tl.to(heroCue, {
          y: -30,
          opacity: 0,
          ease: 'none',
        }, 0);
      }

      heroParallaxST = tl.scrollTrigger;
    }

    return () => {
      if (heroParallaxST) heroParallaxST.kill();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full bg-[#02040C] text-[#000000] font-sans antialiased selection:bg-[#000000] selection:text-[#FFFFFF]">
      
      {/* 1. 3D Celestial Hero (Hyper-optimized 60 FPS mobile WebGL + desktop engine) */}
      <div 
        id="hero-parallax-wrapper" 
        className="sticky top-0 left-0 w-full h-screen z-10 overflow-hidden"
      >
        <CelestialHero 
          trackHeightClass="h-screen" 
          sticky={false} 
          disableScrollZoom={true} 
          renderOverlay={false} 
        />
        
        {/* Parallax Cosmic Scroll Cue */}
        <div 
          id="hero-scroll-cue"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none select-none transition-opacity duration-300"
        >
          <span className="font-sans text-[8.5px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#A0A5B5] font-semibold bg-[#000000]/75 backdrop-blur-md px-2.5 py-1 sm:px-4 sm:py-1.5 border border-white/10 rounded-none shadow-lg">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1.5px] h-4 sm:h-6 bg-gradient-to-b from-white/70 via-white/20 to-transparent animate-pulse" />
        </div>
      </div>

      {/* 2. Main Content Curtain: relative z-20 with heavy top shadow — rolls over the sticky hero like a physical architectural slab */}
      <main 
        id="main-content" 
        className="relative bg-white z-20 shadow-[0_-35px_80px_rgba(0,0,0,0.85)]"
      >
        {/* 2. The Problem */}
        <Home2Problem data={HOME2_CONTENT.problem} />

        {/* 2.5 8+ Services Unified & Direct Support (Interactive Pinned Visual Reveal) */}
        <Home2UnifiedShowcase data={HOME2_CONTENT.problem.statBlock} />

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

        {/* 9. Sample Work (Concept Projects Carousel with Space Visuals) */}
        <Home2SampleWork data={HOME2_CONTENT.work} />

        {/* 11. FAQ Accordion */}
        <Home2Faq data={HOME2_CONTENT.faq} />

        {/* 12. Final CTA with Mini Form & Giant Cropped Wordmark */}
        <Home2FinalCta data={HOME2_CONTENT.cta} />
      </main>

      {/* 13. Comprehensive Footer with Real 3D Comet & 5 Practice Pillars */}
      <Footer />

    </div>
  );
}
