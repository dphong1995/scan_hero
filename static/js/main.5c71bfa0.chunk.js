(this["webpackJsonpscan-hero-react"]=this["webpackJsonpscan-hero-react"]||[]).push([[0],{156:function(e,r,t){},247:function(e,r,t){"use strict";t.r(r);var n,c=t(0),a=t.n(c),i=t(37),o=t.n(i),s=(t(156),t(124)),u=t.n(s),l=t(127),m=t(139),p=t(116),h=(t(157),t(251)),j=t(250),d=t(54),b=t(146),f=t(252),O=t(145),x=t(253),g=t(91),v=t(82),P=t(254),k=t(140),y=t.n(k),w=t(26);!function(e){e.Rare="Rare",e["Rare+"]="Rare *",e.Epic="Epic",e["Epic+"]="Epic *"}(n||(n={}));var I=function(e){return"https://market.heroesempires.com/market/".concat(e)},N=function(e){var r=e.scanHeroParams,t=e.onRemoveClick,n=r.heroPrice,a=r.interval,i=r.heroName,o=r.tier,s=Object(c.useState)([]),b=Object(p.a)(s,2),f=b[0],O=b[1],x=Object(c.useRef)(),g=Object(c.useCallback)(Object(m.a)(u.a.mark((function e(){var r,t,c,a,s,m,p,h,j,d,b,x;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.a.stringify({tier:o,desc:!1,listedOnMarket:!0,orderBy:"price",page:1,search:i,size:5,maxPrice:n}),e.next=3,fetch("https://marketplace-api.heroesempires.com/sale-items?".concat(r),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache",pragma:"no-cache","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","sec-gpc":"1"},referrer:"https://market.heroesempires.com/",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors",credentials:"omit"});case 3:return t=e.sent,e.next=6,t.json();case 6:if(c=e.sent,a=c.data.items,s=a[0],a.forEach((function(e){var r=e.sale.price;(!s||r<s.sale.price)&&(s=e)})),s&&!(s.sale.price>n)){e.next=12;break}return e.abrupt("return");case 12:if(p=(m=s).id,h=m.name,j=m.image,d=m.sale.price,!Object(v.find)(f,["id",p])){e.next=16;break}return e.abrupt("return");case 16:return b=new Notification("ScanHero",{image:j,icon:j,body:"".concat(h," (").concat(o,"): ").concat(d)}),e.next=19,new Audio("".concat("/scan_hero","/Messenger.mp3")).play();case 19:x=setTimeout((function(){b.close()}),5e3),b.onclick=function(){b.close(),clearTimeout(x),window.open(I(p))},O(Object(v.uniqBy)([s].concat(Object(l.a)(f)),"id"));case 22:case"end":return e.stop()}}),e)}))),[i,o,n,f]),k=Object(c.useMemo)((function(){return[{key:"image",dataIndex:"image",title:"Image",width:100,render:function(e){return Object(w.jsx)(h.a,{width:100,src:e})}},{key:"id",dataIndex:"id",title:"ID",render:function(e,r){var t=r.name;return Object(w.jsxs)("a",{target:"_blank",href:I(e),rel:"noreferrer",children:[t," (",o,")"]})}},{key:"price",dataIndex:["sale","price"],title:"Price"}]}),[o]);return Object(c.useEffect)((function(){return x.current&&clearInterval(x.current),x.current=window.setInterval(g,a),function(){clearInterval(x.current)}}),[g,a]),Object(w.jsx)(j.a,{rowKey:"id",title:function(){return Object(w.jsxs)("strong",{children:[i," (",o,"): ",n," ",Object(w.jsx)(d.a,{danger:!0,onClick:t,type:"primary",shape:"circle",icon:Object(w.jsx)(P.a,{})})]})},columns:k,dataSource:f})};var C=function(){var e=Object(c.useState)([]),r=Object(p.a)(e,2),t=r[0],a=r[1];return Object(c.useEffect)((function(){"granted"!==Notification.permission&&Notification.requestPermission()}),[]),Object(w.jsxs)(f.a,{style:{paddingTop:20},name:"scanForm",labelCol:{span:8},wrapperCol:{span:8},initialValues:{heroName:"Tusk",heroPrice:240,interval:1e4,tier:n.Rare},onFinish:function(e){!t.find((function(r){return r.heroPrice===e.heroPrice&&r.heroName===e.heroName&&r.tier===e.tier}))?a([].concat(Object(l.a)(t),[e])):b.a.error({message:"Existing"})},autoComplete:"off",children:[Object(w.jsx)(f.a.Item,{label:"Hero Name",name:"heroName",rules:[{required:!0,message:"Please input hero name!"}],children:Object(w.jsx)(O.a,{})}),Object(w.jsx)(f.a.Item,{label:"Hero Price",name:"heroPrice",rules:[{required:!0,message:"Please input hero price!"}],children:Object(w.jsx)(x.a,{min:1})}),Object(w.jsx)(f.a.Item,{label:"Hero Tier",name:"tier",rules:[{required:!0,message:"Please select hero tier!"}],children:Object(w.jsx)(g.a,{children:Object(v.toPairs)(n).map((function(e){var r=Object(p.a)(e,2),t=r[0],n=r[1];return Object(w.jsx)(g.a.Option,{value:t,children:n},t)}))})}),Object(w.jsx)(f.a.Item,{label:"Set Interval",name:"interval",rules:[{required:!0,message:"Please input interval!"}],children:Object(w.jsx)(x.a,{min:5e3})}),Object(w.jsx)(f.a.Item,{wrapperCol:{offset:8,span:16},children:Object(w.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})}),t.map((function(e){return Object(w.jsx)(N,{scanHeroParams:e,onRemoveClick:function(){var r=Object(v.cloneDeep)(t);Object(v.remove)(r,(function(r){return r.heroName===e.heroName&&r.heroPrice===e.heroPrice&&r.tier===e.tier})),a(r)}},"".concat(e.heroName,"_").concat(e.heroPrice,"_").concat(e.tier))}))]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,255)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,a=r.getLCP,i=r.getTTFB;t(e),n(e),c(e),a(e),i(e)}))};o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(C,{})}),document.getElementById("root")),E()}},[[247,1,2]]]);
//# sourceMappingURL=main.5c71bfa0.chunk.js.map