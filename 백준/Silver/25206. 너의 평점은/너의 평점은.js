const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const score = {
    "A+":4.5, "A0":4.0, "B+":3.5, "B0":3.0, "C+":2.5, "C0":2.0, "D+":1.5, "D0":1.0, "F":0.0
};
let total = 0;
let grade = 0;
for(let i = 0; i < 20; i++){
    let sub = input[i].split(' ');
    if(sub[2] !== "P"){
        total += parseFloat(sub[1]) * score[sub[2]];
        grade += parseFloat(sub[1]) ;
    }
}
console.log(total/grade);