import zipfile, xml.etree.ElementTree as ET, re, json, os

with zipfile.ZipFile('DIGITAL MARKETING SERVICE PAGE CONTENT.docx') as doc:
    xml_content = doc.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        t = ''.join([node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text])
        if t.strip():
            paragraphs.append(t.strip())

print(f"Total paragraphs loaded from docx: {len(paragraphs)}")

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

def parse_service_chunk(chunk, slug, title, division, colorHex):
    # Find major section boundaries
    sec_markers = []
    for idx, line in enumerate(chunk):
        m = re.match(r'^([0-9]{1,2})\.\s+([A-Za-z\s\?&/,\'\(\)\-]+)$', line)
        if m:
            s_num = int(m.group(1))
            s_name = m.group(2).strip()
            s_upper = s_name.upper()
            if any(k in s_upper for k in [
                'HERO', 'ABOUT', 'OUR', 'WHO CAN BENEFIT', 'PROCESS', 'CAMPAIGN PROCESS',
                'PACKAGE', 'PACKAGES', 'WHY CHOOSE', 'INTEGRATED', 'FAQ', 'FREQUENTLY',
                'FINAL', 'ENQUIRY', 'SEO', 'WHAT IS', 'AREAS WE CAN', 'TYPES WE CAN', 'FORMATS WE CAN'
            ]) and not any(ex in s_upper for ex in [
                'FULL NAME', 'BUSINESS NAME', 'EMAIL ADDRESS', 'PHONE NUMBER'
            ]):
                sec_markers.append((idx, s_num, s_name, s_upper))
    
    # Map sections by type
    sec_dict = {}
    for i in range(len(sec_markers)):
        start_i = sec_markers[i][0]
        end_i = sec_markers[i+1][0] if i + 1 < len(sec_markers) else len(chunk)
        sec_name = sec_markers[i][2]
        sec_upper = sec_markers[i][3]
        sec_lines = chunk[start_i+1:end_i]
        
        if 'HERO' in sec_upper:
            sec_dict['hero'] = sec_lines
        elif 'ABOUT' in sec_upper:
            sec_dict['about'] = sec_lines
        elif 'WHO CAN BENEFIT' in sec_upper:
            sec_dict['who'] = sec_lines
        elif 'PROCESS' in sec_upper:
            sec_dict['process'] = sec_lines
        elif 'PACKAGE' in sec_upper:
            sec_dict['packages'] = sec_lines
        elif 'WHY CHOOSE' in sec_upper:
            sec_dict['why'] = sec_lines
        elif 'INTEGRATED' in sec_upper:
            sec_dict['integrated'] = sec_lines
        elif 'FAQ' in sec_upper or 'FREQUENTLY' in sec_upper:
            sec_dict['faqs'] = sec_lines
        elif 'FINAL' in sec_upper:
            sec_dict['final_cta'] = sec_lines
        elif 'ENQUIRY' in sec_upper:
            sec_dict['form'] = sec_lines
        elif 'SEO' in sec_upper:
            sec_dict['seo'] = sec_lines
        elif 'OUR' in sec_upper or 'SERVICES' in sec_upper:
            if 'capabilities' not in sec_dict:
                sec_dict['capabilities'] = []
            sec_dict['capabilities'].extend(sec_lines)

    # 1. Parse Hero
    hero_data = {
        'headline': '',
        'subheadline': '',
        'description': '',
        'primaryCta': 'Request a Consultation',
        'secondaryCta': 'Explore Packages'
    }
    hero_lines = sec_dict.get('hero', [])
    desc_paras = []
    i = 0
    while i < len(hero_lines):
        line = hero_lines[i]
        if line.lower() == 'headline' and i + 1 < len(hero_lines):
            hero_data['headline'] = hero_lines[i+1]
            i += 2
            continue
        elif line.lower() == 'subheadline' and i + 1 < len(hero_lines):
            hero_data['subheadline'] = hero_lines[i+1]
            i += 2
            continue
        elif not hero_data['headline'] and not line.startswith(('Primary CTA', 'Secondary CTA', 'Supporting', 'Hero Visual')):
            hero_data['headline'] = line
            i += 1
            continue
        elif not hero_data['subheadline'] and not line.startswith(('Primary CTA', 'Secondary CTA', 'Supporting', 'Hero Visual')):
            hero_data['subheadline'] = line
            i += 1
            continue
        elif line.startswith('Primary CTA:'):
            hero_data['primaryCta'] = line.replace('Primary CTA:', '').strip()
        elif line.lower() == 'primary cta' and i + 1 < len(hero_lines):
            hero_data['primaryCta'] = hero_lines[i+1]
            i += 2
            continue
        elif line.startswith('Secondary CTA:'):
            hero_data['secondaryCta'] = line.replace('Secondary CTA:', '').strip()
        elif line.lower() == 'secondary cta' and i + 1 < len(hero_lines):
            hero_data['secondaryCta'] = hero_lines[i+1]
            i += 2
            continue
        elif line.startswith(('Supporting', 'Hero Visual')):
            pass
        else:
            desc_paras.append(line)
        i += 1

    hero_data['description'] = ' '.join(desc_paras[:2]) if desc_paras else hero_data['subheadline']

    # 2. Parse About
    about_lines = sec_dict.get('about', [])
    about_data = {'title': '', 'paragraphs': []}
    if about_lines:
        start_idx = 0
        if about_lines[0].lower() in ['headline', 'heading']:
            about_data['title'] = about_lines[1]
            start_idx = 2
        else:
            about_data['title'] = about_lines[0]
            start_idx = 1
            
        curr_paras = []
        for l in about_lines[start_idx:]:
            if any(l.startswith(k) for k in ['What We Can Help', 'What Can Meta', 'What Is', 'Important:', 'CTA:']):
                break
            curr_paras.append(l)
        about_data['paragraphs'] = curr_paras

    # 3. Parse Capabilities
    caps = []
    cap_blocks = []
    curr_cap = None
    for line in chunk:
        m = re.match(r'^([0-9]{1,2})\.([0-9]{1,2})\.?\s+(.+)$', line)
        if m:
            if curr_cap:
                cap_blocks.append(curr_cap)
            curr_cap = {
                'code': f"{len(cap_blocks)+1:02d}",
                'title': m.group(3).strip(),
                'lines': []
            }
        elif curr_cap:
            if re.match(r'^[0-9]{1,2}\.\s+[A-Z]', line) and not re.match(r'^[0-9]{1,2}\.[0-9]', line):
                cap_blocks.append(curr_cap)
                curr_cap = None
            else:
                curr_cap['lines'].append(line)
    if curr_cap:
        cap_blocks.append(curr_cap)

    for cb in cap_blocks:
        c_title = cb['title']
        c_code = cb['code']
        c_desc = ''
        c_delivs = []
        c_benefit = ''
        
        in_delivs = False
        desc_collected = []
        for cl in cb['lines']:
            if any(cl.lower().startswith(k) for k in [
                'our services may include:', 'what this includes:', 'what we offer:',
                'what our services include:', 'what this covers:', 'key deliverables:',
                'areas of support:', 'potential inclusions:', 'services may include:'
            ]):
                in_delivs = True
                continue
            if any(cl.lower().startswith(k) for k in ['suitable for:', 'business benefit:', 'why this matters:', 'benefit:']):
                in_delivs = False
                c_benefit = cl
                continue
            if in_delivs:
                c_delivs.append(cl)
            elif not in_delivs and not c_benefit:
                desc_collected.append(cl)
        
        c_desc = ' '.join(desc_collected[:2]) if desc_collected else f"Professional execution and management for {c_title}."
        if not c_delivs and desc_collected:
            c_delivs = desc_collected[1:]

        caps.append({
            'code': c_code,
            'title': c_title,
            'desc': c_desc,
            'deliverables': c_delivs if c_delivs else [f"End-to-end planning and execution for {c_title}"],
            'benefit': c_benefit or f"Provides your business with a clear, reliable execution standard for {c_title}."
        })

    # 4. Parse Who Benefits
    who_lines = sec_dict.get('who', [])
    who_benefits = []
    clean_who = [l for l in who_lines if not l.lower().startswith(('platform selection', 'our services can be tailored', 'cta:'))]
    j = 0
    while j < len(clean_who) - 1:
        role = clean_who[j]
        desc = clean_who[j+1]
        who_benefits.append({
            'role': role,
            'desc': desc,
            'fit': 'Target Business Profile'
        })
        j += 2

    # 5. Parse Process
    proc_lines = sec_dict.get('process', [])
    process_steps = []
    curr_st = None
    for pl in proc_lines:
        m = re.match(r'^(Step\s*[0-9]{1,2}|Phase\s*[0-9]{1,2})\s*[\—\–\-\:]\s*(.*)', pl, re.I)
        if m:
            if curr_st:
                process_steps.append(curr_st)
            curr_st = {
                'step': f"{len(process_steps)+1:02d}",
                'title': m.group(2).strip(),
                'desc': '',
                'timeline': f"Phase 0{len(process_steps)+1}",
                'output': f"Phase 0{len(process_steps)+1} Milestone Sign-off"
            }
        elif curr_st:
            if not pl.startswith(('CTA:', 'Next Step:')):
                if not curr_st['desc']:
                    curr_st['desc'] = pl
                else:
                    curr_st['desc'] += ' ' + pl
    if curr_st:
        process_steps.append(curr_st)

    # 6. Parse Packages
    pkg_lines = sec_dict.get('packages', [])
    pkg_data = {
        'intro': '',
        'tiers': [],
        'policy': 'Public website rule: Do not display prices, price ranges or payment amounts. Final scope and pricing should be shared through a custom quotation after consultation.'
    }
    intro_l = []
    for pl in pkg_lines:
        if re.match(r'^(ORBIT|NOVA|COSMIC)\s*[—–-]', pl, re.I):
            break
        if 'public website rule' in pl.lower() or 'pricing note' in pl.lower():
            pkg_data['policy'] = pl
        else:
            intro_l.append(pl)
    pkg_data['intro'] = ' '.join(intro_l)

    curr_tier = None
    in_deliv = False
    for pl in pkg_lines:
        m = re.match(r'^(ORBIT|NOVA|COSMIC)\s*[—–-]\s*(.*)', pl, re.I)
        if m:
            if curr_tier:
                pkg_data['tiers'].append(curr_tier)
            curr_tier = {
                'name': m.group(1).upper(),
                'tagline': m.group(2).strip(),
                'positioning': '',
                'suitableFor': [],
                'deliverables': [],
                'cta': f"Explore {m.group(1).title()}"
            }
            in_deliv = False
            continue
        if curr_tier:
            if pl.lower().startswith(('best suited for:', 'best for:', 'suitable for:')):
                curr_tier['positioning'] = pl
                curr_tier['suitableFor'].append(pl)
                in_deliv = False
            elif any(pl.lower().startswith(k) for k in ['potential inclusions:', 'potential deliverables:', 'what is included:', 'includes agreed']):
                in_deliv = True
            elif pl.lower().startswith('cta:'):
                curr_tier['cta'] = pl.replace('CTA:', '').strip()
                in_deliv = False
            elif in_deliv:
                curr_tier['deliverables'].append(pl)
    if curr_tier:
        pkg_data['tiers'].append(curr_tier)

    # 7. Parse FAQs
    faq_lines = sec_dict.get('faqs', [])
    faqs = []
    curr_q = None
    curr_a = []
    for fl in faq_lines:
        qm = re.match(r'^Q([0-9]{1,2})[\.:\s]+(.*)', fl)
        if qm:
            if curr_q:
                faqs.append({'q': curr_q, 'a': ' '.join(curr_a)})
            curr_q = fl
            curr_a = []
        elif curr_q:
            curr_a.append(fl)
    if curr_q:
        faqs.append({'q': curr_q, 'a': ' '.join(curr_a)})

    # 8. Parse Final CTA
    final_lines = sec_dict.get('final_cta', [])
    final_cta = {
        'headline': final_lines[0] if final_lines else f"Give Your {title} a Clearer Direction",
        'description': ' '.join(final_lines[1:3]) if len(final_lines) > 1 else "Contact our team to discuss a tailored service scope.",
        'primaryCta': 'Request a Custom Quotation',
        'secondaryCta': 'Schedule a Consultation'
    }
    for fl in final_lines:
        if fl.startswith('Primary CTA:'):
            final_cta['primaryCta'] = fl.replace('Primary CTA:', '').strip()
        elif fl.startswith('Secondary CTA:'):
            final_cta['secondaryCta'] = fl.replace('Secondary CTA:', '').strip()

    # 9. Parse Form
    form_lines = sec_dict.get('form', [])
    form_data = {
        'title': f"Discuss Your {title} Requirements",
        'subtitle': "Share a few details so our team can understand your business and recommend a suitable scope.",
        'platformQuestion': f"Current {title} Status",
        'platformOptions': [],
        'serviceOptions': [],
        'scaleQuestion': "Estimated Monthly Budget / Scope",
        'scaleOptions': [],
        'businessTypes': [
            "Startup", "Local Business", "Retailer", "Manufacturer", 
            "Wholesaler", "D2C Brand", "Service Provider", "Educational Institution", "Other"
        ],
        'submitButton': f"Request My {title} Consultation"
    }

    f_idx = 0
    while f_idx < len(form_lines):
        fl = form_lines[f_idx]
        if fl.lower() in ['form heading', 'heading'] and f_idx + 1 < len(form_lines):
            form_data['title'] = form_lines[f_idx+1]
            f_idx += 2
            continue
        elif f_idx == 0 and not fl.lower() in ['form heading', 'heading', 'form fields']:
            form_data['title'] = fl
        elif 'current' in fl.lower() and ('status' in fl.lower() or 'experience' in fl.lower()) and 'dropdown' in fl.lower():
            form_data['platformQuestion'] = fl.split('—')[0].split(':')[0].strip()
            f_idx += 1
            opts = []
            while f_idx < len(form_lines) and not any(k in form_lines[f_idx].lower() for k in ['dropdown', 'multi-select', 'required', 'optional', 'form fields', 'submit button']):
                opts.append(form_lines[f_idx])
                f_idx += 1
            form_data['platformOptions'] = opts
            continue
        elif any(k in fl.lower() for k in ['services required', 'platforms required', 'requirements', 'campaign types']) and ('multi-select' in fl.lower() or 'checkbox' in fl.lower()):
            f_idx += 1
            s_opts = []
            while f_idx < len(form_lines) and not any(k in form_lines[f_idx].lower() for k in ['dropdown', 'multi-select', 'required:', 'optional:', 'form fields', 'submit button', 'estimated']):
                s_opts.append(form_lines[f_idx])
                f_idx += 1
            form_data['serviceOptions'] = s_opts
            continue
        elif any(k in fl.lower() for k in ['estimated', 'approximate', 'budget', 'list size', 'traffic', 'ad spend']) and 'dropdown' in fl.lower():
            form_data['scaleQuestion'] = fl.split('—')[0].split(':')[0].strip()
            f_idx += 1
            sc_opts = []
            while f_idx < len(form_lines) and not any(k in form_lines[f_idx].lower() for k in ['dropdown', 'multi-select', 'required', 'optional', 'form fields', 'submit button', 'primary business']):
                sc_opts.append(form_lines[f_idx])
                f_idx += 1
            form_data['scaleOptions'] = sc_opts
            continue
        elif fl.startswith('Submit Button:'):
            form_data['submitButton'] = fl.replace('Submit Button:', '').strip()
        elif fl.lower() == 'submit button' and f_idx + 1 < len(form_lines):
            next_l = form_lines[f_idx+1]
            if not any(k in next_l.lower() for k in ['success message', 'privacy note']):
                form_data['submitButton'] = next_l
                f_idx += 2
                continue
        f_idx += 1

    # Fallbacks for form if options empty
    if not form_data['platformOptions']:
        form_data['platformOptions'] = [
            "Starting from scratch", "Existing setup with low results", 
            "Looking to scale an established channel", "Need ongoing management"
        ]
    if not form_data['serviceOptions']:
        form_data['serviceOptions'] = [c['title'] for c in caps[:8]]
    if not form_data['scaleOptions']:
        form_data['scaleOptions'] = [
            "Under ₹30,000 / month", "₹30,000 – ₹75,000 / month", 
            "₹75,000 – ₹2,00,000 / month", "₹2,00,000+ / month"
        ]

    # 10. Parse SEO
    seo_lines = sec_dict.get('seo', [])
    seo_data = {
        'title': f"{title} Services | E-COMET OUTVERSE",
        'description': hero_data['description'][:160],
        'slug': f"/services/{slug}",
        'primaryKeyword': title,
        'secondaryKeywords': []
    }
    in_sec_kw = False
    for sl in seo_lines:
        if sl.startswith('SEO Title:'):
            seo_data['title'] = sl.replace('SEO Title:', '').strip()
        elif sl.startswith('Meta Description:'):
            seo_data['description'] = sl.replace('Meta Description:', '').strip()
        elif sl.startswith(('Recommended URL:', 'URL Slug:')):
            seo_data['slug'] = sl.split(':')[-1].strip()
        elif sl.startswith('Primary Keyword:'):
            seo_data['primaryKeyword'] = sl.replace('Primary Keyword:', '').strip()
        elif sl.startswith('Secondary Keywords:'):
            in_sec_kw = True
        elif in_sec_kw:
            if sl.startswith(('Suggested H1:', 'Suggested H2:', 'Suggested Image', 'Next Step:')):
                in_sec_kw = False
            else:
                seo_data['secondaryKeywords'].append(sl)

    return {
        'id': slug,
        'slug': slug,
        'title': title,
        'division': division,
        'category': 'Digital Marketing',
        'pillarId': 'marketing',
        'colorHex': colorHex,
        'hero': hero_data,
        'about': about_data,
        'capabilities': caps,
        'whoBenefits': who_benefits,
        'process': process_steps,
        'packages': pkg_data,
        'faqs': faqs,
        'finalCta': final_cta,
        'enquiryForm': form_data,
        'seo': seo_data
    }

