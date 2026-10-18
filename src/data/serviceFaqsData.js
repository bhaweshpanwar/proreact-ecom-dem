/**
 * Service FAQs Generator
 * Provides at least 10 authoritative, high-value FAQ answers for each service page.
 * Combines service-specific questions, pillar-specific operational depth,
 * and universal commercial governance answers.
 */

const PILLAR_FAQS = {
  marketplaces: [
    {
      q: "How do you safeguard account health and manage platform policy compliance?",
      a: "We conduct regular account health audits, monitor order defect rates (ODR), review late shipment telemetry, and implement preventative listing checks to ensure your seller accounts stay strictly compliant with marketplace operating guidelines."
    },
    {
      q: "Can you handle catalog migrations and complex variation mapping for large SKU counts?",
      a: "Yes. We systematically architect parent-child variation trees, normalize product attributes, and manage bulk flat-file uploads across Amazon, Flipkart, and other platforms without downtime or catalogue suppression."
    },
    {
      q: "How are daily Sponsored Ads (PPC) and campaign bids managed?",
      a: "Our specialists audit search term reports, harvest high-converting keywords, negate low-intent terms, calibrate bids to protect product margins, and continuously reallocate ad spend toward top-performing ASINs."
    },
    {
      q: "Do you assist with brand registry, trademark guidelines, and A+ content approval?",
      a: "Yes. We guide you through Brand Registry submission, assemble high-indexing A+ Content with visual storytelling, and coordinate approval processes directly with marketplace support."
    },
    {
      q: "Can we expand beyond Amazon & Flipkart into Quick Commerce like Blinkit or Zepto?",
      a: "Yes. We structure cross-platform expansion roadmaps, assist with vendor partner onboarding, and align catalogue hygiene for emerging quick commerce and vertical platforms."
    }
  ],
  marketing: [
    {
      q: "How do you track conversions and guarantee attribution accuracy across ad platforms?",
      a: "We configure server-side tracking (Meta Conversions API), Google Analytics 4, unified UTM tagging frameworks, and custom conversion events to ensure clean attribution without data loss from browser restrictions."
    },
    {
      q: "Who creates the ad creatives, copywriting, and visual hooks for campaigns?",
      a: "Our dedicated visual and copy team develops custom static graphics, video hooks, carousels, and conversion-focused ad copy aligned strictly with your approved brand guidelines."
    },
    {
      q: "What is your methodology for audience testing and scaling budget profitably?",
      a: "We run controlled creative and audience testing sprints, identifying winning combinations before scaling budgets incrementally while monitoring marginal ROAS and blended customer acquisition cost (CAC)."
    },
    {
      q: "How do you prevent wasted ad spend on low-intent or irrelevant searches?",
      a: "We implement rigorous negative keyword lists, tight placement exclusions, frequency capping, and daily budget pacing controls to protect your capital from unproductive traffic."
    },
    {
      q: "Do you provide landing page conversion optimization alongside paid advertising?",
      a: "Yes. Effective paid traffic requires strong post-click experience. We evaluate and optimize landing page speed, offer clarity, value hierarchy, and form completion rates."
    }
  ],
  websites: [
    {
      q: "Who retains ownership of the code, domain, CMS credentials, and assets after launch?",
      a: "You retain 100% intellectual property ownership of your domain, codebase, CMS admin credentials, and media assets upon full project completion and handover."
    },
    {
      q: "How do you achieve sub-second page speeds and pass Core Web Vitals?",
      a: "We employ lightweight component architectures, modern image compression, clean CSS delivery, and rigorous performance audits to achieve sub-second load times."
    },
    {
      q: "What post-launch warranty and technical bug-fix support is included?",
      a: "Every bespoke web project includes a dedicated 14 to 30 day post-launch warranty period covering bug fixes, responsive adjustments, and launch verification."
    },
    {
      q: "Can our internal team easily update content, products, and banners without coding?",
      a: "Yes. We build intuitive content administration workflows using modular CMS blocks, Shopify customizers, or tailored WordPress fields, accompanied by clear video walkthroughs."
    },
    {
      q: "Do you manage payment gateway, CRM, and third-party logistics integrations?",
      a: "Yes. We configure and test secure checkout gateways (Razorpay, Stripe, Cashfree), inventory syncing, shipping APIs, and CRM lead capture pipelines."
    }
  ],
  video: [
    {
      q: "What is the standard turnaround time for video edits and short-form cutdowns?",
      a: "Standard production sprints deliver first-cut long-form edits within 3 to 5 business days, and vertical short-form cutdowns within 48 to 72 hours of raw footage receipt."
    },
    {
      q: "How are video review cycles and revision requests coordinated?",
      a: "We manage revisions via timestamped feedback rounds, ensuring specific cuts, pacing tweaks, audio balancing, and graphic overlays are addressed systematically."
    },
    {
      q: "Who creates custom high-CTR thumbnails and video SEO metadata?",
      a: "Our designers engineer high-contrast, typographically balanced thumbnails, while our strategists write optimized video titles, keyword-rich descriptions, and chapter timestamps."
    },
    {
      q: "Do you supply licensed background music, sound effects, and stock footage?",
      a: "Yes. All background scores, audio sound effects, and supplemental B-roll assets are licensed through commercial-grade libraries with full commercial clearance."
    },
    {
      q: "Can you repurpose our existing podcast or webinar archive into Shorts and Reels?",
      a: "Yes. We review your long-form archive, extract high-impact conversational hooks, format for 9:16 vertical viewing, and add animated dynamic subtitles."
    }
  ],
  creative: [
    {
      q: "In what formats and resolutions are final design deliverables supplied?",
      a: "We deliver print-ready high-resolution PDFs with bleed, vector SVG/EPS assets for scale, and optimized WebP/PNG formats for digital and social deployment."
    },
    {
      q: "Do we receive full commercial usage rights and master vector source files?",
      a: "Yes. You receive full commercial rights and editable master design files (Figma, Illustrator, Photoshop) upon final milestone sign-off."
    },
    {
      q: "How many design revisions are included per creative sprint?",
      a: "Each design deliverable includes 2 structured rounds of revisions to refine typography, color grading, layouts, and visual hierarchy to your exact specifications."
    },
    {
      q: "Can you adapt packaging and label artwork to commercial printer specifications?",
      a: "Yes. We calibrate dielines, CMYK color profiles, overprint settings, and barcode zones to match your packaging manufacturer packaging guidelines."
    },
    {
      q: "How do you ensure cohesive brand identity across digital and physical collateral?",
      a: "We establish comprehensive brand design tokens covering typography scale, color codes, logo clear space rules, and photography direction."
    }
  ],
  integrated: [
    {
      q: "How do the different channel teams coordinate to avoid cross-channel friction?",
      a: "Your project is orchestrated by a dedicated Senior Practice Lead who coordinates marketplaces, paid ads, creative, and web developers under one synchronized weekly sprint."
    },
    {
      q: "Do we have a single dedicated point of contact or multiple disparate teams?",
      a: "You are assigned a single dedicated Practice Lead who serves as your strategic partner, ensuring clear accountability and zero miscommunication."
    },
    {
      q: "How are sprint priorities determined when managing multiple channels concurrently?",
      a: "We align monthly roadmaps with your immediate commercial priorities—whether that is launching new product lines, scaling festive sales, or fixing catalogue hygiene."
    },
    {
      q: "Can we reallocate monthly service deliverables as our business needs evolve?",
      a: "Yes. With our integrated model, you can flexibly adjust resource allocation between creative production, advertising focus, and marketplace tasks with 14 days notice."
    },
    {
      q: "What executive dashboard or reporting cadence is provided for management?",
      a: "We provide consolidated monthly executive briefings, bi-weekly performance updates, and continuous live telemetry tracking blended CAC, revenue, and margins."
    }
  ]
};

