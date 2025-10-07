const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const A = input.slice(1, n+1).map(line => line.split(' ').map(Number));
const B = input.slice(n + 1, n * 2 + 1).map(line => line.split(' ').map(Number));
let total = [];
for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
        row.push(A[i][j] + B[i][j]);
    }
    total.push(row.join(' '));
}
console.log(total.join('\n'));