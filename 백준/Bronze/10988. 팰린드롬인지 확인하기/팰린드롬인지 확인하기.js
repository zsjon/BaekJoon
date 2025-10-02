const input = require('fs').readFileSync('/dev/stdin').toString().trim();
if(input.length % 2 === 0){
    let half1 = input.substring(0, input.length / 2);
    let half2 = input.substring(input.length / 2, input.length);
    if(half1.split('').reverse().join('') === half2){
        console.log(1);
    }
    else console.log(0);
}
else{
    let half1 = input.substring(0, (input.length - 1) / 2);
    let half2 = input.substring((input.length + 1) / 2, input.length);
    if(half1.split('').reverse().join('') === half2){
        console.log(1);
    }
    else console.log(0);
}