import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../data/servicesData';
import { ECOMMERCE_SERVICES_DATA } from '../data/ecommerceServicesData';
import { DIGITAL_MARKETING_SERVICES_DATA } from '../data/digitalMarketingServicesData';
import { PACKAGES_BY_PILLAR, USE_CASES_BY_PILLAR } from '../data/packagesData';
import { getServiceFaqs } from '../data/serviceFaqsData';
import SingleCometCanvas from '../components/Hero3D/SingleCometCanvas';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import StrategicBlueprintCanvas from '../components/ServiceDetail/StrategicBlueprintCanvas';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

// Slug alias resolver
const SLUG_ALIASES = {
  // E-Commerce aliases
  'amazon-operations': 'amazon-india-management',
  'flipkart-operations': 'flipkart-management',
  'shopify-management': 'shopify-store-management',
  'woocommerce-management': 'woocommerce-store-management',
  'ecommerce-management': 'amazon-india-management',
  // Digital Marketing aliases & doc variations
  'search-engine-optimization': 'seo',
  'seo-services': 'seo',
  'meta-ads-management': 'meta-ads',
  'google-ads-management': 'google-ads',
  'youtube-ads-management': 'youtube-ads',
  'local-seo-digital-marketing': 'local-seo',
  'local-seo-services': 'local-seo',
  'lead-generation-conversion': 'lead-generation',
  'influencer-marketing': 'influencer-affiliate-partnerships',
  'conversion-rate-optimization': 'cro',
  'social-media': 'social-media-management',
  'email-marketing-services': 'email-marketing',
  'sms-marketing-services': 'sms-campaigns',
  'whatsapp-marketing-services': 'whatsapp-marketing',
  'email-whatsapp': 'email-marketing',
  'digital-marketing': 'meta-ads'
};

const ALL_RICH_SERVICES = {
  ...ECOMMERCE_SERVICES_DATA,
  ...DIGITAL_MARKETING_SERVICES_DATA
};

const DEFAULT_PROCESS = [
  {
    step: '01',
    title: 'Audit & Diagnostic Review',
    desc: 'Deep inspection of current operations, baseline unit economics, competitive landscape, and channel bottlenecks.'
  },
  {
    step: '02',
    title: 'Strategic Architecture',
    desc: 'Bespoke tactical roadmap defining channel positioning, creative pipelines, margin economics, and milestone SLAs.'
  },
  {
    step: '03',
    title: 'Precision Implementation',
    desc: 'Systematic execution across platform listings, advertising funnels, asset delivery, and operational workflows.'
  },
  {
    step: '04',
    title: 'Compounding Optimization',
    desc: 'Algorithmic performance monitoring, telemetry tracking, conversion rate elevation, and executive reporting.'
  }
];

