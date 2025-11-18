function solution(n) {
    var answer = 0;
    if(Number.isInteger(Math.sqrt(n))){
        let x = Math.sqrt(n);
        answer = Math.pow(x+1, 2);
    }
    else answer = -1
    return answer;
}