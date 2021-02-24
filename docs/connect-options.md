---
title: Connection Options
---

Changes how the realtime 2 way connection between the client and Discord's Gateway WebSockets Server behaves.

## Gateway Version

You can set this by switching between different Git branches of the library's repo. You can't set the gateway version using code as the library doesn't account for differences between version. For versions that Discord supports, check out [the Discord API docs](https://discord.com/developers/docs/topics/gateway#gateway-intents). For Git branches of this library, check out [the GitHub repo](https://github.com/yourWaifu/sleepy-discord/branches).

## Intents

Filters what information Discord sends to the client. [Click here for a list of available Intents](reference/Files/client_8h/#enum-intent).

:::important

Required for v8 and up

:::

```cpp
Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);
auto intentsList = {
    SleepyDiscord::Intent::SERVER_MESSAGES,	//required for commands via messages
    SleepyDiscord::Intent::SERVER_VOICE_STATES, //required for connecting to voice
};
client.setIntents(intentsList);
client.run(); //call setIntents before calling run
```

```cpp
Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);
client.setIntents(
    SleepyDiscord::Intent::SERVER_MESSAGES,
    SleepyDiscord::Intent::SERVER_VOICE_STATES
);
client.run(); //call setIntents before calling run
```

## Compression

Makes Discord send Zlib compressed WebSockets to save bandwidth but with a cost, CPU and some RAM at runtime.

:::note

You need to set USE_ZLIB_NG to ON in CMake for this to work.

:::

```cpp
Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);
client.useCompression(true);
client.run(); //call useCompression before calling run
```

## Sharding

Lets you split up your bots' operations by splitting the list of Discord servers that each connection handles. This can be done by running multiple instances of your Client with the same token but different shard IDs.

```cpp
Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);
client.setShardID(0, 2); //the first parameter is the shardID
client.run(); //call setShardID before run

//somewhere else
Client client("token", SleepyDiscord::USER_CONTROLED_THREADS); //Same token
client.setShardID(1, 2); //different shardID but same shardCount
client.run();
```

For more information on sharding, check [the Discord API Docs](https://discord.com/developers/docs/topics/gateway#sharding).