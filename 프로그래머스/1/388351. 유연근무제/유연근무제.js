const safeTime = (time) => {
    let value = time + 10;
    if(value % 100 >= 60) value += 40;
    return value;
}
function solution(schedules, timelogs, startday) {
    let idx = [(13 - startday) % 7 , 7 - startday];
    var answer = Array(schedules.length).fill(true);
    for(let i = 0; i < timelogs.length; i++){
        let safe = safeTime(schedules[i]);
        for(let j = 0; j < 7; j++){
            if(idx.includes(j)) continue;
            if(safe < timelogs[i][j]){
                answer[i] = false;
                break;
            }
        }
    }
    return answer.filter((v) => v).length;
}