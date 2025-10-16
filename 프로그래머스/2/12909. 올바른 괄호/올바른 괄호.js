function solution(s){
    let answer = true;
    let arr = [];
    for(let ch of s){
        if(ch === '('){
            arr.push(ch);
        }
        else if(ch === ')'){
            if(arr.length === 0){
                return false;
            }
            else arr.pop();
        }
    }
    console.log(answer);
    return arr.length === 0;
}