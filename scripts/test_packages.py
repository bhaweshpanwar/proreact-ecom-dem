import zipfile, xml.etree.ElementTree as ET, re

with zipfile.ZipFile('DIGITAL MARKETING SERVICE PAGE CONTENT.docx') as doc:
    xml_content = doc.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        t = ''.join([node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text])
        if t.strip():
            paragraphs.append(t.strip())

starts = [
    (2, 'social-media-management'),
    (514, 'meta-ads'),
    (1001, 'google-ads'),
    (1565, 'youtube-ads'),
    (2146, 'seo'),
    (2747, 'emerging-search-ai-marketing'),
    (3187, 'local-seo'),
    (3684, 'lead-generation'),
    (4221, 'content-marketing-online-growth'),
    (4739, 'email-marketing'),
    (5223, 'sms-campaigns'),
    (5705, 'whatsapp-marketing'),
    (6217, 'influencer-affiliate-partnerships'),
    (6861, 'marketing-analytics-automation'),
    (7427, 'cro'),
    (len(paragraphs), 'end')
]

for s_idx in range(len(starts)-1):
    idx, slug = starts[s_idx]
    next_idx = starts[s_idx+1][0]
    chunk = paragraphs[idx:next_idx]

    in_pkg = False
    pkg_lines = []
    tiers_found = []
    for line in chunk:
        if re.search(r'^[0-9]{1,2}\.\s+.*PACKAGES?', line, re.I):
            in_pkg = True
            continue
        if in_pkg and re.match(r'^[0-9]{1,2}\.\s+[A-Z]', line) and not any(k in line.upper() for k in ['ORBIT', 'NOVA', 'COSMIC']):
            in_pkg = False
            continue
        if in_pkg:
            for t_name in ['ORBIT', 'NOVA', 'COSMIC']:
                if re.match(rf'^{t_name}\s*[—–-]', line) or line.strip() == t_name:
                    tiers_found.append(line.strip())

    print(f"{slug}: found {len(tiers_found)} tiers -> {tiers_found}")
