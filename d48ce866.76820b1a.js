(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),i=(n(0),n(311)),o={title:"SleepyDiscord::EmbedVideo"},a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_video",id:"reference/Classes/struct_sleepy_discord_1_1_embed_video",isDocsHomePage:!1,title:"SleepyDiscord::EmbedVideo",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_embed_video.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_video",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed_video",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Classes/struct_sleepy_discord_1_1_embed_video.md",version:"current",sidebar:"someSidebar",previous:{title:"SleepyDiscord::EmbedThumbnail",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail"},next:{title:"SleepyDiscord::Emoji",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_emoji"}},d=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedVideo",id:"function-embedvideo",children:[]},{value:"function EmbedVideo",id:"function-embedvideo-1",children:[]},{value:"function EmbedVideo",id:"function-embedvideo-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable url",id:"variable-url",children:[]},{value:"variable height",id:"variable-height",children:[]},{value:"variable width",id:"variable-width",children:[]}]}],l={toc:d};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-embedvideo"},"function EmbedVideo"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedVideo() =default\n")),Object(i.b)("h3",{id:"function-embedvideo-1"},"function EmbedVideo"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedVideo(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-embedvideo-2"},"function EmbedVideo"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedVideo(\n    const nonstd::string_view & json\n)\n")),Object(i.b)("h3",{id:"function-empty"},"function empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-url"},"variable url"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(i.b)("h3",{id:"variable-height"},"variable height"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t height = 0;\n")),Object(i.b)("h3",{id:"variable-width"},"variable width"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t width = 0;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:55 Eastern Standard Time"))}s.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return n?c.a.createElement(m,a(a({ref:t},l),{},{components:n})):c.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);