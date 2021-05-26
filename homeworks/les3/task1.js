/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

'use strict'

let i = 0;
let n = 100;
let array = [], result = [];

while (i < n) {
    array.push(true);
    i++;
};

let a = 2;

while (a <= Math.sqrt(n)) {
    if (array[a]) {
        let j = a ** 2;
        while (j <= n) {
            array[j] = false;
            j += a;
        }
    }
    a++;
}

let b = 2;

while (b <= n) {
    if (array[b]) {
        result.push(b);
    }
    b++;
}

console.log(result);

/* [
    2,  3,  5,  7, 11, 13, 17, 19,
    23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89,
    97
  ] */
