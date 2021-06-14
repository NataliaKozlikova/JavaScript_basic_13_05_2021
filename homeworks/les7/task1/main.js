'use strict'

const $products = document.querySelector('#products');
const $basketOut = document.querySelector('#basketOut');
const $popup = document.querySelector('#popup');
const $showPopupBtn = document.querySelector('#showPopupBtn');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $body = document.querySelector('body');
const $basketList = document.querySelector('#basketList');

let products = [];
let cart = [];

function getIDCounter(params) {
    let lastID = 1;

    return function () {
        return lastID++
    }
}

const idCounter = getIDCounter();
const cartIdCounter = getIDCounter();

function Product(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = idCounter();
}

function ProductCart({ title, price }) {
    this.id = cartIdCounter();
    this.title = title;
    this.price = price;
}

function drawProducts() {
    for (let product of products) {
        drawProductCart(product);
    }
}

function drawProductCart({ title, price, img, id }) {
    const html = `<div class="product-card">
        <img src="${img}" class="img-card">
        <h3>${title}</h3>
        <p class="price">${price}р</p>
        <button data-id="${id}" class="button">В корзину</button>
    </div>`;

    $products.insertAdjacentHTML('beforeend', html);
}

function drawCartItem({ title, price, id }) {
    const html = `<div class="cartItem">
        <h2>${title}</h2>
        <p class="price">${price}р</p>
        <button data-id="${id}">Удалить</button>
    </div>`;

    $basketList.insertAdjacentHTML('beforeend', html);
}

function drawCart() {
    $basketOut.textContent = '';
    if (cart.length > 0) {
        $basketOut.insertAdjacentHTML('beforeend', `<p>В корзине ${cart.length} товара(ов) на ${getCartPrice()} рублей`);
    } else {
        $basketOut.insertAdjacentHTML('beforeend', `<p>Корзина пуста</p>`);
    }

    $basketList.textContent = '';
    cart.forEach(function (product) {
        drawCartItem(product);
    })
}

function addToCart(id) {
    const product = products.find(function (product) {
        return product.id === id;
    });

    cart.push(new ProductCart(product))
}

function removeFromCart(id) {
    const productIndex = cart.findIndex(function (product) {
        return product.id === id;
    });
    cart.splice(productIndex, 1);
}

function getCartPrice() {
    return cart.reduce(function (acc, product) {
        return acc + product.price;
    }, 0)
}

function fetchProducts() {
    products = [
        new Product('Хлеб "Бородинский"', 55, 'img/1.jpg'),
        new Product('Яйцо "Окское"', 100, 'img/2.jpg'),
        new Product('Пиво "Балтика"', 55, 'img/3.jpg'),
    ]
}

function showPopup() {
    $popup.style.display = 'block';
    $basketPopup.style.display = 'flex';
    $adressPopup.style.display = 'none';
    $commentsPopup.style.display = 'none';
}

function closePopup(e) {
    if (e.type === 'click' || e.key === 'Escape') {
        $popup.style.display = 'none';
    }
}

$showPopupBtn.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', closePopup);

document.addEventListener('keydown', closePopup);

$products.addEventListener('click', function (e) {
    addToCart(Number(e.target.getAttribute('data-id')));
    drawCart();
})

$basketList.addEventListener('click', function (e) {
    removeFromCart(Number(e.target.getAttribute('data-id')));
    drawCart();
})

fetchProducts();
drawProducts();
drawCart();

const $basketPopup = document.querySelector('#basketPopup');
const $adressPopup = document.querySelector('#adressPopup');
const $commentsPopup = document.querySelector('#commentsPopup');
const $basketRollupBtn = document.querySelector('#basketRollupBtn');
const $adressRollupBtn = document.querySelector('#adressRollupBtn');

$basketRollupBtn.addEventListener('click', toggle);
$adressRollupBtn.addEventListener('click', toggleNext);

function toggle(e) {
    if (e.type === 'click') {
        $basketPopup.style.display = 'none';
        $adressPopup.style.display = 'flex';
    }
}

function toggleNext(e) {
    if (e.type === 'click') {
        $adressPopup.style.display = 'none';
        $commentsPopup.style.display = 'flex';
    }
}
