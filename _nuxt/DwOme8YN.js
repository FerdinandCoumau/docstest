import{_ as x}from"./CFXk01Qb.js";import{d as C,b7 as B,ap as w,aq as D,r as I,D as u,c as i,e as p,f,F as S,ah as $,n as m,E as e,h as A,t as E,ai as F,bb as G,ak as N}from"./DtQEuP9O.js";const P=["onClick"],z=C({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const y={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},h=g,l=B(),{ui:t,attrs:_}=w("content.codeGroup",void 0,y,D(h,"class"),!0),n=I(0);v({selectedIndex:n});const b=u(()=>{var c;return((c=l.default)==null?void 0:c.call(l).map((a,d)=>{var o,r,s;return{label:((o=a.props)==null?void 0:o.filename)||((r=a.props)==null?void 0:r.label)||`${d}`,icon:(s=a.props)==null?void 0:s.icon,component:a}}))||[]}),k=u(()=>b.value.find((c,a)=>a===n.value));return(c,a)=>{var o;const d=x;return i(),p("div",N({class:e(t).wrapper},e(_)),[f("div",{class:m(e(t).header)},[(i(!0),p(S,null,$(e(b),(r,s)=>(i(),p("button",{key:s,tabindex:"-1",class:m([e(t).tab.base,e(n)===s?e(t).tab.active:e(t).tab.inactive]),onClick:V=>n.value=s},[A(d,{icon:r.icon,filename:r.label,class:m(e(t).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,E(r.label),1)],10,P))),128))],2),(i(),F(G((o=e(k))==null?void 0:o.component),{"hide-header":""}))],16)}}});export{z as default};
