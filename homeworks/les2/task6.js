/* 6.Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return sum(arg1, arg2);
            break;
        case 'вычитание':
            return minus(arg1, arg2);
            break;
        case 'умножение':
            return mult(arg1, arg2);
            break;
        case 'деление':
            return div(arg1, arg2);
            break;
    }
}

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(mathOperation(4, 2, 'сложение')); // 6
console.log(mathOperation(4, 2, 'вычитание')); // 2
console.log(mathOperation(4, 2, 'умножение')); // 8
console.log(mathOperation(4, 2, 'деление')); // 2