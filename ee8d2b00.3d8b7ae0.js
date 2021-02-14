(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(319)),i={title:"Discord Objects"},s={unversionedId:"discord-objects",id:"discord-objects",isDocsHomePage:!1,title:"Discord Objects",description:"Most Objects from the library inherit the SleepyDiscord::IdentifiableDiscordObject class. Most of the functionality of this base class is for internal use and mainly about parsing JSON into C++ objects and serialization.",source:"@site/docs\\discord-objects.md",slug:"/discord-objects",permalink:"/sleepy-discord-docs/docs/discord-objects",version:"current",lastUpdatedAt:1613335835},c=[{value:"Identifier",id:"identifier",children:[]},{value:"Relationships",id:"relationships",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most Objects from the library inherit the ",Object(o.b)("a",{parentName:"p",href:"reference/Classes/class_sleepy_discord_1_1_identifiable_discord_object"},"SleepyDiscord::IdentifiableDiscordObject")," class. Most of the functionality of this base class is for internal use and mainly about parsing JSON into C++ objects and serialization."),Object(o.b)("h2",{id:"identifier"},"Identifier"),Object(o.b)("p",null,"Many can be identified using ",Object(o.b)("inlineCode",{parentName:"p"},".ID"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake<Message> ID = message.ID;\n")),Object(o.b)("p",null,"These pairs of lines of code should be the same"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"if (message1 == message2) //same as\nif (message1.ID == message2.ID) //this\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"message.getTimestamp(); //same as\nmessage.ID.timestamp(); //this\n")),Object(o.b)("h2",{id:"relationships"},"Relationships"),Object(o.b)("p",null,"Many objects from Discord are related to other objects. The User and ServerMember Class is a pretty good example of this. The ServerMember Class has relationships to both a Server and a User. A ServerMember has data on a User on a Server, such as the nickname."))}p.isMDXComponent=!0},319:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,f=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);