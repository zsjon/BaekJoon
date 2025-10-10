const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const m = Number(input[0]);
const n = Number(input[1]);
let sum = 0;
let arr2 = [];
for(let i = m; i <= n; i++){
    let num = 0;
    for(let j = 1; j <= i; j++){
        if(i%j===0){
            num++;
        }
    }
    if(num===2){
        arr2.push(i);
        sum += i;
    }
}
if(arr2.length===0) console.log(-1);
else{
    console.log(sum);
    console.log(Math.min(...arr2));
}