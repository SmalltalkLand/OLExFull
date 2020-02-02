self.addEventListener('load',(evt) => {
    if((self as any).world){(self as any).world.children[0]?.stage && ((self as any).world.children[0].stage._ol = function(){
this.postMessage = self.postMessage.bind(self);
this.onMessage = self.addEventListener.bind(self,'message');
this.ol_debugAttach = (sprite: any) => {
    let debug: boolean;
    self.addEventListener('message',m => {if(m.data.type === 'debugChanged')debug = m.data.data});
    Object.defineProperty(sprite.variables.vars.debug,'value',{get: () => debug,set: v => {debug = v; self.postMessage({changeDebug: v},'*')}});
     return sprite};

})};
})