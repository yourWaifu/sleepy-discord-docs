"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[9494],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=a(n),f=o,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var a=2;a<l;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return a},toc:function(){return s},default:function(){return d}});var r=n(3117),o=n(102),l=(n(7294),n(3905)),i=["components"],c={title:"SleepyDiscord::json::OptionalTypeHelper"},p=void 0,a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",title:"SleepyDiscord::json::OptionalTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::json::OptionalTypeHelper"},sidebar:"Reference",previous:{title:"SleepyDiscord::json::NullableTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_nullable_type_helper"},next:{title:"SleepyDiscord::json::PairImpl",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_pair_impl"}},s=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[],level:3},{value:"function fromType",id:"function-fromtype",children:[],level:3},{value:"function empty",id:"function-empty",children:[],level:3},{value:"function isType",id:"function-istype",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,l.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Optional ,\ntemplate< class... > class TypeHelper>\nstruct SleepyDiscord::json::OptionalTypeHelper;\n")),(0,l.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,l.kt)("h3",{id:"function-totype"},"function toType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Value >\nstatic inline Optional toType(\n    Value & value\n)\n")),(0,l.kt)("h3",{id:"function-fromtype"},"function fromType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Optional & value,\n    Value::AllocatorType & allocator\n)\n")),(0,l.kt)("h3",{id:"function-empty"},"function empty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Optional & value\n)\n")),(0,l.kt)("h3",{id:"function-istype"},"function isType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const Value & value\n)\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);