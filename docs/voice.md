---
title: Voice
---

## Connect to a Voice Channel

```cpp
myClient.connectToVoiceChannel("channelID", "serverID");
```

```cpp
myClient.connectToVoiceChannel(myClient.createVoiceContext("channelID", "serverID", nullptr));
```

There are a few ways to connect to a voice channel but the first example, calling ``BaseDiscordClient::connectToVoiceChannel`` with just a ``channelID`` and ``serverID``, is the simplest.

## Event Handling
```cpp
class VoiceEventHandler : public SleepyDiscord::BaseVoiceEventHandler {
public:
	VoiceEventHandler() {}
	void onReady(SleepyDiscord::VoiceConnection& connection) {
		/*Do stuff when ready to start sending audio*/
	}
}
VoiceEventHandler voiceEventHandler;

//somewhere else in your code
SleepyDiscord::VoiceContext& context = myClient.createContext("channelID", "serverID", voiceEventHandler);
//or
context.setVoiceHandler(voiceEventHandler);
```

Event handling is done in a separated inherited object, a VoiceEventHandler, creating one is done by simply creating a class that inherits traits from ``BaseVoiceEventHandler``.

During runtime, a reference of or pointer to your VoiceEventHandler will need to be given to a ``VoiceContext``. This object should live longer then the VoiceContexts that hold the pointer to your VoiceEventHandler (VoiceContexts are destroyed after closing the connection). Not doing so will cause the client to crash.

One useful event being the ``BaseVoiceEventHandler::onReady`` event. This is called when the client has finished connecting and is ready to start sending data to one of Discord's voice servers. Some of you maybe confused as to why this is done via a callback and asking "Shouldn't the client be ready after calling ``BaseDiscordClient::connectToVoiceChannel``?". This is because, there's a number of steps involved with getting ready that happen outside the function call.

## Linking the needed libraries

You'll need those if you want to send or receive audio.

### Sodium

Instructions on [libsodium's website](https://download.libsodium.org/doc/installation/)

### Opus

Download the source from [opus's website](https://opus-codec.org/downloads/). It will contain instructions for compiling with make. You can also compile using Visual Studio from the files inside win32.

### A UDP library

Two options, using a custom one or you may instead use ASIO, which you should already have if you are using Websockets++ or uWebSockets.

## Sending Audio

Once connected to a voice server with all needed library linked, we can begin sending Audio to over to Discord. To do this, create a ``AudioSource``, and then call ``VoiceConnection::startSpeaking``.

### Audio Sources
```cpp
struct Music : public SleepyDiscord::AudioPointerSource {
	Music() : SleepyDiscord::AudioPointerSource() {
		File musicFile("music.raw");
		musicLength = musicFile.getSize() / sizeof int16_t;
		music = musicFile.get<int16_t>();
	}
	constexpr inline bool isOpusEncoded() { return false; } //optional, will be false by default
	void read(SleepyDiscord::AudioTransmissionDetails& details, int16_t*& buffer, std::size_t& length) {
		buffer = &music[progress];
		length = details.proposedLength() < (musicLength - progress) ? details.proposedLength() : 0;
		progress += details.proposedLength();
		//note: set length to 0 to stop speaking
	}
	std::size_t progress = 0;
	std::vector<int16_t> music;
	std::size_t musicLength;
};
```

```cpp
struct SquareWave : public SleepyDiscord::AudioVectorSource {
	SquareWave() : SleepyDiscord::AudioVectorSource(), sampleOffset(0) {}
	std::vector<int16_t> read(SleepyDiscord::AudioTransmissionDetails& details) {
		std::vector<int16_t> target(details.proposedLength());
		for (int16_t& sample : target) {
				//2000 is the volume
				//100 is how long half the square wave is
				sample = (++sampleOffset / 100) % 2 ? 2000 : -2000;
		}
		return target;
		//note: return vector with a size of 0 to stop speaking
	}
	std::size_t sampleOffset = 0;
};
```

Creating an AudioSource is done by creating a class that inherits a type of AudioSource and filling in the virtual function, ``read``.

This read function should, by default, output PCM stereo audio samples at 48000 Hz with the 2 channels interleaved.
If you aren't familiar with digital audio samples, [here's a good article about it](http://manual.audacityteam.org/man/digital_audio.html).
In the ``read`` function, you'll be given a ``SleepyDiscord::AudioTransmissionDetails``, this will give details about what audio settings to use and some other stuff like how much audio has been sent since last time.
Don't worry about calling read, the library will instead call ``read`` when audio data is needed while sending audio.

> You can also send Opus encoded audio instead of PMC audio

```cpp
struct Music : public SleepyDiscord::AudioPointerSource {
	constexpr inline bool isOpusEncoded() { return true; }
}
```

As of when this was written, there are two types of ``AudioSources``, pointer and vector. They differ in their read function.

#### AudioPointerSource
``read`` points a pointer to a buffer of audio data and sets the length.

#### AudioVectorSource
``read`` returns a vector of audio data

:::note
The sizes of audio buffers should 960. Which is .02 seconds of 48kHz stereo audio.
:::

#### Related Articles 

[Digital Audio Fundamentals](http://manual.audacityteam.org/man/digital_audio.html)

### Speak
```cpp
//In your VoiceEventHandler
void onReady(SleepyDiscord::VoiceConnection& connection) {
	connection.startSpeaking<SquareWave>(/*Parameters to pass over to SquareWave's constructor*/);
}
```

To start speaking, call ``VoiceConnection::startSpeaking`` with your AudioSource as the template parameter. To stop, send a buffer with the length of zero in your AudioSource's read function. If your AudioSource has any parameters in it's constructor, you pass them to this function. You may also use ``VoiceConnection::stopSpeaking`` to stop speaking.

## Receiving Audio
Not implemented yet.

## Disconnecting
```cpp
void onEndSpeaking(SleepyDiscord::VoiceConnection& connection) {
	connection.disconnect();
}
```

There are a few ways to disconnect, the simplest being calling ``VoiceConnection::disconnect``. You can also disconnect with a VoiceContext or channelID by using ``BaseDiscordClient::disconnectVoiceContext`` or ``BaseDiscordClient:disconnectFromVoiceChannel``.

## Voice State Management

Using voice states, you can info about the state of users in voice chat. This data includes the joining and leaving of voice channels, deaf, mute, etc. You can keep track of voice states via the ``onEditVoiceState`` event on your Discord Client and ``server.voiceStates`` during the ``onServer`` event.