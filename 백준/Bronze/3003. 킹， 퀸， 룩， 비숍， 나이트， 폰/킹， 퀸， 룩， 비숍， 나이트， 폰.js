const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let arr = ['1', '1', '2', '2', '2', '8'];
let sol = [];
for(let i = 0; i < 6; i++){
    sol[i] = parseInt(arr[i]) - parseInt(input[i]);
}
console.log(sol.join(' '));