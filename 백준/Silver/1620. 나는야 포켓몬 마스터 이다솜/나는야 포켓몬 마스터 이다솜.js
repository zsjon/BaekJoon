let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let nti = new Map();
let itn = new Map();
for(let i = 1; i <= n; i++){
    itn.set(i, input[i]);
    nti.set(input[i], i);
}
let quiz = input.slice(n + 1);
quiz.forEach((v)=>{
    if(isNaN(v)){
        console.log(nti.get(v));
    }
    else console.log(itn.get(+v));
})