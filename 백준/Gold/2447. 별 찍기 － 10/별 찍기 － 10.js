let n = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = '';
function star(i, j){
    while(i > 0 || j > 0){
        if(i % 3 === 1 && j % 3 === 1){
            return ' ';
        }
        i = Math.floor(i / 3);
        j = Math.floor(j / 3);
    }
    return '*';
}
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        result += star(i, j);
    }
    result += '\n';
}
console.log(result);