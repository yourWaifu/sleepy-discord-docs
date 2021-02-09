(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var c=t(3),r=t(7),i=(t(0),t(311)),s={title:"SleepyDiscord::GenericUDPClient"},o={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client",id:"reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client",isDocsHomePage:!1,title:"SleepyDiscord::GenericUDPClient",description:"Inherited by SleepyDiscord::CustomUDPClient",source:"@site/docs\\reference\\Classes\\class_sleepy_discord_1_1_generic_u_d_p_client.md",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::GenericSession",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_generic_session"},next:{title:"SleepyDiscord::IdentifiableDiscordObject",permalink:"/sleepy-discord-docs/docs/reference/Classes/class_sleepy_discord_1_1_identifiable_discord_object"}},l=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"typedef SendHandler",id:"typedef-sendhandler",children:[]},{value:"typedef ReceiveHandler",id:"typedef-receivehandler",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function connect",id:"function-connect",children:[]},{value:"function send",id:"function-send",children:[]},{value:"function receive",id:"function-receive",children:[]},{value:"function send",id:"function-send-1",children:[]}]}],a={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherited by ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_u_d_p_client"},"SleepyDiscord::ASIOUDPClient"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_u_d_p_client"},"SleepyDiscord::CustomUDPClient")),Object(i.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(i.b)("h3",{id:"typedef-sendhandler"},"typedef SendHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"typedef std::function<void()> SleepyDiscord::GenericUDPClient::SendHandler;\n")),Object(i.b)("h3",{id:"typedef-receivehandler"},"typedef ReceiveHandler"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"typedef std::function<void(const std::vector<uint8_t>&)> SleepyDiscord::GenericUDPClient::ReceiveHandler;\n")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-connect"},"function connect"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"virtual bool connect(\n    const std::string & to,\n    const uint16_t port\n) =0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_u_d_p_client#function-connect"},"SleepyDiscord::ASIOUDPClient::connect"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_u_d_p_client#function-connect"},"SleepyDiscord::CustomUDPClient::connect")),Object(i.b)("h3",{id:"function-send"},"function send"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void send(\n    const uint8_t * buffer,\n    size_t bufferLength,\n    SendHandler handler =[](){}\n) =0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_u_d_p_client#function-send"},"SleepyDiscord::ASIOUDPClient::send"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_u_d_p_client#function-send"},"SleepyDiscord::CustomUDPClient::send")),Object(i.b)("h3",{id:"function-receive"},"function receive"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void receive(\n    ReceiveHandler handler\n) =0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_u_d_p_client#function-receive"},"SleepyDiscord::ASIOUDPClient::receive"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_u_d_p_client#function-receive"},"SleepyDiscord::CustomUDPClient::receive")),Object(i.b)("h3",{id:"function-send-1"},"function send"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline void send(\n    const std::vector< uint8_t > buffer,\n    SendHandler handler =[](){}\n)\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:56 Eastern Standard Time"))}d.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var c=t(0),r=t.n(c);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)t=i[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)t=i[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=r.a.createContext({}),d=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},_=r.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),p=d(t),_=c,b=p["".concat(s,".").concat(_)]||p[_]||u[_]||i;return t?r.a.createElement(b,o(o({ref:n},a),{},{components:t})):r.a.createElement(b,o({ref:n},a))}));function b(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var i=t.length,s=new Array(i);s[0]=_;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var a=2;a<i;a++)s[a]=t[a];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}_.displayName="MDXCreateElement"}}]);