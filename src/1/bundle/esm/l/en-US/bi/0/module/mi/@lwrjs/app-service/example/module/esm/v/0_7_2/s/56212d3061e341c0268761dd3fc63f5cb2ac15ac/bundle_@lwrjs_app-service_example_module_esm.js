import { init as init$1, load } from '/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_7_2/s/a16575cb4c292c1dfb7e250b3053ae57cfeb0cca/bundle_lwr_esmLoader.js';
import { logOperationStart } from '/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_7_2/s/2bff750b844b5cc843e4a8ce6d91c4ed870ffcae/bundle_lwr_profiler.js';
import { createElement } from '/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_17_0/s/64206249267b504bb54ce09890fbcd310942368c/bundle_lwc.js';

const e=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function getClientBootstrapConfig(){return e}

const BOOTSTRAP_PREFIX="lwr.bootstrap.",BOOTSTRAP_END=`${BOOTSTRAP_PREFIX}end`;

function s(t,e){return createElement(t,{is:e})}function toKebabCase(t){return t.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const b$1=/-([a-z])/g;function getPropFromAttrName(t){return t.replace(b$1,e=>e[1].toUpperCase())}function init(t){if(typeof customElements!="undefined"&&typeof document!="undefined"){const e=document.querySelector("[lwr-root]");t.forEach(([m,i])=>{const r=toKebabCase(m);let l=document.body.querySelector(r);l?document.querySelectorAll(r).forEach(o=>{const n=s(r,i);for(const{name:c,value:d}of o.attributes){n.setAttribute(c,d);const a=getPropFromAttrName(c);a in n&&(n[a]=d);}for(;o.childNodes.length>0;)n.appendChild(o.childNodes[0]);o.parentElement.replaceChild(n,o);}):(l=s(r,i),e?e.appendChild(l):document.body.appendChild(l));});}logOperationStart({id:BOOTSTRAP_END});}

const n=getClientBootstrapConfig(),{imports:a,index:d,importMappings:b,endpoints:c}=n;init$1({imports:a,index:d,importMappings:b,endpoints:c});const{rootComponents:p,ssrProps:_}=n;Promise.all(p.map(async e=>{const o=toKebabCase(e);return load(e,"@lwrjs/app-service/example/module/esm/v/0_7_2").then(({default:s})=>{init([[o,s]]);})}));
