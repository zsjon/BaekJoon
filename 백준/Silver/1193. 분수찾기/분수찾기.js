const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let x = Number(input);
let k = 1;
while(x > (k * (k+1) / 2)){
    k++;
}
const prevSum = (k - 1) * k / 2;
const pos = x - prevSum - 1;
let a, b;
if(k % 2 === 0){
    a = 1 + pos;
    b = k - pos;
}
else{
    a = k - pos;
    b = 1 + pos;
}
console.log(`${a}/${b}`)