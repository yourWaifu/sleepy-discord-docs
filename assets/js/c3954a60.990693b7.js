"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[7574],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3275:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),c=["components"],i={title:"SleepyDiscord::json::ArrayStringWrapper"},l=void 0,s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_array_string_wrapper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_array_string_wrapper",title:"SleepyDiscord::json::ArrayStringWrapper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_string_wrapper.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_string_wrapper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_string_wrapper",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::json::ArrayStringWrapper"},sidebar:"Reference",previous:{title:"SleepyDiscord::filePathPart",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1file_path_part"},next:{title:"SleepyDiscord::json::ArrayValueWrapper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_value_wrapper"}},p=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ArrayStringWrapper",id:"function-arraystringwrapper",children:[],level:3},{value:"function getDoc",id:"function-getdoc",children:[],level:3},{value:"function operator Value &amp;",id:"function-operator-value-",children:[],level:3},{value:"function getDoc",id:"function-getdoc-1",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable json",id:"variable-json",children:[],level:3}],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,o.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Value  =const json::Value>\nstruct SleepyDiscord::json::ArrayStringWrapper;\n")),(0,o.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,o.kt)("h3",{id:"function-arraystringwrapper"},"function ArrayStringWrapper"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"inline ArrayStringWrapper(\n    Value & json\n)\n")),(0,o.kt)("h3",{id:"function-getdoc"},"function getDoc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"inline Value & getDoc() const\n")),(0,o.kt)("h3",{id:"function-operator-value-"},"function operator Value &"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"inline operator Value &() const\n")),(0,o.kt)("h3",{id:"function-getdoc-1"},"function getDoc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Callback >\ninline const bool getDoc(\n    const Callback & callback\n) const\n")),(0,o.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,o.kt)("h3",{id:"variable-json"},"variable json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"Value & json;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);