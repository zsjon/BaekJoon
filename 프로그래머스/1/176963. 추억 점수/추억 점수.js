function solution(name, yearning, photo) {
    var answer = [];
    const scoreMap = {};
    name.forEach((n, i) => {scoreMap[n] = yearning[i]});
    for(let i of photo){
        let total = 0;
        for(let j of i){
            if(scoreMap[j]){
                total += scoreMap[j];
            }
        }
        answer.push(total);
    }
    return answer;
}