const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let sumList = [];
for(let i = 0; i < a; i++){
    const first = arr[i];
    for(let j = i+1; j < a; j++){
        const second = arr[j];
        for(let k = j+1; k < a; k++){
            const third = arr[k];
            const sum = first + second + third;
            if(sum <= b){
                sumList.push(sum);
            }
            else continue;
        }
    }
}
const answer = Math.max(...sumList);
console.log(answer);