import{x as w,r as o,l as x,j as n,n as p,p as G,ap as A,h as M,a5 as R,G as z,aq as D}from"./i0IBxDWUoRh2.js";import{d as S}from"./CPQYd-a6LcMw.js";const[O,W]=w({strict:!1,name:"ButtonGroupContext"});function l(i){const{children:e,className:t,...a}=i,r=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,s=x("chakra-button__icon",t);return n.jsx(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:r})}l.displayName="ButtonIcon";function g(i){const{label:e,placement:t,spacing:a="0.5rem",children:r=n.jsx(A,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:u,...m}=i,h=x("chakra-button__spinner",s),d=t==="start"?"marginEnd":"marginStart",c=o.useMemo(()=>G({display:"flex",alignItems:"center",position:e?"relative":"absolute",[d]:e?a:0,fontSize:"1em",lineHeight:"normal",...u}),[u,e,d,a]);return n.jsx(p.div,{className:h,...m,__css:c,children:r})}g.displayName="ButtonSpinner";function q(i){const[e,t]=o.useState(!i);return{ref:o.useCallback(s=>{s&&t(s.tagName==="BUTTON")},[]),type:e?"button":void 0}}const F=M((i,e)=>{const t=W(),a=R("Button",{...t,...i}),{isDisabled:r=t?.isDisabled,isLoading:s,isActive:u,children:m,leftIcon:h,rightIcon:d,loadingText:c,iconSpacing:f="0.5rem",type:N,spinner:y,spinnerPlacement:_="start",className:C,as:b,shouldWrapChildren:k,...I}=z(i),v=o.useMemo(()=>{const P={...a?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:P}}},[a,t]),{ref:E,type:T}=q(b),j={rightIcon:d,leftIcon:h,iconSpacing:f,children:m,shouldWrapChildren:k};return n.jsxs(p.button,{disabled:r||s,ref:D(e,E),as:b,type:N??T,"data-active":S(u),"data-loading":S(s),__css:v,className:x("chakra-button",C),...I,children:[s&&_==="start"&&n.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:y}),s?c||n.jsx(p.span,{opacity:0,children:n.jsx(B,{...j})}):n.jsx(B,{...j}),s&&_==="end"&&n.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:y})]})});F.displayName="Button";function B(i){const{leftIcon:e,rightIcon:t,children:a,iconSpacing:r,shouldWrapChildren:s}=i;return s?n.jsxs("span",{style:{display:"contents"},children:[e&&n.jsx(l,{marginEnd:r,children:e}),a,t&&n.jsx(l,{marginStart:r,children:t})]}):n.jsxs(n.Fragment,{children:[e&&n.jsx(l,{marginEnd:r,children:e}),a,t&&n.jsx(l,{marginStart:r,children:t})]})}export{F as B,O as a};
