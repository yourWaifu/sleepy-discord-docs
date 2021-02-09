(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{311:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=i,h=u["".concat(r,".").concat(b)]||u[b]||p[b]||a;return t?o.a.createElement(h,c(c({ref:n},l),{},{components:t})):o.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var i=t(3),o=t(7),a=(t(0),t(311)),r={title:"Voice"},c={unversionedId:"voice",id:"voice",isDocsHomePage:!1,title:"Voice",description:"Connect to a Voice Channel",source:"@site/docs\\voice.md",slug:"/voice",permalink:"/sleepy-discord-docs/docs/voice",editUrl:"https://github.com/yourWaifu/sleepy-discord-docs/edit/master/docs/voice.md",version:"current",sidebar:"someSidebar",previous:{title:"Requests",permalink:"/sleepy-discord-docs/docs/requests"},next:{title:"Unicode and Emojis",permalink:"/sleepy-discord-docs/docs/unicode"}},s=[{value:"Connect to a Voice Channel",id:"connect-to-a-voice-channel",children:[]},{value:"Event Handling",id:"event-handling",children:[]},{value:"Linking the needed libraries",id:"linking-the-needed-libraries",children:[{value:"Sodium",id:"sodium",children:[]},{value:"Opus",id:"opus",children:[]},{value:"A UDP library",id:"a-udp-library",children:[]}]},{value:"Sending Audio",id:"sending-audio",children:[{value:"Audio Sources",id:"audio-sources",children:[]},{value:"Speak",id:"speak",children:[]}]},{value:"Receiving Audio",id:"receiving-audio",children:[]},{value:"Disconnecting",id:"disconnecting",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"connect-to-a-voice-channel"},"Connect to a Voice Channel"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'myClient.connectToVoiceChannel("channelID", "serverID");\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'myClient.connectToVoiceChannel(myClient.createVoiceContext("channelID", "serverID", nullptr));\n')),Object(a.b)("p",null,"There are a few ways to connect to a voice channel but the first example, calling ",Object(a.b)("inlineCode",{parentName:"p"},"BaseDiscordClient::connectToVoiceChannel")," with just a ",Object(a.b)("inlineCode",{parentName:"p"},"channelID")," and ",Object(a.b)("inlineCode",{parentName:"p"},"serverID"),", is the simplest."),Object(a.b)("h2",{id:"event-handling"},"Event Handling"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'class VoiceEventHandler : public SleepyDiscord::BaseVoiceEventHandler {\npublic:\n    VoiceEventHandler() {}\n    void onReady(SleepyDiscord::VoiceConnection& connection) {\n        /*Do stuff when ready to start sending audio*/\n    }\n}\nVoiceEventHandler voiceEventHandler;\n\n//somewhere else in your code\nSleepyDiscord::VoiceContext& context = myClient.createContext("channelID", "serverID", voiceEventHandler);\n//or\ncontext.setVoiceHandler(voiceEventHandler);\n')),Object(a.b)("p",null,"Event handling is done in a separated inherited object, a VoiceEventHandler, creating one is done by simply creating a class that inherits traits from ",Object(a.b)("inlineCode",{parentName:"p"},"BaseVoiceEventHandler"),"."),Object(a.b)("p",null,"During runtime, a reference of or pointer to your VoiceEventHandler will need to be given to a ",Object(a.b)("inlineCode",{parentName:"p"},"VoiceContext"),". This object should live longer then the VoiceContexts that hold the pointer to your VoiceEventHandler (VoiceContexts are destroyed after closing the connection). Not doing so will cause the client to crash."),Object(a.b)("p",null,"One useful event being the ",Object(a.b)("inlineCode",{parentName:"p"},"BaseVoiceEventHandler::onReady")," event. This is called when the client has finished connecting and is ready to start sending data to one of Discord's voice servers. Some of you maybe confused as to why this is done via a callback and asking \"Shouldn't the client be ready after calling ",Object(a.b)("inlineCode",{parentName:"p"},"BaseDiscordClient::connectToVoiceChannel"),"?\". This is because, there's a number of steps involved with getting ready that happen outside the function call."),Object(a.b)("h2",{id:"linking-the-needed-libraries"},"Linking the needed libraries"),Object(a.b)("p",null,"You'll need those if you want to send or receive audio."),Object(a.b)("h3",{id:"sodium"},"Sodium"),Object(a.b)("p",null,"Instructions on ",Object(a.b)("a",{parentName:"p",href:"https://download.libsodium.org/doc/installation/"},"libsodium's website")),Object(a.b)("h3",{id:"opus"},"Opus"),Object(a.b)("p",null,"Download the source from ",Object(a.b)("a",{parentName:"p",href:"https://opus-codec.org/downloads/"},"opus's website"),". It will contain instructions for compiling with make. You can also compile using Visual Studio from the files inside win32."),Object(a.b)("h3",{id:"a-udp-library"},"A UDP library"),Object(a.b)("p",null,"Two options, using a custom one or you may instead use ASIO, which you should already have if you are using Websockets++ or uWebSockets."),Object(a.b)("h2",{id:"sending-audio"},"Sending Audio"),Object(a.b)("p",null,"Once connected to a voice server with all needed library linked, we can begin sending Audio to over to Discord. To do this, create a ",Object(a.b)("inlineCode",{parentName:"p"},"AudioSource"),", and then call ",Object(a.b)("inlineCode",{parentName:"p"},"VoiceConnection::startSpeaking"),"."),Object(a.b)("h3",{id:"audio-sources"},"Audio Sources"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'struct Music : public SleepyDiscord::AudioPointerSource {\n    Music() : SleepyDiscord::AudioPointerSource() {\n        File musicFile("music.raw");\n        musicLength = musicFile.getSize() / sizeof int16_t;\n        music = musicFile.get<int16_t>();\n    }\n    constexpr inline bool isOpusEncoded() { return false; } //optional, will be false by default\n    void read(SleepyDiscord::AudioTransmissionDetails& details, int16_t*& buffer, std::size_t& length) {\n        buffer = &music[progress];\n        length = details.proposedLength() < (musicLength - progress) ? details.proposedLength() : 0;\n        progress += details.proposedLength();\n        //note: set length to 0 to stop speaking\n    }\n    std::size_t progress = 0;\n    std::vector<int16_t> music;\n    std::size_t musicLength;\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"struct SquareWave : public SleepyDiscord::AudioVectorSource {\n    SquareWave() : SleepyDiscord::AudioVectorSource(), sampleOffset(0) {}\n    std::vector<int16_t> read(SleepyDiscord::AudioTransmissionDetails& details) {\n        std::vector<int16_t> target(details.proposedLength());\n        for (int16_t& sample : target) {\n                //2000 is the volume\n                //100 is how long half the square wave is\n                sample = (++sampleOffset / 100) % 2 ? 2000 : -2000;\n        }\n        return target;\n        //note: return vector with a size of 0 to stop speaking\n    }\n    std::size_t sampleOffset = 0;\n};\n")),Object(a.b)("p",null,"Creating an AudioSource is done by creating a class that inherits a type of AudioSource and filling in the virtual function, ",Object(a.b)("inlineCode",{parentName:"p"},"read"),"."),Object(a.b)("p",null,"This read function should, by default, output PCM stereo audio samples at 48000 Hz with the 2 channels interleaved.\nIf you aren't familiar with digital audio samples, ",Object(a.b)("a",{parentName:"p",href:"http://manual.audacityteam.org/man/digital_audio.html"},"here's a good article about it"),".\nIn the ",Object(a.b)("inlineCode",{parentName:"p"},"read")," function, you'll be given a ",Object(a.b)("inlineCode",{parentName:"p"},"SleepyDiscord::AudioTransmissionDetails"),", this will give details about what audio settings to use and some other stuff like how much audio has been sent since last time.\nDon't worry about calling read, the library will instead call ",Object(a.b)("inlineCode",{parentName:"p"},"read")," when audio data is needed while sending audio."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also send Opus encoded audio instead of PMC audio")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"struct Music : public SleepyDiscord::AudioPointerSource {\n    constexpr inline bool isOpusEncoded() { return true; }\n}\n")),Object(a.b)("p",null,"As of when this was written, there are two types of ",Object(a.b)("inlineCode",{parentName:"p"},"AudioSources"),", pointer and vector. They differ in their read function."),Object(a.b)("h4",{id:"audiopointersource"},"AudioPointerSource"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"read")," points a pointer to a buffer of audio data and sets the length."),Object(a.b)("h4",{id:"audiovectorsource"},"AudioVectorSource"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"read")," returns a vector of audio data"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The sizes of audio buffers should 960. Which is .02 seconds of 48kHz stereo audio."))),Object(a.b)("h4",{id:"related-articles"},"Related Articles"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://manual.audacityteam.org/man/digital_audio.html"},"Digital Audio Fundamentals")),Object(a.b)("h3",{id:"speak"},"Speak"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"//In your VoiceEventHandler\nvoid onReady(SleepyDiscord::VoiceConnection& connection) {\n    connection.startSpeaking<SquareWave>(/*Parameters to pass over to SquareWave's constructor*/);\n}\n")),Object(a.b)("p",null,"To start speaking, call ",Object(a.b)("inlineCode",{parentName:"p"},"VoiceConnection::startSpeaking")," with your AudioSource as the template parameter. To stop, send a buffer with the length of zero in your AudioSource's read function. If your AudioSource has any parameters in it's constructor, you pass them to this function. You may also use ",Object(a.b)("inlineCode",{parentName:"p"},"VoiceConnection::stopSpeaking")," to stop speaking."),Object(a.b)("h2",{id:"receiving-audio"},"Receiving Audio"),Object(a.b)("p",null,"Not implemented yet."),Object(a.b)("h2",{id:"disconnecting"},"Disconnecting"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"void onEndSpeaking(SleepyDiscord::VoiceConnection& connection) {\n    connection.disconnect();\n}\n")),Object(a.b)("p",null,"There are a few ways to disconnect, the simplest being calling ",Object(a.b)("inlineCode",{parentName:"p"},"VoiceConnection::disconnect"),". You can also disconnect with a VoiceContext or channelID by using ",Object(a.b)("inlineCode",{parentName:"p"},"BaseDiscordClient::disconnectVoiceContext")," or ",Object(a.b)("inlineCode",{parentName:"p"},"BaseDiscordClient:disconnectFromVoiceChannel"),"."))}d.isMDXComponent=!0}}]);