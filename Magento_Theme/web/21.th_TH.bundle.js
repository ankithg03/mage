(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1090:function(e,r,t){},1136:function(e,r,t){"use strict";t.r(r);var a=t(30),s=t.n(a),n=t(46),i=t.n(n),o=t(4),c=t.n(o),u=t(5),d=t.n(u),l=t(7),f=t.n(l),p=t(6),m=t.n(p),g=t(3),h=t.n(g),v=t(8),k=t.n(v),b=t(2),O=t.n(b),y=t(1),w=t.n(y),N=t(134),L=t(11),I=t(77),j=t(65),x=t(907),C=t(98),S=t(14),_=t(79),E=(t(1090),t(44)),P=t(10).checkBEMProps,B=function(e){function r(e){var t;return c()(this,r),t=f()(this,m()(r).call(this,e)),O()(h()(t),"state",{order_id:null,status:null,message:null,isLoading:!0}),t.fetchOrderInfo(),t}var t;return k()(r,e),d()(r,[{key:"fetchOrderInfo",value:(t=i()(s.a.mark((function e(){var r,t,a,n,i,o,c,u,d,l,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,t=r.history,a=r.showErrorNotification,n=r.startLoader,i=r.stopLoader,e.prev=1,!(o=I.a.getItem("salesRepCustomerOrderId"))){e.next=16;break}return n(),c=o.order_token,I.a.deleteItem("salesRepCustomerOrderId"),e.next=9,Object(C.b)(x.a.getQuery(c));case 9:u=e.sent,d=u.getOrderStatusByToken,l=d.is_success,f=d.status,this.setState({isLoading:!1,order_id:o.increment_id,status:l,message:f}),e.next=17;break;case 16:t.replace("/salesrep");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),e.t0.forEach((function(e){var r=e.message;return a(r)}));case 22:return e.prev=22,i(),e.finish(22);case 25:case"end":return e.stop()}}),e,this,[[1,19,22,25]])}))),function(){return t.apply(this,arguments)})},{key:"renderSuccessPage",value:function(){var e=this.state.message;return P(w.a,"div",{id:"sales-rep-customer-order-success",style:{backgroundImage:"url(".concat(Object(j.e)("/bg.png","salesrep"),")")}},P(w.a,"div",{className:"order-confirm"},P(w.a,"div",{className:"order-confirm-details"},P(w.a,"div",{className:"order-confirm-image"},P(w.a,"img",{src:Object(j.e)("/tick.png","salesrep"),className:"tick-img"})),P(w.a,"div",{className:"order-confirm-text"},P(w.a,"h2",null,e))),P(w.a,"div",{className:"render-dashboard",onClick:function(){E.b.push("/salesrep")}},P(w.a,"a",{className:"order-failed-alt"},"Go back to Homepage"))))}},{key:"renderErrorPage",value:function(){var e=this.state.message,r=this.props.history;return P(w.a,"div",{id:"sales-rep-customer-order-failed",style:{backgroundImage:"url(".concat(Object(j.e)("/bg.png","salesrep"),")")}},P(w.a,"div",{className:"order-failed"},P(w.a,"h2",{className:"order-failed-text"},e),P(w.a,"a",{onClick:function(){r.push("/salesrep")},className:"order-failed-alt"},"Go back to Homepage")))}},{key:"render",value:function(){var e=this.state,r=e.isLoading,t=e.status;return r?null:P(w.a,"div",{id:"SalesRepCustomerOrderConfirm"},t?this.renderSuccessPage():this.renderErrorPage())}}]),r}(y.Component),F=Object(L.b)(null,(function(e){return{showErrorNotification:function(r){return e(Object(S.c)("error",r))},startLoader:function(){return _.a.startLoader(e)},stopLoader:function(){return _.a.stopLoader(e)}}}))(Object(N.a)(B));t.d(r,"default",(function(){return F}))},907:function(e,r,t){"use strict";var a=t(4),s=t.n(a),n=t(5),i=t.n(n),o=t(7),c=t.n(o),u=t(6),d=t.n(u),l=t(8),f=t.n(l),p=t(9),m=function(e){function r(){return s()(this,r),c()(this,d()(r).apply(this,arguments))}return f()(r,e),i()(r,[{key:"getQuery",value:function(e){return new p.a("getOrderStatusByToken").addArgument("token","String!",e).addFieldList(["status","is_success",this.getOrder()])}},{key:"getOrder",value:function(){return new p.a("order").addFieldList(this._getOrderItemsFields())}}]),r}(t(146).a);r.a=new m}}]);