---
layout: default
title: Support
description: A description of the support dialog
section: instance
priority: 20
---

# {{ page.title }}

The support dialog provides access to common developer helper tools. These tools can be opened in the same window or in a new tab by selecting the "open in new window" button.

<img style="width: 100%" src="/assets/img/support_popup.JPG" alt="Mdoq Support Dialog" />

- [Mysql Console](#mysql-console)
- [Logs Viewer](#logs-viewer)
- [SSH Console](#ssh-console)
- [Code Editor](#code-editor)

## Mysql Console
The console allows access to the database on the instance with an intuative web gui, that allows mysql commands to be ran against the instance. As well as returning them in an easy to view format.
<img style="width: 100%" src="/assets/img/mysql_console.JPG" alt="Mysql Console" />

## Logs Viewer
This links to a [Pimp My Logs](http://pimpmylog.com/) set up tailor configured for your instance.
<img style="width: 100%" src="/assets/img/pimp_my_logs.JPG" alt="Pimp My Logs" />

## SSH Console
The links to a web ssh console, that allows you to run any cli commands as web user, without needing to have an SSH client installed on your machine. 
This includes magento commands as well as some other common tools used by developers (e.g [Composer](https://getcomposer.org/) and [Pestle](https://github.com/astorm/pestle)).
Before you can use this functionality you must [Configure SSH](/documentation/instance/components/ssh.html#settings). We would also recommend you read [Mdoq SSH Environment](https://docs.mdoq.io/documentation/instance/components/ssh.html#mdoq-ssh-environment) before you get going.  
  
To log into the instance:
 1. Follow the link for "Web SSH" on the support dialog.
 <img style="width: 100%" src="/assets/img/web_ssh_link.JPG" alt="Web SSH Console Link" />
 2. Select "Choose file" and find the private part of your ssh key.
 <img style="width: 100%" src="/assets/img/web_ssh_login.JPG" alt="Web SSH Console Login" />
 3. If you created your SSH key with a passphrase you will also need to enter that.
 4. Click connect and you should be logged in.
 <img style="width: 100%" src="/assets/img/web_ssh_loged_in.JPG" alt="Web SSH Console Login" />

## Code Editor
This links to a full web base IDE that allows you to view and edit files directly on the instance.
<img style="width: 100%" src="/assets/img/codiad.JPG" alt="Web IDE" />
