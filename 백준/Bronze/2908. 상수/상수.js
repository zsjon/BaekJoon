const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0].split('').reverse().join(''));
const b = parseInt(input[1].split('').reverse().join(''));
console.log(Math.max(a, b));