function solution(s) {
    var answer = [];
    [...s].map((c, i) => {
        const count = s.slice(0, i).lastIndexOf(c);
        answer.push(count === -1 ? -1 : i - count);
    });
    
    return answer;
}