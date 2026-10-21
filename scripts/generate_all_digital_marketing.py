import json, os

services = {}

# Helper to create standard package structure
def make_packages(service_name, intro, orbit_tagline, orbit_pos, orbit_delivs, nova_tagline, nova_pos, nova_delivs, cosmic_tagline, cosmic_pos, cosmic_delivs, policy=None):
    return {
        "intro": intro,
        "tiers": [
            {
                "name": "ORBIT",
                "tagline": orbit_tagline,
                "positioning": orbit_pos,
                "suitableFor": [
                    "Early-stage brands and local businesses",
                    "Foundational setup and steady maintenance",
                    "Companies validating this specific channel"
                ],
                "deliverables": orbit_delivs,
                "cta": "Explore Orbit Package"
            },
            {
                "name": "NOVA",
                "tagline": nova_tagline,
                "positioning": nova_pos,
                "suitableFor": [
                    "Growing brands seeking active scaling",
                    "Businesses with established product-market fit",
                    "Teams requiring proactive weekly optimization"
                ],
                "deliverables": nova_delivs,
                "cta": "Explore Nova Package"
            },
            {
                "name": "COSMIC",
                "tagline": cosmic_tagline,
                "positioning": cosmic_pos,
                "suitableFor": [
                    "Established market leaders and enterprise brands",
                    "High monthly budgets and multi-funnel operations",
                    "Brands requiring coordinated creative and data sprints"
                ],
                "deliverables": cosmic_delivs,
                "cta": "Explore Cosmic Package"
            }
        ],
        "policy": policy or f"Public pricing is not displayed on our website. Service fees and deliverables are confirmed after an initial consultation based on your ad spend, channel complexity, and scope requirements. E-COMET OUTVERSE does not guarantee sales, ranking or specific ROAS."
    }

