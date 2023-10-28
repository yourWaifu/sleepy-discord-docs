"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[2441],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),h=o,u=m["".concat(p,".").concat(h)]||m[h]||l[h]||i;return t?a.createElement(u,r(r({ref:n},c),{},{components:t})):a.createElement(u,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9875:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=t(3117),o=t(102),i=(t(7294),t(3905)),r=["components"],s={title:"Slash Commands"},p=void 0,d={unversionedId:"slash-commands",id:"slash-commands",title:"Slash Commands",description:"Using slash commands, you can have commands without the need of read messages intents. It also gives a user a standardized graphical user interface.",source:"@site/docs/slash-commands.md",sourceDirName:".",slug:"/slash-commands",permalink:"/sleepy-discord/docs/slash-commands",tags:[],version:"current",lastUpdatedAt:1698528022,formattedLastUpdatedAt:"10/28/2023",frontMatter:{title:"Slash Commands"},sidebar:"Docs",previous:{title:"Connection Options",permalink:"/sleepy-discord/docs/connect-options"},next:{title:"Classes",permalink:"/sleepy-discord/docs/reference/index_classes"}},c=[{value:"Add Commands",id:"add-commands",children:[],level:2},{value:"Responding to Commands",id:"responding-to-commands",children:[],level:2},{value:"Adding Options",id:"adding-options",children:[],level:2},{value:"Responding to Options",id:"responding-to-options",children:[],level:2},{value:"Adding Choices",id:"adding-choices",children:[],level:2},{value:"Autocomplete",id:"autocomplete",children:[],level:2},{value:"Context Menus",id:"context-menus",children:[],level:2}],l={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using slash commands, you can have commands without the need of read messages intents. It also gives a user a standardized graphical user interface."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Slash Commands are only available in the develop branch.\nMany features have not been implemented yet.\nSlash Commands are still being worked on. The main parts of slash commands are finished but many new features like localization, attachment option types, and permissions are still being worked on."))),(0,i.kt)("h2",{id:"add-commands"},"Add Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const std::string name = "hello";\nconst std::string description = "says hello";\n\ncreateGlobalAppCommand(getID(), name, description);\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const std::string name = "hello";\nconst std::string description = "says hello";\n\ncreateServerAppCommand(getID(), server.ID, name, description);\n')),(0,i.kt)("p",null,"There's two create app command request, you can choose from ",(0,i.kt)("inlineCode",{parentName:"p"},"createGlobalAppCommand"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"createServerAppCommand")," for commands that are available depending on the server. The library also provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"createAppCommand")," that combines the two."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Names for commands, values, and choices have a character limit and don't allow some characters. ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming"},"More info here.")))),(0,i.kt)("h2",{id:"responding-to-commands"},"Responding to Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.data.name == "hello") {\n        SleepyDiscord::Interaction::Response<> response;\n        response.type = SleepyDiscord::InteractionCallbackType::ChannelMessageWithSource;\n        response.data.content = "hello";\n        client.createInteractionResponse(interaction.ID, interaction.token, response);\n    } else {\n        //not found\n        SleepyDiscord::Interaction::Response<> response;\n        response.type = SleepyDiscord::InteractionCallbackType::ChannelMessageWithSource;\n        response.data.content = "Couldn\'t find command";\n        response.data.flags = SleepyDiscord::InteractionAppCommandCallbackData::Flags::Ephemeral; //only for the user to see\n        createInteractionResponse(interaction, interaction.token, response);\n        return;\n    }\n}\n')),(0,i.kt)("p",null,"When a user uses a command, the bot will hear about it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onInteraction")," event. The interaction's data object will have the name of the command that was used.\nThe bot should create a Interaction Response, with a type and content. After that, the bot sends a Create Interaction Response request, using the interaction's ID, and token."),(0,i.kt)("h2",{id:"adding-options"},"Adding Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const std::string name = "add";\nconst std::string description = "sum of two number";\nstd::vector<SleepyDiscord::AppCommand::Option> options;\n\nSleepyDiscord::AppCommand::Option left;\nleft.name = "left";\nleft.isRequired = true;\nleft.description = "The number to the left of the + sign";\nleft.type = SleepyDiscord::AppCommand::Option::TypeHelper<double>::getType();\noptions.push_back(std::move(left));\n\nSleepyDiscord::AppCommand::Option right;\nright.name = "right";\nright.isRequired = true;\nright.description = "The number to the right of the + sign";\nright.type = SleepyDiscord::AppCommand::Option::TypeHelper<double>::getType();\noptions.push_back(std::move(right));\n\ncreateGlobalAppCommand(getID(), name, description, std::move(options));\n')),(0,i.kt)("p",null,"When creating the list of the options, you'll need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option")," for each option and move that into the options.\nThe required data is type, name, and description. The type needs to be a value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option::Type")," enum. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option::TypeHelper")," to get the type for things like string, int, and bool.\nThere are some more advanced useful types like ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option::Type::MENTIONABLE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option::SUB_COMMAND"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"SleepyDiscord::AppCommand::Option::SUB_COMMAND_GROUP"),".\nAnother important thing about Options is that they can't easily be copied because the Choices in Options can't be copied, but they can easily be moved with ",(0,i.kt)("inlineCode",{parentName:"p"},"std::move"),"."),(0,i.kt)("h2",{id:"responding-to-options"},"Responding to Options"),(0,i.kt)("p",null,"There's more than one way to handle this, that comes with different pros and cons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.data.name != "add")\n        return; //not found\n\n    for (auto& option : interaction.data.options) {\n        if (option.name == "left" || option.name == "right") {\n            double num;\n            if (option.get(num)) {\n                answer += num;\n            } else {\n                return; //fail\n            }\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.data.name != "add")\n        return; //not found\n\n    for (auto& option : interaction.data.options) {\n        if (option.name == "left" || option.name == "right") {\n            try {\n                answer += option.get<double>();\n            } catch (...) {\n                //fail\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Mainly different ways to error check that parsing the JSON data didn't run into issues. Since we don't know exactly what the type is, it's recommended to use matching types, but there is still a possibility for errors during parsing."),(0,i.kt)("h2",{id:"adding-choices"},"Adding Choices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'SleepyDiscord::AppCommand::Option iceCream;\niceCream.name = "ice-cream";\niceCream.description = "Which ice-cream would you like";\niceCream.type = SleepyDiscord::AppCommand::Option::TypeHelper<std::string>::getType();\n\nSleepyDiscord::AppCommand::Option::Choice vanilla;\nvanilla.name = "Vanilla";\nvanilla.set<std::string>("vanilla");\niceCream.choices.push_back(std::move(vanilla));\n\nSleepyDiscord::AppCommand::Option::Choice matcha;\nvanilla.name = "Matcha";\nvanilla.set<std::string>("matcha");\niceCream.choices.push_back(std::move(matcha));\n\nSleepyDiscord::AppCommand::Option::Choice mixed;\nvanilla.name = "Mixed";\nvanilla.set<std::string>("mixed");\niceCream.choices.push_back(std::move(mixed));\n')),(0,i.kt)("p",null,"Adding choices requires setting with a type and a value. It's recommended that you use matching types."),(0,i.kt)("p",null,"To respond to choices, it's the same as responding to the option like earlier but look out for the values that were set in your choices."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The choices limit is 25, try autocomplete if you are going over that limit"))),(0,i.kt)("h2",{id:"autocomplete"},"Autocomplete"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Adding the option"',title:'"Adding',the:!0,'option"':!0},'SleepyDiscord::AppCommand::Option search;\nsearch.name = "search";\nsearch.description = "looks though the large database";\nsearch.type = SleepyDiscord::AppCommand::Option::TypeHelper<std::string>::getType();\nsearch.autocomplete = true;\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Choices need to be empty for autocomplete to be allowed"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Responding to the user typing"',title:'"Responding',to:!0,the:!0,user:!0,'typing"':!0},'void onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.type == SleepyDiscord::Interaction::Type::ApplicationCommandAutocomplete) {\n        try {\n            std::string query = option.get<std::string>();\n            SleepyDiscord::Interaction::AutocompleteResponse response;\n            SleepyDiscord::AppCommand::Option::Choice extraE;\n            extraE.name = "E";\n            extraE.set<std::string>(query + "e");\n            response.data.choices.push_back(std::move(extraE));\n            client.createInteractionResponse(interaction.ID, interaction.token, response);\n        } catch (...) {\n            //fail\n        }\n    } else {\n        // execute search command\n    }\n}\n')),(0,i.kt)("p",null,"Using autocomplete, your bot can set the choices dynamically as the user types their command. You need to set an option without any choices to allow autocomplete by setting  ",(0,i.kt)("inlineCode",{parentName:"p"},"option.autocomplete")," to true. After that, the bot needs to respond to the options as the user types with a list of choices using an ",(0,i.kt)("inlineCode",{parentName:"p"},"Interaction::AutocompleteResponse"),". You can also tell when the user is typing with autocomplete using ",(0,i.kt)("inlineCode",{parentName:"p"},"interaction.type"),"."),(0,i.kt)("h2",{id:"context-menus"},"Context Menus"),(0,i.kt)("p",null,"There's 2 forms of commands that use context menus, user commands and message commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const std::string name = "star";\nconst std::string description = "add a star a message";\nconst bool defaultPermissions = true;\n//The type needs to be set to message\nconst SleepyDiscord::AppCommand::Type type = SleepyDiscord::AppCommand::Type::MESSAGE;\n\nclient.createGlobalAppCommand(getID(), name, description,\n    SleepyDiscord::AppCommand::emptyOptions, defaultPermissions, type);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Responding to Message Commands"',title:'"Responding',to:!0,Message:!0,'Commands"':!0},'void onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.data.name != "star")\n        return; //not found\n\n    SleepyDiscord::Message message;\n    if (!interaction.data.resolved.messages.find(interaction.data.targetID, message)) {\n        return; //fail\n    }\n    // use message to get required data\n    message.content;\n}\n\n//or\nvoid onInteraction(SleepyDiscord::Interaction interaction) override {\n    if (interaction.data.name != "star")\n        return; //not found\n        \n    auto iterator = interaction.data.resolved.messages.find(interaction.data.targetID);\n    if (iterator == interaction.data.resolved.messages.end()) {\n        return; //fail\n    }\n    SleepyDiscord::Message message = iterator->value;\n}\n')),(0,i.kt)("p",null,"These types of commands do not contain any options and instead get parameters via ",(0,i.kt)("inlineCode",{parentName:"p"},"interaction.data.resolved"),". Which contains the objects that are selected or in other objects related to the target, ",(0,i.kt)("inlineCode",{parentName:"p"},"interaction.data.targetID"),". For example, if someone is mentioned in a message, you can find that user's User object in ",(0,i.kt)("inlineCode",{parentName:"p"},"interaction.data.resolved.users"),"."))}m.isMDXComponent=!0}}]);