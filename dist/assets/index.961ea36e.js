(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(s,n){let o=document.getElementById(s).getElementsByClassName("container")[0],i=n;for(let e=0;e<i.length;e++){let t=document.createElement("div");t.className="card hidden",t.innerHTML='<img src= "'+i[e][1]+'">',i[e].length>2&&(t.innerHTML='<a href="'+i[e][2]+'" target="_blank"><img src= "'+i[e][1]+'"></a>'),t.style.transitionDelay=200*(e+1)+"ms",o.appendChild(t)}}const a=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting?n.target.classList.add("show"):n.target.classList.remove("show")})});document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
</section>

<section id="languages">
  <h2 class = "hidden">Proficient in</h2>
  <div class="container"></div>
</section>

<section id="related">
  <h2 class="hidden">Related sites</h2>
  <div class="container"></div>
</section>

<footer>Links to be updated.</footer>

<div class="footimg"></div>
  </div>
`;sessionStorage.clear();fetch("./data/data.json").then(s=>s.json()).then(s=>{let n=s.languages,o=s.sites;l("languages",n),l("related",o)});window.onload=s=>{document.querySelectorAll(".hidden").forEach(o=>a.observe(o))};
