"use strict";
let x = 123;
let suma = 0,multi = 1;
for (let i = 0; i < 3; i++) {
    m *= x % 10;
    s += x % 10;
    x /= 10;
    }
console.log("Сумма: " + suma);
console.log("Произведение: " + multi);
