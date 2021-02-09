---
title: Unicode and Emojis
sidebar_label: Unicode and Emojis
---

C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis.

## Standard Unicode Emojis and Characters

Sleepy Discord should store text content using UTF-8. As such, to use Unicode, you can use C++'s u8 string literals.

String Literal
```cpp
std::string foo = u8"語";
sendMessage(channelID, u8"語");
```

C++'s escape sequences also work, you'll want to look up the code for each character on a Unicode Character table.

Unicode code points
```cpp
std::string foo = "\u8A9E"; //use little u for 4 digits
std::string bar = "\u00B5"; //use zeros to fill up to 4 digits
std::string fuu = "\U0001F534"; //use big U for 8 digits
```

Numeric Hex escapes
```cpp
std::string foo = "\xE8\xAA\x9E"; //one \x for every byte in utf-8
```

## Custom Emojis

If you want to insert Discord custom emojis into your text content, please prefer to [the Discord API Message formatting reference](https://discord.com/developers/docs/reference#message-formatting).