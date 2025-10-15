const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let cnt = Infinity;
let si = 0;
let sj = 0;
for(let i = 0; i <= n / 5; i++){
    for(let j = 0; j <= n / 3; j++){
        if((i*5)+(j*3) === n){
            if(i + j < cnt){
                cnt = i + j;
                si = i;
                sj = j;
            }
        }
    }
}
if(cnt === Infinity){
    console.log(-1);
}
else console.log(cnt);