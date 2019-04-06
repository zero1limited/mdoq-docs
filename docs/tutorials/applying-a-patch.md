---
layout: default
title: Applying A Patch
description: How to apply a patch to your Magento 2 store
---

# {{ page.title }}
To apply a patch you will need a instance. If you don't know how to roll up an instance click [here](/tutorials/create-a-new-istance.html)

1. Select the required instance in the left pane
2. Click MDOQ - Support - Code Editor

open the composer JSON file and move these includes to the start & insert this into the 'extra' node

Add these to "require"
        "zero1limited/magento2-patches": "^1.0.0",
        "cweagans/composer-patches": "^1.6.5",

Add these to "extra"
"patches": {
            "magento/module-catalog": {
                "2198-01": "vendor/zero1limited/magento2-patches/patches/PRODSECBUG-2198-2.2-CE.composer-2019-03-27-06-12-19-01.patch"
            },
            "magento/module-framework": {
                "2198-02": "vendor/zero1limited/magento2-patches/patches/PRODSECBUG-2198-2.2-CE.composer-2019-03-27-06-12-19-02.patch"
            }
        }
        
3. Click MDOQ - Support - SSH Web Console     
composer update --lock --no-dev



Done! Your Patch should now be applied check your Github branch to ensure this.