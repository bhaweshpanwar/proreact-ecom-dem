# Division 2: Search Visibility & Local Marketing (3 services)
# 5. seo
# 6. emerging-search-ai-marketing
# 7. local-seo

from generate_all_digital_marketing import make_packages

div2_services = {}

# =========================================================================
# 5. Search Engine Optimization (SEO)
# =========================================================================
div2_services["seo"] = {
    "id": "seo",
    "slug": "seo",
    "title": "Search Engine Optimization (SEO)",
    "division": "Division 2: Search Visibility & Local Marketing",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#10B981",
    "hero": {
        "headline": "Search Engine Optimization That Brings Real Customers",
        "subheadline": "Help high-intent buyers find your website when they search for your products and services on Google.",
        "description": "Paid ads stop working the second you turn off your daily budget. Search Engine Optimization (SEO) builds permanent digital real estate for your business. E-COMET OUTVERSE helps companies fix technical website errors, write helpful content that answers customer questions, and build natural authority so your website earns steady organic traffic month after month.",
        "primaryCta": "Request a Free SEO Audit",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Rank for the Keywords Your Buyers Actually Use",
        "paragraphs": [
            "Ranking on the first page of Google is not about stuffing keywords or trying to trick an algorithm. It is about creating a fast, clean website that directly answers what your customers are looking for.",
            "Our SEO services cover the entire foundation: from fixing broken pages, slow loading speeds, and mobile layout issues, to researching the exact search phrases your buyers type when they are ready to buy. We organize your website content into clear topic hubs that search engines easily understand.",
            "Whether you run an e-commerce store with hundreds of products or a business offering specialized services, we focus on organic rankings that turn into actual enquiries, phone calls, and revenue."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "High-Intent Keyword Research",
            "desc": "Finding the specific search terms real buyers use when looking for your products or services.",
            "deliverables": [
                "Commercial and transactional keyword discovery with search volume data",
                "Long-tail keyword mapping for lower competition and faster ranking wins",
                "Competitor organic ranking and keyword gap analysis",
                "Search intent categorization (informational vs commercial vs transactional)",
                "Target keyword mapping to specific website pages and URLs"
            ],
            "benefit": "You attract visitors who are actively searching to buy, not just casual browsers."
        },
        {
            "code": "02",
            "title": "On-Page SEO & Content Formatting",
            "desc": "Optimizing page titles, headings, and descriptions so search engines and visitors understand your content.",
            "deliverables": [
                "Unique title tags and click-worthy meta descriptions for key pages",
                "Logical heading structure (H1, H2, H3) with natural keyword integration",
                "Image alt-text optimization and file size reduction for faster loading",
                "URL structure cleanup and breadcrumb navigation setup",
                "Internal link optimization to guide visitors between related topics"
            ],
            "benefit": "Your web pages become easier to crawl for search engines and clearer for visitors to read."
        },
        {
            "code": "03",
            "title": "Technical SEO & Site Health Fixes",
            "desc": "Resolving crawl errors, indexing problems, and site speed bottlenecks.",
            "deliverables": [
                "Comprehensive technical crawl audit using industry diagnostic tools",
                "XML sitemap creation, validation, and submission in Google Search Console",
                "Robots.txt file configuration to ensure proper bot indexing",
                "Broken link (404 error) detection and 301 redirect setup",
                "Mobile usability and Core Web Vitals (speed, responsiveness) recommendations"
            ],
            "benefit": "Search engine crawlers can index every important page of your site without running into technical dead-ends."
        },
        {
            "code": "04",
            "title": "Content Planning & Blog Writing",
            "desc": "Publishing clear, helpful articles that answer common buyer questions and build topic authority.",
            "deliverables": [
                "Quarterly content editorial plan focused on customer FAQs and industry guides",
                "SEO-optimized blog articles written in clear, natural language",
                "Featured snippet formatting to capture position zero on Google",
                "Product category guide creation and buyers' checklist formatting",
                "Existing content refresh to update outdated information and improve rankings"
            ],
            "benefit": "Your website becomes a trusted resource that educates customers and ranks for hundreds of search terms."
        },
        {
            "code": "05",
            "title": "Schema Markup & Rich Snippets",
            "desc": "Adding structured code so Google can display star ratings, prices, and FAQs directly in search results.",
            "deliverables": [
                "FAQ schema integration for expandable questions directly on Google search results",
                "Product and AggregateRating schema for e-commerce stores",
                "LocalBusiness schema with address, operating hours, and contact details",
                "BreadcrumbList schema for clean navigation trails in search results",
                "Structured data testing and error resolution in Google Rich Results Test"
            ],
            "benefit": "Your search listings stand out with stars, prices, and FAQs, boosting click-through rates."
        },
        {
            "code": "06",
            "title": "Ethical Authority & Backlink Building",
            "desc": "Earning genuine mentions and links from reputable industry websites and business directories.",
            "deliverables": [
                "High-quality business directory and industry association submissions",
                "Digital PR and editorial outreach for genuine brand mentions",
                "Supplier, partner, and vendor profile link reclamation",
                "Toxic backlink audit and Google Disavow file preparation if needed",
                "Competitor backlink profile analysis to find link opportunities"
            ],
            "benefit": "Your website earns steady domain credibility without risking algorithmic penalties."
        },
        {
            "code": "07",
            "title": "Ranking Tracking & Monthly Reports",
            "desc": "Clear monthly reporting showing your keyword positions, organic visitors, and customer enquiries.",
            "deliverables": [
                "Google Search Console clicks, impressions, and average position tracking",
                "Google Analytics 4 organic traffic and conversion attribution",
                "Monthly target keyword ranking movement report",
                "Summary of completed optimizations and technical fixes",
                "Prioritized action items and content recommendations for the coming month"
            ],
            "benefit": "You have full transparency on exactly how your organic rankings and visitor numbers are improving."
        }
    ],
    "whoBenefits": [
        {
            "role": "E-Commerce Stores with Large Catalogues",
            "desc": "Brands wanting their product and category pages to rank on Google without paying for every single click.",
            "fit": "Catalogue & Category Search"
        },
        {
            "role": "B2B Manufacturers & Wholesalers",
            "desc": "Businesses that need corporate buyers to discover their production capabilities and product specifications.",
            "fit": "High-Value Inbound Inquiries"
        },
        {
            "role": "Professional Services & Consultancies",
            "desc": "Law firms, accountants, architects, and consultancies wanting to be found by clients searching for expert services.",
            "fit": "Authority & Trust Building"
        },
        {
            "role": "Companies Tired of Rising Ad Costs",
            "desc": "Businesses looking to reduce their dependence on Meta and Google Ads by building organic search traffic that lasts.",
            "fit": "Long-Term Cost Reduction"
        },
        {
            "role": "Local & Regional Service Providers",
            "desc": "Businesses serving multiple cities that need dedicated landing pages ranking across their target service territories.",
            "fit": "Regional Territory Coverage"
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Comprehensive SEO & Site Audit",
            "timeline": "Week 1",
            "desc": "We crawl your entire website, analyze current keyword rankings, and identify technical errors and content gaps.",
            "output": "Detailed SEO Health Report"
        },
        {
            "step": "02",
            "title": "Keyword Strategy & Page Mapping",
            "timeline": "Week 2",
            "desc": "We research high-intent buyer keywords and map each keyword group to the most relevant page on your website.",
            "output": "Keyword Mapping Matrix"
        },
        {
            "step": "03",
            "title": "Technical Fixes & Indexing Setup",
            "timeline": "Week 2–3",
            "desc": "We resolve sitemap issues, fix broken links, configure robots.txt, and submit verified properties in Google Search Console.",
            "output": "Technical Error Resolution Summary"
        },
        {
            "step": "04",
            "title": "On-Page Optimization Sprints",
            "timeline": "Week 3–4",
            "desc": "We rewrite title tags, improve meta descriptions, structure headers, and optimize internal links across primary pages.",
            "output": "Optimized Core Website Pages"
        },
        {
            "step": "05",
            "title": "Content Creation & Schema Deployment",
            "timeline": "Ongoing",
            "desc": "We publish helpful articles answering customer questions and implement structured schema markup for rich snippets.",
            "output": "Monthly Content & Schema Verification"
        },
        {
            "step": "06",
            "title": "Rank Tracking & Ongoing Refinement",
            "timeline": "Monthly",
            "desc": "We monitor keyword movement, analyze search console data, and adjust strategies to capture higher positions.",
            "output": "Monthly Organic Growth & Ranking Report"
        }
    ],
    "packages": make_packages(
        "Search Engine Optimization (SEO)",
        "Select an SEO package based on the size of your website, current ranking condition, and target market. Public pricing is not displayed on our website; fees are confirmed after an initial site audit.",
        "Essential Technical & On-Page SEO",
        "Best for small business websites and local companies needing a solid technical base and core page optimization.",
        [
            "Full initial technical SEO crawl and audit",
            "Google Search Console & GA4 verification",
            "Optimization of up to 10 core website pages (titles, metas, headers)",
            "XML sitemap and robots.txt setup",
            "Broken link (404) detection and redirects",
            "Basic schema markup integration (LocalBusiness / Organization)",
            "Monthly ranking and organic traffic report"
        ],
        "Active Organic Growth & Content Strategy",
        "Best for growing businesses, e-commerce stores, and regional companies competing for competitive search terms.",
        [
            "Everything in Orbit package",
            "Optimization of up to 25 core category and service pages",
            "2 high-quality SEO-optimized articles/guides published per month",
            "Advanced schema markup (Product, FAQ, Review, Breadcrumbs)",
            "Competitor keyword gap analysis and counter-strategy",
            "Internal link architecture restructuring",
            "Ethical directory and digital citation building",
            "Monthly strategic ranking review and recommendations call"
        ],
        "Comprehensive Search Dominance & Technical Care",
        "Designed for large e-commerce catalogues, national brands, and companies expanding into international search.",
        [
            "Everything in Nova package",
            "Optimization of up to 50+ pages and category templates",
            "4 high-quality in-depth articles/guides published per month",
            "Comprehensive Core Web Vitals and site speed coordination",
            "High-authority digital PR and editorial link outreach",
            "International SEO & hreflang multi-region tag setup",
            "Dedicated SEO manager and monthly executive roadmap",
            "Priority technical support and continuous algorithmic monitoring"
        ]
    ),
    "faqs": [
        {
            "q": "How long does it take to see results from SEO?",
            "a": "SEO is a compounding strategy. You typically start seeing initial ranking improvements and indexation fixes within 60 to 90 days. Meaningful organic traffic and lead increases usually develop between 4 to 6 months as domain authority grows."
        },
        {
            "q": "Do you guarantee a #1 ranking on Google?",
            "a": "No legitimate agency can guarantee a #1 ranking because Google's algorithm uses hundreds of constantly evolving factors that no third party controls. We do guarantee strict adherence to Google's official Search Essentials and a proven track record of ethical ranking growth."
        },
        {
            "q": "What is the difference between SEO and Google Ads?",
            "a": "Google Ads gives you immediate top-of-page visibility, but you pay every time someone clicks your link, and traffic stops when your budget ends. SEO earns free organic clicks based on website quality and continues driving visitors long after the initial work is done."
        },
        {
            "q": "Will you need access to my website backend?",
            "a": "Yes. To fix meta tags, implement schema code, improve site speed, and resolve technical crawl errors, our team will need developer or admin access to your website CMS (such as WordPress, Shopify, or custom code)."
        },
        {
            "q": "Can you do SEO for an e-commerce store with hundreds of products?",
            "a": "Yes. For large e-commerce websites, we focus on optimizing product category pages, creating faceted navigation rules, implementing product schema, and writing category buying guides that capture broad customer searches."
        },
        {
            "q": "What happens if Google releases an algorithm update?",
            "a": "We follow strictly white-hat, user-first SEO practices recommended by Google. When algorithm updates occur, we review your Search Console data, assess any fluctuations, and make proactive content or technical adjustments."
        },
        {
            "q": "Do you write the blog articles, or do we have to provide them?",
            "a": "Our team researches, outlines, writes, and publishes the articles for you. We share topics and drafts with your team for subject-matter approval before publishing."
        },
        {
            "q": "How do you choose which keywords to target?",
            "a": "We analyze what potential buyers type into Google, examine search volume and keyword difficulty, and evaluate what keywords your top competitors rank for, prioritizing high-intent search terms that lead to enquiries and sales."
        },
        {
            "q": "Will SEO help my local business show up in Google Maps?",
            "a": "Yes. Organic SEO directly supports local visibility. For businesses focused specifically on local footfall and calls, we recommend combining SEO with our dedicated Local SEO & Google Business Profile service."
        },
        {
            "q": "How do we track the results of our SEO investment?",
            "a": "We provide a straightforward monthly report showing Google Search Console impressions, keyword ranking positions, organic visitor counts, and goal completions (enquiries, calls, orders) in Google Analytics 4."
        }
    ],
    "enquiryForm": {
        "title": "Request a Comprehensive SEO Consultation",
        "subtitle": "Share your website details and search goals so we can analyze your current rankings and outline an action plan.",
        "platformQuestion": "What is your current website SEO status?",
        "platformOptions": [
            "New website with no SEO yet",
            "Existing website with low organic traffic",
            "Looking to improve established rankings"
        ],
        "serviceOptions": [
            "Technical SEO Crawl & Health Audit",
            "High-Intent Keyword Research & Mapping",
            "On-Page Optimization (Titles, Metas, Headers)",
            "Content Strategy & Monthly Blog Articles",
            "Schema Markup & Rich Snippets (FAQ, Product)",
            "Broken Links & 301 Redirect Cleanup",
            "Google Search Console & GA4 Setup",
            "Competitor Ranking & Keyword Gap Analysis"
        ],
        "scaleQuestion": "Estimated Size of Your Website",
        "scaleOptions": [
            "1–15 pages (Standard business site)",
            "16–50 pages (Growing service site)",
            "50–250 pages (E-commerce / Catalog)",
            "250+ pages (Large directory / Enterprise)"
        ],
        "businessTypes": [
            "E-Commerce / D2C Store", "B2B Manufacturer / Supplier", 
            "Professional Services / Consultancy", "Local Business / Clinic", 
            "Software / SaaS", "Other"
        ],
        "submitButton": "Request My Free SEO Audit"
    },
    "seo": {
        "title": "Search Engine Optimization (SEO) Services | E-COMET OUTVERSE",
        "description": "Professional Search Engine Optimization services by E-COMET OUTVERSE. Technical SEO audits, on-page optimization, keyword research, schema markup, and content strategy.",
        "slug": "/services/seo",
        "primaryKeyword": "Search Engine Optimization Services",
        "secondaryKeywords": [
            "SEO Agency", "Technical SEO Audit", "Organic Search Optimization", 
            "On-Page SEO Services", "E-Commerce SEO Services"
        ]
    }
}

