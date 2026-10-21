# Division 1: Social Media & Paid Advertising (4 services)
# 1. social-media-management
# 2. meta-ads
# 3. google-ads
# 4. youtube-ads

from generate_all_digital_marketing import services as existing_services, make_packages

div1_services = {}

# Re-use existing 3 services
div1_services["social-media-management"] = existing_services["social-media-management"]
div1_services["meta-ads"] = existing_services["meta-ads"]
div1_services["google-ads"] = existing_services["google-ads"]

# Add 2 more FAQs to each to ensure >= 10 FAQs
div1_services["social-media-management"]["faqs"].extend([
    {
        "q": "Do we need to provide raw photos and videos of our products?",
        "a": "Yes, sharing high-resolution smartphone photos and short unedited video clips of your products, workspace, or team helps us create more authentic content. If you don't have existing assets, we can also use licensed lifestyle imagery and custom branded graphics."
    },
    {
        "q": "Can you manage our social media direct messages (DMs) and customer queries?",
        "a": "Yes. In our Nova and Cosmic packages, we monitor incoming DMs and comments daily, answering standard FAQs (pricing, delivery times, store hours) and routing high-value sales inquiries directly to your team via WhatsApp or email."
    }
])

div1_services["meta-ads"]["faqs"].extend([
    {
        "q": "What is an Advantage+ Shopping Campaign (ASC) on Meta?",
        "a": "Advantage+ Shopping Campaigns use Meta's advanced AI machine learning to automate audience targeting, budget distribution, and creative delivery across Facebook and Instagram, typically delivering lower cost-per-acquisition for e-commerce stores."
    },
    {
        "q": "Do I need a separate ad budget for Facebook and Instagram?",
        "a": "No. Meta Ads Manager manages both Facebook and Instagram from a single unified ad budget. The algorithm automatically allocates your budget between the two platforms based on where your target buyers convert at the lowest cost."
    }
])

div1_services["google-ads"]["faqs"].extend([
    {
        "q": "What is a Google Performance Max (PMax) campaign?",
        "a": "Performance Max is an automated campaign type that serves your ads across all of Google's channels from a single campaign—including Google Search, YouTube, Google Display Network, Google Discover, Gmail, and Google Maps."
    },
    {
        "q": "How do you stop competitor clicks or click fraud on Google Ads?",
        "a": "We set up automated IP exclusion rules, monitor unusual click spikes from specific regions, use strict geographic targeting, and add negative keywords to filter out non-buyer search traffic."
    }
])



