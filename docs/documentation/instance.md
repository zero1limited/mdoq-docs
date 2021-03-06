---
layout: default
title: Instance
description: An explanation of the Mdoq 'instance' concept and a brief overview
section: documentation
sub_section: instance
priority: 100
---

# {{ page.title }}
This page explains what "instances" are, what they are made of and how they are used.

- [What Are "instances"](#what-are-instances)
- [Instance Types](#instance-types)
- [Instance Components](#instance-components)
- [Instance Platforms](#instance-platforms)
  - [Magento 1](#magento-1)
  - [Magento 2](#magento-2)
  - [Vue Storefront Backend](#vue-storefront-backend)
  - [Vue Storefront Frontend](#vue-storefront-frontend)
- [How To Create Instances](#how-to-create-instances)
  - [Magento 1](#creating-magento-1)
  - [Magento 2](#creating-magento-2)
  - [Vue Storefront Backend](#creating-vue-storefront-backend)
  - [Vue Storefront Frontend](#creating-vue-storefront-frontend)
- [What Can I Do With An Instance](#what-can-i-do-with-an-instance)
- [Common Questions](#common-questions)

## What Are Instances
Instance is the term Mdoq uses to describe replica's of your site, these replicas have different lifecycles and functionality (as described below).  
Each instance can be thought of as a complete copy of your production site, apart from any "Live" instances (see [here](#instance-types) for more info), these are a special kind of instance that connect to a live site.  
The purpose of an instance can be wide reaching, such as installing a module. But so long as you don't want to keep any work carried out on them, they can be deleted at any time. 

## Instance Types
There are 3 main types of instances that can be created.  
- Live:
  This instance type is used to connect to your production site, and provide configuration for any instances created under this instance.  
  Live instances will be highlighted with <span style="color: #e88e00">orange</span> in the instance list.
- Staging:
  This instance type is used when a lot of changes are need to be staged for a release at the same time. For example where performing an upgrade many developers may need to work on differing tasks that will need to be completed before the upgrade can go live.  
  By creating development instances, and then merging them into a staging instance, they can be tested in unison.  
  Staging instances will be highlighted with <span style="color: #f8ddb2">light orange</span> in the instance list.
- Development:
  All other instance sub-types e.g (Training, Sandbox, Explore) are all development instances. Each may have subtle modifications, such as the installation of demo productions for Explore instances. 
  However their lifecycles are all the same, and they provide the same functionality.  
  Development instances will not have any highlighting in the instance list.
  
Because of their differing roles, each instance type has different actions and automations that can be performed against it. Where this is the case, the "Availability Table" will be displayed to show which instance types the functionality described can be performed on.

## Instance Components
Instances are made up of many components, each component takes responsibility of it's own set of tasks needed to provide the full Mdoq functionality.  
Each component has its own configuration, the configuration of all instances inherited from the live instance it is created from. Though this configuration can be modified as needed.  
To read more about instance components see [here](/documentation/instance/components.html).

## Instance Platforms
Mdoq supports 4 different platforms; Magento 1, Magento 2, Vue Storefront Backend, Vue Storefront Frontend. 
Each platform uses different components as they need different technologies, to run correctly. 

### Magento 1
This platform runs with the following technologies:
- Nginx
- Php-Fpm
- Mysql
- Redis (if enabled)

### Magento 2
This platform runs with the following technologies:
- Nginx
- Php-Fpm
- Mysql
- Redis (if enabled)

### Vue Storefront Backend
This platform runs with the following technologies:
- Nginx
- NodeJs
- Redis
- Elastic Search

Because of how Vue storefront works, creating an instance requires a Magento 2 instance to link to. 
This is where the application will pull catalog and product data and also push orders etc...  
There can be multiple Vue Storefront Backend instances for a single Magento 2 instance.

### Vue Storefront Frontend
This platform runs with the following technologies:
- Nginx
- NodeJs

Because of how Vue storefront works, creating an instance requires a backend instance to exist. 
This is so the application can communicate with the backend instance to pull product & category data as well as perfrom user actions, such as adding to cart.  
There can be multiple Vue Storefront Frontend instances for a single Vue Storefront Backend instance. 

## How To Create Instances
Creating instance is very simple. Just click the "New instance" button (top right of the screen).
You will then be presented with a dialog of options. The options are almost identical across platforms, though because of platform specific nuances there are a few differences.

*Common Options*:
- Description: this is the human readable name of the instance
- Ticket Number: this can be anything that allows you to be able to identify the instance. (It may only be alphanumeric with '_' and '-', if you have source control enabled it will also be the branch name)

There are also "Advanced Options", these are completely optional.
*Advanced Options*:
- Deploy Mode: this allows you to select if you want to roll the instance up in Developer or Production mode. (The default is Production)
- Parent Branch: this allows you to pick a source branch for your instance (useful if you are all working from a release candidate)

### Creating Magento 1
There are no Magento 1 specific options

### Creating Magento 2
There are no Magento 2 specific options

### Creating Vue Storefront Backend
*Options*: 
- Linked instance: This is the magento 2 instance that the application will pull data from

### Creating Vue Storefront Frontend
*Options*:
- Linked instance: This is the Vue Storefront Backend instance the application will talk to.

## What Can I Do With An Instance
The are many things you can do with an instance, once you have selected if from the left hand side of the Mdoq UI (it will be highlighted blue in the list), instance specific information and actions will be 
shown across the rest of the page.  
Towards the top of the instance information will be the actions available for the selected instance. The actions available are:  
- **Settings**  
  This is where the instance can be configured as needed, each component of an instance has it's own sub section of settings to read more about these see [here](/documentation/instance/components.html)  
- **Links**  
  This dialog shows the urls available to for the selected instance, if a live instance is selected, it will show the urls for the live instance.
- **Sync**  
  This dialog shows the components that can be recreated for the instance, these components have a wide array of functionality, see [here](#instance-components) for more information.
- **Tool Belt**  
  This dialog show the actions that can be carried out on an instance, see [here](/documentation/instance/tool-belt.html) for more information.  
- **Github**  
  This dialog enables automation of common git actions need when developing on an instance see [here](/documentation/instance/github.html) for more information.
- **Monitoring**  
  This dialog show the status of (if enabled) the Mdoq monitoring for the instance, see [here](/documentation/instance/monitoring.html) for more information.
- **Support**  
  This dialog give access to useful set of tools, commonly required by a developer, see [here](/documentation/instance/support.html) for more information.
- **Delete**  
  Clicking this will allow you to delete the instance. When opening the dialog a couple of checks will start to run: 
  - Check if this branch is ahead of master. (if this is the case, you may wish to keep your git branch, see below)  
  - Check if there are any uncommitted changes.  
  
  You don't have to wait for these checks to complete, if you are sure you know what you are doing.  
  In addition to the checks, you will also get the option to "Skip Git branch deletion". This allows you to delete the instance but keep the work done, useful if you are at your instance limit. 
  If you want to get your instance back you can simply create a new instance with the same ticket number, and the original git branch will be used. It is worth noting that any unscripted database changes **_will_** be lost if you do this.    
  Deleting an instance cannot be undone.
  
  
Underneath the actions are the logs for the instance, this is a history of all Mdoq activity carried out on the instance.
  

## Common Questions
- *Why are the links for my live site wrong?*:  
  This can happen when the links your live site is available on have changed, this could be down to the addition of a store, or changing the `base_url` in the magento configuration page. 
  Mdoq will automatic update these links on a regular basis, however you can update them immediately by sync'ing the "Environmental Changes" component.

- *I have an integration I need to disable on development instances*:  
  This can be done by configuring post sql actions see [here](/documentation/instance/components.html)