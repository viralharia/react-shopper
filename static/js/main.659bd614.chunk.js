(this.webpackJsonpshopper=this.webpackJsonpshopper||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(14),a(7)),l=a(1),s=a(4),m=a(5),d=a(6),u=a(8),p=function(e){var t=e.activeTab,a=e.onTabChange;return r.a.createElement("nav",{className:"App-nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"App-nav-item ".concat(0===t&&"selected")},r.a.createElement("a",{onClick:function(){return a(0)}},"Items")),r.a.createElement("li",{className:"App-nav-item ".concat(1===t&&"selected")},r.a.createElement("a",{onClick:function(){return a(1)}},"Cart"))))},v=[{id:0,name:"Apple iPad Mini 2 16GB",description:"An iPad like no other. 16GB, WiFi, 4G.",price:229},{id:1,name:"Apple iPad Mini 2 32GB",description:"Even larger than the 16GB.",price:279},{id:2,name:"Canon T7i",description:"DSLR camera with lots of megapixels.",price:749.99},{id:3,name:"Apple Watch Sport",description:"A watch",price:249.99},{id:4,name:"Apple Watch Silver",description:"A more expensive watch",price:599.99}];a(15);var h=function(e){var t=e.item,a=e.children;return r.a.createElement("div",{className:"Item"},r.a.createElement("div",{className:"Item-left"},r.a.createElement("div",{className:"Item-image"}),r.a.createElement("div",{className:"Item-title"},t.name),r.a.createElement("div",{className:"Item-description"},t.description)),r.a.createElement("div",{className:"Item-right"},r.a.createElement("div",{className:"Item-price"},"$",t.price),a))};a(16);var E=function(e){var t=e.items,a=e.onAddToCart;return r.a.createElement("ul",{className:"ItemPage-items"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"ItemPage-item"},r.a.createElement(h,{item:e},r.a.createElement("button",{className:"Item-addToCart",onClick:function(){return a(e)}},"Add to Cart")))})))};a(17);var f=function(e){var t=e.items,a=e.onAddOne,n=e.onRemoveOne;return 0===t.length?r.a.createElement("div",{className:"Empty-Cart"},r.a.createElement("p",null,"Your cart is empty."),r.a.createElement("p",null,"Why not add some expensive products to it?")):t.length>=1&&r.a.createElement("div",{className:"CartPage"},r.a.createElement("ul",{className:"CartPage-items"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"CartPage-item"},r.a.createElement(h,{item:e},r.a.createElement("div",{className:"CartItem-controls"},r.a.createElement("button",{className:"CartItem-removeOne",onClick:function(){return n(e)}},"\u2013"),r.a.createElement("span",{className:"CartItem-count"},e.count),r.a.createElement("button",{className:"CartItem-addOne",onClick:function(){return a(e)}},"+"))))}))),r.a.createElement("div",{className:"Total-CartValue"},"Total: $",t.reduce((function(e,t){return e+t.price*t.count}),0)))},C=(a(18),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:0,cart:[]},e.handleAddToCart=function(t){e.setState({cart:[].concat(Object(l.a)(e.state.cart),[t.id])})},e.handleRemoveOne=function(t){var a=e.state.cart.indexOf(t.id);e.setState({cart:[].concat(Object(l.a)(e.state.cart.slice(0,a)),Object(l.a)(e.state.cart.slice(a+1)))})},e.handleTabChange=function(t){e.setState({activeTab:t})},e}return Object(m.a)(a,[{key:"renderCart",value:function(){var e=this.state.cart.reduce((function(e,t){return e[t]=e[t]||0,e[t]++,e}),{}),t=Object.keys(e).map((function(t){var a=v.find((function(e){return e.id===parseInt(t,10)}));return Object(o.a)({},a,{count:e[t]})}));return r.a.createElement(f,{items:t,onAddOne:this.handleAddToCart,onRemoveOne:this.handleRemoveOne})}},{key:"renderContent",value:function(){switch(this.state.activeTab){default:case 0:return r.a.createElement(E,{items:v,onAddToCart:this.handleAddToCart});case 1:return this.renderCart()}}},{key:"render",value:function(){var e=this.state.activeTab;return r.a.createElement("div",{className:"App"},r.a.createElement(p,{activeTab:e,onTabChange:this.handleTabChange}),r.a.createElement("main",{className:"App-content"},this.renderContent()))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.659bd614.chunk.js.map