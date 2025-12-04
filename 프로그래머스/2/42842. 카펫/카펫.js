function solution(brown, yellow) {
    var answer = [];
    //1. yellow = a * b => brown = (a+2) * (b+2) - (a * b)임
    //2. 가로세로 크기는 (a + 2) * (b + 2)임
    //3. 그렇다면? brown + yellow = 넓이가 성립됨
    //4. 그 상태에서 (a+2)*(b+2)를 찾기만 하면됨 ab + 2a + 2b + 4
    //5. yellow의 약수들인 a와 b를 사용해서 완전탐색 진행
    let s = brown + yellow;
    for(let a = 1; a <= Math.sqrt(yellow); a++){
        if(yellow % a === 0){
            const b = yellow / a;
            if((a+2) * (b+2) === s) answer.push(b+2, a+2);
        }
    }
    return answer;
}