const category = document.getElementById('category');
const groups = document.getElementById('groups');
const filterBtn = document.querySelector('.filter_button');

// const fetchFunc = (url, opchens) => fetch(url, opchens).then((data) => data.json());
filterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (category.value && groups.value) {
    fetchFunc(`/groups/${groups.value}`);
  } else if (category.value) {
    fetchFunc(`/category/${category.value}`);
  } else if (groups.value) {
    fetchFunc(`/groups/${groups.value}`);
  }
});
