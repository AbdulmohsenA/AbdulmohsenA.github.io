(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function p(t,e){const o=document.querySelector(`#${t} .container`);e.forEach((s,n)=>{const i=document.createElement("div");i.className="card hidden",i.innerHTML=s.length>2?`<a href="${s[2]}" target="_blank"><img src="${s[1]}"></a>`:`<img src="${s[1]}">`,i.style.transitionDelay=`${200*(n+1)}ms`,i.setAttribute("data",s[0]),o.appendChild(i)})}const x=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})});function S(){const t=document.getElementById("cursor"),e=document.querySelector("#cursor > p");let o=window.getComputedStyle(t).backgroundColor.match(/\d+/g).map(n=>parseInt(n)),s=!1;document.addEventListener("dblclick",()=>{s=!s}),window.onmousemove=n=>{const i=n.target.closest(".card, h2"),c=i!==null,h=n.target.closest("a"),u=h!==null;$(n,c,u,o,s),c&&u?(e.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i>',e.style.opacity=1):c?(e.innerText=i.getAttribute("data"),e.style.opacity=1):e.innerText=""}}const $=(t,e,o,s,n)=>{const i=t.clientX-cursor.offsetWidth/2,c=t.clientY-cursor.offsetHeight/2;let h=1,u=`rgba(${s[0]}, ${s[1]}, ${s[2]}, ${+n})`,m=c;e&&(h=5,u=`rgba(${s[0]}, ${s[1]}, ${s[2]}, 0)`,m=c-100,o&&(m=c,u=`rgba(${s[0]}, ${s[1]}, ${s[2]}, 0)`));const L={backgroundColor:u,transform:`translate(${i}px, ${m}px) scale(${h})`};cursor.animate(L,{duration:600,fill:"forwards",easing:"ease"})},r={rotationDelay:0,scaleFactor:.5,degPerSec:6,angles:{x:-100,y:-20,z:0},colors:{water:"#111",land:"#424447",saudiArabia:"#E2B714",hover:"#ccc"}},a={currentCountry:null,lastTime:d3.now(),degPerMs:r.degPerSec/1e3,isDragging:!1,startX:0,startY:0,saudiArabia:null},l={countryLabel:d3.select("#countryLabel"),canvas:d3.select("#globe"),context:d3.select("#globe").node().getContext("2d")},d=d3.geoOrthographic().precision(.1),A=d3.geoPath(d).context(l.context);let w,_,y,b;const D=()=>{const t=d.rotate();t[0]=r.angles.x,t[1]=r.angles.y,t[2]=r.angles.z,d.rotate(t)},v=()=>{const t=document.documentElement.clientWidth*r.scaleFactor,e=document.documentElement.clientHeight*r.scaleFactor;l.canvas.attr("width",t).attr("height",e),d.scale(Math.min(t,e)/2).translate([t/2,e/2]),g()},P=t=>{w.restart(k,t||0)},E=t=>{a.isDragging=!0,a.startX=t.x,a.startY=t.y,w.stop()},j=t=>{if(!a.isDragging)return;const e=.25,o=(t.x-a.startX)*e,s=(t.y-a.startY)*e;a.startX=t.x,a.startY=t.y;const n=d.rotate();n[0]+=o,n[1]-=s,d.rotate(n),g()},T=()=>{a.isDragging=!1,P(r.rotationDelay)},g=()=>{const{context:t}=l,e=document.documentElement.clientWidth,o=document.documentElement.clientHeight;t.clearRect(0,0,e,o),f({type:"Sphere"},r.colors.water),f(_,r.colors.land),a.saudiArabia&&(l.countryLabel.style("color",r.colors.saudiArabia),f(a.saudiArabia,r.colors.saudiArabia)),a.currentCountry&&a.currentCountry!==a.saudiArabia&&(l.countryLabel.style("color","white"),f(a.currentCountry,r.colors.hover))},f=(t,e)=>{l.context.beginPath(),A(t),l.context.fillStyle=e,l.context.fill()},k=t=>{const e=d3.now(),o=e-a.lastTime;if(o<t){const s=d.rotate();s[0]+=o*a.degPerMs,d.rotate(s),g()}a.lastTime=e},q=async t=>{const e=await d3.json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json");let o=await d3.tsv("https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv");o[110].name="Palestine",t(e,o)},H=t=>{const e=d.invert(d3.pointer(t));return y.features.find(o=>o.geometry.coordinates.find(s=>d3.polygonContains(s,e)||s.some(n=>d3.polygonContains(n,e))))},C=t=>{const e=H(t);if(!e){a.currentCountry&&(M(),a.currentCountry=null,g());return}e!==a.currentCountry&&(a.currentCountry=e,g(),I(e))},I=t=>{var o;const e=((o=b.find(s=>parseInt(s.id)===parseInt(t.id)))==null?void 0:o.name)||"";l.countryLabel.text(e)},M=t=>{l.countryLabel.text("")},F=()=>{D(),l.canvas.call(d3.drag().on("start",E).on("drag",j).on("end",T)).on("mousemove",C).on("touchmove",C),q((t,e)=>{_=topojson.feature(t,t.objects.land),y=topojson.feature(t,t.objects.countries),b=e,a.saudiArabia=y.features.find(o=>{const s=b.find(n=>parseInt(n.id,10)===parseInt(o.id,10));return s&&s.name==="Saudi Arabia"}),window.addEventListener("resize",v),v(),w=d3.timer(k)})};document.querySelector("#app").innerHTML=`
  <div>
<section>
  <h2 class = 'hidden' data='\u270B'>Hello, I'm Abdulmohsen</h2>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='\u{1F3D7}\uFE0F'>Projects</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='\u{1F4A1}'>Skills</h2>
  <div class='container'></div>
</section>

<section id='tools'>
  <h2 class = 'hidden' data='\u{1F528}'>Tools</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='\u{1F517}'>Related Sites</h2>
  <div class='container'></div>
</section>

<section id='CV'>
  <h2 class='hidden' data='\u{1F533}'>CV</h2>
  <div class='container'>
  <a href="https://abdulmohsena.github.io/asset_files/CV.pdf" target="_blank">
  <img src="./asset_files/CVQR.png" alt="QR Code" style="width: 40%; max-width: 40%; height:auto; display: block; margin-left: auto; margin-right: auto;" class='hidden'>
  </a>
  </div>
</section>

<div class='footimg'>

  </div>
`;const O=[["3D Visualiser","./asset_files/3dVisualiser.png","https://abdulmohsena.github.io/Equation3D/"],["Schedule.it","./asset_files/scheduleit.png","https://scheduleit.up.railway.app/en"],["WikiProduct","./asset_files/WikiProduct.png","https://wikiproduct.up.railway.app"],["Faseeh Translator","./asset_files/Baleegh.png","https://baleegh-production.up.railway.app/"]],V=[["Python","./asset_files/Python-logo.png"],["JavaSript","./asset_files/JavaScript-logo.png"],["Java","./asset_files/java.png"],["Databases","./asset_files/PostgresQL.png"],["Git","./asset_files/git.png"],["Docker","./asset_files/docker.png"],["Cloud","./asset_files/aws.png"]],W=[["Django","./asset_files/Django.png"],["Chroma DB","./asset_files/chromadb.png"],["Elastic","./asset_files/elastic.png"],["PyTorch","./asset_files/pytorch.png"],["Hugging Face","./asset_files/huggingface.png"],["LangChain","./asset_files/langchain.png"],["Weights & Biases","./asset_files/wandb.png"]["./asset_files/kafka.png"]],B=[["Github","./asset_files/github.png","https://github.com/AbdulmohsenA"],["LinkedIn","./asset_files/linkedin.png","https://www.linkedin.com/in/abdulmohsen-abanmy/"]];p("projects",O);p("skills",V);p("tools",W);p("related",B);S();F();window.onload=async t=>{document.querySelectorAll(".hidden").forEach(s=>x.observe(s));let o=document.querySelector("section");o.appendChild(document.querySelector("#countryLabel")),o.appendChild(document.querySelector("#globe"))};
