let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];
let result = [];
for(let i = 1; i <= n; i++){
    let [s, x] = input[i].split(' ');
    switch(Number(s)){
        case 1: {
            arr.push(Number(x));
            break;
        }
        case 2: {
            arr.length === 0 ? result.push(-1) : result.push(arr.pop());
            break;
        }
        case 3: {
            result.push(arr.length);
            break;
        }
        case 4: {
            arr.length === 0 ? result.push(1) : result.push(0);
            break;
        }
        case 5: {
            arr.length === 0 ? result.push(-1) : result.push(arr[arr.length - 1]);
            break;
        }
    }
}
console.log(result.join('\n'));