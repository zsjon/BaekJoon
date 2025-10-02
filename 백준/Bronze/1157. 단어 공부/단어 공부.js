const u = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase().split('');
let cnt = {};
for(let a of u){
    cnt[a] = (cnt[a]||0)+1;
}
let result = '';
let max = 0;
for(const a in cnt){
    if(cnt[a]>max){
        max=cnt[a];
        result = a
    }
    else if(cnt[a]==max){
        result='?';
    }
}
console.log(result);