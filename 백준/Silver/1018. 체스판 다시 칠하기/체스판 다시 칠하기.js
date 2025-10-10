const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const board = input.slice(1);
const chessPattern1 = [
  'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW',
  'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'
];
const chessPattern2 = [
  'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB',
  'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'
];
function calPaint(board, pattern, x, y){
    let cnt = 0;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(board[x+i][y+j] !== pattern[i][j]){
                cnt++;
            }
        }
    }
    return cnt;
}
let minPaint = 64;
for(let i = 0; i <= n - 8; i++){
    for(let j = 0; j <= m - 8; j++){
        const p1 = calPaint(board, chessPattern1, i, j);
        const p2 = calPaint(board, chessPattern2, i, j);
        minPaint = Math.min(minPaint, p1, p2);
    }
}
console.log(minPaint);