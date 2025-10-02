const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("");
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < input.length; j++){
        if(arr[i].includes(input[j])){
            sum = sum + (i + 3);
        }
    }
}
console.log(sum);