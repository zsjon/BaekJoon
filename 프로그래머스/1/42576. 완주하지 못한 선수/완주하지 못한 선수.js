function solution(participant, completion) {
    participant.sort(); //각각 알파벳순 정렬하기
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){ //이미 정렬했으니까, 중간에 없는게 하나라도 있으면 그게 정답
            return participant[i];
        }
    }    
    
}