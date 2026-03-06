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

const cartBtns = document.querySelectorAll('.cart1, .cart');
const cartMenu = document.querySelector('.cart_menu');

cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartMenu.classList.toggle('active');
    });
});


const addButtons = document.querySelectorAll('.add_to_cart');
const cartItems = document.querySelector('.cart_items');
const cartTotal = document.querySelector('.cart_total');
const emptyText = document.querySelector('.cart_desc');

let total = 0;

addButtons.forEach(button => {

    button.addEventListener('click', function () {

        const originalText = this.textContent;

        this.textContent = "Добавлено";
        this.classList.add("success");

        setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove("success");
        }, 800);


    button.addEventListener('click', () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        // создаём элемент товара
        const item = document.createElement('div');
            item.classList.add('cart_item');

            item.innerHTML = `
                <span>${name} — ${price} грн</span>
                <button class="remove_item">✕</button>
            `;


        cartItems.appendChild(item);

        const removeBtn = item.querySelector('.remove_item');

        removeBtn.addEventListener('click', () => {

            total -= price;
            cartTotal.textContent = `Итого: ${total} грн`;

            item.remove();

            // если корзина пустая
            if (cartItems.children.length === 0) {
            emptyText.style.display = "block";
                }

        });

        
        // обновляем сумму
        total += price;
        cartTotal.textContent = `Итого: ${total} грн`;

        // скрываем текст "пусто"
        if (emptyText) {
            emptyText.style.display = "none";
        }
    });

});

});
