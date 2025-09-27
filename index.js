import{a as C,S as $,i as g}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const H="52360469-04a0681cd82a25280493158e1";async function y(r,e=1){const{data:s}=await C.get("https://pixabay.com/api/",{params:{key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s}const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),i=document.querySelector(".js-load-more"),f=new $(".gallery a",{captionsData:"alt",captionDelay:250});function p(r,e=1){const s=r.map(({largeImageURL:o,webformatURL:t,tags:a,likes:l,views:w,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img
      class="gallery-image"
      src="${t}"
      alt="${a}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${l}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${w}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${S}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${q}</span> 
      </div>
    </div>
  </a>
</li>`).join("");if(e>1){d.insertAdjacentHTML("beforeend",s),f.refresh();const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}return}d.innerHTML=s,f.refresh()}function P(){d.innerHTML=""}function h(){m.classList.remove("hidden")}function v(){m.classList.add("hidden")}function L(r,e){r>=e?(i.classList.replace("load-more","load-more-hidden"),showWarning("We're sorry, but you've reached the end of search results.")):i.classList.replace("load-more-hidden","load-more")}const E=document.querySelector(".form");let n=1,u="",c=0;E.addEventListener("submit",M);i.addEventListener("click",O);async function M(r){if(r.preventDefault(),u=r.target.elements.search.value.toLowerCase().trim(),!u){x("Please enter a search query");return}h(),P(),B();try{const{hits:e,totalHits:s}=await y(u,n);p(e),c+=e.length,L(c,s)}catch(e){b(e.message)}finally{v()}}async function O(r){n+=1,i.disabled=!0,h();try{const{hits:e,totalHits:s}=await y(u,n);p(e,n),c+=e.length,L(c,s)}catch(e){b(e.message)}finally{v(),i.disabled=!1}}function b(r){g.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}function x(r){g.warning({title:"Caution",message:r,position:"topRight",timeout:3e3,close:!0})}function B(){n=1,c=0}
//# sourceMappingURL=index.js.map