# =========================================================================
# 1. Social Media Management
# =========================================================================
services["social-media-management"] = {
    "id": "social-media-management",
    "slug": "social-media-management",
    "title": "Social Media Management",
    "division": "Division 1: Social Media & Paid Advertising",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#E1306C",
    "hero": {
        "headline": "Social Media Management for Growing Brands",
        "subheadline": "Build consistent brand visibility, engage real followers, and keep your social channels active.",
        "description": "Managing social media takes consistent planning, high-quality visuals, clear messaging, and daily attention. E-COMET OUTVERSE handles your brand's social presence across Instagram, LinkedIn, Facebook, and X (Twitter) with structured monthly content calendars, custom graphic design, video reels, and audience interaction.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Build a Consistent Social Media Presence That People Trust",
        "paragraphs": [
            "Most businesses struggle with social media because of inconsistent posting, generic graphics, and a lack of clear strategy. Posting randomly without a plan wastes time and fails to build an audience that actually cares about your products or services.",
            "Our social media management service treats your channels as serious brand assets. We plan monthly content pillars around what your customers want to learn, see, and share—combining clean visual design, informative carousel posts, short-form video reels, and persuasive captions.",
            "Whether you want to build brand awareness, launch new products, or keep your community updated, we provide an organized workflow from monthly concept approval to publishing and engagement tracking."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "Monthly Content Strategy & Planning",
            "desc": "Define content pillars, publishing schedules, and brand themes for the month ahead.",
            "deliverables": [
                "Monthly content calendar with advance approval workflows",
                "Brand voice guidelines and communication tone mapping",
                "Product promotion and seasonal event integration",
                "Content pillar breakdown (educational, promotional, behind-the-scenes, social proof)",
                "Competitor observation and content gap analysis"
            ],
            "benefit": "You always know what is getting published 2 weeks in advance with zero last-minute rush."
        },
        {
            "code": "02",
            "title": "Custom Visual Design & Brand Creatives",
            "desc": "High-quality static graphics, carousel slides, and story templates matching your brand guidelines.",
            "deliverables": [
                "High-resolution feed posts and branded carousel decks",
                "Interactive Instagram and Facebook Story graphics",
                "Custom typography, color palette, and asset alignment",
                "Infographics, quote cards, and product feature highlights",
                "Highlight covers and channel banner graphics"
            ],
            "benefit": "Your social feeds look clean, polished, and immediately trustworthy to first-time visitors."
        },
        {
            "code": "03",
            "title": "Short-Form Video & Reels Production",
            "desc": "Scripting, editing, and formatting engaging Instagram Reels and YouTube Shorts.",
            "deliverables": [
                "Hook-driven short video editing with captions and music integration",
                "Product demonstration and unboxing format editing",
                "Educational tips and founder-style video adaptation",
                "Soundtrack selection and viral audio trend monitoring",
                "Cover thumbnail design for clean profile grids"
            ],
            "benefit": "Capitalize on algorithmic video reach to attract new organic viewers without ad spend."
        },
        {
            "code": "04",
            "title": "Copywriting & Caption Development",
            "desc": "Persuasive captions, strategic call-to-actions, and relevant hashtag research.",
            "deliverables": [
                "Attention-grabbing first-line hooks for feed captions",
                "Engaging storytelling that highlights customer benefits",
                "Clear call-to-action (CTA) guiding viewers to links or DMs",
                "Niche and category-specific hashtag research sets",
                "Multi-language caption adaptation where required"
            ],
            "benefit": "Captions that actually get read and encourage comments, shares, and website visits."
        },
        {
            "code": "05",
            "title": "Publishing, Scheduling & Channel Maintenance",
            "desc": "Accurate scheduling at peak engagement hours with formatting checks.",
            "deliverables": [
                "Automated scheduling across Instagram, Facebook, LinkedIn, and X",
                "Optimal posting hour testing and adjustment",
                "Link-in-bio setup, tracking links, and landing page routing",
                "Feed aesthetic harmony checks and visual sequence reviews",
                "Profile bio and business information maintenance"
            ],
            "benefit": "Consistent publishing 5 to 7 days a week without your team having to lift a finger."
        },
        {
            "code": "06",
            "title": "Community Engagement & Direct Response",
            "desc": "Monitoring comments, answering basic customer inquiries, and managing DMs.",
            "deliverables": [
                "Routine monitoring of post comments and direct messages",
                "Approved response templates for frequent customer questions",
                "Escalation of urgent sales leads or support tickets to your team",
                "Spam comment filtering and community moderation",
                "Proactive interaction with relevant industry accounts and creators"
            ],
            "benefit": "Turn casual post comments and DM inquiries into warm customer relationships."
        },
        {
            "code": "07",
            "title": "Monthly Performance Analytics & Review",
            "desc": "Data-backed reports showing follower growth, reach, top posts, and audience demographics.",
            "deliverables": [
                "Monthly visual reports covering reach, engagement, and profile visits",
                "Top-performing content analysis by format and topic",
                "Audience demographic and location breakdown",
                "Actionable recommendations for next month's calendar",
                "Monthly review meeting with your dedicated social media manager"
            ],
            "benefit": "Clear visibility into what content actually drives business awareness and website clicks."
        }
    ],
    "whoBenefits": [
        {
            "role": "D2C Brands & Consumer Products",
            "desc": "Showcase product lines, customer reviews, unboxings, and lifestyle use cases to build consumer loyalty."
        },
        {
            "role": "B2B Companies & Corporate Services",
            "desc": "Build authority on LinkedIn and Twitter through case studies, industry insights, and leadership posts."
        },
        {
            "role": "Local Businesses & Retail Stores",
            "desc": "Keep neighborhood customers updated on new arrivals, store promotions, and local community events."
        },
        {
            "role": "E-Commerce Sellers",
            "desc": "Drive off-marketplace traffic from Instagram and Facebook directly to Amazon listings or Shopify stores."
        },
        {
            "role": "Founders & Industry Consultants",
            "desc": "Build an active personal and company profile without spending hours every day drafting social posts."
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Brand Discovery & Social Audit",
            "desc": "Review your existing accounts, audience demographics, competitors, and core brand guidelines."
        },
        {
            "step": "02",
            "title": "Strategy & Content Pillars",
            "desc": "Establish 4-5 core content pillars and design visual mood boards for upcoming posts."
        },
        {
            "step": "03",
            "title": "Creative Asset Production",
            "desc": "Our designers and video editors create graphics, carousels, reels, and captions for the entire month."
        },
        {
            "step": "04",
            "title": "Client Review & Approval",
            "desc": "You review the monthly calendar in one clean dashboard and approve or suggest revisions."
        },
        {
            "step": "05",
            "title": "Scheduled Publishing & Monitoring",
            "desc": "We schedule posts at optimal times, monitor live comments, and filter spam."
        },
        {
            "step": "06",
            "title": "Monthly Performance Analysis",
            "desc": "Review engagement metrics, identify top-performing angles, and optimize the next month's roadmap."
        }
    ],
    "packages": make_packages(
        "Social Media Management",
        "Choose a social media management package based on your target channels, posting frequency, and video requirements. Final deliverables are confirmed after understanding your goals.",
        "Essential Brand Consistency",
        "Ideal for businesses that need clean, steady posting to keep their social channels active and credible.",
        [
            "12 branded feed posts per month (graphics + carousels)",
            "8 story updates per month",
            "Caption copywriting & strategic hashtag sets",
            "Channel scheduling across 2 platforms",
            "Routine comment monitoring & monthly summary report"
        ],
        "Active Growth & Video Reels",
        "Our recommended package for brands looking to expand organic reach with short-form video reels and higher posting volume.",
        [
            "20 feed posts per month (mix of carousels, single graphics, and reels)",
            "8 custom edited video reels / shorts",
            "16 story updates per month with interactive stickers",
            "Multi-platform scheduling across 3 channels",
            "Active community engagement & basic DM triage",
            "Bi-weekly performance tracking & monthly strategy call"
        ],
        "Complete Omnichannel Social Suite",
        "Comprehensive social media production and management for established brands demanding high output and omnichannel dominance.",
        [
            "30 feed posts per month across 4 networks (Instagram, LinkedIn, Facebook, X)",
            "15 custom edited short-form video reels",
            "Daily story sequence publishing",
            "Dedicated social media manager & graphic designer",
            "Fast-response community management & DM escalation",
            "Weekly analytics dashboard & monthly creative roadmap planning"
        ]
    ),
    "whyChoose": [
        {
            "title": "Real In-House Designers & Editors",
            "desc": "Your visuals and reels are crafted by professional graphic designers and video editors, not automated generic templates."
        },
        {
            "title": "Organized 2-Week Advance Approvals",
            "desc": "You never have to guess what will go live tomorrow. Content is drafted, reviewed, and approved well in advance."
        },
        {
            "title": "Business & Commercial Focus",
            "desc": "We don't post memes that have nothing to do with your business. Every post highlights your value, products, and customer proof."
        },
        {
            "title": "Multi-Channel Harmony",
            "desc": "Your messaging on Instagram, LinkedIn, and Facebook works in synchronized harmony with your active ads and website."
        },
        {
            "title": "No Fake Growth Tactics",
            "desc": "We strictly avoid follower pods, fake bots, and automated spam that could flag or shadowban your valuable accounts."
        }
    ],
    "faqs": [
        {
            "q": "Which social media platforms do you manage?",
            "a": "We manage Instagram, Facebook, LinkedIn, X (Twitter), and YouTube Shorts. We recommend focusing on the 2 or 3 platforms where your ideal buyers spend the most time."
        },
        {
            "q": "Do I have to provide the photos and videos?",
            "a": "If you have existing product photos, office videos, or raw footage, we can use and edit them. If you don't have enough assets, our design team creates custom graphics, infographics, curated visuals, and motion graphics."
        },
        {
            "q": "Can I review and approve posts before they are published?",
            "a": "Yes, absolutely. We prepare content calendars 1 to 2 weeks in advance and share an interactive preview dashboard where you can request revisions or approve posts with one click."
        },
        {
            "q": "Do you guarantee follower growth numbers?",
            "a": "No reputable agency can guarantee a specific follower count because algorithmic reach and follower decisions depend on content resonance, market demand, and audience interest. Our focus is on consistent quality, clean visuals, and real engagement."
        },
        {
            "q": "How often will you post on our accounts?",
            "a": "Posting frequency depends on your chosen package—typically ranging from 3 to 4 times a week on foundational plans up to daily publishing (6-7 days a week) on comprehensive plans."
        },
        {
            "q": "Will you respond to customer comments and direct messages?",
            "a": "Yes. Depending on your package, we monitor comments and answer standard questions using approved FAQ response templates, while routing serious sales leads and support issues directly to your team."
        },
        {
            "q": "Can we combine organic social media management with Meta Ads?",
            "a": "Yes. In fact, combining organic social management with Meta Ads is the most effective approach: top-performing organic reels and carousels make the best paid ads, and ad traffic checks your profile to see if your brand is active and credible."
        },
        {
            "q": "How do we get started?",
            "a": "Request a consultation using the form below. We will review your current profiles, discuss your target audience and posting requirements, and share a tailored scope and quotation."
        }
    ],
    "finalCta": {
        "headline": "Ready to Make Your Social Media Look Professional & Active?",
        "description": "Tell us about your brand, current social channels, and goals. Our team will review your presence and prepare a tailored monthly management plan.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Get a Custom Scope"
    },
    "enquiryForm": {
        "title": "Discuss Your Social Media Management",
        "subtitle": "Share your details so our team can evaluate your accounts and recommend a suitable posting plan.",
        "platformQuestion": "What is the current status of your social media profiles?",
        "platformOptions": [
            "Active profiles needing higher quality content",
            "Existing accounts that are currently inactive",
            "Starting new brand accounts from scratch"
        ],
        "serviceOptions": [
            "Monthly Content Planning & Calendar",
            "Custom Graphic Design & Carousels",
            "Short-Form Video & Reels Editing",
            "Caption Copywriting & Hashtags",
            "Daily Scheduling & Channel Maintenance",
            "Comment & Community Management",
            "Paid Ad Boost Coordination",
            "Monthly Analytics & Performance Reviews"
        ],
        "businessTypes": [
            "D2C Brand", "Retailer / Shop", "Manufacturer", 
            "B2B Company", "Service Provider", "Startup", "Other"
        ],
        "submitButton": "Request My Social Media Consultation"
    },
    "seo": {
        "title": "Social Media Management Services | E-COMET OUTVERSE",
        "description": "Professional social media management services by E-COMET OUTVERSE. Content calendar planning, custom graphics, video reels, caption copywriting, and community management.",
        "slug": "/services/social-media-management",
        "primaryKeyword": "Social Media Management Services",
        "secondaryKeywords": [
            "Social Media Agency", "Instagram Management for Brands", 
            "Social Media Marketing", "Content Creation Agency", "Reels Video Editing"
        ]
    }
}

