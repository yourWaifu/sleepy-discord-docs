"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[1361],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1215:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={title:"Discord Objects"},c=void 0,l={unversionedId:"discord-objects",id:"discord-objects",title:"Discord Objects",description:"Most Objects from the library inherit the SleepyDiscord::IdentifiableDiscordObject class. Most of the functionality of this base class is for internal use and mainly about parsing JSON into C++ objects and serialization.",source:"@site/docs/discord-objects.md",sourceDirName:".",slug:"/discord-objects",permalink:"/sleepy-discord/docs/discord-objects",tags:[],version:"current",lastUpdatedAt:1698528022,formattedLastUpdatedAt:"10/28/2023",frontMatter:{title:"Discord Objects"}},p=[{value:"Identifier",id:"identifier",children:[],level:2},{value:"Relationships",id:"relationships",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most Objects from the library inherit the ",(0,o.kt)("a",{parentName:"p",href:"reference/Classes/class_sleepy_discord_1_1_identifiable_discord_object"},"SleepyDiscord::IdentifiableDiscordObject")," class. Most of the functionality of this base class is for internal use and mainly about parsing JSON into C++ objects and serialization."),(0,o.kt)("h2",{id:"identifier"},"Identifier"),(0,o.kt)("p",null,"Many can be identified using ",(0,o.kt)("inlineCode",{parentName:"p"},".ID"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowflake<Message> ID = message.ID;\n")),(0,o.kt)("p",null,"These pairs of lines of code should be the same"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"if (message1 == message2) //same as\nif (message1.ID == message2.ID) //this\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"message.getTimestamp(); //same as\nmessage.ID.timestamp(); //this\n")),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("p",null,"Many objects from Discord are related to other objects. The User and ServerMember Class is a pretty good example of this. The ServerMember Class has relationships to both a Server and a User. A ServerMember has data on a User on a Server, such as the nickname."))}u.isMDXComponent=!0}}]);