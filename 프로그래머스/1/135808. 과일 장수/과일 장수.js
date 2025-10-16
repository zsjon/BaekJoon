function solution(k, m, score) {
    let total = 0;
    score.sort((a,b) => b - a);
    let box = Math.floor(score.length / m);
    for(let i = 1; i <= box; i++){
        total += score[m * i - 1] * m;
    }
    return total;
}