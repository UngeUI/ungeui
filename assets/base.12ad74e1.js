import{h as e,o as a,c as l,d as u,w as s,u as t,S as n}from"./app.8fe4c30f.js";import{s as v,g as d,m as o}from"./loadingBar.8ddbfa87.js";const p={setup(o){let p=e(0);return(e,o)=>(a(),l("div",null,[u(t(v),null,{default:s((()=>[u(t(d),{value:t(p),"onUpdate:value":o[0]||(o[0]=e=>n(p)?p.value=e:p=e),size:"small",style:{width:"140px"}},null,8,["value"]),u(t(d),{value:t(p),"onUpdate:value":o[1]||(o[1]=e=>n(p)?p.value=e:p=e),size:"medium",style:{width:"160px"}},null,8,["value"]),u(t(d),{value:t(p),"onUpdate:value":o[2]||(o[2]=e=>n(p)?p.value=e:p=e),size:"large",style:{width:"180px"}},null,8,["value"])])),_:1})]))}},i={setup(s){let v=e(20);return(e,s)=>(a(),l("div",null,[u(t(d),{value:t(v),"onUpdate:value":s[0]||(s[0]=e=>n(v)?v.value=e:v=e),step:20,style:{width:"140px"}},null,8,["value"])]))}},r={setup(s){let v=e(20);const p=()=>{o.info("用户输入")},i=()=>{o.success("用户增加")},r=()=>{o.warning("用户减少")};return(e,s)=>(a(),l("div",null,[u(t(d),{value:t(v),"onUpdate:value":s[0]||(s[0]=e=>n(v)?v.value=e:v=e),onChange:p,onIncrease:i,onDecrease:r},null,8,["value"])]))}};export{r as _,i as a,p as b};