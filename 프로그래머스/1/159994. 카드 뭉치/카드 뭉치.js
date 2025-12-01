function solution(cards1, cards2, goal) {
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < goal.length; i++){
        if(cards1[count1] === goal[i]) {
            count1++;
        } else if(cards2[count2] === goal[i]){
            count2++;
        } else return "No";
    }
    return "Yes";
}