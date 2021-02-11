(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{265:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(312)),s={title:"Events"},c={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Events are Discord Client member functions that can be overridden that are called when an event happens such as receiving a message occur. For example, the function onMessage is an event.",source:"@site/docs\\events.md",slug:"/events",permalink:"/sleepy-discord-docs/docs/events",version:"current",lastUpdatedAt:1613031763,sidebar:"Docs",previous:{title:"Using only Sleepy Discord",permalink:"/sleepy-discord-docs/docs/only-sleepy-discord"},next:{title:"Requests",permalink:"/sleepy-discord-docs/docs/requests"}},i=[{value:"Usage",id:"usage",children:[]},{value:"onEdit Events",id:"onedit-events",children:[]}],l={toc:i};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Events are Discord Client member functions that can be overridden that are called when an event happens such as receiving a message occur. For example, the function onMessage is an event."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This has the advantage of not needing to send a request for data, as such there's no worry for waiting for the response, dealing with rate limits, or possibility slowing down Discord. They are based on ",Object(o.b)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events"},"Discord API's gateway events"),". All events are declared in the header file client.h in ",Object(o.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-onready"},"the BaseDiscordClient class"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'class MyClientClass : public SleepyDiscord::DiscordClient {\npublic:\n    using SleepyDiscord::DiscordClient::DiscordClient;\n    void onMessage(SleepyDiscord::Message message) override {\n        if (message.startsWith("whcg hello"))\n            sendMessage(message.channelID, "Hello " + message.author.username);\n    }\n};\n')),Object(o.b)("h2",{id:"onedit-events"},"onEdit Events"),Object(o.b)("p",null,"Currently the Library doesn't have a cache, but events are where you get your data for your cache. Make sure you listen to the ",Object(o.b)("inlineCode",{parentName:"p"},"on"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onEdit"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"onDelete")," Events to keep your cache up to date."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"class MyClientClass : public SleepyDiscord::DiscordClient {\npublic:\n    using SleepyDiscord::DiscordClient::DiscordClient;\n    std::unordered_map<\n        Snowflake<SleepyDiscord::Channel>::RawType,\n        SleepyDiscord::Channel\n    > channels;\n    void onChannel(Channel channel) override {\n        channels.push_back(channel);\n    }\n    void onEditChannel(Channel changedChannel) override {\n        auto channel = channels.find(changedChannel.ID);\n        if (channel != channels.end()) {\n            channel->merge(changedChannel);\n        }\n    }\n    void onDeleteChannel(Channel removedChannel) {\n        auto channel = channels.find(removedChannel.ID);\n        if (channel != channels.end()) {\n            channels.erase(channel);\n        }\n    }\n};\n")))}d.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,b=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);