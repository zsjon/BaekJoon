function solution(numbers) {
    var answer = [];
    for(i = 0; i < numbers.length; i++){
        for(j = i + 1; j < numbers.length; j++){
            if(answer.includes(numbers[i]+numbers[j])){
                continue;
            }
            else answer.push(numbers[i]+numbers[j]);
        }
    }
    for(let i = 0; i <= answer.length; i++){
        for(let j = 0; j <= answer.length - 1; j++){
            if(answer[j] > answer[j + 1]){
                let temp = answer[j];
                answer[j] = answer[j + 1];
                answer[j + 1] = temp;
            }
        }
    }
    return answer;
}