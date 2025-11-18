function solution(d, budget) {
    for(let i = 0; i < d.length; i++){
        for(let j = 0; j < d.length - 1; j++){
            if(d[j] > d[j+1]){
                let temp = d[j];
                d[j] = d[j+1];
                d[j+1] = temp;
            }
        }
    }
    var cnt = 0;
    let sum = 0;
    for(i in d){
        sum += d[i];
        if(sum > budget) break;
        cnt++;
    }
    return cnt;
}