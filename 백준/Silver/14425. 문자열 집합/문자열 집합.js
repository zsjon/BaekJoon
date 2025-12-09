let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let s = [];
for(let i = 1; i <= n; i++){
    s.push(input[i]);
}
s = new Set(s);
let cnt = 0;
for(let i = 1 + n; i < 1 + n + m; i++){
    if(s.has(input[i])) cnt++;
}
console.log(cnt);