# =========================================================================
# 2. Meta Ads (Facebook & Instagram)
# =========================================================================
services["meta-ads"] = {
    "id": "meta-ads",
    "slug": "meta-ads",
    "title": "Meta Ads (Facebook & Instagram)",
    "division": "Division 1: Social Media & Paid Advertising",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#0081FB",
    "hero": {
        "headline": "Meta Ads Management for Predictable Customer Acquisition",
        "subheadline": "Reach high-intent buyers on Facebook and Instagram with tested ad creatives and disciplined budget management.",
        "description": "Running profitable Meta ads requires more than boosting a post. E-COMET OUTVERSE builds structured Facebook and Instagram ad funnels using Conversion API tracking, creative testing sprints, broad and custom audience targeting, and daily return on ad spend (ROAS) monitoring to scale your revenue without wasting budget.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Stop Wasting Ad Spend. Run Meta Ads Driven by Unit Economics.",
        "paragraphs": [
            "Many businesses burn significant advertising budgets on Meta because they rely on outdated audience hacks, boost random posts, or run ads without proper conversion tracking. In modern advertising, algorithmic success comes from high-converting creative testing, clear offer positioning, and accurate server-side data.",
            "At E-COMET OUTVERSE, we approach Meta Ads with strict commercial discipline. We calculate your target Cost Per Acquisition (CPA), gross margins, and break-even ROAS before spending a single rupee of ad budget.",
            "From top-of-funnel customer acquisition to dynamic product catalog retargeting, we handle ad creative design, copywriting, technical Conversions API setup, and daily bid optimizations."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "Conversions API (CAPI) & Pixel Architecture",
            "desc": "Bulletproof server-side and browser tracking to bypass iOS privacy restrictions and capture all purchases.",
            "deliverables": [
                "Server-side Meta Conversions API (CAPI) configuration",
                "Browser Pixel event tracking (ViewContent, AddToCart, InitiateCheckout, Purchase)",
                "Domain verification and Aggregated Event Measurement setup",
                "Offline conversion tracking and CRM data synchronization",
                "Event match quality optimization (> 8.0 score target)"
            ],
            "benefit": "Meta's algorithm gets 100% clean data, allowing it to find your actual buyers at lower ad costs."
        },
        {
            "code": "02",
            "title": "High-Converting Creative Testing Sprints",
            "desc": "Ongoing production of static ads, UGC-style videos, and feature carousels.",
            "deliverables": [
                "Hook, body, and CTA variation testing matrix",
                "UGC (User-Generated Content) style video ad editing",
                "Product feature highlight graphics and press callout cards",
                "Dynamic Product Ads (DPA) catalog design templates",
                "Weekly creative fatigue audits and replacement cycles"
            ],
            "benefit": "Prevents ad fatigue and steadily uncovers new winning creatives that scale profitably."
        },
        {
            "code": "03",
            "title": "Audience Strategy & Funnel Architecture",
            "desc": "Segmenting cold prospecting, warm engagement, and hot bottom-funnel retargeting.",
            "deliverables": [
                "Broad targeting and Advantage+ audience setups",
                "High-value Customer Lifetime Value (LTV) lookalike audiences",
                "Website visitor, cart abandoner, and video viewer custom audiences",
                "Customer exclusion lists to prevent wasting money on recent purchasers",
                "Cross-channel audience synchronization"
            ],
            "benefit": "Every prospect receives the right message based on how familiar they are with your brand."
        },
        {
            "code": "04",
            "title": "Direct-Response Ad Copywriting",
            "desc": "Headlines, primary text, and descriptions crafted to overcome customer skepticism.",
            "deliverables": [
                "Pain-point and benefit-driven primary copy angles",
                "Customer testimonial and review integration copy",
                "Urgency, guarantee, and offer clarity testing",
                "Short-form vs long-form body text split testing",
                "Call-to-action button optimization"
            ],
            "benefit": "Clear copy that highlights what makes your offer different and compelling."
        },
        {
            "code": "05",
            "title": "Daily Bid, Budget & Scaling Management",
            "desc": "Active campaign monitoring to prevent runaway costs and scale winning ad sets.",
            "deliverables": [
                "Daily budget reallocation toward top-performing ad sets",
                "Automated rules to pause underperforming creatives",
                "Cost cap and bid cap testing for margin defense",
                "Vertical scaling (budget increases) and horizontal scaling (new angle tests)",
                "Weekend and holiday budget adjustments"
            ],
            "benefit": "Your ad spend is closely guarded every day to protect your target profit margins."
        },
        {
            "code": "06",
            "title": "Landing Page & Offer Alignment",
            "desc": "Ensuring the destination page matches the ad message to maximize conversion rates.",
            "deliverables": [
                "Message-match review between ad hooks and landing page hero sections",
                "Mobile page speed and checkout friction assessment",
                "Bundle offer, discount structure, and upsell recommendations",
                "Trust badge and social proof placement advice",
                "Custom UTM parameter tracking for Google Analytics 4 verification"
            ],
            "benefit": "Traffic from your ads actually converts into paying customers on your website."
        },
        {
            "code": "07",
            "title": "Transparent Telemetry & ROAS Reporting",
            "desc": "Clear, honest weekly reporting linking ad spend directly to revenue generated.",
            "deliverables": [
                "Blended MER (Marketing Efficiency Ratio) and in-platform ROAS tracking",
                "Cost Per Acquisition (CPA) and Cost Per Lead (CPL) trends",
                "Creative performance breakdown showing winning angles",
                "Weekly Loom video walk-through or live strategy review call",
                "Next-week sprint priorities and budget recommendations"
            ],
            "benefit": "You see exactly where every rupee went and what real revenue it brought into the business."
        }
    ],
    "whoBenefits": [
        {
            "role": "D2C E-Commerce Brands",
            "desc": "Acquire new online shoppers and re-engage cart abandoners with visual Instagram and Facebook ads."
        },
        {
            "role": "Lead Generation Businesses & B2B",
            "desc": "Capture qualified contact inquiries using Meta Instant Forms and high-converting landing pages."
        },
        {
            "role": "Local Service Providers & Clinics",
            "desc": "Drive targeted appointment bookings and walk-ins from potential customers within a defined geographic radius."
        },
        {
            "role": "Coaches, EdTech & Information Brands",
            "desc": "Fill webinars, masterclasses, and digital courses with qualified, interested participants."
        },
        {
            "role": "Real Estate & High-Ticket Businesses",
            "desc": "Collect phone-verified prospective buyer leads filtered by budget and location preferences."
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Unit Economics & Account Audit",
            "desc": "We review historical ad data, calculate break-even ROAS targets, and audit your tracking setup."
        },
        {
            "step": "02",
            "title": "CAPI & Tracking Verification",
            "desc": "Verify server-side Conversions API, domain verification, and event match quality score."
        },
        {
            "step": "03",
            "title": "Creative Production & Offer Setup",
            "desc": "Design initial testing batch of static ads, reels, copy angles, and landing page offers."
        },
        {
            "step": "04",
            "title": "Testing Phase & Data Collection",
            "desc": "Launch controlled testing campaigns to validate hooks, creatives, and core audience segments."
        },
        {
            "step": "05",
            "title": "Scaling Winners & Trimming Losers",
            "desc": "Reallocate budget into proven winning creative angles and pause underperforming ad sets."
        },
        {
            "step": "06",
            "title": "Continuous Creative Sprints & Reporting",
            "desc": "Roll out fresh creative batches weekly to counter ad fatigue and provide detailed P&L reports."
        }
    ],
    "packages": make_packages(
        "Meta Ads",
        "Select an engagement tier based on your monthly ad spend and creative production requirements. Public ad spend is paid directly to Meta.",
        "Essential Campaign Setup & Maintenance",
        "Best suited for businesses spending under ₹1,00,000 / $1,500 monthly on Meta Ads requiring structured management.",
        [
            "Full Pixel & Conversions API (CAPI) audit and setup",
            "Up to 2 active campaign funnels (Prospecting + Retargeting)",
            "6 custom ad creatives designed per month (graphics + copy)",
            "Audience research & exclusion setup",
            "Bi-weekly budget adjustments & monthly report"
        ],
        "Growth Sprints & Active Scaling",
        "Our recommended tier for growing brands spending ₹1,00,000 to ₹5,00,000 ($1,500 - $6,000) monthly on Meta Ads.",
        [
            "Full full-funnel architecture (Advantage+, Broad, Custom, Retargeting)",
            "12 custom ad creatives per month (mix of graphics, carousels, and edited UGC reels)",
            "Continuous weekly creative testing sprints",
            "Daily bid and budget optimization",
            "Landing page conversion recommendations",
            "Weekly performance dashboard & bi-weekly strategy review"
        ],
        "High-Volume Scale & Enterprise Suite",
        "Comprehensive management for established brands spending ₹5,00,000+ ($6,000+) monthly demanding rapid scaling and creative volume.",
        [
            "Multi-account and multi-region campaign governance",
            "20+ custom ad creatives per month (high-volume video edits & static variations)",
            "Cost cap, bid cap, and custom bidding strategies",
            "In-depth Google Analytics 4 and server-side attribution audits",
            "Dedicated senior media buyer & direct communication channel",
            "Weekly live strategy calls & customized P&L margin dashboards"
        ]
    ),
    "whyChoose": [
        {
            "title": "Commercial Margin Protection",
            "desc": "We evaluate your unit economics, COGS, and shipping costs so your campaigns prioritize profit, not vanity ROAS."
        },
        {
            "title": "Creative + Media Buying in One Team",
            "desc": "Our designers, copywriters, and media buyers work side-by-side to test new angles every week."
        },
        {
            "title": "Server-Side Tracking Experts",
            "desc": "We ensure your Conversions API and Event Match Quality score are optimized to survive privacy changes."
        },
        {
            "title": "100% Transparent Ad Accounts",
            "desc": "You retain full ownership of your Meta Ad Account and payment methods. We work with partner access."
        },
        {
            "title": "No Fake Guarantees",
            "desc": "We never promise unreal overnight returns. We build sustainable, compounding advertising systems."
        }
    ],
    "faqs": [
        {
            "q": "Is the advertising spend paid to Meta included in your service fee?",
            "a": "No. The advertising budget is paid directly to Meta via your business credit card or billing profile. Our service fee covers campaign strategy, tracking setup, creative design, copywriting, daily management, and reporting."
        },
        {
            "q": "What is the minimum recommended monthly ad budget?",
            "a": "For e-commerce and local lead generation, we generally recommend starting with at least ₹30,000 to ₹50,000 ($500 - $800) per month to allow the algorithm enough data to test creatives and optimize conversions."
        },
        {
            "q": "How quickly will we see results from Meta Ads?",
            "a": "Initial testing typically begins showing customer response within the first 7 to 14 days. However, building consistent profitability and finding true scaling winners usually takes 3 to 6 weeks of structured testing."
        },
        {
            "q": "Do you make the ad creatives (graphics and videos)?",
            "a": "Yes! Our team designs static image ads, product carousels, motion graphics, and edits user-generated content (UGC) video clips into compelling high-converting reels."
        },
        {
            "q": "Do I own my Facebook and Instagram Ad Account?",
            "a": "Yes, 100%. We always run campaigns inside your own Meta Business Manager. You retain full ownership, data history, and billing control at all times."
        },
        {
            "q": "How do you handle iOS privacy updates and tracking losses?",
            "a": "We install Meta Conversions API (CAPI) on your server alongside the standard browser Pixel, configure Aggregated Event Measurement, and use custom UTM tracking in GA4 to ensure maximum attribution accuracy."
        },
        {
            "q": "Can Meta Ads work for B2B and high-ticket service companies?",
            "a": "Yes. Meta is highly effective for B2B lead generation through Instant Lead Forms, whitepaper downloads, case study videos, and retargeting decision-makers who visited your website."
        },
        {
            "q": "How do we get started?",
            "a": "Fill out the consultation form below. We will review your website, analyze your historical ad data, and schedule a call to share a customized campaign roadmap."
        }
    ],
    "finalCta": {
        "headline": "Ready to Scale Your Business with Profitable Meta Ads?",
        "description": "Tell us about your products, current advertising results, and target goals. We will prepare an honest audit and custom advertising proposal.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Get a Custom Scope"
    },
    "enquiryForm": {
        "title": "Discuss Your Meta Ads Strategy",
        "subtitle": "Share your requirements so our team can evaluate your account and outline a campaign plan.",
        "platformQuestion": "What is your current Meta Ads situation?",
        "platformOptions": [
            "Currently spending on Meta Ads, but wanting better ROAS",
            "Ran ads before with poor results, wanting a fresh start",
            "New to Meta Ads, looking to launch our first campaigns"
        ],
        "serviceOptions": [
            "Conversions API (CAPI) & Pixel Tracking Setup",
            "Full-Funnel Campaign Setup (Prospecting & Retargeting)",
            "Custom Ad Creatives (Graphics & Reels Video Edits)",
            "Direct-Response Ad Copywriting",
            "Daily Bid & Budget Optimization",
            "Landing Page Conversion Recommendations",
            "Audience Research & Custom Audiences",
            "Weekly Performance & Margin Reporting"
        ],
        "businessTypes": [
            "D2C E-Commerce", "B2B / Corporate", "Local Business / Clinic", 
            "Real Estate / High-Ticket", "EdTech / Courses", "Manufacturer", "Other"
        ],
        "submitButton": "Request My Meta Ads Consultation"
    },
    "seo": {
        "title": "Meta Ads Management Services (Facebook & Instagram) | E-COMET OUTVERSE",
        "description": "Professional Meta Ads management services by E-COMET OUTVERSE. Conversions API setup, creative testing sprints, direct-response copywriting, and daily ROAS optimization.",
        "slug": "/services/meta-ads",
        "primaryKeyword": "Meta Ads Management Services",
        "secondaryKeywords": [
            "Facebook Ads Agency", "Instagram Advertising Services", 
            "Meta Advertising Agency", "E-Commerce Meta Ads", "Performance Marketing Agency"
        ]
    }
}

