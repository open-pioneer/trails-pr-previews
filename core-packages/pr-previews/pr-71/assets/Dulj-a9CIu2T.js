import{x as he,j as u,n as y,a8 as te,f as V,r as n,e as $,d as me,o as h,D as ee,a9 as z,h as ae,F as ke,G as se,K as be,aa as Ce,l as ne,a5 as ye}from"./i0IBxDWUoRh2.js";import{t as xe,v as pe}from"./Bux-xGeHLEc6.js";import{u as ve,b as ge}from"./5RWRhN2MLcW9.js";import{d as a}from"./CPQYd-a6LcMw.js";const[Ge,Ie]=he({name:"CheckboxGroupContext",strict:!1});function Se(o){return u.jsx(y.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...o,children:u.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function Pe(o){return u.jsx(y.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...o,children:u.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function De(o){const{isIndeterminate:d,isChecked:t,...s}=o,i=d?Pe:Se;return t||d?u.jsx(y.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:u.jsx(i,{...s})}):null}function je(o={}){const d=ve(o),{isDisabled:t,isReadOnly:s,isRequired:i,isInvalid:r,id:k,onBlur:v,onFocus:T,"aria-describedby":g}=d,{defaultChecked:I,isChecked:S,isFocusable:H,onChange:U,isIndeterminate:f,name:P,value:E,tabIndex:L=void 0,"aria-label":D,"aria-labelledby":j,"aria-invalid":b,...q}=o,A=te(q,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),R=V(U),B=V(v),_=V(T),[x,G]=n.useState(!1),[C,M]=n.useState(!1),[w,W]=n.useState(!1),[F,p]=n.useState(!1);n.useEffect(()=>xe(G),[]);const m=n.useRef(null),[X,oe]=n.useState(!0),[re,N]=n.useState(!!I),O=S!==void 0,c=O?S:re,J=n.useCallback(e=>{if(s||t){e.preventDefault();return}O||N(c?e.currentTarget.checked:f?!0:e.currentTarget.checked),R?.(e)},[s,t,c,O,f,R]);$(()=>{m.current&&(m.current.indeterminate=!!f)},[f]),me(()=>{t&&M(!1)},[t,M]),$(()=>{const e=m.current;if(!e?.form)return;const l=()=>{N(!!I)};return e.form.addEventListener("reset",l),()=>e.form?.removeEventListener("reset",l)},[]);const Q=t&&!H,Y=n.useCallback(e=>{e.key===" "&&p(!0)},[p]),Z=n.useCallback(e=>{e.key===" "&&p(!1)},[p]);$(()=>{if(!m.current)return;m.current.checked!==c&&N(m.current.checked)},[m.current]);const ce=n.useCallback((e={},l=null)=>{const K=fe=>{C&&fe.preventDefault(),p(!0)};return{...e,ref:l,"data-active":a(F),"data-hover":a(w),"data-checked":a(c),"data-focus":a(C),"data-focus-visible":a(C&&x),"data-indeterminate":a(f),"data-disabled":a(t),"data-invalid":a(r),"data-readonly":a(s),"aria-hidden":!0,onMouseDown:h(e.onMouseDown,K),onMouseUp:h(e.onMouseUp,()=>p(!1)),onMouseEnter:h(e.onMouseEnter,()=>W(!0)),onMouseLeave:h(e.onMouseLeave,()=>W(!1))}},[F,c,t,C,x,w,f,r,s]),ie=n.useCallback((e={},l=null)=>({...e,ref:l,"data-active":a(F),"data-hover":a(w),"data-checked":a(c),"data-focus":a(C),"data-focus-visible":a(C&&x),"data-indeterminate":a(f),"data-disabled":a(t),"data-invalid":a(r),"data-readonly":a(s)}),[F,c,t,C,x,w,f,r,s]),le=n.useCallback((e={},l=null)=>({...A,...e,ref:ee(l,K=>{K&&oe(K.tagName==="LABEL")}),onClick:h(e.onClick,()=>{X||(m.current?.click(),requestAnimationFrame(()=>{m.current?.focus({preventScroll:!0})}))}),"data-disabled":a(t),"data-checked":a(c),"data-invalid":a(r)}),[A,t,c,r,X]),ue=n.useCallback((e={},l=null)=>({...e,ref:ee(m,l),type:"checkbox",name:P,value:E,id:k,tabIndex:L,onChange:h(e.onChange,J),onBlur:h(e.onBlur,B,()=>M(!1)),onFocus:h(e.onFocus,_,()=>M(!0)),onKeyDown:h(e.onKeyDown,Y),onKeyUp:h(e.onKeyUp,Z),required:i,checked:c,disabled:Q,readOnly:s,"aria-label":D,"aria-labelledby":j,"aria-invalid":b?!!b:r,"aria-describedby":g,"aria-disabled":t,style:pe}),[P,E,k,J,B,_,Y,Z,i,c,Q,s,D,j,b,r,g,t,L]),de=n.useCallback((e={},l=null)=>({...e,ref:l,onMouseDown:h(e.onMouseDown,Ae),"data-disabled":a(t),"data-checked":a(c),"data-invalid":a(r)}),[c,t,r]);return{state:{isInvalid:r,isFocused:C,isChecked:c,isActive:F,isHovered:w,isIndeterminate:f,isDisabled:t,isReadOnly:s,isRequired:i},getRootProps:le,getCheckboxProps:ce,getIndicatorProps:ie,getInputProps:ue,getLabelProps:de,htmlProps:A}}function Ae(o){o.preventDefault(),o.stopPropagation()}function _e(o){const[d,t]=n.useState(o),[s,i]=n.useState(!1);return o!==d&&(i(!0),t(o)),s}const we={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Fe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ee=z({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Le=z({from:{opacity:0},to:{opacity:1}}),Re=z({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Be=ae(function(d,t){const s=Ie(),i={...s,...d},r=ke("Checkbox",i),k=se(d),{spacing:v="0.5rem",className:T,children:g,iconColor:I,iconSize:S,icon:H=u.jsx(De,{}),isChecked:U,isDisabled:f=s?.isDisabled,onChange:P,inputProps:E,...L}=k;let D=U;s?.value&&k.value&&(D=s.value.includes(k.value));let j=P;s?.onChange&&k.value&&(j=be(s.onChange,P));const{state:b,getInputProps:q,getCheckboxProps:A,getLabelProps:R,getRootProps:B}=je({...L,isDisabled:f,isChecked:D,onChange:j}),_=_e(b.isChecked),x=n.useMemo(()=>({animation:_?b.isIndeterminate?`${Le} 20ms linear, ${Re} 200ms linear`:`${Ee} 200ms linear`:void 0,...r.icon,...Ce({fontSize:S,color:I})}),[I,S,_,b.isIndeterminate,r.icon]),G=n.cloneElement(H,{__css:x,isIndeterminate:b.isIndeterminate,isChecked:b.isChecked});return u.jsxs(y.label,{__css:{...Fe,...r.container},className:ne("chakra-checkbox",T),...B(),children:[u.jsx("input",{className:"chakra-checkbox__input",...q(E,t)}),u.jsx(y.span,{__css:{...we,...r.control},className:"chakra-checkbox__control",...A(),children:G}),g&&u.jsx(y.span,{className:"chakra-checkbox__label",...R(),__css:{marginStart:v,...r.label},children:g})]})});Be.displayName="Checkbox";const Me=["h","minH","height","minHeight"],Ne=ae((o,d)=>{const t=ye("Textarea",o),{className:s,rows:i,...r}=se(o),k=ge(r),v=i?te(t,Me):t;return u.jsx(y.textarea,{ref:d,rows:i,...k,className:ne("chakra-textarea",s),__css:v})});Ne.displayName="Textarea";export{Be as C,Ne as T,je as u};
