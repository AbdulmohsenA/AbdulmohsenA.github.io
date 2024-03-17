export function cardStager(section, cardSet) {
  const cardsContainer = document.getElementById(section).getElementsByClassName('container')[0];
  cardSet.forEach((cardInfo, index) => {
    const card = document.createElement('div');
    card.className = 'card hidden';
    card.innerHTML = cardInfo.length > 2
      ? `<a href="${cardInfo[2]}" target="_blank"><img src="${cardInfo[1]}"></a>`
      : `<img src="${cardInfo[1]}">`;
    card.style.transitionDelay = `${200 * (index + 1)}ms`;

    const name = document.createElement('span');
    name.className = 'name hidden';
    name.textContent = cardInfo[0];
    card.appendChild(name)

    cardsContainer.appendChild(card);
  });
}
