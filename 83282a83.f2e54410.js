(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),o=(n(0),n(311)),a={title:"SleepyDiscord::json::ClassTypeHelper"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper",isDocsHomePage:!1,title:"SleepyDiscord::json::ClassTypeHelper",description:"More...",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1json_1_1_class_type_helper.md",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::json::BaseEnumTypeHelper",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper"},next:{title:"SleepyDiscord::json::ClassTypeHelper< bool >",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01bool_01_4"}},l=[{value:"inherited members",id:"inherited-members",children:[]},{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function fromType",id:"function-fromtype",children:[]},{value:"function fromType",id:"function-fromtype-1",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null," ",Object(o.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(o.b)("p",null,"Inherits from ",Object(o.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_empty_function"},"SleepyDiscord::json::EmptyFunction< Type >")),Object(o.b)("h2",{id:"inherited-members"},"inherited members"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Public Functions inherited from ",Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_empty_function"},"SleepyDiscord::json::EmptyFunction< Type >"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"bool"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_empty_function#function-empty"},"empty")),"(const Type & value)")))),Object(o.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"template <class Type >\nstruct SleepyDiscord::json::ClassTypeHelper;\n")),Object(o.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(o.b)("h3",{id:"function-totype"},"function toType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Type toType(\n    const Value & value\n)\n")),Object(o.b)("h3",{id:"function-fromtype"},"function fromType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"template <class T >\nstatic inline std::enable_if< hasSerialize< T >::value, Value >::type fromType(\n    const T & value,\n    Value::AllocatorType & allocator\n)\n")),Object(o.b)("h3",{id:"function-fromtype-1"},"function fromType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"template <class T >\nstatic inline std::enable_if<! hasSerialize< T >::value, Value >::type fromType(\n    const T & value,\n    Value::AllocatorType & allocator\n)\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  9 February 2021 at 07:04:57 Eastern Standard Time"))}p.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,y=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?c.a.createElement(y,s(s({ref:t},i),{},{components:n})):c.a.createElement(y,s({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);