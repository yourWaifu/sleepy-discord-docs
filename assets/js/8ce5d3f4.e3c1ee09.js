"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[4825],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),a=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=a(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=a(t),y=o,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||c;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var a=2;a<c;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3264:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return p},default:function(){return d}});var r=t(3117),o=t(102),c=(t(7294),t(3905)),l=["components"],i={title:"SleepyDiscord::json::BaseEnumTypeHelper"},s=void 0,a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",title:"SleepyDiscord::json::BaseEnumTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::json::BaseEnumTypeHelper"},sidebar:"Reference",previous:{title:"SleepyDiscord::json::ArrayWrapper< Value, Base >",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_wrapper_3_01_value_00_01_base_01_4"},next:{title:"SleepyDiscord::json::ClassTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper"}},p=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[],level:3},{value:"function fromType",id:"function-fromtype",children:[],level:3},{value:"function fromType",id:"function-fromtype-1",children:[],level:3},{value:"function empty",id:"function-empty",children:[],level:3},{value:"function isType",id:"function-istype",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,c.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Type ,\nclass GetDefault ,\nclass BaseType >\nstruct SleepyDiscord::json::BaseEnumTypeHelper;\n")),(0,c.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,c.kt)("h3",{id:"function-totype"},"function toType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline Type toType(\n    const Value & value\n)\n")),(0,c.kt)("h3",{id:"function-fromtype"},"function fromType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Type & value\n)\n")),(0,c.kt)("h3",{id:"function-fromtype-1"},"function fromType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Type & value,\n    Value::AllocatorType & \n)\n")),(0,c.kt)("h3",{id:"function-empty"},"function empty"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Type & value\n)\n")),(0,c.kt)("h3",{id:"function-istype"},"function isType"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const Value & value\n)\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);