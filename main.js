import './styles/style.css'

import { cardStager } from './js/cardStager'
import { observer } from './js/observer'
import { displayCursor } from './js/cursor'

document.querySelector('#app').innerHTML = `
  <div>
<section>
  <h1 class = 'hidden'>✋ أهلا، انا عبدالمحسن</h1>
</section>

<section id='projects'>
  <h2 class = 'hidden' data='🛠️'>المشاريع</h2>
  <div class='container'></div>
</section>

<section id='skills'>
  <h2 class = 'hidden' data='💻'>المهارات</h2>
  <div class='container'></div>
</section>

<section id='related'>
  <h2 class='hidden' data='🔗'>مواقع ذات صلة</h2>
  <div class='container'></div>
</section>

<div class='footimg'></div>
  </div>
`

const projects = [
  ['3D Visualiser', './logos/3dVisualiser.png', 'https://abdulmohsena.github.io/Equation3D/'],
  ['Schedule.it', './logos/scheduleit.png', 'https://scheduleit.up.railway.app/en']
]

const skills = [
  ['Python', './logos/Python-logo.png'],
  ['JavaSript', './logos/JavaScript-logo.png'],
  ['Java', './logos/java-logo.png'],
  ['SQL', './logos/mysql.png'],
  ['Docker', './logos/docker.png'],
  ['PyTorch', './logos/pytorch.png']
]

const sites = [
  ['Github', './logos/github.png', 'https://github.com/AbdulmohsenA'],
  ['LinkedIn', './logos/linkedin.png', 'https://www.linkedin.com/in/abdulmohsen-abanmy/'],
  ['Kaggle', './logos/kaggle.png', 'https://www.kaggle.com/abdulmohsena']
]

cardStager('projects', projects)
cardStager('skills', skills)
cardStager('related', sites)

window.onload = e => {
  let hidden = document.querySelectorAll('.hidden')
  hidden.forEach((el) => observer.observe(el))
}

displayCursor()
