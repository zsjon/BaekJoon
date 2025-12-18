let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);
let count = 0;
let result = -1;
function mergeSort(arr, p, r){
    if(p < r){
        let q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        mergeSplit(arr, p, q, r);
    }
}
function mergeSplit(arr, p, q, r){
    let i = p;
    let j = q + 1;
    let t = 0;
    let temp = [];
    while(i <= q && j <= r){
        if(arr[i] <= arr[j]) temp[t++] = arr[i++];
        else temp[t++] = arr[j++];
    }
    while(i <= q){
        temp[t++] = arr[i++];
    }
    while(j <= r){
        temp[t++] = arr[j++];
    }
    i = p;
    t = 0;
    while(i <= r){
        count++;
        if(count === k){
            result = temp[t];
        }
        arr[i++] = temp[t++];
    }
}
mergeSort(a, 0, n - 1);
console.log(result);