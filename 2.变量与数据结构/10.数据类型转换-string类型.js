var num1 = 20;
var age = 123;
var isAdmin = true;

console.log(typeof num1); // number
console.log(typeof age); // number
console.log(typeof isAdmin); // boolean

// 1.隐式转换
var message = 'my age is';
var desc = message + age;
console.log(desc); // my name is 18
console.log(typeof desc); // string

// 2.显示转换
console.log(typeof String(num1)); // string
console.log(typeof String(age)); // string
console.log(typeof String(isAdmin)); // string
