/*! For license information please see chunk.76fb6200cf7b693741a2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{349:function(t,e,o){"use strict";o.r(e);var n=o(31),d=o.n(n),c=o(80),u=o(250);e.default=(t={},e="product")=>{const o=document.getElementById(e);if(o){const n=document.getElementById(`${e}-dock`),r=Boolean(n),{storefront:s}=window;let p,a;s&&(p=s.getScopedSlots,a=s.context&&s.context.body);const l={render:d=>d(u.a,{attrs:{id:n?null:e},props:{...t.props,product:r&&a&&a.available&&Object(c.a)(a)?a:null,buyText:t.buyText,isSSR:r},scopedSlots:Object.assign({buy:t.buy?function(){return d("span",{domProps:{innerHTML:t.buy}})}:void 0},"function"==typeof p?p(o,d,!n):{})})},i=()=>{const t=document.getElementById("product-loading");t&&t.remove(),delete o.dataset.toRender};r?l.mounted=i:l.render.on={"update:product":i},new d.a(l).$mount(n||o)}}}}]);
//# sourceMappingURL=chunk.76fb6200cf7b693741a2.js.map