export default function ServiceDetailPage({ slugOverride }) {
  const { slug: routeSlug } = useParams();
  const rawSlug = slugOverride || routeSlug;
  const slug = SLUG_ALIASES[rawSlug] || rawSlug;

  // Check if this is one of our rich services (Pillar 1 E-Commerce or Pillar 2 Digital Marketing)
  const richService = ALL_RICH_SERVICES[slug];
  const hasRichData = !!richService;

  // Resolve active service data (Rich data or generic fallback)
  const service = richService || SERVICES_DATA.find(s => s.id === slug) || SERVICES_DATA[0];
  const executionPhases = (service.process && service.process.length > 0) ? service.process : DEFAULT_PROCESS;

  const [openFaqs, setOpenFaqs] = useState([0]); // First FAQ open by default
  const [activePersona, setActivePersona] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('NOVA');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Platform enquiry form fields state
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: 'Manufacturer',
    platformStatus: '',
    productCategory: '',
    skuCount: '21–100 products',
    preferredPackage: 'NOVA',
    servicesRequired: [],
    adBudget: '',
    requirements: ''
  });

  const containerRef = useRef(null);
  const whyVideoRef = useRef(null);

  // Dynamic SEO Page Title & Meta Description
  useEffect(() => {
    if (service.seo?.title) {
      document.title = service.seo.title;
    } else {
      document.title = `${service.title} | E-COMET OUTVERSE`;
    }

    if (service.seo?.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = service.seo.description;
    }
  }, [service]);

  // Scroll to top on slug change & reset form state
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaqs([0]);
    setActivePersona(0);
    setFormSubmitted(false);
    if (service.enquiryForm?.platformOptions?.length > 0) {
      setFormData(prev => ({
        ...prev,
        platformStatus: service.enquiryForm.platformOptions[0],
        preferredPackage: 'NOVA',
        servicesRequired: (service.enquiryForm.serviceOptions || []).slice(0, 3)
      }));
    }
    ScrollTrigger.refresh();
  }, [slug, service]);

  // Handle why video slowmo playback
  useEffect(() => {
    if (whyVideoRef.current) {
      whyVideoRef.current.playbackRate = 0.65;
    }
  }, [slug]);

  // Bespoke scroll swipe-in and stagger animations
  useEffect(() => {
    let mm;
    const ctx = gsap.context(() => {
      // 1. Architecture Main Heading float tied to scroll
      gsap.fromTo(
        '.architecture-heading-float',
        { x: '40vw', opacity: 0.2 },
        {
          x: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.sec-capabilities',
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
            invalidateOnRefresh: true,
          }
        }
      );

      // 2. Capabilities Cards Matrix
      gsap.utils.toArray('.capability-matrix-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 3. Who Benefits Cards Stagger
      gsap.fromTo(
        '.card-benefit',
        { x: 40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-benefits',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Why Section Corner Cards
      gsap.fromTo(
        '.card-why-left',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        '.card-why-right',
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Roadmap Staircase Cards: Sequential 1-by-1 entrance tied 1:1 to scroll progress
      mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray('.architecture-stair-card');
        if (!cards.length) return;

        // Dedicated scroll track (~520px per card) so 1 scroll gesture = 1 card
        const scrollDistance = cards.length * 520 + 350;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sec-roadmap',
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 0.25, // tight & responsive: stops immediately when scroll stops (no runaway lag)
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });

        // Each card enters strictly sequentially, one by one, with ease: 'none' (linear)
        // so movement is strictly proportional to scroll progress (partial scroll = partial card rise)
        cards.forEach((card, idx) => {
          tl.fromTo(
            card,
            { y: 160, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 1.0, 
              ease: 'none' 
            },
            idx * 1.15 // strictly sequential: card idx+1 only starts after card idx finishes
          );
        });

        // Generous settle pause so all cards stay visible before unpinning
        tl.to({}, { duration: 0.5 });
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray('.architecture-stair-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 55%',
                scrub: 0.25,
                invalidateOnRefresh: true,
              }
            }
          );
        });
      });

      // 6. Pricing Tier Cards Stagger
      gsap.fromTo(
        '.card-pricing',
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-pricing',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 7. FAQs Stagger
      gsap.fromTo(
        '.card-faq',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-faq',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => {
      if (mm) mm.revert();
      ctx.revert();
    };
  }, [slug]);

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleSelectPackageFromTier = (tierName) => {
    setSelectedPackage(tierName);
    setFormData(prev => ({ ...prev, preferredPackage: tierName }));
    const formEl = document.getElementById('enquiry');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleServiceRequired = (srv) => {
    setFormData(prev => {
      const exists = prev.servicesRequired.includes(srv);
      if (exists) {
        return { ...prev, servicesRequired: prev.servicesRequired.filter(s => s !== srv) };
      } else {
        return { ...prev, servicesRequired: [...prev.servicesRequired, srv] };
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  // Resolve FAQs
  const allFaqs = hasRichData ? service.faqs : getServiceFaqs(service);
  const halfFaq = Math.ceil(allFaqs.length / 2);
  const leftFaqs = allFaqs.slice(0, halfFaq);
  const rightFaqs = allFaqs.slice(halfFaq);

  // Sibling services in the same division
  const siblingServices = hasRichData
    ? Object.values(ALL_RICH_SERVICES).filter(s => s.division === service.division && s.id !== service.id).slice(0, 4)
    : SERVICES_DATA.filter(s => s.pillarId === service.pillarId && s.id !== service.id).slice(0, 5);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white select-none">
      
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (Deep Black Space, Platform Accent, Monolithic 3D)    */}
      {/* ===================================================================== */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 bg-[#000000] text-white overflow-hidden min-h-[720px] lg:min-h-[840px] xl:min-h-[880px] flex items-center">
        
        {/* Full-bleed Real-Time 3D Galaxy Canvas */}
        <CosmicGalaxyCanvas accentColorHex={service.colorHex} />

        {/* Ambient Dark Radial Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50 z-[1]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.3) 0%, #000000 100%)'
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Breadcrumb & Live Operational Telemetry Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Orbit</Link>
              <span>/</span>
              <span className="text-slate-500 uppercase tracking-wider">{service.category}</span>
              <span>/</span>
              <span className="text-slate-500 uppercase tracking-wider">
                {service.division?.replace(/^Division\s+\d+:\s*/i, '') || "Practice Track"}
              </span>
              <span>/</span>
              <span className="text-white font-semibold">{service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: service.colorHex || '#38BDF8' }} 
              />
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
                {(service.division?.replace(/^Division\s+\d+:\s*/i, '') || "CORE SERVICE").toUpperCase()} · LIVE ORBIT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal leading-[1.04] tracking-tight text-white">
                {hasRichData && service.hero?.headline ? service.hero.headline : service.title}
              </h1>

              {/* Dynamic Accent Line matching the Telemetry Color Dot */}
              <div className="flex items-center gap-2 pt-1 pb-1" aria-hidden="true">
                <span 
                  className="h-1 sm:h-1.5 rounded-full w-24 sm:w-36 transition-all duration-500"
                  style={{ 
                    backgroundColor: service.colorHex || '#38BDF8',
                    boxShadow: `0 0 16px ${service.colorHex || '#38BDF8'}80`
                  }}
                />
                <span 
                  className="h-1 sm:h-1.5 rounded-full w-4 sm:w-6 transition-all duration-500 opacity-80"
                  style={{ backgroundColor: service.colorHex || '#38BDF8' }}
                />
                <span 
                  className="h-1 sm:h-1.5 rounded-full w-1.5 sm:w-2 transition-all duration-500 opacity-40"
                  style={{ backgroundColor: service.colorHex || '#38BDF8' }}
                />
              </div>

              <p className="text-xl sm:text-2xl font-sans font-normal text-slate-200">
                {hasRichData && service.hero?.subheadline ? service.hero.subheadline : service.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                {hasRichData && service.hero?.description ? service.hero.description : service.overview}
              </p>

              {/* 3 Executive Spec Chips */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 max-w-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Operational Model
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    Business-First Strategy
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Engagement Tiers
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    Orbit · Nova · Cosmic
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Governance
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    Practice Lead Direct
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a 
                  href="#enquiry"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-space-950 font-sans text-xs font-semibold transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Consultation</span>
                  <span>→</span>
                </a>

                <a 
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi E-COMET OUTVERSE, I would like to discuss ${service.title} for my business.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Talk on WhatsApp</span>
                </a>

                <a 
                  href="#packages" 
                  className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-sans text-xs font-semibold transition-colors cursor-pointer"
                >
                  Explore Packages ↓
                </a>
              </div>

            </div>

            {/* Right Celestial Arena: 3D Asteroid Canvas */}
            <div className="lg:col-span-5 flex items-center justify-center relative w-full">
              <SingleCometCanvas colorHex={service.colorHex} title={service.title} />
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. ABOUT PLATFORM & STRATEGIC APPROACH                                */}
      {/* ===================================================================== */}
      {hasRichData && service.about && (service.about.paragraphs?.length > 0 || service.about.title) && (
        <section className="relative py-20 sm:py-28 bg-white hairline-b">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Heading & Executive Callout */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                  Strategic Foundation · About This Service
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-space-950 font-normal tracking-tight leading-[1.18] mb-6">
                  {service.about.title || `Manage Your ${service.title} with a Clear Strategy.`}
                </h2>
                
                <div className="p-6 rounded-[24px] bg-[#FAFAFA] border border-stone-200/90 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed space-y-3">
                  <div className="flex items-center gap-2 text-space-950 font-semibold font-mono text-[11px] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.colorHex || '#2563EB' }} />
                    Business-First Agency Philosophy
                  </div>
                  <p>
                    Selling on modern marketplaces requires structured coordination across catalogue data, accurate inventory signals, visual indexing, disciplined advertising, and active account health maintenance.
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Narrative Paragraphs */}
              <div className="lg:col-span-7 space-y-5 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
                {(service.about.paragraphs || []).map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 3. CORE CAPABILITIES (Complete Platform Services from Document)       */}
      {/* ===================================================================== */}
      <section className="sec-capabilities relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          {/* Main Display Heading tied 1:1 to scroll progress */}
          <div className="mb-12 sm:mb-16 overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              Comprehensive Platform Capabilities · 0{service.capabilities?.length || 4} Core Services
            </span>
            <h2 className="architecture-heading-float font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-space-950 tracking-tight leading-[1.15] will-change-transform">
              Engineered with zero operational bloat.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mt-3 max-w-2xl">
              Complete, end-to-end management services for {service.title}, structured around your unit economics, catalogue depth, and commercial priorities.
            </p>
          </div>

          {/* Grid of All Capability Services from the Word Document */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {(hasRichData ? service.capabilities : (service.keyFeatures || [])).map((feat, idx) => {
              const codeDisplay = feat.code || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`);
              const deliverables = feat.deliverables || [];

              return (
                <div 
                  key={idx}
                  className="capability-matrix-card group relative rounded-[28px] sm:rounded-[36px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-10 lg:p-12 min-h-[340px] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Header Row: Code & Category Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                        SERVICE · {codeDisplay}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-slate-600">
                        VERIFIED SCOPE
                      </span>
                    </div>

                    {/* Card Heading */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-[1.2] mb-3 group-hover:text-black transition-colors duration-300">
                      {feat.title}
                    </h3>

                    {/* Overview description */}
                    {feat.desc && (
                      <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                        {feat.desc}
                      </p>
                    )}

                    {/* Substantive Scope & Key Deliverables */}
                    {deliverables.length > 0 && (
                      <div className="pt-5 border-t border-stone-200/60">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                          Specific Scope &amp; Deliverables
                        </span>
                        <ul className="space-y-2">
                          {deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                              <span className="text-blue-600 font-semibold select-none flex-shrink-0">―</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Note Callout */}
                    {Boolean((Array.isArray(feat.benefit) ? feat.benefit.length > 0 : feat.benefit)) && (() => {
                      const benefitList = Array.isArray(feat.benefit)
                        ? feat.benefit.filter(Boolean)
                        : (feat.benefit ? [feat.benefit] : []);
                      if (benefitList.length === 0) return null;

                      return (
                        <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-slate-700 font-sans leading-relaxed">
                          <strong className="text-space-950 font-mono text-[10px] uppercase tracking-wider block mb-1">
                            {benefitList.length > 1 ? 'Notes:' : 'Note:'}
                          </strong>
                          {benefitList.length === 1 ? (
                            <p>{benefitList[0]}</p>
                          ) : (
                            <div className="space-y-1.5 mt-1.5">
                              {benefitList.map((item, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold select-none flex-shrink-0 mt-0.5">―</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Clean hairline accent line */}
                  <div className="relative z-10 mt-8">
                    <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. WHO CAN BENEFIT (Audience Personas & Interactive 3D Astrolabe)     */}
      {/* ===================================================================== */}
      <section className="sec-benefits relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column: Title & Interactive Persona Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="max-w-2xl mb-8 sm:mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                  Strategic Fit · Audience Personas
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
                  Who can benefit from this service?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Tailored execution roadmaps designed around your current infrastructure, catalogue depth, and commercial targets.
                </p>
              </div>

              {/* Persona Cards Stack */}
              <div className="space-y-3.5 sm:space-y-4">
                {(service.whoBenefits || []).map((item, idx) => {
                  const isActive = activePersona === idx;
                  
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActivePersona(idx)}
                      onMouseEnter={() => setActivePersona(idx)}
                      className={`card-benefit rounded-[26px] p-6 sm:p-8 border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                        isActive 
                          ? 'bg-white border-space-950 shadow-xl -translate-y-0.5' 
                          : 'bg-[#FAFAFA] border-stone-200/80 hover:bg-white hover:border-stone-400'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                          style={{ backgroundColor: service.colorHex || '#2563EB' }}
                        />
                      )}

                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                          PERSONA · 0{idx + 1}
                        </span>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors ${
                          isActive 
                            ? 'bg-space-950 text-white border-space-950 font-semibold' 
                            : 'bg-stone-100 text-slate-500 border-stone-200'
                        }`}>
                          TARGET FIT
                        </span>
                      </div>

                      <h3 className={`font-serif text-2xl sm:text-[1.65rem] font-normal tracking-tight mb-2.5 transition-colors ${
                        isActive ? 'text-space-950' : 'text-space-900'
                      }`}>
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-3">
                        {item.desc}
                      </p>

                      <div className="mt-3 pt-3 border-t border-stone-100/70 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">
                          {isActive ? '● Live Simulation Active' : '○ Select to inspect blueprint'}
                        </span>
                        <span className={`font-semibold transition-transform ${
                          isActive ? 'text-space-950 translate-x-1' : 'text-slate-400'
                        }`}>
                          View Alignment →
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Sticky Executive 3D Astrolabe Blueprint Stage */}
            <div className="lg:col-span-5 sticky top-28 self-start">
              
              <div className="rounded-[32px] bg-[#0A0E1A] border border-slate-800 shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[580px]">
                
                {/* Atmospheric grid & glow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: service.colorHex || '#2563EB' }}
                />

                {/* Top Meta Terminal Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300">
                      ORBIT BLUEPRINT · 0{activePersona + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 uppercase">
                    3D ASTROLABE LIVE
                  </span>
                </div>

                {/* Middle: 3D Interactive Astrolabe Blueprint Canvas */}
                <div className="relative z-10 w-full h-[260px] sm:h-[300px] my-2">
                  <StrategicBlueprintCanvas 
                    activePersona={activePersona} 
                    colorHex={service.colorHex || '#38BDF8'} 
                  />
                  
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 pointer-events-none">
                    PERSONA: {service.whoBenefits?.[activePersona]?.role?.slice(0, 24) || "ACTIVE PROFILE"}
                  </div>

                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 pointer-events-none">
                    COORDINATE: 360° ACTIVE
                  </div>
                </div>

                {/* Bottom: Dynamic Spec Overview */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80 space-y-3.5">
                  
                  <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block mb-1">TARGET FIT</span>
                      <span className="text-white font-semibold">
                        {service.whoBenefits?.[activePersona]?.role || "Business Fit"}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block mb-1">GOVERNANCE</span>
                      <span className="text-white font-semibold">
                        Direct Partner Lead
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-1">
                      OPERATIONAL FOCUS
                    </span>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      {service.whoBenefits?.[activePersona]?.desc || "Complete operational synchronization tailored to your platform status."}
                    </p>
                  </div>

                  {/* Primary Deployment Action */}
                  <a
                    href="#enquiry"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-space-950 font-sans font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-lg shadow-white/5"
                  >
                    <span>Deploy This Engagement Playbook</span>
                    <span>→</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. THE E-COMET ADVANTAGE (Why Choose Us & 9:16 Center Video Loop)     */}
      {/* ===================================================================== */}
      <section className="sec-why-us relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              The E-Comet Advantage · Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              Why choose E-COMET OUTVERSE?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl">
              An execution philosophy centered on sustainable compounding equity, transparent governance, and elimination of operational bloat.
            </p>
          </div>

          {/* 3-Column 4-Corner Layout: 2 Left Cards + Center Short Video + 2 Right Cards */}
          {service.whyChoose && service.whyChoose.length >= 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: Top-Left Card & Bottom-Left Card */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8">
                {service.whyChoose.slice(0, 2).map((item, wIdx) => (
                  <div 
                    key={wIdx}
                    className="card-why-left group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[240px]"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        PILLAR · 0{wIdx + 1}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-[1.65rem] font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Column: Center Video playing in short ratio (9:16) on continuous slowmo loop */}
              <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
                <div className="why-center-video-frame w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-stone-200/90 relative bg-black group select-none">
                  <video
                    ref={whyVideoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/197387-904825088.mp4" type="video/mp4" />
                    <source src="/assets/why-video.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/80 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 uppercase tracking-widest">
                      Orbital Core
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 uppercase tracking-wider">
                      Continuous
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Top-Right Card & Bottom-Right Card */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8">
                {service.whyChoose.slice(2, 4).map((item, wIdx) => (
                  <div 
                    key={wIdx}
                    className="card-why-right group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[240px]"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        PILLAR · 0{wIdx + 3}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-[1.65rem] font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Additional Why Choose Points (5, 6, 7) */}
          {service.whyChoose && service.whyChoose.length > 4 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whyChoose.slice(4).map((item, extraIdx) => (
                <div 
                  key={extraIdx}
                  className="rounded-[24px] bg-[#FAFAFA] border border-stone-200/90 p-6 hover:bg-white hover:border-space-950 transition-all"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    PILLAR · 0{extraIdx + 5}
                  </span>
                  <h4 className="font-serif text-xl font-normal text-space-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. OUR MANAGEMENT PROCESS (Ascending Staircase Stage)                 */}
      {/* ===================================================================== */}
      <section className="sec-roadmap relative pt-24 lg:pt-28 pb-16 lg:pb-20 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2.5">
              Execution Roadmap · {executionPhases.length} Progressive Phases
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-3">
              A structured roadmap to compounding results.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Every phase builds sequentially on the previous milestone, advancing your marketplace presence from foundational audit to compounding scale.
            </p>
          </div>

          {/* Ascending Staircase Cards Grid */}
          <div className={`grid gap-4 items-stretch w-full ${
            executionPhases.length <= 4 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
          }`}>
            {executionPhases.map((prc, idx) => {
              const totalSteps = executionPhases.length;
              const progressPct = Math.round(((idx + 1) / totalSteps) * 100);

              return (
                <div 
                  key={idx}
                  className="architecture-stair-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[360px]"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                      PHASE · {prc.step || `0${idx + 1}`}
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-space-950 tracking-tight leading-[1.2] mb-3 group-hover:text-black transition-colors duration-300">
                      {prc.title}
                    </h3>

                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                      {prc.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-200/60">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>STEP 0{idx + 1} / 0{totalSteps}</span>
                      <span>{progressPct}%</span>
                    </div>
                    <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-space-950 rounded-full group-hover:bg-[#252B36] transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. INTEGRATED CROSS-PILLAR SERVICES (If present in Document)          */}
      {/* ===================================================================== */}
      {service.integratedServices && service.integratedServices.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#FAFAFA] hairline-b">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                Cross-Pillar Synergy · Integrated Digital Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
                Complementary services for market leadership.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Connect your {service.title} operations with specialized photography, graphic design, commercial video production, and high-conversion web experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.integratedServices.map((intSrv, intIdx) => (
                <div 
                  key={intIdx}
                  className="rounded-[28px] bg-white border border-stone-200/90 p-8 hover:border-space-950 hover:shadow-lg transition-all"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-2">
                    CROSS-PRACTICE SERVICE · 0{intIdx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                    {intSrv.service}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {intSrv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 8. MANAGEMENT PACKAGES & SCOPE (Orbit · Nova · Cosmic)                */}
      {/* Strictly compliant with policy: Hidden public prices, custom quotes   */}
      {/* ===================================================================== */}
      <section id="packages" className="sec-pricing relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              Engagement Tiers · Orbit · Nova · Cosmic
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight mb-4">
              Structured scope designed for every stage.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              {service.packages?.intro || "Choose a service level based on your catalogue size, update frequency, and ongoing operational requirements. Final scope and deliverables are confirmed after initial consultation."}
            </p>
          </div>

          {/* 3 Tier Cards: Orbit · Nova · Cosmic */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {(service.packages?.tiers || []).map((tier, idx) => {
              const isPopular = tier.name === 'NOVA';

              return (
                <div 
                  key={idx}
                  className={`card-pricing rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                    isPopular 
                      ? 'bg-space-950 text-white shadow-2xl ring-2 ring-space-950 lg:-translate-y-2' 
                      : 'bg-[#fafafa] text-space-950 border border-slate-200/90 hover:shadow-md'
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00B4D8] text-space-950 text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                      Recommended Tier
                    </div>
                  )}

                  <div>
                    {/* Top Tier Info */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/30 mb-6">
                      <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isPopular ? 'text-cyan-300' : 'text-slate-500'}`}>
                        TIER 0{idx + 1} // {tier.name}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: service.colorHex || '#38BDF8' }} />
                    </div>

                    <h3 className={`font-serif text-3xl font-normal mb-2 ${isPopular ? 'text-white' : 'text-space-950'}`}>
                      {tier.name}
                    </h3>

                    {tier.tagline && (
                      <p className={`text-sm font-sans font-medium mb-3 ${isPopular ? 'text-cyan-200' : 'text-slate-800'}`}>
                        {tier.tagline}
                      </p>
                    )}

                    {tier.positioning && (
                      <p className={`text-xs font-sans mb-6 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                        {tier.positioning}
                      </p>
                    )}

                    {/* Price Block: Custom Scope & Quote */}
                    <div className="py-5 my-4 border-y border-slate-200/20">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl sm:text-3xl font-serif font-normal ${isPopular ? 'text-white' : 'text-space-950'}`}>
                          Custom Scope &amp; Quote
                        </span>
                      </div>
                      <span className={`text-xs font-mono block mt-1.5 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        Based on catalogue size, condition &amp; advertising scope
                      </span>
                    </div>

                    {/* Suitable For Section */}
                    {tier.suitableFor?.length > 0 && (
                      <div className="space-y-2 mb-6">
                        <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                          Suitable For:
                        </span>
                        {tier.suitableFor.map((suit, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs font-sans leading-relaxed">
                            <span className={`font-bold flex-shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-blue-600'}`}>
                              •
                            </span>
                            <span className={isPopular ? 'text-slate-300' : 'text-slate-600'}>
                              {suit}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Deliverables Checklist */}
                    {tier.deliverables?.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-slate-200/20">
                        <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold mb-3 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                          Potential Deliverables:
                        </span>
                        {tier.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs font-sans leading-relaxed">
                            <span className={`font-bold flex-shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-emerald-600'}`}>
                              ✓
                            </span>
                            <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                              {del}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tier Note(s) Section */}
                    {Boolean((Array.isArray(tier.notes) ? tier.notes.length > 0 : tier.notes) || (Array.isArray(tier.note) ? tier.note.length > 0 : tier.note)) && (() => {
                      const notesList = Array.isArray(tier.notes) 
                        ? tier.notes 
                        : tier.notes 
                          ? [tier.notes] 
                          : Array.isArray(tier.note) 
                            ? tier.note 
                            : tier.note 
                              ? [tier.note] 
                              : [];
                      if (notesList.length === 0) return null;

                      return (
                        <div className="space-y-2 pt-4 border-t border-slate-200/20">
                          <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold mb-2 ${isPopular ? 'text-amber-300' : 'text-slate-500'}`}>
                            {notesList.length > 1 ? 'Notes:' : 'Note:'}
                          </span>
                          {notesList.map((noteItem, nIdx) => (
                            <div key={nIdx} className="flex items-start gap-2.5 text-xs font-sans leading-relaxed">
                              <span className={`font-bold flex-shrink-0 mt-0.5 ${isPopular ? 'text-amber-400' : 'text-blue-600'}`}>
                                ―
                              </span>
                              <span className={isPopular ? 'text-slate-300' : 'text-slate-600'}>
                                {noteItem}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Tier Action Button: Pre-selects package and scrolls to form */}
                  <div className="pt-8 mt-8 border-t border-slate-200/20">
                    <button
                      type="button"
                      onClick={() => handleSelectPackageFromTier(tier.name)}
                      className={`w-full py-3.5 rounded-full text-xs font-sans font-semibold text-center block transition-all shadow-sm cursor-pointer ${
                        isPopular
                          ? 'bg-white text-space-950 hover:bg-slate-100 hover:scale-102'
                          : 'bg-space-950 text-white hover:bg-slate-800 hover:scale-102'
                      }`}
                    >
                      {tier.cta || `Request ${tier.name} Proposal`} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing & Commercial Scope Policy Disclaimer */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
              i
            </span>
            <div>
              <strong className="text-space-950 font-mono text-[11px] uppercase tracking-wider block mb-1">
                Pricing &amp; Commercial Scope Policy:
              </strong>
              <p>
                {service.packages?.policy || "Public pricing is not displayed on our website. The final package scope, deliverables and service fees are determined after understanding the business, catalogue size, account condition and advertising requirements. E-COMET OUTVERSE does not guarantee sales, rankings, profitability or a specific advertising return."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (Platform-Specific from Document)       */}
      {/* ===================================================================== */}
      <section className="sec-faq relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              Governance &amp; Operations · Platform FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Clear answers regarding execution governance, operational turnaround, catalogue maintenance, commercial terms, and compliance for {service.title}.
            </p>
          </div>

          {/* 2-Column Grid of FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
            
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5">
              {leftFaqs.map((faq, lIdx) => {
                const globalIdx = lIdx;
                const isOpen = openFaqs.includes(globalIdx);

                return (
                  <div 
                    key={globalIdx}
                    className={`card-faq group relative rounded-[24px] sm:rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 transition-all duration-300 p-6 sm:p-7 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-space-950 shadow-[0_15px_35px_rgba(0,0,0,0.05)]' 
                        : 'hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
                    }`}
                  >
                    <button 
                      type="button" 
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    >
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-space-950 tracking-tight leading-snug group-hover:text-black transition-colors pr-2">
                        {faq.q}
                      </h3>
                      
                      <span className={`w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-sm font-mono text-space-950 flex-shrink-0 transition-all duration-300 shadow-2xs ${
                        isOpen ? 'rotate-45 bg-space-950 text-white border-space-950' : 'group-hover:border-space-950'
                      }`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 mt-4 border-t border-stone-200/70 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5">
              {rightFaqs.map((faq, rIdx) => {
                const globalIdx = rIdx + halfFaq;
                const isOpen = openFaqs.includes(globalIdx);

                return (
                  <div 
                    key={globalIdx}
                    className={`card-faq group relative rounded-[24px] sm:rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 transition-all duration-300 p-6 sm:p-7 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-space-950 shadow-[0_15px_35px_rgba(0,0,0,0.05)]' 
                        : 'hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
                    }`}
                  >
                    <button 
                      type="button" 
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    >
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-space-950 tracking-tight leading-snug group-hover:text-black transition-colors pr-2">
                        {faq.q}
                      </h3>
                      
                      <span className={`w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-sm font-mono text-space-950 flex-shrink-0 transition-all duration-300 shadow-2xs ${
                        isOpen ? 'rotate-45 bg-space-950 text-white border-space-950' : 'group-hover:border-space-950'
                      }`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 mt-4 border-t border-stone-200/70 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. SIBLING SERVICES IN DIVISION                                      */}
      {/* ===================================================================== */}
      {siblingServices.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Explore More in {service.division?.replace(/^Division\s+\d+:\s*/i, '') || service.category}
              </span>
              <p className="font-serif text-xl font-normal text-space-950">
                Connected marketplace services:
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {siblingServices.map((rel) => (
                <Link 
                  key={rel.id}
                  to={`/services/${rel.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-sans font-medium text-space-950 hover:bg-[#080B10] hover:text-white transition-all shadow-2xs"
                >
                  <span>{rel.title}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 11. FINAL CALL TO ACTION & CUSTOM TAILORED ENQUIRY FORM               */}
      {/* ===================================================================== */}
      <section id="enquiry" className="relative py-24 sm:py-32 bg-[#080B10] text-white overflow-hidden">
        
        {/* Background glow & subtle stars */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: service.colorHex || '#2563EB' }}
        />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 bg-[#38BDF8] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Final Call to Action from Document */}
            <div className="lg:col-span-5 space-y-6">
              
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                Next Orbit · Tailored Consultation
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.12] tracking-tight text-white">
                {service.finalCta?.headline || `Ready to Take Your ${service.title} to the Next Orbit?`}
              </h2>

              <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                {service.finalCta?.description || `Tell us about your products, current marketplace presence and commercial goals. Our team will help define an appropriate service scope and customized quotation.`}
              </p>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#38BDF8] font-bold text-base select-none mt-0.5">✓</span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
                      Zero Fluff &amp; Fixed Scope Guardrails
                    </span>
                    <p className="text-xs text-slate-400 font-sans">
                      All deliverables, reporting milestones, and SLAs confirmed in writing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#38BDF8] font-bold text-base select-none mt-0.5">✓</span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
                      Rapid Turnaround &amp; Senior Practice Oversight
                    </span>
                    <p className="text-xs text-slate-400 font-sans">
                      Direct access to experienced practice leads without agency middleman bloat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi E-COMET OUTVERSE, I'd like to discuss ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Prefer fast chat? Talk directly on WhatsApp →</span>
                </a>
              </div>

            </div>

            {/* Right Column: Platform-Tailored Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-[#0E131F] border border-slate-800 p-8 sm:p-12 shadow-2xl relative">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-2xl mx-auto">
                      ✓
                    </div>
                    <h3 className="font-serif text-3xl text-white">
                      Enquiry Received
                    </h3>
                    <p className="text-slate-300 font-sans text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting E-COMET OUTVERSE. We have received your enquiry details for <strong className="text-white">{service.title}</strong> and will review your requirements to discuss the next steps.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1.5">
                        {service.enquiryForm?.title || `Discuss Your ${service.title} Requirements`}
                      </h3>
                      <p className="text-slate-400 font-sans text-xs sm:text-sm">
                        {service.enquiryForm?.subtitle || "Complete the form below so our team can evaluate requirements and discuss a customized scope."}
                      </p>
                    </div>

                    {/* Platform Status Question (from Document) */}
                    {service.enquiryForm?.platformQuestion && service.enquiryForm?.platformOptions?.length > 0 && (
                      <div className="space-y-2.5 pt-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block font-semibold">
                          {service.enquiryForm.platformQuestion}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {service.enquiryForm.platformOptions.map((opt, oIdx) => {
                            const isSelected = formData.platformStatus === opt;
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, platformStatus: opt }))}
                                className={`p-3 rounded-xl text-xs font-sans text-left transition-all border cursor-pointer ${
                                  isSelected 
                                    ? 'bg-white text-space-950 font-semibold border-white shadow-sm' 
                                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Contact Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Business / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                          placeholder="Company or Brand Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Business Type & SKU Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Business Type
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                        >
                          {(service.enquiryForm?.businessTypes || [
                            'Manufacturer', 'Wholesaler / Distributor', 'Retailer', 
                            'D2C Brand', 'Startup', 'Established Brand', 'Other'
                          ]).map((bType, bIdx) => (
                            <option key={bIdx} value={bType}>{bType}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          {service.enquiryForm?.scaleQuestion || "Approximate Catalogue Size"}
                        </label>
                        <select
                          value={formData.skuCount}
                          onChange={(e) => setFormData(prev => ({ ...prev, skuCount: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                        >
                          {(service.enquiryForm?.scaleOptions || [
                            '1–20 products / SKUs',
                            '21–100 products / SKUs',
                            '101–500 products / SKUs',
                            '500+ products / SKUs'
                          ]).map((scaleOpt, scIdx) => (
                            <option key={scIdx} value={scaleOpt}>{scaleOpt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Tier & Product Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          Preferred Package Tier
                        </label>
                        <select
                          value={formData.preferredPackage}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredPackage: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                        >
                          <option value="ORBIT">Orbit — {service.packages?.tiers?.[0]?.tagline || 'Foundational Setup & Support'}</option>
                          <option value="NOVA">Nova — {service.packages?.tiers?.[1]?.tagline || 'Growth & Optimisation Support'}</option>
                          <option value="COSMIC">Cosmic — {service.packages?.tiers?.[2]?.tagline || 'Extended Management Operations'}</option>
                          <option value="Need Guidance">Need Guidance / Custom Scope</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          {service.pillarId === 'marketing' ? 'Industry / Sector' : 'Product Category / Sector'}
                        </label>
                        <input
                          type="text"
                          value={formData.productCategory}
                          onChange={(e) => setFormData(prev => ({ ...prev, productCategory: e.target.value }))}
                          placeholder={service.pillarId === 'marketing' ? 'e.g. D2C Fashion, B2B Tech, Healthcare, Retail' : 'e.g. Fashion, Electronics, Beauty, Home'}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Platform-Specific Services Required Checkboxes (from Document) */}
                    {service.enquiryForm?.serviceOptions?.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block font-semibold">
                          Services Required for {service.title}:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.enquiryForm.serviceOptions.map((srv, sIdx) => {
                            const isChecked = formData.servicesRequired.includes(srv);
                            return (
                              <label
                                key={sIdx}
                                onClick={() => handleToggleServiceRequired(srv)}
                                className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-sans border transition-all cursor-pointer ${
                                  isChecked 
                                    ? 'bg-white/10 text-white border-white/40' 
                                    : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:border-slate-700'
                                }`}
                              >
                                <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border transition-colors ${
                                  isChecked ? 'bg-white text-space-950 font-bold border-white' : 'border-slate-700'
                                }`}>
                                  {isChecked && '✓'}
                                </span>
                                <span>{srv}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Additional Notes */}
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Additional Business Requirements (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.requirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                        placeholder="Tell us about your specific goals, existing pain points, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-white hover:bg-slate-100 text-space-950 font-sans font-semibold text-sm transition-all hover:scale-[1.01] shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Consultation Request...</span>
                      ) : (
                        <>
                          <span>Request My {service.title} Consultation</span>
                          <span>→</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-500 font-sans text-center">
                      We respect your privacy. No spam. Sensitive account credentials should only be shared via secure authorization.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Site Footer */}
      <Footer />

    </div>
  );
}
