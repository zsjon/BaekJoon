const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a1,a0] = input[0].split(' ').map(BigInt);
const c = BigInt(input[1]);
const n = BigInt(input[2]);
let fn = a1 * n + a0;
let gn = c * n;
if(fn <= gn && a1 <= c){
    console.log(1);
}
else console.log(0);