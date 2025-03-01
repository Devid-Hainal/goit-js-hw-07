const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);

categories.forEach(category => {
    const title = category.querySelector("h2");
    title.classList.add("title-category");
    console.log("Category:", title.textContent);
    
    const items = category.querySelectorAll("li");
    items.forEach(item => {
        item.classList.add('items-category');
    });
    console.log("Elements:", items.length);

    const listItem = category.querySelector('ul');
    if (listItem) {
        listItem.classList.add('categories-sublist');
    }
});


