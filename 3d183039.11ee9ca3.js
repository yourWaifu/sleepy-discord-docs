(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return y}));var r=n(3),s=n(7),o=(n(0),n(311)),c={title:"sleepy_discord/gateway.cpp"},i={unversionedId:"reference/Files/gateway_8cpp",id:"reference/Files/gateway_8cpp",isDocsHomePage:!1,title:"sleepy_discord/gateway.cpp",description:"Namespaces",source:"@site/docs\\reference\\Files\\gateway_8cpp.md",slug:"/reference/Files/gateway_8cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/gateway_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/error.h",permalink:"/sleepy-discord-docs/docs/reference/Files/error_8h"},next:{title:"include/sleepy_discord/gateway.h",permalink:"/sleepy-discord-docs/docs/reference/Files/gateway_8h"}},a=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],p={toc:a};function y(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include "gateway.h"\n\nnamespace SleepyDiscord {\n    Ready::Ready(const json::Value & json) :\n        Ready(json::fromJSON<Ready>(json)) {\n    }\n    Ready::Ready(const nonstd::string_view & json) :\n        Ready(json::fromJSON<Ready>(json)) {\n    }\n    ActivityTimestamp::ActivityTimestamp(const json::Value & json) :\n        ActivityTimestamp(json::fromJSON<ActivityTimestamp>(json)) {\n    }\n    ActivityTimestamp::ActivityTimestamp(const nonstd::string_view & json) :\n        ActivityTimestamp(json::fromJSON<ActivityTimestamp>(json)) {\n    }\n    ActivityParty::ActivityParty(const json::Value & json) :\n        ActivityParty(json::fromJSON<ActivityParty>(json)) {\n    }\n    ActivityParty::ActivityParty(const nonstd::string_view & json) :\n        ActivityParty(json::fromJSON<ActivityParty>(json)) {\n    }\n    ActivityAssets::ActivityAssets(const json::Value & json) :\n        ActivityAssets(json::fromJSON<ActivityAssets>(json)) {\n    }\n    ActivityAssets::ActivityAssets(const nonstd::string_view & json) :\n        ActivityAssets(json::fromJSON<ActivityAssets>(json)) {\n    }\n    ActivitySecrets::ActivitySecrets(const json::Value & json) :\n        ActivitySecrets(json::fromJSON<ActivitySecrets>(json)) {\n    }\n    ActivitySecrets::ActivitySecrets(const nonstd::string_view & json) :\n        ActivitySecrets(json::fromJSON<ActivitySecrets>(json)) {\n    }\n    Activity::Activity(const json::Value & json) :\n        Activity(json::fromJSON<Activity>(json)) {\n    }\n    Activity::Activity(const nonstd::string_view & json) :\n        Activity(json::fromJSON<Activity>(json)) {\n    }\n    PresenceUpdate::PresenceUpdate(const json::Value & json) :\n        PresenceUpdate(json::fromJSON<PresenceUpdate>(json)) {\n    }\n    PresenceUpdate::PresenceUpdate(const nonstd::string_view & json) :\n        PresenceUpdate(json::fromJSON<PresenceUpdate>(json)) {\n    }\n    ServerMembersChunk::ServerMembersChunk(const json::Value & json) :\n        ServerMembersChunk(json::fromJSON<ServerMembersChunk>(json)) {\n    }\n    ServerMembersChunk::ServerMembersChunk(const nonstd::string_view & json) :\n        ServerMembersChunk(json::fromJSON<ServerMembersChunk>(json)) {\n    }\n}\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  9 February 2021 at 07:04:59 Eastern Standard Time"))}y.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=s.a.createContext({}),y=function(e){var t=s.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=y(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=y(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||l[u]||o;return n?s.a.createElement(m,i(i({ref:t},p),{},{components:n})):s.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);