# =========================================================================
# 6. Emerging Search & AI Marketing
# =========================================================================
div2_services["emerging-search-ai-marketing"] = {
    "id": "emerging-search-ai-marketing",
    "slug": "emerging-search-ai-marketing",
    "title": "Emerging Search & AI Marketing",
    "division": "Division 2: Search Visibility & Local Marketing",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#8B5CF6",
    "hero": {
        "headline": "Get Recommended by AI Search Engines",
        "subheadline": "Help your brand get discovered and cited when people search using ChatGPT, Perplexity, Google Gemini, and AI Overviews.",
        "description": "Millions of buyers are changing how they search for products and advice. Instead of scrolling through 10 blue links on Google, they ask conversational questions to ChatGPT, Perplexity, and AI Overviews. E-COMET OUTVERSE helps your brand establish strong entity authority, structured answer data, and digital citations so AI platforms recognize and recommend your business.",
        "primaryCta": "Request an AI Visibility Audit",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Make Your Brand Visible in the Age of Generative AI Search",
        "paragraphs": [
            "Traditional search engines rank pages based on keywords and backlinks. Modern AI engines like ChatGPT, Perplexity, Claude, and Google AI Overviews synthesize answers by reading trusted sources, brand knowledge graphs, and authoritative online discussions.",
            "If an AI tool does not understand who you are, what you sell, and why people trust your brand, it will simply recommend your competitors when a user asks for recommendations.",
            "Our Emerging Search & AI Marketing service structures your website content into clean, fact-based answers, establishes clear brand entities across verified registries, and secures citations on third-party sources that AI models rely on when generating answers."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "AI Engine Visibility & Brand Citation Audits",
            "desc": "Testing and analyzing how major AI search tools represent your brand and competitors.",
            "deliverables": [
                "Prompt testing across ChatGPT, Perplexity, Google Gemini, and Microsoft Copilot",
                "Brand sentiment and accuracy check in AI-generated answers",
                "Competitor recommendation analysis for your primary product queries",
                "Identification of missing brand facts, outdated pricing, or incorrect details",
                "Baseline AI Share of Voice report with actionable gap analysis"
            ],
            "benefit": "You learn exactly what AI platforms tell potential buyers about your brand today."
        },
        {
            "code": "02",
            "title": "Answer Engine Optimization (AEO)",
            "desc": "Formatting web content into direct, authoritative answers that AI models can quote.",
            "deliverables": [
                "Concise definition blocks, bulleted takeaways, and summary callouts on key pages",
                "FAQ section restructuring answering direct 'What, Why, How, and Which' questions",
                "Fact-density enhancement replacing vague marketing fluff with specific numbers and data",
                "Clear product comparison tables comparing specifications and benefits",
                "Authoritative methodology notes and expert attribution"
            ],
            "benefit": "AI search engines can easily scrape, extract, and cite your content as the trusted direct answer."
        },
        {
            "code": "03",
            "title": "Brand Entity & Knowledge Graph Optimization",
            "desc": "Connecting your brand identity across authoritative digital directories and semantic databases.",
            "deliverables": [
                "SameAs schema markup connecting your website to verified social profiles and registries",
                "Wikidata entry preparation and verification guidance",
                "Google Knowledge Panel claim and entity attribute optimization",
                "Consistent business information across Crunchbase, LinkedIn, and industry databases",
                "Semantic entity relationship mapping (Founder, Brand, Products, Locations)"
            ],
            "benefit": "AI engines recognize your business as a verified, legitimate entity with established credentials."
        },
        {
            "code": "04",
            "title": "Crawlability for AI Bots (GPTBot & Perplexity)",
            "desc": "Ensuring your website allows leading AI search crawlers to access your content.",
            "deliverables": [
                "Robots.txt audit and configuration for GPTBot, PerplexityBot, Google-Extended, and ClaudeBot",
                "Clean HTML semantic structure ensuring bots can parse content without heavy client-side JavaScript rendering",
                "Fast server response times and XML sitemap prioritization for informational pages",
                "Structured schema validation ensuring machine-readable product data",
                "Monitoring bot crawl frequency and server logs"
            ],
            "benefit": "AI systems can read your newest articles, product updates, and specifications without technical blocks."
        },
        {
            "code": "05",
            "title": "Digital Citations & Authority Co-Mentions",
            "desc": "Getting your brand mentioned in third-party articles, listicles, and forums where AI learns.",
            "deliverables": [
                "Outreach to authoritative industry blogs and 'Top 10' comparison listicles",
                "Brand mention building across industry forums and community discussions",
                "Product review syndication and verified customer testimonial distribution",
                "Press release syndication for major milestones and product launches",
                "Co-occurrence citation building associating your brand with your primary keywords"
            ],
            "benefit": "When AI searches the web for reputable recommendations, your brand appears across multiple independent sources."
        },
        {
            "code": "06",
            "title": "Google AI Overviews Optimization",
            "desc": "Structuring content specifically to win placement in Google's top AI summary boxes.",
            "deliverables": [
                "Analysis of queries currently triggering Google AI Overviews in your sector",
                "Step-by-step numbered list formatting matching Google's preferred summary formats",
                "Targeted definition paragraphs placed directly below primary H2 subheadings",
                "Table format optimization for pricing, sizing, and specification data",
                "Monitoring inclusion rates in Google Search AI Overviews"
            ],
            "benefit": "Your content gets cited at the very top of Google search results inside the AI Overview box."
        },
        {
            "code": "07",
            "title": "AI Search Tracking & Monthly Reporting",
            "desc": "Tracking your brand's presence, citations, and referral traffic from AI platforms.",
            "deliverables": [
                "Referral traffic tracking from ChatGPT, Perplexity, and other AI engines in GA4",
                "Monthly prompt benchmark tracking for 15+ target commercial questions",
                "Competitor displacement tracking in AI recommendations",
                "Summary of published AEO content blocks and entity updates",
                "Quarterly roadmap for emerging search features"
            ],
            "benefit": "You have concrete data showing how often your business is recommended by conversational AI engines."
        }
    ],
    "whoBenefits": [
        {
            "role": "Innovative Tech & SaaS Companies",
            "desc": "Software providers who need to be recommended when prospective buyers ask AI tools for the best software in their niche.",
            "fit": "Software Recommendations"
        },
        {
            "role": "D2C Brands with Niche Products",
            "desc": "E-commerce brands wanting ChatGPT and Perplexity to list their products when users ask for top gifts or product comparisons.",
            "fit": "Product Recommendations"
        },
        {
            "role": "High-Ticket Consultants & Agencies",
            "desc": "Service firms that want AI search engines to recognize their partners and founders as verified industry authorities.",
            "fit": "Thought Leadership & Authority"
        },
        {
            "role": "Healthcare & Wellness Brands",
            "desc": "Clinics and wellness brands providing fact-checked medical information where AI models look for trusted scientific citations.",
            "fit": "Verified Factual Citations"
        },
        {
            "role": "Established Brands Protecting Reputation",
            "desc": "Companies that want to ensure AI search engines provide accurate, positive, and up-to-date facts about their products and pricing.",
            "fit": "Brand Accuracy & Defense"
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "AI Visibility & Prompt Audit",
            "timeline": "Week 1",
            "desc": "We test 25+ target buyer queries across ChatGPT, Perplexity, Gemini, and Claude to assess your current presence.",
            "output": "Baseline AI Visibility Audit Report"
        },
        {
            "step": "02",
            "title": "Entity & Knowledge Graph Audit",
            "timeline": "Week 1–2",
            "desc": "We check your brand's presence across Wikidata, Google Knowledge Graph, Crunchbase, and primary directories.",
            "output": "Entity Mapping & Gap Document"
        },
        {
            "step": "03",
            "title": "Technical AI Crawlability Fixes",
            "timeline": "Week 2",
            "desc": "We configure robots.txt for AI bots, verify fast server rendering, and implement SameAs semantic schema markup.",
            "output": "AI Bot Access & Schema Implementation"
        },
        {
            "step": "04",
            "title": "AEO Content Restructuring",
            "timeline": "Week 3–4",
            "desc": "We rewrite core page sections into concise definition boxes, numbered steps, and comparison tables.",
            "output": "Optimized Answer Engine Content"
        },
        {
            "step": "05",
            "title": "Digital Authority & Citation Building",
            "timeline": "Ongoing",
            "desc": "We secure mentions in high-authority industry listicles and publications that AI engines frequently cite.",
            "output": "Verified Citation Placements"
        },
        {
            "step": "06",
            "title": "Prompt Benchmark Tracking & Review",
            "timeline": "Monthly",
            "desc": "We re-test commercial prompts monthly, track referral traffic from AI platforms, and refine content.",
            "output": "Monthly AI Search Growth Report"
        }
    ],
    "packages": make_packages(
        "Emerging Search & AI Marketing",
        "Select an AI search package based on your industry competition, number of core products, and digital footprint. Public pricing is not displayed on our website; fees are confirmed during consultation.",
        "Foundational AI Visibility & Bot Setup",
        "Best for businesses wanting to ensure AI search engines can crawl their site and understand their basic brand facts.",
        [
            "Initial prompt audit across ChatGPT, Perplexity, and Google Gemini (15 queries)",
            "Robots.txt setup ensuring GPTBot and PerplexityBot can crawl content",
            "SameAs entity schema markup implementation",
            "Optimization of 5 core website pages with concise AEO definition boxes",
            "Google Knowledge Panel claim and attribute review",
            "Quarterly AI prompt re-audit and report"
        ],
        "Active Answer Engine Optimization (AEO)",
        "Best for competitive brands, SaaS platforms, and e-commerce stores wanting to be actively recommended by AI tools.",
        [
            "Everything in Orbit package",
            "In-depth prompt benchmark testing across 35+ commercial search queries",
            "Optimization of up to 15 core product or service pages with comparison tables and FAQs",
            "Targeted Google AI Overviews formatting sprints",
            "Digital citation outreach to industry comparison articles and listicles",
            "Wikidata entry research and submission guidance",
            "GA4 AI search engine referral traffic dashboard",
            "Monthly strategy call and prompt monitoring report"
        ],
        "Complete Entity Authority & AI Search Dominance",
        "Designed for industry leaders, high-growth startups, and brands requiring continuous prompt monitoring and multi-channel citation defense.",
        [
            "Everything in Nova package",
            "Continuous tracking of 75+ commercial prompts across all major AI engines",
            "Comprehensive brand entity mapping across international registries",
            "Active digital PR to secure co-mentions in high-authority publications",
            "Competitor displacement strategy in conversational AI results",
            "Executive and founder personal entity optimization",
            "Dedicated AI search strategist and quarterly roadmap",
            "Priority testing for newly released AI search models"
        ]
    ),
    "faqs": [
        {
            "q": "What is the difference between traditional SEO and AI search marketing?",
            "a": "Traditional SEO focuses on ranking a web page on Google's search results page for specific keywords. AI search marketing (AEO) focuses on getting conversational AI models (like ChatGPT and Perplexity) to cite your brand and recommend your products in synthesized answers."
        },
        {
            "q": "Can you guarantee that ChatGPT or Perplexity will recommend my business?",
            "a": "No third party can force an AI language model to generate a specific output. However, by establishing verified entity data, formatting direct answers, and securing citations in trusted sources, we drastically increase the probability of your brand being recommended."
        },
        {
            "q": "Does Google AI Overviews replace traditional search rankings?",
            "a": "Google AI Overviews appears at the top of search results for many complex questions. Being cited inside this AI overview gives you prime visibility above standard organic listings."
        },
        {
            "q": "Should I block GPTBot in my robots.txt file?",
            "a": "If you want AI tools like ChatGPT Search to discover, understand, and recommend your products to potential buyers, you should allow GPTBot to crawl your public informational pages."
        },
        {
            "q": "How does an AI engine know which company to recommend?",
            "a": "AI models synthesize information from authoritative websites, comparison articles, verified product reviews, Wikipedia/Wikidata entities, and structured web data to determine which businesses are legitimate and trustworthy."
        },
        {
            "q": "Can this service help fix incorrect information ChatGPT says about my company?",
            "a": "Yes. When AI provides outdated pricing, wrong addresses, or discontinued products, we work to update your structured schema data, Google Business profile, Wikidata, and core web pages to clarify the correct factual record."
        },
        {
            "q": "How do you track if people come to my site from ChatGPT or Perplexity?",
            "a": "We configure custom referral channels in Google Analytics 4 (GA4) that specifically identify traffic originating from chatgpt.com, perplexity.ai, and other generative AI platforms."
        },
        {
            "q": "Do I need to rewrite my entire website for AI search?",
            "a": "No. We focus on enhancing key high-intent pages by adding concise definition blocks, clean comparison tables, and structured Q&A formats that both humans and AI bots love."
        },
        {
            "q": "Is AI marketing useful for local businesses?",
            "a": "Yes. More consumers now ask AI engines questions like 'What is the most reputable dental clinic near me?' Having verified entity data and consistent local citations helps AI engines recommend your local business."
        },
        {
            "q": "How long does it take for AI search engines to update their recommendations?",
            "a": "Real-time search tools like Perplexity and ChatGPT Search can reflect web updates within days or weeks. Larger foundational model retraining cycles take longer, which is why establishing entity authority early is so valuable."
        }
    ],
    "enquiryForm": {
        "title": "Request an AI Search Visibility Audit",
        "subtitle": "Discover how ChatGPT, Perplexity, and Google AI Overviews currently perceive and recommend your brand.",
        "platformQuestion": "What is your current AI search visibility?",
        "platformOptions": [
            "Never tested brand on AI search",
            "AI engines recommend competitors",
            "Looking to protect and scale existing presence"
        ],
        "serviceOptions": [
            "AI Engine Brand & Competitor Prompt Audit",
            "Answer Engine Optimization (AEO) Content Blocks",
            "Brand Entity & Schema Markup (SameAs)",
            "Google AI Overviews Formatting Sprints",
            "Robots.txt & AI Bot Crawlability Configuration",
            "Wikidata & Google Knowledge Panel Guidance",
            "Digital Citations & Listicle Outreach",
            "GA4 AI Referral Traffic Dashboard"
        ],
        "scaleQuestion": "Current Digital Presence Stage",
        "scaleOptions": [
            "Early-stage website / Startup",
            "Established regional business",
            "National brand with active marketing",
            "Enterprise / Multi-national brand"
        ],
        "businessTypes": [
            "Software / SaaS", "E-Commerce / D2C Brand", 
            "Professional Services / Consultancy", "Healthcare / Clinic", 
            "B2B Manufacturer", "Other"
        ],
        "submitButton": "Request My AI Search Audit"
    },
    "seo": {
        "title": "Emerging Search & AI Marketing Services | E-COMET OUTVERSE",
        "description": "Optimize your brand for ChatGPT, Perplexity, and Google AI Overviews with E-COMET OUTVERSE. Answer Engine Optimization (AEO), entity building, and AI citation tracking.",
        "slug": "/services/emerging-search-ai-marketing",
        "primaryKeyword": "AI Search Engine Optimization",
        "secondaryKeywords": [
            "Answer Engine Optimization", "AEO Agency", "ChatGPT Brand Optimization", 
            "Perplexity Optimization", "Google AI Overviews SEO"
        ]
    }
}

