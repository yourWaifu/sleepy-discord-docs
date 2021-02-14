---
title: Discord Objects
---

Most Objects from the library inherit the [SleepyDiscord::IdentifiableDiscordObject](reference/Classes/class_sleepy_discord_1_1_identifiable_discord_object) class. Most of the functionality of this base class is for internal use and mainly about parsing JSON into C++ objects and serialization.

## Identifier

Many can be identified using ``.ID``.

```cpp
Snowflake<Message> ID = message.ID;
```

These pairs of lines of code should be the same

```cpp
if (message1 == message2) //same as
if (message1.ID == message2.ID) //this
```

```cpp
message.getTimestamp(); //same as
message.ID.timestamp(); //this
```

## Relationships

Many objects from Discord are related to other objects. The User and ServerMember Class is a pretty good example of this. The ServerMember Class has relationships to both a Server and a User. A ServerMember has data on a User on a Server, such as the nickname.