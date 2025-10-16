const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];
for(let i = 0; i < 5; i++){
    arr.push(Number(input[i]));
}
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5 - i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr.reduce((prev, curr)=>prev+curr)/5);
console.log(arr[2]);