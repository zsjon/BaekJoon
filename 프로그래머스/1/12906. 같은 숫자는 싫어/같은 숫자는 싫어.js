function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        arr[i] === arr[i - 1] ? 1 : answer.push(arr[i]);
    }
    
    return answer;
}