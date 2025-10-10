const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let sumList = [];
for(let i = 1; i < n; i++){
    const arr = String(i).split('').map(Number);
    let sum = 0;
    for(let j = 0; j < arr.length; j++){
        sum += arr[j];
    }
    if(n === sum + i){
        sumList.push(i);
    }
}
if(sumList.length===0) console.log(0);
else console.log(Math.min(...sumList));