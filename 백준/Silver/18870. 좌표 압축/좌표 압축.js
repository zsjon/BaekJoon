let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
function solution(input){
    [n, x] = input;
    x = x.split(' ').map(i => Number(i));
    
    const arr = [];
    const obj = {};
    const set = Array.from(new Set([...x])).sort((a, b) => a - b);
    
    set.forEach((item, idx) => obj[item] = idx);
    
    for(let i = 0; i < x.length; i++){
        arr.push(obj[x[i]]);
    }
    return arr.join(' ');
}
console.log(solution(input));