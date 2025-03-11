---
title: Resume
layout: default
nav_order: 2
resume_items:
  - title: "Data Analyst Intern"
    company: "Kurma AI"
    date: "Jan 2025 - Present"
    location: "San Francisco, CA"
    responsibilities:
      - "Performing preprocessing data analysis and on research papers and pdfs using Python, RegEx, and pymupdf4llm."
      - "Assisting in developing and maintaining databases and other strategies that optimize statistical efficiency and quality."
      - "Helping interpret data, analyze results using statistical techniques, and prepare ongoing reports."
  - title: "Office Intern"
    company: "Dumpling Depot Restaurant"
    date: "Jun 2022 - Aug 2022"
    location: "Sunnyvale, CA"
    responsibilities:
      - "Redesigned a new catering website via JavaScript and on Wix.com, and created a new menu option on the website."
      - "Prepared invoices weekly to upload to OneDrive in chronological order and organized miscellaneous invoices."
      - "Created a new invoice management system on OCR through Java and increased website monthly sales by 10% through catering extension."
---
# Resume

{% for item in page.resume_items %}
<div style="display: flex; align-items: center; margin-bottom: 20px;">
    <img src="/assets/jpgs/{{ item.company | downcase | replace: ' ', '_' }}_logo.jpeg" alt="{{ item.company }} Logo" width="100" style="margin-right: 20px;"/> <!-- Adjust the path and size as needed -->
    
    <div>
        <h3>{{ item.title }}</h3>
        <h4>{{ item.company }}</h4>
        <p><em>{{ item.date }} | {{ item.location }}</em></p>
        <ul>
            {% for responsibility in item.responsibilities %}
                <li>{{ responsibility }}</li>
            {% endfor %}
        </ul>
    </div>
</div>
{% endfor %}


<!-- <object data="{{ site.baseurl }}/assets/pdfs/Ethan Qiu Resume.docx.pdf" width="100%" height="800px" type="application/pdf"></object>  -->