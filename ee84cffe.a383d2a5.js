(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{291:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return o})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return d}));var t=n(3),s=n(7),a=(n(0),n(311)),c={title:"sleepy_discord/cpr_session.cpp"},o={unversionedId:"reference/Files/cpr__session_8cpp",id:"reference/Files/cpr__session_8cpp",isDocsHomePage:!1,title:"sleepy_discord/cpr_session.cpp",description:"Namespaces",source:"@site/docs\\reference\\Files\\cpr__session_8cpp.md",slug:"/reference/Files/cpr__session_8cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/cpr__session_8cpp",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Files/cpr__session_8cpp.md",version:"current",sidebar:"someSidebar",previous:{title:"include/sleepy_discord/common_return_types.h",permalink:"/sleepy-discord-docs/docs/reference/Files/common__return__types_8h"},next:{title:"include/sleepy_discord/cpr_session.h",permalink:"/sleepy-discord-docs/docs/reference/Files/cpr__session_8h"}},p=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],i={toc:p};function d(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#include "cpr_session.h"\n#ifndef NONEXISTENT_CPR\n\nnamespace SleepyDiscord {\n    void CPRSession::setHeader(const std::vector<HeaderPair>& header) {\n        cpr::Header head;\n        for (HeaderPair pair : header)\n            head.insert({ pair.name, pair.value });\n        session.SetHeader(head);\n    }\n\n    void CPRSession::setMultipart(const std::vector<Part>& parts) {\n        std::vector<cpr::Part> cprParts;\n        for (Part const & m : parts) {\n            if (m.isFile) cprParts.push_back(cpr::Part(m.name, cpr::File(m.value)));\n            else          cprParts.push_back(cpr::Part(m.name, m.value));\n        }\n\n        muiltpart.parts = cprParts;\n        session.SetMultipart(muiltpart);\n    }\n\n    Response CPRSession::request(RequestMethod method) {\n        return perform(method);\n    }\n\n    Response CPRSession::perform(RequestMethod method) {\n        cpr::Response response;\n        switch (method) {\n        case Post  : response = session.Post  (); break;\n        case Patch : response = session.Patch (); break;\n        case Delete: response = session.Delete(); break;\n        case Get   : response = session.Get   (); break;\n        case Put   : response = session.Put   (); break;\n        default    : return Response(); break;\n        }\n\n        Response target;\n        target.statusCode = response.status_code;\n        target.text = response.text;\n        for (std::pair<std::string, std::string> i : response.header) {\n            target.header.insert(i);\n        }\n        return target;\n    }\n}\n#endif\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  9 February 2021 at 07:04:59 Eastern Standard Time"))}d.isMDXComponent=!0},311:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return b}));var t=n(0),s=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),d=function(e){var r=s.a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=d(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},m=s.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(n),m=t,b=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return n?s.a.createElement(b,o(o({ref:r},i),{},{components:n})):s.a.createElement(b,o({ref:r},i))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var i=2;i<a;i++)c[i]=n[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);