(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{162:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return d})),n.d(r,"default",(function(){return l}));var o=n(3),a=n(7),t=(n(0),n(311)),c={title:"sleepy_discord/sd_error.cpp"},s={unversionedId:"reference/Files/sd__error_8cpp",id:"reference/Files/sd__error_8cpp",isDocsHomePage:!1,title:"sleepy_discord/sd_error.cpp",description:"Namespaces",source:"@site/docs\\reference\\Files\\sd__error_8cpp.md",slug:"/reference/Files/sd__error_8cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/sd__error_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/permissions.h",permalink:"/sleepy-discord-docs/docs/reference/Files/permissions_8h"},next:{title:"sleepy_discord/server.cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/server_8cpp"}},d=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],i={toc:d};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(t.b)("wrapper",Object(o.a)({},i,n,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"namespaces"},"Namespaces"),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",{parentName:"tr",align:null},"Name"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",{parentName:"tr",align:null},Object(t.b)("strong",{parentName:"td"},Object(t.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(t.b)("h2",{id:"source-code"},"Source code"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'#include "client.h"\n\nnamespace SleepyDiscord {\n    void BaseDiscordClient::setError(int errorCode) {\n        ErrorCode code = static_cast<ErrorCode>(errorCode);\n        switch (errorCode) {\n        //HTTP Response/Error Codes\n        case OK                 : onError(code, "The request completed successfully"                                             ); break;\n        case CREATED            : onError(code, "The entity was created successfully"                                            ); break;\n        case NO_CONTENT         : onError(code, "The request completed successfully but returned no content"                     ); break;\n        case NOT_MODIFIED       : onError(code, "The entity was not modified (no action was taken)"                              ); break;\n        case BAD_REQUEST        : onError(code, "The request was improperly formatted, or the server couldn\'t understand it"     ); break;\n        case UNAUTHORIZED       : onError(code, "The Authorization header was missing or invalid"                                ); break;\n        case FORBIDDEN          : onError(code, "The Authorization token you passed did not have permission to the resource"     ); break;\n        case NOT_FOUND          : onError(code, "The resource at the location specified doesn\'t exist"                           ); break;\n        case METHOD_NOT_ALLOWED : onError(code, "The HTTP method used is not valid for the location specified"                   ); break;\n        case TOO_MANY_REQUESTS  : onError(code, "You\'ve made too many requests"                                                  ); break;\n        case GATEWAY_UNAVAILABLE: onError(code, "There was not a gateway available to process your request. Wait a bit and retry"); break;\n        default:\n            if (500 <= errorCode && errorCode < 600) onError(code, "The server had an error processing your request (these are rare)");\n            else onError(code, "Unknown " + std::to_string(errorCode));\n            break;\n\n        //JSON Error Response\n        case 10001: onError(code, "Unknown account"                                                                                                ); break;\n        case 10002: onError(code, "Unknown application"                                                                                            ); break;\n        case 10003: onError(code, "Unknown channel"                                                                                                ); break;\n        case 10004: onError(code, "Unknown guild"                                                                                                  ); break;\n        case 10005: onError(code, "Unknown integration"                                                                                            ); break;\n        case 10006: onError(code, "Unknown invite"                                                                                                 ); break;\n        case 10007: onError(code, "Unknown member"                                                                                                 ); break;\n        case 10008: onError(code, "Unknown message"                                                                                                ); break;\n        case 10009: onError(code, "Unknown overwrite"                                                                                              ); break;\n        case 10010: onError(code, "Unknown provider"                                                                                               ); break;\n        case 10011: onError(code, "Unknown role"                                                                                                   ); break;\n        case 10012: onError(code, "Unknown token"                                                                                                  ); break;\n        case 10013: onError(code, "Unknown user"                                                                                                   ); break;\n        case 10014: onError(code, "Unknown Emoji"                                                                                                  ); break;\n        case 20001: onError(code, "Bots cannot use this endpoint"                                                                                  ); break;\n        case 20002: onError(code, "Only bots can use this endpoint"                                                                                ); break;\n        case 30001: onError(code, "Maximum number of guilds reached(100)"                                                                          ); break;\n        case 30002: onError(code, "Maximum number of friends reached(1000)"                                                                        ); break;\n        case 30003: onError(code, "Maximum number of pins reached(50)"                                                                             ); break;\n        case 30005: onError(code, "Maximum number of guild roles reached(250)"                                                                     ); break;\n        case 30010: onError(code, "Too many reactions"                                                                                             ); break;\n        case 40001: onError(code, "Unauthorized"                                                                                                   ); break;\n        case 50001: onError(code, "Missing access"                                                                                                 ); break;\n        case 50002: onError(code, "Invalid account type"                                                                                           ); break;\n        case 50003: onError(code, "Cannot execute action on a DM channel"                                                                          ); break;\n        case 50004: onError(code, "Embed disabled"                                                                                                 ); break;\n        case 50005: onError(code, "Cannot edit a message authored by another user"                                                                 ); break;\n        case 50006: onError(code, "Cannot send an empty message"                                                                                   ); break;\n        case 50007: onError(code, "Cannot send messages to this user"                                                                              ); break;\n        case 50008: onError(code, "Cannot send messages in a voice channel"                                                                        ); break;\n        case 50009: onError(code, "Channel verification level is too high"                                                                         ); break;\n        case 50010: onError(code, "OAuth2 application does not have a bot"                                                                         ); break;\n        case 50011: onError(code, "OAuth2 application limit reached"                                                                               ); break;\n        case 50012: onError(code, "Invalid OAuth state"                                                                                            ); break;\n        case 50013: onError(code, "Missing permissions"                                                                                            ); break;\n        case 50014: onError(code, "Invalid authentication token"                                                                                   ); break;\n        case 50015: onError(code, "Note is too long"                                                                                               ); break;\n        case 50016: onError(code, "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete."); break;\n        case 50019: onError(code, "A message can only be pinned to the channel it was sent in"                                                     ); break;\n        case 50034: onError(code, "A message provided was too old to bulk delete"                                                                  ); break;\n        case 90001: onError(code, "Reaction Blocked"                                                                                               ); break;\n\n        //Disconnections\n        case UNKNOWN_ERROR          : onError(code, "unknown error - We\'re not sure what went wrong. Try reconnecting?"                                                                  ); break;\n        case UNKNOWN_OPCODE         : onError(code, "unknown opcode - You sent an invalid Gateway OP Code. Don\'t do that!"                                                               ); break;\n        case DECODE_ERROR           : onError(code, "decode error - You sent an invalid payload to us. Don\'t do that!"                                                                   ); break;\n        case NOT_AUTHENTICATED      : onError(code, "not authenticated - You sent us a payload prior to identifying."                                                                    ); break;\n        case AUTHENTICATION_FAILED  : onError(code, "authentication failed - The account token sent with your identify payload is incorrect."                                            ); break;\n        case ALREADY_AUTHENTICATED  : onError(code, "already authenticated - You sent more than one identify payload. Don\'t do that!"                                                    ); break;\n        case SESSION_NO_LONGER_VALID: onError(code, "Your session is no longer valid."                                                                                                   ); break;\n        case INVALID_SEQ            : onError(code, "invalid seq - The sequence sent when resuming the session was invalid. Reconnect and start a new session."                          ); break;\n        case RATE_LIMITED           : onError(code, "rate limited - Woah nelly!You\'re sending payloads to us too quickly. Slow it down!"                                                 ); break;\n        case SESSION_TIMEOUT        : onError(code, "session timeout - Your session timed out.Reconnect and start a new one."                                                            ); break;\n        case INVALID_SHARD          : onError(code, "invalid shard - You sent us an invalid shard when identifying."                                                                     ); break;\n        case SHARDING_REQUIRED      : onError(code, "sharding required - The session would have handled too many guilds - you are required to shard your connection in order to connect."); break;\n        case UNKNOWN_PROTOCOL       : onError(code, "We didn\'t recognize the protocol you sent."                                                                                         ); break;\n        case INVALID_INTENTS        : onError(code, "You sent an invalid intent for a Gateway Intent."                                                                                   ); break;\n        case DISALLOWED_INTENTS     : onError(code, "You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled for."          ); break;\n        case VOICE_SERVER_CRASHED   : onError(code, "The server crashed. Our bad! Try resuming."                                                                                         ); break;\n        case UNKNOWN_ENCRYPTION_MODE: onError(code, "We didn\'t recognize your encryption."                                                                                               ); break;\n\n        //Sleepy Errors\n        case CONNECT_FAILED : onError(code, "Failed to connect to the Discord api after 4 trys"                ); break;\n        case EVENT_UNKNOWN  : onError(code, "Unexpected or unknown event occurred"                             ); break;\n        case GATEWAY_FAILED : onError(code, "Could not get the gateway"                                        ); break;\n        case GENERAL_ERROR  : onError(code, "A wild error appeared"                                            ); break;\n        case LAZY_ERROR     : onError(code, "The programmer was too lazy to give this error a code and message"); break;\n        case ERROR_NOTE     : onError(code, "This is subposed to be a note"                                    ); break;\n        case VOICE_NO_SODIUM: onError(code, "Failed to init libsodium. Try linking libsodium?"                 ); break;\n        case VOICE_NO_OPUS  : onError(code, "Failed to init libopus. Try linking libopus?"                     ); break;\n        case CANT_SCHEDULE  : onError(code, "The Discord Client\'s scheduleHandler is not set"                  ); break;\n        }\n    }\n}\n')),Object(t.b)("hr",null),Object(t.b)("p",null,"Updated on  9 February 2021 at 07:04:59 Eastern Standard Time"))}l.isMDXComponent=!0},311:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return E}));var o=n(0),a=n.n(o);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,o,a=function(e,r){if(null==e)return{};var n,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var r=a.a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,E=u["".concat(c,".").concat(p)]||u[p]||b[p]||t;return n?a.a.createElement(E,s(s({ref:r},i),{},{components:n})):a.a.createElement(E,s({ref:r},i))}));function E(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,c=new Array(t);c[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<t;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);