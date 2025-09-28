import{a as B,S as P,i as y}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const $="52360469-04a0681cd82a25280493158e1";async function g(a,t=1){const{data:s}=await B.get("https://pixabay.com/api/",{params:{key:$,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s}const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),c=document.querySelector(".load-more"),f=new P(".gallery a",{captionsData:"alt",captionDelay:250});function m(a,t=1){const s=a.map(({largeImageURL:o,webformatURL:e,tags:r,likes:n,views:S,comments:q,downloads:C})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img
      class="gallery-image"
      src="${e}"
      alt="${r}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${n}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${S}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${q}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${C}</span> 
      </div>
    </div>
  </a>
</li>`).join("");if(t>1){u.insertAdjacentHTML("beforeend",s),f.refresh();const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}return}u.innerHTML=s,f.refresh()}function E(){u.innerHTML=""}function p(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function H(){c.classList.remove("hidden")}function M(){c.classList.add("hidden")}function O(){c.disabled=!0}function x(){c.disabled=!1}const D=document.querySelector(".form");let l=1,d="",i=0;D.addEventListener("submit",T);c.addEventListener("click",A);async function T(a){if(a.preventDefault(),d=a.target.elements.search.value.toLowerCase().trim(),!d){b("Please enter a search query");return}p(),E(),N();try{const{hits:t,totalHits:s}=await g(d,l);m(t),i+=t.length,w(s)}catch(t){L(t.message)}finally{v()}}async function A(a){l+=1,O(),p();try{const{hits:t,totalHits:s}=await g(d,l);m(t,l),i+=t.length,w(s)}catch(t){L(t.message)}finally{v(),x()}}function L(a){y.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:a||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}function b(a){y.warning({title:"Caution",message:a,position:"topRight",timeout:3e3,close:!0})}function N(){l=1,i=0}function w(a){i>=a?(M(),b("We're sorry, but you've reached the end of search results.")):i<a&&H()}
//# sourceMappingURL=index.js.map
