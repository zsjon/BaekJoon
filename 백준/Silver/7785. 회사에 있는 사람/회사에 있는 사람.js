let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = new Set();
for(let i = 1; i <= n; i++){
    let [name, status] = input[i].split(' ');
    if(status === 'enter'){
        arr.add(name);
    }
    else arr.delete(name);
}
console.log([...arr].sort().reverse().join('\n'));
