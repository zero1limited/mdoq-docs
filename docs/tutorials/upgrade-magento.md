---
layout: default
title: Upgrade Magento
description: How to upgrade your magento site
---

# {{ page.title }}

With MDOQ you can easily upgrade your Magento version. We boast to have an upgrade time of under 1 minute. Watch our quick tutorial video to see how to upgrade your instance now!

To upgrade Magento on MDOQ you will need a instance. If you don't know how to roll up an instance click [here](/tutorials/create-a-new-istance.html). 

### Upgrading Magento Open Source


composer require temando/module-shipping-m2:1.3.10 --no-update
composer require dotmailer/dotmailer-magento2-extension:2.7.1 --no-update

composer require magento/product-community-edition:2.2.8 --no-update



composer update --lock --no-dev

`MDOQ - Github - Git Push`
Please ensure you only push the composer.json & composer.lock files, then 
recreate your instance and this will test the upgrade.


  