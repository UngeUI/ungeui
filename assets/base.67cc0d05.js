import{o as n,c as a,d as e,w as t,u as s,e as c,bG as l}from"./app.f72d2c6c.js";import{s as o,c as u,m as i}from"./index.0ecfaec4.js";const d=c("自定义Icon"),f=c("自定义持续时间"),r=c("限制最大数量"),p={setup(c){const p=()=>{i({text:"自定义不同的Icon",icon:l})},_=()=>{i({text:"自定义持续时间",duration:1e3})},C=()=>{i({text:"最大支持三个",icon:"danger",maxCount:3})};return(c,l)=>(n(),a("div",null,[e(s(o),null,{default:t((()=>[e(s(u),{onClick:p},{default:t((()=>[d])),_:1}),e(s(u),{onClick:_},{default:t((()=>[f])),_:1}),e(s(u),{onClick:C},{default:t((()=>[r])),_:1})])),_:1})]))}},_=c("成功"),C=c("危险"),k=c("提示"),m=c("警告"),x={setup(c){const l=()=>{i.success("这是一条成功信息")},d=()=>{i.danger("这是一条危险信息")},f=()=>{i.info("这是一条正常信息")},r=()=>{i.warning("这是一条警告信息")};return(c,i)=>(n(),a("div",null,[e(s(o),null,{default:t((()=>[e(s(u),{type:"success",onClick:l},{default:t((()=>[_])),_:1}),e(s(u),{type:"danger",onClick:d},{default:t((()=>[C])),_:1}),e(s(u),{type:"info",onClick:f},{default:t((()=>[k])),_:1}),e(s(u),{type:"warning",onClick:r},{default:t((()=>[m])),_:1})])),_:1})]))}};export{x as _,p as a};
