(function(){"use strict";var e,t,n,r,o,l,i,c,s,a,d,u,m,f,g,h,p;t=window,e=t.document,t.location.hostname,s="undefined"!=typeof Promise&&"undefined"!=typeof Notification&&"serviceWorker"in navigator,c=!t.matchMedia("(min-width: 768px)").matches,window._loadScript=function(e,t,n){var r,o,l;if(o=t,null!==(l=e.getElementById(o))){if(!n)return;l.parentNode.removeChild(l)}(r=e.createElement("script")).id=o,r.src=t,r.async=!0,(e.getElementsByTagName("head")[0]||e.getElementsByTagName("body")[0]).appendChild(r)}.bind(null,e),n=t._bpush||function(){return _loadScript("/bpush_loader.js",!0)},null!=(o=e.getElementById("bpush"))&&(o.addEventListener("click",n,!1),s||o.classList.add("hidden")),t.addEventListener("load",function(){var n,r;n=e.getElementById("output"),null!=(r=navigator.serviceWorker)&&r.register("/service-worker.js",{scope:"./"}).then(function(e){}).catch(function(e){console.error(e)}),t.addEventListener("beforeinstallprompt",function(e){n.textContent="beforeinstallprompt Event fired"})});for(i=0,d=(m=e.querySelectorAll(c?".visible-xs-block":".hidden-xs .adsbygoogle")).length;i<d;i++)(o=m[i]).parentNode.removeChild(o);for(p=function(e){e.style.position="fixed",e.style.bottom=0,e.style.zIndex=3},a=0,u=(f=e.querySelectorAll("footer.bar-bottom")).length;a<u;a++){if((o=f[a]).querySelector("iframe")){p(o);break}o.addEventListener("DOMNodeInserted",function(e){(o=e.currentTarget).removeEventListener("DOMNodeInserted",arguments.callee,!1),p(o)},!1)}null!=(g=e.getElementById("this-year"))&&(g.textContent=(new Date).getFullYear()),null!=(o=e.getElementById("gcse-search"))&&(l=o.dataset.gcse_cx,o.parentNode.replaceChild(e.createElement("gcse:search"),o),setTimeout(function(){_loadScript("//cse.google.com/cse.js?cx="+l)},6e3),r=t._cse||function(){var t;return cse.q.blur(),null===(t=e.getElementById("gsc-i-id1"))||(t.value=cse.q.value,e.querySelector("input.gsc-search-button").click(),cse.reset(),!1)},null!=(h=e.getElementById("search-button"))&&h.addEventListener("click",function(e){return r()}))}).call(this);