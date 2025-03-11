---
title: Projects
layout: default
nav_order: 2
---

# Projects
<div>

{% if site.projects %}
    {% for project in site.projects %}
        <h3>{{ project.title }}</h3>
        <p><em>{{ project.date_start | date: "%B" }} - {{ project.date_end | date: "%B %Y" }}</em></p>
      
            {{ project.content | markdownify }}
    {% endfor %}
{% else %}
    <p>No projects found.</p>
{% endif %}

</div>

