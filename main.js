import './styles/style.css'

import { cardStager } from "./js/cardStager";
import { observer } from './js/observer'

document.querySelector('#app').innerHTML = `
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
</section>

<section id="languages">
  <h2 class = "hidden">Proficient in</h2>
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


// https://avatars.dicebear.com/api/open-peeps/123123.svg?background=%230000ff

fetch("./data/data.json")
  .then((response) => response.json())
  .then((json) => {
    let languages = json["languages"]
    let sites     = json["sites"]
    cardStager("languages", languages)
    cardStager("related", sites)
  })

window.onload = (e) => {
  const hidden = document.querySelectorAll(".hidden");
  hidden.forEach((el) => observer.observe(el));
}

