import { registerTemplate, registerComponent, LightningElement } from '/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_17_0/s/64206249267b504bb54ce09890fbcd310942368c/bundle_lwc.js';

function l(r,e){var t=e?"["+e+"]":"";return ["main",t," {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1",t," {color: #1798c1;}"].join("")}var p$1 = [l];

function e(l,i,o,c){const{h:s,t:m}=l;return [s("main",{key:0},[s("img",{attrs:{src:"/public/assets/recipes-logo.png",alt:"logo"},key:1},[]),s("h1",{key:2},[m("Hello World!")])])]}var e$1 = registerTemplate(e);e.stylesheets=[],p$1&&e.stylesheets.push.apply(e.stylesheets,p$1),e.stylesheetToken="example-app_app";

class p extends LightningElement{}var app = registerComponent(p,{tmpl:e$1});

export default app;