# =========================================================================
# 7. Local SEO & Local Digital Marketing
# =========================================================================
div2_services["local-seo"] = {
    "id": "local-seo",
    "slug": "local-seo",
    "title": "Local SEO & Local Digital Marketing",
    "division": "Division 2: Search Visibility & Local Marketing",
    "category": "Digital Marketing",
    "pillarId": "marketing",
    "colorHex": "#F59E0B",
    "hero": {
        "headline": "Rank in the Google 3-Pack & Win Local Customers",
        "subheadline": "Help nearby buyers find your business, call your team, and visit your store when they search on Google Maps.",
        "description": "When people search for services 'near me', over 70% choose one of the top 3 businesses shown in the Google Maps 3-Pack. E-COMET OUTVERSE helps local businesses, clinics, showrooms, and service providers optimize their Google Business Profile, clean up local directory listings, collect authentic reviews, and dominate local search rankings in their territory.",
        "primaryCta": "Request a Local SEO Audit",
        "secondaryCta": "Explore Packages"
    },
    "about": {
        "title": "Turn Local Google Searches into Phone Calls and In-Store Visits",
        "paragraphs": [
            "Local search is one of the highest-converting marketing channels available. Customers searching for a dentist, interior designer, repair service, or boutique retail store in their city have immediate buying intent.",
            "However, ranking in the Google Maps top 3 results requires more than just creating a profile. You need consistent business information across all local directories, active weekly photo and post updates, the right primary and secondary business categories, and a steady stream of authentic customer reviews.",
            "E-COMET OUTVERSE manages your entire local digital footprint. We optimize your Google Business Profile, ensure 100% NAP (Name, Address, Phone) consistency across the web, build localized website landing pages, and track phone calls and driving direction requests."
        ]
    },
    "capabilities": [
        {
            "code": "01",
            "title": "Google Business Profile (GBP) Optimization",
            "desc": "Setting up and fine-tuning every single field of your official Google Business Profile.",
            "deliverables": [
                "Primary and secondary business category selection based on competitor data",
                "Compelling business description with natural local keyword integration",
                "Complete service and product menu configuration with pricing and descriptions",
                "Accurate operating hours, holiday schedules, and contact details",
                "Attributes and amenities setup (wheelchair access, parking, Wi-Fi, etc.)"
            ],
            "benefit": "Your Google Maps profile is 100% complete, verified, and prioritized by Google's local algorithm."
        },
        {
            "code": "02",
            "title": "Google 3-Pack Maps Ranking Optimization",
            "desc": "Optimizing local proximity and relevance signals to win top-3 map placement.",
            "deliverables": [
                "Geo-relevance signal enhancement connecting your profile to local neighborhood terms",
                "Service area definition (postal codes, radius, and satellite towns)",
                "Local business schema markup implementation on your website",
                "Embedded Google Map and NAP footer integration on your website",
                "Monitoring map ranking positions across different physical coordinates"
            ],
            "benefit": "Nearby customers see your business at the very top of Google Maps instead of your local competitors."
        },
        {
            "code": "03",
            "title": "Local Citation & Directory Cleanup",
            "desc": "Ensuring your business Name, Address, and Phone (NAP) are identical everywhere online.",
            "deliverables": [
                "Comprehensive citation audit identifying inconsistent addresses and old phone numbers",
                "Submissions to primary Indian business directories (Justdial, IndiaMART, Sulekha, TradeIndia)",
                "Submissions to global mapping platforms (Bing Places, Apple Maps, YellowPages)",
                "Duplicate listing suppression and removal of rogue unclaimed profiles",
                "Consistent website URL and social link verification across all citations"
            ],
            "benefit": "Google's search crawlers confirm your business location with absolute confidence, boosting your map authority."
        },
        {
            "code": "04",
            "title": "Customer Review Growth Strategy",
            "desc": "Ethical systems to help happy customers leave 5-star Google reviews consistently.",
            "deliverables": [
                "Custom short review link and QR code generation for counter displays and invoices",
                "WhatsApp and SMS review request message templates",
                "Professional response drafts for all incoming customer reviews (positive and negative)",
                "Policy-compliant review generation workflows preventing Google review filtering",
                "Highlighting customer reviews on your website for added credibility"
            ],
            "benefit": "Your review count and average rating grow steadily, giving first-time buyers total peace of mind."
        },
        {
            "code": "05",
            "title": "Weekly Google Posts & Geotagged Photos",
            "desc": "Keeping your Google profile fresh with regular photos, offers, and company updates.",
            "deliverables": [
                "Weekly Google Business update posts highlighting current offers, services, and tips",
                "High-resolution exterior, interior, team, and work portfolio photo uploads",
                "Seasonal offer and event post scheduling with direct 'Call Now' buttons",
                "Product showcase additions with photos and direct purchase links",
                "Monitoring photo view metrics and engagement insights"
            ],
            "benefit": "Active profiles receive up to 5x more clicks and directions requests than dormant listings."
        },
        {
            "code": "06",
            "title": "Local Service & Location Pages",
            "desc": "Building dedicated website pages for each city, suburb, or neighborhood you serve.",
            "deliverables": [
                "Dedicated location landing pages optimized for '[Service] in [City/Area]'",
                "Local landmark references, client testimonials, and localized FAQs",
                "Click-to-call phone buttons and WhatsApp direct chat buttons for mobile users",
                "Internal linking structure connecting main services to location pages",
                "Mobile page speed optimization for local on-the-go searchers"
            ],
            "benefit": "You rank organically on regular Google search as well as Google Maps across multiple neighborhoods."
        },
        {
            "code": "07",
            "title": "Local Call Tracking & Lead Reporting",
            "desc": "Clear monthly reporting showing exactly how many calls, direction requests, and clicks you received.",
            "deliverables": [
                "Google Business Profile monthly insights report (phone calls, website clicks, directions)",
                "Local search keyword ranking grid showing your ranking across different miles/km",
                "Review volume and rating sentiment growth summary",
                "Competitor local benchmarking report",
                "Monthly action plan for the coming 30 days"
            ],
            "benefit": "You see clear proof of how many actual phone calls and customer visits our work generated."
        }
    ],
    "whoBenefits": [
        {
            "role": "Healthcare Clinics & Dental Practices",
            "desc": "Doctors, dentists, physiotherapists, and diagnostic labs needing patients in their immediate city.",
            "fit": "Patient Appointments & Calls"
        },
        {
            "role": "Retail Stores, Salons & Showrooms",
            "desc": "Jewellery showrooms, furniture stores, boutiques, and salons relying on footfall and local shoppers.",
            "fit": "In-Store Footfall & Directions"
        },
        {
            "role": "Home Services & Contractors",
            "desc": "Electricians, plumbers, interior designers, and painters who serve specific service areas and neighborhoods.",
            "fit": "Immediate Service Inquiries"
        },
        {
            "role": "Professional Law & Accounting Firms",
            "desc": "Advocates, chartered accountants, and tax advisors wanting high-value local business clients.",
            "fit": "Local Client Consultations"
        },
        {
            "role": "Restaurants, Cafes & Cloud Kitchens",
            "desc": "Food businesses wanting diners to discover their menu, operating hours, and location on Google Maps.",
            "fit": "Dine-In & Takeaway Customers"
        }
    ],
    "process": [
        {
            "step": "01",
            "title": "Local Presence & Citation Audit",
            "timeline": "Week 1",
            "desc": "We audit your Google Business Profile, check NAP consistency across 20+ directories, and analyze local competitors.",
            "output": "Local SEO & Citation Audit Report"
        },
        {
            "step": "02",
            "title": "Profile Verification & Category Optimization",
            "timeline": "Week 1–2",
            "desc": "We select the highest-performing categories, craft business descriptions, and configure service menus.",
            "output": "Fully Optimized Google Business Profile"
        },
        {
            "step": "03",
            "title": "Directory Cleanup & Citations Build",
            "timeline": "Week 2–3",
            "desc": "We correct inconsistent listings on Justdial, IndiaMART, Sulekha, and build new verified local citations.",
            "output": "Verified Local Citations Spreadsheet"
        },
        {
            "step": "04",
            "title": "Website On-Page Local Integration",
            "timeline": "Week 3–4",
            "desc": "We add LocalBusiness schema, embed Google Maps, and optimize footer NAP details and location pages.",
            "output": "Localized Website Architecture"
        },
        {
            "step": "05",
            "title": "Review Growth & Weekly Posts Launch",
            "timeline": "Ongoing",
            "desc": "We launch QR review cards, reply to incoming reviews, and publish weekly photo and offer updates.",
            "output": "Active Weekly Post & Review Schedule"
        },
        {
            "step": "06",
            "title": "Local Rank Tracking & Monthly Review",
            "timeline": "Monthly",
            "desc": "We track Google 3-Pack rankings, monitor call volume, and adjust categories and posts to maintain #1 positions.",
            "output": "Monthly Local Calls & Ranking Report"
        }
    ],
    "packages": make_packages(
        "Local SEO & Local Digital Marketing",
        "Select a local SEO package based on the number of business locations you operate and how competitive your city is. Public pricing is not displayed on our website; fees are confirmed during consultation.",
        "Essential Google Business Profile Setup",
        "Best for single-location businesses needing professional profile setup, category optimization, and basic citation cleanup.",
        [
            "Full Google Business Profile setup and verification guidance",
            "Primary and secondary category optimization",
            "Product and service menu configuration",
            "LocalBusiness schema markup code for your website",
            "Submissions to 10 core Indian business directories",
            "Custom Google review QR code and flyer template",
            "Monthly GBP insights report (calls, clicks, directions)"
        ],
        "Active Google 3-Pack Growth & Citations",
        "Best for competitive local businesses (clinics, salons, showrooms, contractors) wanting to dominate their city territory.",
        [
            "Everything in Orbit package",
            "Submissions and cleanup across 25+ verified local directories",
            "Weekly Google Business posts with custom graphics and CTAs",
            "Professional responses to all incoming customer reviews",
            "High-resolution photo uploads with geo-tagging coordination",
            "Optimization of up to 3 local service/area pages on your website",
            "Duplicate listing removal and rogue profile suppression",
            "Monthly local ranking grid and strategy review call"
        ],
        "Multi-Location Domination & Full Local Care",
        "Designed for businesses with multiple branches, regional franchise networks, and high-competition metro markets.",
        [
            "Everything in Nova package for up to 3 physical locations",
            "Dedicated location pages for every targeted neighborhood and suburb",
            "Submissions across 50+ tier-1 business directories and mapping apps",
            "Automated review request system setup (SMS / WhatsApp integration)",
            "Competitor local spam fighting (reporting fake competitor listings)",
            "Dedicated local SEO account lead",
            "Custom local lead and call attribution dashboard",
            "Priority support and monthly multi-location performance review"
        ]
    ),
    "faqs": [
        {
            "q": "What is the Google Maps 3-Pack?",
            "a": "The Google 3-Pack is the boxed section at the top of Google search results that displays a map and the top 3 local businesses matching the user's search query, complete with star ratings, phone numbers, and addresses."
        },
        {
            "q": "How long does it take to rank in the Google 3-Pack?",
            "a": "Depending on local competition in your city and the age of your profile, initial ranking improvements typically occur within 45 to 60 days. Dominating top positions across a wide radius usually takes 3 to 6 months of consistent posting and review collection."
        },
        {
            "q": "Why is my business not showing up on Google Maps?",
            "a": "Common reasons include incomplete profile verification, choosing incorrect primary categories, inconsistent address data across directories, a lack of customer reviews, or address suspension by Google."
        },
        {
            "q": "Can you help if my Google Business Profile gets suspended?",
            "a": "Yes. We review your profile against Google's official representation guidelines, identify the cause of suspension (such as address violations or naming issues), and prepare formal reinstatement appeals with proper documentation."
        },
        {
            "q": "Do I need a physical address to have a Google Business Profile?",
            "a": "Businesses that serve customers at their location (like stores or clinics) must show their physical address. Businesses that deliver services to customers at their homes (like plumbers or consultants) can create a Service Area Business (SAB) profile without publicly showing their street address."
        },
        {
            "q": "What does NAP consistency mean and why does it matter?",
            "a": "NAP stands for Name, Address, and Phone Number. If your address is listed differently on Justdial, Facebook, and Google (e.g., 'Suite 4' vs 'Plot 4'), Google gets confused about your true location and lowers your map ranking. We ensure 100% exact matching."
        },
        {
            "q": "Can you delete fake or negative reviews on Google?",
            "a": "Google does not allow business owners to simply delete reviews they dislike. However, if a review violates Google's content policies (such as spam, hate speech, or competitor attacks), we can flag and submit formal removal requests to Google support."
        },
        {
            "q": "Do I need a website to rank on Google Maps?",
            "a": "While you can technically create a Google profile without a website, having an optimized website with local schema markup significantly boosts your ranking power and gives customers a place to explore your full services."
        },
        {
            "q": "How do you track the calls generated by Google Maps?",
            "a": "Google Business Profile provides built-in metrics showing how many users clicked 'Call' directly from your map card. We can also integrate dynamic call tracking numbers to record call duration and recordings."
        },
        {
            "q": "How often should I post updates on my Google Business Profile?",
            "a": "We recommend publishing at least 1 to 2 posts per week. Regular posting shows Google and customers that your business is actively operating and gives you opportunities to showcase current promotions."
        }
    ],
    "enquiryForm": {
        "title": "Request a Local SEO & Google Maps Audit",
        "subtitle": "Tell us about your business location and city so we can analyze your local search competition.",
        "platformQuestion": "What is your current Google Maps status?",
        "platformOptions": [
            "Do not have a verified profile yet",
            "Profile exists but ranks poorly",
            "Multiple locations needing management"
        ],
        "serviceOptions": [
            "Google Business Profile Setup & Optimization",
            "Google Maps 3-Pack Ranking Optimization",
            "Local Directory Submissions (Justdial, IndiaMART)",
            "NAP Consistency & Duplicate Cleanup",
            "Customer Review Strategy & Response Templates",
            "Weekly Google Posts & Photo Uploads",
            "Local Service Area Landing Pages",
            "Suspension Recovery & Policy Reinstatement"
        ],
        "scaleQuestion": "Number of Business Locations",
        "scaleOptions": [
            "1 physical location",
            "2–3 locations in same city",
            "4–10 regional locations",
            "10+ multi-city chain"
        ],
        "businessTypes": [
            "Healthcare Clinic / Hospital", "Retail Store / Showroom", 
            "Salon / Spa / Wellness", "Home Services / Contractor", 
            "Professional Firm (Law/CA)", "Restaurant / Cafe", "Other"
        ],
        "submitButton": "Request My Google Maps Audit"
    },
    "seo": {
        "title": "Local SEO & Google Business Profile Services | E-COMET OUTVERSE",
        "description": "Rank in the Google Maps 3-Pack and drive local footfall with E-COMET OUTVERSE. Google Business Profile optimization, local citations, review strategy, and local search marketing.",
        "slug": "/services/local-seo",
        "primaryKeyword": "Local SEO Services",
        "secondaryKeywords": [
            "Google Business Profile Optimization", "Google Maps SEO Agency", 
            "Local Search Marketing", "Local Citation Building", "GMB Management Services"
        ]
    }
}

print(f"Division 2 complete: {len(div2_services)} services configured.")
