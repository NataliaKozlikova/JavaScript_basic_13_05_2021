'use strict'

const basketOut = document.querySelector('#basketOut');

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

basket.push(new Product(3, 'Bread', 30));
basket.push(new Product(2, 'Bear', 60));
basket.push(new Product(1, 'Eggs', 80));

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
