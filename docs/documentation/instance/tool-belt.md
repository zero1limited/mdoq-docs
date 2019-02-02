---
layout: default
title: Tool Belt
description: What the Mdoq ToolBelt is and what it can do
section: instance
sub_section: tool-belt
availability:
    m1:
      live: true
      staging: true
      development: true
    m2:
      live: true
      staging: true
      development: true
---

# {{ page.title }}

The Mdoq Tool Belt is a collection of actions that have been automated, there are 3 subsections of actions:  
- Reports  
  A variety of useful reports that can be ran against the selected instance.
- Actions
  Tasks that commonly carried out by developers that can now be carried out by anyone.
- Snapshots
  The ability to perform backups of different parts of the selected instance, as well as download historic ones.  
  
   
The tool belt is available on all instance types, but the actions and jobs differ, below is a full list of all the actions available.  

<ul class="tool-belt-jobs">
    {% for p in site.html_pages %}
        {% if p.section == page.sub_section %}
    <li>
        <a href="{{ p.url }}">{{p.title}}</a>
        <span class="small">{{ p.description }}</span>
    </li>
        {% endif %}
    {% endfor %}
</ul>