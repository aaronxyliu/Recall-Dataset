(function(){
  var KEY="console.staleChunkReloadAttempted";
  var PARAM="_sc";
  var ASSET_RE=/\/assets\/[^?\s'"]+/i;
  var ASSET_IN_MSG=/(?:https?:\/\/[^'"\s]+)?(\/assets\/[^'"\s?]+)/i;
  var MIME_HINTS=["'text/html' is not a valid javascript mime type","mime type of \"text/html\""];
  try{
    var bootUrl=new URL(window.location.href);
    if(bootUrl.searchParams.has(PARAM)){
      bootUrl.searchParams.delete(PARAM);
      history.replaceState(history.state,"",bootUrl.pathname+bootUrl.search+bootUrl.hash);
    }
  }catch(e0){}
  function assetUrl(url){
    if(!url) return false;
    try{ return ASSET_RE.test(new URL(url,location.href).pathname); }
    catch(e){ return ASSET_RE.test(String(url)); }
  }
  function msgText(error){
    return error&&error.message?error.message:(typeof error==="string"?error:"");
  }
  function isMimeHtml(msg){
    var lower=String(msg).toLowerCase();
    for(var i=0;i<MIME_HINTS.length;i++){ if(lower.indexOf(MIME_HINTS[i])!==-1) return true; }
    return false;
  }
  function extractAsset(error, event){
    var t=event&&event.target;
    if(t&&t.tagName==="SCRIPT"&&assetUrl(t.src)) return t.src;
    if(t&&t.tagName==="LINK"&&assetUrl(t.href)) return t.href;
    var msg=msgText(error);
    if(!msg) return null;
    var abs=msg.match(/https?:\/\/[^'"\s]+\/assets\/[^'"\s?]+/i);
    if(abs&&abs[0]) return abs[0];
    var m=msg.match(ASSET_IN_MSG);
    return m&&m[1]?m[1]:null;
  }
  function beginGuardedReload(){
    try{
      if(sessionStorage.getItem(KEY)) return false;
      sessionStorage.setItem(KEY,String(Date.now()));
    }catch(e){}
    hardReload();
    return true;
  }
  function documentUrl(){
    try{
      var u=new URL(window.location.href);
      u.searchParams.delete("_sc");
      return u.pathname+u.search;
    }catch(e){ return window.location.pathname||"/"; }
  }
  function reloadNow(){
    try{ window.location.reload(); }
    catch(e2){ window.location.href=documentUrl(); }
  }
  function hardReload(){
    var finished=false;
    var finish=function(){
      if(finished) return;
      finished=true;
      reloadNow();
    };
    try{
      var req=fetch(documentUrl(),{
        cache:"reload",
        credentials:"same-origin",
        headers:{"Cache-Control":"no-cache","Pragma":"no-cache"}
      });
      if(req&&typeof req.finally==="function") req.finally(finish);
      else finish();
    }catch(e3){ finish(); }
    setTimeout(finish,2000);
  }
  function confirmAssetThenReload(url){
    try{
      fetch(url,{method:"GET",cache:"no-store",credentials:"same-origin",headers:{Accept:"*/*"}})
        .then(function(res){
          var ct=((res.headers&&res.headers.get("content-type"))||"").toLowerCase();
          if(res.status===404||ct.indexOf("text/html")!==-1) beginGuardedReload();
        })
        .catch(function(){});
    }catch(e){}
  }
  function tryReload(error, event){
    var msg=msgText(error);
    if(isMimeHtml(msg)) return beginGuardedReload();
    var url=extractAsset(error, event);
    if(!url) return false;
    confirmAssetThenReload(url);
    // Swallow while we verify — avoids unhandledrejection noise for cancels
    // that still name an /assets/ URL; reload only if the asset is gone.
    return true;
  }
  window.addEventListener("unhandledrejection",function(event){
    if(tryReload(event&&event.reason, event)){
      if(event.preventDefault) event.preventDefault();
    }
  });
  window.addEventListener("error",function(event){
    var err=(event&&event.error)||(event&&event.message)||"";
    if(tryReload(err, event)){
      if(event.preventDefault) event.preventDefault();
    }
  }, true);
  window.addEventListener("vite:preloadError",function(event){
    if(tryReload(event&&event.payload, event)){
      if(event.preventDefault) event.preventDefault();
    }
  });
})();document.currentScript.remove()