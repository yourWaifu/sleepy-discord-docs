---
title: Embeds
---

```cpp
SleepyDiscord::Embed embed{};
embed.description = "Discord!";
client.sendMessage(message.channelID, "Hello", embed);
```

Based on the [Discord API's Embed Object](https://discord.com/developers/docs/resources/channel#embed-object). Defined as [SleepyDiscord::Embed](http://localhost:3000/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed) in [embed.h](http://localhost:3000/sleepy-discord-docs/docs/reference/Files/embed_8h#file-embed.h).