"use strict";var precacheConfig=[["/index.html","1c2e66f5b895e6e78277921ac3e723a1"],["/static/css/main.6c6f829f.css","d8d63b81f82f6430306f49cb1b25c8ea"],["/static/js/main.2d76b3a1.js","60718e8108b89ed01cb1b76b4c872384"],["/static/media/2.ee3d5147.png","ee3d5147f043614260418d94fdd21ab3"],["/static/media/3.4b9bbad5.png","4b9bbad5f4c82b109b36538e20e743b0"],["/static/media/4.bbec90da.png","bbec90da8d4f7c48cb149e0ff7e7c238"],["/static/media/5.f7e335be.png","f7e335be675931fdbd8c4c39b4ea3f4e"],["/static/media/6.7d593b82.png","7d593b823bcaae7585de6c3d860b8fb9"],["/static/media/7.6889db80.png","6889db8009ff0dfb73f306a302f305c5"],["/static/media/8.019092de.png","019092decbe7f2b235510112847b4cbd"],["/static/media/9.b5b5272a.png","b5b5272ad31800a9b3388fbd79247cfc"],["/static/media/edsolver.0cd89a67.png","0cd89a675a41009d736cb18c3220b908"],["/static/media/lalsci.a67afddc.png","a67afddc830a44ba79cc7739b4fb82e7"],["/static/media/me.9bf1b6db.png","9bf1b6db0aa49b13bcd38eef6ae9f42c"],["/static/media/ni.12501eee.png","12501eee5f2fdc985b0c9a90b22e505d"],["/static/media/p1.27f2b0ec.png","27f2b0ec406943eeef5ddb206aa06e1e"],["/static/media/p2.b33b5315.png","b33b53157f713fc60527ed73ccf156c8"],["/static/media/p3.34c36e68.png","34c36e68b3fc9d9137f2c5a9d5cb8de3"],["/static/media/p4.f1c7379c.png","f1c7379c32fd8685f247234c0c191785"],["/static/media/p5.978e5a76.png","978e5a7653075fb5864a84a431f0bfbd"],["/static/media/p6.e11b9762.png","e11b9762345fd31ee48ff41f8a5c75ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});