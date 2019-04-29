---
layout: default
title: Developer Workflow
description: The recommended way for developers to work with Mdoq
section: documentation
priority: 50
---

# {{ page.title }}

There are a few common ways to work on Mdoq with Magento, some people simply have one method and stick to it, others swap between depending location/device. (if you're working from an IPad you can't really check the repo out locally)  

- [NFS (on premise only)](#nfs)
- [SFTP Mount](#sftp-mount)
- [SFTP](#sftp)
- [Web Code Editor](#web-code-editor)
- [Github](#github--git)

## NFS
This is option is only available for clients with an on premise license.
Before starting the process you should already have the 'magento' drive mounted. If you need assistance with this please [contact us](mailto:{{ site.email}}).

1. Create a new instance
2. Open the directory for your instance, for example if you are working on a Magento 2 project and your instance ID is 1234 and you have the magento drive mounted at `/magento` 
  the path would be `/magento/magento2/1234` 
3. You can edit the code and your changes will be reflected as soon as you save the file, no need for git push/pull
4. Once you finish your work you can git commit and push from the directory you are in using your IDE or from cli. Or you can use Mdoq to [Git Push]({{ site.baseurl }}{% link documentation/instance/github.md %}#git-push) for you.
5. Follow the "I'm Done" process

**Gotchas**
- Because you aren't committing changes to see them, they won't be stored in git. This means you need to commit them before recreating the `code` component.

## SFTP Mount
This option requires your device to support SFTP mounts. We have convenience scripts for this please [get in touch with us](https://www.twitter.com/{{ site.twitter_username| cgi_escape | escape }}) as they are still
in their infancy. We would be more then happy to help you use them so we can improve them.

1. Create a new instance
2. [Enable SFTP for your instance]({{ site.baseurl }}{% link documentation/instance/components/sftp.md %})
3. SFTP Mount using the credentials provided via Mdoq
4. Open the location you have mounted.
5. You can edit the code and your changes will be reflected as soon as you save the file, no need for git push/pull
6. Once you finish your work you can git commit and push from the directory you are in using your IDE or from cli. Or you can use Mdoq to [Git Push]({{ site.baseurl }}{% link documentation/instance/github.md %}#git-push) for you.
7. Follow the "I'm Done" process

**Gotchas**
- Because you aren't committing changes to see them, they won't be stored in git. This means you need to commit them before recreating the `code` component.

## SFTP
1. Create a new instance
2. [Enable SFTP for your instance]({{ site.baseurl }}{% link documentation/instance/components/sftp.md %})
3. Setup an SFTP connection to the instance.
4. You can edit the code and your changes will be reflected as soon as you save the file (*depending on your SFTP client, programming IDE), no need for git push/pull
5. Once you finish your work. If your SFTP client/programming IDE allows it you can git commit and push from the directory you are in. Or you can use Mdoq to [Git Push]({{ site.baseurl }}{% link documentation/instance/github.md %}#git-push) for you.
6. Follow the "I'm Done" process

**Gotchas**
- Because you aren't committing changes to see them, they won't be stored in git. This means you need to commit them before recreating the `code` component.

## Web Code Editor
1. Create a new instance
2. Change code using the [web code editor]({{ site.baseurl }}{% link documentation/instance/support.md %}#code-editor), changes will be reflected immediately.
3. Once you finish your work you will need to use Mdoq to [Git Push]({{ site.baseurl }}{% link documentation/instance/github.md %}#git-push) for you.
4. Follow the "I'm Done" process

**Gotchas**
- Because you aren't committing changes to see them, they won't be stored in git. This means you need to commit them before recreating the `code` component.

## Github / Git
1. Create a new instance
2. (optional) if you want to checkout the repo locally
  `git clone [repo url] -b [ticket number]`
3. Edit files in the appropriate branch and commit them to Git.
4. To see your changes you will have to use Mdoq to [Git Pull]({{ site.baseurl }}{% link documentation/instance/github.md %}#git-pull) for you.  
  Webhooks (so that Mdoq auto pulls when commits to the appropriate branch are made, are in the roadmap let us know on [twitter](https://www.twitter.com/{{ site.twitter_username| cgi_escape | escape }}))
  if this is something you would like us to prioritise.
5. Follow the "I'm Done" process

## Comparison
<table class="table availability">
    <thead class="thead-dark">
    <tr>
        <th scope="col">Method</th>
        <th scope="col">Fastest access to files</th>
        <th scope="col">Change files without needing to commit to git</th>
        <th scope="col">View log files directly</th>
        <th scope="col">IDE path hinting</th>
        <th scope="col">No need for IDE</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">NFS</th>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td></td>
    </tr>
    <tr>
        <th scope="row">SFTP Mount</th>
        <td></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td></td>
    </tr>
    <tr>
        <th scope="row">SFTP</th>
        <td></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td></td>
    </tr>
    <tr>
        <th scope="row">Web Code Editor</th>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td class="ticked"></td>
        <td></td>
        <td class="ticked"></td>
    </tr>
    <tr>
        <th scope="row">Github/Git</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="ticked"></td>
    </tr>
    </tbody>
</table>