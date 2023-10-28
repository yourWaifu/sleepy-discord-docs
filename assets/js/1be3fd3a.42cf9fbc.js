"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[3408],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(3117),o=n(102),c=(n(7294),n(3905)),i=["components"],a={title:"sleepy_discord/invite.cpp"},p=void 0,l={unversionedId:"reference/Files/invite_8cpp",id:"reference/Files/invite_8cpp",title:"sleepy_discord/invite.cpp",description:"Namespaces",source:"@site/docs/reference/Files/invite_8cpp.md",sourceDirName:"reference/Files",slug:"/reference/Files/invite_8cpp",permalink:"/sleepy-discord/docs/reference/Files/invite_8cpp",tags:[],version:"current",frontMatter:{title:"sleepy_discord/invite.cpp"},sidebar:"Reference",previous:{title:"include/sleepy_discord/http.h",permalink:"/sleepy-discord/docs/reference/Files/http_8h"},next:{title:"include/sleepy_discord/invite.h",permalink:"/sleepy-discord/docs/reference/Files/invite_8h"}},s=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"namespaces"},"Namespaces"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"td"},(0,c.kt)("a",{parentName:"strong",href:"/sleepy-discord/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),(0,c.kt)("h2",{id:"source-code"},"Source code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "invite.h"\n\nnamespace SleepyDiscord {\n    Invite::Invite(const json::Value & json) :\n        Invite(json::fromJSON<Invite>(json)) {\n    }\n\n    InviteMetadata::InviteMetadata(const json::Value & json) :\n        InviteMetadata(json::fromJSON<InviteMetadata>(json)) {\n    }\n}\n')),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);