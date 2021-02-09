(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(311)),a={title:"include/sleepy_discord/custom_connection.h"},i={unversionedId:"reference/Files/custom__connection_8h",id:"reference/Files/custom__connection_8h",isDocsHomePage:!1,title:"include/sleepy_discord/custom_connection.h",description:"Namespaces",source:"@site/docs\\reference\\Files\\custom__connection_8h.md",slug:"/reference/Files/custom__connection_8h",permalink:"/sleepy-discord-docs/docs/reference/Files/custom__connection_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/cpr_session.h",permalink:"/sleepy-discord-docs/docs/reference/Files/cpr__session_8h"},next:{title:"include/sleepy_discord/custom_session.h",permalink:"/sleepy-discord-docs/docs/reference/Files/custom__session_8h"}},s=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Types",id:"types",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"typedef WebsocketConnection",id:"typedef-websocketconnection",children:[]}]},{value:"Source code",id:"source-code",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(o.b)("h2",{id:"types"},"Types"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"typedef std::shared_ptr< GenericWebsocketConnection >"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Files/custom__connection_8h#typedef-websocketconnection"},"WebsocketConnection")))))),Object(o.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(o.b)("h3",{id:"typedef-websocketconnection"},"typedef WebsocketConnection"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"typedef websocketpp::connection_hdl SleepyDiscord::WebsocketConnection;\n")),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include <memory>\n#include "websocket.h"\n\nnamespace SleepyDiscord {\n    typedef std::shared_ptr<GenericWebsocketConnection> WebsocketConnection;\n}\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  9 February 2021 at 07:04:58 Eastern Standard Time"))}l.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||o;return n?c.a.createElement(m,i(i({ref:t},p),{},{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);