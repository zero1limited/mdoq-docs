---
layout: default
title: Old Media Report
description: A job to analyze your media directory and identify files that can be deleted
section: tool-belt
availability:
    m1:
      live: true
      staging: false
      development: false
    m2:
      live: false
      staging: false
      development: false
---

# {{ page.title }}
{{ page.description }}
When running an old media report there are two modes to choose from. You can choose 'Dry Run' to just run a report and take no action (we recommend running this first, so you get an idea of how many files are marked for deletion). The second option is 'Run', when choosing this mode MDOQ will start the deletion process for your old media. One 'Run' will do 500 media files a time, so if your report indicates that 500+ images can be deleted, you will need to run the job multiple times.

To view reports, you can click 'Previous Reports'. From here you can also download the backups of your images that MDOQ makes before deleting.

This job can take up to 15 minutes to run.

{%- include availability-table.html -%}