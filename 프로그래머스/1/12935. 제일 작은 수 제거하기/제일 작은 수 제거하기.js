function solution(arr) {
    let min = Math.min(...arr);
    if(arr.length <= 1){
        arr[0] = -1;
    }
    const answer = arr.filter(num => num !== min);
    
    return answer;
}