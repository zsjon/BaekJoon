const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let m = [];
for(let i = 0; i < n; i++){
    m.push(Number(input[i+1]));
}
for(let i = 0; i < n - 1; i++){
    for(let j = 0; j <= n - i - 1; j++){
        if(m[j]>m[j+1]){
            const temp = m[j];
            m[j] = m[j+1];
            m[j+1] = temp;
        }
    }
}
for(let i = 0; i < n; i++){
    console.log(m[i]);
}