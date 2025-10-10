const n = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = (BigInt(n) * BigInt(n-1) * BigInt(n-2)) / BigInt(6);
console.log(`${result}`);
console.log(3);