---
layout: default
title: Deploy Mode
description: Change between deploy modes on a instance
section: tool-belt
availability:
    m1:
      live: false
      staging: true
      development: true
    m2:
      live: false
      staging: true
      development: true
    vsf-f:
      live: false
      staging: true
      development: true
    vsf-b:
      live: false
      staging: true
      development: true
---

# {{ page.title }}
{{ page.description }}
This job may look slightly different depending on the instance type though the goal of the actions it is performing are the same.

## Running A Backup
Select "Toolbelt" > "Actions" > "Deploy Mode"  
  
**N.B** Magento 2 instances will also get the choices to "Keep static content" or "Regenerate Static Content"
This will present you with a list of possible backups, select "Run Backup" on the type you would like to run.

<img src="/assets/img/toolbelt-deploy-mode-magento2.JPG" alt="Change deploy mode for magento 2" />

## Debugging Vue Storefront Instances
For both Vuestorefront Frontend and Vuestorefront Backend instances when you enable "Developer" mode this will run the application in inspect mode.
If you have [SSH access](/documentation/instance/components/ssh.html#direct-ssh-access) configured you will then be able connect to the debugger.
1. Forward the port on the instance to your local machine:  
  `ssh -p 48848 -L 9229:localhost:9229 node@my-instance.02.mdoq.io`
2. Go to `chrome://inspect` in your browser
3. You should then see your instance <img src="/assets/img/toolbelt-deploy-mode-vsf-debug.JPG" alt="Vuestorefront Debug Tools" />
4. Click "inspect" this should open a console where you get direct debug from the server.  
  
For more information please see: 
- [https://nodejs.org/en/docs/guides/debugging-getting-started/](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
  
{%- include availability-table.html -%}