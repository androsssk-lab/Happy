const burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger_menu');
const burger_items = document.querySelectorAll('.burger_list-items');

burger.addEventListener('click', () => {
    burger_menu.classList.toggle('active');
});

burger_items.forEach(item => {
    item.addEventListener('click', () => {
        burger_menu.classList.remove('active');
    });
});