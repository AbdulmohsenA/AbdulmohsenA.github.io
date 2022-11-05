(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(s,o){let i=document.getElementById(s).getElementsByClassName("container")[0],n=o;for(let e=0;e<n.length;e++){let t=document.createElement("div");t.className="card hidden",t.innerHTML='<img src= "'+n[e][1]+'">',n[e].length>2&&(t.innerHTML='<a href="'+n[e][2]+'" target="_blank"><img src= "'+n[e][1]+'"></a>'),t.style.transitionDelay=200*(e+1)+"ms",i.appendChild(t)}}const a=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?o.target.classList.add("show"):o.target.classList.remove("show")})});document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
</section>

<section id="languages">
  <h2 class = "hidden">Languages</h2>
  <div class="container"></div>
</section>

<section id="related">
  <h2 class="hidden">Related sites</h2>
  <div class="container"></div>
</section>

<footer>Links to be updated.</footer>

<div class="footimg"></div>
  </div>
`;let d=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"]],c=[["CV","./logos/cv.png",""],["Github","./logos/git.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linin.png","https://linkedin.com/"]];l("languages",d);l("related",c);window.onload=s=>{document.querySelectorAll(".hidden").forEach(i=>a.observe(i))};
