!function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([124,1]),n()}({124:function(e,t,n){n(125),e.exports=n(314)},314:function(e,t,n){"use strict";n.r(t);n(311),n(312);var r=function(){var e=document.querySelector(".button-burger"),t=document.querySelector(".header-menu__button-close"),n=document.querySelector(".header-menu"),r=function(){return n.classList.remove("header-menu--active")},i=!1;document.addEventListener("click",(function(o){switch(o.target){case e:i=!0,n.classList.add("header-menu--active");break;case t:i=!1,r();break;default:i&&(i=!1,r())}}))},i=(n(313),n(318)),o=n(316),a=n(317);i.a.use([o.a,a.a]);var s=function(){new i.a(".reviews-slider__container",{direction:"horizontal",loop:!0,speed:400,pagination:{el:".reviews-slider-pagination",bulletClass:"reviews-slider-pagination__dot",bulletActiveClass:"reviews-slider-pagination__dot--active",clickable:!0},autoHeight:!0,autoplay:{delay:5e3}});var e=document.querySelector(".swiper-wrapper"),t=document.querySelector(".swiper-slide-active");setTimeout((function(){e.style.height=t.offsetHeight+"px"}),100)};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.formId,r=t.submit;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=document.getElementById(n),this.submit=r.bind(this)}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.form.addEventListener("submit",this.submit)}}])&&u(t.prototype,n),r&&u(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){var n=t.inputs,r=t.formId,i=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputs=n,this.$form=document.getElementById(r),this.errorClass=i,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.inputs=this.inputs.map((function(t){var n=document.createElement("label");return n.setAttribute("for",t.inputId),n.className=e.errorClass,{input:document.getElementById(t.inputId),inputId:t.inputId,messages:t.messages,validationFunc:t.validationFunc,isValid:!1,$error:n,isDisplayed:!1}}));var t=this;this.$form.addEventListener("submit",(function e(n){return t.onSubmitHandler(n,e)}))}},{key:"validate",value:function(){var e=this;this.inputs.forEach((function(t){var n=t.input.value;return""===n.trim()?(t.isValid=!1,void e.showRequireMessage(t)):t.validationFunc(n)?(e.hideMessage(t),void(t.isValid=!0)):(t.isValid=!1,void e.showFuncMessage(t))}))}},{key:"hideMessage",value:function(e){console.log("inputData: ",e),e.isDisplayed&&(e.$error.remove(),e.isDisplayed=!1)}},{key:"showRequireMessage",value:function(e){console.log("inputData: ",e),e.isDisplayed?e.$error.textContent=e.messages.require:(e.$error.textContent=e.messages.require,e.input.insertAdjacentElement("afterend",e.$error),e.isDisplayed=!0)}},{key:"showFuncMessage",value:function(e){console.log("inputData: ",e),e.isDisplayed?e.$error.textContent=e.messages.func:(e.$error.textContent=e.messages.func,e.input.insertAdjacentElement("afterend",e.$error),e.isDisplayed=!0)}},{key:"onSubmitHandler",value:function(e,t){e.preventDefault(),this.validate(),this.$form.addEventListener("input",this.onInputHandler.bind(this)),this.$form.removeEventListener("submit",t)}},{key:"onInputHandler",value:function(e){e.preventDefault(),this.validate()}},{key:"isValid",get:function(){return this.inputs.every((function(e){return e.isValid}))}}])&&c(t.prototype,n),r&&c(t,r),e}(),d=function(){var e=new f({formId:"subscribe-form",inputs:[{inputId:"subscribe-form-email",messages:{require:"Данное поле должно быть заполнено",func:"Введите корректный email адресс"},validationFunc:function(e){return/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(e)}}],errorClass:"invalid"});new l({formId:"subscribe-form",submit:function(t){if(t.preventDefault(),!1!==e.isValid){var n=new FormData(this.form),r={};n.forEach((function(e,t){return r[t]=e})),console.log("body: ",r)}}}).init()};r(),s(),d()}});
//# sourceMappingURL=main.fd75cab61f408fdaa77e.js.map