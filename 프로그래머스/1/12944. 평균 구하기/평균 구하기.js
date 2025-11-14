function solution(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    const avg = sum/arr.length;
    
    return avg;
}