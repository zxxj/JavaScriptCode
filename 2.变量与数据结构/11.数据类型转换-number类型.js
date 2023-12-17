var num1 = '10';
var num2 = '2';

console.log(typeof num1); // string
console.log(typeof num2); // string

// 1.隐式转换
var result = num1 / num2;
console.log(typeof result); // number

// 2.显示转换
console.log(typeof Number(num1)); // number
console.log(typeof Number(num2)); // number

// 其他类型转成数字类型的规则:
console.log('----');
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number('abc123')); // NaN
console.log('              222                 '); // 222
console.log(Number('')); // 0
