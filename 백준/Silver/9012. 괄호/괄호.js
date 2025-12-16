let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
for(let i = 1; i <= n; i++){
    let isTrue = true;
    let arr = [];
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === '(') {
            arr.push('(');
        }
        else if(input[i][j] === ')') {
            if(arr.length === 0){
                isTrue = false;
                break;
            }
            else arr.pop();
        }
        
    }
    isTrue && arr.length === 0 ? console.log('YES') : console.log('NO');
}