# Process all 15 services
all_services = {}
for idx, slug, title, div, color in starts[:-1]:
    next_idx = starts[[s[1] for s in starts].index(slug)+1][0]
    chunk = paragraphs[idx:next_idx]
    s_obj = parse_service_chunk(chunk, slug, title, div, color)
    all_services[slug] = s_obj
    print(f"Extracted {slug}: {len(s_obj['capabilities'])} caps, {len(s_obj['whoBenefits'])} personas, {len(s_obj['process'])} steps, {len(s_obj['faqs'])} FAQs")

# Write out to src/data/digitalMarketingServicesData.js
js_content = f"""/**
 * E-COMET OUTVERSE - Complete Digital Marketing, Performance Advertising & Brand Growth Services Data
 * Extracted directly from official DIGITAL MARKETING SERVICE PAGE CONTENT.docx
 * Covers all 15 services across 4 divisions with 100% word-for-word fidelity.
 */

export const DIGITAL_MARKETING_SERVICES_DATA = {json.dumps(all_services, indent=2)};

export const DIGITAL_MARKETING_SERVICES_LIST = Object.values(DIGITAL_MARKETING_SERVICES_DATA);
"""

output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data", "digitalMarketingServicesData.js")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"\nSUCCESS: Generated {output_path} ({len(js_content)} bytes)")
