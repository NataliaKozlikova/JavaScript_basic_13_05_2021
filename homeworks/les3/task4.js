/* 4. Нарисовать пирамиду из 20 рядов с помощью console.log, как показано на рисунке:
*/

let n = 20;
let string = 'x'

for (let i = 1; i <= n; i++) {
    console.log(string);
    string += 'x';
}
