function solution(n) {
    //연속된 자연수들의 합으로 n을 표현할 수 있는 경우의 수 = n의 홀수 약수의 개수
    var count = 0;
    // 1. 위 조건을 고려하지 않고 단순히 연속한 자연수로 표현하는 방법 찾기 => 시간복잡도가 높음
    // for(let i = 1; i <= n; i++){
    //     for(let j = 0; j <= Math.floor(n/2); j++){
    //         if(n === (i * (j + 1)) + (j * (j + 1) / 2)) count++;
    //     }
    // }
    // 2. 위 조건을 고려한 방식 - 전체 약수 중 홀수만 고르기
    for(let i = 1; i <= n; i++){
        if(n % i === 0 && i % 2 === 1) count++;
    }
    return count;
}