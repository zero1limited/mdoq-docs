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
      live: true
      staging: true
      development: true
---

# {{ page.title }}
{{ page.description }}

This SAK job allows you to see how much disk space is being taken up by each table in your Magento database. The report will show you sizes of each table in Megabyte, and a percentage of how much space the table is using against the whole database.

To run, select the instance you want to run this against, usually your live connector, select Toolbelt > Reports > DB Size Report.

Tables that are using less than 1MB of disk space are ignored.

<img src="/assets/img/db-report.jpg" alt="MDOQ Database Report" />

{%- include availability-table.html -%}