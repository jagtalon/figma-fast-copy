!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t){this&&this.__awaiter;figma.showUI(__html__),figma.ui.resize(450,290);let n=figma.currentPage.selection,r=[];n.length>0&&(n.forEach(e=>{if("GROUP"===e.type||"FRAME"===e.type||"INSTANCE"===e.type||"COMPONENT"===e.type||"TEXT"===e.type){let t;t="TEXT"===e.type?[e]:e.findAll(e=>"TEXT"===e.type),t.length>0&&t.forEach(e=>{r.push({name:e.name,characters:e.characters,id:e.id,x:e.x,y:e.y})})}}),r.length>0?(figma.viewport.scrollAndZoomIntoView(n),figma.ui.postMessage(r)):figma.ui.resize(450,200)),figma.ui.onmessage=e=>{if("notification"===e.type&&figma.notify(e.message,{timeout:2}),"zoom-in"===e.type){let t=figma.getNodeById(e.message);figma.viewport.scrollAndZoomIntoView([t]),figma.currentPage.selection=[t]}}}});