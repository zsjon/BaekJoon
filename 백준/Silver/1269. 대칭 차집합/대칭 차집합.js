let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr1 = input[1].split(' ').map(Number);
let arr2 = input[2].split(' ').map(Number);
let cnt = 0;
let set1 = new Set([...arr1]);
let set2 = new Set([...arr2]);
for(let x of set1){
    if(!set2.has(x)) cnt++;
}
for(let x of set2){
    if(!set1.has(x)) cnt++;
}
console.log(cnt);