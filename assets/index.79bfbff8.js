(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function l(n,t){let i=document.getElementById(n).getElementsByClassName("container")[0],s=t;for(let e=0;e<s.length;e++){let o=document.createElement("div");o.className="card hidden",o.innerHTML='<img src= "'+s[e][1]+'">',s[e].length>2&&(o.innerHTML='<a href="'+s[e][2]+'" target="_blank"><img src= "'+s[e][1]+'"></a>'),o.style.transitionDelay=200*(e+1)+"ms",i.appendChild(o)}}const a=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});function c(){document.addEventListener("DOMContentLoaded",()=>{let n=0,t=0,i=document.getElementById("cursor");document.onmousemove=d=>{n=d.pageX,t=d.pageY};let s=12,e=0,o=0;function r(){requestAnimationFrame(r),e+=(n-e)/s,o+=(t-o)/s,i.style.top=o-15+"px",i.style.left=e-15+"px"}r()})}document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
</section>

<section id="projects">
  <h2 class = "hidden">Projects</h2>
  <div class="container"></div>
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
`;let u=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"]],g=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"]],m=[["CV","./logos/cv.png",""],["Github","./logos/git.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linin.png","https://linkedin.com/"]];l("projects",u);l("languages",g);l("related",m);window.onload=n=>{document.querySelectorAll(".hidden").forEach(i=>a.observe(i))};c();
