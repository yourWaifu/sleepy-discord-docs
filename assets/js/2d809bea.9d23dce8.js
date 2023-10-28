"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[9162],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=s,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?t.createElement(v,a(a({ref:n},u),{},{components:r})):t.createElement(v,a({ref:n},u))}));function f(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2737:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(3117),s=r(102),i=(r(7294),r(3905)),a=["components"],o={title:"SleepyDiscord::MessageRevisions"},c=void 0,l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_message_revisions",id:"reference/Classes/struct_sleepy_discord_1_1_message_revisions",title:"SleepyDiscord::MessageRevisions",description:"Public Functions Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_message_revisions.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_message_revisions",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_message_revisions",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::MessageRevisions"},sidebar:"Reference",previous:{title:"SleepyDiscord::MessageReference",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_message_reference"},next:{title:"SleepyDiscord::ObjectResponse",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_object_response"}},u=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function MessageRevisions",id:"function-messagerevisions",children:[],level:3},{value:"function applyChanges",id:"function-applychanges",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable messageID",id:"variable-messageid",children:[],level:3},{value:"variable channelID",id:"variable-channelid",children:[],level:3},{value:"variable RevisionsJSON",id:"variable-revisionsjson",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,i.kt)("h3",{id:"function-messagerevisions"},"function MessageRevisions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline MessageRevisions(\n    json::Value & json\n)\n")),(0,i.kt)("h3",{id:"function-applychanges"},"function applyChanges"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline void applyChanges(\n    Message & outOfDateMessage\n)\n")),(0,i.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,i.kt)("h3",{id:"variable-messageid"},"variable messageID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Message > messageID;\n")),(0,i.kt)("h3",{id:"variable-channelid"},"variable channelID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Channel > channelID;\n")),(0,i.kt)("h3",{id:"variable-revisionsjson"},"variable RevisionsJSON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"json::Value & RevisionsJSON;\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);