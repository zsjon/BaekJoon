let [n, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const num1 = Number(n);
const num2 = Number(b);
console.log(num1.toString(num2).toUpperCase());