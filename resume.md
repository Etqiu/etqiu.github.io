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
      - "Performing preprocessing data analysis on research papers and pdfs using Python, RegEx, and pymupdf4llm."
      - "Assisting in developing and maintaining databases and other strategies that optimize statistical efficiency and quality."
      - "Helping interpret data, analyze results using statistical techniques, and prepare ongoing reports."

  - title: "Office Intern"
    company: "Dumpling Depot Restaurant"
    date: "Jun 2022 - Aug 2023"
    location: "Sunnyvale, CA"
    responsibilities:
      - "Redesigned a new catering website via JavaScript and on Wix.com, and created a new menu option on the website."
      - "Prepared invoices weekly to upload to OneDrive in chronological order and organized miscellaneous invoices."
      - "Created a new invoice management system on OCR through Java and increased website monthly sales by 10% through catering extension."

  - title: "Calculus Tutor"
    company: "Independent - Part time"
    date: "Jan 2025 - Present"
    location: "Berkeley, CA"
    responsibilities:
      - "Provided 1 on 1 online tutoring to high school students, focused on topics such as integration and differential equations."
      - "Utilized various teaching methods and online resources to enhance student understanding and engagement."

  - title: "Camp Counselor"
    company: "BIG Summer Day Camp"
    date: "Jun 2020 – Aug 2024"
    location: "San Francisco, CA"
    responsibilities:
      - "Led activities that encouraged collaboration and confidence to ensure campers were engaged creatively and cooperatively. "
      - "Practiced conciseness, projection and confident body language while speaking publicly and giving instructions."
---
# Resume

{% for item in page.resume_items %}
<div style="display: flex; align-items: center; margin-bottom: 20px; flex-direction: row-reverse;">
    <img src="/assets/jpgs/{{ item.company | downcase | replace: ' ', '_' }}_logo.jpeg" alt="{{ item.company }} Logo" width="100" style="margin-left: 20px; margin-top: -150px; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)" onerror="this.onerror=null; this.src='/assets/jpgs/big_summer_day_camp_logo.jpeg';"/> <!-- Adjust the path and size as needed -->

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