(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function d(i,s){const r=document.querySelector(`#${i} .container`);s.forEach((t,e)=>{const o=document.createElement("div");o.className="card hidden",o.innerHTML=t.length>2?`<a href="${t[2]}" target="_blank"><img src="${t[1]}"></a>`:`<img src="${t[1]}">`,o.style.transitionDelay=`${200*(e+1)}ms`,o.setAttribute("data",t[0]),r.appendChild(o)})}const u=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});function h(){const i=document.getElementById("cursor"),s=document.querySelector("#cursor > p");let r=window.getComputedStyle(i).backgroundColor.match(/\d+/g).map(e=>parseInt(e)),t=!1;document.addEventListener("dblclick",()=>{t=!t}),window.onmousemove=e=>{const o=e.target.closest(".card, h2"),n=o!==null,l=e.target.closest("a"),a=l!==null;p(e,n,a,r,t),n&&a?(s.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i>',s.style.opacity=1):n?(s.innerText=o.getAttribute("data"),s.style.opacity=1):s.innerText=""}}const p=(i,s,r,t,e)=>{const o=i.clientX-cursor.offsetWidth/2,n=i.clientY-cursor.offsetHeight/2;let l=1,a=`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${+e})`,c=n;s&&(l=5,a=`rgba(${t[0]}, ${t[1]}, ${t[2]}, 0)`,c=n-100,r&&(c=n,a=`rgba(${t[0]}, ${t[1]}, ${t[2]}, 0)`));const g={backgroundColor:a,transform:`translate(${o}px, ${c}px) scale(${l})`};cursor.animate(g,{duration:600,fill:"forwards",easing:"ease"})};document.querySelector("#app").innerHTML=`
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

<section id='related'>
  <h2 class='hidden' data='\u{1F517}'>\u0645\u0648\u0627\u0642\u0639 \u0630\u0627\u062A \u0635\u0644\u0629</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const m=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"],["WikiProduct","./logos/WikiProduct.png","https://wikiproduct.up.railway.app"]],f=[["Python","./logos/Python-logo.png"],["JavaSript","./logos/JavaScript-logo.png"],["Java","./logos/java.png"],["SQL","./logos/PostgresQL.png"],["Chroma DB","./logos/chromadb.png"],["PyTorch","./logos/pytorch.png"],["Hugging Face","./logos/huggingface.png"],["LangChain","./logos/langchain.png"],["Git","./logos/git.png"],["Docker","./logos/docker.png"],["Django","./logos/Django.png"]],y=[["Github","./logos/github.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linkedin.png","https://www.linkedin.com/in/abdulmohsen-abanmy/"],["Kaggle","./logos/kaggle.png","https://www.kaggle.com/abdulmohsena"]];d("projects",m);d("skills",f);d("related",y);window.onload=i=>{document.querySelectorAll(".hidden").forEach(r=>u.observe(r))};h();
