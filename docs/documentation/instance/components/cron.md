---
layout: default
title: Cron Component
description: Description of the Cron component
section: instance_components
platforms:
  m1: true
  m2: true
---

# {{ page.title }}
The cron component is in control of running cron for the instance, 
When cron is enabled it will run the correct script / command for the specific kind of instance.  
_N.B:_ on cron only runs once every 10 mins in development.

## Settings


## Recreation

{%- include platform-table.html -%}