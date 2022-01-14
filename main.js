const menu = [{
        id: 1,
        title: "spiced coffe",
        category: "Coffee",
        price: 10,
        img: "./img/coffee_1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 2,
        title: "machiatto",
        category: "Coffee",
        price: 12,
        img: "./img/coffee_2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 3,
        title: "turkish coffe",
        category: "Coffee",
        price: 14,
        img: "./img/coffee_3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 4,
        title: "brownie",
        category: "Sweets",
        price: 13,
        img: "./img/sweets_1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 5,
        title: "tiramisu",
        category: "Sweets",
        price: 15,
        img: "./img/sweets_2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 6,
        title: "sweety",
        category: "Sweets",
        price: 13,
        img: "./img/sweets_3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 7,
        title: "Mr.Poppy",
        category: "desert",
        price: 13,
        img: "./img/sweets_4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    },
    {
        id: 8,
        title: "chocolata",
        category: "desert",
        price: 13,
        img: "./img/sweets_5.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure deleniti obcaecati voluptates exercitationem quo ipsa voluptate quisquam!"
    }


];

const main = document.querySelector('.section_main');
const container = document.querySelector('.btn-container')


// load items from const menu 
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuBtns();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
                <img src="${item.img}" class ="photo" alt="${item.title}">
                <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class = "price ">$ ${item.price}</h4>
                </header>
                 <p class = "item-text">${item.desc}
            </p>
        </div>

        </article>`;

    });
    displayMenu = displayMenu.join("");
    main.innerHTML = displayMenu;

};

function displayMenuBtns() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    }, ['all']);
    const categoryBtns = categories.map(function (category) {
        return `<button class = "filter-btn"
        type = "button"
        data-id = ${category}> ${category}</button>`;

    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtn = document.querySelectorAll('.filter-btn')

    // filter items

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category == category) {
                    return menuItem;
                }
            });
            if (category == 'all') {
                return displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });

    });



}
