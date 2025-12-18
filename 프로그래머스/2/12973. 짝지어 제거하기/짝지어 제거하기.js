function solution(s)
{
    let answer = [];
    //1. 스택을 사용하여 연속된 문자열 찾기. 이때 없으면 0 return, 있으면 그 문자열 제거
    //2. 스택의 길이가 0이 되면 answer = 1 return
    for(let i = 0; i < s.length; i++){
        if(answer.length > 0 && answer[answer.length - 1] === s[i]){
            answer.pop();
        }
        else answer.push(s[i]);
    }
    
    return answer.length === 0 ? 1 : 0;
}