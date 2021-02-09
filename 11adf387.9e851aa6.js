(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{311:function(e,n,c){"use strict";c.d(n,"a",(function(){return p})),c.d(n,"b",(function(){return f}));var t=c(0),r=c.n(t);function i(e,n,c){return n in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c,e}function o(e,n){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.push.apply(c,t)}return c}function s(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?o(Object(c),!0).forEach((function(n){i(e,n,c[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(c,n))}))}return e}function a(e,n){if(null==e)return{};var c,t,r=function(e,n){if(null==e)return{};var c,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)c=i[t],n.indexOf(c)>=0||(r[c]=e[c]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)c=i[t],n.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),c=n;return e&&(c="function"==typeof e?e(n):s(s({},n),e)),c},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var c=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(c),b=t,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return c?r.a.createElement(f,s(s({ref:n},l),{},{components:c})):r.a.createElement(f,s({ref:n},l))}));function f(e,n){var c=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=c.length,o=new Array(i);o[0]=b;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<i;l++)o[l]=c[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,c)}b.displayName="MDXCreateElement"},81:function(e,n,c){"use strict";c.r(n),c.d(n,"frontMatter",(function(){return o})),c.d(n,"metadata",(function(){return s})),c.d(n,"toc",(function(){return a})),c.d(n,"default",(function(){return d}));var t=c(3),r=c(7),i=(c(0),c(311)),o={title:"SleepyDiscord::GenericMessageReceiver"},s={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",id:"reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",isDocsHomePage:!1,title:"SleepyDiscord::GenericMessageReceiver",description:"Inherited by SleepyDiscord::VoiceConnection",source:"@site/docs\\reference\\Classes\\class_sleepy_discord_1_1_generic_message_receiver.md",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::DiscordObject",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},next:{title:"SleepyDiscord::GenericScheduleHandler",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler"}},a=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ~GenericMessageReceiver",id:"function-genericmessagereceiver",children:[]},{value:"function initialize",id:"function-initialize",children:[]},{value:"function handleFailToConnect",id:"function-handlefailtoconnect",children:[]},{value:"function processMessage",id:"function-processmessage",children:[]},{value:"function processCloseCode",id:"function-processclosecode",children:[]}]},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"function getRetryDelay",id:"function-getretrydelay",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable connection",id:"variable-connection",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"variable consecutiveReconnectsCount",id:"variable-consecutivereconnectscount",children:[]},{value:"variable reconnectTimer",id:"variable-reconnecttimer",children:[]}]}],l={toc:a};function d(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherited by ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client"},"SleepyDiscord::BaseDiscordClient"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection"},"SleepyDiscord::VoiceConnection")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-genericmessagereceiver"},"function ~GenericMessageReceiver"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"virtual ~GenericMessageReceiver() =default\n")),Object(i.b)("h3",{id:"function-initialize"},"function initialize"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void initialize()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-initialize"},"SleepyDiscord::BaseDiscordClient::initialize"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-initialize"},"SleepyDiscord::VoiceConnection::initialize")),Object(i.b)("h3",{id:"function-handlefailtoconnect"},"function handleFailToConnect"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void handleFailToConnect()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-handlefailtoconnect"},"SleepyDiscord::BaseDiscordClient::handleFailToConnect")),Object(i.b)("h3",{id:"function-processmessage"},"function processMessage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void processMessage(\n    const std::string & message\n) =0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-processmessage"},"SleepyDiscord::BaseDiscordClient::processMessage"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-processmessage"},"SleepyDiscord::VoiceConnection::processMessage")),Object(i.b)("h3",{id:"function-processclosecode"},"function processCloseCode"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void processCloseCode(\n    const int16_t \n)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_base_discord_client#function-processclosecode"},"SleepyDiscord::BaseDiscordClient::processCloseCode"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_voice_connection#function-processclosecode"},"SleepyDiscord::VoiceConnection::processCloseCode")),Object(i.b)("h2",{id:"protected-functions-documentation"},"Protected Functions Documentation"),Object(i.b)("h3",{id:"function-getretrydelay"},"function getRetryDelay"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline const time_t getRetryDelay()\n")),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-connection"},"variable connection"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"WebsocketConnection connection;\n")),Object(i.b)("h2",{id:"protected-attributes-documentation"},"Protected Attributes Documentation"),Object(i.b)("h3",{id:"variable-consecutivereconnectscount"},"variable consecutiveReconnectsCount"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"int consecutiveReconnectsCount = 0;\n")),Object(i.b)("h3",{id:"variable-reconnecttimer"},"variable reconnectTimer"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Timer reconnectTimer;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:56 Eastern Standard Time"))}d.isMDXComponent=!0}}]);