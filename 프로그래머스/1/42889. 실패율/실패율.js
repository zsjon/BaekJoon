function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++){
        let reach = stages.filter(el=>el>=i).length;
        let curr = stages.filter(el=>el===i).length;
        answer.push([i, curr/reach]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(x => x[0]);
}