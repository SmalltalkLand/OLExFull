let old = (self as any).caja;
import 'network-loader!https://caja.appspot.com/caja.js'
let caja = (self as any).caja;
if(old)(self as any).caja = old;
caja.initialize({
    cajaServer: 'https://caja.appspot.com/',
    debug: true
  });
  function cajaLoad(embeddedDOM: any,what: any,f: (frame: any) => any){caja.load(embeddedDOM,what,(frame: any) => {
let theOL = newOL();
f(frame).api(new ((self as any).Proxy)(theOL,{get: (o: { [x: string]: any; },k: string | number) => caja.tame(caja.markFunction(o[k]))})).run()

  })}
(Object.prototype as any).ol_toFunctionOrNothing = function(){return this};
function newProto(cls: any){let proto: any;return new ((self as any).Proxy)(cls,{get: (o: { [x: string]: any; },k: string) => k === 'prototype' ? proto : o[k],set: (o: { [x: string]: any; },k: string,v: any) =>  k === 'prototype' ? proto = v : o[k] = v})}
function bindThis<T,A extends Array<AIT>,AIT,R>(f: (t: T,...args:A) => R){return function(...args: A){return f(this,...args)}}
function newOL(){return new ((self as any).Proxy)({win: window},{
    get: bindThis((p: any,o: any,k: string | number | symbol) => ((v => v.prototype ? v === Object ? null : newProto(v) : v)(k === 'ol' ? p : (o.win[k] || o[k] || (o.win.mediaWiki && o.win.mediaWiki[k]))?.ol_toFunctionOrNothing())))
})}