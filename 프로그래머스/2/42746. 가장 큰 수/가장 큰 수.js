function solution(numbers) {
    //1. 각 수를 문자로 변환
    //2. 두 수를 합쳐서 더 큰 순서대로 정렬
    //3. 비교할 때 모든 수가 0인 경우는 제외
    var answer = '';
    answer = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('');
    return answer[0] === "0" ? "0" : answer;
}