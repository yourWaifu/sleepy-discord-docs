"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[5085],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||c;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return p}});var r=n(3117),a=n(102),c=(n(7294),n(3905)),i=["components"],s={title:"SleepyDiscord::ThreadListSync"},l=void 0,o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_thread_list_sync",id:"reference/Classes/struct_sleepy_discord_1_1_thread_list_sync",title:"SleepyDiscord::ThreadListSync",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_thread_list_sync.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_thread_list_sync",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_thread_list_sync",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::ThreadListSync"},sidebar:"Reference",previous:{title:"SleepyDiscord::TextInputs",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_text_inputs"},next:{title:"SleepyDiscord::ThreadMember",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_thread_member"}},d=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ThreadListSync",id:"function-threadlistsync",children:[],level:3},{value:"function ThreadListSync",id:"function-threadlistsync-1",children:[],level:3},{value:"function ThreadListSync",id:"function-threadlistsync-2",children:[],level:3},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable serverID",id:"variable-serverid",children:[],level:3},{value:"variable channelIDs",id:"variable-channelids",children:[],level:3},{value:"variable threads",id:"variable-threads",children:[],level:3},{value:"variable members",id:"variable-members",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Inherits from ",(0,c.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),(0,c.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,c.kt)("h3",{id:"function-threadlistsync"},"function ThreadListSync"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"ThreadListSync() =default\n")),(0,c.kt)("h3",{id:"function-threadlistsync-1"},"function ThreadListSync"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"inline ThreadListSync(\n    const nonstd::string_view & json\n)\n")),(0,c.kt)("h3",{id:"function-threadlistsync-2"},"function ThreadListSync"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"ThreadListSync(\n    const json::Value & json\n)\n")),(0,c.kt)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),(0,c.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,c.kt)("h3",{id:"variable-serverid"},"variable serverID"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),(0,c.kt)("h3",{id:"variable-channelids"},"variable channelIDs"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Snowflake< Channel > > channelIDs;\n")),(0,c.kt)("h3",{id:"variable-threads"},"variable threads"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Channel > threads;\n")),(0,c.kt)("h3",{id:"variable-members"},"variable members"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector< ThreadMember > members;\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}p.isMDXComponent=!0}}]);