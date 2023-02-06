import './styles/style.css'

import { cardStager } from "./js/cardStager";
import { observer } from './js/observer'
import { displayCursor } from './js/cursor'

document.querySelector('#app').innerHTML = `
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
`

let projects = [
  ["3D Visualiser", "./logos/3dVisualiser.png", "https://abdulmohsena.github.io/Equation3D/"]
]

let languages = [
  ["Python", "./logos/Python-logo.png"],
  ["JS", "./logos/JavaScript-logo.png"],
  ["Java", "./logos/java-logo.png"],
  ["SQL", "./logos/mysql.png"]]

let sites = [
  ["CV", "./logos/cv.png", ""],
  ["Github", "./logos/git.png", "https://github.com/AbdulmohsenA"],
  ["LinkedIn", "./logos/linin.png", "https://linkedin.com/"],
  ]

cardStager("projects", projects)
cardStager("languages", languages)
cardStager("related", sites)

window.onload = e => {
  let hidden = document.querySelectorAll(".hidden");
  hidden.forEach((el) => observer.observe(el));
}

displayCursor();
