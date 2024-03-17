(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function r(l,o){const i=document.getElementById(l).getElementsByClassName("container")[0];o.forEach((s,t)=>{const e=document.createElement("div");e.className="card hidden",e.innerHTML=s.length>2?`<a href="${s[2]}" target="_blank"><img src="${s[1]}"></a>`:`<img src="${s[1]}">`,e.style.transitionDelay=`${200*(t+1)}ms`;const n=document.createElement("span");n.className="name hidden",n.textContent=s[0],e.appendChild(n),i.appendChild(e)})}const a=new IntersectionObserver(l=>{l.forEach(o=>{o.isIntersecting?o.target.classList.add("show"):o.target.classList.remove("show")})});function u(){let o=window.innerWidth/2,i=0,s=null;document.addEventListener("DOMContentLoaded",()=>{s=document.getElementById("cursor"),c()}),document.onmousemove=d=>{o=d.clientX,i=d.clientY};const t=12;let e=o,n=i;function c(){requestAnimationFrame(c),e+=(o-e)/t,n+=(i-n)/t,s.style.top=`${n-15}px`,s.style.left=`${e-15}px`}}document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = 'hidden'>\u0623\u0647\u0644\u0627\u060C \u0627\u0646\u0627 \u0639\u0628\u062F\u0627\u0644\u0645\u062D\u0633\u0646</h1>
</section>

<section id='projects'>
  <h2 class = 'hidden'>\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden'>\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden'>\u0645\u0648\u0627\u0642\u0639 \u0630\u0627\u062A \u0635\u0644\u0629</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const g=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"]],h=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"],["Docker","./logos/docker.png"],["PyTorch","./logos/pytorch.png"]],m=[["Github","./logos/github.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linkedin.png","https://www.linkedin.com/in/abdulmohsen-abanmy/"],["Kaggle","./logos/kaggle.png","https://www.kaggle.com/abdulmohsena"]];r("projects",g);r("skills",h);r("related",m);window.onload=l=>{document.querySelectorAll(".hidden").forEach(i=>a.observe(i))};u();
