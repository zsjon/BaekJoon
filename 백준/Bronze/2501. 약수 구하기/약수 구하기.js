const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const n = Number(input[0]);
const k = Number(input[1]);
const arr = [];
for(let i = 1; i <= n; i++){
    if(n%i===0){
        arr.push(i);
    }
}
if(arr.length < k){
    console.log('0');
}
else console.log(arr[k-1]);