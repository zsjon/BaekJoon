function solution(N, stages) {
    var answer = [];
    let people = stages.length;
    for(let i = 1; i <= N; i++){ //스테이지별 미클리어 인원 구하기
        let fail = stages.filter((el) => el === i); //스테이지별 미클리어 인원 배열
        let per = fail.length / people; //스테이지별 미클리어 비율
        answer.push({stage: i, failed: per}); //객체로 배열에 저장
        people -= fail.length; //전체 인원에서 미클리어 인원 차감
    }
    
    return answer.sort((a, b) => b.failed - a.failed).map(el=>el.stage); //스테이지별 미클리어 비율만 내림차순 정렬
}