# Service 4: YouTube Ads
div1_services["youtube-ads"] = {
    "id": "youtube-ads",
    "slug": "youtube-ads",
    "title": "YouTube Ads",
    "division": "Division 1: Social Media & Paid Advertising",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#FF0000",
    "hero": {
        "headline": "YouTube Advertising That Builds Trust & Drives Action",
        "subheadline": "Put your video ads in front of the right viewers across YouTube Search, In-Stream, and Shorts.",
        "description": "YouTube is the world's second-largest search engine. We help brands plan, launch, and optimize high-performing YouTube video ad campaigns—from short non-skippable bumper ads and high-converting In-Stream ads to vertical YouTube Shorts ads that generate qualified leads and real sales.",
        "primaryCta": "Request a Consultation",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Reach Engaged Video Watchers on YouTube",
        "paragraphs": [
            "Video advertising on YouTube gives you the power of sight, sound, and motion to tell your brand story and demonstrate your products in real life. But running profitable YouTube campaigns requires strong video hooks, smart audience targeting, and continuous bid management.",
            "E-COMET OUTVERSE sets up and manages YouTube ad campaigns through Google Ads. We help you choose the right video ad formats, research targeted topics and placements, set up conversion tracking, and optimize cost-per-view (CPV) and cost-per-acquisition (CPA).",
            "Whether you want to build mass awareness in your target city, retarget past website visitors, or drive direct online orders, our YouTube ad management keeps your ad spend working efficiently."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "Ad Format Selection & Strategy",
            "desc": "Choosing the right YouTube ad formats based on your campaign objective and available video assets.",
            "deliverables": [
                "Skippable In-Stream ad setup for detailed storytelling and product demos",
                "Non-skippable 6-second Bumper ads for rapid brand recall and reach",
                "Vertical YouTube Shorts ad setup tailored for mobile viewers",
                "In-Feed video ad setup appearing in YouTube search results and related videos",
                "Call-to-Action (CTA) extension and companion banner setup"
            ],
            "benefit": "Your video budget is placed in the exact format that matches your commercial goal."
        },
        {
            "code": "02",
            "title": "Audience & Intent Targeting",
            "desc": "Reaching high-intent viewers using Google's search and browsing data.",
            "deliverables": [
                "Custom intent audiences targeting users who recently searched for your products on Google",
                "In-Market audiences actively researching your industry or category",
                "Life events and detailed demographic targeting (age, parental status, household income)",
                "Specific channel and video placement targeting on relevant industry creators",
                "Topic targeting across verified content categories"
            ],
            "benefit": "Your ads appear before viewers who are already interested in what you sell."
        },
        {
            "code": "03",
            "title": "Video Hook & Script Guidance",
            "desc": "Structuring your video creative to capture attention in the first 5 seconds before viewers can skip.",
            "deliverables": [
                "First 5-second hook formulas tailored for skippable formats",
                "Clear on-screen call-to-action suggestions and timing cues",
                "Pacing and visual structure review for higher audience retention",
                "Vertical video adaptation guidelines for YouTube Shorts",
                "Thumbnail and companion banner design for In-Feed campaigns"
            ],
            "benefit": "Fewer viewers skip your ads, lowering your cost per completed view."
        },
        {
            "code": "04",
            "title": "Conversion Tracking & YouTube Linking",
            "desc": "Configuring full tracking to measure leads, website visits, and purchases generated by video ads.",
            "deliverables": [
                "Direct linking between your YouTube channel and Google Ads account",
                "Google Tag Manager event tracking for clicks, form submissions, and checkouts",
                "Enhanced Conversions setup for accurate cross-device attribution",
                "View-through and engaged-view conversion window calibration",
                "UTM parameter tagging for external analytics consistency"
            ],
            "benefit": "You can clearly see how many actual customers your YouTube ads generate."
        },
        {
            "code": "05",
            "title": "Video Retargeting Funnels",
            "desc": "Re-engaging users who watched your videos or visited your website with sequential messaging.",
            "deliverables": [
                "Custom audience lists of viewers who watched specific channel videos",
                "Sequential video campaigns (Brand Intro video followed by Product Offer video)",
                "Cross-channel retargeting connecting YouTube viewers to Google Search and Shopping",
                "Past customer exclusion to avoid wasting budget on existing buyers",
                "Abandoned cart recovery video campaigns"
            ],
            "benefit": "Warm prospects receive the right follow-up message at each stage of their buying decision."
        },
        {
            "code": "06",
            "title": "Bid Management & Placement Whitelisting",
            "desc": "Controlling costs per view and eliminating wasteful, low-quality video placements.",
            "deliverables": [
                "Target CPA and Maximize Conversions bidding adjustments",
                "Target CPV management for awareness and watch-time campaigns",
                "Placement exclusion lists filtering out kids' channels and unrelated content",
                "Device bid adjustments (mobile vs connected TV vs desktop)",
                "Daily budget pacing to prevent erratic spend spikes"
            ],
            "benefit": "Your money is only spent on relevant human viewers in brand-safe environments."
        },
        {
            "code": "07",
            "title": "Performance Analytics & Monthly Reviews",
            "desc": "Clear, straightforward monthly reports showing views, retention, and return on ad spend.",
            "deliverables": [
                "Audience retention curve analysis (25%, 50%, 75%, 100% video completion)",
                "Cost per view (CPV) and cost per acquisition (CPA) trend tracking",
                "Placement performance reports showing top-converting channels",
                "Executive monthly video summary and strategic recommendations",
                "Next-month creative and audience testing roadmap"
            ],
            "benefit": "You get transparent data on what worked, what was cut, and where to scale."
        }
    ],
    "whoBenefits": [
        {
            "role": "D2C Brands with Visual Products",
            "desc": "Brands that need to show product texture, real unboxing, and styling in action to build buyer trust.",
            "fit": "High Visual Demonstration Need"
        },
        {
            "role": "B2B & High-Ticket Service Providers",
            "desc": "Companies that need explainer videos to educate decision-makers and encourage them to book a consultation.",
            "fit": "Educational & Authority Building"
        },
        {
            "role": "Coaching & Online Education Institutes",
            "desc": "Educators who use video testimonials, course previews, and webinars to enroll students.",
            "fit": "Student & Webinar Registrations"
        },
        {
            "role": "Local Clinics & Premium Showrooms",
            "desc": "Businesses that want to dominate local video awareness within a specific city or radius.",
            "fit": "Local Footfall & Trust"
        },
        {
            "role": "Established Brands Scaling Past Meta",
            "desc": "Brands experiencing ad fatigue on Facebook and Instagram looking for an untapped, high-reach video channel.",
            "fit": "Channel Diversification"
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Discovery & Video Audit",
            "timeline": "Week 1",
            "desc": "We evaluate your current video assets, target audience profile, past ad data, and commercial targets.",
            "output": "YouTube Advertising Strategy Document"
        },
        {
            "step": "02",
            "title": "Audience & Placement Research",
            "timeline": "Week 1–2",
            "desc": "We map out custom search intent queries, in-market segments, and curate placement whitelists.",
            "output": "Targeting Matrix & Channel Whitelist"
        },
        {
            "step": "03",
            "title": "Account & Conversion Setup",
            "timeline": "Week 2",
            "desc": "We link your YouTube channel, set up Google Ads conversion tags, and verify tracking triggers.",
            "output": "Verified Google Tag Manager Tracking"
        },
        {
            "step": "04",
            "title": "Campaign Build & Creative Review",
            "timeline": "Week 2–3",
            "desc": "We assemble ad groups, companion banners, end screens, CTA buttons, and write persuasive copy.",
            "output": "Pre-Launch Campaign Previews for Sign-off"
        },
        {
            "step": "05",
            "title": "Campaign Launch & Monitoring",
            "timeline": "Week 3",
            "desc": "Campaigns go live with controlled daily budgets to gather initial view rate and cost metrics.",
            "output": "Live Campaign Dashboard"
        },
        {
            "step": "06",
            "title": "Optimization & Placements Cleaning",
            "timeline": "Ongoing",
            "desc": "Weekly exclusion of low-converting placements, creative testing, and scaling of winning audiences.",
            "output": "Monthly Video ROI Report & Strategy Call"
        }
    ],
    "packages": make_packages(
        "YouTube Ads",
        "Select a YouTube advertising package based on your current video inventory, monthly budget, and scaling goals. Public pricing is not shown on our site; fees are confirmed during consultation.",
        "Essential YouTube Video Setup & Retargeting",
        "Ideal for brands launching their first YouTube campaigns or running focused video retargeting on a modest budget.",
        [
            "Up to 2 active YouTube ad campaigns (In-Stream or Shorts)",
            "Custom intent and in-market audience research",
            "Google Tag Manager conversion tracking setup",
            "Placement negative list to block kids' and irrelevant channels",
            "Basic video retargeting for website visitors",
            "Bi-weekly bid adjustments and budget monitoring",
            "Monthly performance summary report"
        ],
        "Active YouTube Growth & Lead Generation",
        "Best for growing businesses seeking consistent leads, course signups, or product purchases through video ads.",
        [
            "Up to 5 active YouTube campaigns across formats (In-Stream, Shorts, In-Feed)",
            "Advanced custom intent audiences based on Google search queries",
            "Sequential video remarketing funnels",
            "Video hook and first 5-second pacing consultation",
            "Companion banner and CTA thumbnail design",
            "Active weekly placement cleaning and bid optimization",
            "Enhanced Conversions and cross-device tracking",
            "Monthly strategy review call with live screen sharing"
        ],
        "Full-Funnel YouTube Video Domination",
        "Designed for established brands and heavy video advertisers running aggressive monthly budgets.",
        [
            "Multi-campaign structure across national or international markets",
            "Ongoing A/B testing of video hooks, aspect ratios, and CTAs",
            "Dedicated placement whitelisting and competitor monitoring",
            "Connected TV (Living Room screen) campaign optimization",
            "Full integration with Google Search and Meta retargeting funnels",
            "Senior video strategist and dedicated account lead",
            "Custom Looker Studio live executive dashboard",
            "Priority weekly strategy and budget calls"
        ]
    ),
    "faqs": [
        {
            "q": "Do I need professional video production before running YouTube ads?",
            "a": "Not necessarily. While high production quality is great, simple, authentic founder videos, product demonstrations recorded on a smartphone, and user-generated content (UGC) often outperform glossy TV-style commercials on YouTube."
        },
        {
            "q": "What is the minimum budget required to start YouTube advertising?",
            "a": "We recommend a starting ad spend of at least ₹30,000 to ₹50,000 ($400–$600) per month so the campaign can gather enough viewer data to optimize bids and identify winning audiences."
        },
        {
            "q": "When does a viewer count as a view on a skippable YouTube ad?",
            "a": "On skippable In-Stream ads, you only pay when a viewer watches at least 30 seconds of your video (or the entire video if it is shorter than 30 seconds) or interacts with your ad (such as clicking a link). If they skip at second 6, you pay nothing."
        },
        {
            "q": "Can you run ads specifically on YouTube Shorts?",
            "a": "Yes. We create vertical 9:16 campaigns optimized specifically for the YouTube Shorts feed, targeting mobile users with punchy, fast-paced video creatives."
        },
        {
            "q": "How do you stop my ads from showing on kids' cartoons or irrelevant videos?",
            "a": "We apply strict content exclusions, age filters, and extensive negative placement lists to block toddler channels, gaming streams, and unrelated content from eating up your budget."
        },
        {
            "q": "Can you target people who searched for my competitors on Google?",
            "a": "Yes. Through Google Ads Custom Intent audiences, we can target YouTube users who have recently typed your competitors' brand names or relevant industry keywords into Google search."
        },
        {
            "q": "Does E-COMET OUTVERSE shoot the videos?",
            "a": "We provide video editing, hook guidance, captioning, and format adaptation. If you need full on-location filming, that can be added through our Video Production & Editing division."
        },
        {
            "q": "How do you track if someone bought a product after watching a YouTube video?",
            "a": "We implement Google Tag Manager with Enhanced Conversions. This tracks both direct click-through purchases and view-through conversions (when someone watches your ad and purchases within a set window)."
        },
        {
            "q": "How long should a YouTube video ad be?",
            "a": "For skippable In-Stream ads, 45 to 90 seconds is usually the sweet spot—enough time to hook the viewer, explain the benefits, and present a clear offer. For YouTube Shorts, 15 to 30 seconds works best."
        },
        {
            "q": "How frequently will we review campaign performance?",
            "a": "We monitor bids and placements weekly, and deliver a comprehensive monthly report detailing views, view rate, conversion metrics, and next-month action items."
        }
    ],
    "enquiryForm": {
        "title": "Discuss Your YouTube Advertising Goals",
        "subtitle": "Share your current video assets and goals to receive a tailored YouTube advertising strategy.",
        "platformQuestion": "What is your current YouTube advertising experience?",
        "platformOptions": [
            "Never run YouTube ads before",
            "Running ads with low conversion",
            "Looking to scale existing video campaigns"
        ],
        "serviceOptions": [
            "Skippable In-Stream Video Ads",
            "YouTube Shorts Video Ads",
            "Custom Intent Search Audience Setup",
            "Video Remarketing & Sequential Funnels",
            "Google Tag Manager & Conversion Tracking",
            "Placement Cleaning & Brand Safety Filters",
            "Video Hook & Script Structure Guidance",
            "Bumper Ads (6-Second Non-Skippable)"
        ],
        "scaleQuestion": "Planned Monthly YouTube Ad Spend",
        "scaleOptions": [
            "Under ₹50,000 / month ($600)",
            "₹50,000 – ₹1,50,000 / month",
            "₹1,50,000 – ₹5,00,000 / month",
            "₹5,00,000+ / month ($6,000+)"
        ],
        "businessTypes": [
            "D2C Brand / E-Commerce", "B2B / Technology", "Coaching / Education", 
            "Local Clinic / Hospital", "Real Estate / Architecture", "Other"
        ],
        "submitButton": "Request My YouTube Ads Strategy"
    },
    "seo": {
        "title": "YouTube Ads Management Services | E-COMET OUTVERSE",
        "description": "Professional YouTube advertising services by E-COMET OUTVERSE. In-Stream ads, YouTube Shorts campaigns, custom intent targeting, and conversion tracking.",
        "slug": "/services/youtube-ads",
        "primaryKeyword": "YouTube Ads Management",
        "secondaryKeywords": [
            "YouTube Advertising Agency", "YouTube Video Ads", "YouTube Shorts Advertising", 
            "Google Video Ads Management", "In-Stream Video Marketing"
        ]
    }
}

print(f"Division 1 complete: {len(div1_services)} services configured.")
