/* eslint-disable no-undef */
const category = document.getElementById('category');
const groups = document.getElementById('groups');
const filterBtn = document.querySelector('.filter_button');
const searchBtn = document.querySelector('.search_submit');
const searchInput = document.querySelector('.search_input');

fetchFunc('/Emojis').then((res) => createCard(res));

filterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (category.value && groups.value) {
    fetchFunc(`/groups/${groups.value}`)
      .then(createCard);
  } else if (category.value) {
    fetchFunc(`/category/${category.value}`)
      .then(createCard);
  } else if (groups.value) {
    fetchFunc(`/groups/${groups.value}`)
      .then(createCard);
  } else {
    fetchFunc('/Emojis').then((res) => createCard(res));
  }
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchFunc(`/Emojis/${searchInput.value}`)
    .then((res) => {
      if (res.length < 1) {
        const notfound = [{
          category: 'sorry this Emojy is not found',
          htmlCode: ['&#x1F640;'],
          name: ' not found ',
        }];
        return createCard(notfound);
      }
      return createCard(res);
    });
});
