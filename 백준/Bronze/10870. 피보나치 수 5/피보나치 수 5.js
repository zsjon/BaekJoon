let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
function fibonacci(n){
    if(n === 0) return 0;
    else if(n <= 2 && n >= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(n));