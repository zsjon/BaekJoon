const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i = 0; i < input.length; i++){
    const [a, b] = input[i].split(' ').map(Number);
    if(a===0&&b===0) break;
    if(a%b===0){
        console.log('multiple');
    }
    else if(b%a===0){
        console.log('factor');
    }
    else if(a%b!==0 && b%a!==0){console.log('neither');}
}
