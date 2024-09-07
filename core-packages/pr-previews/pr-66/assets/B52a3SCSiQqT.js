var m=t=>{throw TypeError(t)};var a=(t,e,n)=>e.has(t)||m("Cannot "+n);var v=(t,e,n)=>(a(t,e,"read from private field"),n?n.call(t):e.get(t)),c=(t,e,n)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),u=(t,e,n,r)=>(a(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),p=(t,e,n)=>(a(t,e,"access private method"),n);import{c as S,a as T,r as d,j as i,b as A}from"./BDSkedxQL-YV.js";import{E as b}from"./vOBnYnib6xFk.js";import{u as j}from"./B0WlhuaTcrRe.js";import{C as y,H as f}from"./5stHmKxIU7Tc.js";import{T as z}from"./CeUxMt2o2frV.js";import{V as C}from"./C0hHtFCAuNhL.js";import{B as q}from"./C-3gFyvvFlJ-.js";import"./CJWy3CnFOLh6.js";class M{textService;logger;constructor(e){this.textService=e.references.textService,this.logger=S("api-app:TextApiExtension")}async getApiMethods(){return{changeText:e=>{this.logger.info("Changing text to",JSON.stringify(e)),this.textService.setText(e)}}}}class k extends b{text="not yet set";setText(e){const n=this.text;this.text=e,this.emit("text-changed",{newText:this.text,oldText:n})}getText(){return this.text}}class w{async getApiMethods(){return{justAnotherApiMethod:()=>{console.log("justAnotherApiMethod")}}}}var s,o,l;class I{constructor({references:e}){c(this,o);c(this,s);u(this,s,e.ctx)}emitEvent(e,n=null){if(e==null)return;if(e instanceof Event){p(this,o,l).call(this,e);return}const r=new CustomEvent(e,{bubbles:!1,cancelable:!1,detail:n});p(this,o,l).call(this,r)}}s=new WeakMap,o=new WeakSet,l=function(e){v(this,s).getHostElement().dispatchEvent(e)};const _={"api-app":{name:"api-app",services:{TextApiExtension:{name:"TextApiExtension",clazz:M,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{textService:{name:"api-app.TextService",qualifier:void 0,all:!1}}},TextService:{name:"TextService",clazz:k,provides:[{name:"api-app.TextService",qualifier:void 0}],references:{}},SecondApiExtension:{name:"SecondApiExtension",clazz:w,provides:[{name:"integration.ApiExtension",qualifier:void 0}],references:{}}},ui:{references:[{name:"api-app.TextService",qualifier:void 0,all:!1},{name:"integration.ExternalEventService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/integration":{name:"@open-pioneer/integration",services:{ExternalEventServiceImpl:{name:"ExternalEventServiceImpl",clazz:I,provides:[{name:"integration.ExternalEventService",qualifier:void 0}],references:{ctx:{name:"runtime.ApplicationContext",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},B="",H=[];function P(t){throw new Error(`Unsupported locale: '${t}'`)}const N=T(B),R=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:P,locales:H,packages:_,styles:N},Symbol.toStringTag,{value:"Module"})),U="api-app",h=j.bind(void 0,U);function V(){const t=h("integration.ExternalEventService"),e=()=>{t.emitEvent("my-custom-event",{data:"my-event-data"})},n=h("api-app.TextService"),[r,x]=d.useState("");return d.useEffect(()=>{x(n.getText());const E=n.on("text-changed",g=>{x(g.newText)});return()=>E.destroy()},[n]),i.jsx(y,{children:i.jsxs(C,{children:[i.jsx(f,{size:"md",children:"Emitting Events"}),i.jsx(z,{children:"Click this button to emit a browser event:"}),i.jsx(q,{onClick:e,children:"Emit Event"}),i.jsx(f,{size:"md",pt:20,children:"Reacting to API calls from the host site"}),i.jsxs("div",{children:["Current text: ",r]})]})})}const D=A({component:V,appMetadata:R});customElements.define("api-app",D);
