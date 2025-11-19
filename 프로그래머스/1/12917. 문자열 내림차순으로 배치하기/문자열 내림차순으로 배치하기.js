function solution(s) {
    var answer = [];
    answer = s.split('');
    return answer.sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}