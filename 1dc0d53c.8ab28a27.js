(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{311:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||c;return t?i.a.createElement(b,a(a({ref:n},u),{},{components:t})):i.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),c=(t(0),t(311)),o={title:"SleepyDiscord::Timer"},a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_timer",id:"reference/Classes/struct_sleepy_discord_1_1_timer",isDocsHomePage:!1,title:"SleepyDiscord::Timer",description:"Public Types Documentation",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_timer.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_timer",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_timer",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::StringResponse",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_string_response"},next:{title:"SleepyDiscord::UnavailableServer",permalink:"/sleepy-discord-docs/docs/reference/Classes/struct_sleepy_discord_1_1_unavailable_server"}},s=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"typedef StopTimerFunction",id:"typedef-stoptimerfunction",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Timer",id:"function-timer",children:[]},{value:"function Timer",id:"function-timer-1",children:[]},{value:"function stop",id:"function-stop",children:[]},{value:"function isValid",id:"function-isvalid",children:[]}]}],u={toc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(c.b)("h3",{id:"typedef-stoptimerfunction"},"typedef StopTimerFunction"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"typedef std::function<void()> SleepyDiscord::Timer::StopTimerFunction;\n")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-timer"},"function Timer"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline Timer()\n")),Object(c.b)("h3",{id:"function-timer-1"},"function Timer"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline Timer(\n    StopTimerFunction stopTimer\n)\n")),Object(c.b)("h3",{id:"function-stop"},"function stop"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline void stop() const\n")),Object(c.b)("h3",{id:"function-isvalid"},"function isValid"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool isValid() const\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  9 February 2021 at 07:04:56 Eastern Standard Time"))}l.isMDXComponent=!0}}]);