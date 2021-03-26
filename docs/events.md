---
title: Events
---

Events are Discord Client member functions that can be overridden and are called when an event happens such as receiving a message. For example, the function onMessage is an event. Events are received on an ongoing connection with Discord's server. This has the advantage of not needing to keep sending a request for data, as such there's no worry for waiting for the response, dealing with rate limits, or possibility slowing down Discord.

## Usage

To use, you first need to set the intents to tell Discord to send them before running as this happens at the beginning of the connection. Next, you override onMessage member function with what you want to happen when the event occurs. This is based on [Discord API's gateway events](https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events). All events are declared in the header file client.h in [the BaseDiscordClient class](/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-onready).

```cpp
class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;
	void onMessage(SleepyDiscord::Message message) override {
		if (message.startsWith("whcg hello"))
			sendMessage(message.channelID, "Hello " + message.author.username);
	}
};

int main() {
	MyClientClass client("token", SleepyDiscord::USER_CONTROLED_THREADS);
    //tell Discord to send use message events
	client.setIntents(SleepyDiscord::Intent::SERVER_MESSAGES);
	client.run();
}
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
    void onServer(Server server) override { //called when server is available
        for (Channel& channel : server.channels) {
            channels.insert({channel.id, channel});
        }
    }
    void onChannel(Channel channel) override { //called when channel is created
        channels.insert({channel.id, channel});
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
