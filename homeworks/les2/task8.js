/* 8. С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень. 
*/

'use strict'

function power(val, pow) {
    if (pow == 0) return 1;
    else if (pow == 1) return val;
    else
        return val * power(val, pow - 1);
}

console.log(power(2, 10)); // 1024
console.log(2 ** 10); // 1024 проверка