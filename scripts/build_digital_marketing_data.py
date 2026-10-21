import json, sys, os

# Add scripts directory to path if needed
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from generate_dm_division_1 import div1_services
from generate_dm_division_2 import div2_services
from generate_dm_division_3 import div3_services
from generate_dm_division_4 import div4_services

all_services = {}
all_services.update(div1_services)
all_services.update(div2_services)
all_services.update(div3_services)
all_services.update(div4_services)

print(f"Total services assembled: {len(all_services)}")

# List of expected 15 IDs
expected_ids = [
    # Division 1
    "social-media-management",
    "meta-ads",
    "google-ads",
    "youtube-ads",
    # Division 2
    "seo",
    "emerging-search-ai-marketing",
    "local-seo",
    # Division 3
    "lead-generation",
    "content-marketing-online-growth",
    "email-marketing",
    "sms-campaigns",
    "whatsapp-marketing",
    "influencer-affiliate-partnerships",
    # Division 4
    "marketing-analytics-automation",
    "cro"
]

for sid in expected_ids:
    if sid not in all_services:
        raise ValueError(f"Missing expected service ID: {sid}")

# Validate each service
required_fields = [
    "id", "slug", "title", "division", "category", "pillarId", "colorHex",
    "hero", "about", "capabilities", "whoBenefits", "process", "packages",
    "faqs", "enquiryForm", "seo"
]

for sid, s in all_services.items():
    for f in required_fields:
        if f not in s:
            raise ValueError(f"Service '{sid}' is missing required field '{f}'")
    
    assert len(s["capabilities"]) >= 7, f"Service '{sid}' has only {len(s['capabilities'])} capabilities"
    assert len(s["whoBenefits"]) >= 5, f"Service '{sid}' has only {len(s['whoBenefits'])} whoBenefits"
    assert len(s["process"]) == 6, f"Service '{sid}' has {len(s['process'])} process steps (expected 6)"
    assert len(s["packages"]["tiers"]) == 3, f"Service '{sid}' tiers != 3"
    assert len(s["faqs"]) >= 10, f"Service '{sid}' has only {len(s['faqs'])} FAQs"
    assert len(s["enquiryForm"]["serviceOptions"]) >= 6, f"Service '{sid}' has too few form service options"

print("All 15 Digital Marketing services passed comprehensive validation!")

# Export to src/data/digitalMarketingServicesData.js
js_content = f"""/**
 * E-COMET OUTVERSE - Complete Digital Marketing, Performance Advertising & Brand Growth Services Data
 * Covers all 15 services across 4 divisions with full text depth, grounded English language,
 * 7-9 core capabilities each, audience personas, 6-stage roadmap, 3 packages, 10-12 FAQs,
 * and custom tailored enquiry forms.
 */

export const DIGITAL_MARKETING_SERVICES_DATA = {json.dumps(all_services, indent=2)};

export const DIGITAL_MARKETING_SERVICES_LIST = Object.values(DIGITAL_MARKETING_SERVICES_DATA);
"""

output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data", "digitalMarketingServicesData.js")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated: {output_path} ({len(js_content)} bytes)")
