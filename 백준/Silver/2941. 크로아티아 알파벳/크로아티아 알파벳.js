let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for(let i = 0; i < arr.length; i++){
    if(input.includes(arr[i])){
        input = input.replaceAll(arr[i], 'a');
    }
}
console.log(input.length);