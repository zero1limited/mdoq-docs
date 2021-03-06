---
layout: default
title: Magento 2 Configured Logging
description: Discussion and ideas on adhering the point 3 of 12 factor apo design for logging 
---


# {{ page.title }}

A recent question asked us to by a client was "Can we format the logs being written by Magento into a
more usable format, such as JSON?". Knowing that Magento uses [Monolog](https://packagist.org/packages/monolog/monolog) to provide logging
 functionality, my instant response was "Yes". However in providing an example of 
 how this could be done, lead me to investigate what the best way to do this actually is? As we use [Mdoq](https://www.mdoq.io) where 
 we can have in excess of 20 development and non production environments I was also conscious that we adhered to 
 [point 3](https://12factor.net/config) of [12 factor app design](https://12factor.net/) methodology.    
So my target became, "How can we allow configuration of logging to be changed in a managed per environment manner?"
 This would allow me to answer questions such as:
- *Can my production environment send errors to slack?*
- *Can I send the logs for my production environment to a logging server, 
 whilst allowing logs to be written to disc in development environments.*
 - *Can I only log errors on live, and log everything in development.*

## How do you log something in magento?
There is a lot of documentation and guides on how to write to logs in your own modules, so this 
will just be a quick summary.  
Magento 2 implements dependency injection so to allow you to write to logs all you need to do is 
require the correct class in your classes constructor and Magento will inject a fully instantiated 
logging object.
```php
class LoggingTest {
    
    public function __contstruct(
        \Psr\Log\LoggerInterface $logger
    ){
        $logger->debug('something cool');
        $logger->error('oh dear something bad happened! :(');
    }
}
```
Using this example, when a `LoggingTest` object is instantiated, a log of level 'debug' and a log 
of level 'error' will be output. More information and explanation can be found [here](https://devdocs.magento.com/guides/v2.3/config-guide/log/log-magento.html).

## How do you change the output format?
Although the Magento dev docs do provide example of how you can implement your own loggers, there 
is no mention of how you can change the default format for Magentos core logs. To do this I first looked 
at the configuration for `\Psr\Log\LoggerInterface` this done in: `app/etc/di.xml`  
```xml
<preference for="Psr\Log\LoggerInterface" type="Magento\Framework\Logger\Monolog" />
```
This tells the object manager, when an object requests `Psr\Log\LoggerInterface` return an instance of `Magento\Framework\Logger\Monolog`. So lets look as how that's configured. 
```xml
<type name="Magento\Framework\Logger\Monolog">
    <arguments>
        <argument name="name" xsi:type="string">main</argument>
        <argument name="handlers"  xsi:type="array">
            <item name="system" xsi:type="object">Magento\Framework\Logger\Handler\System</item>
            <item name="debug" xsi:type="object">Magento\Framework\Logger\Handler\Debug</item>
            <item name="syslog" xsi:type="object">Magento\Framework\Logger\Handler\Syslog</item>
        </argument>
    </arguments>
</type>
```
This tells Magento to construct the class with the `$name` argument set to `main` with 3 handlers.  
As all the handlers are dealt with in a similar manner I'll explore the `system`  handler as an example.  
```xml
<type name="Magento\Framework\Logger\Handler\System">
    <arguments>
        <argument name="filesystem" xsi:type="object">Magento\Framework\Filesystem\Driver\File</argument>
    </arguments>
</type>
```
This class lives in `vendor/magento/framework/Logger/Handler/System.php` and we can see,  
The output path is in the class,
 ```php
/**
 * @var string
 */
protected $fileName = '/var/log/system.log';
```
 however this can be overridden by supplying a `$filePath` in the constructor, which is promising,
 unfortunately this would need to supplied in DI config, which doesn't change per environment.
On similar veins we can also see that the verbosity is fixed with no way to configure it.
```php
/**
 * @var int
 */
protected $loggerType = Logger::INFO;
```
We are unable to change the output as the class inherits from `Magento\Framework\Logger\Handler\Base`
which inherits from `Monolog\Handler\StreamHandler` 
We are also unable to change how to output looks as the line format is fixed in the constructor of `Magento\Framework\Logger\Handler\Base`
```php
/**
 * @param DriverInterface $filesystem
 * @param string $filePath
 * @param string $fileName
 */
public function __construct(
    DriverInterface $filesystem,
    $filePath = null,
    $fileName = null
) {
    $this->filesystem = $filesystem;
    if (!empty($fileName)) {
        $this->fileName = $this->sanitizeFileName($fileName);
    }
    parent::__construct(
        $filePath ? $filePath . $this->fileName : BP . DIRECTORY_SEPARATOR . $this->fileName,
        $this->loggerType
    );

    $this->setFormatter(new LineFormatter(null, null, true));
}
```
Again to change these limitations we could simply override the class in DI config, but this 
wouldn't change on a per environment basis.

## How can you change this in a per environment manner?
This is quite an easy one, Magento as a whole does adhere to point 3, it has a `env.php` file which as described [here](https://devdocs.magento.com/guides/v2.3/config-guide/deployment/pipeline/#manage-the-configuration)
is intended for just such circumstances.
We can simply run a command like `TODO` and this would set us an environmentally scoped value.

## The Plan
With this information in mind, we have all the components needs to implement what I feel is a usable solution.
To start with we will configure different logging 'stacks' by this I mean a different set of configured 
handlers for monolog, i.e  
The production stack
- Log level should only be error and higher
- Slack message on error
- rotating logs
- additional context variables
  
The non production stack:
- Log level debug
- single log file
- additional context variables
  
These stacks will be defined in `app/etc/config.php`, we will then swap which stack is used with a value
 in `app/etc/env.php` . This will mean we can source control the stacks, so if we suddenly stop getting 
slack messages we know why. Whilst allowing us to toggle between them. In addition to this, I would like 
to add additional context values, which come in extremely useful when debugging issues (explained below).

## The Work
1. First things first, I need somewhere to develop our new module. So I use [Mdoq](https://www.mdoq.io) to [create a new instance](https://docs.mdoq.io/tutorials/creating-a-new-instance.html) 
  and a minute or so later I have a full working replica of a Magento site. (in this case our Acme site, used for general dev)
  [insert image]
2. To get a module in place quickly, we will use [Pestle](https://github.com/astorm/pestle/blob/master/README.md)
  this is installed by default on [Mdoq](https://www.mdoq.io) so we can simply run: `pestle generate_module Zero1 CustomLogging 1.0.0`  
  [insert image]
3. Now we need to declare the environmental values we are going to use

## The Result