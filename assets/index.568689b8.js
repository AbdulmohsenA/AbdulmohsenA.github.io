(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function r(n,o){const i=document.getElementById(n).getElementsByClassName("container")[0];for(let s=0;s<o.length;s++){let e=document.createElement("div");e.className="card hidden",e.innerHTML='<img src= "'+o[s][1]+'">',o[s].length>2&&(e.innerHTML='<a href="'+o[s][2]+'" target="_blank"><img src= "'+o[s][1]+'"></a>'),e.style.transitionDelay=200*(s+1)+"ms",i.appendChild(e)}}const d=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting?o.target.classList.add("show"):o.target.classList.remove("show")})});function a(){document.addEventListener("DOMContentLoaded",()=>{let n=window.innerWidth/2,o=0,i=document.getElementById("cursor");document.onmousemove=c=>{n=c.clientX,o=c.clientY};const s=12;let e=n,t=o;function l(){requestAnimationFrame(l),e+=(n-e)/s,t+=(o-t)/s,i.style.top=t-15+"px",i.style.left=e-15+"px"}l()})}document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = 'hidden'>Hello, i am Abdulmohsen.</h1>
</section>

<section id='projects'>
  <h2 class = 'hidden'>Projects</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden'>Skills</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden'>Related sites</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const u=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"]],h=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"],["Docker","./logos/docker.png"],["Postman","./logos/postman.png"]],g=[["Github","./logos/git.png","https://github.com/AbdulmohsenA"]];r("projects",u);r("skills",h);r("related",g);window.onload=n=>{document.querySelectorAll(".hidden").forEach(i=>d.observe(i))};a();
