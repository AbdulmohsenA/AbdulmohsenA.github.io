(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function r(n,t){const i=document.getElementById(n).getElementsByClassName("container")[0];for(let s=0;s<t.length;s++){let e=document.createElement("div");e.className="card hidden",e.innerHTML='<img src= "'+t[s][1]+'">',t[s].length>2&&(e.innerHTML='<a href="'+t[s][2]+'" target="_blank"><img src= "'+t[s][1]+'"></a>'),e.style.transitionDelay=200*(s+1)+"ms",i.appendChild(e)}}const d=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});function a(){document.addEventListener("DOMContentLoaded",()=>{let n=window.innerWidth/2,t=0,i=document.getElementById("cursor");document.onmousemove=c=>{n=c.clientX,t=c.clientY};const s=12;let e=n,o=t;function l(){requestAnimationFrame(l),e+=(n-e)/s,o+=(t-o)/s,i.style.top=o-15+"px",i.style.left=e-15+"px"}l()})}document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = 'hidden'>Hello, i am Abdulmohsen.</h1>
</section>

<section id='projects'>
  <h2 class = 'hidden'>Projects</h2>
  <div class='container'></div>
</section>

<section id='languages'>
  <h2 class = 'hidden'>Languages</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden'>Related sites</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const u=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"]],g=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"]],h=[["Github","./logos/git.png","https://github.com/AbdulmohsenA"]];r("projects",u);r("languages",g);r("related",h);window.onload=n=>{document.querySelectorAll(".hidden").forEach(i=>d.observe(i))};a();
