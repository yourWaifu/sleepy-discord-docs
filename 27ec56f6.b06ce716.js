(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),c=t(7),a=(t(0),t(311)),i={title:"SleepyDiscord::VoiceServerUpdate"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_voice_server_update",id:"reference/Classes/struct_sleepy_discord_1_1_voice_server_update",isDocsHomePage:!1,title:"SleepyDiscord::VoiceServerUpdate",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_voice_server_update.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_voice_server_update",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_voice_server_update",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::VoiceRegion",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_voice_region"},next:{title:"SleepyDiscord::VoiceState",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_voice_state"}},s=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function VoiceServerUpdate",id:"function-voiceserverupdate",children:[]},{value:"function VoiceServerUpdate",id:"function-voiceserverupdate-1",children:[]},{value:"function VoiceServerUpdate",id:"function-voiceserverupdate-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable token",id:"variable-token",children:[]},{value:"variable serverID",id:"variable-serverid",children:[]},{value:"variable endpoint",id:"variable-endpoint",children:[]}]}],l={toc:s};function u(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inherits from ",Object(a.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-voiceserverupdate"},"function VoiceServerUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate() =default\n")),Object(a.b)("h3",{id:"function-voiceserverupdate-1"},"function VoiceServerUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate(\n    const nonstd::string_view & rawJSON\n)\n")),Object(a.b)("h3",{id:"function-voiceserverupdate-2"},"function VoiceServerUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate(\n    const json::Value & json\n)\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD \n)\n')),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-token"},"variable token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string token;\n")),Object(a.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(a.b)("h3",{id:"variable-endpoint"},"variable endpoint"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string endpoint;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  9 February 2021 at 07:04:57 Eastern Standard Time"))}u.isMDXComponent=!0},311:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return v}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),u=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,v=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?c.a.createElement(v,o(o({ref:r},l),{},{components:t})):c.a.createElement(v,o({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);