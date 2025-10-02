const n = require('fs').readFileSync('/dev/stdin');
for(let i = 1; i < n; i++){
    let blank = ' '.repeat(n-i);
    let star = '*'.repeat(2*i-1);
    console.log(blank+star);
}
for(let j = n; j > 0; j--){
    let blank = ' '.repeat(n-j);
    let star = '*'.repeat(2*j-1);
    console.log(blank+star);
}