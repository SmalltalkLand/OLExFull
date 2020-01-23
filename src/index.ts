//@ts-ignore
import {chromeSwitch} from '../../OLEx/dist/index.js'
//@ts-ignore
import theContent from 'extract-loader!./content.ts'

let s = document.createElement('script');
s.type = 'module';
s.text = theContent;
document.head.appendChild(s);