---
layout: default
title: Adding a SVG Logo
description: How to add a SVG logo to your instance
---

# {{ page.title }}

After you have [created an instance](/tutorials/creating-a-new-instance.html) you may want to add a SVG format logo to your theme to ensure new instances roll up looking close to your live website without the need for full media backups.

1. Create or acquire your logo in SVG format

2. Select the code editor from within the "Support" area (choose the white button to open it fullscreen)

<img src="/assets/img/svg_1.jpg" alt="Support" />

3. Navigate to your theme folder. This may vary but in Magento 2 it should be in app/design/frontend/[VENDOR]/[THEME]

4. Look for the folder within your theme called "web", this should contain another folder called "images". For example, app/design/frontend/[VENDOR]/[THEME]/web/images

5. Right click the images folder and select "Upload Files"

<div><img src="/assets/img/svg_2.jpg" alt="Support" /></div>

6. Drag and drop your .svg image here

<div><img src="/assets/img/svg_3.jpg" alt="Support" /></div>

7. Visit the frontend of the instance to check if the logo is appearing. If there is another image uploaded via the admin (Content -> Design Configuration) this will overwrite the SVG file that sits in the theme folder so remove this if required.

8. [Merge and deploy your changes] (/tutorials/deploy-code.html)