const UNIVERSAL_GOVERNANCE_FAQS = [
  {
    q: "How quickly does project onboarding commence once the scope is approved?",
    a: "Onboarding commences within 24 to 48 business hours of agreement confirmation. We establish your private communication channel, gather initial credentials, and execute baseline audits."
  },
  {
    q: "Are advertising budgets and third-party software fees included in service fees?",
    a: "Advertising spend is paid directly to advertising platforms (Google, Meta, Amazon) via your own billing accounts. Service fees cover strategic execution, campaign build, creative production, and management."
  },
  {
    q: "Does E-Comet guarantee specific revenue numbers, rankings, or ROAS figures?",
    a: "No. Commercial outcomes depend on product market fit, inventory availability, consumer demand, and platform dynamics. We provide verified operational discipline and transparent governance without false promises."
  },
  {
    q: "What is the contract term and what notice is required if we wish to pause?",
    a: "We operate on transparent milestone deliverables or rolling monthly retainers with a standard 30-day written notice period. There are no restrictive lock-in clauses."
  },
  {
    q: "How are credentials, API keys, and sensitive business data safeguarded?",
    a: "We utilize least-privilege partner access, enterprise credential management, and strict Non-Disclosure Agreements (NDAs). We never request master administrative passwords where delegate access is supported."
  },
  {
    q: "What happens if our operational scope changes midway through an active sprint?",
    a: "We evaluate requested scope additions, provide a transparent time and cost estimate, and obtain written confirmation before proceeding, preventing surprise billings or unbudgeted overages."
  }
];

/**
 * Returns at least 10 verified, deduplicated FAQ entries tailored to the given service.
 * First uses custom service FAQs, then pillar-specific questions, then universal governance answers.
 */
export function getServiceFaqs(service) {
  if (!service) return UNIVERSAL_GOVERNANCE_FAQS.slice(0, 10);

  const customFaqs = service.faqs || [];
  const pillarKey = service.pillarId || 'marketplaces';
  const pillarFaqs = PILLAR_FAQS[pillarKey] || PILLAR_FAQS.marketplaces;

  const result = [...customFaqs];

  // Helper to check for duplicate questions
  const hasQuestion = (qText) => {
    const norm = qText.toLowerCase().replace(/[^a-z0-9]/g, '');
    return result.some(item => item.q.toLowerCase().replace(/[^a-z0-9]/g, '') === norm);
  };

  // Add pillar FAQs
  for (const pf of pillarFaqs) {
    if (result.length >= 10) break;
    if (!hasQuestion(pf.q)) {
      result.push(pf);
    }
  }

  // Add universal governance FAQs
  for (const uf of UNIVERSAL_GOVERNANCE_FAQS) {
    if (result.length >= 10) break;
    if (!hasQuestion(uf.q)) {
      result.push(uf);
    }
  }

  return result.slice(0, 10);
}
