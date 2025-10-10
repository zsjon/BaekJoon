const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [a, b, c, d, e, f] = input.split(' ').map(Number);
let x = 0;
let y = 0;
for(let i = -999; i < 1000; i++){
    for(let j = -999; j < 1000; j++){
        if(a*i + b*j === c && d*i + e*j === f){
            console.log(`${i} ${j}`);
        }
    }
}
