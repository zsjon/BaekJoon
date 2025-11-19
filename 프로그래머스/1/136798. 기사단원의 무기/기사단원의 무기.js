function solution(number, limit, power) {
    var answer = 0;
    let numArr = [];
    for(let i = 1; i <= number; i++){ //number별 배열
        let cnt = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){ //제곱근을 통한 약수 구하기
            if(i%j===0) {
                if(Math.pow(j, 2) === i){
                    cnt++;
                }
                else cnt += 2;
            }
        }
        if(cnt <= limit) { //limit 초과 확인
            answer += cnt;
        }
        else answer += power;

    }
        
    return answer;
}