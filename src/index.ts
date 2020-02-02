//@ts-ignore
import {chromeSwitch} from '../../OLEx/dist/index.js'
//@ts-ignore
import OLOSClass from '../../olos/dist/index.js'
//@ts-ignore
import * as morphic from '../../morphic.js/morphic.js'
//@ts-ignore
import {Desktop,React} from '../../OLWebFull/ol-ex/dist/index.js'

//@ts-ignore
class OLWrapMorph extends morphic.Morph{
    drawOn(ctxt: any){
//Nothing...

};
};
//@ts-ignore
class OLHandMorph extends morphic.HandMorph{
    //@ts-ignore
processMouseUp(evt: MouseEvent){let m = this.morphAtPointer();if(this.world.olCapture)evt.stopImmediatePropagation(); if(!(m instanceof OLWrapMorph)){super.processMouseUp(evt); evt.stopImmediatePropagation()}}
    //@ts-ignore
    processMouseDown(evt: MouseEvent){let m = this.morphAtPointer();if(this.world.olCapture)evt.stopImmediatePropagation(); if(!(m instanceof OLWrapMorph)){super.processMouseDown(evt); evt.stopImmediatePropagation()}}

}
//@ts-ignore
class OLWorldMorph extends morphic.WorldMorph{
    //@ts-ignore
init(aCanvas,fillPage){

    morphic.WorldMorph.uber.init.call(this);
    this.color = new morphic.Color(205, 205, 205); // (130, 130, 130)
    this.alpha = 1;
    this.bounds = new morphic.Rectangle(0, 0, aCanvas.width, aCanvas.height);
    //@ts-ignore
    this.drawNew();
    this.isVisible = true;
    this.isDraggable = false;
    this.currentKey = null; // currently pressed key code
    this.worldCanvas = aCanvas;
    this.noticesTransparentClick = true;

    // additional properties:
    this.stamp = Date.now(); // reference in multi-world setups
    while (this.stamp === Date.now()) {}
    this.stamp = Date.now();

    this.useFillPage = fillPage;
    if (this.useFillPage === undefined) {
        this.useFillPage = true;
    }
    this.isDevMode = false;
    this.broken = [];
    this.animations = [];
    //@ts-ignore
    this.hand = new OLHandMorph(this);
    this.keyboardReceiver = null;
    this.cursor = null;
    this.lastEditedText = null;
    this.activeMenu = null;
    this.activeHandle = null;
    this.virtualKeyboard = null;
//@ts-ignore
    this.initEventListeners();
    //@ts-ignore
    this.addMorph(new OLWrapMorph());
}

}
let script = document.createElement('script');
script.type = 'module';
//@ts-ignore
script.src = chrome.extension.getURL('./content.js');
document.head.appendChild(script);
