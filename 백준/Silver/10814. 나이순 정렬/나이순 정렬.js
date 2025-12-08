const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);
let arr = [];
for(let i = 1; i <= num; i++){
    arr.push([...input[i].split(' '), i]);
}
arr.sort((a, b) => {
    if(a[0] !== b[0]) return Number(a[0]) - Number(b[0]);
    else return a[2] - b[2];
});
let answer = '';
for(let i = 0; i < num; i++){
    answer += `${arr[i][0]} ${arr[i][1]}\n`;
}
console.log(answer);