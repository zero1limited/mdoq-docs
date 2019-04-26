---
layout: default
title: SFTP Component
description: Description of the SFTP component
section: instance_components
availability:
    m1:
      live: false
      staging: true
      development: true
    m2:
      live: false
      staging: true
      development: true
---

# {{ page.title }}
{{ page.description }}

## Settings
When disabled this component will only have one option. 'Enable'. Once you enable this setting 
Mdoq will automatically set up SFTP credentials to your instance. Once done they will be display in the settings.
You cannot pick the credentials. You can change them by disabling and enabline SFTP access.

{%- include availability-table.html -%}

## Recreation
Recreating this component simply refreshes the credentials if it is enabled.