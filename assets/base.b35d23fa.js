import{h as t,o as e,c as a,d as n,u as r,V as l}from"./app.b79c3897.js";import{n as u,p as o,m as s}from"./index.132c2d92.js";const c={setup(s){let c=t(2),i=t(new Array(10).fill().map((t=>new Array(4).fill().map((t=>({id:Math.random().toString(32).slice(2,6),sex:Math.random()>.5?"girl":"boy",age:Math.floor(50*Math.random())})))))),d=[{title:"Id",key:"id"},{title:"Age",key:"age",align:"center"},{title:"Sex",key:"sex",width:"500px"}];return(t,s)=>(e(),a("div",null,[n(r(u),{data:r(i)[r(c)],column:r(d)},null,8,["data","column"]),n(r(o),{current:r(c),"onUpdate:current":s[0]||(s[0]=t=>l(c)?c.value=t:c=t),total:100},null,8,["current"])]))}},i={setup(u){let s=t(8);return(t,u)=>(e(),a("div",null,[n(r(o),{current:r(s),"onUpdate:current":u[0]||(u[0]=t=>l(s)?s.value=t:s=t),total:200,count:3},null,8,["current"])]))}},d={setup(u){let c=t(4);const i=t=>{s.info("当前页改变"+t)};return(t,u)=>(e(),a("div",null,[n(r(o),{current:r(c),"onUpdate:current":u[0]||(u[0]=t=>l(c)?c.value=t:c=t),total:100,onChange:i},null,8,["current"])]))}};export{d as _,i as a,c as b};
