import{b as t,d as e,a as s,C as a,p as u,c as l,m as r,w as p,f as n,n as o,g as f,F as d,q as c,_ as g,s as i,h as b,ao as y,k as m,b7 as $,as as h}from"./index.Ba5-doou.js";const j=Symbol("rowContextKey"),v=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=e({name:"ElRow"});const x=i(g(e({...N,props:v,setup(t){const e=t,g=s("row"),i=a((()=>e.gutter));u(j,{gutter:i});const b=a((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft=`-${e.gutter/2}px`,t):t})),y=a((()=>[g.b(),g.is(`justify-${e.justify}`,"start"!==e.justify),g.is(`align-${e.align}`,!!e.align)]));return(t,e)=>(l(),r(c(t.tag),{class:o(f(y)),style:d(f(b))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]])),_=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>y({})},sm:{type:b([Number,Object]),default:()=>y({})},md:{type:b([Number,Object]),default:()=>y({})},lg:{type:b([Number,Object]),default:()=>y({})},xl:{type:b([Number,Object]),default:()=>y({})}}),w=e({name:"ElCol"});const E=i(g(e({...w,props:_,setup(t){const e=t,{gutter:u}=m(j,{gutter:a((()=>0))}),g=s("col"),i=a((()=>{const t={};return u.value&&(t.paddingLeft=t.paddingRight=u.value/2+"px"),t})),b=a((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];$(a)&&("span"===s?t.push(g.b(`${e[s]}`)):a>0&&t.push(g.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{$(e[s])?t.push(g.b(`${s}-${e[s]}`)):h(e[s])&&Object.entries(e[s]).forEach((([e,a])=>{t.push("span"!==e?g.b(`${s}-${e}-${a}`):g.b(`${s}-${a}`))}))})),u.value&&t.push(g.is("guttered")),[g.b(),t]}));return(t,e)=>(l(),r(c(t.tag),{class:o(f(b)),style:d(f(i))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]]));export{E,x as a};