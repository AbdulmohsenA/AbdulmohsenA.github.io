export function cardStager (section, cardSet) {
  const cardsContainer = document.getElementById(section).getElementsByClassName('container')[0]
  for (let i = 0; i < cardSet.length; i++) {
    let card = document.createElement('div')
    card.className = 'card hidden'
    card.innerHTML = '<img src= "'+ cardSet[i][1] + '">'
    if (cardSet[i].length > 2) {
      card.innerHTML = '<a href="' + cardSet[i][2] + '" target="_blank"><img src= "' + cardSet[i][1] + '"></a>'
    }
    card.style.transitionDelay = 200 * (i + 1) + 'ms'
    cardsContainer.appendChild(card)
  }
}
