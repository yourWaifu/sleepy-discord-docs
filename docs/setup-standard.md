---
title: Standard Configuration
sidebar_label: Standard Configuration
next: setup-standard-vs-cmake
---

## What You Need

 * [CMake](https://cmake.org/download/)
   * Can be installed using Visual Studio installer, Cmake's website, or your package manager
 * OpenSSL library
   * For Windows users, you can install it using [VCPKG](https://github.com/microsoft/vcpkg#quick-start-windows) and the command ``.\vcpkg\vcpkg install openssl:x64-windows`` or ``.\vcpkg\vcpkg install openssl:x86-windows``.
   * For Linux users, use your package manager and install libssl-dev or openssl-devel. The name depends on your package manager.
 * A C++ Compiler
   * [Go here for build status](https://github.com/yourWaifu/sleepy-discord#build-status).
   * For Visual Studio users, Visual Studio has a c++ compiler.
 * libCurl (Required for Linux)
   * install a package like ``libcurl4-openssl-dev`` on your package manager
   * on Windows, the cmake script should compile libCurl for you. So libCurl should be set up for you when you run cmake.
 * Windows SDK (Required for Windows)
   * If you are using Visual Studio, it's recommend you download this from the Visual Studio installer.
   * The library doesn't really use it but you can run into issues without it.

## Instructions

### Creating a CMakeList file

```shell
my-project
├── deps
│   └── sleepy-discord
├── source.cpp
└── CMakeLists.txt
```

 1. In case you haven't already created a CMakeLists.txt file for your project. please do so on the root directory or folder of your project.

### Writing a CMakeList file

```cmake
#CMakeLists.txt
cmake_minimum_required (VERSION 3.6)
project(example)

add_executable(replace-me source.cpp)
```

 1. Replace replace-me with the name of your project or executable.

## Linking Sleepy Discord

```cmake
#Add these two lines
add_subdirectory(deps/sleepy-discord)
target_link_libraries(replace-me sleepy-discord)
```

 3. Add these two lines to the CMakeList.txt so that Sleepy Discord will be linked.

 4. If you are following the examples, you can skip this step. Otherwise, replace ``deps/sleepy-discord`` with the [relative path](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) to the sleepy-discord directory folder relative to the ``CmakeLists.txt`` file. Windows users, remember to use ``/``.

:::note
In ``add_subdirectory``, using a directory that isn't a subdirectory to the current folder will require you to add a path to the binary folder for sleepy-discord as the 2nd parameter. It is recommended that you don't do this.
:::

## Example

### Simple Example

```shell
my-project
├── deps
│   └── sleepy-discord
├── source.cpp
└── CMakeLists.txt
```

```cmake
cmake_minimum_required (VERSION 3.6)
project(example)

add_executable(replace-me source.cpp)

add_subdirectory(deps/sleepy-discord)
target_link_libraries(replace-me sleepy-discord)
```

### Another Example

```shell
light-blob-bot
├── sleepy-discord
├── ui
│   └── switch.cpp
├── material
│   ├── matal.cpp
│   ├── plastic.cpp
│   └── glass.cpp
├── CMakeLists.txt
├── light.cpp
├── blob.cpp
└── main.cpp
```

```cmake
cmake_minimum_required (VERSION 3.6)
project(light-blob)

add_executable(light-blob light.cpp blob.cpp
main.cpp ui/switch.cpp
material/metal.cpp material/plastic.cpp material/glass.cpp)

add_subdirectory(sleepy-discord)
target_link_libraries(light-blob sleepy-discord)
```

## Next Step

Choose your CMake Interface.

### Recommendation for Windows Users
 * [Visual Studio CMake](./setup-standard-vs-cmake)

### Any OS
 * [CMake App (GUI)](./setup-standard-gui)
 * [CMake Command (CLI)](./setup-standard-cli)