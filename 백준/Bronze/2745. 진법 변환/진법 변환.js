const [n, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(parseInt(n, b));