"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[6865],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(t),f=c,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,p(p({ref:n},l),{},{components:t})):r.createElement(m,p({ref:n},l))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:c,p[1]=a;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1438:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(3117),c=t(102),o=(t(7294),t(3905)),p=["components"],a={title:"include/sleepy_discord/websocketpp_connection.h"},i=void 0,s={unversionedId:"reference/Files/websocketpp__connection_8h",id:"reference/Files/websocketpp__connection_8h",title:"include/sleepy_discord/websocketpp_connection.h",description:"Namespaces",source:"@site/docs/reference/Files/websocketpp__connection_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/websocketpp__connection_8h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__connection_8h",tags:[],version:"current",frontMatter:{title:"include/sleepy_discord/websocketpp_connection.h"},sidebar:"Reference",previous:{title:"include/sleepy_discord/websocketpp_common.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__common_8h"},next:{title:"sleepy_discord/websocketpp_websocket.cpp",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8cpp"}},l=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2}],d={toc:l};function u(e){var n=e.components,t=(0,c.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/sleepy-discord/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "websocketpp_common.h"\n\nnamespace SleepyDiscord {\n#ifndef NONEXISTENT_WEBSOCKETPP\n    typedef websocketpp::connection_hdl WebsocketConnection;\n#endif\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}u.isMDXComponent=!0}}]);