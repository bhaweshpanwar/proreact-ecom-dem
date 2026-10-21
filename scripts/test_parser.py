import zipfile, xml.etree.ElementTree as ET, re, json

with zipfile.ZipFile('DIGITAL MARKETING SERVICE PAGE CONTENT.docx') as doc:
    xml_content = doc.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        t = ''.join([node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text])
        if t.strip():
            paragraphs.append(t.strip())

starts = [
    (2, 'social-media-management', 'Social Media Management', 'Division 1: Social Media & Paid Advertising', '#E1306C'),
    (514, 'meta-ads', 'Meta Ads', 'Division 1: Social Media & Paid Advertising', '#0668E1'),
    (1001, 'google-ads', 'Google Ads', 'Division 1: Social Media & Paid Advertising', '#4285F4'),
    (1565, 'youtube-ads', 'YouTube Ads', 'Division 1: Social Media & Paid Advertising', '#FF0000'),
    (2146, 'seo', 'Search Engine Optimization (SEO)', 'Division 2: Search Visibility & Local Marketing', '#10B981'),
    (2747, 'emerging-search-ai-marketing', 'Emerging Search & AI Marketing', 'Division 2: Search Visibility & Local Marketing', '#8B5CF6'),
    (3187, 'local-seo', 'Local SEO & Local Digital Marketing', 'Division 2: Search Visibility & Local Marketing', '#F59E0B'),
    (3684, 'lead-generation', 'Lead Generation & Conversion', 'Division 3: Content & Customer Acquisition', '#2563EB'),
    (4221, 'content-marketing-online-growth', 'Content Marketing & Online Growth', 'Division 3: Content & Customer Acquisition', '#059669'),
    (4739, 'email-marketing', 'Email Marketing', 'Division 3: Content & Customer Acquisition', '#EA580C'),
    (5223, 'sms-campaigns', 'SMS Campaigns', 'Division 3: Content & Customer Acquisition', '#0284C7'),
    (5705, 'whatsapp-marketing', 'WhatsApp Marketing', 'Division 3: Content & Customer Acquisition', '#25D366'),
    (6217, 'influencer-affiliate-partnerships', 'Influencer, Affiliate & Partnership Marketing', 'Division 3: Content & Customer Acquisition', '#EC4899'),
    (6861, 'marketing-analytics-automation', 'Marketing Analytics & Automation', 'Division 4: Marketing Intelligence & Optimization', '#6366F1'),
    (7427, 'cro', 'Conversion Rate Optimization (CRO)', 'Division 4: Marketing Intelligence & Optimization', '#14B8A6'),
    (len(paragraphs), 'end', 'end', 'end', '#000000')
]

for s_idx in range(len(starts)-1):
    idx, slug, title, div, color = starts[s_idx]
    next_idx = starts[s_idx+1][0]
    chunk = paragraphs[idx:next_idx]

    # Find FAQs
    faqs = []
    curr_q = None
    curr_a = []
    in_faq = False

    for line in chunk:
        if re.search(r'^[0-9]{1,2}\.\s+(FREQUENTLY ASKED QUESTIONS|FAQ)', line, re.I):
            in_faq = True
            continue
        if in_faq and re.match(r'^[0-9]{1,2}\.\s+[A-Z]', line) and not line.startswith('Q'):
            # next section
            in_faq = False
            if curr_q:
                faqs.append((curr_q, ' '.join(curr_a)))
                curr_q = None
                curr_a = []
            continue
        if in_faq:
            q_match = re.match(r'^Q([0-9]{1,2})[\.:\s]+(.*)', line)
            if q_match:
                if curr_q:
                    faqs.append((curr_q, ' '.join(curr_a)))
                curr_q = line
                curr_a = []
            elif curr_q:
                curr_a.append(line)
    if curr_q:
        faqs.append((curr_q, ' '.join(curr_a)))

    print(f"{slug}: found {len(faqs)} FAQs")

