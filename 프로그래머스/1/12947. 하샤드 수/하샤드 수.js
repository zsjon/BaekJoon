function solution(x) {
    var answer = true;
    let arr = String(x).split('').map(Number);
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    if(x%sum===0) answer = true;
    else answer = false;
    return answer;
}