(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(311)),o={title:"sleepy_discord/attachment.cpp"},p={unversionedId:"reference/Files/attachment_8cpp",id:"reference/Files/attachment_8cpp",isDocsHomePage:!1,title:"sleepy_discord/attachment.cpp",description:"Namespaces",source:"@site/docs\\reference\\Files\\attachment_8cpp.md",slug:"/reference/Files/attachment_8cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/attachment_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/asio_udp.h",permalink:"/sleepy-discord-docs/docs/reference/Files/asio__udp_8h"},next:{title:"include/sleepy_discord/attachment.h",permalink:"/sleepy-discord-docs/docs/reference/Files/attachment_8h"}},s=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],i={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#include "attachment.h"\n\nnamespace SleepyDiscord {\n    Attachment::Attachment(const json::Value& json) :\n        Attachment(json::fromJSON<Attachment>(json)) {\n    }\n\n    Attachment::Attachment(const nonstd::string_view& json) :\n        Attachment(json::fromJSON<Attachment>(json)) {\n    }\n}\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  9 February 2021 at 07:04:59 Eastern Standard Time"))}l.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?c.a.createElement(b,p(p({ref:t},i),{},{components:n})):c.a.createElement(b,p({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<a;i++)o[i]=n[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);