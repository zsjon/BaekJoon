function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        let x = (arr1[i] | arr2[i]).toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' ');
        answer.push(x);
    }
    return answer;
}