"use strict";var precacheConfig=[["/index.html","ad1d5710b0df579c1a7b17bf019f6628"],["/static/css/main.5a2c47e2.css","0d1750cfa0045f899dbc7e5e8f8b1128"],["/static/js/main.895bedfe.js","37afc5a1b8f7575874314ac27e8b3a13"],["/static/media/1.eab74ba2.png","eab74ba24e3e4ed048845681498e0369"],["/static/media/2.2bb88348.png","2bb88348e094f6f2143b57caf81bd16a"],["/static/media/3.80a6b56d.png","80a6b56ddfd3006571bc3bf262696fd1"],["/static/media/4.2a3cfb3c.png","2a3cfb3c04f843d3943bda81059c7840"],["/static/media/5.dcb92a97.png","dcb92a97e416521721b9843108610394"],["/static/media/6.26ffd294.png","26ffd294886a21b98158c2c998058a46"],["/static/media/7.9db9a41d.png","9db9a41d3312105cdc497741142c2263"],["/static/media/8.af034cd3.png","af034cd3fff298680788004966afb9e3"],["/static/media/9.40f99fc5.png","40f99fc5ccb6263b2fae9996c9d4e4de"],["/static/media/edsolver.4e0006fa.png","4e0006fa82d52494fc6d3013e320dae7"],["/static/media/lalsci.ace0932c.png","ace0932cb1b0a30e69623d372b3d696a"],["/static/media/me.82b04edf.png","82b04edf560aa4c15061300ef219acb0"],["/static/media/ni.163b619b.png","163b619bcc4177954f651f2eb9313470"],["/static/media/p1.0e6dcd34.png","0e6dcd34b947578679a5c8d883d1214f"],["/static/media/p2.fdde904d.png","fdde904dc2437148f97431a05d470a1b"],["/static/media/p3.f2dfa6c1.png","f2dfa6c11901bad6727c84995f9c0a94"],["/static/media/p4.571d1682.png","571d1682d1e68ac70963fe119ceff05b"],["/static/media/p5.f62fa31f.png","f62fa31fbd3c1f9635391923911b7bbf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});