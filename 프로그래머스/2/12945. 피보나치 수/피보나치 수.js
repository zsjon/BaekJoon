function solution(n) {
    let m = 1234567;
    var answer = 0;
    let pprev = 0;
    let prev = 1;
    for(let i = 1; i < n; i++){
        answer = (pprev % m) + (prev % m);
        pprev = prev;
        prev = answer;
    }
    return answer % m;
}