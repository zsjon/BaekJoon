let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n===1) process.exit(0);
let arr = [];
let i = 2;
while(i<=n){
    if(n%i===0){
        arr.push(i);
        n /= i;
    }
    else i++;
}
console.log(arr.join('\n'));