function solution(people, limit) {
    var count = 0;
    //1. 그리디 사용, people을 내림차순으로 우선 정렬
    //2. people[맨 앞 사람] + people[맨 끝 사람] <= limit이면 배열에서 제거, 아니면 count++ 후 i만 pop
    //3. 모든 people이 다 탈 때까지 반복
    //4. 이때, 기존 greedy처럼 shift()를 사용할 경우 시간복잡도가 O(n^2)가 되어버림.
    //5. 따라서 shift() 대신, 배열을 인덱스로 접근하여 효율성을 강화
    people = people.sort((a, b) => b - a);
    let i = 0;
    let j = people.length - 1;
    while(i <= j){
        if(people[i] + people[j] <= limit){
            j--;
        }
        i++;
        count++;
    }
    return count;
}