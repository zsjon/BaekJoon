const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 1;
let sum = 1;
while(sum < input){
    sum += 6 * count;
    count++;
}
console.log(count);