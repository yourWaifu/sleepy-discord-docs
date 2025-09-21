---
title: Embeds
---

```cpp
SleepyDiscord::Embed embed{};
embed.description = "Discord!";
client.sendMessage(message.channelID, "Hello", embed);
```

Based on the [Discord API's Embed Object](https://discord.com/developers/docs/resources/channel#embed-object). Defined as [SleepyDiscord::Embed](api#struct_sleepy_discord_1_1_embed).