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

    steps = []
    curr_step = None
    in_proc = False
    for line in chunk:
        if re.search(r'^[0-9]{1,2}\.\s+.*PROCESS', line, re.I):
            in_proc = True
            continue
        if in_proc and re.match(r'^[0-9]{1,2}\.\s+[A-Z]', line) and not re.search(r'step', line, re.I):
            in_proc = False
            continue
        if in_proc:
            # Check for Step X
            m = re.match(r'^(Step\s*[0-9]{1,2}|Phase\s*[0-9]{1,2})\s*[—–-:]\s*(.*)', line, re.I)
            if m:
                if curr_step:
                    steps.append(curr_step)
                curr_step = {'title': line, 'desc': []}
            elif curr_step:
                if line.startswith('CTA:') or line.startswith('Next Step:'):
                    pass
                else:
                    curr_step['desc'].append(line)
    if curr_step:
        steps.append(curr_step)

    print(f"{slug}: found {len(steps)} steps -> {[s['title'] for s in steps]}")
