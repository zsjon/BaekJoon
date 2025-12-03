function solution(s) {
    s = s.split(' ');
    for(let i = 0; i < s.length; i++){
        let second = s[i].slice(1, s[i].length).toLowerCase();
        let first = s[i].slice(0, 1).toUpperCase();
        s[i] = first.concat('', second);
    }
    return s.join(' ');
}