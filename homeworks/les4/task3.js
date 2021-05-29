/* 3. *Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине
актуальна не только для корзины, но и для каталога. Стремиться нужно к тому,
чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
но в разных местах давал возможность вызывать разные методы.
*/

'use strict'

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

console.log(basket);

function countBasketPrice(basket) {
    return basket.reduce(function (acc, elem) {
        return acc + elem.getFullSum();
    }, 0);
}

console.log(`Итого: ${countBasketPrice(basket)}`);

// [
//   Product { count: 3, name: 'Bread', price: 30 },
//   Product { count: 2, name: 'Bear', price: 60 },
//   Product { count: 1, name: 'Eggs', price: 80 }
// ]
// Итого: 290
