---
layout: default
title: Applying A Patch
description: How to apply a patch to your Magento 2 store
---

# {{ page.title }}
To apply a patch you will need a instance. If you don't know how to roll up an instance click [here](/tutorials/create-a-new-istance.html)

1. Select the required instance in the left pane
2. Click Support - SSH Web Console

```
composer require zero1limited/magento2-patches
composer require cweagans/composer-patches:^1.6.5
php bin/magento module:enable Zero1_Patches
php bin/magento patch:list
php bin/magento patch:add --patch=PRODSECBUG-2198
composer install
```

3. Click Github - Git Push - Select only the composer.json, composer.lock & app/etc/config.php files
4. Click Sync - Files - recreate the instance

This should then re-run the composer install and apply the patches.

#Check the patches are applying

In order to verify 100% that the patches have applied, you need to check the patches are installed. Please load the Repo 
https://github.com/zero1limited/magento2-patches/blob/master/patches.json

With the patches.json open please search it for the name of the patch you have just applied as denoted in the above commands after the --patch=





Done! You are now ready to Deploy!
