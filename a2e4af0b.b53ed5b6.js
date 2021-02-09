(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{221:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(311)),s={title:"include/sleepy_discord/permissions.h"},o={unversionedId:"reference/Files/permissions_8h",id:"reference/Files/permissions_8h",isDocsHomePage:!1,title:"include/sleepy_discord/permissions.h",description:"Namespaces",source:"@site/docs\\reference\\Files\\permissions_8h.md",slug:"/reference/Files/permissions_8h",permalink:"/sleepy-discord-docs/docs/reference/Files/permissions_8h",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/reference/Files/permissions_8h.md",version:"current",sidebar:"someSidebar",previous:{title:"sleepy_discord/permissions.cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/permissions_8cpp"},next:{title:"sleepy_discord/sd_error.cpp",permalink:"/sleepy-discord-docs/docs/reference/Files/sd__error_8cpp"}},l=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Types",id:"types",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"enum Permission",id:"enum-permission",children:[]}]},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"function toPermission",id:"function-topermission",children:[]},{value:"function toPermission",id:"function-topermission-1",children:[]},{value:"function operator|",id:"function-operator",children:[]},{value:"function operator&amp;",id:"function-operator-1",children:[]},{value:"function operator^",id:"function-operator-2",children:[]},{value:"function hasPremission",id:"function-haspremission",children:[]},{value:"function getBasePermissions",id:"function-getbasepermissions",children:[]},{value:"function handleOverwrite",id:"function-handleoverwrite",children:[]},{value:"function handleOverwrite",id:"function-handleoverwrite-1",children:[]},{value:"function overwritePermissions",id:"function-overwritepermissions",children:[]},{value:"function getPermissions",id:"function-getpermissions",children:[]}]},{value:"Source code",id:"source-code",children:[]}],c={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(i.b)("h2",{id:"classes"},"Classes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"struct"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_role"},"SleepyDiscord::Role")))))),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enum int64_t"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#enum-permission"},"Permission"))," { CREATE_INSTANT_INVITE = 0x00000001, KICK_MEMBERS = 0x00000002, BAN_MEMBERS = 0x00000004, ADMINISTRATOR = 0x00000008, MANAGE_CHANNELS = 0x00000010, MANAGE_GUILD = 0x00000020, ADD_REACTIONS = 0x00000040, VIEW_AUDIT_LOG = 0x00000080, VIEW_CHANNEL = 0x00000400, SEND_MESSAGES = 0x00000800, SEND_TTS_MESSAGES = 0x00001000, MANAGE_MESSAGES = 0x00002000, EMBED_LINKS = 0x00004000, ATTACH_FILES = 0x00008000, READ_MESSAGE_HISTORY = 0x00010000, MENTION_EVERYONE = 0x00020000, USE_EXTERNAL_EMOJIS = 0x00040000, CONNECT = 0x00100000, SPEAK = 0x00200000, MUTE_MEMBERS = 0x00400000, DEAFEN_MEMBERS = 0x00800000, MOVE_MEMBERS = 0x01000000, USE_VAD = 0x02000000, PRIORITY_SPEAKER = 0x00000100, CHANGE_NICKNAME = 0x04000000, MANAGE_NICKNAMES = 0x08000000, MANAGE_ROLES = 0x10000000, MANAGE_WEBHOOKS = 0x20000000, MANAGE_EMOJIS = 0x40000000, NONE = 0x000000000, ALL = 0xFFFFFFFFF, READ_MESSAGES = VIEW_CHANNEL}")))),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"constexpr Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-topermission"},"toPermission")),"(const int64_t & permission)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-topermission"},"toPermission")),"(const json::Value & value)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"constexpr Permission"),Object(i.b)("td",{parentName:"tr",align:null},"**[operator")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"constexpr Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-operator&"},"operator&")),"(const Permission & a, const Permission & b)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"constexpr Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-operator%5E"},"operator^")),"(const Permission & a, const Permission & b)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"constexpr bool"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-haspremission"},"hasPremission")),"(const Permission & target, const Permission & permission)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-getbasepermissions"},"getBasePermissions")),"(const Server & server, const ServerMember & member)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"void"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-handleoverwrite"},"handleOverwrite")),"(Permission & target, const Permission & allow, const Permission & deny)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"void"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-handleoverwrite"},"handleOverwrite")),"(Permission & target, const Overwrite & overwrite)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-overwritepermissions"},"overwritePermissions")),"(const Permission basePermissions, const Server & server, const ServerMember & member, const Channel & channel)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permission"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/permissions_8h#function-getpermissions"},"getPermissions")),"(const Server & server, const ServerMember & member, const Channel & channel)")))),Object(i.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(i.b)("h3",{id:"enum-permission"},"enum Permission"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Enumerator"),Object(i.b)("th",{parentName:"tr",align:null},"Value"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CREATE_INSTANT_INVITE"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000001"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"KICK_MEMBERS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000002"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"BAN_MEMBERS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000004"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ADMINISTRATOR"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000008"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_CHANNELS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000010"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_GUILD"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000020"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ADD_REACTIONS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000040"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"VIEW_AUDIT_LOG"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000080"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"VIEW_CHANNEL"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000400"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SEND_MESSAGES"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000800"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SEND_TTS_MESSAGES"),Object(i.b)("td",{parentName:"tr",align:null},"0x00001000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_MESSAGES"),Object(i.b)("td",{parentName:"tr",align:null},"0x00002000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"EMBED_LINKS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00004000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ATTACH_FILES"),Object(i.b)("td",{parentName:"tr",align:null},"0x00008000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"READ_MESSAGE_HISTORY"),Object(i.b)("td",{parentName:"tr",align:null},"0x00010000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MENTION_EVERYONE"),Object(i.b)("td",{parentName:"tr",align:null},"0x00020000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"USE_EXTERNAL_EMOJIS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00040000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CONNECT"),Object(i.b)("td",{parentName:"tr",align:null},"0x00100000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SPEAK"),Object(i.b)("td",{parentName:"tr",align:null},"0x00200000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MUTE_MEMBERS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00400000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DEAFEN_MEMBERS"),Object(i.b)("td",{parentName:"tr",align:null},"0x00800000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MOVE_MEMBERS"),Object(i.b)("td",{parentName:"tr",align:null},"0x01000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"USE_VAD"),Object(i.b)("td",{parentName:"tr",align:null},"0x02000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PRIORITY_SPEAKER"),Object(i.b)("td",{parentName:"tr",align:null},"0x00000100"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CHANGE_NICKNAME"),Object(i.b)("td",{parentName:"tr",align:null},"0x04000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_NICKNAMES"),Object(i.b)("td",{parentName:"tr",align:null},"0x08000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_ROLES"),Object(i.b)("td",{parentName:"tr",align:null},"0x10000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_WEBHOOKS"),Object(i.b)("td",{parentName:"tr",align:null},"0x20000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MANAGE_EMOJIS"),Object(i.b)("td",{parentName:"tr",align:null},"0x40000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"NONE"),Object(i.b)("td",{parentName:"tr",align:null},"0x000000000"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ALL"),Object(i.b)("td",{parentName:"tr",align:null},"0xFFFFFFFFF"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"READ_MESSAGES"),Object(i.b)("td",{parentName:"tr",align:null},"VIEW_CHANNEL"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h2",{id:"functions-documentation"},"Functions Documentation"),Object(i.b)("h3",{id:"function-topermission"},"function toPermission"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline constexpr Permission toPermission(\n    const int64_t & permission\n)\n")),Object(i.b)("h3",{id:"function-topermission-1"},"function toPermission"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline Permission toPermission(\n    const json::Value & value\n)\n")),Object(i.b)("h3",{id:"function-operator"},"function operator|"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline constexpr Permission operator|(\n    const Permission & a,\n    const Permission & b\n)\n")),Object(i.b)("h3",{id:"function-operator-1"},"function operator&"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline constexpr Permission operator&(\n    const Permission & a,\n    const Permission & b\n)\n")),Object(i.b)("h3",{id:"function-operator-2"},"function operator^"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline constexpr Permission operator^(\n    const Permission & a,\n    const Permission & b\n)\n")),Object(i.b)("h3",{id:"function-haspremission"},"function hasPremission"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline constexpr bool hasPremission(\n    const Permission & target,\n    const Permission & permission\n)\n")),Object(i.b)("h3",{id:"function-getbasepermissions"},"function getBasePermissions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Permission getBasePermissions(\n    const Server & server,\n    const ServerMember & member\n)\n")),Object(i.b)("h3",{id:"function-handleoverwrite"},"function handleOverwrite"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"void handleOverwrite(\n    Permission & target,\n    const Permission & allow,\n    const Permission & deny\n)\n")),Object(i.b)("h3",{id:"function-handleoverwrite-1"},"function handleOverwrite"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"void handleOverwrite(\n    Permission & target,\n    const Overwrite & overwrite\n)\n")),Object(i.b)("h3",{id:"function-overwritepermissions"},"function overwritePermissions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Permission overwritePermissions(\n    const Permission basePermissions,\n    const Server & server,\n    const ServerMember & member,\n    const Channel & channel\n)\n")),Object(i.b)("h3",{id:"function-getpermissions"},"function getPermissions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Permission getPermissions(\n    const Server & server,\n    const ServerMember & member,\n    const Channel & channel\n)\n")),Object(i.b)("h2",{id:"source-code"},"Source code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include <string>\n#include <algorithm>\n#include "discord_object_interface.h"\n#include "snowflake.h"\n\n//source: discord api docs | /topics/Permissions.md | Nov 16\n\nnamespace SleepyDiscord {\n    struct ServerMember;\n    struct Server;\n    struct Overwrite;\n    struct Channel;\n\n    enum Permission : int64_t {\n        CREATE_INSTANT_INVITE = 0x00000001, //Allows creation of instant invites\n        KICK_MEMBERS      = 0x00000002, //Allows kicking members\n        BAN_MEMBERS       = 0x00000004, //Allows banning members\n        ADMINISTRATOR     = 0x00000008, //Allows all permissions and bypasses channel permission overwrites\n        MANAGE_CHANNELS   = 0x00000010, //Allows management and editing of channels\n        MANAGE_GUILD      = 0x00000020, //Allows management and editing of the guild\n        ADD_REACTIONS         = 0x00000040, //Allows for the addition of reactions to messages\n        VIEW_AUDIT_LOG        = 0x00000080, //Allows for viewing of audit logs\n        VIEW_CHANNEL          = 0x00000400, //Allows guild members to view a channel\n        SEND_MESSAGES         = 0x00000800, //Allows for sending messages in a channel.\n        SEND_TTS_MESSAGES     = 0x00001000, //Allows for sending of /tts messages\n        MANAGE_MESSAGES   = 0x00002000, //Allows for deletion of other users messages\n        EMBED_LINKS           = 0x00004000, //Links sent by this user will be auto - embedded\n        ATTACH_FILES          = 0x00008000, //Allows for uploading images and files\n        READ_MESSAGE_HISTORY  = 0x00010000, //Allows for reading of message history\n        MENTION_EVERYONE      = 0x00020000, //Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel\n        USE_EXTERNAL_EMOJIS   = 0x00040000, //Allows the usage of custom emojis from other servers\n        CONNECT               = 0x00100000, //Allows for joining of a voice channel\n        SPEAK                 = 0x00200000, //Allows for speaking in a voice channel\n        MUTE_MEMBERS          = 0x00400000, //Allows for muting members in a voice channel\n        DEAFEN_MEMBERS        = 0x00800000, //Allows for deafening of members in a voice channel\n        MOVE_MEMBERS          = 0x01000000, //Allows for moving of members between voice channels\n        USE_VAD               = 0x02000000, //Allows for using voice - activity - detection in a voice channel\n        PRIORITY_SPEAKER      = 0x00000100, //Allows for using priority speaker in a voice channel\n        CHANGE_NICKNAME       = 0x04000000, //Allows for modification of own nickname\n        MANAGE_NICKNAMES      = 0x08000000, //Allows for modification of other users nicknames\n        MANAGE_ROLES      = 0x10000000, //Allows management and editing of roles\n        MANAGE_WEBHOOKS   = 0x20000000, //Allows management and editing of webhooks\n        MANAGE_EMOJIS     = 0x40000000, //Allows management and editing of emojis\n        //              /**/ These permissions require the owner account to use two-factor authentication when used on a guild that has server-wide 2FA enabled.\n\n        NONE                  = 0x000000000, //this permission doens\'t exist, I made it up\n        ALL                   = 0xFFFFFFFFF,\n\n        READ_MESSAGES = VIEW_CHANNEL,\n    };\n    \n    inline constexpr Permission toPermission(const int64_t& permission) {\n        return static_cast<Permission>(permission);\n    }\n\n    inline Permission toPermission(const json::Value& value) {\n        return toPermission(value.GetInt64());\n    }\n\n    inline constexpr Permission operator|(const Permission& a, const Permission& b) {\n        return static_cast<Permission>(static_cast<int64_t>(a) | static_cast<int64_t>(b));\n    }\n\n    inline constexpr Permission operator&(const Permission& a, const Permission& b) {\n        return static_cast<Permission>(static_cast<int64_t>(a) & static_cast<int64_t>(b));\n    }\n\n    inline constexpr Permission operator^(const Permission& a, const Permission& b) {\n        return static_cast<Permission>(static_cast<int64_t>(a) ^ static_cast<int64_t>(b));\n    }\n    \n    inline constexpr bool hasPremission(const Permission& target, const Permission& permission) {\n        return (target & permission) == permission;\n    }\n\n    Permission getBasePermissions(const Server& server, const ServerMember& member);\n    void handleOverwrite(Permission& target, const Permission& allow, const Permission& deny);\n    void handleOverwrite(Permission& target, const Overwrite& overwrite);\n    Permission overwritePermissions(const Permission basePermissions, const Server& server, const ServerMember& member, const Channel& channel);\n    Permission getPermissions(const Server& server, const ServerMember& member, const Channel& channel);\n\n    /*\n    Role Structure\n\n    Field       Type      Description\n    id          snowflake role id\n    name        string    role name\n    color       integer   integer representation of hexadecimal color code\n    hoist       bool      if this role is pinned in the user listing\n    position    integer   position of this role\n    permissions integer   permission bit set\n    managed     bool      whether this role is managed by an integration\n    mentionable bool      whether this role is mentionable\n    */\n    struct Role : public IdentifiableDiscordObject<Role> {\n        Role() = default;\n        ~Role() {}\n        //Role(const std::string * rawJson);\n        Role(const json::Value & rawJSON);\n        Role(const nonstd::string_view& json);\n        //Role(const json::Values values);\n        std::string name;\n        int color = -1;\n        bool hoist = false;\n        int position = 0;\n        Permission permissions = NONE;\n        bool managed = false;\n        bool mentionable = false;\n\n        inline bool operator==(Role& right) {\n            return ID == right.ID;\n        }\n\n        JSONStructStart\n            std::make_tuple(\n                json::pair                      (&Role::ID         , "id"         , json::REQUIRIED_FIELD),\n                json::pair                      (&Role::name       , "name"       , json::REQUIRIED_FIELD),\n                json::pair                      (&Role::color      , "color"      , json::REQUIRIED_FIELD),\n                json::pair                      (&Role::hoist      , "hoist"      , json::REQUIRIED_FIELD),\n                json::pair                      (&Role::position   , "position"   , json::REQUIRIED_FIELD),\n                json::pair<json::EnumTypeHelper>(&Role::permissions, "permissions", json::REQUIRIED_FIELD),\n                json::pair                      (&Role::managed    , "managed"    , json::REQUIRIED_FIELD),\n                json::pair                      (&Role::mentionable, "mentionable", json::REQUIRIED_FIELD)\n            );\n        JSONStructEnd\n    };\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  9 February 2021 at 07:04:58 Eastern Standard Time"))}b.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(t),d=r,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.a.createElement(u,o(o({ref:n},c),{},{components:t})):a.a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);