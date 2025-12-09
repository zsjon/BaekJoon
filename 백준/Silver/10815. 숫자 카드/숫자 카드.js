let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let m = Number(input[2]);
let arr1 = input[1].split(' ').map(Number);
let arr2 = input[3].split(' ').map(Number);
let cards = new Set(arr1);
console.log(arr2.map((v) => cards.has(v) ? '1' : '0').join(' '));