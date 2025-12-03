function solution(s) {
    s = s.split(' ').map(Number);
    return Math.min(...s).toString().concat(' ', Math.max(...s).toString());
}