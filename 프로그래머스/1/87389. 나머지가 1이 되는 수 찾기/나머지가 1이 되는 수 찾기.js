function solution(n) {
    var x = 0; 
    for(let i = 0; i <= n; i++){
        if(n%i===1){
            x = i;
            break;
        }
    }
    return x;
}