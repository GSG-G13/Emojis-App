const category = document.getElementById('category');
const groups = document.getElementById('groups');
const filterBtn = document.querySelector('.filter_button');
const searchBtn = document.querySelector('.search_submit');
const searchForm = document.querySelector('.searchForm');
const searchInput = document.querySelector('.search_input');

fetchFunc('/Emojis').then(res => createCard(res));


filterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (category.value && groups.value) {
    fetchFunc(`/groups/${groups.value}`)
      .then(console.log);
  } else if (category.value) {
    fetchFunc(`/category/${category.value}`)
      .then(console.log);
  } else if (groups.value) {
    fetchFunc(`/groups/${groups.value}`)
      .then(console.log);
  }
});

searchBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  fetchFunc(`/Emojis/${searchInput.value}`)
  .then(res => createCard(res));
  // .then(console.log);
});