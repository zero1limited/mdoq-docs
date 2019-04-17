---
layout: default
title: DB Size Report
description: A job to analyze table sizes within your DB.
section: tool-belt
availability:
    m1:
      live: true
      staging: true
      development: true
    m2:
      live: false
      staging: false
      development: false
---

# {{ page.title }}
{{ page.description }}

This SAK job allows you to see how much disk space is being taken up by each table in your Magento database. The report will show you sizes of each table in Megabyte, and a percentage of how much space the table is using against the whole database.

Tables that are using less than 1MB of disk space are ignored. 

{%- include availability-table.html -%}