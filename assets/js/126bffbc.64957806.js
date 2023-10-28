"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[1651],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(y,i(i({ref:t},a),{},{components:n})):r.createElement(y,i({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1095:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return a},default:function(){return d}});var r=n(3117),o=n(102),c=(n(7294),n(3905)),i=["components"],l={title:"SleepyDiscord::UInt64StrTypeHelper"},p=void 0,s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_u_int64_str_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1_u_int64_str_type_helper",title:"SleepyDiscord::UInt64StrTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_u_int64_str_type_helper.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_u_int64_str_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_u_int64_str_type_helper",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::UInt64StrTypeHelper"},sidebar:"Reference",previous:{title:"SleepyDiscord::Timer",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_timer"},next:{title:"SleepyDiscord::UnavailableServer",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_unavailable_server"}},a=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[],level:3},{value:"function fromType",id:"function-fromtype",children:[],level:3},{value:"function empty",id:"function-empty",children:[],level:3},{value:"function isType",id:"function-istype",children:[],level:3}],level:2}],u={toc:a};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,c.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Type >\nstruct SleepyDiscord::UInt64StrTypeHelper;\n")),(0,c.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,c.kt)("h3",{id:"function-totype"},"function toType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline Permission toType(\n    const json::Value & value\n)\n")),(0,c.kt)("h3",{id:"function-fromtype"},"function fromType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline json::Value fromType(\n    const Type & value,\n    json::Value::AllocatorType & alloc\n)\n")),(0,c.kt)("h3",{id:"function-empty"},"function empty"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Type & value\n)\n")),(0,c.kt)("h3",{id:"function-istype"},"function isType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const json::Value & value\n)\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);