---
title: Projects
layout: default
nav_order: 2
---

# Projects
<div class="projects-container">

{% if site.projects %}
    {% assign sorted_projects = site.projects | sort: 'date_end' | reverse %}
    {% for project in sorted_projects %}
        <details class="project-dropdown">
            <summary>
                <span class="dropdown-icon">▼</span>
                <h3 style="display: inline-block; margin: 0;">{{ project.title }}</h3>
                <span style="float: right; color: #666; font-size: 0.9em;">
                    {{ project.date_start | date: "%B" }} - {{ project.date_end | date: "%B %Y" }}
                </span>
            </summary>
            <div class="project-content" style="margin-top: 1em; padding-left: 1em;">
                {{ project.content | markdownify }}
            </div>
        </details>
    {% endfor %}
{% else %}
    <p>No projects found.</p>
{% endif %}

</div>

<style>
.project-dropdown summary::before,
.project-dropdown summary::after,
.project-dropdown summary a::before,
.project-dropdown summary a::after {
    display: none !important;
}

.project-dropdown summary::-webkit-details-marker {
    display: none;
}


.project-dropdown summary:hover::before,
.project-dropdown summary:hover::after {
    display: none !important;
}

.projects-container {
    margin: 2em 0;
}

.project-dropdown {
    margin-bottom: 1.5em;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 1em;
}

.project-dropdown summary {
    cursor: pointer;
    padding: 1em;
    min-height: 2.5em;
    display: flex;
    align-items: center;
    list-style: none; /* Remove default list styling */
}

.dropdown-icon {
    font-size: 0.8em;
    margin-right: 0.5em;
    transition: transform 0.2s ease;
    color: #666;
}

/* Rotate icon when details is open */
.project-dropdown[open] .dropdown-icon {
    transform: rotate(180deg);
}

.project-dropdown summary:hover {
    background-color: #f6f8fa;
}

.project-dropdown[open] summary {
    border-bottom: 1px solid #e1e4e8;
    margin-bottom: 1em;
}

.project-content {
    padding: 1em;
    min-height: 2em;
}
</style>

