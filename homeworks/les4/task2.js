/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов.
Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

'use strict'

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let basket = [];

basket.push(new Product('Bread', 30));
basket.push(new Product('Bear', 60));
basket.push(new Product('Eggs', 80));

console.log(basket);

function countBasketPrice(basket) {
    return basket.reduce(function (acc, elem) {
        return acc + elem.price;
    }, 0);
}

console.log(`Итого: ${countBasketPrice(basket)}`);

// [
//     Product { name: 'Bread', price: 30 },
//     Product { name: 'Bear', price: 60 },
//     Product { name: 'Eggs', price: 80 }
//   ]
//   Итого: 170
