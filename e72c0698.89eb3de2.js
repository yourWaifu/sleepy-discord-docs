(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),a=(r(0),r(311)),o={title:"SleepyDiscord::EmbedAuthor"},i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_author",id:"reference/Classes/struct_sleepy_discord_1_1_embed_author",isDocsHomePage:!1,title:"SleepyDiscord::EmbedAuthor",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_embed_author.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_author",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed_author",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Classes/struct_sleepy_discord_1_1_embed_author.md",version:"current",sidebar:"someSidebar",previous:{title:"SleepyDiscord::Embed",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed"},next:{title:"SleepyDiscord::EmbedField",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed_field"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedAuthor",id:"function-embedauthor",children:[]},{value:"function EmbedAuthor",id:"function-embedauthor-1",children:[]},{value:"function EmbedAuthor",id:"function-embedauthor-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable name",id:"variable-name",children:[]},{value:"variable url",id:"variable-url",children:[]},{value:"variable iconUrl",id:"variable-iconurl",children:[]},{value:"variable proxyIconUrl",id:"variable-proxyiconurl",children:[]}]}],u={toc:l};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inherits from ",Object(a.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-embedauthor"},"function EmbedAuthor"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedAuthor() =default\n")),Object(a.b)("h3",{id:"function-embedauthor-1"},"function EmbedAuthor"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedAuthor(\n    const json::Value & json\n)\n")),Object(a.b)("h3",{id:"function-embedauthor-2"},"function EmbedAuthor"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedAuthor(\n    const nonstd::string_view & json\n)\n")),Object(a.b)("h3",{id:"function-empty"},"function empty"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-name"},"variable name"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string name;\n")),Object(a.b)("h3",{id:"variable-url"},"variable url"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(a.b)("h3",{id:"variable-iconurl"},"variable iconUrl"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string iconUrl;\n")),Object(a.b)("h3",{id:"variable-proxyiconurl"},"variable proxyIconUrl"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string proxyIconUrl;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  9 February 2021 at 07:04:55 Eastern Standard Time"))}s.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||a;return r?c.a.createElement(m,i(i({ref:t},u),{},{components:r})):c.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);