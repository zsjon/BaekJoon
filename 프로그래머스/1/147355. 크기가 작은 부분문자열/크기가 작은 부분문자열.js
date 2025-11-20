function solution(t, p) {
    let arr = [];
    for(let i = 0; i < t.length - p.length + 1; i++){
        let n = Number(t.split('').slice(i, i+p.length).join(''));
        n <= Number(p) ? arr.push(n) : 1;
    }
    return arr.length;
}