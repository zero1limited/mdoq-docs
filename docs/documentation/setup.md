---
layout: default
title: Setup
description: A guide to getting started on Mdoq 
section: documentation
priority: 90
---

# {{ page.title }}

Getting Mdoq to be able to talk to your live site is quick and simple, there are a few options depending on your set. If you have any issues please [get in touch](maxilto:{{ site.email}}).

- [Installing the Connector](#connector-installation)
  - [Magento 2](#magento-2-connector-installation)
  - [Magento 1](#magento-1-connector-installation)
- [Connector setup](#connector-setup)
  - [M2 Single Server](#magento-2-single-server-connector-setup)
  - [M2 Multi-Server](#magento-2-multi-server-connector-setup)
  - [M1 Single Server](#magento-1-single-server-connector-setup)
  - [M1 Multi Server](#magento-1-multi-server-connector-setup)

## Connector Installation
The first step is to get the Mdoq connector installed, this is something our team is happy to guide you through.

### Magento 2 Connector Installation
The connector is just a simple extension that can be install via composer.  
[https://packagist.org/packages/mdoq/module-connector](https://packagist.org/packages/mdoq/module-connector)

### Magento 1 Connector Installation
Please [get in touch](maxilto:{{ site.email}})

## Connector Setup
| Platform | Use Mdoq for deployments | Don't use Mdoq for deployments |
|---|---|---|
| Magento 2 | [Option 1](#magento-2-single-server-connector-setup) | [Option 2](#magento-2-multi-server-connector-setup) |
| Magento 1 | [Option 3](#magento-1-single-server-connector-setup) | [Option 4](#magento-1-multi-server-connector-setup) |


### Magento 2 Single Server Connector Setup
1. Navigate to Stores > Configuration > Services > Mdoq Connector
2. Select "Yes" for "Enable MDOQ Connector"
3. Click "Regenerate Endpoint"
4. Click "Save Config"
5. Navigate to System > Cache Management
6. Refresh all cache
7. Test connection to the connector, visit your stores base url with the endpoint appended  
  for example:  
  base url: `https://www.mymagentosite.com/`  
  endpoint: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`  
  You would visit: `https://www.mymagentosite.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`  
You should see the message:  
      ```text
      Post Variables Missing.
      ```  
8. In Mdoq, select your "Live Connector" instance
9. Open settings
10. Copy the endpoint (the 255 characters) into "Gateway Endpoint"
11. Click "Save"
12. To test Mdoq can now talk to your server:  
    i. Navigate to Sak > Reports  
    ii. select "PHP Info"  
  You should then see the output of PHP info.

### Magento 2 Multi-Server Connector Setup
1. Navigate to Stores > Configuration > Services > Mdoq Connector
2. Select "Yes" for "Enable MDOQ Connector"
3. Select "Yes" for "Enable Access from Admin"
3. Click "Regenerate Endpoint"
4. Click "Save Config"
5. Navigate to System > Cache Management
6. Refresh all cache
7. Test connection to the connector, visit your stores base url with you admin path + endpoint appended  
  for example:  
  base url (admin): `https://admin.mymagentosite.com/`  
  admin path: `secretadmin`
  endpoint: `backendconnector/connector/index`  
  You would visit: `https://admin.mymagentosite.com/secretadmin/backendconnector/connector/index`  
You should see the message:  
      ```text
      Post Variables Missing.
      ```
    *N.B* this method is less secure then using the standard endpoint, you should only enable this for non-prod and/or restrict access to IP addresses. (Mdoqs IP: `{{ site.mdoq_ip }}`)        
8. In Mdoq, select your "Live Connector" instance
9. Open settings
10. add [ADMIN PATH] + [Endpoint] into "Gateway Endpoint"
11. Click "Save"
12. To test Mdoq can now talk to your server:  
    i. Navigate to Sak > Reports  
    ii. select "PHP Info"  
  You should then see the output of PHP info.

### Magento 1 Single Server Connector Setup
Please [get in touch](maxilto:{{ site.email}})
  

### Magento 1 Multi-Server Connector Setup
Please [get in touch](maxilto:{{ site.email}})
  
