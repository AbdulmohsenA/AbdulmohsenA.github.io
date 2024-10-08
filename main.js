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


<div class='footimg'></div>
  </div>
`

const projects = [
  ['3D Visualiser', './asset_files/3dVisualiser.png', 'https://abdulmohsena.github.io/Equation3D/'],
  ['Schedule.it', './asset_files/scheduleit.png', 'https://scheduleit.up.railway.app/en'],
  ['WikiProduct', './asset_files/WikiProduct.png', 'https://wikiproduct.up.railway.app']
]

const skills = [
  ['Python', './asset_files/Python-logo.png'],
  ['JavaSript', './asset_files/JavaScript-logo.png'],
  ['Java', './asset_files/java.png'],
  ['SQL', './asset_files/PostgresQL.png'],
  ['Git', './asset_files/git.png'],
  ['Docker', './asset_files/docker.png'],
]

const tools = [
  ['Django', './asset_files/Django.png'],
  ['Chroma DB', './asset_files/chromadb.png'],
  ['PyTorch', './asset_files/pytorch.png'],
  ['Hugging Face', './asset_files/huggingface.png'],
  ['LangChain', './asset_files/langchain.png'],
  ['Weights & Biases', './asset_files/wandb.png']
]

const sites = [
  ['Github', './asset_files/github.png', 'https://github.com/AbdulmohsenA'],
  ['LinkedIn', './asset_files/linkedin.png', 'https://www.linkedin.com/in/abdulmohsen-abanmy/']
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



