function solution(n, lost, reserve) {
    var answer = 0;
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    answer = n - realLost.length;
    for(let i = 0; i < realLost.length; i++){
        if(realReserve.includes(realLost[i] - 1)){
            realReserve.splice(realReserve.indexOf(realLost[i] - 1), 1);
            answer++;
        }
        else if(realReserve.includes(realLost[i] + 1)){
            realReserve.splice(realReserve.indexOf(realLost[i] + 1), 1);
            answer++;
        }
    }
    return answer;
}