# =========================================================================
# 3. Google Ads (Search, Shopping, Display & PMax)
# =========================================================================
services["google-ads"] = {
    "id": "google-ads",
    "slug": "google-ads",
    "title": "Google Ads (Search & Shopping)",
    "division": "Division 1: Social Media & Paid Advertising",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#4285F4",
    "hero": {
        "headline": "Google Ads Management for High-Intent Buyers",
        "subheadline": "Capture customers at the exact moment they search for your products and services on Google.",
        "description": "When customers search on Google, they already know what they want. E-COMET OUTVERSE manages high-converting Google Search, Performance Max (PMax), Shopping, and Remarketing campaigns with strict keyword negative matching, conversion tracking, and quality score optimization to maximize your return.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Be There When Your Highest-Intent Customers Are Searching",
        "paragraphs": [
            "Unlike social media ads that interrupt people while browsing, Google Ads captures active demand. When someone types a search query like 'best industrial packaging supplier' or 'buy organic green tea online', they have high intent to purchase.",
            "However, managing Google Ads requires precision. Without exact-match keyword grouping, aggressive negative keyword lists, and clean conversion tracking, Google will quickly spend your budget on irrelevant, broad search queries that bring zero sales.",
            "E-COMET OUTVERSE structures your Google Ads account with meticulous keyword discipline. We build tightly themed ad groups, write compelling ad copy with extensions, and optimize bids toward real revenue and qualified leads."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "High-Intent Keyword Research & Structuring",
            "desc": "Identify the exact keywords your paying customers use, while filtering out junk searches.",
            "deliverables": [
                "Commercial and transactional intent keyword mapping",
                "Single-Theme Ad Group (STAG) and tightly themed campaign structure",
                "Comprehensive negative keyword lists to prevent wasted ad spend",
                "Competitor brand bidding and brand defense strategy",
                "Long-tail keyword discovery for lower Cost Per Click (CPC)"
            ],
            "benefit": "Your ads only appear in front of people ready to buy, cutting out wasted clicks."
        },
        {
            "code": "02",
            "title": "Google Shopping & Performance Max (PMax)",
            "desc": "Showcase your product images, prices, and reviews directly at the top of Google search.",
            "deliverables": [
                "Google Merchant Center product feed setup and optimization",
                "Product title, description, and attribute enhancement for search indexing",
                "Performance Max (PMax) asset group creation (images, text, video)",
                "Audience signal configuration (custom intent, customer match)",
                "Product margin-based segmentation for custom ROAS targets"
            ],
            "benefit": "Shoppers see your product image, title, and price before clicking, resulting in higher conversion rates."
        },
        {
            "code": "03",
            "title": "Responsive Search Ads & Copywriting",
            "desc": "Compelling headlines and descriptions that improve Click-Through Rate (CTR) and Quality Score.",
            "deliverables": [
                "15 strategic headline variations per ad group with key benefits",
                "4 persuasive description lines addressing common customer concerns",
                "Comprehensive ad extensions (Sitelinks, Callouts, Structured Snippets, Call extensions)",
                "Dynamic keyword insertion (DKI) where appropriate",
                "Continuous A/B ad testing to improve Quality Score"
            ],
            "benefit": "Higher ad relevance gives you top placement at a lower Cost Per Click than competitors."
        },
        {
            "code": "04",
            "title": "Google Tag Manager & Conversion Tracking",
            "desc": "Flawless tracking of purchases, form submissions, phone calls, and WhatsApp clicks.",
            "deliverables": [
                "Google Tag Manager (GTM) container configuration",
                "Google Analytics 4 (GA4) e-commerce purchase and lead event tracking",
                "Google Ads Enhanced Conversions setup for first-party data accuracy",
                "Phone call and WhatsApp click conversion tracking",
                "Offline conversion import integration for CRM systems"
            ],
            "benefit": "Google's smart bidding algorithm learns exactly what leads and sales generate real revenue."
        },
        {
            "code": "05",
            "title": "Bid Strategy & Budget Optimization",
            "desc": "Guiding Google's AI with target CPA and target ROAS rules to protect your profit.",
            "deliverables": [
                "Target CPA (Cost Per Acquisition) and Target ROAS bid strategies",
                "Device, location, and schedule bid adjustments",
                "Search impression share tracking to monitor competitor pressure",
                "Search terms report audits to constantly expand negative keyword lists",
                "Budget reallocation to highest-converting campaigns"
            ],
            "benefit": "Eliminates budget leakage and scales campaigns that generate positive cash flow."
        },
        {
            "code": "06",
            "title": "Display & Remarketing Campaigns",
            "desc": "Re-engage past website visitors with visual banner ads across millions of Google partner websites.",
            "deliverables": [
                "Dynamic remarketing showing the exact products users viewed",
                "Responsive display ad creation with clear branding and offers",
                "Placement exclusions to block low-quality mobile apps and click-bait sites",
                "Frequency capping to prevent annoying past visitors",
                "Audience segment exclusion for recent buyers"
            ],
            "benefit": "Bring back warm visitors who left your website without completing a purchase or inquiry."
        },
        {
            "code": "07",
            "title": "Landing Page Experience & Quality Score Audit",
            "desc": "Ensuring your website pages match search keywords to lower your cost per click.",
            "deliverables": [
                "Landing page message match and headline alignment",
                "Mobile loading speed and Core Web Vitals review",
                "Clear contact forms, phone call triggers, and purchase flows",
                "Quality Score diagnosis across Expected CTR, Ad Relevance, and Landing Page Experience",
                "Actionable recommendations to boost conversion rates"
            ],
            "benefit": "Higher Google Quality Scores directly lower the price you pay for every single click."
        }
    ],
    "whoBenefits": [
        {
            "role": "E-Commerce Stores & DTC Brands",
            "desc": "Showcase products with pricing and star ratings on Google Shopping and Performance Max."
        },
        {
            "role": "B2B Manufacturers & Wholesalers",
            "desc": "Capture corporate buyers searching for bulk orders, distributors, and custom suppliers."
        },
        {
            "role": "High-Ticket Service Businesses",
            "desc": "Lawyers, consultants, clinics, and financial services capturing urgent customer inquiries."
        },
        {
            "role": "Local & Regional Service Providers",
            "desc": "Plumbers, contractors, architects, and repair services receiving direct incoming phone calls."
        },
        {
            "role": "SaaS & Software Companies",
            "desc": "Bid on high-intent software category keywords, competitor alternatives, and free trial searches."
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Keyword Audit & Competitor Research",
            "desc": "Analyze what keywords your competitors are bidding on, search volumes, and estimated CPCs."
        },
        {
            "step": "02",
            "title": "Conversion Tracking & GTM Setup",
            "desc": "Implement Google Tag Manager, Enhanced Conversions, and GA4 tracking before spending ad money."
        },
        {
            "step": "03",
            "title": "Campaign & Ad Group Structuring",
            "desc": "Build tightly themed search ad groups, negative keyword lists, and write responsive search ads."
        },
        {
            "step": "04",
            "title": "Launch & Search Term Scrubbing",
            "desc": "Launch campaigns under close monitoring, checking the search terms report daily to block junk queries."
        },
        {
            "step": "05",
            "title": "Smart Bidding & ROAS Optimization",
            "desc": "Transition to Target CPA or Target ROAS once enough conversion data is gathered."
        },
        {
            "step": "06",
            "title": "Scaling & Strategic Review",
            "desc": "Scale budgets into winning keywords, expand Shopping/PMax campaigns, and review weekly ROI."
        }
    ],
    "packages": make_packages(
        "Google Ads",
        "Choose an engagement plan based on your ad spend and campaign channels (Search, Shopping, PMax). Public ad spend is paid directly to Google.",
        "Essential Google Search Setup",
        "Ideal for local businesses and specialized services spending under ₹1,00,000 / $1,500 monthly on Google Ads.",
        [
            "Full conversion tracking and Google Tag Manager setup",
            "Up to 2 Google Search campaigns with negative keyword lists",
            "Responsive Search Ads with sitelinks and callout extensions",
            "Weekly search terms report audits to eliminate wasted spend",
            "Monthly performance summary & conversion report"
        ],
        "Search & Shopping Growth",
        "Recommended for e-commerce and active lead generation spending ₹1,00,000 - ₹5,00,000 ($1,500 - $6,000) monthly.",
        [
            "Search, Google Shopping, and Performance Max (PMax) campaigns",
            "Google Merchant Center feed optimization and review integration",
            "Enhanced Conversions and GA4 e-commerce tracking",
            "Competitor brand bidding and brand defense setup",
            "Weekly bid and budget optimization",
            "Bi-weekly strategy call & transparent ROI dashboard"
        ],
        "Omnichannel Google Dominance",
        "Comprehensive suite for high-volume advertisers spending ₹5,00,000+ ($6,000+) monthly demanding search dominance.",
        [
            "Full search, Shopping, PMax, YouTube, and Display remarketing suite",
            "Multi-location and international campaign structuring",
            "Custom script automation and margin-based bidding strategies",
            "Landing page conversion rate optimization audits",
            "Dedicated senior Google Ads specialist & direct communication",
            "Weekly live reporting & customized margin telemetry"
        ]
    ),
    "whyChoose": [
        {
            "title": "Aggressive Negative Keyword Scrubbing",
            "desc": "We treat your budget like our own money. We review search terms regularly to block irrelevant clicks."
        },
        {
            "title": "Flawless Enhanced Conversion Tracking",
            "desc": "We set up first-party tracking via Google Tag Manager so the bidding algorithm optimizes for real profit."
        },
        {
            "title": "Quality Score Improvement Focus",
            "desc": "By matching ad copy and landing pages tightly to keywords, we earn higher ad ranks at lower costs."
        },
        {
            "title": "Direct Account Ownership",
            "desc": "All campaigns run inside your own Google Ads account. You retain all historical data and ownership."
        },
        {
            "title": "P&L Aligned Reporting",
            "desc": "We report on Cost Per Lead and Return On Ad Spend that matches the actual money in your bank account."
        }
    ],
    "faqs": [
        {
            "q": "What is the difference between Google Search and Google Shopping Ads?",
            "a": "Google Search ads appear as text listings with headlines and descriptions when users search for keywords. Google Shopping ads display product photos, prices, ratings, and store names directly at the top of the search results, making them ideal for physical e-commerce products."
        },
        {
            "q": "Is the advertising budget paid to Google included in your fee?",
            "a": "No. Your advertising budget is paid directly to Google via your credit card or billing profile. Our agency fee covers campaign planning, keyword research, tracking setup, ad copywriting, bid management, and ongoing optimization."
        },
        {
            "q": "How do you stop my ads from showing for irrelevant searches?",
            "a": "We use exact and phrase match keyword types rather than broad match, and we build extensive negative keyword lists (hundreds of excluded terms like 'free', 'jobs', 'download', 'definition', etc.) and review the search terms report regularly to block new irrelevant queries."
        },
        {
            "q": "What is Google Performance Max (PMax)?",
            "a": "Performance Max is Google's all-in-one campaign type that uses machine learning to serve your ads across Google Search, Shopping, YouTube, Display, Discover, and Maps from a single campaign to drive maximum conversions."
        },
        {
            "q": "Do you help with Google Merchant Center issues and disapproved products?",
            "a": "Yes. If your Google Merchant Center has disapproved items, feed warnings, or policy issues, we diagnose and fix product titles, categories, and attributes to get your catalog approved."
        },
        {
            "q": "Can you track phone calls generated by Google Ads?",
            "a": "Yes. We configure Google Call Tracking and website dynamic number insertion to track every phone call that comes from your ads, including call duration and timestamp."
        },
        {
            "q": "How does Google Quality Score affect my advertising costs?",
            "a": "Quality Score is Google's 1-10 rating of the quality and relevance of your keywords, ad copy, and landing page. A higher Quality Score earns you higher ad positions while paying up to 50% less per click than competitors with lower scores."
        },
        {
            "q": "How do we get started?",
            "a": "Complete the form below. We will review your website and current Google Ads setup, perform a preliminary keyword search, and discuss a tailored campaign strategy."
        }
    ],
    "finalCta": {
        "headline": "Ready to Capture Customers Who Are Already Searching for You?",
        "description": "Tell us about your products or services, target locations, and goals. We will prepare a transparent Google Ads strategy and quotation.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Get a Custom Scope"
    },
    "enquiryForm": {
        "title": "Discuss Your Google Ads Strategy",
        "subtitle": "Share your details so our team can evaluate your search opportunity and propose a campaign structure.",
        "platformQuestion": "What is your current Google Ads setup?",
        "platformOptions": [
            "Active Google Ads account needing lower CPC and better ROAS",
            "Tried Google Ads previously, but spent budget without good results",
            "Brand new to Google Ads, looking to launch from scratch"
        ],
        "serviceOptions": [
            "High-Intent Keyword Research & Negative Matching",
            "Google Search Campaign Setup & Ad Copywriting",
            "Google Shopping & Performance Max (PMax) Setup",
            "Google Merchant Center Feed Optimization",
            "Google Tag Manager & Enhanced Conversions Setup",
            "Display & Dynamic Remarketing Campaigns",
            "Call Tracking & WhatsApp Click Tracking",
            "Quality Score & Landing Page Audit"
        ],
        "businessTypes": [
            "E-Commerce / Online Store", "B2B / Manufacturer", "Local Business / Clinic", 
            "Professional Services", "Software / SaaS", "Other"
        ],
        "submitButton": "Request My Google Ads Consultation"
    },
    "seo": {
        "title": "Google Ads Management Services (Search & Shopping) | E-COMET OUTVERSE",
        "description": "Professional Google Ads management services by E-COMET OUTVERSE. Search campaigns, Google Shopping, Performance Max, Enhanced Conversions, and Quality Score optimization.",
        "slug": "/services/google-ads",
        "primaryKeyword": "Google Ads Management Services",
        "secondaryKeywords": [
            "Google PPC Agency", "Google Shopping Management", 
            "Performance Max Agency", "Google Advertising Services", "Search Engine Marketing"
        ]
    }
}

print("Generated Meta Ads & Google Ads.")
