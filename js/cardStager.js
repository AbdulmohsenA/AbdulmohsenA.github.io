 function cardStager(section, cardSet) {
  cardsContainer = document.getElementById(section).getElementsByClassName("container")[0]
  let cards = cardSet
  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("div")
    card.className = "card hidden"
    card.innerHTML = '<img src= "'+ cards[i][1] +'">'
    if (cards[i].length > 2) {
      card.innerHTML = '<a href="' + cards[i][2] + '" target="_blank"><img src= "'+ cards[i][1] +'"></a>'
    }
    card.style.transitionDelay = 200 * (i+1) + "ms"
    cardsContainer.appendChild(card)
  }
}

fetch("./../data/data.json")
  .then((response) => response.json())
  .then((json) => {
    let languages = json["languages"]
    let sites     = json["sites"]
    cardStager("languages", languages)
    cardStager("related", sites)
  })
