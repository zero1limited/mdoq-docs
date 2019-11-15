---
layout: default
title: Backups / Snaphots
description: A set of jobs that allow you to perform backups against your live site.
section: tool-belt
availability:
    m1:
      live: true
      staging: false
      development: false
    m2:
      live: true
      staging: false
      development: false
---

# {{ page.title }}
{{ page.description }}

This set of jobs allows you to manage the snapshots you currently have for your live site, as well as run new ones.

## Running A Backup
Select "Toolbelt" > "Snapshots"  
This will present you with a list of possible backups, select "Run Backup" on the type you would like to run.

<img src="/assets/img/snapshots.JPG" alt="MDOQ Sanpshots / Backups" />

{%- include availability-table.html -%}