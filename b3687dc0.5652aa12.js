(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{233:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return i}));var o=r(3),t=r(7),d=(r(0),r(311)),s={title:"sleepy_discord/embed.cpp"},c={unversionedId:"reference/Files/embed_8cpp",id:"reference/Files/embed_8cpp",isDocsHomePage:!1,title:"sleepy_discord/embed.cpp",description:"Namespaces",source:"@site/docs\\reference\\Files\\embed_8cpp.md",slug:"/reference/Files/embed_8cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/embed_8cpp",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Files/embed_8cpp.md",version:"current",sidebar:"someSidebar",previous:{title:"include/sleepy_discord/discord_object_interface.h",permalink:"/sleepy-discord-docs/docs/reference/Files/discord__object__interface_8h"},next:{title:"include/sleepy_discord/embed.h",permalink:"/sleepy-discord-docs/docs/reference/Files/embed_8h"}},a=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],m={toc:a};function i(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(d.b)("wrapper",Object(o.a)({},m,r,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h2",{id:"namespaces"},"Namespaces"),Object(d.b)("table",null,Object(d.b)("thead",{parentName:"table"},Object(d.b)("tr",{parentName:"thead"},Object(d.b)("th",{parentName:"tr",align:null},"Name"))),Object(d.b)("tbody",{parentName:"table"},Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:null},Object(d.b)("strong",{parentName:"td"},Object(d.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(d.b)("h2",{id:"source-code"},"Source code"),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-cpp"},'#include "embed.h"\n\nnamespace SleepyDiscord {\n    EmbedThumbnail::EmbedThumbnail(const json::Value & json) :\n        EmbedThumbnail(json::fromJSON<EmbedThumbnail>(json)) {\n    }\n    EmbedThumbnail::EmbedThumbnail(const nonstd::string_view & json) :\n        EmbedThumbnail(json::fromJSON<EmbedThumbnail>(json)) {\n    }\n\n    EmbedVideo::EmbedVideo(const json::Value & json) :\n        EmbedVideo(json::fromJSON<EmbedVideo>(json)) {\n    }\n    EmbedVideo::EmbedVideo(const nonstd::string_view & json) :\n        EmbedVideo(json::fromJSON<EmbedVideo>(json)) {\n    }\n\n    EmbedImage::EmbedImage(const json::Value & json) :\n        EmbedImage(json::fromJSON<EmbedImage>(json)) {\n    }\n    EmbedImage::EmbedImage(const nonstd::string_view & json) :\n        EmbedImage(json::fromJSON<EmbedImage>(json)) {\n    }\n\n    EmbedProvider::EmbedProvider(const json::Value & json) :\n        EmbedProvider(json::fromJSON<EmbedProvider>(json)) {\n    }\n    EmbedProvider::EmbedProvider(const nonstd::string_view & json) :\n        EmbedProvider(json::fromJSON<EmbedProvider>(json)) {\n    }\n\n    EmbedAuthor::EmbedAuthor(const json::Value & json) :\n        EmbedAuthor(json::fromJSON<EmbedAuthor>(json)) {\n    }\n    EmbedAuthor::EmbedAuthor(const nonstd::string_view & json) :\n        EmbedAuthor(json::fromJSON<EmbedAuthor>(json)) {\n    }\n\n    EmbedFooter::EmbedFooter(const json::Value & json) :\n        EmbedFooter(json::fromJSON<EmbedFooter>(json)) {\n    }\n    EmbedFooter::EmbedFooter(const nonstd::string_view & json) :\n        EmbedFooter(json::fromJSON<EmbedFooter>(json)) {\n    }\n\n    EmbedField::EmbedField(const json::Value & json) :\n        EmbedField(json::fromJSON<EmbedField>(json)) {\n    }\n    EmbedField::EmbedField(const nonstd::string_view & json) :\n        EmbedField(json::fromJSON<EmbedField>(json)) {\n    }\n\n    Embed::Embed(const json::Value & json) :\n        Embed(json::fromJSON<Embed>(json)) {\n    }\n    Embed::Embed(const nonstd::string_view & json) :\n        Embed(json::fromJSON<Embed>(json)) {\n    }\n}\n')),Object(d.b)("hr",null),Object(d.b)("p",null,"Updated on  9 February 2021 at 07:04:59 Eastern Standard Time"))}i.isMDXComponent=!0},311:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return u}));var o=r(0),t=r.n(o);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){d(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},d=Object.keys(e);for(o=0;o<d.length;o++)r=d[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)r=d[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var m=t.a.createContext({}),i=function(e){var n=t.a.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},b=function(e){var n=i(e.components);return t.a.createElement(m.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},p=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,d=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),b=i(r),p=o,u=b["".concat(s,".").concat(p)]||b[p]||l[p]||d;return r?t.a.createElement(u,c(c({ref:n},m),{},{components:r})):t.a.createElement(u,c({ref:n},m))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var d=r.length,s=new Array(d);s[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var m=2;m<d;m++)s[m]=r[m];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);