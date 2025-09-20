---
title: Requests
---

Request allow you to send and get data by requesting Discord to do something. The upside that is that it's often simple to have Discord do stuff for you, but the downside is dealing with rate limits, waiting for a response, and error handling. Sleepy Discord changes how it handles these issues with different modes.

# Request Settings

## Request Mode

Request changes how the library handles the request. Mode is a enum and calculated using bitwise operations. For all available modes, you can find them in [the header file client.h](api).

```cpp
sendMessage(sendMessageParams, SleepyDiscord::Async);
```

### Async

Does the request later, often on another thread. Useful for keeping your bot busy by not stopping a thread to wait for a response or a 2nd chance after a failed request.

```cpp
sendMessage(sendMessageParams, { SleepyDiscord::Async,
    [](SleepyDiscord::ObjectResponse<SleepyDiscord::Message> res) {
        SleepyDiscord::Message message;
        if (!res.cast(message))
            return; //error
    }
});
```

Async requests should return an empty response right after being called.

### Sync

Does the request when the function is called. Simpler then Async but with downsides of blocking the thread.

```cpp
try {
    sendMessage(sendMessageParams, SleepyDiscord::Sync);
} catch (SleepyDiscord::ErrorCode code) {
    //error
}
```

### Combining Modes Together

You can use bitwise operators to fine tune the setting you want for a request. For example, if you don't want to use throw for error checking on an Sync request, take a look at the example.

```cpp
auto mode = SleepyDiscord::RequestMode(SleepyDiscord::Sync & ~(SleepyDiscord::ThrowError));
SleepyDiscord::Message message;
if (sendMessage(params, mode).cast(message)) {
    //success
} else {
    //error
}
```

For all available modes, checkout the header file ``client.h``.

### Setting a default Request Mode

You might not want to keep rewriting the request mode if you have a favorite. The library uses a Preprocessor Define that you can set in your build config or before including the library.

```cpp
#define SLEEPY_DEFAULT_REQUEST_MODE SleepyDiscord::Async
#include "sleepy_discord/sleepy_discord.h"
```

## Rate limited Request

The Library will handle Rate Limits for you but different modes and modules will give you different behaviors to your code.

### AsyncQueue ON

When rate limited, this makes the request async and will do the request when the rate limit is lifted. This is a flag that set to ON on both ``Async`` and the default, ``Sync_AsyncQueue``.

:::note
When doing more then one request, after the rate limit is lifted, the requests will be done out of order.
:::

### AsyncQueue OFF

When rate limited, it'll return a error response.

# Responses

After making a request, a response object is returned. This can be an error, a object, an array, or a boolean.

## Casting

After a successful request, you'll want to get your data. There's multiple ways to do this.

### Implicit casting
```
SleepyDiscord::Message message = sendMessage(params);
```
```cpp
auto messageResponse = sendMessage(params);
SleepyDiscord::Message message = messageResponse;
```
```cpp
SleepyDiscord::ObjectResponse<SleepyDiscord::Message> messageResponse = sendMessage(params);
Message message = messageResponse;
```
For Objects, Booleans, and Strings

### Output Parameter Reference
```cpp
SleepyDiscord::Message message;
sendMessage(params).cast(message);
```
```cpp
if (sendMessage(params).cast(message))
    //successful cast
```
For Objects and returns true on success, could prevent a crash.

### Returned from cast function
```cpp
SleepyDiscord::Message message = sendMessage(params).cast();
```
For Objects and Booleans

### Arrays
```cpp
std::vector<SleepyDiscord::Message> messages;
getMessages().get(messages);
```
For any container that returns iterators with ``.begin()`` and ``.end()``
```cpp
messages = getMessages();
```
For std::list and std::vector
```cpp
messages = getMessages().vector();
```
``.list()`` for returning a std::list
```cpp
getMessages().get<std::vector<SleepyDiscord::Message>>(message);
getMessages().get<std::vector>(messages);
```
Same as the first ``.get()`` from before but with a template, when the compiler isn't sure which type to use.
```cpp
messages = getMessages().get<std::vector<SleepyDiscord::Message>>();
messages = getMessages().get<std::vector>();
```

## Handling Error Responses

Sometimes an error is given, here are examples that should detect them.

### Try Catch

```cpp
try {
    sendMessage(sendMessageParams);
} catch (SleepyDiscord::ErrorCode code) {
    //error
}
```

This requires the Mode to have the ``ThrowError`` flag set, which is set by the default Mode.

### If Error

```cpp
if (sendMessage(params).error())
    //error
```

Works on response type. Returns true on error.

### Cast Returns bool

```cpp
if (deleteMessage(channelID, messageID).cast())
    //success
else
    //error
```

This will depend on the request and only when a ``BoolResponse`` is returned. If you don't want any throws during the request, ``ThrowError`` flag in the ``RequestMode`` needs to be disabled. Checkout [Async](#async) and [Combining Modes Together](#combining-modes-together) for examples.