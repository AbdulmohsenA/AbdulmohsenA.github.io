import './styles/style.css'

import { cardStager } from './js/cardStager'
import { observer } from './js/observer'
import { displayCursor } from './js/cursor'
import { init } from './js/globe'

document.querySelector('#app').innerHTML = `
  <div>
<section>
  <h2 class = 'hidden' data='✋'>Hello, I'm Abdulmohsen</h2>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='🏗️'>Projects</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='💡'>Skills</h2>
  <div class='container'></div>
</section>

<section id='tools'>
  <h2 class = 'hidden' data='🔨'>Tools</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='🔗'>Related Sites</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='🔗'>QR Code</h2>
  <div class='container'><img src="/assets/CVQR.png" alt="QR Code" style="width: 40%; max-width: 40%; height:auto; display: block; margin-left: auto; margin-right: auto;"></div>
</section>

<div class='footimg'></div>
  </div>
`

const projects = [
  ['3D Visualiser', './assets/3dVisualiser.png', 'https://abdulmohsena.github.io/Equation3D/'],
  ['Schedule.it', './assets/scheduleit.png', 'https://scheduleit.up.railway.app/en'],
  ['WikiProduct', './assets/WikiProduct.png', 'https://wikiproduct.up.railway.app']
]

const skills = [
  ['Python', './assets/Python-logo.png'],
  ['JavaSript', './assets/JavaScript-logo.png'],
  ['Java', './assets/java.png'],
  ['SQL', './assets/PostgresQL.png'],
  ['Git', './assets/git.png'],
  ['Docker', './assets/docker.png'],
]

const tools = [
  ['Django', './assets/Django.png'],
  ['Chroma DB', './assets/chromadb.png'],
  ['PyTorch', './assets/pytorch.png'],
  ['Hugging Face', './assets/huggingface.png'],
  ['LangChain', './assets/langchain.png'],
  ['Weights & Biases', './assets/wandb.png']
]

const sites = [
  ['Github', './assets/github.png', 'https://github.com/AbdulmohsenA'],
  ['LinkedIn', './assets/linkedin.png', 'https://www.linkedin.com/in/abdulmohsen-abanmy/']
]

cardStager('projects', projects)
cardStager('skills', skills)
cardStager('tools', tools)
cardStager('related', sites)

displayCursor()
init()


window.onload = async e => {
  let hidden = document.querySelectorAll('.hidden')
  hidden.forEach((el) => observer.observe(el))


  // Preloading the globe and inserting it to the correct section
  let header = document.querySelector('section')

  header.appendChild(document.querySelector('#countryLabel'))
  header.appendChild(document.querySelector('#globe'))
}



