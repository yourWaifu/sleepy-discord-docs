---
title: Getting Started
sidebar_label: Starting
slug: /
next: setup-standard
---

 1. You'll need to have a folder or directory for project. Make one if you don't have one.

 2. In case you do not already have any source code, create a cpp file and copy and paste [this example code](https://github.com/yourWaifu/sleepy-discord/blob/master/examples/hello/example0.cpp).

 3. If you haven't already installed git, do so now. Type in the command ``git --version`` to make sure it's installed.

 4. Create a new folder in your project's folder, call it ``deps``, short for dependencies. Go into the deps folder and clone the library's git repository, ``https://github.com/yourWaifu/sleepy-discord.git``, from there.

```shell
mkdir deps
cd deps
git clone https://github.com/yourWaifu/sleepy-discord.git
```

Your folder should look something like this.

```shell
my-project
├── deps
│   └── sleepy-discord
└── source.cpp
```

## Go to the next page

### [Standard](setup-standard)
Use Default configuration
