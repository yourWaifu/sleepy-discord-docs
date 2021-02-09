(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),i=(n(0),n(311)),s={title:"SleepyDiscord::BaseDiscordClient::RequestSettings"},a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_base_discord_client_1_1_request_settings",id:"reference/Classes/struct_sleepy_discord_1_1_base_discord_client_1_1_request_settings",isDocsHomePage:!1,title:"SleepyDiscord::BaseDiscordClient::RequestSettings",description:"More...",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_base_discord_client_1_1_request_settings.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_base_discord_client_1_1_request_settings",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_base_discord_client_1_1_request_settings",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::BaseDiscordClient::RequestModeType< Sync >",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_base_discord_client_1_1_request_mode_type_3_01_sync_01_4"},next:{title:"SleepyDiscord::BasicAudioSourceForContainers",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_basic_audio_source_for_containers"}},l=[{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"using ParmType",id:"using-parmtype",children:[]},{value:"using Callback",id:"using-callback",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function RequestSettings",id:"function-requestsettings",children:[]},{value:"function RequestSettings",id:"function-requestsettings-1",children:[]},{value:"function RequestSettings",id:"function-requestsettings-2",children:[]},{value:"function RequestSettings",id:"function-requestsettings-3",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable mode",id:"variable-mode",children:[]},{value:"variable callback",id:"variable-callback",children:[]}]}],o={toc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null," ",Object(i.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(i.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"template <class _ParmType >\nstruct SleepyDiscord::BaseDiscordClient::RequestSettings;\n")),Object(i.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(i.b)("h3",{id:"using-parmtype"},"using ParmType"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::BaseDiscordClient::RequestSettings< _ParmType >::ParmType =  _ParmType;\n")),Object(i.b)("h3",{id:"using-callback"},"using Callback"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::BaseDiscordClient::RequestSettings< _ParmType >::Callback =  std::function<void(ParmType)>;\n")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-requestsettings"},"function RequestSettings"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline RequestSettings(\n    RequestMode r\n)\n")),Object(i.b)("h3",{id:"function-requestsettings-1"},"function RequestSettings"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline RequestSettings(\n    Callback c\n)\n")),Object(i.b)("h3",{id:"function-requestsettings-2"},"function RequestSettings"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline RequestSettings(\n    RequestMode r,\n    Callback c\n)\n")),Object(i.b)("h3",{id:"function-requestsettings-3"},"function RequestSettings"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline RequestSettings()\n")),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-mode"},"variable mode"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"RequestMode mode = SLEEPY_DEFAULT_REQUEST_MODE;\n")),Object(i.b)("h3",{id:"variable-callback"},"variable callback"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Callback callback = nullptr;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:55 Eastern Standard Time"))}u.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return _}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,_=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?c.a.createElement(_,a(a({ref:t},o),{},{components:n})):c.a.createElement(_,a({ref:t},o))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var o=2;o<i;o++)s[o]=n[o];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);