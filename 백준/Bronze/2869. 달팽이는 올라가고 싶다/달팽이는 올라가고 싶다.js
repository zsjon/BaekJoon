const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
const v = Number(input[2]);
console.log(Math.ceil((v-a)/(a-b))+1);