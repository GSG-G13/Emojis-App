const cardsContainer = document.querySelector('.card_container');

const createCard= (data)=>{
    cardsContainer.textContent = "";
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');

        const emoji= document.createElement('h2');
        emoji.classList.add('emoji');
        emoji.innerHTML = element.htmlCode[0];

        const name = document.createElement('h3');  
        name.classList.add('name');
        name.textContent = element.name;

        const categoryName = document.createElement('h4');
        categoryName.classList.add('category');
        categoryName.textContent = element.category;

        const group = document.createElement('h4');
        group.classList.add('group');
        group.textContent = element.group;

        card.append(emoji,name,categoryName,group);

        cardsContainer.append(card);
    });
}