(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function r(s,o){const i=document.getElementById(s).getElementsByClassName("container")[0];for(let n=0;n<o.length;n++){let e=document.createElement("div");e.className="card hidden",e.innerHTML='<img src= "'+o[n][1]+'">',o[n].length>2&&(e.innerHTML='<a href="'+o[n][2]+'" target="_blank"><img src= "'+o[n][1]+'"></a>'),e.style.transitionDelay=200*(n+1)+"ms",i.appendChild(e)}}const c=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?o.target.classList.add("show"):o.target.classList.remove("show")})});function a(){document.addEventListener("DOMContentLoaded",()=>{let s=window.innerWidth/2,o=0,i=document.getElementById("cursor");document.onmousemove=d=>{s=d.clientX,o=d.clientY};const n=12;let e=s,t=o;function l(){requestAnimationFrame(l),e+=(s-e)/n,t+=(o-t)/n,i.style.top=t-15+"px",i.style.left=e-15+"px"}l()})}document.querySelector("#app").innerHTML=`
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

<footer>Links to be updated.</footer>

<div class='footimg'></div>
  </div>
`;const u=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"]],g=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"]],m=[["CV","./logos/cv.png",""],["Github","./logos/git.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linin.png","https://linkedin.com/"]];r("projects",u);r("languages",g);r("related",m);window.onload=s=>{document.querySelectorAll(".hidden").forEach(i=>c.observe(i))};a();
