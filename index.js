import{a as C,S as B,i as u}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const P="52360469-04a0681cd82a25280493158e1";async function f(a,e=1){const{data:s}=await C.get("https://pixabay.com/api/",{params:{key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),i=document.querySelector(".load-more"),$=new B(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){const e=a.map(({largeImageURL:o,webformatURL:t,tags:r,likes:n,views:w,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img
      class="gallery-image"
      src="${t}"
      alt="${r}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${n}</span>
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
</li>`).join("");y.insertAdjacentHTML("beforeend",e),$.refresh();const s=document.querySelector(".gallery-item");if(s){const o=s.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}function E(){y.innerHTML=""}function h(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}function O(){i.classList.remove("hidden")}function H(){i.classList.add("hidden")}function M(){i.disabled=!0}function x(){i.disabled=!1}const D=document.querySelector(".form");let d=1,c="",l=0;D.addEventListener("submit",A);i.addEventListener("click",N);async function A(a){if(a.preventDefault(),c=a.target.elements.search.value.toLowerCase().trim(),!c){L("Please enter a search query");return}h(),E(),R();try{const{hits:e,totalHits:s}=await f(c,d);m(e),l+=e.length,b(s)}catch(e){v(e.message)}finally{p()}}async function N(a){d+=1,M(),h();try{const{hits:e,totalHits:s}=await f(c,d);m(e),l+=e.length,b(s)}catch(e){v(e.message)}finally{p(),x()}}function v(a){u.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:a||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}function L(a){u.warning({title:"Caution",message:a,position:"topRight",timeout:3e3,close:!0})}function R(){d=1,l=0}function b(a){l<a?O():l>=a&&(H(),L("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=index.js.map
