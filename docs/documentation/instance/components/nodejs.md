---
layout: default
title: Code Component
description: Description of the code component
section: instance_components
---

# {{ page.title }}
{{ page.description }}

## Settings


## Recreation

## Deploying Images On Your Own Infra
Mdoq creates a deployable docker image as part of it's "I'm Done" process. Once a piece of work has been 
accepted and merged into master, you are asked to provide a tag, this tag is the tag of your image that Mdoq
will create.
For example   
If your Live Connector ID is `1234`, the image name will be: `vue-storefront-api-1234`
If the tag you select is `2019.0.0.1` then your changes will be in: `vue-storefront-api-1234:2019.0.0.1`    
_N.B:_ To gain access to this image please speak to us and we can provide you with access credentials so that
you can pull your image from our Docker Registry into your own, or use directly from there.
  
Running the image is the same as any other docker image:
`docker run --name=vuestorefront-backend -e MDOQ_ENV="" -e VS_ENV=prod vue-storefrontbackend:3.2019.49.00`  
There are many ENV variables you can pass to your image, as well as others you can add/include. 
The image will automatically run [Dockerize](https://github.com/jwilder/dockerize) when starting up.
  
### Files modified by env variables
<table class="table env-effected-files">
    <thead class="thead-dark">
    <tr>
        <th scope="col">Platform</th>
        <th scope="col">File</th>
        <th scope="col">Delimeter</th>
        <th scope="col">Example</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td rowspan="2">VSF Backend</td>
        <td>config/local.json</td>
        <td>`<%:%>`</td>
        <td>```json
"server": {
    "host": "<% .Env.VSF_SERVER_HOST %>",
    "port": "<% .Env.VSF_SERVER_PORT %>",
    "searchEngine": "elasticsearch"
},
```  
To change the `host` value to `localhost` you would pass in `-e VSF_SERVER_HOST=localhost`</td>
    </tr>
    <tr>
        <td>ecosystem.json</td>
        <td>`{{:}}`</td>
        <td>```json
        "max_memory_restart": "{{ .Env.PM2_MAX_MEMORY_RESTART }}",
        ```  
        To change the `max_memory_restart` value to `1G` you would pass in `-e PM2_MAX_MEMORY_RESTART=1G`</td>
    </tr>
    <tr>
        <td rowspan="2">VSF Frontend</td>
        <td>config/local.json</td>
        <td>`<%:%>`</td>
        <td>```json
        "server": {
                "host": "<% .Env.VSF_SERVER_HOST %>",
                "port": "<% .Env.VSF_SERVER_PORT %>",
                "searchEngine": "elasticsearch"
            },
        ```  
        To change the `host` value to `localhost` you would pass in `-e VSF_SERVER_HOST=localhost`</td>
    </tr>
    <tr>
        <td>ecosystem.json</td>
        <td>`{{:}}`</td>
        <td>```json
        "max_memory_restart": "{{ .Env.PM2_MAX_MEMORY_RESTART }}",
        ```  
        To change the `max_memory_restart` value to `1G` you would pass in `-e PM2_MAX_MEMORY_RESTART=1G`</td>
    </tr>
</table>
  
As part of the image creation Mdoq will:
- copy `config/default.json` to `config/local.json`
- apply any custom variables you have configure
This means that anything set in custom variables will be static across environments.  
The rule of thumb is: "If it should change per environment use environment variables. If it shouldn't change per environment use custom variables" 

### Default Environment Variables
<table class="table default-env-variables">
    <thead class="thead-dark">
    <tr>
        <th scope="col">Platform</th>
        <th scope="col">Variable</th>
        <th scope="col">Default Vaule</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td rowspan="23">VSF Backend</td>
        <td>VS_ENV</td>
        <td>prod</td>
    </tr>
    <tr>
        <td>PM2_ARGS</td>
        <td></td>
    </tr>
    <tr>
        <td>PM2_INSTANCES</td>
        <td>0</td>
    </tr>
    <tr>
        <td>PM2_MAX_MEMORY_RESTART</td>
        <td>1G</td>
    </tr>
    <tr>
        <td>VSF_SERVER_HOST</td>
        <td>localhost</td>
    </tr>
    <tr>
        <td>VSF_SERVER_PORT</td>
        <td>3000</td>
    </tr>
    <tr>
        <td>VSF_ELASTICSEARCH_HOST</td>
        <td>https://127.0.0.1/api/catalog</td>
    </tr>
    <tr>
        <td>VSF_ELASTICSEARCH_PORT</td>
        <td>9200</td>
    </tr>
    <tr>
        <td>VSF_ELASTICSEARCH_PROTOCOL</td>
        <td>http</td>
    </tr>
    <tr>
        <td>VSF_ELASTICSEARCH_USERNAME</td>
        <td>elastic</td>
    </tr>
    <tr>
        <td>VSF_ELASTICSEARCH_PASSWORD</td>
        <td>changeme</td>
    </tr>
    <tr>
        <td>VSF_REDIS_HOST</td>
        <td>http://127.0.0.1</td>
    </tr>
    <tr>
        <td>VSF_REDIS_PORT</td>
        <td>6379</td>
    </tr>
    <tr>
        <td>VSF_REDIS_DB</td>
        <td>0</td>
    </tr>
    <tr>
        <td>VSF_AUTH_HASH_SECRET</td>
        <td>__SECRET_CHANGE_ME__</td>
    </tr>
    <tr>
        <td>VSF_OBJECT_HASH_SECRET</td>
        <td>__SECRET_CHANGE_ME__</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_IMAGEURL</td>
        <td>http://demo-magento2.vuestorefront.io/media/catalog/product</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_ASSETPATH</td>
        <td>/../var/magento2-sample-data/pub/media</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_API_URL</td>
        <td>http://demo-magento2.vuestorefront.io/rest</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_API_CONSUMERKEY</td>
        <td>[CHANGE ME]</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_API_CONSUMERSECRET</td>
        <td>[CHANGE ME]</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_API_ACCESSTOKEN</td>
        <td>[CHANGE ME]</td>
    </tr>
    <tr>
        <td>VSF_MAGENTO2_API_ACCESSTOKEN_SECRET</td>
        <td>[CHANGE ME]</td>
    </tr>
</table>


## Platforms
<table class="table platforms">
    <thead class="thead-dark">
    <tr>
        <th scope="col">Platform</th>
        <th scope="col">Available</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">Magento 1</th>
        <td></td>
    </tr>
    <tr>
        <th scope="row">Magento 2</th>
        <td></td>
    </tr>
    <tr>
        <th scope="row">Vue Storefront Backend</th>
        <td class="ticked"></td>
    </tr>
    <tr>
        <th scope="row">Vue Storefront Frontend</th>
        <td class="ticked"></td>
    </tr>
    </tbody>
</table>