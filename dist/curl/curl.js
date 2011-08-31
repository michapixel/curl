(function(s,A,g){var F,G;function k(a,b){return Q.call(a).indexOf("[object "+b)==0}function R(a){function b(b){if(b in a)return b=a[b].charAt(0)!="."?(!a.path||t(a.path)?a.path:a.path+"/")+a[b]:n(a[b],a.path),o(b)}k(a,"String")&&(a=o(a),a={name:a,path:a,main:F,lib:G});a.path=a.path||"";a.h=b("lib");a.i=b("main");return a}function H(a){var b,c,d,e=[];u=a.baseUrl||"";if(a.debug)v=!0,l.cache=h,l.cfg=a,l.undefine=function(a){delete h[a]};var f=a.paths;for(b in f)c=o(b),d=p[c]={path:o(f[b])},d.f=(d.path.match(I)||
[]).length,e.push(c);f=a.packages;for(b in f)c=o(f[b].name||b),d=p[c]=R(f[b]),d.f=(d.path.match(I)||[]).length,e.push(c);J=RegExp("^("+e.sort(function(a,b){return p[a].f<p[b].f}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");m=a.pluginPath||m}function w(){}function C(a){function b(a,b){return S(a,b||w,e)}function c(a){return D(x(n(a,d)),u)}var d=a.substr(0,a.lastIndexOf("/")),e={baseName:d},f={};e.d={exports:f,module:{id:n(a,d),uri:c(a),exports:f}};v&&(b.curl=l);e.e=e.d.require=b;b.toUrl=c;return e}
function T(a){w.prototype=a?g.plugins&&g.plugins[a]:g;a=new w;w.prototype=y;return a}function E(){function a(a,b){f.push([a,b])}function b(a){d(!0,a)}function c(a){d(!1,a)}function d(d,e){a=d?function(a){a&&a(e)}:function(a,b){b&&b(e)};b=c=function(){throw Error("Promise already completed.");};for(var i,h=0;i=f[h++];)(i=i[d?0:1])&&i(e)}var e=this,f=[];this.b=function(b,c){a(b,c)};this.c=function(a){e.l=a;b(a)};this.a=function(a){e.n=a;c(a)}}function q(a){E.apply(this);this.name=a}function t(a){return a.charAt(a.length-
1)=="/"}function o(a){return t(a)?a.substr(0,a.length-1):a}function x(a){var b;return a.replace(J,function(c){b=p[c]||{};return b.i&&c==a?b.i:b.h?b.h:b.path||""})}function D(a,b,c){return(b&&!U.test(a)?(!b||t(b)?b:b+"/")+a:a)+(c&&!V.test(a)?".js":"")}function W(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.onload=d[K]=function(c){c=c||s.event;if(c.type==="load"||X[this.readyState])delete z[a.name],this.onload=this[K]=this.onerror=null,b(d)};d.onerror=function(){c(Error("Syntax error or http error: "+
a.url))};d.charset=a.charset||"utf-8";d.async=!0;d.src=a.url;z[a.name]=d;L.insertBefore(d,L.firstChild)}function Y(a){var b,c,d,e,f=a.length;d=a[f-1];e=k(d,"Function");f==2?k(a[0],"Array")?c=a[0]:b=a[0]:f==3&&(b=a[0],c=a[1]);!c&&e&&d.length>0&&(c=["require","exports","module"]);return{name:b,j:c||[],k:e?d:function(){return d}}}function M(a,b){v&&console&&console.log("curl: resolving",a.name);var c=C(a.baseName||a.name);N(b.j,c,function(d){try{var e=b.k.apply(c.d.exports,d)||c.d.exports;v&&console&&
console.log("curl: defined",a.name,e.toString().substr(0,50).replace(/\n/," "))}catch(f){a.a(f)}a.c(e)},a.a)}function O(a){W(a,function(){var b=r;r=y;a.m!==!1&&(b?b.g?a.a(Error(b.g.replace("${url}",a.url))):M(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a)}function n(a,b){return a.replace(Z,function(a,d,e){return(e?b.substr(0,b.lastIndexOf("/")):b)+"/"})}function $(a,b){var c,d,e,f,j,B;d=a.indexOf("!");if(d>=0){e=a.substr(0,d);var i=x(e);i.indexOf("/")<0&&(i=x((!m||t(m)?m:
m+"/")+i));var g=h[e];if(!g)g=h[e]=new q(e),g.url=D(i,u,!0),g.baseName=i,O(g);B=T(e)||{};var k=function(a){return n(a,b.baseName)};j=h[a]||new q(a);g.b(function(i){var g;f=a.substr(d+1);f="normalize"in i?i.normalize(f,k,B):k(f);c=e+"!"+f;if(!h[c])a!=c&&(g=j,j=h[c]||new q(c),g.b(j.c,j.a)),f&&!i.dynamic&&(h[c]=j),g=j.c,g.resolve=g,g.reject=j.a,i.load(f,b.e,g,B)},j.a)}else if(f=c=n(a,b.baseName),j=h[f],!j)j=h[f]=new q(f),j.url=D(x(f),u,!0),O(j);return j}function N(a,b,c,d){for(var e=[],f=a.length,g=
f,h=!1,i=0;i<g&&!h;i++)(function(a,g){g in b.d?(e[a]=b.d[g],f--):$(g,b).b(function(b){e[a]=b;--f==0&&(h=!0,c(e))},function(a){h=!0;d(a)})})(i,a[i]);f==0&&!h&&c(e)}function S(a,b,c){if(k(a,"String")){c=(c=h[a])&&c.l;if(c===y)throw Error("Module is not already resolved: "+a);return c}N(a,c,function(a){b.c?b.c(a):b.apply(null,a)},function(a){if(b.a)b.a(a);else throw a;})}function l(){var a=aa.call(arguments),b,c;k(a[0],"Object")&&(g=a.shift(),H(g));b=[].concat(a[0]);a=a[1];c=C("");var d=new E,e={};e.then=
function(a,b){d.b(function(b){a&&a.apply(null,b)},function(a){if(b)b(a);else throw a;});return e};e.next=function(a,b){var g=d;d=new E;g.b(function(){c.e(a,d,c)},function(a){d.a(a)});b&&d.b(function(a){b.apply(this,a)});return e};a&&e.then(a);c.e(b,d,c);return e}function P(){var a=Y(arguments),b=a.name;if(b==null)if(r!==y)r={g:"Multiple anonymous defines found in ${url}."};else{var c;if(!k(s.opera,"Opera"))for(var d in z)if(z[d].readyState=="interactive"){c=d;break}if(!(b=c))r=a}if(b!=null)(c=h[b])||
(c=h[b]=new q(b)),c.m=!1,"resolved"in c||M(c,a,C(b))}var L=A.head||A.getElementsByTagName("head")[0],u,m="curl/plugin",p={},h={},r,z={},Q={}.toString,y,aa=[].slice,U=/^\/|^[^:]+:\/\//,Z=/^(\.)(\.)?(\/|$)/,I=/\//,V=/\?/,J,X={loaded:1,interactive:1,complete:1},K="onreadystatechange";F="./lib/main";G="./lib";var v;k(g,"Function")||H(g);(g.apiContext||s)[g.apiName||"curl"]=l;s.define=l.define=P;l.version="0.5.2";P.amd={plugins:!0}})(this,document,this.curl||{});
