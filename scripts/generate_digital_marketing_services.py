import json, os

services = {}

# 1. Social Media Management
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
    "packages": {
        "intro": "Choose a social media management package based on your target channels, posting frequency, and video requirements. Final deliverables are confirmed after understanding your goals.",
        "tiers": [
            {
                "name": "ORBIT",
                "tagline": "Essential Brand Consistency",
                "positioning": "Ideal for businesses that need clean, steady posting to keep their social channels active and credible.",
                "suitableFor": [
                    "Small businesses and startups",
                    "Brands needing active baseline profiles",
                    "Businesses with 1-2 primary channels (e.g. Instagram & Facebook)"
                ],
                "deliverables": [
                    "12 branded feed posts per month (graphics + carousels)",
                    "8 story updates per month",
                    "Caption copywriting & strategic hashtag sets",
                    "Channel scheduling across 2 platforms",
                    "Routine comment monitoring & monthly summary report"
                ],
                "cta": "Explore Orbit Package"
            },
            {
                "name": "NOVA",
                "tagline": "Active Growth & Video Reels",
                "positioning": "Our recommended package for brands looking to expand organic reach with short-form video reels and higher posting volume.",
                "suitableFor": [
                    "Growing D2C and consumer brands",
                    "Businesses seeking algorithmic video reach",
                    "Active multi-channel presence (Instagram, Facebook, LinkedIn)"
                ],
                "deliverables": [
                    "20 feed posts per month (mix of carousels, single graphics, and reels)",
                    "8 custom edited video reels / shorts",
                    "16 story updates per month with interactive stickers",
                    "Multi-platform scheduling across 3 channels",
                    "Active community engagement & basic DM triage",
                    "Bi-weekly performance tracking & monthly strategy call"
                ],
                "cta": "Explore Nova Package"
            },
            {
                "name": "COSMIC",
                "tagline": "Complete Omnichannel Social Suite",
                "positioning": "Comprehensive social media production and management for established brands demanding high output and omnichannel dominance.",
                "suitableFor": [
                    "Established consumer and B2B brands",
                    "High-volume publishing across all major networks",
                    "Brands running influencer partnerships and video campaigns"
                ],
                "deliverables": [
                    "30 feed posts per month across 4 networks (Instagram, LinkedIn, Facebook, X)",
                    "15 custom edited short-form video reels",
                    "Daily story sequence publishing",
                    "Dedicated social media manager & graphic designer",
                    "Fast-response community management & DM escalation",
                    "Weekly analytics dashboard & monthly creative roadmap planning"
                ],
                "cta": "Explore Cosmic Package"
            }
        ],
        "policy": "Public pricing is not displayed on our website. Service fees depend on posting frequency, video production requirements, and channel count. E-COMET OUTVERSE focuses on high-quality content execution and does not sell fake followers or engagement."
    },
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
    "integratedServices": [
        {
            "service": "Meta & Instagram Ads",
            "desc": "Amplify your best-performing organic social posts into targeted paid ad campaigns to acquire customers."
        },
        {
            "service": "Commercial Video Editing",
            "desc": "Turn long customer interviews or product shoots into high-converting short reels and YouTube shorts."
        },
        {
            "service": "Creative Design & Brand Identity",
            "desc": "Upgrade your logo, brand book, and visual design language before launching new social campaigns."
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

print(f"Generated Social Media Management.")
