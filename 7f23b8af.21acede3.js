(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(312)),a={title:"Unicode and Emojis",sidebar_label:"Unicode and Emojis"},i={unversionedId:"unicode",id:"unicode",isDocsHomePage:!1,title:"Unicode and Emojis",description:"C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis.",source:"@site/docs\\unicode.md",slug:"/unicode",permalink:"/sleepy-discord-docs/docs/unicode",version:"current",lastUpdatedAt:1612872425,sidebar_label:"Unicode and Emojis",sidebar:"Docs",previous:{title:"Voice",permalink:"/sleepy-discord-docs/docs/voice"},next:{title:"Classes",permalink:"/sleepy-discord-docs/docs/reference/index_classes"}},s=[{value:"Standard Unicode Emojis and Characters",id:"standard-unicode-emojis-and-characters",children:[]},{value:"Custom Emojis",id:"custom-emojis",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis."),Object(c.b)("h2",{id:"standard-unicode-emojis-and-characters"},"Standard Unicode Emojis and Characters"),Object(c.b)("p",null,"Sleepy Discord should store text content using UTF-8. As such, to use Unicode, you can use C++'s u8 string literals."),Object(c.b)("p",null,"String Literal"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'std::string foo = u8"\u8a9e";\nsendMessage(channelID, u8"\u8a9e");\n')),Object(c.b)("p",null,"C++'s escape sequences also work, you'll want to look up the code for each character on a Unicode Character table."),Object(c.b)("p",null,"Unicode code points"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'std::string foo = "\\u8A9E"; //use little u for 4 digits\nstd::string bar = "\\u00B5"; //use zeros to fill up to 4 digits\nstd::string fuu = "\\U0001F534"; //use big U for 8 digits\n')),Object(c.b)("p",null,"Numeric Hex escapes"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'std::string foo = "\\xE8\\xAA\\x9E"; //one \\x for every byte in utf-8\n')),Object(c.b)("h2",{id:"custom-emojis"},"Custom Emojis"),Object(c.b)("p",null,"If you want to insert Discord custom emojis into your text content, please prefer to ",Object(c.b)("a",{parentName:"p",href:"https://discord.com/developers/docs/reference#message-formatting"},"the Discord API Message formatting reference"),"."))}l.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||c;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);