---
title: Events
---

Events are Discord Client member functions that can be overridden that are called when an event happens such as receiving a message occur. For example, the function onMessage is an event.

## Usage

This has the advantage of not needing to send a request for data, as such there's no worry for waiting for the response, dealing with rate limits, or possibility slowing down Discord. They are based on [Discord API's gateway events](https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events). All events are declared in the header file client.h in [the BaseDiscordClient class](/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-onready).

```cpp
class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;
	void onMessage(SleepyDiscord::Message message) override {
		if (message.startsWith("whcg hello"))
			sendMessage(message.channelID, "Hello " + message.author.username);
	}
};
```

## onEdit Events

Currently the Library doesn't have a cache, but events are where you get your data for your cache. Make sure you listen to the ``on``, ``onEdit``, and ``onDelete`` Events to keep your cache up to date.

```cpp
class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;
	std::unordered_map<
        Snowflake<SleepyDiscord::Channel>::RawType,
        SleepyDiscord::Channel
    > channels;
    void onChannel(Channel channel) override {
        channels.push_back(channel);
    }
    void onEditChannel(Channel changedChannel) override {
        auto channel = channels.find(changedChannel.ID);
        if (channel != channels.end()) {
            channel->merge(changedChannel);
        }
    }
    void onDeleteChannel(Channel removedChannel) {
        auto channel = channels.find(removedChannel.ID);
        if (channel != channels.end()) {
            channels.erase(channel);
        }
    }
};
```
