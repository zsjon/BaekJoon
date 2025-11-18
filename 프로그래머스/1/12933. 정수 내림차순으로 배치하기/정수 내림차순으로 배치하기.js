function solution(n) {
    var answer = 0;
    let arr = String(n).split('');
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] < arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    answer = Number(arr.join(''));
    return answer;
}