---
layout: default
title: SSH Component
description: Description of the SSH component
section: instance_components
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

## Settings
As with all components, this component uses parent -> child inheritance. If you configure the settings on a live instance, all child instance will initially inherit these settings. 
Once the instance has rolled up you can change them as required.

**N.B** Mdoq only support SSH access using SSH keys. If you are unsure what an ssh key is or how to generate Github have some great documentation, see [here](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

- **Enable**  
  Whether SSH should be enabled on development instances. *this will not enable SSH on your live site*
- **Identities**
  This is where you can add SSH keys for your team.  
  - name 
    This has no effect on ssh, it is just there to help identify keys
  - public key 
    This is the public part of your SSH key (usually ending with `.pub`, e.g: `~/.ssh/id_rsa.pub`)  
    We would recommend generating an SSH key specifically for Mdoq.  
- **Host**  
  This will only be present on development instances with SSH enabled. It cannot be changed and is just here for informative purposes (if you are going to be SSH'ing directly to the instance).  
  It displays the SSH host as well as the port SSH is running on in the format `host:port`.
- **Username**
  This will only be present on development instances with SSH enabled. It cannot be changed and is just here for informative purposes (if you are going to be SSH'ing directly to the instance).

{%- include availability-table.html -%}

## Recreation
Recreating this component simply re-applies the configured credentials if it is enabled.

## SSH Access
There are two ways of SSH'ing into your instance, via a web ssh console or directly through an ssh client on your computer.
Once you are logged in, both methods behave the same.  
To learn more about the web ssh console please see [here](/documentation/instance/support.html#ssh-console).

### Direct SSH Access
To SSH in you will need the following information:
- Host, this can be retrieved from the component settings for the instance, and is the part before the ':'
- Port, this can be retrieved from the component settings for the instance, and is the part after the ':'
- Username, this can be retrieved from the component settings for the instance.
- Private SSH key, this will be on your computer.

Depending on your OS the command to SSH in will be slightly different.  
- **Linux**
  ```sh
  ssh -p [PORT] -i [PATH TO PRIVATE SSH KEY] [USERNAME]@[HOST]
  ```
  e.g
  ```sh
  ssh -p 41111 -i ~/.ssh/mdoq_id_rsa magento@1111.00.mdoq.io
  ```
- **Windows**
  _In progress_
   
- **MAC**
  _In progress_

### Mdoq SSH Environment
Regardless of the method used to SSH into your instance the environment will be the same.  
- **Terminal prompt**
  The terminal prompt is the bit of text before the flashing cursor. e.g:  
  ```sh
  magento@8529-php-fpm:~/htdocs$
  ```
  It contains 3 useful pieces of information; current user, current instance and current directory. 
  In the format `USERNAME@HOST:CURRENT_DIRECTORY$` this allows you to quickly see your current situation.
- **Project root**  
  Depending on the platform you are SSH'd into the project direct is different
  - Magento 1 or 2: `/home/magento/htdocs`, to get here quickly once you've logged in run the command: `cd ~/htdocs/`
  - Vue Storefront Frontend or Backend: '/var/www'.
 - **Root Access**
   There is no root access on the instances, if you really need to run a command as root (such as install programs that aren't installed) please [contact us](mailto:{{ site.email}}) and we can explain how this is done.