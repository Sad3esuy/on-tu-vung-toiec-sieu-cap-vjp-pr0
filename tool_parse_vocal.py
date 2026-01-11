import re
import json

def clean_html_text(text):
    """Removes HTML tags and cleans up whitespace."""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Replace &nbsp; with space
    text = text.replace('&nbsp;', ' ')
    # Remove extra whitespace
    text = " ".join(text.split())
    return text.strip()

def parse_vocabulary(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # This regex looks for the "VOCABULARY PART..." string and captures the title up to the next opening tag
    topic_headers = list(re.finditer(r'VOCABULARY PART \d+:\s*(.*?)<', content, re.IGNORECASE | re.DOTALL))
    
    vocabulary_data = []
    
    icons = ["fa-school", "fa-briefcase", "fa-cart-shopping", "fa-hammer", "fa-plane", "fa-user-doctor", "fa-users"]
    colors = ["bg-red-500", "bg-teal-500", "bg-blue-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]

    for i, match in enumerate(topic_headers):
        topic_title_raw = match.group(1)
        topic_title = clean_html_text(topic_title_raw)
        
        # Determine the start of this section and end of this section (or EOF)
        start_index = match.end()
        end_index = topic_headers[i+1].start() if i + 1 < len(topic_headers) else len(content)
        
        section_content = content[start_index:end_index]
        
        # DEBUG
        # print(f"Processing Topic {i}: {topic_title}")

        # Instead of finding a specific table, we look for ALL rows in the section.
        # This handles nested tables or multiple tables per section.
        rows = re.findall(r'<tr.*?>(.*?)</tr>', section_content, re.DOTALL | re.IGNORECASE)
        
        words = []
        for row in rows:
            # Find all cells
            cells = re.findall(r'<td.*?>(.*?)</td>', row, re.DOTALL | re.IGNORECASE)
            
            # We expect 2 or 3 cells.
            # If 3 cells: No, Word, Meaning -> Use 1 and 2
            # If 2 cells: Word, Meaning -> Use 0 and 1
            if len(cells) >= 3:
                word_raw = cells[1]
                meaning_raw = cells[2]
            elif len(cells) == 2:
                word_raw = cells[0]
                meaning_raw = cells[1]
            else:
                continue

            word_clean = clean_html_text(word_raw)
            meaning_clean = clean_html_text(meaning_raw)
            
            # Skip header row if it contains "Words" or "Meaning"
            if word_clean.lower() in ["words", "no.", "no"] or meaning_clean.lower() == "meaning":
                continue
            
            # Basic validation: Word shouldn't be just a number (likely an index misparsed as word)
            if word_clean.isdigit() and len(word_clean) < 4:
                 continue

            if word_clean and meaning_clean:
                words.append({
                    "en": word_clean,
                    "vi": meaning_clean,
                    "pron": "" # Source file does not have pronunciation
                })

        # Only add topic if it has words
        if words:
            vocab_item = {
                "id": str(i + 1),
                "title": topic_title,
                "icon": icons[i % len(icons)],
                "color": colors[i % len(colors)],
                "words": words
            }
            vocabulary_data.append(vocab_item)

    return vocabulary_data

try:
    data = parse_vocabulary('c:\\Users\\Sadmesuy\\Desktop\\OnToiecVipPro\\vocabulary_source.html')
    
    output_path = 'c:\\Users\\Sadmesuy\\Desktop\\OnToiecVipPro\\vocabulary_data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
        
    print(f"Successfully converted {len(data)} topics.")
    # Print the first topic to verify
    if data:
        print("First topic preview:")
        print(json.dumps(data[0], indent=2, ensure_ascii=False))
        
except Exception as e:
    print(f"Error: {e}")
