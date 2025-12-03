function solution(s) {
    var answer = [0, 0];
    while(s !== '1'){
        answer[0]++;
        answer[1] += s.split('').filter((x) => x === '0').length;
        s = [...s].filter((x) => x === '1').join('').length.toString(2);
    }
    return answer;
}