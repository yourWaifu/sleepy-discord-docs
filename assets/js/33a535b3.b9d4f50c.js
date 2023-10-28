"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[479],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Connection Options"},c=void 0,l={unversionedId:"connect-options",id:"connect-options",title:"Connection Options",description:"Changes how the realtime 2 way connection between the client and Discord's Gateway WebSockets Server behaves.",source:"@site/docs/connect-options.md",sourceDirName:".",slug:"/connect-options",permalink:"/sleepy-discord/docs/connect-options",tags:[],version:"current",lastUpdatedAt:1698528022,formattedLastUpdatedAt:"10/28/2023",frontMatter:{title:"Connection Options"},sidebar:"Docs",previous:{title:"Snowflakes and IDs",permalink:"/sleepy-discord/docs/snowflake"},next:{title:"Slash Commands",permalink:"/sleepy-discord/docs/slash-commands"}},p=[{value:"Gateway Version",id:"gateway-version",children:[],level:2},{value:"Intents",id:"intents",children:[],level:2},{value:"Compression",id:"compression",children:[],level:2},{value:"Sharding",id:"sharding",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Changes how the realtime 2 way connection between the client and Discord's Gateway WebSockets Server behaves."),(0,i.kt)("h2",{id:"gateway-version"},"Gateway Version"),(0,i.kt)("p",null,"You can set this by switching between different Git branches of the library's repo. You can't set the gateway version using code as the library doesn't account for differences between version. For versions that Discord supports, check out ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions"},"the Discord API docs"),". For Git branches of this library, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yourWaifu/sleepy-discord/branches"},"the GitHub repo"),"."),(0,i.kt)("h2",{id:"intents"},"Intents"),(0,i.kt)("p",null,"Filters what information Discord sends to the client. ",(0,i.kt)("a",{parentName:"p",href:"reference/Files/client_8h/#enum-intent"},"Click here for a list of available Intents"),"."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Required for v8 and up. message content intent is required for v10 and up."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nauto intentsList = {\n    SleepyDiscord::Intent::SERVER_MESSAGES, //required for commands via messages\n    SleepyDiscord::Intent::MESSAGE_CONTENT, // also required for commands via messages\n    SleepyDiscord::Intent::SERVER_VOICE_STATES, //required for connecting to voice\n};\nclient.setIntents(intentsList);\nclient.run(); //call setIntents before calling run\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.setIntents(\n    SleepyDiscord::Intent::SERVER_MESSAGES,\n    SleepyDiscord::Intent::MESSAGE_CONTENT,\n    SleepyDiscord::Intent::SERVER_VOICE_STATES\n);\nclient.run(); //call setIntents before calling run\n')),(0,i.kt)("h2",{id:"compression"},"Compression"),(0,i.kt)("p",null,"Makes Discord send Zlib compressed WebSockets to save bandwidth but with a cost, CPU and some RAM at runtime. In most situations, this might be worth turning on."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to set USE_ZLIB_NG to ON in CMake for this to work."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.useCompression(true);\nclient.run(); //call useCompression before calling run\n')),(0,i.kt)("h2",{id:"sharding"},"Sharding"),(0,i.kt)("p",null,"Lets you split up your bots' operations by splitting the list of Discord servers that each connection handles. This can be done by running multiple instances of your Client with the same token but different shard IDs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("token", SleepyDiscord::USER_CONTROLED_THREADS);\nclient.setShardID(0, 2); //the first parameter is the shardID\nclient.run(); //call setShardID before run\n\n//somewhere else\nClient client("token", SleepyDiscord::USER_CONTROLED_THREADS); //Same token\nclient.setShardID(1, 2); //different shardID but same shardCount\nclient.run();\n')),(0,i.kt)("p",null,"For more information on sharding, check ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#sharding"},"the Discord API Docs"),"."))}u.isMDXComponent=!0}}]);