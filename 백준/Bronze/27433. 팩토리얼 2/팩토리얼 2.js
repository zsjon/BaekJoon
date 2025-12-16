let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
function fact(n){
    if(n <= 1) return 1;
    return n * fact(n - 1);
}
console.log(fact(n));