import './styles/style.css'

import { cardStager } from './js/cardStager'
import { observer } from './js/observer'
import { displayCursor } from './js/cursor'
//import { init } from './js/globe'

document.querySelector('#app').innerHTML = `
  <div>
<section>
  <h2 class = 'hidden' data='✋'>Hello, I'm Abdulmohsen</h2>
  <div id='current'></div>
  <canvas class = 'hidden' id="globe"></canvas>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='🏗️'>Projects</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='💻'>Skills</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='🔗'>Related Sites</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`

const projects = [
  ['3D Visualiser', './logos/3dVisualiser.png', 'https://abdulmohsena.github.io/Equation3D/'],
  ['Schedule.it', './logos/scheduleit.png', 'https://scheduleit.up.railway.app/en'],
  ['WikiProduct', './logos/WikiProduct.png', 'https://wikiproduct.up.railway.app']
]

const skills = [
  ['Python', './logos/Python-logo.png'],
  ['JavaSript', './logos/JavaScript-logo.png'],
  ['Java', './logos/java.png'],
  ['SQL', './logos/PostgresQL.png'],
  ['Chroma DB', './logos/chromadb.png'],
  ['PyTorch', './logos/pytorch.png'],
  ['Hugging Face', './logos/huggingface.png'],
  ['LangChain', './logos/langchain.png'],
  ['Git', './logos/git.png'],
  ['Docker', './logos/docker.png'],
  ['Django', './logos/Django.png'],
]


const sites = [
  ['Github', './logos/github.png', 'https://github.com/AbdulmohsenA'],
  ['LinkedIn', './logos/linkedin.png', 'https://www.linkedin.com/in/abdulmohsen-abanmy/'],
  ['Kaggle', './logos/kaggle.png', 'https://www.kaggle.com/abdulmohsena']
]

cardStager('projects', projects)
cardStager('skills', skills)
cardStager('related', sites)

window.onload = async e => {
  let hidden = document.querySelectorAll('.hidden')
  hidden.forEach((el) => observer.observe(el))

  const { init } = await import('./js/globe.js');

  displayCursor()
  init()
}



