---
title: CMake Graphical User Interface
includes:
---

 1. At near the top, click ``Browse Source..``.

 2. Go to and Select the folder with your CMakeList.txt file.

 3. Right below the Browse Source button, click the ``Browse Build..`` button.

 4. Create a new folder in the folder with your CMakeList.txt file and call it ``build``.

 5. Select the new ``build`` folder that you just created.

 6. Around the middle, click the ``Generate`` button.

 7. Select the generator you want to use. For example, if you want to use Visual Studio 2017 and compile for 64 bit Windows, use ``Visual Studio 15 2017 Win64``.

 8. 
  * If you used VCPKG, do the following:
    * Select ``Specify toolchain file`` and click ``Next``. Enter ``enter [path to vcpkg]/scripts/buildsystems/vcpkg.cmake`` with ``[path to vcpkg]`` replaced and click ``Finish``.
  * Otherwise, do the following:
    * Select ``Use default native compilers`` and click ``Finish``.

 9. Wait until it's done. You can tell when it says ``Generating done`` at the bottom.

 * [Compile and Build](generator-compile)
 * [Common Errors](common-build-errors)