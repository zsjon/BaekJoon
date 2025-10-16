const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const in1 = input[0].split(' ');
const in2 = input[1].split(' ');
const n = Number(in1[0]);
const k = Number(in1[1]);
const x = [];
for(let i = 0; i < n; i++){
    x.push(Number(in2[i]));
}
for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i - 1; j++){
        if(x[j] < x[j + 1]){
            let temp = x[j];
            x[j] = x[j + 1];
            x[j + 1] = temp;
        }
    }
}
console.log(x[k-1]);