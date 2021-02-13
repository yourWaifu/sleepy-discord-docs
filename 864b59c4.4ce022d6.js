(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(317)),c={title:"Getting Started",sidebar_label:"Starting",slug:"/",next:"setup-standard"},i={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Getting Started",description:"1. You'll need to have a folder or directory for project. Make one if you don't have one.",source:"@site/docs\\setup.md",slug:"/",permalink:"/sleepy-discord-docs/docs/",version:"current",lastUpdatedAt:1613107777,sidebar_label:"Starting",sidebar:"Docs",next:{title:"Standard Configuration",permalink:"/sleepy-discord-docs/docs/setup-standard"}},l=[{value:"Go to the next page",id:"go-to-the-next-page",children:[{value:"Standard",id:"standard",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You'll need to have a folder or directory for project. Make one if you don't have one.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In case you do not already have any source code, create a cpp file and copy and paste ",Object(a.b)("a",{parentName:"p",href:"https://github.com/yourWaifu/sleepy-discord/blob/master/examples/hello/example0.cpp"},"this example code"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you haven't already installed git, do so now. Type in the command ",Object(a.b)("inlineCode",{parentName:"p"},"git --version")," to make sure it's installed.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a new folder in your project's folder, call it ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),", short for dependencies. Go into the deps folder and clone the library's git repository, ",Object(a.b)("inlineCode",{parentName:"p"},"https://github.com/yourWaifu/sleepy-discord.git"),", from there."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"mkdir deps\ncd deps\ngit clone https://github.com/yourWaifu/sleepy-discord.git\n")),Object(a.b)("p",null,"Your folder should look something like this."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"my-project\n\u251c\u2500\u2500 deps\n\u2502   \u2514\u2500\u2500 sleepy-discord\n\u2514\u2500\u2500 source.cpp\n")),Object(a.b)("h2",{id:"go-to-the-next-page"},"Go to the next page"),Object(a.b)("h3",{id:"standard"},Object(a.b)("a",{parentName:"h3",href:"setup-standard"},"Standard")),Object(a.b)("p",null,"Use Default configuration"))}d.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);