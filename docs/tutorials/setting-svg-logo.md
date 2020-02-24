---
layout: default
title: Add your logo in SVG format
description: Add your logo in SVG format
---

# {{ page.title }}

The SVG image format has many benefits, including small file sizes and full scalability whilst maintaining a high quality. 

Magento admin does not allow SVG files to be uploaded in the admin theme configuration area, but by utilising MDOQ you can easily upload your logo in this format. 

• [Create an instance](/tutorials/creating-a-new-instance.html)

• Create or acquire your logo in SVG format

• Name the file `logo.svg`

• Select the code editor from within the "Support" area (choose the white button to open it fullscreen)

<p><img src="/assets/img/svg_1.jpg" alt="Support" /></p>

•  Navigate to your theme folder. This may vary but in Magento 2 it should be in `app/design/frontend/[VENDOR]/[THEME]`

•  Look for the folder within your theme called "web", this should contain another folder called "images". For example, `app/design/frontend/[VENDOR]/[THEME]/web/images`

•  Ensuring your logo is named 'logo.png', right-click the images folder and select "Upload Files"

•  Drag and drop your `logo.svg` image here

<p><img src="/assets/img/svg_3.jpg" alt="Support" /></p>

•  Visit the frontend of the instance to check if the logo is appearing. If there is another image uploaded via the admin (Content -> Design Configuration -> Header) this will overwrite the SVG file that sits in the theme folder so remove this if required.

•  [Merge and deploy your changes](/tutorials/deploy-code.html) and you are done!
