---
layout: default
title: Reset Admin Passwords
description: A job to easily change / reset your Magento admin user passwords for enhanced security.
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

This SAK job guides you through changing / resetting your Magento admin user passwords.

It's a good idea for Magento admins to change their passwords regularly. This tool allows you to easily manage this process.

When the job is ran, the selected user's admin password will be randomised. This makes the account inaccessable until the user chooses to reset the password via the admin login screen.

You can choose to reset a selected user's password, or you can reset all passwords for all user accounts.

<img src="/assets/img/reset-admin-passwords.jpg" alt="MDOQ Reset Admin Passwords" />

{%- include availability-table.html -%}