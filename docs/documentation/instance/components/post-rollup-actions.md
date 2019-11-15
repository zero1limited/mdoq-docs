---
layout: default
title: Post Roll Up Actions Component
description: Description of the post roll up actions component
section: instance_components
---

# {{ page.title }}
This component controls actions taken right after the instance is ready. For example for a Magento 2 instance, this would be where the Mdoq admin user is added.

## Settings

## Custom Script
We understand that some projects do have their own special requirements, for this we have added entrypoints where custom commands can be ran to set your instances up propperly.  
The script must be named `mdoq/post_roll_up_actions`, it must also be executable.  
If found the script will be executed multiple times with different arguments.
- Arg 1, this is the "step" argument, it indicates to the script the point at which it is being executed.  
  The possible values are:
  - BEFORE_COMPOSER
  - BEFORE_MAGENTO_COMMANDS
  - BEFORE_COMMON_TOOLS
  - FINAL
- Arg 2, this is a representation of the current state of the instance in comparison to the master branch.  
  The possible values are:  
  - AHEAD
  - IDENTICAL
  - BEHIND
  
Here is a template script that can be added to your repo.  
_N.B: if you just add in as in, Mdoq will log the execution so you can see the points at which it would have been ran_
```bash
#!/bin/bash

ARGUMENT_COMPARISON_AHEAD=AHEAD
ARGUMENT_COMPARISON_IDENTICAL=IDENTICAL
ARGUMENT_COMPARISON_BEHIND=BEHIND

ARGUMENT_STEP_BEFORE_COMPOSER=BEFORE_COMPOSER
ARGUMENT_STEP_BEFORE_MAGENTO_COMMANDS=BEFORE_MAGENTO_COMMANDS
ARGUMENT_STEP_BEFORE_COMMON_TOOLS=BEFORE_COMMON_TOOLS
ARGUMENT_STEP_FINAL=FINAL

INPUT="$1-$2"

case $INPUT in
        "$ARGUMENT_STEP_BEFORE_COMPOSER-$ARGUMENT_COMPARISON_AHEAD")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_COMPOSER-$ARGUMENT_COMPARISON_IDENTICAL")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_COMPOSER-$ARGUMENT_COMPARISON_BEHIND")
            set -xe
            # do something
            ;;
            
        "$ARGUMENT_STEP_BEFORE_MAGENTO_COMMANDS-$ARGUMENT_COMPARISON_AHEAD")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_MAGENTO_COMMANDS-$ARGUMENT_COMPARISON_IDENTICAL")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_MAGENTO_COMMANDS-$ARGUMENT_COMPARISON_BEHIND")
            set -xe
            # do something
            ;;
            
        "$ARGUMENT_STEP_BEFORE_COMMON_TOOLS-$ARGUMENT_COMPARISON_AHEAD")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_COMMON_TOOLS-$ARGUMENT_COMPARISON_IDENTICAL")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_BEFORE_COMMON_TOOLS-$ARGUMENT_COMPARISON_BEHIND")
            set -xe
            # do something
            ;;
            
        "$ARGUMENT_STEP_FINAL-$ARGUMENT_COMPARISON_AHEAD")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_FINAL-$ARGUMENT_COMPARISON_IDENTICAL")
            set -xe
            # do something
            ;;
        "$ARGUMENT_STEP_FINAL-$ARGUMENT_COMPARISON_BEHIND")
            set -xe
            # do something
            ;;
        *)
            echo "input not recognized: $INPUT"
            exit 1
esac
```

## Recreation

