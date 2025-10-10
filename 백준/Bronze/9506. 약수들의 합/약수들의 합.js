const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let line of input){
    const n = Number(line);
    let arr = [];
    let sum = 0;
    if(n===-1) break;
    for(let j = 1; j < n; j++){
        if(n%j===0){
            arr.push(j);
            sum += j;
        }
    }
    if(sum===n){
        console.log(`${n} = ${arr.join(' + ')}`);
    }
    else console.log(`${n} is NOT perfect.`);
}