const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let cnt = 0;
let num = 666;
while(true){
    if(String(num).includes('666')){
        cnt++;
    }
    if(cnt === n){
        console.log(num);
        break;
    }
    num++;
}