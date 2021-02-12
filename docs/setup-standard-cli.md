---
title: CMake Command Line Interface
includes:
---

Change current directory to the directory with your CMakeList.txt file.

```shell
cd your-project
```

Create a new directory named build.

```shell
mkdir build
```

Change current directory to the new build directory.

```shell
cd build
```

Choose a CMake Generator to use. [Here's a list of them](https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html). In this example, we will use the default, so we'll keep it empty. The default is different depending on your system but it's likely ``make``.

Generate build configuration files using CMake on the previous directory with your chosen CMake Generator.

```shell
cmake ..
```

* [Compile and Build](generator-compile)
* [Common Errors](common-build-errors)