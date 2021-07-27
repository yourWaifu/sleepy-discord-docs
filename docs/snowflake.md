---
title: Snowflakes and IDs
---

Snowflakes very common type is used for identification. Defined as [SleepyDiscord::Snowflake](reference/Classes/struct_sleepy_discord_1_1_snowflake) in [snowflake.h](reference/Files/snowflake_8h#file-snowflake.h).

## Unique

2 IDs for 2 different objects of the **same type** should not have the same ID. However, 2 ID for objects of **different types** can have the same ID. As such the library uses a template class to help differentiate the two. Often a Server and it's general channel and it's default role has the same ID, so it's useful for getting objects that would be created when another object is created on the same operation.

## Valid

For empty IDs, the library uses an empty string to represent when an ID isn't available. For example, a Direct Message Channel would have an no Server ID and as such it's ID is an empty string.

However, if it's not empty, the only way to know if it's valid is by giving the ID to Discord.

```cpp
if (messageID.empty())
```

## Casting

### To Snowflake

```cpp
Snowflake<Message> ID = "string";
Snowflake<Message> ID = message; //Same as message.ID
Snowflake<Message> ID = 90485;
```

### To String or Int

The Snowflake stores it's data in a string that you can cast to. You can also get a number if you like instead.

```cpp
std::string ID = messageID; //implicit
std::string ID = messagesID.string();
```

### Number

```cpp
int64_t ID = messageID.number(); // throws if empty
```

:::note
When using .number() or .timestamp(), make sure that snowflake isn't empty first or the library will throw an exception.
:::

## Timestamp

Snowflakes contains some data that tells you when an object was create, and the worker and process that created it. The time is what's useful tho, so the library can extract this data for you.

```cpp
```cpp
std::chrono::time_point<std::chrono::steady_clock> birth = messageID.timestamp(); // throws if ID is empty
```

:::note
When using .number() or .timestamp(), make sure that snowflake isn't empty first or you'll get an error.
:::

## Equality == 

This lets you check if you have the right object.

```cpp
if (message.channelID == channel.ID)
```