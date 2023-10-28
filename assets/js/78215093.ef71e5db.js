"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[5820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),i=["components"],a={title:"sleepy_discord/zlib_compression.cpp"},c=void 0,u={unversionedId:"reference/Files/zlib__compression_8cpp",id:"reference/Files/zlib__compression_8cpp",title:"sleepy_discord/zlib_compression.cpp",description:"Source code",source:"@site/docs/reference/Files/zlib__compression_8cpp.md",sourceDirName:"reference/Files",slug:"/reference/Files/zlib__compression_8cpp",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8cpp",tags:[],version:"current",frontMatter:{title:"sleepy_discord/zlib_compression.cpp"},sidebar:"Reference",previous:{title:"include/sleepy_discord/websocketpp_websocket.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8h"},next:{title:"include/sleepy_discord/zlib_compression.h",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8h"}},p=[{value:"Source code",id:"source-code",children:[],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"source-code"},"Source code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#if defined(EXISTENT_ZLIB) || defined(EXISTENT_ZLIB_NG)\n#include "zlib_compression.h"\n#include <memory.h>\n\nnamespace SleepyDiscord {\n    ZLibCompression::ZLibCompression() {\n        stream = ZLib::Stream{};\n        memset(&stream, 0, sizeof(stream));\n        statusCode = ZLib::inflateInitStream(&stream);\n        if (statusCode != Z_OK) {\n            ZLib::inflateEndStream(&stream);\n        }\n        if (output.empty()) //since are using back(), we need at least one buffer in the output\n            output.emplace_back(); //make a new output buffer\n    }\n\n    void ZLibCompression::uncompress(const std::string& compressed) {\n        std::lock_guard<std::mutex> lock(mutex);\n\n        stream.next_in = (ZLib::ConstByte*)(compressed.c_str());\n        stream.avail_in = static_cast<uint32_t>(compressed.length());\n\n        statusCode = Z_BUF_ERROR;\n        do {\n            Output::Buffer& buffer = output.back();\n            Output::Data& data = buffer.first;\n            std::size_t& size = buffer.second;\n\n            stream.next_out = reinterpret_cast<ZLib::Btye*>(data.data() + size);\n            stream.avail_out = static_cast<uint32_t>(data.size() - size);\n\n            statusCode = ZLib::inflateStream(&stream, Z_SYNC_FLUSH);\n\n            auto oldSize = size;\n            size = data.size() - stream.avail_out;\n            auto deltaSize = size - oldSize;\n\n            if (statusCode == Z_STREAM_END) {\n                statusCode = ZLib::inflateResetStream(&stream);\n            }\n            else if (deltaSize == 0) { //if did anything\n                if (stream.avail_out == 0)\n                    output.emplace_back(); //needs more memory\n                else //notthing left to do for now\n                    break;\n            }\n        } while (statusCode == Z_OK || statusCode == Z_BUF_ERROR);\n    }\n\n    void ZLibCompression::getOutput(std::string& uncompressedOut) {\n        std::lock_guard<std::mutex> lock(mutex);\n        if (output.empty())\n            return;\n        std::size_t totalSize = 0;\n        {\n            const Output::Buffer& lastBuffer = output.back();\n            const auto lastBufferSize = lastBuffer.second;\n            totalSize += lastBufferSize;\n            totalSize += (output.size() - 1) * Output::chunkSize; //add size of full chucks\n        }\n\n        uncompressedOut.reserve(totalSize); //allocate memory for string\n        for (Output::Buffer& buffer : output) {\n            Output::Data& data = buffer.first;\n            const std::size_t size = buffer.second;\n\n            uncompressedOut.append(data.data(), size);\n        }\n\n        //reset output for next getOutput\n        //since as long as we are connected to Discord, Discord will send us at least a\n        //heartbeat ack. So, it might be better to keep the first buffer allocated in memory\n        //to avoid doing another memory allocation.\n        output.resize(1);\n        output.back().second = 0;\n    }\n}\n#endif\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Updated on 28 October 2023 at 21:20:08 UTC"))}d.isMDXComponent=!0}}]);