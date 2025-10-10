const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let size = 0;
let paper = Array.from(Array(100),() => Array(100).fill(0));
for(let i = 0; i < n; i++){
    let [x, y] = input[i+1].split(' ').map(Number);
    for(let i = x; i < x+10; i++){
        for(let j = y; j < y+10; j++){
            if(paper[i][j]===1){
                continue;
            }
            paper[i][j] = 1;
            size++;
        }
    }
}
console.log(size);
