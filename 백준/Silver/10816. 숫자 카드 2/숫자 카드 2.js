let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let m = Number(input[2]);
let arr1 = input[1].split(' ').map(Number);
let arr2 = input[3].split(' ').map(Number);
let cnt = new Map();
let result = [];
for(let x of arr1){
    cnt.set(x, (cnt.get(x) || 0) + 1);
}
for(let x of arr2){
    result.push(cnt.get(x) || 0);
}
console.log(result.join(' '));