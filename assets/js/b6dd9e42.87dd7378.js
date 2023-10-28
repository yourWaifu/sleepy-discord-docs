"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[3850],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(3117),a=n(102),c=(n(7294),n(3905)),l=["components"],o={title:"include/sleepy_discord/udp.h"},i=void 0,s={unversionedId:"reference/Files/udp_8h",id:"reference/Files/udp_8h",title:"include/sleepy_discord/udp.h",description:"Namespaces",source:"@site/docs/reference/Files/udp_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/udp_8h",permalink:"/sleepy-discord/docs/reference/Files/udp_8h",tags:[],version:"current",frontMatter:{title:"include/sleepy_discord/udp.h"},sidebar:"Reference",previous:{title:"include/sleepy_discord/timer.h",permalink:"/sleepy-discord/docs/reference/Files/timer_8h"},next:{title:"include/sleepy_discord/udp_client.h",permalink:"/sleepy-discord/docs/reference/Files/udp__client_8h"}},d=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"namespaces"},"Namespaces"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"td"},(0,c.kt)("a",{parentName:"strong",href:"/sleepy-discord/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),(0,c.kt)("h2",{id:"classes"},"Classes"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null}),(0,c.kt)("th",{parentName:"tr",align:null},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"class"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"td"},(0,c.kt)("a",{parentName:"strong",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client"},"SleepyDiscord::GenericUDPClient")))))),(0,c.kt)("h2",{id:"source-code"},"Source code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"#pragma once\n#include <string>\n#include <cstdint>\n#include <vector>\n#include <functional>\n\nnamespace SleepyDiscord {\n    class GenericUDPClient {\n    public:\n        typedef std::function<void()> SendHandler;\n        typedef std::function<void(const std::vector<uint8_t>&)> ReceiveHandler;\n\n        virtual bool connect(const std::string& to, const uint16_t port) = 0;\n        virtual void send(\n            const uint8_t* buffer,\n            size_t bufferLength,\n            SendHandler handler = [](){}\n        ) = 0;\n        virtual void receive(ReceiveHandler handler) = 0;\n\n        inline void send(const std::vector<uint8_t> buffer, SendHandler handler = [](){}) {\n            send(&buffer[0], buffer.size(), handler);\n        }\n    };\n}\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}u.isMDXComponent=!0}}]);