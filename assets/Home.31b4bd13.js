import{m as e,bu as t,bv as a,i as s,u as l,o,c as r,b as i,k as n,G as c,C as u,bw as v,bx as d,by as f,r as m,d as k,j as p}from"./app.94ad36b9.js";const h={key:0,class:"home-hero"},y={key:0,class:"figure"},x=["src","alt"],b={key:1,id:"main-title",class:"title"},g={key:2,class:"description"};var $=e({setup(e){const d=t(),f=a(),m=s((()=>f.value.heroImage||k.value||$.value||I.value)),k=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||d.value.title)),$=s((()=>null!==f.value.tagline)),_=s((()=>f.value.tagline||d.value.description)),I=s((()=>f.value.actionLink&&f.value.actionText)),T=s((()=>f.value.altActionLink&&f.value.altActionText));return(e,t)=>l(m)?(o(),r("header",h,[e.$frontmatter.heroImage?(o(),r("figure",y,[i("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,x)])):n("",!0),l(k)?(o(),r("h1",b,c(l(p)),1)):n("",!0),l($)?(o(),r("p",g,c(l(_)),1)):n("",!0),l(I)?(o(),u(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("",!0),l(T)?(o(),u(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});$.__scopeId="data-v-4aeb51c6";const _={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},w={key:1,class:"details"};var j=e({setup(e){const t=a(),u=s((()=>t.value.features&&t.value.features.length>0)),v=s((()=>t.value.features?t.value.features:[]));return(e,t)=>l(u)?(o(),r("div",_,[i("div",I,[i("div",T,[i("div",A,[(o(!0),r(d,null,f(l(v),((e,t)=>(o(),r("section",{key:t,class:"feature"},[e.title?(o(),r("h2",L,c(e.title),1)):n("",!0),e.details?(o(),r("p",w,c(e.details),1)):n("",!0)])))),128))])])])])):n("",!0)}});j.__scopeId="data-v-793c2722";const C={},B={key:0,class:"footer"},G={class:"container"},q={class:"text"};C.render=function(e,t){return e.$frontmatter.footer?(o(),r("footer",B,[i("div",G,[i("p",q,c(e.$frontmatter.footer),1)])])):n("",!0)},C.__scopeId="data-v-41020908";const z={class:"home","aria-labelledby":"main-title"},D={class:"home-content"};var E=e({setup:e=>(e,t)=>{const a=m("Content");return o(),r("main",z,[k($),p(e.$slots,"hero"),k(j),i("div",D,[k(a)]),p(e.$slots,"features"),k(C),p(e.$slots,"footer")])}});E.__scopeId="data-v-cc1f894c";export default E;