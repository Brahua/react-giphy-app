(this["webpackJsonpgiphy-app"]=this["webpackJsonpgiphy-app"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(1),i=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a,alt:t,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t)))},l=a(4),u=a(5),m=a.n(u),d=a(8),p=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=10&api_key=N7ddKAzEDMvEXuW5lNJ4dzMsBB4is18p"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,o=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),console.error("Ocurri\xf3 un error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:Object(l.a)(e),loading:!1})}))}),[e]),r}(t),c=a.data,o=a.loading;return r.a.createElement("div",{className:"row mx-3 mx-sm-0"},r.a.createElement("h3",{className:"title-section w-100"},t),o&&r.a.createElement("div",{className:"spinner-border text-info my-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"card-columns"},c.map((function(e){return r.a.createElement(i,Object.assign({key:e.id},e))}))))},v=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],i=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[o].concat(Object(l.a)(e))}))}},r.a.createElement("input",{type:"text",value:o,onChange:function(e){i(e.target.value)},className:"form-control",placeholder:"Ingrese una palabra para buscar los gifs relacionados"}))},h=function(){var e=Object(n.useState)(["DBZ"]),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-color-jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"GiphyApp"),r.a.createElement("p",{className:"lead"},"This is a React app"))),r.a.createElement("div",{className:"container"},r.a.createElement(v,{setCategories:c}),r.a.createElement("hr",null),a.map((function(e){return r.a.createElement(f,{key:e,category:e})}))))};a(16);o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.dbe1b8d3.chunk.js.map