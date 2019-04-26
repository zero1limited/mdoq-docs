---
layout: default
title: Components
description: A description of all the components in Mdoq instances
section: instance
sub_section: instance_components
priority: 10
---

# {{ page.title }}
In Mdoqs eyes each instance is made up of multiple components, these components are pretty similar between M1 and M2 but can differ slightly.  
The components can also change in behaviour depending on instance type. All these differences will be noted on their respective pages.  

## Setting Inheritance
When an instance is created, it is created 'from' a live connector / live instance. This live instance is the parent of the instance. Any settings 
that have been set in the parent will automatically be inherited by the child. Once the instance is rolled up, you may changes these setting at the 
child instance level, allowing you to try things out (such as change PHP-FPM version) on your instance without effecting other developers. Once you have
 test the changes you can then implement them at the parent level, allow all future instance to inherit these changes.  

## General Settings
Every instance has the same base settings:

- **Ticket Number**:
  This is the ticket number used when creating the instance (and also the name of the branch created within Github). This value 
  cannot be changed once an instance is rolled up.
- **Description**:
  This is the description used when creating the instance. A human friendly description for the instances' existence.
- **Owner**:
  This is the user account used to create the instance. This value cannot be change once an instance is rolled up.
  
  
## Sub Components
<ul class="components-index list-group">
{% for page in site.html_pages %}
    {% if page.section == 'instance_components' %}
    <li class="list-group-item">
        <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
    {% endif %}
{% endfor %}
</ul>