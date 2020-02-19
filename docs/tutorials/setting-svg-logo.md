---
layout: default
title: Add your SVG Logo
description: How to add your SVG logo to an instance
---

# {{ page.title }}

After you have [created an instance](/tutorials/creating-a-new-instance.html) you may want to add a SVG format logo to your theme to ensure new instances roll up looking close to your live website without the need for full media backups.

• Create or acquire your logo in SVG format

• Select the code editor from within the "Support" area (choose the white button to open it fullscreen)

<p><img src="/assets/img/svg_1.jpg" alt="Support" /></p>

•  Navigate to your theme folder. This may vary but in Magento 2 it should be in `app/design/frontend/[VENDOR]/[THEME]`

•  Look for the folder within your theme called "web", this should contain another folder called "images". For example, `app/design/frontend/[VENDOR]/[THEME]/web/images`

•  Ensuring your logo is named 'logo.png', right-click the images folder and select "Upload Files"

•  Drag and drop your .svg image here

<p><img src="/assets/img/svg_3.jpg" alt="Support" /></p>

•  Visit the frontend of the instance to check if the logo is appearing. If there is another image uploaded via the admin (Content -> Design Configuration) this will overwrite the SVG file that sits in the theme folder so remove this if required.

•  [Merge and deploy your changes](/tutorials/deploy-code.html)
