function solution(answers) {
    var result = [];
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt = [0, 0 ,0];
    for(let i = 0; i < answers.length; i++){
        if(a[i%a.length] === answers[i]) cnt[0]++;
        if (b[i%b.length] === answers[i]) cnt[1]++;
        if (c[i%c.length] === answers[i]) cnt[2]++;
    }
    
    let top = Math.max(...cnt);
    for(let i = 0; i < cnt.length; i++){
        if(cnt[i] == top) result.push(i+1);
    }
    
    return result;
}