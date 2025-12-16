let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let k = Number(input[0]);
let arr = [];
for(let i = 1; i <= k; i++){
    Number(input[i]) !== 0 ? arr.push(input[i]) : arr.pop();
}
let total = 0;
for(let i = 0; i < arr.length; i++){
    total += Number(arr[i]);
}
console.log(total);