const cardsContainer = document.querySelector('.card_container');

// eslint-disable-next-line no-unused-vars
const createCard = (data) => {
  cardsContainer.textContent = '';
  data.forEach((element) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    // eslint-disable-next-line prefer-destructuring
    emoji.innerHTML = element.htmlCode[0];

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = element.name;

    const categoryName = document.createElement('p');
    categoryName.classList.add('category');
    categoryName.textContent = element.category;

    const group = document.createElement('p');
    group.classList.add('group');
    group.textContent = element.group;

    card.append(emoji, name, categoryName, group);

    cardsContainer.append(card);
  });
};
