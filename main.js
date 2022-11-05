import './styles/style.css'

import { cardStager } from "./js/cardStager";
import { observer } from './js/observer'

document.querySelector('#app').innerHTML = `
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
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
// https://avatars.dicebear.com/api/open-peeps/123123.svg?background=%230000ff

let languages = [
  ["Python", "./logos/Python-logo.png"],
  ["JS", "./logos/JavaScript-logo.png"],
  ["Java", "./logos/java-logo.png"],
  ["SQL", "./logos/mysql.png"]]

let sites = [
  ["CV", "./logos/cv.png", ""],
  ["Github", "./logos/git.png", "https://github.com/AbdulmohsenA"],
  ["LinkedIn", "./logos/linin.png", "https://linkedin.com/"]]

cardStager("languages", languages)
cardStager("related", sites)

window.onload = e => {
  let hidden = document.querySelectorAll(".hidden");
  hidden.forEach((el) => observer.observe(el));
}