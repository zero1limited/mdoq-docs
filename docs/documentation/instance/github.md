---
layout: default
title: Github
description: What the the Mdoq github dialog can do
section: instance
priority: 40
---

# {{ page.title }}

The github dialog is designed to enable automation of a few simple git tasks commonly carried out by a developer.  

<img src="/assets/img/github_dialog.jpg" alt="Mdoq Github Dialog" />

- [Clone Links](#clone-links)
- [View Branch](#view-branch)
- [Git Pull](#git-pull)
- [Git Push](#git-push)
- [Merging In Branches](#merging-in-branches)
- [Common Issues](#common-issues)

## Clone Links
These are the cli commands to clone the branch your instance is on, should you wish to get a local copy of the code base.

## View Branch
This is a link to the branch your instance is on, useful when you need to look in Github for more information quickly.

## Git Pull
This allows you to pull changes from Github onto your instance.  
For example, you rolled up your instance, but another developer made a change in github. Which would make the github branch ahead of your local copy of the branch.  
To get these new changes on your instance just click Git pull.

## Git Push
This allows your to push changes on your instance to git so they can be taken live.  
For example, you rolled up an instance, and made some changes using the Web IDE, you now want to push these changes to git so they aren't lost.  
1. Git push
2. Select the files you want to push (you may not want to push them all, see [Maintaining your .gitignore](#maintaining-your-gitignore) if there are lots of files).  
  Enter a commit message, this will be the message shown in git.
3. Click Commit And Push  
  
All done   

## Merging In Branches
This feature allows you to pull changes from another git branch into your branch.  
For example you created an instance, then did some work, in the time it took you to do the work, a bug fix was fixed and released. This would leave your branch behind master. Before Mdoq will let you put your branch into master it will force you to be ahead. So the bug fix in master will need merging into your branch.  
To do this, just select `master` from the branch list and click merge. This will pull all the new changes in, so they can be tested on your instance.  

## Common Issues
Although the Github dialog can perform a lot, unfortunately it's not magic and there may be times where a human is required.  
When an issue occurs it will be shown in the logs for the instance, it will be signified by a red exclamation mark. 
Inside that log will be all the information about the issue Mdoq hit, which should give you an idea of what the issue is.  

### Common Issues: Merge In Branches 
Unab
- Where you are trying to merge another branch into yours and git cannot auto resolve the conflicts.  
  *Solution:* To solve this resolve the conflicts either on the CLI or in Github it's self, you should then be able to pull your modifications onto your instance.

### Common Issues: Git Pull  
When git pulling using Mdoq it fails.  
- "Your local changes to the following files would be overwritten by merge"  
  *Solution:* this means you have changed the file on Mdoq, outside of git, and then the file has also been changed in git. The easiest solution is to revert the changes to the file on Mdoq `git checkout /path/to/file` you should then be able to pull.
- " Automatic merge failed; fix conflicts and then commit the result."  
  *Solution:* this is down to the situation but it means you have committed changes to the file on Mdoq, and the same file has also been changed in github. Git can't work out how to merge the output of the commits.
  
### Common Issues: Git Commit And Push
When trying to commit and push it fails.
- "Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. Integrate the remote changes"  
  *Solution:* Run a git pull from Mdoq
- "The current branch XXXXXX has no upstream branch"  
  *Solution:* Git commands have been ran on the Mdoq instance, which have corrupted the config, such that it cannot determine where to push changes to. Where possible the best option will be to recreate code (though this will cause any uncommitted changes to be lost). An alternate option would be to set the remote upstream, which should allow you to push your changes.
  
## Maintaining Your .gitignore
A .gitignore file tells git what files to ignore when its working out what you would want to commit to git. 
For example: temporary files, or files containing sensitive information.  
See [here](https://git-scm.com/docs/gitignore) for more information.