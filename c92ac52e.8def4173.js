(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{256:function(e,t,c){"use strict";c.r(t),c.d(t,"frontMatter",(function(){return a})),c.d(t,"metadata",(function(){return s})),c.d(t,"toc",(function(){return o})),c.d(t,"default",(function(){return u}));var n=c(3),r=c(7),i=(c(0),c(311)),a={title:"SleepyDiscord::ActivitySecrets"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_activity_secrets",id:"reference/Classes/struct_sleepy_discord_1_1_activity_secrets",isDocsHomePage:!1,title:"SleepyDiscord::ActivitySecrets",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_activity_secrets.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_activity_secrets",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_activity_secrets",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ActivityParty",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_activity_party"},next:{title:"SleepyDiscord::ActivityTimestamp",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ActivitySecrets",id:"function-activitysecrets",children:[]},{value:"function ~ActivitySecrets",id:"function-activitysecrets-1",children:[]},{value:"function ActivitySecrets",id:"function-activitysecrets-2",children:[]},{value:"function ActivitySecrets",id:"function-activitysecrets-3",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable join",id:"variable-join",children:[]},{value:"variable spectate",id:"variable-spectate",children:[]},{value:"variable match",id:"variable-match",children:[]}]}],l={toc:o};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-activitysecrets"},"function ActivitySecrets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"ActivitySecrets() =default\n")),Object(i.b)("h3",{id:"function-activitysecrets-1"},"function ~ActivitySecrets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"~ActivitySecrets() =default\n")),Object(i.b)("h3",{id:"function-activitysecrets-2"},"function ActivitySecrets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"ActivitySecrets(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-activitysecrets-3"},"function ActivitySecrets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"ActivitySecrets(\n    const nonstd::string_view & json\n)\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-join"},"variable join"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string join;\n")),Object(i.b)("h3",{id:"variable-spectate"},"variable spectate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string spectate;\n")),Object(i.b)("h3",{id:"variable-match"},"variable match"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string match;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:55 Eastern Standard Time"))}u.isMDXComponent=!0},311:function(e,t,c){"use strict";c.d(t,"a",(function(){return p})),c.d(t,"b",(function(){return f}));var n=c(0),r=c.n(n);function i(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function a(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?a(Object(c),!0).forEach((function(t){i(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function o(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),c=t;return e&&(c="function"==typeof e?e(t):s(s({},t),e)),c},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var c=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(c),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return c?r.a.createElement(f,s(s({ref:t},l),{},{components:c})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var c=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=c.length,a=new Array(i);a[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=c[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,c)}b.displayName="MDXCreateElement"}}]);