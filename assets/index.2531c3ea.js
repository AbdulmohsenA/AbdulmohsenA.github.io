(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const m="modulepreload",p=function(i){return"/"+i},h={},f=function(s,r,n){if(!r||r.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=p(e),e in h)return;h[e]=!0;const o=e.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!n)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":m,o||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),o)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};function g(i,s){const r=document.querySelector(`#${i} .container`);s.forEach((n,t)=>{const e=document.createElement("div");e.className="card hidden",e.innerHTML=n.length>2?`<a href="${n[2]}" target="_blank"><img src="${n[1]}"></a>`:`<img src="${n[1]}">`,e.style.transitionDelay=`${200*(t+1)}ms`,e.setAttribute("data",n[0]),r.appendChild(e)})}const y=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});function v(){const i=document.getElementById("cursor"),s=document.querySelector("#cursor > p");let r=window.getComputedStyle(i).backgroundColor.match(/\d+/g).map(t=>parseInt(t)),n=!1;document.addEventListener("dblclick",()=>{n=!n}),window.onmousemove=t=>{const e=t.target.closest(".card, h2"),o=e!==null,d=t.target.closest("a"),a=d!==null;b(t,o,a,r,n),o&&a?(s.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i>',s.style.opacity=1):o?(s.innerText=e.getAttribute("data"),s.style.opacity=1):s.innerText=""}}const b=(i,s,r,n,t)=>{const e=i.clientX-cursor.offsetWidth/2,o=i.clientY-cursor.offsetHeight/2;let d=1,a=`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${+t})`,l=o;s&&(d=5,a=`rgba(${n[0]}, ${n[1]}, ${n[2]}, 0)`,l=o-100,r&&(l=o,a=`rgba(${n[0]}, ${n[1]}, ${n[2]}, 0)`));const c={backgroundColor:a,transform:`translate(${e}px, ${l}px) scale(${d})`};cursor.animate(c,{duration:600,fill:"forwards",easing:"ease"})};document.querySelector("#app").innerHTML=`
  <div>
<section>
  <h2 class = 'hidden' data='\u270B'>Hello, I'm Abdulmohsen</h2>
  <div id='current'></div>
  <canvas class = 'hidden' id="globe"></canvas>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='\u{1F3D7}\uFE0F'>Projects</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='\u{1F4BB}'>Skills</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='\u{1F517}'>Related Sites</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`;const k=[["3D Visualiser","./logos/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./logos/scheduleit.png","https://scheduleit.up.railway.app/en"],["WikiProduct","./logos/WikiProduct.png","https://wikiproduct.up.railway.app"]],w=[["Python","./logos/Python-logo.png"],["JavaSript","./logos/JavaScript-logo.png"],["Java","./logos/java.png"],["SQL","./logos/PostgresQL.png"],["Chroma DB","./logos/chromadb.png"],["PyTorch","./logos/pytorch.png"],["Hugging Face","./logos/huggingface.png"],["LangChain","./logos/langchain.png"],["Git","./logos/git.png"],["Docker","./logos/docker.png"],["Django","./logos/Django.png"]],$=[["Github","./logos/github.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linkedin.png","https://www.linkedin.com/in/abdulmohsen-abanmy/"],["Kaggle","./logos/kaggle.png","https://www.kaggle.com/abdulmohsena"]];g("projects",k);g("skills",w);g("related",$);window.onload=async i=>{document.querySelectorAll(".hidden").forEach(n=>y.observe(n));const{init:r}=await f(()=>import("./globe.6db92049.js"),[]);v(),r()};
