(()=>{"use strict";new function(){var e=this;e.init=function(){e.init_options()},e.getNumber=function(e,t=1){return Number(e)?Number(e):t},this.JSONify=e=>{var t={};for(var i in e)t['"'+i+'"']=e[i];return t},e.init_options=function(){var e=document.querySelectorAll(".wp-swiper");window.wpSwiper=[],window.wpSwiperThumbs=[];for(let t=0;t<e.length;t++){let i={};e[t].classList.add(`wp-swiper--${t}`);let r=e[t].querySelector(".swiper-container");if(i=JSON.parse(r.getAttribute("data-swiper")),i.navigation&&(i.navigation={nextEl:`.wp-swiper--${t} .swiper-button-next`,prevEl:`.wp-swiper--${t} .swiper-button-prev`}),i.pagination?i.pagination.el=e[t].querySelector(".swiper-pagination"):i.pagination=!1,i.breakpoints&&(i.breakpoints.includes("\\")?i.breakpoints=JSON.parse(i.breakpoints.replace(/\\/g,"")):i.breakpoints=JSON.parse(i.breakpoints)),r.hasAttribute("data-thumbs")){let n={spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0};const s=e[t].querySelectorAll(".wp-swiper__slide"),o=e[t].querySelector(".wp-swiper__thumbs .swiper-container"),p=e[t].querySelector(".wp-swiper__thumbs .swiper-wrapper"),a=p.querySelectorAll(".wp-swiper__thumb");let w=[];Array.from(s).forEach(((e,t)=>{const i=t+1,r=Array.from(a).find((e=>parseInt(e.getAttribute("data-thumb"))===i));r?w[t]=r.cloneNode(!0):(w[t]=e.cloneNode(!0),w[t].removeAttribute("data-tab"),w[t].classList.remove("wp-swiper__slide"),w[t].classList.add("wp-swiper__thumb"))})),p.innerHTML="",w.forEach((e=>{p.appendChild(e)})),n=JSON.parse(r.getAttribute("data-thumbs")),window.wpSwiperThumbs[t]=new Swiper(o,n),i={...i,thumbs:{swiper:window.wpSwiperThumbs[t]}}}"vertical"==i.direction&&(i.on={init:function(){var e=this.wrapperEl,t=e.children[this.activeIndex].querySelector(".wp-swiper__slide-content").offsetHeight;e.style.height=t+"px"},slideChangeTransitionEnd:function(){var e=this.wrapperEl,t=e.children[this.activeIndex].querySelector(".wp-swiper__slide-content").offsetHeight;e.style.height=t+"px"}}),r.hasAttribute("data-debug")&&"true"==r.getAttribute("data-debug")&&console.log({swiper_container:r,options:i}),window.wpSwiper[t]=new Swiper(r,i)}},window.addEventListener("DOMContentLoaded",(t=>{try{e.init()}catch(e){console.warn("JS Error: "),console.log(e)}}))}})();