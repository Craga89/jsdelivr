/*! Qoopido.js library 3.6.9, 2015-07-10 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){t.register?t.register("polyfill/object/defineproperty",e):(t.modules=t.modules||{})["polyfill/object/defineproperty"]=e()}(function(e,t,r,o,n,i,c){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var f=Object.defineProperty,p=Object.prototype.__defineGetter__,d=Object.prototype.__defineSetter__;Object.defineProperty=function(e,t,r){if(f)try{return f(e,t,r)}catch(o){}if(e!==Object(e))throw new TypeError("Object.defineProperty called on non-object");return p&&"get"in r&&p.call(e,t,r.get),d&&"set"in r&&d.call(e,t,r.set),"value"in r&&(e[t]=r.value),e}}return Object.defineProperty},window.qoopido=window.qoopido||{});