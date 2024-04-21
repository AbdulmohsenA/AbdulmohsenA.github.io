(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function a(n,s){const i=document.getElementById(n).getElementsByClassName("container")[0];s.forEach((o,t)=>{const e=document.createElement("div");e.className="card hidden",e.innerHTML=o.length>2?`<a href="${o[2]}" target="_blank"><img src="${o[1]}"></a>`:`<img src="${o[1]}">`,e.style.transitionDelay=`${200*(t+1)}ms`,e.setAttribute("data",o[0]),i.appendChild(e)})}const c=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});function d(){const n=document.getElementById("cursor"),s=document.querySelector("#cursor > p");let i=window.getComputedStyle(n).backgroundColor.match(/\d+/g).map(o=>parseInt(o));window.onmousemove=o=>{const t=o.target.closest(".card, h2"),e=t!==null,r=o.target.closest("a"),l=r!==null;g(o,e,l,i),e&&l?(s.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i>',s.style.opacity=1):e?(s.innerText=t.getAttribute("data"),s.style.opacity=1):s.innerText=""}}const g=(n,s,i,o)=>{const t=n.clientX-cursor.offsetWidth/2,e=n.clientY-cursor.offsetHeight/2,r={backgroundColor:s&&!i?`rgba(${o[0]}, ${o[1]}, ${o[2]}, 0)`:`rgba(${o[0]}, ${o[1]}, ${o[2]}, 1)`,transform:`translate(${t}px, ${s&&!i?e-100:e}px) scale(${s?4:1})`};cursor.animate(r,{duration:800,fill:"forwards",easing:"ease"})};document.querySelector("#app").innerHTML=`
  <div>
<section>
  <h2 class = 'hidden' data='\u270B'>\u0623\u0647\u0644\u0627\u060C \u0627\u0646\u0627 \u0639\u0628\u062F\u0627\u0644\u0645\u062D\u0633\u0646</h2>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='\u{1F3D7}\uFE0F'>\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='\u{1F4BB}'>\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A</h2>
  <div class='container'></div>
</section>

<section id='tools'>
  <h2 class = 'hidden' data='\u{1F6E0}\uFE0F'>\u0627\u0644\u0623\u062F\u0648\u0627\u062A</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='\u{1F517}'>\u0645\u0648\u0627\u0642\u0639 \u0630\u0627\u062A \u0635\u0644\u0629</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const u=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"]],h=[["Python","./logos/Python-logo.png"],["JavaSript","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"],["Docker","./logos/docker.png"]],p=[["LangChain","./logos/langchain.png"],["PyTorch","./logos/pytorch.png"],["THREE.JS","./logos/threejs.png"],["HuggingFace","./logos/huggingface.png"],["Git","./logos/git.png"]],m=[["Github","./logos/github.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linkedin.png","https://www.linkedin.com/in/abdulmohsen-abanmy/"],["Kaggle","./logos/kaggle.png","https://www.kaggle.com/abdulmohsena"]];a("projects",u);a("skills",h);a("tools",p);a("related",m);window.onload=n=>{document.querySelectorAll(".hidden").forEach(i=>c.observe(i))};d();
