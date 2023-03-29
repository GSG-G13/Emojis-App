/* eslint-disable no-undef */
const category = document.getElementById('category');
const groups = document.getElementById('groups');
const filterBtn = document.querySelector('.filter_button');

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
