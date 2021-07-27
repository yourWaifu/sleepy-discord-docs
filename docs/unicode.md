---
title: Unicode and Emojis
sidebar_label: Unicode and Emojis
---

C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis.

## Standard Unicode Emojis and Characters

Sleepy Discord should store text content using UTF-8. As such, to use Unicode, you can use C++'s u8 string literals.

String Literal
```cpp
auto foo = u8"語";
sendMessage(channelID, u8"語");
```

:::note
The u8 string types are different in different C++ standards so auto is used and the above code may not work. [More info here.](#c20-and-stdu8string)
:::

If you want to use ASCII in your source files, C++'s escape sequences also work. You'll want to look up the Unicode number for each character on a Unicode Character table. For example, 🔴 has the Unicode number ``U+1F534``, so it's escape sequence is ``\U0001F534``.

Unicode code points
```cpp
auto foo = u8"\u8A9E"; //use little u for 4 digits
auto bar = u8"\u00B5"; //use zeros to fill up to 4 digits
auto fuu = u8"\U0001F534"; //use big U for 8 digits
```

Numeric Hex escapes
```cpp
std::string foo = "\xE8\xAA\x9E"; //one \x for every byte in utf-8
```

## C++20 and std::u8string

In C++20, some of the above code will not work as the library currenty expects the std::string type instead of std::u8string.

Taking a look at the paper [char8_t backward compatibility remediation (P1423)](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1423r2.html), there are many ways to cast a u8 char array to a char array that has the same behavior of eariler C++ standards.

Here's an example of explicit conversions from the paper.

```cpp
std::string from_u8string(const std::string &s) {
  return s;
}
std::string from_u8string(std::string &&s) {
  return std::move(s);
}
#if defined(__cpp_lib_char8_t)
std::string from_u8string(const std::u8string &s) {
  return std::string(s.begin(), s.end());
}
#endif

std::filesystem::path p = ...;
std::string s = from_u8string(p.u8string());  // C++17 or C++20
```

## Custom Emojis

If you want to insert Discord custom emojis into your text content, please prefer to [the Discord API Message formatting reference](https://discord.com/developers/docs/reference#message-formatting).