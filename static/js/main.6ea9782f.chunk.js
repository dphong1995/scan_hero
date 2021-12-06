(this["webpackJsonpscan-hero-react"]=this["webpackJsonpscan-hero-react"]||[]).push([[0],{152:function(e,r,t){},229:function(e,r,t){"use strict";t.r(r);var n=t(0),c=t.n(n),a=t(37),i=t.n(a),o=(t(152),t(121)),s=t.n(o),u=t(124),l=t(136),m=t(125),h=(t(153),t(233)),p=t(232),d=t(54),j=t(142),b=t(234),f=t(141),O=t(235),x=t(90),g=t(236),v=t(29),P=function(e){return"https://market.heroesempires.com/market/".concat(e)},k=function(e){var r=e.scanHeroParams,t=e.onRemoveClick,c=r.heroPrice,a=r.interval,i=r.heroName,o=Object(n.useState)([]),j=Object(m.a)(o,2),b=j[0],f=j[1],O=Object(n.useRef)(),k=Object(n.useCallback)(Object(l.a)(s.a.mark((function e(){var r,t,n,a,o,l,m,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://marketplace-api.heroesempires.com/sale-items?class&desc=false&listedOnMarket=true&minPrice&orderBy=price&page=1&race&search=".concat(i,"&size=21&tier&maxPrice=").concat(c),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache",pragma:"no-cache","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","sec-gpc":"1"},referrer:"https://market.heroesempires.com/",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors",credentials:"omit"});case 2:return r=e.sent,e.next=5,r.json();case 5:if(t=e.sent,n=t.data.items,a=n[0],n.forEach((function(e){var r=e.sale.price;(!a||r<a.sale.price)&&(a=e)})),a&&!(a.sale.price>c)){e.next=11;break}return e.abrupt("return");case 11:if(l=(o=a).id,m=o.name,h=o.image,p=o.sale.price,!Object(x.find)(b,["id",l])){e.next=15;break}return e.abrupt("return");case 15:new Notification("ScanHero",{image:h,icon:h,body:"".concat(m,": ").concat(p)}).onclick=function(){window.open(P(l))},f(Object(x.uniqBy)([].concat(Object(u.a)(b),[a]),"id"));case 18:case"end":return e.stop()}}),e)}))),[b,f,i,c]),y=Object(n.useMemo)((function(){return[{key:"image",dataIndex:"image",title:"Image",width:100,render:function(e){return Object(v.jsx)(h.a,{width:100,src:e})}},{key:"id",dataIndex:"id",title:"ID",render:function(e,r){var t=r.name;return Object(v.jsx)("a",{target:"_blank",href:P(e),rel:"noreferrer",children:t})}},{key:"price",dataIndex:["sale","price"],title:"Price"}]}),[]);return Object(n.useEffect)((function(){return O.current&&clearInterval(O.current),O.current=window.setInterval(k,a),function(){clearInterval(O.current)}}),[k,a]),Object(v.jsx)(p.a,{rowKey:"id",title:function(){return Object(v.jsxs)("strong",{children:[i,": ",c," ",Object(v.jsx)(d.a,{danger:!0,onClick:t,type:"primary",shape:"circle",icon:Object(v.jsx)(g.a,{})})]})},columns:y,dataSource:b})};var y=function(){var e=Object(n.useState)([]),r=Object(m.a)(e,2),t=r[0],c=r[1];return Object(n.useEffect)((function(){"granted"!==Notification.permission&&Notification.requestPermission()}),[]),Object(v.jsxs)(b.a,{style:{paddingTop:20},name:"scanForm",labelCol:{span:8},wrapperCol:{span:8},initialValues:{heroName:"Tusk",heroPrice:240,interval:5e3},onFinish:function(e){!t.find((function(r){return r.heroPrice===e.heroPrice&&r.heroName===e.heroName}))?c([].concat(Object(u.a)(t),[e])):j.a.error({message:"Existing"})},autoComplete:"off",children:[Object(v.jsx)(b.a.Item,{label:"Hero Name",name:"heroName",rules:[{required:!0,message:"Please input hero name!"}],children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(b.a.Item,{label:"Hero Price",name:"heroPrice",rules:[{required:!0,message:"Please input hero price!"}],children:Object(v.jsx)(O.a,{min:1})}),Object(v.jsx)(b.a.Item,{label:"Set Interval",name:"interval",rules:[{required:!0,message:"Please input interval!"}],children:Object(v.jsx)(O.a,{min:2e3})}),Object(v.jsx)(b.a.Item,{wrapperCol:{offset:8,span:16},children:Object(v.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})}),t.map((function(e){return Object(v.jsx)(k,{scanHeroParams:e,onRemoveClick:function(){var r=Object(x.cloneDeep)(t);Object(x.remove)(r,(function(r){return r.heroName===e.heroName&&r.heroPrice===e.heroPrice})),c(r)}},"".concat(e.heroName,"_").concat(e.heroPrice))}))]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,237)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,a=r.getLCP,i=r.getTTFB;t(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),w()}},[[229,1,2]]]);
//# sourceMappingURL=main.6ea9782f.chunk.js.map