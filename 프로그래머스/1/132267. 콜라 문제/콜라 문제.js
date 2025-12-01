function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        let k = Math.floor(n/a);
        answer += (k * b);
        n = (k * b) + (n % a);
    }
    return answer;
}