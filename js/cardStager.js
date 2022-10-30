function cardStager(section, cardSet) {
    cardsContainer = document.getElementById(section).getElementsByClassName("container")[0]
    console.log(cardsContainer)
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

const languages = [
    ["Python", "./logos/Python-logo.png"],
    ["JS", "./logos/JavaScript-logo.png"],
    ["Java", "./logos/java-logo.png"],
    ["SQL", "./logos/mysql.png"]]
  
  const sites = [
    ["CV", "./logos/cv.png", ""],
    ["Github", "./logos/git.png", "https://github.com/AbdulmohsenA"],
    ["LinkedIn", "./logos/linin.png", "https://linkedin.com/"]]
  
  cardStager("languages", languages)
  cardStager("related", sites)