(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),c=t(7),i=(t(0),t(311)),o={title:"SleepyDiscord::VoiceContext"},a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_voice_context",id:"reference/Classes/struct_sleepy_discord_1_1_voice_context",isDocsHomePage:!1,title:"SleepyDiscord::VoiceContext",description:"Public Functions Documentation",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_voice_context.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_voice_context",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_voice_context",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Classes/struct_sleepy_discord_1_1_voice_context.md",version:"current",sidebar:"someSidebar",previous:{title:"SleepyDiscord::User",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_user"},next:{title:"SleepyDiscord::VoiceRegion",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_voice_region"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function getChannelID",id:"function-getchannelid",children:[]},{value:"function getServerID",id:"function-getserverid",children:[]},{value:"function operator==",id:"function-operator",children:[]},{value:"function setVoiceHandler",id:"function-setvoicehandler",children:[]},{value:"function hasVoiceHandler",id:"function-hasvoicehandler",children:[]},{value:"function getVoiceHandler",id:"function-getvoicehandler",children:[]},{value:"function startVoiceHandler",id:"function-startvoicehandler",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable VoiceConnection",id:"variable-voiceconnection",children:[]},{value:"variable BaseDiscordClient",id:"variable-basediscordclient",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-getchannelid"},"function getChannelID"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline Snowflake< Channel > getChannelID()\n")),Object(i.b)("h3",{id:"function-getserverid"},"function getServerID"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline Snowflake< Server > getServerID()\n")),Object(i.b)("h3",{id:"function-operator"},"function operator=="),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool operator==(\n    const VoiceContext & right\n)\n")),Object(i.b)("h3",{id:"function-setvoicehandler"},"function setVoiceHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline void setVoiceHandler(\n    BaseVoiceEventHandler * source\n)\n")),Object(i.b)("h3",{id:"function-hasvoicehandler"},"function hasVoiceHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool hasVoiceHandler()\n")),Object(i.b)("h3",{id:"function-getvoicehandler"},"function getVoiceHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline BaseVoiceEventHandler & getVoiceHandler()\n")),Object(i.b)("h3",{id:"function-startvoicehandler"},"function startVoiceHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"template <class EventHandler ,\nclass... Types>\ninline void startVoiceHandler(\n    Types &&... arguments\n)\n")),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-voiceconnection"},"variable VoiceConnection"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"friend VoiceConnection;\n")),Object(i.b)("h3",{id:"variable-basediscordclient"},"variable BaseDiscordClient"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"friend BaseDiscordClient;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:57 Eastern Standard Time"))}u.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),u=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?c.a.createElement(f,a(a({ref:n},s),{},{components:t})):c.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<i;s++)o[s]=t[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);