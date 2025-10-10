const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ');
let cnt = 0;
for(let i = 0; i < arr.length; i++){
    let a = Number(arr[i]);
    let num = 0;
    for(let j = 1; j <= a; j++){
        if(a%j===0){
            num++;
        }
    }
    if(num===2) cnt++;
}
console.log(cnt);