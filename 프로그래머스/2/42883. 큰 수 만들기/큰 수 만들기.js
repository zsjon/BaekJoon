function solution(number, k) {
    var arr = [];
    number = number.split('');
    for(let i = 0; i < number.length; i++){
        while(k > 0 && arr[arr.length - 1] < number[i]){
            arr.pop();
            k--;
        }
        arr.push(number[i]);
    }
    arr.splice(arr.length - k, k);
    return arr.join('');
}