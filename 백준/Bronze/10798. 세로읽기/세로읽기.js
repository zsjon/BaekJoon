const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(line => line.split(''));
const maxLen = Math.max(...arr.map(v => v.length));
const result = [];
for(let i = 0; i < maxLen; i++){
    for(let j = 0; j < 5; j++){
        if(arr[j][i]){
            result.push(arr[j][i]);
        }
    }
}
console.log(result.join(''));