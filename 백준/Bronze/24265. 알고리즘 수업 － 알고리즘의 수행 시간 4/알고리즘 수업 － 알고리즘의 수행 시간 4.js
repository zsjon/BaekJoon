const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let sum = 0;
for(let i = 1; i<= n-1; i++){
    sum += i;
}
console.log(sum);
console.log(2);