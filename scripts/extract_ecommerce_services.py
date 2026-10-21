import zipfile, xml.etree.ElementTree as ET, re, json, os

with zipfile.ZipFile('ECOMMERCE MAN. ALL SERVICE PAGE.docx') as doc:
    xml_content = doc.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        runs = []
        for r in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}r'):
            is_bold = r.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}rPr/{http://schemas.openxmlformats.org/wordprocessingml/2006/main}b') is not None
            t = ''.join([node.text for node in r.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text])
            if t:
                runs.append((is_bold, t))
        if runs:
            full_t = ''
            for idx, (b, text) in enumerate(runs):
                if idx > 0 and not full_t.endswith(' ') and not text.startswith(' ') and not text.startswith(('.', ',', ':', ';', '!', '?', ')', '/')):
                    full_t += ' '
                full_t += text
            paragraphs.append({'runs': runs, 'text': full_t.strip()})

print(f"Total paragraphs loaded: {len(paragraphs)}")

starts = [
    ('amazon-india-management', 'Amazon India Management', 'Indian Marketplace Management', '#FF9900', 2),
    ('flipkart-management', 'Flipkart Management', 'Indian Marketplace Management', '#2874F0', 379),
    ('duo-amazon-flipkart', 'DUO (AMAZON + FLIPKART)', 'Indian Marketplace Management', '#6366F1', 816),
    ('meesho-management', 'Meesho Management', 'Indian Marketplace Management', '#F43397', 1325),
    ('myntra-management', 'Myntra Management', 'Indian Marketplace Management', '#FF3F6C', 1750),
    ('ajio-management', 'AJIO Management', 'Indian Marketplace Management', '#2C4152', 2215),
    ('nykaa-management', 'Nykaa Management', 'Indian Marketplace Management', '#FC2779', 2684),
    ('jiomart-management', 'JioMart Management', 'Indian Marketplace Management', '#0C5273', 3154),
    ('snapdeal-management', 'Snapdeal Management', 'Indian Marketplace Management', '#E40046', 3560),
    ('firstcry-management', 'FirstCry Management', 'Indian Marketplace Management', '#E65A28', 3970),
    ('shopsy-management', 'Shopsy Management', 'Indian Marketplace Management', '#FF6161', 4411),
    ('amazon-global-management', 'Amazon Global Management', 'International Marketplace Management', '#00A8E8', 4828),
    ('walmart-marketplace-management', 'Walmart Marketplace Management', 'International Marketplace Management', '#0071DC', 5282),
    ('ebay-marketplace-management', 'eBay Marketplace Management', 'International Marketplace Management', '#E53238', 5740),
    ('etsy-marketplace-management', 'Etsy Marketplace Management', 'International Marketplace Management', '#F1641E', 6202),
    ('shopify-store-management', 'Shopify store management', 'Online Store Management', '#96BF48', 6670),
    ('woocommerce-store-management', 'WooCommerce Store Management', 'Online Store Management', '#7F54B3', 7125),
    ('end', 'end', 'end', '#000000', len(paragraphs))
]

def parse_service(chunk, slug, title, division, colorHex):
    data = {
        'id': slug,
        'slug': slug,
        'title': title,
        'division': division,
        'category': 'E-Commerce Management',
        'pillarId': 'marketplaces',
        'colorHex': colorHex,
        'hero': {},
        'about': {'title': '', 'paragraphs': []},
        'capabilities': [],
        'whoBenefits': [],
        'process': [],
        'packages': {'intro': '', 'tiers': [], 'policy': ''},
        'whyChoose': [],
        'integratedServices': [],
        'faqs': [],
        'finalCta': {},
        'enquiryForm': {
            'title': '',
            'subtitle': '',
            'platformQuestion': '',
            'platformOptions': [],
            'serviceOptions': [],
            'businessTypes': [
                'Manufacturer', 'Wholesaler / Distributor', 'Retailer', 
                'D2C Brand', 'Startup', 'Established Brand', 'Other'
            ]
        },
        'seo': {
            'title': '',
            'description': '',
            'slug': f'/services/{slug}',
            'primaryKeyword': '',
            'secondaryKeywords': []
        }
    }
    
    # 1. Monotonically identify major sections
    section_markers = []
    curr_sec_num = 0
    for idx, p in enumerate(chunk):
        t = p['text']
        m = re.match(r'^([0-9]{1,2})\.\s+([A-Za-z\s\?&/,\'\(\)\-]+)$', t)
        if m:
            s_num = int(m.group(1))
            s_name = m.group(2).strip()
            s_upper = s_name.upper()
            
            if s_num >= curr_sec_num and any(k in s_upper for k in [
                'HERO', 'ABOUT', 'WHAT IS', 'OUR', 'WHO', 'PROCESS',
                'PACKAGE', 'WHY CHOOSE', 'INTEGRATED SERVICES', 'FREQUENTLY', 'FAQ',
                'FINAL CALL', 'ENQUIRY', 'SEO', 'INTERNAL', 'BREADCRUMB'
            ]) and not any(ex in s_upper for ex in [
                'FULL NAME', 'BUSINESS NAME', 'PHONE NUMBER', 'EMAIL ADDRESS', 
                'SERVICES REQUIRED', 'REQUIREMENT-BASED', 'FLEXIBLE SERVICE', 'FASHION BRANDS'
            ]):
                section_markers.append((idx, s_num, s_name, s_upper))
                curr_sec_num = s_num
                
    # Build list of sections with paragraphs
    sections = []
    for i in range(len(section_markers)):
        s_idx, s_num, s_name, s_upper = section_markers[i]
        next_idx = section_markers[i+1][0] if i + 1 < len(section_markers) else len(chunk)
        sec_paras = chunk[s_idx+1:next_idx]
        sections.append((s_num, s_name, s_upper, sec_paras))
        
    for s_num, s_name, s_upper, paras in sections:
        lines = [p['text'] for p in paras]
        
        # 1. HERO SECTION
        if 'HERO' in s_upper:
            h_text = ''
            sh_text = ''
            desc_lines = []
            it = iter(range(len(lines)))
            for j in it:
                line = lines[j]
                if line.startswith('Eyebrow Text:'):
                    continue
                elif line.lower() == 'headline':
                    if j + 1 < len(lines):
                        h_text = lines[j+1]
                elif line.startswith('Headline:'):
                    h_text = line.replace('Headline:', '').strip()
                elif line.lower() == 'subheadline':
                    if j + 1 < len(lines):
                        sh_text = lines[j+1]
                elif line.startswith('Subheadline:'):
                    sh_text = line.replace('Subheadline:', '').strip()
                elif line.lower() in ['supporting text', 'narrative']:
                    if j + 1 < len(lines):
                        desc_lines.append(lines[j+1])
                elif line.startswith('Primary CTA:') or line.startswith('Secondary CTA:'):
                    pass
                elif not h_text and len(line) < 100 and not line.startswith('Eyebrow') and not line.lower() in ['headline', 'subheadline']:
                    h_text = line
                elif not sh_text and len(line) < 150 and not line.lower() in ['headline', 'subheadline']:
                    sh_text = line
                else:
                    if line not in [h_text, sh_text] and not line.lower() in ['headline', 'subheadline', 'supporting text', 'cta buttons', 'request a consultation', 'explore our services'] and not line.startswith('Eyebrow'):
                        desc_lines.append(line)
            data['hero']['headline'] = h_text or title
            data['hero']['subheadline'] = sh_text or 'Build. Optimise. Manage. Grow.'
            data['hero']['description'] = ' '.join(desc_lines) if desc_lines else f"Complete professional management services for {title} by E-COMET OUTVERSE."
            data['hero']['primaryCta'] = 'Request a Consultation'
            data['hero']['secondaryCta'] = 'Explore Packages'

        # 2. ABOUT SECTION
        elif 'ABOUT' in s_upper or 'WHAT IS' in s_upper:
            if lines:
                data['about']['title'] = lines[0] if len(lines[0]) < 120 else s_name
                start_p = 1 if data['about']['title'] == lines[0] else 0
                data['about']['paragraphs'] = [l for l in lines[start_p:] if len(l) > 30]

        # 3. SERVICES / CAPABILITIES
        elif ('SERVICE' in s_upper or 'WHAT WE OFFER' in s_upper) and not any(k in s_upper for k in ['WHO', 'PACKAGE', 'PROCESS', 'WHY', 'INTEGRATED', 'FAQ']):
            curr_cap = None
            cap_idx = 1
            for l in lines:
                sub_m = re.match(r'^(?:(?:3|4)\.)?([0-9]{1,2})\.?\s+(.+)$', l) or re.match(r'^([A-G])\.\s+(.+)$', l) or re.match(r'^([0-9]{1,2}\.[0-9]{1,2})\s+(.+)$', l)
                if sub_m and len(l) < 100 and not l.startswith('Q') and not l.endswith('?'):
                    if curr_cap:
                        data['capabilities'].append(curr_cap)
                    code_val = sub_m.group(1)
                    title_val = sub_m.group(2).strip()
                    title_val = re.sub(r'^[—–\-\:\.]\s*', '', title_val)
                    curr_cap = {
                        'code': code_val if len(code_val) >= 2 else f"0{cap_idx}",
                        'title': title_val,
                        'desc': '',
                        'deliverables': [],
                        'benefit': ''
                    }
                    cap_idx += 1
                elif curr_cap:
                    if l.startswith('Business Benefit'):
                        curr_cap['benefit'] = l.replace('Business Benefit', '').strip(': ')
                    elif l in ['What We Offer', 'Potential deliverables include:', 'Our support may include:']:
                        pass
                    elif len(l) < 120 and (len(curr_cap['deliverables']) > 0 or not curr_cap['desc']):
                        if not curr_cap['desc']:
                            curr_cap['desc'] = l
                        else:
                            curr_cap['deliverables'].append(l)
                    else:
                        if not curr_cap['desc']:
                            curr_cap['desc'] = l
                        else:
                            curr_cap['deliverables'].append(l)
            if curr_cap:
                data['capabilities'].append(curr_cap)

        # 4. WHO CAN BENEFIT
        elif 'WHO' in s_upper or 'BENEFIT' in s_upper:
            curr_role = None
            for p in paras:
                runs = p['runs']
                text = p['text']
                if text.lower().startswith('who can benefit') or text.lower().startswith('who needs') or 'support for eligible' in text.lower() or 'every business' in text.lower():
                    continue
                # Case A: Leading bold run is the role title
                if runs and runs[0][0] and len(runs) > 1 and len(runs[0][1].strip()) < 80 and not runs[0][1].strip().endswith('.'):
                    if curr_role:
                        data['whoBenefits'].append(curr_role)
                    role = runs[0][1].strip()
                    role = re.sub(r'^[0-9]\.[0-9]\s*', '', role)
                    desc = ' '.join([t.strip() for b, t in runs[1:] if t.strip()])
                    curr_role = {'role': role, 'desc': desc}
                # Case B: Standalone title followed by desc line
                elif (re.match(r'^[0-9]\.[0-9]\s+', text) or len(text) < 70) and not text.endswith('.'):
                    if curr_role:
                        data['whoBenefits'].append(curr_role)
                    role = re.sub(r'^[0-9]\.[0-9]\s*', '', text).strip()
                    curr_role = {'role': role, 'desc': ''}
                elif curr_role:
                    curr_role['desc'] = (curr_role['desc'] + ' ' + text).strip()
            if curr_role:
                data['whoBenefits'].append(curr_role)

        # 5. PROCESS
        elif 'PROCESS' in s_upper:
            curr_step = None
            step_count = 1
            for l in lines:
                sm = re.match(r'^(?:Phase|Step)?\s*([0-9]{1,2})[\.:—–\-]?\s*(.+)$', l, re.IGNORECASE)
                if sm and len(l) < 70 and not l.startswith('Q') and not l.endswith('?'):
                    if curr_step:
                        data['process'].append(curr_step)
                    title_clean = sm.group(2).strip()
                    title_clean = re.sub(r'^[—–\-\:\.]\s*', '', title_clean)
                    curr_step = {
                        'step': f"0{step_count}" if step_count < 10 else str(step_count),
                        'title': title_clean,
                        'desc': ''
                    }
                    step_count += 1
                elif curr_step:
                    curr_step['desc'] = (curr_step['desc'] + ' ' + l).strip()
            if curr_step:
                data['process'].append(curr_step)

        # 6. PACKAGES
        elif 'PACKAGE' in s_upper:
            curr_tier = None
            mode = None
            policy_lines = []
            is_policy = False
            for l in lines:
                if ('Package Terms' in l or 'Website Pricing Policy' in l or 'Package Scope & Engagement' in l) and len(data['packages']['tiers']) >= 3:
                    is_policy = True
                if is_policy:
                    policy_lines.append(l)
                    continue
                    
                tm = re.match(r'^(?:[0-9]\.[0-9]\s+)?(ORBIT|NOVA|COSMIC)(?:\s*[\:—–\-]\s*(.*))?$', l, re.IGNORECASE)
                if tm and not any(k in l.lower() for k in ['level', 'includes agreed', 'all applicable', 'display orbit', 'package cards']):
                    if curr_tier:
                        data['packages']['tiers'].append(curr_tier)
                    tier_name = tm.group(1).upper()
                    tagline = tm.group(2).strip() if tm.group(2) else ''
                    curr_tier = {
                        'name': tier_name,
                        'tagline': tagline,
                        'positioning': '',
                        'suitableFor': [],
                        'deliverables': [],
                        'cta': f"Explore {tier_name.capitalize()} Package"
                    }
                    mode = 'tagline'
                elif curr_tier:
                    if 'Package Positioning:' in l:
                        curr_tier['positioning'] = l.replace('Package Positioning:', '').strip()
                    elif any(k in l for k in ['Suitable For:', 'Best suited for:']):
                        if 'Best suited for:' in l:
                            curr_tier['suitableFor'].append(l.replace('Best suited for:', '').strip())
                        mode = 'suitable'
                    elif any(k in l for k in ['Potential Deliverables:', 'Potential inclusions:', 'Includes agreed', 'Deliverables:']):
                        mode = 'deliverables'
                    elif l.startswith('CTA:') or l.startswith('Primary CTA:'):
                        curr_tier['cta'] = re.sub(r'^(?:Primary )?CTA:\s*', '', l).strip()
                    elif mode == 'tagline' and not curr_tier['tagline'] and len(l) < 60:
                        curr_tier['tagline'] = l
                    elif mode == 'suitable' and l and not l.startswith('Scope is confirmed'):
                        curr_tier['suitableFor'].append(l)
                    elif mode == 'deliverables' and l and not l.startswith('Scope is confirmed'):
                        curr_tier['deliverables'].append(l)
                    elif not data['packages']['intro'] and len(l) > 30 and not curr_tier:
                        data['packages']['intro'] = l
            if curr_tier:
                data['packages']['tiers'].append(curr_tier)
            data['packages']['policy'] = ' '.join(policy_lines) if policy_lines else "Scope, deliverables and service fees are confirmed after initial consultation. E-COMET OUTVERSE does not guarantee sales, ranking or specific ROAS."

        # 7. WHY CHOOSE
        elif 'WHY' in s_upper:
            curr_why = None
            for l in lines:
                if (re.match(r'^[0-9]{1,2}\.\s+', l) or len(l) < 65) and not l.endswith('.'):
                    if curr_why:
                        data['whyChoose'].append(curr_why)
                    title_clean = re.sub(r'^[0-9]{1,2}\.\s+', '', l).strip()
                    curr_why = {'title': title_clean, 'desc': ''}
                elif curr_why:
                    curr_why['desc'] = (curr_why['desc'] + ' ' + l).strip()
            if curr_why:
                data['whyChoose'].append(curr_why)
            data['whyChoose'] = [w for w in data['whyChoose'] if len(w['desc']) > 15]

        # 8. INTEGRATED SERVICES
        elif 'INTEGRATED' in s_upper:
            curr_int = None
            for p in paras:
                runs = p['runs']
                text = p['text']
                if 'more than marketplace' in text.lower() or 'as your business' in text.lower():
                    continue
                if runs and runs[0][0] and len(runs) > 1 and len(runs[0][1].strip()) < 80:
                    if curr_int:
                        data['integratedServices'].append(curr_int)
                    curr_int = {'service': runs[0][1].strip(), 'desc': ' '.join([t.strip() for b, t in runs[1:] if t.strip()])}
                elif len(text) < 60 and not text.endswith('.'):
                    if curr_int:
                        data['integratedServices'].append(curr_int)
                    curr_int = {'service': text, 'desc': ''}
                elif curr_int:
                    curr_int['desc'] = (curr_int['desc'] + ' ' + text).strip()
            if curr_int:
                data['integratedServices'].append(curr_int)

        # 9. FAQS
        elif 'FAQ' in s_upper or 'FREQUENTLY' in s_upper:
            curr_faq = None
            for l in lines:
                qm = re.match(r'^(?:Q[0-9]{1,2}[\.:]?\s*|[0-9]{1,2}\.\s+)(.+)$', l)
                if qm or (l.endswith('?') and len(l) < 140):
                    if curr_faq:
                        data['faqs'].append(curr_faq)
                    q_text = qm.group(1) if qm else l
                    curr_faq = {'q': q_text.strip(), 'a': ''}
                elif curr_faq:
                    curr_faq['a'] = (curr_faq['a'] + ' ' + l).strip()
            if curr_faq:
                data['faqs'].append(curr_faq)

        # 10. FINAL CTA
        elif 'CALL TO ACTION' in s_upper or 'FINAL' in s_upper:
            desc_lines = []
            for l in lines:
                if not data['finalCta'].get('headline') and len(l) < 80 and not l.startswith('Primary CTA:'):
                    data['finalCta']['headline'] = l
                elif l.startswith('Primary CTA:'):
                    data['finalCta']['primaryCta'] = l.replace('Primary CTA:', '').strip()
                elif l.startswith('Secondary CTA:'):
                    data['finalCta']['secondaryCta'] = l.replace('Secondary CTA:', '').strip()
                elif not l.startswith('Optional CTA:') and not l.startswith('Closing Brand'):
                    desc_lines.append(l)
            data['finalCta']['description'] = ' '.join(desc_lines)

        # 11. ENQUIRY FORM
        elif 'ENQUIRY' in s_upper:
            data['enquiryForm']['title'] = lines[0] if lines else f"Discuss Your {title} Requirements"
            data['enquiryForm']['subtitle'] = lines[1] if len(lines) > 1 and len(lines[1]) > 30 else "Share your business details so our team can evaluate requirements and discuss a customized scope."
            
            plat_q = ''
            plat_opts = []
            srv_opts = []
            mode = None
            for l in lines:
                if any(pq in l for pq in ['Do You Currently Sell', 'Do You Have an Existing', 'Current Store Status']):
                    plat_q = l
                    mode = 'plat_opts'
                elif any(sq in l for sq in ['Services Required', 'Required Services', 'Required Support']):
                    mode = 'srv_opts'
                elif any(stk in l for stk in ['Approximate', 'Submit Button:', 'Form Confirmation', 'SEO', 'Consent Checkbox']):
                    mode = None
                elif mode == 'plat_opts' and len(l) < 80:
                    plat_opts.append(l)
                elif mode == 'srv_opts' and len(l) < 80:
                    srv_opts.append(l)
            if plat_q:
                data['enquiryForm']['platformQuestion'] = plat_q
                data['enquiryForm']['platformOptions'] = plat_opts
            if srv_opts:
                data['enquiryForm']['serviceOptions'] = srv_opts

        # 12. SEO
        elif 'SEO' in s_upper:
            sec_kws = []
            is_sec_kws = False
            for idx_l, l in enumerate(lines):
                norm = l.strip().rstrip(':').lower()
                if norm in ['seo page title', 'seo title']:
                    if idx_l + 1 < len(lines):
                        data['seo']['title'] = lines[idx_l + 1].strip()
                elif l.startswith('SEO Page Title:') or l.startswith('SEO Title:'):
                    data['seo']['title'] = re.sub(r'^SEO (?:Page )?Title:\s*', '', l).strip()
                    
                elif norm == 'meta description':
                    if idx_l + 1 < len(lines):
                        data['seo']['description'] = lines[idx_l + 1].strip()
                elif l.startswith('Meta Description:'):
                    data['seo']['description'] = l.replace('Meta Description:', '').strip()
                    
                elif norm in ['primary seo keyword', 'primary keyword']:
                    if idx_l + 1 < len(lines):
                        data['seo']['primaryKeyword'] = lines[idx_l + 1].strip()
                elif l.startswith('Primary SEO Keyword:') or l.startswith('Primary Keyword:'):
                    data['seo']['primaryKeyword'] = re.sub(r'^Primary (?:SEO )?Keyword:\s*', '', l).strip()
                    
                elif norm in ['secondary keywords', 'secondary seo keywords']:
                    is_sec_kws = True
                elif 'Secondary Keywords:' in l:
                    is_sec_kws = True
                elif is_sec_kws:
                    if l.startswith('Suggested H1:') or l.startswith('URL Slug:') or l.startswith('Suggested Image Alt') or l.startswith('Heading Structure') or l.startswith('Suggested H2'):
                        is_sec_kws = False
                    elif l and len(l) < 70 and not l.startswith('Suggested'):
                        sec_kws.append(l)
            data['seo']['secondaryKeywords'] = sec_kws

    return data

parsed_services = {}
for i in range(len(starts)-1):
    slug, title, div, color, st = starts[i]
    en = starts[i+1][4]
    chunk = paragraphs[st:en]
    res = parse_service(chunk, slug, title, div, color)
    parsed_services[slug] = res

# Write out to src/data/ecommerceServicesData.js
js_code = "/**\n * E-COMET OUTVERSE - Complete E-Commerce Management Services Data\n * Extracted directly from official ECOMMERCE MAN. ALL SERVICE PAGE.docx\n * Covers all 17 services across 3 divisions with full text fidelity.\n */\n\n"
js_code += f"export const ECOMMERCE_SERVICES_DATA = {json.dumps(parsed_services, indent=2)};\n\n"
js_code += "export const ECOMMERCE_SERVICES_LIST = Object.values(ECOMMERCE_SERVICES_DATA);\n"

out_path = 'src/data/ecommerceServicesData.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(js_code)

print(f"\nSuccessfully wrote all 17 services to {out_path} ({os.path.getsize(out_path)} bytes)")
