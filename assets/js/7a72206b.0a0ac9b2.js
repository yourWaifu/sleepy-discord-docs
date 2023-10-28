"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[8547],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=d(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||a[p]||i;return r?t.createElement(m,c(c({ref:n},u),{},{components:r})):t.createElement(m,c({ref:n},u))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var d=2;d<i;d++)c[d]=r[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8750:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var t=r(3117),o=r(102),i=(r(7294),r(3905)),c=["components"],s={title:"include/sleepy_discord/session.h"},l=void 0,d={unversionedId:"reference/Files/session_8h",id:"reference/Files/session_8h",title:"include/sleepy_discord/session.h",description:"Source code",source:"@site/docs/reference/Files/session_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/session_8h",permalink:"/sleepy-discord/docs/reference/Files/session_8h",tags:[],version:"current",frontMatter:{title:"include/sleepy_discord/session.h"},sidebar:"Reference",previous:{title:"include/sleepy_discord/server.h",permalink:"/sleepy-discord/docs/reference/Files/server_8h"},next:{title:"sleepy_discord/slash_commands.cpp",permalink:"/sleepy-discord/docs/reference/Files/slash__commands_8cpp"}},u=[{value:"Source code",id:"source-code",children:[],level:2}],a={toc:u};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},a,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "http.h"\n\n//custom dynamic\n#ifdef SLEEPY_CUSTOM_SESSION\n    #include "custom_session.h"\n\n    //defined\n    #elif defined(SLEEPY_SESSION) || defined(SLEEPY_SESSION_INCLUDE)\n        #ifdef SLEEPY_SESSION_INCLUDE\n            #include SLEEPY_SESSION_INCLUDE\n        #endif\n        #ifdef SLEEPY_SESSION\n            typedef SLEEPY_SESSION Session\n        #endif\n\n    //defaults\n#elif defined(SLEEPY_DISCORD_CMAKE)\n    #if defined(EXISTENT_CPR)\n        #include "cpr_session.h"\n    #elif defined(EXISTENT_BEAST)\n        #include ""\n    #else\n        #include "custom_session.h"\n    #endif\n#else\n    #include "cpr_session.h"\n    #ifdef NONEXISTENT_CPR\n\n        //last resort\n        #include "custom_session.h"\n    #endif\n#endif\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}f.isMDXComponent=!0}}]);