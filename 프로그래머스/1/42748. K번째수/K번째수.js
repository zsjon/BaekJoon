function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        let [start, end, k] = commands[i];
        let arr = array.slice(start - 1, end).sort((a, b) => a - b);
        answer.push(arr[k - 1]);
    }
    return answer;
}