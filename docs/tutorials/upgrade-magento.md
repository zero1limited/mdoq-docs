---
layout: default
title: Upgrade Magento
description: How to upgrade your magento site
---

# {{ page.title }}

With MDOQ you can easily upgrade your Magento version. We boast to have an upgrade time of under 1 minute. Watch our quick tutorial video to see how to upgrade your instance now!

To upgrade Magento on MDOQ you will need a instance. If you don't know how to roll up an instance click [here](/tutorials/create-a-new-istance.html). 

Depending on the Major version of Magento you are upgrading to, you need to complete ONLY the steps as per your version. The version is the first number if the version Eg 1. or 2.

### Upgrading Magento 1 Community Edition

Please note that this will only work when you are upgrading to the latest available version of Magento 1. Type


```
chmod +x ./mage; ./mage mage-setup; ./mage sync; ./mage sync-pear; ./mage config-set preferred_state stable
./mage list-upgrades
./mage install http://connect20.magentocommerce.com/community Mage_All_Latest --force;

- Look out for any 'failed to delete' or permission issues. You can delete any files manually by doing rm -r [file here] -
- Example: rm -r /var/package/blah.pkg -
- If you see any errors like 'Package blah conflicts with: blah', this can be ignored -

chmod +x ./mage;
./mage upgrade-all --force
```


### Upgrading Magento 2 Open Source

With MDOQ > Support > Code Editor view  app/etc/modules/Cm_RedisSession.xml and ensure the <active> tag contains true NOT false

Magento 2
MDOQ > Support > Code Editor
Edit the composer.json file and update the version after magento/product-community-edition to the latest minor version number
Edit the .gitignore file ensuring there is a line containing `/setup`

rm -Rf setup
composer update magento/product-community-edition --no-dev --with-dependencies
php bin/magento setup:upgrade
php bin/magento deploy:mode:set production
php bin/magento -V
If the composer command fails for any reason check the error message for a 3rd party module name, i.e. a non Magento package. If you find a non-magento module in the error message please do the following:

Remove the troublesome module from the composer.json file.
rm composer.lock
mv vendor vendor_preupgrade
Start the process again, starting with the composer command that failed before.
Take note of the modules you removed from the composer.json file.
You need to find updated versions of these modules and install them after the upgrade.
Ensure the output from the last command states the version number you have just upgraded to.

When the upgrade has completed you need to push the code changes with:
MDOQ > GitHub > Git Push