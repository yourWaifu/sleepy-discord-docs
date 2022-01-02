---
title: Slash Commands
---

Using slash commands, you can have commands without the need of read messages intents. It also gives a user a standardized graphical user interface.

:::note
Slash Commands are only available in the develop branch.
Many features have not been implemented yet.
Slash Commands is still being worked on. The main parts of slash commands is finished but many new features like localisation, attachment option types, and permissions are still being worked on.
:::

## Add Commands

```cpp
const std::string name = "hello";
const std::string description = "says hello";

createGlobalAppCommand(getID(), name, description);
```

or

```cpp
const std::string name = "hello";
const std::string description = "says hello";

createServerAppCommand(getID(), server.ID, name, description);
```

There's two create app command request, you can choose from ``createGlobalAppCommand``, and ``createServerAppCommand`` for commands that are available depending on the server. The library also provides a ``createAppCommand`` that combines the two.

:::note
Names for commands, values, and choices have a character limit and don't allow some characters. [More info here.](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming)
:::


## Responding to Commands

```cpp
void onInteraction(SleepyDiscord::Interaction interaction) override {
    if (interaction.data.name == "hello") {
        SleepyDiscord::Interaction::Response<> response;
        response.type = SleepyDiscord::InteractionCallbackType::ChannelMessageWithSource;
        response.data.content = "hello";
        client.createInteractionResponse(interaction.ID, interaction.token, response);
    } else {
        //not found
        SleepyDiscord::Interaction::Response<> response;
        response.type = SleepyDiscord::InteractionCallbackType::ChannelMessageWithSource;
        response.data.content = "Couldn't find command";
        response.data.flags = SleepyDiscord::InteractionAppCommandCallbackData::Flags::Ephemeral; //only for the user to see
        createInteractionResponse(interaction, interaction.token, response);
        return;
    }
}
```

When a user uses a command, the bot will hear about it in the ``onInteraction`` event. The interaction's data object will have the name of the command that was used.
The bot should create a Interaction Response, with a type and content. After that, the bot sents a Create Interaction Response request, using the interaction's ID, and token.

## Adding Options

```cpp
const std::string name = "add";
const std::string description = "sum of two number";
std::vector<SleepyDiscord::AppCommand::Option> options;

SleepyDiscord::AppCommand::Option left;
left.name = "left";
left.isRequired = true;
left.description = "The number to the left of the + sign";
left.type = SleepyDiscord::AppCommand::Option::TypeHelper<double>::getType();
options.push_back(std::move(left));

SleepyDiscord::AppCommand::Option right;
right.name = "right";
right.isRequired = true;
right.description = "The number to the right of the + sign";
right.type = SleepyDiscord::AppCommand::Option::TypeHelper<double>::getType();
options.push_back(std::move(right));

createGlobalAppCommand(getID(), name, description, std::move(options));
```

When creating the list of the options, you'll need to create a ``SleepyDiscord::AppCommand::Option`` for each option and move that into the options.
The required data is type, name, and description. The type needs to be a value in the ``SleepyDiscord::AppCommand::Option::Type`` enum. You can use ``SleepyDiscord::AppCommand::Option::TypeHelper`` to get the type for things like string, int, and bool.
There are some more advanced useful types like ``SleepyDiscord::AppCommand::Option::Type::MENTIONABLE``, ``SleepyDiscord::AppCommand::Option::SUB_COMMAND``, and ``SleepyDiscord::AppCommand::Option::SUB_COMMAND_GROUP``.
Another important thing about Options is that they can't easily be copied because the Choices in Options can't be copied but they can easily be moved with ``std::move``.

## Responding to Options

There's more then one way to handle this that comes with different pros and cons.

```cpp
void onInteraction(SleepyDiscord::Interaction interaction) override {
    if (interaction.data.name != "add")
        return; //not found

    for (auto& option : interaction.data.options) {
        if (option.name == "left" || option.name == "right") {
            double num;
            if (option.get(num)) {
                answer += num;
            } else {
                return; //fail
            }
        }
    }
}
```

```cpp
void onInteraction(SleepyDiscord::Interaction interaction) override {
    if (interaction.data.name != "add")
        return; //not found

    for (auto& option : interaction.data.options) {
        if (option.name == "left" || option.name == "right") {
            try {
                answer += option.get<double>();
            } catch (...) {
                //fail
            }
        }
    }
}
```

Mainly different ways to error check that parsing the json data didn't run into issues. Since we don't know exactly what the type is, it's recommended to use matching types but there is still a possibility for errors during parsing.

## Adding Choices

```cpp
SleepyDiscord::AppCommand::Option iceCream;
iceCream.name = "ice-cream";
iceCream.description = "Which ice-cream would you like";
iceCream.type = SleepyDiscord::AppCommand::Option::TypeHelper<std::string>::getType();

SleepyDiscord::AppCommand::Option::Choice vanilla;
vanilla.name = "Vanilla";
vanilla.set<std::string>("vanilla");
iceCream.choices.push_back(std::move(vanilla));

SleepyDiscord::AppCommand::Option::Choice matcha;
vanilla.name = "Matcha";
vanilla.set<std::string>("matcha");
iceCream.choices.push_back(std::move(matcha));

SleepyDiscord::AppCommand::Option::Choice mixed;
vanilla.name = "Mixed";
vanilla.set<std::string>("mixed");
iceCream.choices.push_back(std::move(mixed));
```

Adding choices requires setting with a type and a value. It's recommended that you use matching types.

To response to choices, it's the same as responding to the option like earlier but look out for the values that were set in your choices.

:::warning
The choices limit is 25, try autocomplete if you are going over that limit
:::

## Autocomplete

```cpp title="Adding the option"
SleepyDiscord::AppCommand::Option search;
search.name = "search";
search.description = "looks though the large database";
search.type = SleepyDiscord::AppCommand::Option::TypeHelper<std::string>::getType();
search.autocomplete = true;
```

:::warning
Choices need to be empty for autocomplete to be allowed
:::

```cpp title="Responding to the user typing"
void onInteraction(SleepyDiscord::Interaction interaction) override {
    if (interaction.type == SleepyDiscord::Interaction::Type::ApplicationCommandAutocomplete) {
        try {
            std::string query = option.get<std::string>();
            SleepyDiscord::Interaction::AutocompleteResponse response;
            SleepyDiscord::AppCommand::Option::Choice extraE;
            extraE.name = "E";
            extraE.set<std::string>(query + "e");
            response.data.choices.push_back(std::move(extraE));
        } catch (...) {
            //fail
        }
    } else {
        // execute search command
    }
}
```

Using autocomplete, your bot can set the choices dynamically as the user types their command. You need to set an option without any choices to allow autocomplete by setting  ``option.autocomplete`` to true. After that, the bot needs to respond to the options as the user types with a list of choices using a ``Interaction::AutocompleteResponse``. You can also tell when the user is typing with autocomplete using ``interaction.type``.