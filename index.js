import{a as P,S as $,i as g}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const E="52360469-04a0681cd82a25280493158e1";async function m(r,t=1){const{data:s}=await P.get("https://pixabay.com/api/",{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=new $(".gallery a",{captionsData:"alt",captionDelay:250});function h(r,t=1){const s=r.map(({largeImageURL:o,webformatURL:e,tags:a,likes:l,views:q,comments:C,downloads:H})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img
      class="gallery-image"
      src="${e}"
      alt="${a}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${l}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${q}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${C}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${H}</span> 
      </div>
    </div>
  </a>
</li>`).join("");if(t>1){c.insertAdjacentHTML("beforeend",s),y.refresh();const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}return}c.innerHTML=s,y.refresh()}function M(){c.innerHTML=""}function v(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}const O=document.querySelector(".form"),d=document.querySelector(".js-load-more");let i=1,n="",f=0;O.addEventListener("submit",x);d.addEventListener("click",u);async function x(r){if(r.preventDefault(),n=r.target.elements.search.value.toLowerCase().trim(),!n){S("Please enter a search query");return}v(),M();try{const{hits:t,totalHits:s}=await m(n,i);h(t),f+=t.length,b(s)}catch(t){w(t.message)}finally{L()}}async function u(r){i+=1,u.disabled=!0,v();try{const{hits:t,totalHits:s}=await m(n,i);h(t,i),f+=t.length,b(s)}catch(t){w(t.message)}finally{L(),u.disabled=!1}}function b(r){f>=r?(d.classList.replace("load-more","load-more-hidden"),S("We're sorry, but you've reached the end of search results.")):d.classList.replace("load-more-hidden","load-more")}function w(r){g.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}function S(r){g.warning({title:"Caution",message:r,position:"topRight",timeout:3e3,close:!0})}
//# sourceMappingURL=index.js.map
