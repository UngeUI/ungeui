var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{o as u,c as s,b as r,f as d,g as c,h as p,i as v,u as m,j as f,d as h,k as g,n as b,l as y,m as x,p as w,q as k,s as S,t as C,v as _,x as z,y as B,r as L,z as N,w as M,T,A as U,B as I,C as R,D as O,e as j,E as D,F as $,G as A,H as F,I as H,J as W,K as E,L as P,M as G,N as V,O as q,P as X,Q as J,R as K,S as Q}from"./app.f72d2c6c.js";const Y={name:"UClose"},Z={width:"1em",height:"1em",viewBox:"0 0 32 32"},ee=[r("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},[r("path",{d:"M2 30L30 2m0 28L2 2"})],-1)];Y.render=function(e,t,a,l,n,o){return u(),s("svg",Z,ee)};const te={props:{type:{type:String,default:"default",validator:e=>["default","success","info","danger","warning"].includes(e)},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},closable:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},color:{type:String}},emits:["close"],setup(e,{emit:t}){const a=e;d(),c();let l=p(!0);const n=e=>{l.value=!1,t("close",e)},o=v((()=>"u-tag-"+a.type)),i=v((()=>"u-tag-size__"+a.size)),x=v((()=>a.round&&"u-tag-round")),w=v((()=>a.disabled&&"u-tag-disabled")),k=v((()=>{if(a.color)return{color:"#fff",backgroundColor:a.color,border:`1px solid ${a.color}`}}));return(t,a)=>m(l)?(u(),s("div",{key:0,class:b(["u-tag",m(o),m(i),m(x),m(w)]),style:y(m(k))},[r("div",null,[f(t.$slots,"default")]),e.closable?(u(),s("i",{key:0,class:"u-tag-close",onClick:n},[h(Y)])):g("",!0)],6)):g("",!0)},name:"UTag",install:e=>{e.component(te.name,te)}};var ae=x({name:"resizeObserver",props:{onResize:{type:Function}},setup(e,{slots:t,emit:a}){const l=w({width:0,height:0}),n=(t,a)=>{const{width:n,height:o}=t[0].contentRect,{onResize:i}=e,u=Math.floor(n),s=Math.floor(o);if(l.width!==u||l.height!==s){const e={width:u,height:s};Object.assign(l,e),i&&i(l)}},o=_();let i=null;return k((()=>{(()=>{var e;let t=null==(e=null==o?void 0:o.vnode)?void 0:e.el;!i&&t&&(i=new C(n),i.observe(t))})()})),S((()=>{i&&i.disconnect()})),()=>{var e;return null==(e=t.default)?void 0:e.call(t)[0]}}});const le=x({name:"Avatar",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},src:{type:String},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e}},setup(e,{slots:t}){const a=p(null),l=p(null),n=v((()=>"u-avatar-size__"+e.size)),o=v((()=>e.round?"u-avatar-round":""));return{textRef:a,selfRef:l,setScaleParam:({width:e,height:t})=>{const{value:n}=a,{offsetWidth:o,offsetHeight:i}=a.value,{offsetWidth:u,offsetHeight:s}=l.value,r=Math.min(u/o*.9,s/i*.9,1);n.style.transform=`translateX(-50%) translateY(-50%) scale(${r})`},avatarSize:n,round:o}},render(){const{textRef:e,selfRef:t,setScaleParam:a,avatarSize:l,round:n,src:o,size:i,$slots:u}=this;return h("div",{ref:"selfRef",class:["u-avatar",l,n]},[!u.default&&o?h("img",{class:"u-avatar-size__"+i,src:o},null):h(ae,{onResize:a},{default:()=>{var e;return[h("span",{ref:"textRef",class:"u-avatar-text"},[null==(e=u.default)?void 0:e.call(u)])]}})])}});le.name="UAvatar",le.install=e=>{e.component(le.name,le)};const ne=x({name:"Icon",props:{color:String,size:{type:[Number,String]}},setup(e,{slots:t}){let a=v((()=>({display:"inline-flex","align-items":"center","line-height":1,color:e.color,"font-size":"string"==typeof e.size?e.size:e.size+"px"})));return()=>{var e;return h("i",{class:"u-icon",style:a.value},[null==(e=t.default)?void 0:e.call(t)])}}}),oe=x({name:"Button",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},type:{type:String,default:"default",validator:e=>["default","success","danger","warning","info"].includes(e)},deep:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},dashed:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},size:{type:String,default:"medium",validator:e=>["small","medium","large","huge"].includes(e)},text:{type:Boolean,validator:e=>"boolean"==typeof e},onClick:{type:Function},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},icon:{type:String},round:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},prefix:{type:String},suffix:{type:String}},setup(e,{slots:t}){let a=p(!1);p(null);return{waveState:a,onClick:async()=>{var t;e.disabled||(null==(t=e.onClick)||t.call(e),a.value=!0,setTimeout((()=>{a.value=!1}),300))},activeName:v((()=>e.type&&"u-button-wave-"+e.type)),isDeep:v((()=>e.deep&&"u-button-deep")),isDashed:v((()=>e.dashed&&"u-button-dashed")),isDisabled:v((()=>e.disabled&&"u-button-disabled")),isText:v((()=>e.text&&"u-button-text")),isRound:v((()=>e.round&&"u-button-round")),iconType:v((()=>(t.prefix||t.suffix)&&!t.default&&`u-button-icon-${e.size}`)),buttonType:v((()=>"u-button-"+e.type)),buttonSize:v((()=>"u-button-size-"+e.size))}},render(){var e,t,a;const{buttonType:l,buttonSize:n,isDeep:o,isDashed:i,isText:u,isRound:s,isDisabled:r,iconType:d,prefix:c,suffix:p,waveState:v,activeName:m,onClick:f,$slots:g}=this;return h("div",{class:["u-button",u,n,l,o,i,r,d,s,{[m]:v}],onClick:f},[null==(e=g.prefix)?void 0:e.call(g),g.default&&h("span",{class:[{"u-button-prefix":g.prefix},{"u-button-suffix":g.suffix}]},[null==(t=g.default)?void 0:t.call(g)]),null==(a=g.suffix)?void 0:a.call(g)])}});oe.name="UButton",oe.install=e=>{e.component(oe.name,oe)};const ie=x({name:"divider",props:{type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},bold:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},height:{type:Number},color:{type:String}},setup:e=>({type:v((()=>"u-divider-"+e.type)),bound:v((()=>e.bold&&"u-divider-bold")),dividerStyle:v((()=>({"border-top-color":e.color,"border-top-width":e.height+"px"})))}),render(){const{type:e,bound:t,dividerStyle:a,$slots:l}=this;return h("div",{class:["u-divider",e,t],style:a},null)}});ie.name="UDivider",ie.install=e=>{e.component(ie.name,ie)},ne.name="UIcon",ne.install=e=>{e.component(ne.name,ne)};const ue=x({name:"Input",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},type:{type:String,default:"text",validator:e=>["text","password","textarea"].includes(e)},disabled:{type:Boolean,default:!1,validator:e=>"boolean"==typeof e},value:[String,Number],placeholder:String,rows:{type:Number,default:4},cols:Number},emits:["update:value"],setup(e,{emit:t,slots:a}){const l=v((()=>"u-input-size-"+e.size));let n=p(!1);const o=()=>{n.value=!0},i=()=>{n.value=!1},u=v((()=>"password"==e.type?"password":"")),s=e=>{t("update:value",e.target.value)};return()=>{var t,r;return h("div",{class:["u-input",{"u-input-focus":n.value},{"u-input-disabled":e.disabled}]},["textarea"!=e.type?h("div",{class:["u-input-wrapper",l.value]},[a.prefix&&h("div",{class:["u-input-prefix"]},[null==(t=a.prefix)?void 0:t.call(a)]),h("div",{class:["u-input-input"]},[h("input",{placeholder:e.placeholder,class:"u-input__input-el",type:u.value,onFocus:o,onBlur:i,onInput:s,value:e.value,disabled:e.disabled},null)]),a.prefix&&h("div",{class:["u-input-suffix"]},[a.suffix&&(null==(r=a.suffix)?void 0:r.call(a))])]):null,"textarea"==e.type?h("div",{class:["u-input-textarea"]},[h("textarea",{placeholder:e.placeholder,class:"u-input__textarea-el",onFocus:o,onBlur:i,onInput:s,rows:e.rows,cols:e.cols,value:e.value,disabled:e.disabled},null)]):null])}}});ue.name="UInput",ue.install=e=>{e.component(ue.name,ue)};const se=x({name:"Radio",props:{value:[String,Number,Boolean],checked:{type:Boolean,defalut:!1,validator:e=>"boolean"==typeof e},disabled:Boolean},emits:[],setup(e,{slots:t}){const a=z("radioGroupContext",void 0);let l=v((()=>{var t;return e.checked||e.value==(null==(t=null==a?void 0:a.props)?void 0:t.value)}));return()=>{var n;return h("div",{class:["u-radio",{"u-radio-disabled":e.disabled}],onClick:()=>{e.disabled||null==a||a.onRadioChange(null==e?void 0:e.value)}},[h("input",{class:["u-radio-input"],value:e.value},null),h("div",{class:["u-radio-dot",{"u-radio-dot-checked":l.value}]},null),h("div",{class:["u-radio-label"]},[null==(n=t.default)?void 0:n.call(t)])])}}}),re=x({name:"RadioGroup",props:["value"],emits:["update:value"],setup:(e,{slots:t,emit:a})=>(B("radioGroupContext",w({onRadioChange:e=>{a("update:value",e)},props:e})),()=>{var e;return h("div",{class:"u-radio-group"},[null==(e=t.default)?void 0:e.call(t)])})}),de=x({name:"RadioButton",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},value:[String,Number,Boolean]},setup(e,{slots:t}){const a=z("radioGroupContext",void 0),l=v((()=>{var t;return(null==e?void 0:e.checked)||(null==e?void 0:e.value)==(null==(t=null==a?void 0:a.props)?void 0:t.value)}));return()=>{var n;return h("div",{onClick:()=>{e.disabled||a.onRadioChange(null==e?void 0:e.value)},class:["u-radio-button",{"u-radio-button-disabled":e.disabled},{"u-radio-button-checked":l.value}]},[null==(n=t.default)?void 0:n.call(t)])}}});se.name="URadio",re.name="URadioGroup",de.name="URadioButton",se.install=e=>{e.component(se.name,se)},re.install=e=>{e.component(re.name,re)},de.install=e=>{e.component(de.name,de)};const ce={name:"MdiCheckBold"},pe={width:"1em",height:"1em",viewBox:"0 0 24 24"},ve=[r("path",{d:"M9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42z",fill:"currentColor"},null,-1)];ce.render=function(e,t,a,l,n,o){return u(),s("svg",pe,ve)};const me=x({name:"Checkbox",props:{value:[String,Number,Boolean],checked:{type:Boolean,defalut:!1,validator:e=>"boolean"==typeof e},disabled:{type:Boolean,defalut:!1}},emits:["update:checked"],setup(e,{slots:t,emit:a}){const l=z("checkboxGroupContent",void 0),n=v((()=>{var t;return e.checked||(null==(t=null==l?void 0:l.props)?void 0:t.value.includes(e.value))})),o=()=>{a("update:checked",!e.checked),null==l||l.onCheckboxChange(e.value)};return()=>{var a;return h("div",{class:["u-checkbox",{"u-checkbox-disabled":e.disabled}],onClick:o},[h("input",{type:"checkbox",class:["u-checkbox-input"],value:e.value},null),h("div",{class:["u-checkbox-dot",{"u-checkbox-dot-checked":n.value}]},[h(ce,null,null)]),h("div",{class:["u-checkbox-label"]},[null==(a=t.default)?void 0:a.call(t)])])}}}),fe=x({name:"checkboxGroup",props:{value:{type:Array,default:[]}},emits:["update:value"],setup:(e,{slots:t,emit:a})=>(B("checkboxGroupContent",w({props:e,onCheckboxChange:t=>{let l=Array.from(e.value);const n=l.findIndex((e=>e==t));-1==n?l.push(t):l.splice(n,1),a("update:value",l)}})),()=>{var e;return h("div",{class:"u-checkbox-group"},[null==(e=t.default)?void 0:e.call(t)])})});me.name="UCheckbox",fe.name="UCheckboxGroup",me.install=e=>{e.component(Ucheckbox.name,Ucheckbox)},fe.install=e=>{e.component(fe.name,fe)};const he=x({name:"u-switch",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"]},checked:{type:[Boolean,String,Number],default:!1},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1}},emits:["update:checked","change"],setup(e,{emit:t}){let a=v((()=>"u-switch-size-"+e.size)),l=v((()=>e.checked==e.checkedValue?"u-switch-checked":""));const n=a=>{console.log("value:",e.checked,e.uncheckedValue,e.checkedValue),t("update:checked",e.checked==e.checkedValue?e.uncheckedValue:e.checkedValue),t("change",a)};return()=>h("div",{onClick:n,class:["u-switch",a.value,l.value]},[h("div",{class:["u-switch-circle"]},null)])}});he.name="USwitch",he.install=e=>{e.component(he.name,Uswitch)};const ge=x({name:"space",props:{justify:{type:String},align:{type:String,default:"center"},vertical:{type:Boolean},gap:{type:Number,default:20}},setup(e,{slots:t}){const a=v((()=>({"align-items":e.vertical?"":e.align,"justify-content":e.justify,"flex-flow":e.vertical?"column nowrap":"auto"}))),l=v((()=>e.gap+"px")),n=v((()=>({"margin-top":0,"margin-bottom":0,"margin-right":l.value})));return{spaceStyle:a,verticalClass:v((()=>({"margin-left":0,"margin-right":0,"margin-bottom":l.value}))),horizontalClass:n,LastElementStyle:v((()=>e.vertical?{"margin-bottom":0}:{"margin-right":0}))}},render(){const{spaceStyle:e,verticalClass:t,horizontalClass:a,LastElementStyle:l,vertical:n}=this,o=function(e){return e.flatMap((e=>Array.isArray(e.children)?e.children:e))}(this.$slots.default());return h("div",{class:"u-space",style:e},[o.map(((e,i)=>h("div",{style:[n?t:a,i==o.length-1&&l]},[e])))])}});ge.name="USpace",ge.install=e=>{e.component(ge.name,ge)};const be={name:"BytesizeClose"},ye={width:"1em",height:"1em",viewBox:"0 0 32 32"},xe=[r("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},[r("path",{d:"M2 30L30 2m0 28L2 2"})],-1)];be.render=function(e,t,a,l,n,o){return u(),s("svg",ye,xe)};const we=x({name:"dialog",components:{UButton:oe,USpace:ge,IconClose:be},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"基础弹窗"},enterClass:{type:String,default:"bounceIn"},leaveClass:{type:String,default:"bounceOut"},width:{type:[Number,String],default:"512px"},bodyMaxHeight:{typeof:[Number,String],default:"400px"}},emits:["update:visible","cancel","confirm","close"],setup(e,{emit:t}){const a=v((()=>`animate__animated animate__${e.enterClass}`)),l=v((()=>`animate__animated animate__${e.leaveClass}`)),n=v((()=>({width:"string"==typeof e.width?e.width:e.width+"px"}))),o=v((()=>({maxHeight:"string"==typeof e.bodyMaxHeight?e.bodyMaxHeight:e.bodyMaxHeight+"px"}))),i=p(!1);return{closeMask:()=>{i.value&&t("update:visible",!e.visible),i.value=!1},clickLock:i,fullEnterClass:a,fullLeaveClass:l,dialogCoreWidth:n,dialogBodyMaxHeight:o}}}),ke={class:b(["u-dialog"])},Se={class:b(["u-dialog-core-header"])},Ce={class:b(["u-dialog-core-footer"])},_e=j("取消"),ze=j("确定");we.render=function(e,t,a,l,n,o){const i=L("IconClose"),s=L("u-button"),d=L("u-space");return u(),N(U,{to:"body"},[r("div",ke,[h(T,{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:M((()=>[I(r("div",{class:b(["u-dialog-mask"]),onClick:t[0]||(t[0]=(...t)=>e.closeMask&&e.closeMask(...t))},null,512),[[R,e.visible]])])),_:1}),h(T,{"enter-active-class":e.fullEnterClass,"leave-active-class":e.fullLeaveClass,onAfterEnter:t[4]||(t[4]=t=>e.clickLock=!0)},{default:M((()=>[I(r("div",{class:b(["u-dialog-core"]),style:y(e.dialogCoreWidth)},[r("div",Se,[r("div",null,O(e.title),1),r("div",{class:"u-dialog-core-header-icon",onClick:t[1]||(t[1]=t=>(e.$emit("close",t),e.closeMask(t)))},[f(e.$slots,"icon",{},(()=>[h(i)]))])]),r("div",{class:b(["u-dialog-core-body"]),style:y(e.dialogBodyMaxHeight)},[f(e.$slots,"default")],4),r("div",Ce,[f(e.$slots,"footer",{},(()=>[h(d,null,{default:M((()=>[h(s,{onClick:t[2]||(t[2]=t=>(e.$emit("cancel",t),e.closeMask(t)))},{default:M((()=>[_e])),_:1}),h(s,{deep:"",onClick:t[3]||(t[3]=t=>(e.$emit("confirm",t),e.closeMask(t)))},{default:M((()=>[ze])),_:1})])),_:1})]))])],4),[[R,e.visible]])])),_:3},8,["enter-active-class","leave-active-class"])])])},we.name="UDialog",we.install=e=>{e.component(we.name,we)};const Be={name:"BxBxsCheckCircle"},Le={width:"1em",height:"1em",viewBox:"0 0 24 24"},Ne=[(e=>(D("data-v-0c6c8866"),e=e(),$(),e))((()=>r("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm-1.999 14.413l-3.713-3.705L7.7 11.292l2.299 2.295l5.294-5.294l1.414 1.414l-6.706 6.706z",fill:"currentColor"},null,-1)))];Be.render=function(e,t,a,l,n,o){return u(),s("svg",Le,Ne)},Be.__scopeId="data-v-0c6c8866";const Me={name:"BxBxsXCircle"},Te={width:"1em",height:"1em",viewBox:"0 0 24 24"},Ue=[(e=>(D("data-v-6bdba3be"),e=e(),$(),e))((()=>r("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.207 12.793l-1.414 1.414L12 13.414l-2.793 2.793l-1.414-1.414L10.586 12L7.793 9.207l1.414-1.414L12 10.586l2.793-2.793l1.414 1.414L13.414 12l2.793 2.793z",fill:"currentColor"},null,-1)))];Me.render=function(e,t,a,l,n,o){return u(),s("svg",Te,Ue)},Me.__scopeId="data-v-6bdba3be";const Ie={name:"BxBxsErrorCircle"},Re={width:"1em",height:"1em",viewBox:"0 0 24 24"},Oe=[(e=>(D("data-v-dea6e4bc"),e=e(),$(),e))((()=>r("path",{d:"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z",fill:"currentColor"},null,-1)))];Ie.render=function(e,t,a,l,n,o){return u(),s("svg",Re,Oe)},Ie.__scopeId="data-v-dea6e4bc";const je={name:"BxBxsInfoCircle"},De={width:"1em",height:"1em",viewBox:"0 0 24 24"},$e=[(e=>(D("data-v-71f6b847"),e=e(),$(),e))((()=>r("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",fill:"currentColor"},null,-1)))];je.render=function(e,t,a,l,n,o){return u(),s("svg",De,$e)},je.__scopeId="data-v-71f6b847";const Ae={props:{text:{type:[String,Boolean,Number],default:""},offset:{type:Number},id:{type:String},icon:{type:[String,Object],default:"info"},duration:{type:Number,default:3e3}},setup(e){const t=e,a=p(!1);k((()=>{a.value=!0})),A((()=>{a.value=!1}),t.duration);const l=v((()=>"u-message-"+t.icon)),n=v((()=>({top:t.offset+"px"}))),o={success:Be,danger:Me,info:je,warning:Ie},i=v((()=>(console.log(t.icon,"props.icon"),"string"==typeof t.icon?o[t.icon]||"":t.icon)));return(t,o)=>(u(),N(T,{"enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__fadeOutUp",onBeforeLeave:o[0]||(o[0]=e=>t.$emit("close")),onAfterLeave:o[1]||(o[1]=e=>t.$emit("destroy"))},{default:M((()=>[I(r("div",{style:y(m(n)),class:"u-message-wrapper"},[r("div",{class:b(["u-message-core",m(l)])},[h(m(ne),{size:18,style:{marginRight:"5px"}},{default:M((()=>[(u(),N(F(m(i))))])),_:1}),j(" "+O(e.text),1)],2)],4),[[R,a.value]])])),_:1}))}},Fe=[];let He=1;const We=({text:e,duration:t,maxCount:a=1/0,icon:l="info"})=>{if(Fe.length+1>a)return;let n=0;const o="message_"+He++;Fe.forEach((({vm:e})=>{n+=e.el.offsetHeight+16})),n+=16;const i=document.createElement("div"),u=h(Ae,{offset:n,text:e,id:o,icon:l,duration:t,onClose:()=>{s(o)},onDestroy:()=>{r()}},null);H(u,i),Fe.push({vm:u});const s=e=>{const t=Fe.findIndex((({vm:t})=>e===t.component.props.id));if(console.log(t,"id",Fe),-1==t)return;const a=Fe[t].vm.el.offsetHeight;Fe.splice(t,1);const l=Fe.length;if(!(l<1))for(let n=t;n<l;n++){const e=parseInt(Fe[n].vm.el.style.top,10)-a-16;Fe[n].vm.component.props.offset=e}},r=()=>{H(null,i)};document.body.appendChild(i.firstElementChild)};["success","danger","info","warning","warning"].forEach((e=>{We[e]=u=>{var s;"string"==typeof u&&(u={text:u}),We((s=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&i(e,a,t[a]);return e})({},u),t(s,a({icon:e}))))}}));const Ee={name:"MdiLightChevronDown"},Pe={width:"1em",height:"1em",viewBox:"0 0 24 24"},Ge=[r("path",{d:"M5.843 9.593L11.5 15.25l5.657-5.657l-.707-.707l-4.95 4.95l-4.95-4.95l-.707.707z",fill:"currentColor"},null,-1)];Ee.render=function(e,t,a,l,n,o){return u(),s("svg",Pe,Ge)};const Ve=x({name:"select",components:{UIcon:ne,CDown:Ee},props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},placeholder:{type:[String,Number,Boolean],default:"请选择"},value:{type:[String,Number,Boolean,Object]}},emits:["update:value"],setup(e,{emit:t}){const a=p(null),l=p(!1),n=()=>{l.value=!1};W(a,(e=>{n()}));const o=w({left:"50%",top:"50%",width:"100px"});k((()=>{o.left=a.value.offsetLeft+"px",o.top=a.value.offsetTop+a.value.offsetHeight+2+"px",o.width=a.value.offsetWidth+"px"}));const i=p(e.placeholder),u=v((()=>i.value==e.placeholder));B("selectContext",w({onSelectChange:(e,a)=>{t("update:value",e),i.value=a},props:e}));return{selectSize:v((()=>"u-select-size-"+e.size)),selectRef:a,selectWraperStyle:o,toggleState:e=>{console.log(e),l.value=!l.value},showState:l,close:n,selectLabel:i,isChecked:u}}});Ve.render=function(e,t,a,l,n,o){const i=L("CDown"),d=L("u-icon");return u(),s("div",{ref:"selectRef",onClick:t[0]||(t[0]=(...t)=>e.toggleState&&e.toggleState(...t)),class:b(["u-select",{"u-select-checked":e.showState},e.selectSize])},[r("div",{class:b(["u-select-text",{"u-select-text-checked":e.isChecked}])},O(e.selectLabel),3),r("div",{class:b(["u-select-icon",{"u-select-icon-checked":e.showState}])},[h(d,{size:25,color:"#bbb"},{default:M((()=>[h(i)])),_:1})],2),(u(),N(U,{to:"body"},[h(T,{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:M((()=>[I(r("div",{class:b(["u-select-wrapper"]),style:y(e.selectWraperStyle)},[f(e.$slots,"default")],4),[[R,e.showState]])])),_:3})]))],2)};const qe=x({name:"selectOption",props:{value:{type:[String,Number,Boolean,Object]},label:{type:[String,Number,Boolean,Object]},display:{type:Boolean,default:!1}},setup(e,{slots:t}){const a=v((()=>"u-select-size-"+l.size)),l=z("selectContext");l.props.value==e.value&&l.onSelectChange(e.value,e.label);const n=t=>{l.onSelectChange(e.value,e.label)};return()=>h("div",{onClick:n,class:["u-select-option",a.value]},[h("div",null,[e.label]),h("div",null,[e.display&&e.value])])}});Ve.name="USelect",qe.name="USelectOption",Ve.install=e=>{e.component(Ve.name,Ve)},qe.install=e=>{e.component(qe.name,qe)};const Xe=x({name:"tableTd",props:{content:{type:[String,Number,Boolean,Object]},align:{type:[String],default:"left"},fixed:{type:[String],default:""},arrivedState:{type:Object}},setup(e,{slots:t}){const a=v((()=>"left"==e.fixed?e.arrivedState.left?"":"u-table-td-fixed-left":"right"==e.fixed?e.arrivedState.right?"":"u-table-td-fixed-right":void 0));return{tdStyle:v((()=>({"text-align":e.align}))),fixDirection:a}}});Xe.render=function(e,t,a,l,n,o){return u(),s("td",{style:y(e.tdStyle),class:b(["u-table-td",e.fixDirection,{"u-table-td-fixed":e.fixed}])},[f(e.$slots,"default",{},(()=>[j(O(e.content),1)]))],6)};const Je=x({name:"table",components:{TableTd:Xe},props:{data:{type:Array,default:[]},column:{type:Array,default:[]}},setup(e,{slots:t}){let a=p(null);const{arrivedState:l}=E(a);return{tableRef:a,arrivedState:l}}}),Ke={class:"u-table",ref:"tableRef"},Qe={style:{width:"100%"}},Ye={class:"u-table-head"},Ze={class:"u-table-head-tr"},et={class:"u-table-body"};Je.render=function(e,t,a,l,n,o){const i=L("table-td");return u(),s("div",Ke,[r("table",Qe,[r("colgroup",null,[(u(!0),s(P,null,G(e.column,(e=>(u(),s("col",{key:e.key,style:y({minWidth:e.width})},null,4)))),128))]),r("thead",Ye,[r("tr",Ze,[(u(!0),s(P,null,G(e.column,((t,a)=>(u(),N(i,{key:a,align:t.align,fixed:t.fixed,arrivedState:e.arrivedState},{default:M((()=>[j(O(t.title),1)])),_:2},1032,["align","fixed","arrivedState"])))),128))])]),r("tbody",et,[(u(!0),s(P,null,G(e.data,((t,a)=>(u(),s("tr",{class:"u-table-body-tr",key:a},[(u(!0),s(P,null,G(e.column,(a=>(u(),N(i,{key:a.key,align:a.align,fixed:a.fixed,content:t[a.key],arrivedState:e.arrivedState},{default:M((()=>[f(e.$slots,a.key,{text:t[a.key]})])),_:2},1032,["align","fixed","content","arrivedState"])))),128))])))),128))])])],512)},Je.name="UTable",Je.install=e=>{e.component(Je.name,Je)};const tt=x({name:"pageBox",props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},isChecked:{type:Boolean},boxType:{type:String},changeCurrent:{type:Function},no:{type:Number}},setup(e,{slots:t}){const a=v((()=>"u-pagination-size-"+e.size)),l=v((()=>e.isChecked?"u-pagination-box-checked":"")),{paginationProps:n,changeCurrent:o,pageNum:i}=z("current",{}),u=v((()=>"leftStep"==e.boxType?1==n.current?"u-pagination-box-disabled":"":"rightStep"==e.boxType?n.current==i?"u-pagination-box-disabled":"":void 0)),s=()=>{if("num"==e.boxType)u.value=!1,console.log(u.value),o(e.no);else if("leftStep"==e.boxType){if(1==n.current)return;o(n.current-1)}else if("rightStep"==e.boxType){if(n.current==i)return void(u.value=!0);o(n.current+1)}else if("leftMore"==e.boxType){if(1==n.current)return void(u.value=!0);o(n.current-5)}else if("rightMore"==e.boxType){if(n.current==i)return void(u.value=!0);o(n.current+5)}};return()=>{var n;return h("div",{class:["u-pagination-box",a.value,l.value,u.value],onClick:s},[e.no?e.no:null==(n=t.default)?void 0:n.call(t)])}}}),at={name:"MdiLightChevronDoubleLeft"},lt={width:"1em",height:"1em",viewBox:"0 0 24 24"},nt=[r("path",{d:"M16.407 18.157L10.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707zm-4 0L6.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707z",fill:"currentColor"},null,-1)];at.render=function(e,t,a,l,n,o){return u(),s("svg",lt,nt)};const ot={name:"MdiLightChevronLeft"},it={width:"1em",height:"1em",viewBox:"0 0 24 24"},ut=[r("path",{d:"M14.407 18.157L8.75 12.5l5.657-5.657l.707.707l-4.95 4.95l4.95 4.95l-.707.707z",fill:"currentColor"},null,-1)];ot.render=function(e,t,a,l,n,o){return u(),s("svg",it,ut)};const st={name:"MdiLightChevronDoubleRight"},rt={width:"1em",height:"1em",viewBox:"0 0 24 24"},dt=[r("path",{d:"M6.593 6.843L12.25 12.5l-5.657 5.657l-.707-.707l4.95-4.95l-4.95-4.95l.707-.707zm4 0L16.25 12.5l-5.657 5.657l-.707-.707l4.95-4.95l-4.95-4.95l.707-.707z",fill:"currentColor"},null,-1)];st.render=function(e,t,a,l,n,o){return u(),s("svg",rt,dt)};const ct={name:"MdiLightChevronRight"},pt={width:"1em",height:"1em",viewBox:"0 0 24 24"},vt=[r("path",{d:"M8.593 18.157L14.25 12.5L8.593 6.843l-.707.707l4.95 4.95l-4.95 4.95l.707.707z",fill:"currentColor"},null,-1)];ct.render=function(e,t,a,l,n,o){return u(),s("svg",pt,vt)};const mt={name:"MdiLightDotsHorizontal"},ft={width:"1em",height:"1em",viewBox:"0 0 24 24"},ht=[r("path",{d:"M16 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm-6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm-6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"},null,-1)];mt.render=function(e,t,a,l,n,o){return u(),s("svg",ft,ht)};const gt=x({name:"pagination",props:{current:{type:Number,default:0},total:{type:Number,default:0},count:{type:Number}},emits:["update:current","change"],setup(e,{emit:t}){const a=v((()=>Math.ceil(e.total/10))),l=v((()=>{if(!e.count)return new Array(a.value).fill().map(((e,t)=>t+1));let t=[],l=e.current-e.count;l=Math.max(1,l);let n=e.current+e.count;n=Math.min(a.value,n);for(let e=l;e<=n;e++)t.push(e);return t}));console.log(l.value),v((()=>{}));B("current",w({paginationProps:e,pageNum:a.value,changeCurrent:a=>{a!=e.current&&(t("update:current",a),t("change",a))}}));const n=h(tt,{boxType:"leftStep"},{default:()=>[h(ne,null,{default:()=>[h(ot,null,null)]})]}),o=e=>h(tt,{boxType:"rightMore"},{default:()=>[h(ne,null,{default:()=>[h(e?st:mt,null,null)]})]}),i=h(tt,{boxType:"rightStep"},{default:()=>[h(ne,null,{default:()=>[h(ct,null,null)]})]}),u=p(null),s=p(null),r=V(u),d=V(s);return()=>{return h("div",{class:"u-pagination"},[h(n,null,null),e.current-e.count>=2&&h(tt,{boxType:"num",no:1},null),e.current-e.count>=3&&h("div",{ref:u},[(t=r.value,h(tt,{boxType:"leftMore"},{default:()=>[h(ne,null,{default:()=>[h(t?at:mt,null,null)]})]}))]),l.value.map(((t,a)=>h(tt,{boxType:"num",isChecked:e.current==t,no:t},null))),e.current+e.count<a.value-1&&h("div",{ref:s},[o(d.value)]),e.current+e.count<a.value&&h(tt,{boxType:"num",no:a.value},null),h(i,null,null)]);var t}}});gt.name="UPagination",gt.install=e=>{e.component(gt.name,gt)};const bt=x({name:"slider",props:{value:{type:[Number,Array]},range:{type:Boolean,default:!1},max:{type:Number,default:100},min:{type:Number,default:0}},emits:["update:value"],setup(e,{slots:t,emit:a}){const l=p(null),{elementWidth:n,elementX:o}=q(l),i=p(null),{pressed:u}=X({target:i}),s=p(null),{pressed:r}=X({target:s}),d=w({left:0}),c=w({left:0,display:e.range?"block":"none"}),v=w({left:0,"max-width":0}),m=w({one:0,two:0});k((()=>{const{width:t}=l.value.getBoundingClientRect(),a=a=>1/(e.max-e.min)*a*t;e.range?(m.one=a(e.value[0]),m.two=a(e.value[1]),d.left=a(e.value[0])+"px",c.left=a(e.value[1])+"px"):(m.one=a(e.value),d.left=a(e.value)+"px")}));const f=t=>Math.ceil(t/n.value*(e.max-e.min))+e.min,g=t=>Math.floor(t/n.value*(e.max-e.min))+e.min;return J([u,r,o],(([t,l])=>{if(t&&o.value>=0&&o.value<=n.value){if(e.range){const e=m.one<n.value/2?g(m.one):f(m.one),t=m.two<n.value/2?g(m.two):f(m.two);a("update:value",e>t?[t,e]:[e,t])}else m.one<n.value/2?a("update:value",g(m.one)):a("update:value",f(m.one));m.one=o.value,d.left=o.value-7+"px"}if(l&&o.value>=0&&o.value<=n.value)if(m.two=o.value,c.left=o.value-7+"px",e.range){const e=m.one<n.value/2?g(m.one):f(m.one),t=m.two<n.value/2?g(m.two):f(m.two);a("update:value",e>t?[t,e]:[e,t])}else m.one<n.value/2?a("update:value",g(m.one)):a("update:value",f(m.one));m.one>m.two?(v.left=m.two+"px",v["max-width"]=m.one-m.two+"px"):(v.left=m.one+"px",v["max-width"]=m.two-m.one+"px")})),()=>h("div",{class:"u-slider",ref:l},[h("div",{class:"u-slider-bg"},null),h("div",{class:"u-slider-track",style:v},null),h("div",{ref:i,style:d,class:"u-slider-point u-slider-point-1"},null),h("div",{ref:s,style:c,class:"u-slider-point u-slider-point-2"},null)])}});bt.name="USlider",bt.install=e=>{e.component(bt.name,bt)};const yt={name:"BytesizeMinus"},xt={width:"1em",height:"1em",viewBox:"0 0 32 32"},wt=[r("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},[r("path",{d:"M2 16h28"})],-1)];yt.render=function(e,t,a,l,n,o){return u(),s("svg",xt,wt)};const kt={name:"BytesizePlus"},St={width:"1em",height:"1em",viewBox:"0 0 32 32"},Ct=[r("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},[r("path",{d:"M16 2v28M2 16h28"})],-1)];kt.render=function(e,t,a,l,n,o){return u(),s("svg",St,Ct)};const _t=x({name:"inputNumber",props:{size:{type:String,default:"medium"},value:{type:Number,default:0},max:{type:Number},min:{type:Number,default:0},step:{type:Number,default:1}},emits:["update:value","change","input","increase","decrease"],setup(e,{slots:t,emit:a}){const l=v((()=>"u-input-number-size-"+e.size)),n=t=>(null!=e.min&&t<e.min&&(t=e.min),e.max&&t>e.max&&(t=e.max),t),o=e=>{let t=Number.parseInt(e)||0;t=n(t),a("change",t),a("update:value",t)},i=()=>{let t=Number.parseInt(e.value)-e.step;t=n(t),a("decrease",t),a("update:value",t)},u=()=>{let t=Number.parseInt(e.value)+e.step;t=n(t),a("increase",t),a("update:value",t)};return()=>h("div",{class:["u-input-number",l.value]},[h("span",{onClick:i,class:"u-input-number-box u-input-number-decrease"},[h(yt,null,null)]),h(ue,{size:e.size,value:e.value,"onUpdate:value":o},null),h("span",{onClick:u,class:"u-input-number-box u-input-number-increase"},[h(kt,null,null)])])}});_t.name="UInputNumber",_t.install=e=>{e.component(_t.name,_t)};const zt=x({name:"tooltip",props:{placement:{type:String,default:"top",validator:e=>["top","left","bottom","right"].includes(e)},color:{type:String,default:"rgba(0,0,0,.8)"}},setup(e,{slots:t}){const a=p(null),{top:l,left:n,width:o,height:i}=function(e){const t=p(),a=p(),l=p(),n=p();return k((()=>{const o=e.value;a.value=o.offsetTop,t.value=o.offsetLeft,l.value=o.offsetWidth,n.value=o.offsetHeight})),{top:a,left:t,width:l,height:n}}(a),{isHovered:u}=function(e){const t=p();return k((()=>{const a=e.value;a.addEventListener("mouseenter",(()=>{t.value=!0})),a.addEventListener("mouseleave",(()=>{t.value=!1}))})),{isHovered:t}}(a);let s=p();const{width:r,height:d}=K(s),c=v((()=>"u-tooltip-arrow-"+e.placement)),m=v((()=>{const t=p(),a=p();switch(e.placement){case"top":t.value=n.value-r.value/2+o.value/2,a.value=l.value-d.value-15;break;case"right":t.value=n.value+o.value+15,a.value=l.value-d.value/2+i.value/2;break;case"bottom":t.value=n.value-r.value/2+o.value/2,a.value=l.value+i.value+15;break;case"left":t.value=n.value-r.value-15,a.value=l.value-d.value/2+i.value/2}return{top:a.value-4+"px",left:t.value-4+"px","--bgColor":e.color}})),f=v((()=>"top"==e.placement?"animate__animated animate__fadeInDown":"right"==e.placement?"animate__animated animate__fadeInRight":"bottom"==e.placement?"animate__animated animate__fadeInUp":"left"==e.placement?"animate__animated animate__fadeInLeft":void 0));return()=>{var e,l;return h("div",{ref:a},[(l=null==(e=t.default)?void 0:e.call(t),"string"==typeof l[0].children?h("span",null,[l]):l),h(U,{to:"body"},{default:()=>[h(T,{"enter-active-class":f.value,"leave-active-class":"animate__animated animate__fadeOut"},{default:()=>{var e;return[u.value&&h("div",{ref:s,class:["u-tooltip",c.value],style:m.value},[null==(e=t.title)?void 0:e.call(t)])]}})]})])}}});zt.name="UTooltip",zt.install=e=>{e.component(zt.name,zt)};const Bt=x({name:"badge",props:{value:{type:[String,Number]},color:{type:String,default:"#FF4D4F"},max:{type:Number},min:{type:Number,default:0},hideLowerLimit:{type:Boolean,default:!1},dot:{type:Boolean,default:!1}},setup(e,{slots:t}){const a=v((()=>({"background-color":e.color,display:e.value<=e.min&&e.hideLowerLimit?"none":"inline-flex"}))),l=v((()=>e.value>e.max?e.max+"+":e.value<e.min?e.min:e.value)),n=v((()=>e.dot?"u-badge-dot":"u-badge-round"));return()=>{var o;return h("div",{class:["u-badge"]},[null==(o=t.default)?void 0:o.call(t),h("sup",{class:["u-badge-sup",n.value],style:a.value},[e.dot||l.value])])}}});Bt.name="UBadge",Bt.install=e=>{e.component(Bt.name,Bt)};const Lt=x({name:"loadingBar",props:{color:{type:String,default:""}},setup(e,{slots:t,expose:a}){const{width:l,isShow:n,endWidth:o}=(e=>{const t=p("0%"),a=p(!0);let l;const n=e=>{let a=Number.parseFloat(t.value);a<40?t.value=a+.4+"%":a<50?t.value=a+.3+"%":a<60?t.value=a+.2+"%":a<90&&(t.value=a+.1+"%"),a>90?cancelAnimationFrame(l):l=window.requestAnimationFrame(n)};let o;const i=()=>{let e=Number.parseFloat(t.value);if(t.value=e+o+"%",e>100)return a.value=!1,t.value="100%",void cancelAnimationFrame(l);l=window.requestAnimationFrame(i)};return l=window.requestAnimationFrame(n),{width:t,isShow:a,endWidth:()=>{o=(100-Number.parseFloat(t.value))/(300/16.6),cancelAnimationFrame(l),window.requestAnimationFrame(i)}}})(),i=v((()=>({width:l.value,"background-color":e.color})));return a({endWidth:o}),()=>h(T,{"enter-active-class":"animate__animated animate__fadeInDown","leave-active-class":"animate__animated animate__fadeOutUp"},{default:()=>[n.value&&h("div",{class:"u-loading-bar"},[h("div",{class:"u-loading-bar-inner",style:i.value},null)])]})}}),Nt={name:"spinLogo"},Mt={width:"1em",height:"1em",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},Tt=[r("g",null,[r("animateTransform",{attributeName:"transform",type:"rotate",values:"0 100 100;270 100 100",begin:"0s",dur:"1.6s",fill:"freeze",repeatCount:"indefinite"}),r("circle",{fill:"none",stroke:"currentColor","stroke-width":"16","stroke-linecap":"round",cx:"100",cy:"100",r:"92","stroke-dasharray":"567","stroke-dashoffset":"1848"},[r("animateTransform",{attributeName:"transform",type:"rotate",values:"0 100 100;135 100 100;450 100 100",begin:"0s",dur:"1.6s",fill:"freeze",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-dashoffset",values:"567;142;567",begin:"0s",dur:"1.6s",fill:"freeze",repeatCount:"indefinite"})])],-1)];Nt.render=function(e,t,a,l,n,o){return u(),s("svg",Mt,Tt)};const Ut=x({name:"spin",components:{UIcon:ne,spinLogo:Nt},props:{size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},color:{type:String,default:"#13C2C2"}},setup:(e,{slots:t})=>({spinSize:v((()=>"u-spin-size-"+e.size))})}),It={class:"u-spin"};Ut.render=function(e,t,a,l,n,o){const i=L("spinLogo"),r=L("u-icon");return u(),s("div",It,[h(r,{color:e.color,class:b([e.spinSize,{"u-spin-rotate":e.$slots.default}])},{default:M((()=>[f(e.$slots,"default",{},(()=>[h(i)]))])),_:3},8,["color","class"])])},Ut.name="USpin",Ut.install=e=>{e.component(Ut.name,Ut)};const Rt=x({name:"transit",props:{duration:{type:Number,default:500}},setup(e,{slots:t}){var a,l,n;const o=w({value:Number(null==(n=null==(l=null==(a=t.default)?void 0:a.call(t))?void 0:l[0])?void 0:n.children)});return J((()=>{var e,a,l;return null==(l=null==(a=null==(e=t.default)?void 0:e.call(t))?void 0:a[0])?void 0:l.children}),((t,a)=>{console.log(t,a),Q(o,{duration:e.duration,key:"value",value:Number(t)})})),()=>h(P,null,[o.value.toFixed()])}});Rt.name="UTransit",Rt.install=e=>{e.component(Rt.name,Rt)};const Ot={name:"RadixIconsTriangleDown"},jt={width:"1em",height:"1em",viewBox:"0 0 15 15"},Dt=[r("g",{fill:"none"},[r("path",{d:"M4 6h7l-3.5 4.5L4 6z",fill:"currentColor"})],-1)];Ot.render=function(e,t,a,l,n,o){return u(),s("svg",jt,Dt)};const $t=x({name:"treeNode",props:{text:{type:String}},emits:["change"],setup(e,{emit:t}){const a=p(!1),l=v((()=>a.value?"u-tree-node-switcher-close":"")),n=()=>{t("change",a.value),a.value=!a.value};return()=>h("li",{class:"u-tree-node"},[h(Ot,{class:["u-tree-node-switcher",l.value],onClick:n},null),h("span",{class:"u-tree-node-text"},[e.text])])}}),At=x({name:"treeContent",props:{data:{type:Object}},emits:["change"],setup(e,{emit:t}){const a=p(!1),l=v((()=>a.value?"u-tree-hidden":"")),n=()=>{a.value=!a.value};return()=>h(P,null,[h($t,{text:e.data.title,onChange:n},null),e.data.children&&h(Ft,{data:e.data.children,class:[l.value]},null)])}}),Ft=x({name:"tree",props:{data:{type:Array}},setup:(e,{slots:t})=>()=>h("ul",{class:"u-tree"},[e.data.map((e=>h(At,{data:e},null)))])});Ft.name="UTree",Ft.install=e=>{e.component(Ft.name,Ft)};export{he as S,Ft as T,te as _,le as a,Bt as b,oe as c,_t as d,me as e,fe as f,ie as g,we as h,ne as i,de as j,ue as k,Lt as l,We as m,Je as n,se as o,gt as p,Ve as q,re as r,ge as s,qe as t,bt as u,Ut as v,zt as w,Rt as x};
