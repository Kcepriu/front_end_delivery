"use strict";(self.webpackChunkfront_end_delivery=self.webpackChunkfront_end_delivery||[]).push([[170],{1170:function(e,r,n){n.r(r),n.d(r,{default:function(){return D}});var t=n(7659),a="Order_WrapPage__ReDjj",s="Order_WrapColumn__aRz-W",u="Order_WrapRight__mwh8I",c="Order_WrapMap__ONt0X",i="Order_WrapOrderContent__k65wX",o="Order_ListGoods__L-rDx",d="Order_Basement__nonVl",l="Order_TotalPrice__TfG7D",p="Order_ButtonCancel__XhZ01",h=n(4165),m=n(5861),f="FormAdressOrder_Form__db-K8",x="FormAdressOrder_WrapInput__GrXv-",_="FormAdressOrder_Label__31LH7",v="FormAdressOrder_Input__cAbv4",b="FormAdressOrder_ButtonSubmit__yH+KG",g=n(5371),j=n(184),Z=function(){var e=(0,t.A)(),r=e.order,n=e.setFiledToOrder,a=e.clearOrder,s=function(e){n(e.target.id,e.target.value)},u=function(){var e=(0,m.Z)((0,h.Z)().mark((function e(n){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,(0,g.LV)(r);case 4:e.sent&&a(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsxs)("form",{className:f,onSubmit:u,children:[(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{htmlFor:"adress",className:_,children:"Address:"}),(0,j.jsx)("input",{className:v,id:"adress",type:"text",value:r.adress,onChange:s,placeholder:"Input address",required:!0})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{htmlFor:"email",className:_,children:"Email:"}),(0,j.jsx)("input",{className:v,id:"email",type:"email",value:r.email,onChange:s,placeholder:"Input email",required:!0})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{htmlFor:"phone",className:_,children:"Phone:"}),(0,j.jsx)("input",{className:v,id:"phone",pattern:"^[+]?\\d{1,4}[-.\\s]?(\\d{1,3})?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",type:"tel",value:r.phone,onChange:s,placeholder:"Input phone",required:!0})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{htmlFor:"name",className:_,children:"Name:"}),(0,j.jsx)("input",{className:v,id:"name",type:"text",value:r.name,onChange:s,placeholder:"Input Name",required:!0})]}),(0,j.jsx)("button",{type:"submit",className:b,children:"Submit"})]})},N="Map_WrapMap__Ew0Kb",k=function(){return(0,j.jsx)("div",{className:N,children:(0,j.jsx)("p",{children:"Map"})})},O=n(1413),w=n(9439),C=n(2791),y="GoodsCartOrder_WrapCart__rVgyj",A="GoodsCartOrder_WrapImg__p+M3h",G="GoodsCartOrder_Image__3jNnP",L="GoodsCartOrder_WrapContent__nPGng",W="GoodsCartOrder_WrapTitle__tRq+4",F="GoodsCartOrder_BtnDelete__hhAdA",I="GoodsCartOrder_InputCount__f3XNL",R=n(9326),U=function(e){var r=e.goods,n=(0,t.A)(),a=n.deleteGoods,s=n.changeCountGoods,u=(0,C.useState)(r.count),c=(0,w.Z)(u,2),i=c[0],o=c[1],d=(0,C.useState)((0,O.Z)({},R.uc)),l=(0,w.Z)(d,2),p=l[0],f=l[1];(0,C.useEffect)((function(){var e=new AbortController,n=function(){var n=(0,m.Z)((0,h.Z)().mark((function n(){var t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.og)(r.goods,e);case 3:t=n.sent,f(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),f((0,O.Z)({},R.uc));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){e.abort()}}),[r.goods]);return(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)("div",{className:A,children:(0,j.jsx)("img",{src:p.urlPicture,alt:p.name,height:"20",className:G})}),(0,j.jsxs)("div",{className:L,children:[(0,j.jsx)("button",{type:"button",className:F,onClick:function(){return a(r.goods)},children:"Delete"}),(0,j.jsxs)("div",{className:W,children:[(0,j.jsxs)("h4",{children:[p.name," "]}),(0,j.jsxs)("p",{children:["Price: ",(0,j.jsx)("span",{children:r.price})]}),(0,j.jsxs)("p",{children:["Summ: ",(0,j.jsx)("span",{children:r.sum})]})]}),(0,j.jsx)("input",{name:"count",type:"number",min:"1",value:i,onChange:function(e){o(Number(e.target.value)),s(r.goods,Number(e.target.value))},className:I})]})]})},D=function(){var e=(0,t.A)(),r=e.order,n=e.clearOrder;return(0,j.jsxs)("div",{className:a,children:[(0,j.jsxs)("div",{className:s,children:[(0,j.jsx)("div",{className:c,children:(0,j.jsx)(k,{})}),(0,j.jsx)(Z,{})]}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("div",{className:i,children:(0,j.jsx)("ul",{className:o,children:r.goodsDocument.map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)(U,{goods:e})},e.goods)}))})}),(0,j.jsx)("div",{className:d,children:(0,j.jsxs)("p",{className:l,children:["Total price: ",(0,j.jsxs)("span",{children:[r.sum," "]})]})}),(0,j.jsx)("button",{type:"button",className:p,onClick:function(){return n()},children:"Cancel order"})]})]})}},5371:function(e,r,n){n.d(r,{LV:function(){return f},sX:function(){return h},og:function(){return m},AU:function(){return x},u6:function(){return p}});var t=n(4942),a=n(4925),s=n(1413),u=n(4165),c=n(5861),i=n(1243),o="https://api-delivery-58of.onrender.com",d=n(9326),l=["_id"],p=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r){var n,t,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/shops",{baseURL:o,signal:r.signal});case 2:if(n=e.sent,t=n.data,a=t.code,s=t.data,200===a){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r,n){var t,a,s,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/goods",{baseURL:o,signal:r.signal,params:{shop:n}});case 2:if(t=e.sent,a=t.data,s=a.code,c=a.data,200===s){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r,n){var t,a,c,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/goods/".concat(r),{baseURL:o,signal:n.signal});case 2:if(t=e.sent,a=t.data,c=a.code,l=a.data,200===c){e.next=7;break}return e.abrupt("return",(0,s.Z)({},d.uc));case 7:return e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r){var n,t,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._id,(n=(0,a.Z)(r,l)).location="50.49197873085457, 30.343034170300555",e.next=4,i.Z.post("/api/orders",n,{baseURL:o});case 4:if(t=e.sent,s=t.data,201===s.code){e.next=9;break}return e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r,n){var t,a,s,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.id){e.next=7;break}return e.next=3,v(r.id,n);case 3:return t=e.sent,e.abrupt("return",t);case 7:if(!r.email){e.next=14;break}return e.next=10,b("email",r.email,n);case 10:return a=e.sent,e.abrupt("return",a);case 14:if(!r.phone){e.next=19;break}return e.next=17,b("phone",r.phone,n);case 17:return s=e.sent,e.abrupt("return",s);case 19:return e.next=21,_(n);case 21:return c=e.sent,e.abrupt("return",c);case 23:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),_=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r){var n,t,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/orders",{baseURL:o,signal:r.signal});case 2:if(n=e.sent,t=n.data,a=t.code,s=t.data,200===a){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r,n){var t,a,s,c,d;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r?"/".concat(r):"",console.log("getOrdersById",t),e.next=4,i.Z.get("/api/orders"+t,{baseURL:o,signal:n.signal});case 4:if(a=e.sent,s=a.data,c=s.code,d=s.data,200===c){e.next=9;break}return e.abrupt("return",[]);case 9:return e.abrupt("return",[d]);case 10:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),b=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(r,n,a){var s,c,d,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/orders",{baseURL:o,signal:a.signal,params:(0,t.Z)({},r,n)});case 2:if(s=e.sent,c=s.data,d=c.code,l=c.data,200===d){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=170.32a20d83.chunk.js.map