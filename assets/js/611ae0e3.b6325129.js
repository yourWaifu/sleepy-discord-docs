"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[6612],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return a}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),a=c,E=p["".concat(s,".").concat(a)]||p[a]||f[a]||o;return t?r.createElement(E,i(i({ref:n},u),{},{components:t})):r.createElement(E,i({ref:n},u))}));function a(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:c,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1794:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(3117),c=t(102),o=(t(7294),t(3905)),i=["components"],l={title:"include/sleepy_discord/websocket_connection.h"},s=void 0,d={unversionedId:"reference/Files/websocket__connection_8h",id:"reference/Files/websocket__connection_8h",title:"include/sleepy_discord/websocket_connection.h",description:"Source code",source:"@site/docs/reference/Files/websocket__connection_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/websocket__connection_8h",permalink:"/sleepy-discord/docs/reference/Files/websocket__connection_8h",tags:[],version:"current",frontMatter:{title:"include/sleepy_discord/websocket_connection.h"},sidebar:"Reference",previous:{title:"include/sleepy_discord/websocket.h",permalink:"/sleepy-discord/docs/reference/Files/websocket_8h"},next:{title:"include/sleepy_discord/websocketpp_common.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__common_8h"}},u=[{value:"Source code",id:"source-code",children:[],level:2}],f={toc:u};function p(e){var n=e.components,t=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n\n//custom dynamic\n#ifdef SLEEPY_CUSTOM_WEBSOCKETS_CONNECTION\n    #include "custom_connection.h"\n\n//defined\n#elif defined(SLEEPY_WEBSOCKETS_CONNECTION_INCLUDE) || defined(SLEEPY_WEBSOCKETS_CONNECTION)\n    #ifdef SLEEPY_WEBSOCKETS_CONNECTION_INCLUDE\n        #include SLEEPY_WEBSOCKETS_CONNECTION_INCLUDE\n    #endif\n    #ifdef SLEEPY_WEBSOCKETS_CONNECTION\n        typedef SLEEPY_SESSION Session\n    #endif\n\n#elif defined(SLEEPY_DISCORD_CMAKE)\n    #if defined(EXISTENT_WEBSOCKETPP)\n        #include "websocketpp_connection.h"\n    #elif defined(EXISTENT_UWEBSOCKETS)\n        #include "uwebsockets_connection.h"\n    #else\n        #include "custom_connection.h"\n    #endif\n\n//defaults\n#else\n    #ifndef SLEEPY_LOCK_EXISTENT_TO\n        #include "websocketpp_connection.h"\n        #ifdef NONEXISTENT_WEBSOCKETPP\n            #include "uwebsockets_connection.h"\n            #ifdef NONEXISTENT_UWEBSOCKETS\n                //last resort\n                #include "custom_connection.h"\n            #endif\n        #endif\n    #elif SLEEPY_LOCK_EXISTENT_TO == SLEEPY_WEBSOCKETPP\n        #include "websocketpp_connection.h"\n    #elif SLEEPY_LOCK_EXISTENT_TO == SLEEPY_UWEBSOCKETS\n        #include "uwebsockets_connection.h"\n    #else\n        //last resort\n        #include "custom_connection.h"\n    #endif\n#endif\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}p.isMDXComponent=!0}}]);