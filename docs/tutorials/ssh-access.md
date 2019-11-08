---
layout: default
title: SSH Access
description: How to allow SSH access to an instance of your MDOQ Instance
---

# {{ page.title }}

MDOQ can protect your production website and infrastructure from threats. Most Magento Extension vendors will require access to a running version of your site where any issues exist in order for them to provide effective support. With MDOQ you can rest assured that an MDOQ instance will protect your site and business from unwanted risks in providing 3rd party access to your site.

For this feature you will need an instance. 

There may be a time where you or a developer will need your sites SFTP details. With MDOQ you can easily acquire these details in a few clicks. Watch our instructional video to see how simple this really is on MDOQ!

*Steps Required*
1. Select the required instance in the left pane
2. Click the Settings (cog) icon
3. Scroll to the base of the popup where you will see 'SSH'
4. Ensure the SFTP option is enabled  
5. To add a new identity simply hit the Plus icon and enter a friendly identity name and paste in the public key
6. Click Save

This will start the SSH container and once available you will be able to SSH into using the following format

`ssh -i /path/to/privatekey magento@instance-domain -p port-number`

Once the instance has restarted if you revisit the SSH tab of the settings popup there will be a value
in the host field. This is in the format of instance-domain:port-number so simply replace these values in the above command to SSH into your container

If you are unsure how to generate SSH keys on different environments you might find [this article useful on GitHub](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)