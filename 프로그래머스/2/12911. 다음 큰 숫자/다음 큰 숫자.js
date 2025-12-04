function solution(n) {
    //1. 2진수로 바꾼 n에서 1의 개수 세기
    let n1 = n.toString(2).split('').filter((e) => e === '1').length;
    //2. n을 1씩 ++하면서 toString(2) 상황에서 1 개수가 같으면 정답
    while(n != n1){
        n++;
        if(n1 === n.toString(2).split('').filter((e) => e === '1').length) break;
    }
    return n;
}