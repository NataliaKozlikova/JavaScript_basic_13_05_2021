'use strict'

const basketOut = document.querySelector('#basketOut');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const buttonClean = document.querySelector('#button-clean');

class Basket {
    constructor(count) {
        this.count = count;
    }
}

class Product extends Basket {
    constructor(count, name, price) {
        super(count);
        this.name = name;
        this.price = price;
    }
    getFullSum() {
        return this.count * this.price;
    }
}

let basket = [];

function addToCart() {
    if (this == button1) {
        basket.push(new Product(1, 'Хлеб "Бородинский"', 55));
    }
    else if (this == button2) {
        basket.push(new Product(1, 'Яйцо "Окское"', 100));
    }
    else if (this == button3) {
        basket.push(new Product(1, 'Пиво "Балтика"', 80));
    }
    else if (this == buttonClean) {
        basket = [];
    }

    function countBasketPrice(basket) {
        return basket.reduce(function (acc, elem) {
            return acc + elem.getFullSum();
        }, 0);
    }

    if (countBasketPrice(basket) == 0) {
        document.getElementById('basketOut').innerHTML = 'Корзина пуста';
    }
    else {
        document.getElementById('basketOut').innerHTML = 'В корзине: ' + basket.length +
            ' товара(ов) на сумму ' + countBasketPrice(basket) + ' рублей';
        ;
    }
}

addToCart();
button1.addEventListener('click', addToCart);
button2.addEventListener('click', addToCart);
button3.addEventListener('click', addToCart);
buttonClean.addEventListener('click', addToCart);
