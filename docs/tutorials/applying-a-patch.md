---
layout: default
title: Applying A Patch
description: How to apply a patch to your Magento 2 store
---

# {{ page.title }}
To apply a patch you will need a instance. If you don't know how to roll up an instance click [here](/tutorials/create-a-new-istance.html)

1. Select the required instance in the left pane
2. Click MDOQ - Support - SSH Web Console

```
composer require zero1limited/magento2-patches
composer require cweagans/composer-patches:^1.6.5
php bin/magento module:enable Zero1_Patches
php bin/magento patch:list
php bin/magento patch:add --patch=PRODSECBUG-2198
composer install
```


3. MDOQ - Support - Github - Git Push


Push only the composer.json & composer.lock files and then recreate the instance.

Done! Your Patch should now be applied check your 
Github branch to ensure this.

You are now ready to Deploy!
