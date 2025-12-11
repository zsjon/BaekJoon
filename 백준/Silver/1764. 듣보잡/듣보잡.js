let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr1 = [];
let arr2 = [];
for(let i = 1; i <= n; i++){
    arr1.push(input[i]);
}
let s1 = new Set(arr1);
for(let i = n + 1; i < n + m + 1; i++){
    arr2.push(input[i]);
}
let s2 = new Set(arr2);
let arr = [];
let cnt = 0;
for(let i of s1){
    if(s2.has(i)){
        cnt++;
        arr.push(i);
    }
}
console.log(cnt);
console.log(arr.sort((a, b) => a.localeCompare(b, 'en')).join('\n'));