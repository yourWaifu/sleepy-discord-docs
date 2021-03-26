---
title: Visual Studio CMake
includes:
---

 1. At the top, on the menu bar. Click on File > Open > Folder. 
 2. Select the folder with your CMakeLists.txt then click OK.
 3. Wait for your project to load and finish generating.
 4. If you used VCPKG, do the following, otherwise skip this step. Right click your CMakeLists.txt from the Solution Explorer and click CMake Settings. Scroll down to CMake toolchain file, and enter ``[path to vcpkg]/scripts/buildsystems/vcpkg.cmake`` with ``[path to vcpkg]`` replaced. Save the file and wait for the project to finnish generating.
 5. Right click your CMakeLists.txt from the Solution Explorer and click build or debug.

* [For info about this feature](https://docs.microsoft.com/en-us/cpp/ide/cmake-tools-for-visual-cpp).
* [Common Errors](common-build-errors)