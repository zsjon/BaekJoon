let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(" ").map(i => Number(i));
const uniq = [...new Set (arr)].sort((a, b) => a - b);
const map = new Map();
uniq.forEach((v, i) => map.set(v, i));
const result = arr.map(v => map.get(v));
console.log(result.join(' '));